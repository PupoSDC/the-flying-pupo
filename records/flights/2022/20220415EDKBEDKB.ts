import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220415EDKBEDKB",
    callsign: "DEFCZ",
    name: "Tour Flight with Lynn",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 3, 15, 11, 40).getTime(),
    arrival: new Date(2022, 3, 15, 13, 10).getTime(),
    singleEnginePistonTime: 90,
    picTime: 90,
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
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
    destination: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
  },
  track: [
    {
      "latitude": 50.771175,
      "longitude": 7.1521,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 288,
      "squawk": "0",
      "timestamp": 1650023238,
      "ems": null
    },
    {
      "latitude": 50.771622,
      "longitude": 7.149873,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 285,
      "squawk": "0",
      "timestamp": 1650023244,
      "ems": null
    },
    {
      "latitude": 50.771778,
      "longitude": 7.148819,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 283,
      "squawk": "0",
      "timestamp": 1650023247,
      "ems": null
    },
    {
      "latitude": 50.771896,
      "longitude": 7.14772,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 280,
      "squawk": "0",
      "timestamp": 1650023250,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.146301,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "0",
      "timestamp": 1650023253,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.145157,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 272,
      "squawk": "0",
      "timestamp": 1650023255,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.143785,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 266,
      "squawk": "0",
      "timestamp": 1650023259,
      "ems": null
    },
    {
      "latitude": 50.771942,
      "longitude": 7.142301,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "0",
      "timestamp": 1650023262,
      "ems": null
    },
    {
      "latitude": 50.7715,
      "longitude": 7.140656,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 242,
      "squawk": "0",
      "timestamp": 1650023265,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.139359,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 237,
      "squawk": "0",
      "timestamp": 1650023268,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.138292,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "0",
      "timestamp": 1650023271,
      "ems": null
    },
    {
      "latitude": 50.769779,
      "longitude": 7.136765,
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
      "heading": 232,
      "squawk": "0",
      "timestamp": 1650023274,
      "ems": null
    },
    {
      "latitude": 50.76915,
      "longitude": 7.135546,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 230,
      "squawk": "0",
      "timestamp": 1650023277,
      "ems": null
    },
    {
      "latitude": 50.768475,
      "longitude": 7.134399,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1650023280,
      "ems": null
    },
    {
      "latitude": 50.767685,
      "longitude": 7.133096,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1650023283,
      "ems": null
    },
    {
      "latitude": 50.767044,
      "longitude": 7.132131,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1650023286,
      "ems": null
    },
    {
      "latitude": 50.766266,
      "longitude": 7.130869,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1650023289,
      "ems": null
    },
    {
      "latitude": 50.76545,
      "longitude": 7.12944,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1650023292,
      "ems": null
    },
    {
      "latitude": 50.764755,
      "longitude": 7.128271,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1650023295,
      "ems": null
    },
    {
      "latitude": 50.764099,
      "longitude": 7.127075,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1650023298,
      "ems": null
    },
    {
      "latitude": 50.763401,
      "longitude": 7.125854,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1650023301,
      "ems": null
    },
    {
      "latitude": 50.762653,
      "longitude": 7.124557,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1650023304,
      "ems": null
    },
    {
      "latitude": 50.761414,
      "longitude": 7.122555,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1650023310,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.119809,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1650023316,
      "ems": null
    },
    {
      "latitude": 50.758186,
      "longitude": 7.117767,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1650023322,
      "ems": null
    },
    {
      "latitude": 50.756557,
      "longitude": 7.115097,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1650023328,
      "ems": null
    },
    {
      "latitude": 50.755581,
      "longitude": 7.113724,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1650023331,
      "ems": null
    },
    {
      "latitude": 50.754787,
      "longitude": 7.112656,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1650023334,
      "ems": null
    },
    {
      "latitude": 50.754089,
      "longitude": 7.11174,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1650023337,
      "ems": null
    },
    {
      "latitude": 50.752319,
      "longitude": 7.109375,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1650023343,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.108307,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1650023346,
      "ems": null
    },
    {
      "latitude": 50.75069,
      "longitude": 7.107239,
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
      "timestamp": 1650023349,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 7.106224,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1650023352,
      "ems": null
    },
    {
      "latitude": 50.749054,
      "longitude": 7.105333,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1650023355,
      "ems": null
    },
    {
      "latitude": 50.747059,
      "longitude": 7.102814,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1650023361,
      "ems": null
    },
    {
      "latitude": 50.745338,
      "longitude": 7.100449,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1650023367,
      "ems": null
    },
    {
      "latitude": 50.743469,
      "longitude": 7.098133,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1650023373,
      "ems": null
    },
    {
      "latitude": 50.741547,
      "longitude": 7.095832,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1650023379,
      "ems": null
    },
    {
      "latitude": 50.740585,
      "longitude": 7.094867,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1650023382,
      "ems": null
    },
    {
      "latitude": 50.739487,
      "longitude": 7.09405,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1650023385,
      "ems": null
    },
    {
      "latitude": 50.738167,
      "longitude": 7.093582,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1650023388,
      "ems": null
    },
    {
      "latitude": 50.736832,
      "longitude": 7.093531,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1650023391,
      "ems": null
    },
    {
      "latitude": 50.735596,
      "longitude": 7.093753,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1650023394,
      "ems": null
    },
    {
      "latitude": 50.734585,
      "longitude": 7.094345,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1650023397,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 7.095238,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1650023400,
      "ems": null
    },
    {
      "latitude": 50.732346,
      "longitude": 7.0965,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1650023403,
      "ems": null
    },
    {
      "latitude": 50.731339,
      "longitude": 7.097836,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1650023406,
      "ems": null
    },
    {
      "latitude": 50.730488,
      "longitude": 7.098923,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1650023409,
      "ems": null
    },
    {
      "latitude": 50.729324,
      "longitude": 7.100508,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1650023412,
      "ems": null
    },
    {
      "latitude": 50.728363,
      "longitude": 7.10177,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1650023415,
      "ems": null
    },
    {
      "latitude": 50.727402,
      "longitude": 7.103106,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1650023418,
      "ems": null
    },
    {
      "latitude": 50.726532,
      "longitude": 7.104517,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1650023421,
      "ems": null
    },
    {
      "latitude": 50.725708,
      "longitude": 7.105853,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1650023424,
      "ems": null
    },
    {
      "latitude": 50.724976,
      "longitude": 7.107635,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1650023427,
      "ems": null
    },
    {
      "latitude": 50.724667,
      "longitude": 7.109222,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1650023430,
      "ems": null
    },
    {
      "latitude": 50.724529,
      "longitude": 7.11113,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1650023433,
      "ems": null
    },
    {
      "latitude": 50.724575,
      "longitude": 7.112579,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1650023436,
      "ems": null
    },
    {
      "latitude": 50.725159,
      "longitude": 7.115281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1650023439,
      "ems": null
    },
    {
      "latitude": 50.72588,
      "longitude": 7.116699,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1650023442,
      "ems": null
    },
    {
      "latitude": 50.726852,
      "longitude": 7.117805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1650023445,
      "ems": null
    },
    {
      "latitude": 50.727951,
      "longitude": 7.118398,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1650023448,
      "ems": null
    },
    {
      "latitude": 50.728912,
      "longitude": 7.118547,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1650023451,
      "ems": null
    },
    {
      "latitude": 50.729965,
      "longitude": 7.118324,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1650023454,
      "ems": null
    },
    {
      "latitude": 50.730953,
      "longitude": 7.117767,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1650023457,
      "ems": null
    },
    {
      "latitude": 50.731705,
      "longitude": 7.11721,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650023460,
      "ems": null
    },
    {
      "latitude": 50.732666,
      "longitude": 7.11632,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1650023463,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 7.115429,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1650023466,
      "ems": null
    },
    {
      "latitude": 50.734398,
      "longitude": 7.114563,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1650023469,
      "ems": null
    },
    {
      "latitude": 50.735229,
      "longitude": 7.113647,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1650023472,
      "ems": null
    },
    {
      "latitude": 50.736027,
      "longitude": 7.112732,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1650023475,
      "ems": null
    },
    {
      "latitude": 50.736877,
      "longitude": 7.111643,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1650023478,
      "ems": null
    },
    {
      "latitude": 50.73761,
      "longitude": 7.110826,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1650023481,
      "ems": null
    },
    {
      "latitude": 50.738525,
      "longitude": 7.109862,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1650023484,
      "ems": null
    },
    {
      "latitude": 50.739304,
      "longitude": 7.108971,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023487,
      "ems": null
    },
    {
      "latitude": 50.740082,
      "longitude": 7.10808,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 323,
      "squawk": "7041",
      "timestamp": 1650023490,
      "ems": null
    },
    {
      "latitude": 50.741547,
      "longitude": 7.106298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "7041",
      "timestamp": 1650023496,
      "ems": null
    },
    {
      "latitude": 50.742264,
      "longitude": 7.105331,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7041",
      "timestamp": 1650023499,
      "ems": null
    },
    {
      "latitude": 50.74292,
      "longitude": 7.104443,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7041",
      "timestamp": 1650023502,
      "ems": null
    },
    {
      "latitude": 50.74371,
      "longitude": 7.103271,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7041",
      "timestamp": 1650023505,
      "ems": null
    },
    {
      "latitude": 50.744385,
      "longitude": 7.102141,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7041",
      "timestamp": 1650023508,
      "ems": null
    },
    {
      "latitude": 50.745106,
      "longitude": 7.101135,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "7041",
      "timestamp": 1650023511,
      "ems": null
    },
    {
      "latitude": 50.746582,
      "longitude": 7.099469,
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
      "heading": 327,
      "squawk": "7041",
      "timestamp": 1650023517,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.097539,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 330,
      "squawk": "7041",
      "timestamp": 1650023523,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.096786,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "7041",
      "timestamp": 1650023526,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.095947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023529,
      "ems": null
    },
    {
      "latitude": 50.751205,
      "longitude": 7.095015,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023532,
      "ems": null
    },
    {
      "latitude": 50.752167,
      "longitude": 7.094124,
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
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023535,
      "ems": null
    },
    {
      "latitude": 50.753067,
      "longitude": 7.093201,
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
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023538,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.092285,
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
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023541,
      "ems": null
    },
    {
      "latitude": 50.75592,
      "longitude": 7.090413,
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
      "heading": 327,
      "squawk": "7041",
      "timestamp": 1650023547,
      "ems": null
    },
    {
      "latitude": 50.757614,
      "longitude": 7.088631,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023553,
      "ems": null
    },
    {
      "latitude": 50.758465,
      "longitude": 7.087631,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 323,
      "squawk": "7041",
      "timestamp": 1650023556,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.086487,
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
      "heading": 323,
      "squawk": "7041",
      "timestamp": 1650023559,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 7.084548,
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
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023565,
      "ems": null
    },
    {
      "latitude": 50.763107,
      "longitude": 7.082693,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023571,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.08107,
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
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650023577,
      "ems": null
    },
    {
      "latitude": 50.766815,
      "longitude": 7.078981,
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
      "heading": 327,
      "squawk": "7041",
      "timestamp": 1650023583,
      "ems": null
    },
    {
      "latitude": 50.768429,
      "longitude": 7.077332,
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
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023589,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.075047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7041",
      "timestamp": 1650023595,
      "ems": null
    },
    {
      "latitude": 50.772198,
      "longitude": 7.072983,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023601,
      "ems": null
    },
    {
      "latitude": 50.774014,
      "longitude": 7.070999,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7041",
      "timestamp": 1650023607,
      "ems": null
    },
    {
      "latitude": 50.775696,
      "longitude": 7.069108,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023613,
      "ems": null
    },
    {
      "latitude": 50.777664,
      "longitude": 7.066881,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023619,
      "ems": null
    },
    {
      "latitude": 50.779266,
      "longitude": 7.0651,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023625,
      "ems": null
    },
    {
      "latitude": 50.781555,
      "longitude": 7.062683,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023631,
      "ems": null
    },
    {
      "latitude": 50.783432,
      "longitude": 7.060572,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 324,
      "squawk": "7041",
      "timestamp": 1650023638,
      "ems": null
    },
    {
      "latitude": 50.7854,
      "longitude": 7.058493,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 326,
      "squawk": "7041",
      "timestamp": 1650023644,
      "ems": null
    },
    {
      "latitude": 50.787373,
      "longitude": 7.056427,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023649,
      "ems": null
    },
    {
      "latitude": 50.788303,
      "longitude": 7.055511,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7041",
      "timestamp": 1650023652,
      "ems": null
    },
    {
      "latitude": 50.789383,
      "longitude": 7.054708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023656,
      "ems": null
    },
    {
      "latitude": 50.790527,
      "longitude": 7.054113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023658,
      "ems": null
    },
    {
      "latitude": 50.791565,
      "longitude": 7.053528,
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
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023662,
      "ems": null
    },
    {
      "latitude": 50.792908,
      "longitude": 7.052777,
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
      "heading": 341,
      "squawk": "7041",
      "timestamp": 1650023665,
      "ems": null
    },
    {
      "latitude": 50.794052,
      "longitude": 7.052184,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023668,
      "ems": null
    },
    {
      "latitude": 50.795147,
      "longitude": 7.051544,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023670,
      "ems": null
    },
    {
      "latitude": 50.796387,
      "longitude": 7.050847,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023674,
      "ems": null
    },
    {
      "latitude": 50.797478,
      "longitude": 7.050247,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023676,
      "ems": null
    },
    {
      "latitude": 50.798767,
      "longitude": 7.049511,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023680,
      "ems": null
    },
    {
      "latitude": 50.79985,
      "longitude": 7.048874,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023683,
      "ems": null
    },
    {
      "latitude": 50.8022,
      "longitude": 7.047507,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023689,
      "ems": null
    },
    {
      "latitude": 50.804459,
      "longitude": 7.046051,
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
      "squawk": "7041",
      "timestamp": 1650023694,
      "ems": null
    },
    {
      "latitude": 50.806412,
      "longitude": 7.044835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023700,
      "ems": null
    },
    {
      "latitude": 50.80888,
      "longitude": 7.043304,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023706,
      "ems": null
    },
    {
      "latitude": 50.811161,
      "longitude": 7.041931,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023713,
      "ems": null
    },
    {
      "latitude": 50.813187,
      "longitude": 7.040751,
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
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650023719,
      "ems": null
    },
    {
      "latitude": 50.815292,
      "longitude": 7.039415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023725,
      "ems": null
    },
    {
      "latitude": 50.817402,
      "longitude": 7.038116,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650023731,
      "ems": null
    },
    {
      "latitude": 50.819496,
      "longitude": 7.036896,
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
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023737,
      "ems": null
    },
    {
      "latitude": 50.821636,
      "longitude": 7.035675,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023743,
      "ems": null
    },
    {
      "latitude": 50.823669,
      "longitude": 7.034516,
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
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023748,
      "ems": null
    },
    {
      "latitude": 50.825912,
      "longitude": 7.032883,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "7041",
      "timestamp": 1650023755,
      "ems": null
    },
    {
      "latitude": 50.827969,
      "longitude": 7.031479,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650023761,
      "ems": null
    },
    {
      "latitude": 50.830078,
      "longitude": 7.030137,
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
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650023767,
      "ems": null
    },
    {
      "latitude": 50.83223,
      "longitude": 7.028726,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650023773,
      "ems": null
    },
    {
      "latitude": 50.834427,
      "longitude": 7.027242,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650023779,
      "ems": null
    },
    {
      "latitude": 50.836761,
      "longitude": 7.025609,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7041",
      "timestamp": 1650023785,
      "ems": null
    },
    {
      "latitude": 50.838867,
      "longitude": 7.024124,
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
      "heading": 334,
      "squawk": "7041",
      "timestamp": 1650023791,
      "ems": null
    },
    {
      "latitude": 50.841049,
      "longitude": 7.022552,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 335,
      "squawk": "7041",
      "timestamp": 1650023797,
      "ems": null
    },
    {
      "latitude": 50.843216,
      "longitude": 7.02108,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023803,
      "ems": null
    },
    {
      "latitude": 50.845139,
      "longitude": 7.019818,
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
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650023809,
      "ems": null
    },
    {
      "latitude": 50.847427,
      "longitude": 7.018356,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023815,
      "ems": null
    },
    {
      "latitude": 50.849625,
      "longitude": 7.016997,
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
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023821,
      "ems": null
    },
    {
      "latitude": 50.85199,
      "longitude": 7.01561,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023827,
      "ems": null
    },
    {
      "latitude": 50.854248,
      "longitude": 7.014325,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023833,
      "ems": null
    },
    {
      "latitude": 50.856537,
      "longitude": 7.012915,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023839,
      "ems": null
    },
    {
      "latitude": 50.858925,
      "longitude": 7.011566,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650023845,
      "ems": null
    },
    {
      "latitude": 50.861023,
      "longitude": 7.010316,
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
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023851,
      "ems": null
    },
    {
      "latitude": 50.863441,
      "longitude": 7.008972,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "7041",
      "timestamp": 1650023857,
      "ems": null
    },
    {
      "latitude": 50.865814,
      "longitude": 7.007599,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650023863,
      "ems": null
    },
    {
      "latitude": 50.866882,
      "longitude": 7.006753,
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
      "heading": 333,
      "squawk": "7041",
      "timestamp": 1650023866,
      "ems": null
    },
    {
      "latitude": 50.867981,
      "longitude": 7.005863,
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
      "heading": 331,
      "squawk": "7041",
      "timestamp": 1650023869,
      "ems": null
    },
    {
      "latitude": 50.869034,
      "longitude": 7.004972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "7041",
      "timestamp": 1650023872,
      "ems": null
    },
    {
      "latitude": 50.87019,
      "longitude": 7.004013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7041",
      "timestamp": 1650023875,
      "ems": null
    },
    {
      "latitude": 50.87117,
      "longitude": 7.00325,
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
      "heading": 333,
      "squawk": "7041",
      "timestamp": 1650023878,
      "ems": null
    },
    {
      "latitude": 50.872284,
      "longitude": 7.002299,
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
      "heading": 332,
      "squawk": "7041",
      "timestamp": 1650023881,
      "ems": null
    },
    {
      "latitude": 50.873383,
      "longitude": 7.001409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7041",
      "timestamp": 1650023884,
      "ems": null
    },
    {
      "latitude": 50.874287,
      "longitude": 7.000732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7041",
      "timestamp": 1650023887,
      "ems": null
    },
    {
      "latitude": 50.875496,
      "longitude": 6.999741,
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
      "heading": 330,
      "squawk": "7041",
      "timestamp": 1650023890,
      "ems": null
    },
    {
      "latitude": 50.877594,
      "longitude": 6.997994,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7041",
      "timestamp": 1650023896,
      "ems": null
    },
    {
      "latitude": 50.879608,
      "longitude": 6.996361,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "7041",
      "timestamp": 1650023902,
      "ems": null
    },
    {
      "latitude": 50.882622,
      "longitude": 6.99379,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7041",
      "timestamp": 1650023910,
      "ems": null
    },
    {
      "latitude": 50.885376,
      "longitude": 6.991239,
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
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023918,
      "ems": null
    },
    {
      "latitude": 50.886765,
      "longitude": 6.989594,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7041",
      "timestamp": 1650023922,
      "ems": null
    },
    {
      "latitude": 50.888115,
      "longitude": 6.988068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7041",
      "timestamp": 1650023926,
      "ems": null
    },
    {
      "latitude": 50.889404,
      "longitude": 6.986488,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7041",
      "timestamp": 1650023930,
      "ems": null
    },
    {
      "latitude": 50.890549,
      "longitude": 6.984781,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 317,
      "squawk": "7041",
      "timestamp": 1650023934,
      "ems": null
    },
    {
      "latitude": 50.891739,
      "longitude": 6.983222,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "7041",
      "timestamp": 1650023938,
      "ems": null
    },
    {
      "latitude": 50.892815,
      "longitude": 6.981659,
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
      "heading": 315,
      "squawk": "7041",
      "timestamp": 1650023942,
      "ems": null
    },
    {
      "latitude": 50.893799,
      "longitude": 6.98003,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 313,
      "squawk": "7041",
      "timestamp": 1650023946,
      "ems": null
    },
    {
      "latitude": 50.894623,
      "longitude": 6.978694,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 312,
      "squawk": "7041",
      "timestamp": 1650023950,
      "ems": null
    },
    {
      "latitude": 50.895905,
      "longitude": 6.976467,
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
      "heading": 312,
      "squawk": "7041",
      "timestamp": 1650023954,
      "ems": null
    },
    {
      "latitude": 50.897053,
      "longitude": 6.974564,
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
      "heading": 314,
      "squawk": "7041",
      "timestamp": 1650023958,
      "ems": null
    },
    {
      "latitude": 50.898773,
      "longitude": 6.972122,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 320,
      "squawk": "7041",
      "timestamp": 1650023966,
      "ems": null
    },
    {
      "latitude": 50.90062,
      "longitude": 6.96986,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650023970,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 6.968672,
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
      "heading": 322,
      "squawk": "7041",
      "timestamp": 1650023974,
      "ems": null
    },
    {
      "latitude": 50.902954,
      "longitude": 6.96704,
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
      "heading": 320,
      "squawk": "7041",
      "timestamp": 1650023978,
      "ems": null
    },
    {
      "latitude": 50.905334,
      "longitude": 6.963624,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7041",
      "timestamp": 1650023986,
      "ems": null
    },
    {
      "latitude": 50.90799,
      "longitude": 6.960136,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7041",
      "timestamp": 1650023994,
      "ems": null
    },
    {
      "latitude": 50.90918,
      "longitude": 6.958503,
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
      "heading": 319,
      "squawk": "7041",
      "timestamp": 1650023998,
      "ems": null
    },
    {
      "latitude": 50.9119,
      "longitude": 6.955643,
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
      "heading": 332,
      "squawk": "7041",
      "timestamp": 1650024005,
      "ems": null
    },
    {
      "latitude": 50.912971,
      "longitude": 6.95488,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650024008,
      "ems": null
    },
    {
      "latitude": 50.914463,
      "longitude": 6.954117,
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
      "heading": 344,
      "squawk": "7041",
      "timestamp": 1650024011,
      "ems": null
    },
    {
      "latitude": 50.915764,
      "longitude": 6.953735,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7041",
      "timestamp": 1650024014,
      "ems": null
    },
    {
      "latitude": 50.917007,
      "longitude": 6.953529,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 354,
      "squawk": "7041",
      "timestamp": 1650024017,
      "ems": null
    },
    {
      "latitude": 50.918106,
      "longitude": 6.953381,
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
      "heading": 356,
      "squawk": "7041",
      "timestamp": 1650024020,
      "ems": null
    },
    {
      "latitude": 50.919724,
      "longitude": 6.953201,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 355,
      "squawk": "7041",
      "timestamp": 1650024023,
      "ems": null
    },
    {
      "latitude": 50.920944,
      "longitude": 6.953084,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 355,
      "squawk": "7041",
      "timestamp": 1650024026,
      "ems": null
    },
    {
      "latitude": 50.922237,
      "longitude": 6.952972,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "7041",
      "timestamp": 1650024029,
      "ems": null
    },
    {
      "latitude": 50.923355,
      "longitude": 6.952744,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "7041",
      "timestamp": 1650024032,
      "ems": null
    },
    {
      "latitude": 50.924519,
      "longitude": 6.952591,
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
      "heading": 352,
      "squawk": "7041",
      "timestamp": 1650024035,
      "ems": null
    },
    {
      "latitude": 50.925705,
      "longitude": 6.952267,
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
      "heading": 350,
      "squawk": "7041",
      "timestamp": 1650024038,
      "ems": null
    },
    {
      "latitude": 50.926849,
      "longitude": 6.95197,
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
      "heading": 350,
      "squawk": "7041",
      "timestamp": 1650024041,
      "ems": null
    },
    {
      "latitude": 50.929047,
      "longitude": 6.951376,
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
      "heading": 348,
      "squawk": "7041",
      "timestamp": 1650024047,
      "ems": null
    },
    {
      "latitude": 50.930283,
      "longitude": 6.951005,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "7041",
      "timestamp": 1650024050,
      "ems": null
    },
    {
      "latitude": 50.93129,
      "longitude": 6.950708,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "7041",
      "timestamp": 1650024053,
      "ems": null
    },
    {
      "latitude": 50.932476,
      "longitude": 6.950226,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "7041",
      "timestamp": 1650024056,
      "ems": null
    },
    {
      "latitude": 50.933716,
      "longitude": 6.949818,
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
      "heading": 347,
      "squawk": "7041",
      "timestamp": 1650024059,
      "ems": null
    },
    {
      "latitude": 50.934853,
      "longitude": 6.949463,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "7041",
      "timestamp": 1650024062,
      "ems": null
    },
    {
      "latitude": 50.937286,
      "longitude": 6.948853,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "7041",
      "timestamp": 1650024068,
      "ems": null
    },
    {
      "latitude": 50.938385,
      "longitude": 6.948704,
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
      "heading": 355,
      "squawk": "7041",
      "timestamp": 1650024071,
      "ems": null
    },
    {
      "latitude": 50.940765,
      "longitude": 6.948407,
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
      "heading": 356,
      "squawk": "7041",
      "timestamp": 1650024077,
      "ems": null
    },
    {
      "latitude": 50.942001,
      "longitude": 6.948407,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7041",
      "timestamp": 1650024080,
      "ems": null
    },
    {
      "latitude": 50.943138,
      "longitude": 6.948776,
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
      "heading": 15,
      "squawk": "7041",
      "timestamp": 1650024083,
      "ems": null
    },
    {
      "latitude": 50.94416,
      "longitude": 6.949387,
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
      "heading": 25,
      "squawk": "7041",
      "timestamp": 1650024086,
      "ems": null
    },
    {
      "latitude": 50.945187,
      "longitude": 6.950378,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "7041",
      "timestamp": 1650024089,
      "ems": null
    },
    {
      "latitude": 50.94603,
      "longitude": 6.951599,
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
      "heading": 44,
      "squawk": "7041",
      "timestamp": 1650024092,
      "ems": null
    },
    {
      "latitude": 50.946815,
      "longitude": 6.953125,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "7041",
      "timestamp": 1650024095,
      "ems": null
    },
    {
      "latitude": 50.947422,
      "longitude": 6.95488,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "7041",
      "timestamp": 1650024098,
      "ems": null
    },
    {
      "latitude": 50.947792,
      "longitude": 6.956787,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7041",
      "timestamp": 1650024101,
      "ems": null
    },
    {
      "latitude": 50.947906,
      "longitude": 6.958948,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "7041",
      "timestamp": 1650024104,
      "ems": null
    },
    {
      "latitude": 50.947723,
      "longitude": 6.961027,
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
      "heading": 100,
      "squawk": "7041",
      "timestamp": 1650024107,
      "ems": null
    },
    {
      "latitude": 50.947586,
      "longitude": 6.961992,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 111,
      "squawk": "7041",
      "timestamp": 1650024110,
      "ems": null
    },
    {
      "latitude": 50.946762,
      "longitude": 6.965109,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 118,
      "squawk": "7041",
      "timestamp": 1650024113,
      "ems": null
    },
    {
      "latitude": 50.945892,
      "longitude": 6.96704,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 125,
      "squawk": "7041",
      "timestamp": 1650024116,
      "ems": null
    },
    {
      "latitude": 50.945206,
      "longitude": 6.968153,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7041",
      "timestamp": 1650024119,
      "ems": null
    },
    {
      "latitude": 50.943924,
      "longitude": 6.969786,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7041",
      "timestamp": 1650024122,
      "ems": null
    },
    {
      "latitude": 50.943512,
      "longitude": 6.970157,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "7041",
      "timestamp": 1650024125,
      "ems": null
    },
    {
      "latitude": 50.941589,
      "longitude": 6.971493,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 161,
      "squawk": "7041",
      "timestamp": 1650024127,
      "ems": null
    },
    {
      "latitude": 50.939926,
      "longitude": 6.972046,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 173,
      "squawk": "7041",
      "timestamp": 1650024131,
      "ems": null
    },
    {
      "latitude": 50.939026,
      "longitude": 6.972087,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7041",
      "timestamp": 1650024133,
      "ems": null
    },
    {
      "latitude": 50.937088,
      "longitude": 6.971817,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "7041",
      "timestamp": 1650024137,
      "ems": null
    },
    {
      "latitude": 50.93573,
      "longitude": 6.971196,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "7041",
      "timestamp": 1650024140,
      "ems": null
    },
    {
      "latitude": 50.934402,
      "longitude": 6.970157,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7041",
      "timestamp": 1650024143,
      "ems": null
    },
    {
      "latitude": 50.933224,
      "longitude": 6.968918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 215,
      "squawk": "7041",
      "timestamp": 1650024146,
      "ems": null
    },
    {
      "latitude": 50.93243,
      "longitude": 6.967926,
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
      "heading": 223,
      "squawk": "7041",
      "timestamp": 1650024149,
      "ems": null
    },
    {
      "latitude": 50.931313,
      "longitude": 6.965942,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 229,
      "squawk": "7041",
      "timestamp": 1650024152,
      "ems": null
    },
    {
      "latitude": 50.930695,
      "longitude": 6.964516,
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
      "heading": 239,
      "squawk": "7041",
      "timestamp": 1650024155,
      "ems": null
    },
    {
      "latitude": 50.930099,
      "longitude": 6.962437,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7041",
      "timestamp": 1650024158,
      "ems": null
    },
    {
      "latitude": 50.929871,
      "longitude": 6.960449,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 262,
      "squawk": "7041",
      "timestamp": 1650024161,
      "ems": null
    },
    {
      "latitude": 50.929825,
      "longitude": 6.958354,
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
      "heading": 273,
      "squawk": "7041",
      "timestamp": 1650024164,
      "ems": null
    },
    {
      "latitude": 50.930012,
      "longitude": 6.956558,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 281,
      "squawk": "7041",
      "timestamp": 1650024167,
      "ems": null
    },
    {
      "latitude": 50.93042,
      "longitude": 6.954791,
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
      "heading": 293,
      "squawk": "7041",
      "timestamp": 1650024170,
      "ems": null
    },
    {
      "latitude": 50.930988,
      "longitude": 6.953125,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 302,
      "squawk": "7041",
      "timestamp": 1650024173,
      "ems": null
    },
    {
      "latitude": 50.931702,
      "longitude": 6.951747,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 314,
      "squawk": "7041",
      "timestamp": 1650024176,
      "ems": null
    },
    {
      "latitude": 50.932571,
      "longitude": 6.95056,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 322,
      "squawk": "7041",
      "timestamp": 1650024179,
      "ems": null
    },
    {
      "latitude": 50.933548,
      "longitude": 6.949692,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 331,
      "squawk": "7041",
      "timestamp": 1650024182,
      "ems": null
    },
    {
      "latitude": 50.93462,
      "longitude": 6.948776,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7041",
      "timestamp": 1650024185,
      "ems": null
    },
    {
      "latitude": 50.935688,
      "longitude": 6.947937,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 334,
      "squawk": "7041",
      "timestamp": 1650024188,
      "ems": null
    },
    {
      "latitude": 50.936783,
      "longitude": 6.947219,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650024191,
      "ems": null
    },
    {
      "latitude": 50.937832,
      "longitude": 6.946716,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "7041",
      "timestamp": 1650024194,
      "ems": null
    },
    {
      "latitude": 50.938889,
      "longitude": 6.946551,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "7041",
      "timestamp": 1650024197,
      "ems": null
    },
    {
      "latitude": 50.939972,
      "longitude": 6.946487,
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
      "heading": 358,
      "squawk": "7041",
      "timestamp": 1650024200,
      "ems": null
    },
    {
      "latitude": 50.940994,
      "longitude": 6.946626,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "7041",
      "timestamp": 1650024203,
      "ems": null
    },
    {
      "latitude": 50.94286,
      "longitude": 6.94725,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 15,
      "squawk": "7041",
      "timestamp": 1650024207,
      "ems": null
    },
    {
      "latitude": 50.943237,
      "longitude": 6.947442,
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
      "heading": 26,
      "squawk": "7041",
      "timestamp": 1650024212,
      "ems": null
    },
    {
      "latitude": 50.945744,
      "longitude": 6.949615,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 36,
      "squawk": "7041",
      "timestamp": 1650024216,
      "ems": null
    },
    {
      "latitude": 50.947002,
      "longitude": 6.951599,
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
      "heading": 49,
      "squawk": "7041",
      "timestamp": 1650024220,
      "ems": null
    },
    {
      "latitude": 50.947655,
      "longitude": 6.953583,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7041",
      "timestamp": 1650024224,
      "ems": null
    },
    {
      "latitude": 50.948044,
      "longitude": 6.956424,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 83,
      "squawk": "7041",
      "timestamp": 1650024228,
      "ems": null
    },
    {
      "latitude": 50.947979,
      "longitude": 6.958313,
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
      "heading": 97,
      "squawk": "7041",
      "timestamp": 1650024230,
      "ems": null
    },
    {
      "latitude": 50.947495,
      "longitude": 6.96021,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 115,
      "squawk": "7041",
      "timestamp": 1650024233,
      "ems": null
    },
    {
      "latitude": 50.946724,
      "longitude": 6.961975,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 130,
      "squawk": "7041",
      "timestamp": 1650024236,
      "ems": null
    },
    {
      "latitude": 50.945709,
      "longitude": 6.963402,
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
      "heading": 144,
      "squawk": "7041",
      "timestamp": 1650024240,
      "ems": null
    },
    {
      "latitude": 50.944611,
      "longitude": 6.964367,
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
      "heading": 153,
      "squawk": "7041",
      "timestamp": 1650024242,
      "ems": null
    },
    {
      "latitude": 50.9431,
      "longitude": 6.965109,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "7041",
      "timestamp": 1650024246,
      "ems": null
    },
    {
      "latitude": 50.941635,
      "longitude": 6.965406,
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
      "heading": 175,
      "squawk": "7041",
      "timestamp": 1650024249,
      "ems": null
    },
    {
      "latitude": 50.940216,
      "longitude": 6.965184,
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
      "heading": 187,
      "squawk": "7041",
      "timestamp": 1650024251,
      "ems": null
    },
    {
      "latitude": 50.93895,
      "longitude": 6.964645,
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
      "heading": 200,
      "squawk": "7041",
      "timestamp": 1650024254,
      "ems": null
    },
    {
      "latitude": 50.937653,
      "longitude": 6.963551,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 215,
      "squawk": "7041",
      "timestamp": 1650024257,
      "ems": null
    },
    {
      "latitude": 50.936691,
      "longitude": 6.96214,
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
      "heading": 227,
      "squawk": "7041",
      "timestamp": 1650024260,
      "ems": null
    },
    {
      "latitude": 50.935959,
      "longitude": 6.960359,
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
      "heading": 239,
      "squawk": "7041",
      "timestamp": 1650024263,
      "ems": null
    },
    {
      "latitude": 50.935505,
      "longitude": 6.958084,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 259,
      "squawk": "7041",
      "timestamp": 1650024267,
      "ems": null
    },
    {
      "latitude": 50.935551,
      "longitude": 6.956253,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "7041",
      "timestamp": 1650024269,
      "ems": null
    },
    {
      "latitude": 50.935875,
      "longitude": 6.954422,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7041",
      "timestamp": 1650024272,
      "ems": null
    },
    {
      "latitude": 50.936462,
      "longitude": 6.952787,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 307,
      "squawk": "7041",
      "timestamp": 1650024275,
      "ems": null
    },
    {
      "latitude": 50.937412,
      "longitude": 6.951447,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7041",
      "timestamp": 1650024279,
      "ems": null
    },
    {
      "latitude": 50.938484,
      "longitude": 6.950607,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7041",
      "timestamp": 1650024282,
      "ems": null
    },
    {
      "latitude": 50.939507,
      "longitude": 6.949844,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 334,
      "squawk": "7041",
      "timestamp": 1650024284,
      "ems": null
    },
    {
      "latitude": 50.940536,
      "longitude": 6.949075,
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
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650024288,
      "ems": null
    },
    {
      "latitude": 50.941833,
      "longitude": 6.948242,
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
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650024291,
      "ems": null
    },
    {
      "latitude": 50.942764,
      "longitude": 6.947556,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "7041",
      "timestamp": 1650024294,
      "ems": null
    },
    {
      "latitude": 50.943878,
      "longitude": 6.946848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650024297,
      "ems": null
    },
    {
      "latitude": 50.944908,
      "longitude": 6.946182,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7041",
      "timestamp": 1650024299,
      "ems": null
    },
    {
      "latitude": 50.94603,
      "longitude": 6.945438,
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
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650024303,
      "ems": null
    },
    {
      "latitude": 50.947094,
      "longitude": 6.944809,
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
      "heading": 337,
      "squawk": "7041",
      "timestamp": 1650024305,
      "ems": null
    },
    {
      "latitude": 50.948212,
      "longitude": 6.944046,
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
      "heading": 339,
      "squawk": "7041",
      "timestamp": 1650024309,
      "ems": null
    },
    {
      "latitude": 50.950287,
      "longitude": 6.942766,
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
      "heading": 335,
      "squawk": "7041",
      "timestamp": 1650024315,
      "ems": null
    },
    {
      "latitude": 50.952164,
      "longitude": 6.941281,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "7041",
      "timestamp": 1650024321,
      "ems": null
    },
    {
      "latitude": 50.954216,
      "longitude": 6.939545,
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
      "heading": 331,
      "squawk": "7041",
      "timestamp": 1650024327,
      "ems": null
    },
    {
      "latitude": 50.955242,
      "longitude": 6.938705,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7041",
      "timestamp": 1650024329,
      "ems": null
    },
    {
      "latitude": 50.956264,
      "longitude": 6.937714,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650024332,
      "ems": null
    },
    {
      "latitude": 50.957245,
      "longitude": 6.936798,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650024336,
      "ems": null
    },
    {
      "latitude": 50.958126,
      "longitude": 6.935959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650024339,
      "ems": null
    },
    {
      "latitude": 50.959167,
      "longitude": 6.934971,
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
      "heading": 329,
      "squawk": "7041",
      "timestamp": 1650024342,
      "ems": null
    },
    {
      "latitude": 50.960175,
      "longitude": 6.934006,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650024345,
      "ems": null
    },
    {
      "latitude": 50.961155,
      "longitude": 6.93306,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "7041",
      "timestamp": 1650024348,
      "ems": null
    },
    {
      "latitude": 50.962967,
      "longitude": 6.931334,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 329,
      "squawk": "7041",
      "timestamp": 1650024354,
      "ems": null
    },
    {
      "latitude": 50.964752,
      "longitude": 6.929552,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7041",
      "timestamp": 1650024360,
      "ems": null
    },
    {
      "latitude": 50.966599,
      "longitude": 6.927795,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "7041",
      "timestamp": 1650024366,
      "ems": null
    },
    {
      "latitude": 50.968464,
      "longitude": 6.926041,
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
      "heading": 330,
      "squawk": "7041",
      "timestamp": 1650024372,
      "ems": null
    },
    {
      "latitude": 50.970245,
      "longitude": 6.924504,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650024378,
      "ems": null
    },
    {
      "latitude": 50.971069,
      "longitude": 6.923836,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1650024381,
      "ems": null
    },
    {
      "latitude": 50.972122,
      "longitude": 6.923094,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1650024384,
      "ems": null
    },
    {
      "latitude": 50.973175,
      "longitude": 6.922426,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024387,
      "ems": null
    },
    {
      "latitude": 50.97414,
      "longitude": 6.921768,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024390,
      "ems": null
    },
    {
      "latitude": 50.975121,
      "longitude": 6.921082,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024393,
      "ems": null
    },
    {
      "latitude": 50.976051,
      "longitude": 6.920395,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1650024396,
      "ems": null
    },
    {
      "latitude": 50.977112,
      "longitude": 6.919754,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024399,
      "ems": null
    },
    {
      "latitude": 50.978073,
      "longitude": 6.919011,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024402,
      "ems": null
    },
    {
      "latitude": 50.980007,
      "longitude": 6.917572,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650024408,
      "ems": null
    },
    {
      "latitude": 50.981781,
      "longitude": 6.915968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1650024414,
      "ems": null
    },
    {
      "latitude": 50.9828,
      "longitude": 6.915054,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1650024417,
      "ems": null
    },
    {
      "latitude": 50.983475,
      "longitude": 6.914409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1650024420,
      "ems": null
    },
    {
      "latitude": 50.984478,
      "longitude": 6.913452,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1650024423,
      "ems": null
    },
    {
      "latitude": 50.985268,
      "longitude": 6.912689,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1650024426,
      "ems": null
    },
    {
      "latitude": 50.986359,
      "longitude": 6.911588,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1650024429,
      "ems": null
    },
    {
      "latitude": 50.987228,
      "longitude": 6.910697,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1650024432,
      "ems": null
    },
    {
      "latitude": 50.988144,
      "longitude": 6.909881,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1650024435,
      "ems": null
    },
    {
      "latitude": 50.989506,
      "longitude": 6.908646,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1650024441,
      "ems": null
    },
    {
      "latitude": 50.99155,
      "longitude": 6.906738,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1650024447,
      "ems": null
    },
    {
      "latitude": 50.992584,
      "longitude": 6.905575,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1650024450,
      "ems": null
    },
    {
      "latitude": 50.994579,
      "longitude": 6.903534,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1650024456,
      "ems": null
    },
    {
      "latitude": 50.996567,
      "longitude": 6.901864,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650024462,
      "ems": null
    },
    {
      "latitude": 50.998489,
      "longitude": 6.900177,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1650024468,
      "ems": null
    },
    {
      "latitude": 51.000687,
      "longitude": 6.898301,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650024474,
      "ems": null
    },
    {
      "latitude": 51.00174,
      "longitude": 6.89741,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1650024477,
      "ems": null
    },
    {
      "latitude": 51.002655,
      "longitude": 6.896667,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1650024480,
      "ems": null
    },
    {
      "latitude": 51.003796,
      "longitude": 6.895752,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1650024483,
      "ems": null
    },
    {
      "latitude": 51.004726,
      "longitude": 6.89537,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1650024486,
      "ems": null
    },
    {
      "latitude": 51.00618,
      "longitude": 6.895406,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1650024489,
      "ems": null
    },
    {
      "latitude": 51.007427,
      "longitude": 6.895981,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1650024492,
      "ems": null
    },
    {
      "latitude": 51.008606,
      "longitude": 6.896965,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1650024495,
      "ems": null
    },
    {
      "latitude": 51.008965,
      "longitude": 6.897278,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024498,
      "ems": null
    },
    {
      "latitude": 51.010849,
      "longitude": 6.899043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024501,
      "ems": null
    },
    {
      "latitude": 51.011993,
      "longitude": 6.900082,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024504,
      "ems": null
    },
    {
      "latitude": 51.013092,
      "longitude": 6.901047,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024507,
      "ems": null
    },
    {
      "latitude": 51.013992,
      "longitude": 6.901932,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024510,
      "ems": null
    },
    {
      "latitude": 51.015106,
      "longitude": 6.903,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024513,
      "ems": null
    },
    {
      "latitude": 51.016251,
      "longitude": 6.904091,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650024516,
      "ems": null
    },
    {
      "latitude": 51.017303,
      "longitude": 6.90513,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650024519,
      "ems": null
    },
    {
      "latitude": 51.018356,
      "longitude": 6.906095,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650024522,
      "ems": null
    },
    {
      "latitude": 51.020416,
      "longitude": 6.908247,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024528,
      "ems": null
    },
    {
      "latitude": 51.022465,
      "longitude": 6.910477,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024534,
      "ems": null
    },
    {
      "latitude": 51.024078,
      "longitude": 6.912034,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024540,
      "ems": null
    },
    {
      "latitude": 51.026142,
      "longitude": 6.913834,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024545,
      "ems": null
    },
    {
      "latitude": 51.028473,
      "longitude": 6.916042,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650024552,
      "ems": null
    },
    {
      "latitude": 51.030422,
      "longitude": 6.917877,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650024558,
      "ems": null
    },
    {
      "latitude": 51.032146,
      "longitude": 6.919556,
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024564,
      "ems": null
    },
    {
      "latitude": 51.034012,
      "longitude": 6.921535,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024570,
      "ems": null
    },
    {
      "latitude": 51.035778,
      "longitude": 6.92337,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024576,
      "ems": null
    },
    {
      "latitude": 51.036613,
      "longitude": 6.924286,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "7742",
      "timestamp": 1650024579,
      "ems": null
    },
    {
      "latitude": 51.038616,
      "longitude": 6.926498,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 35,
      "squawk": "7742",
      "timestamp": 1650024585,
      "ems": null
    },
    {
      "latitude": 51.039505,
      "longitude": 6.927548,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 35,
      "squawk": "7742",
      "timestamp": 1650024588,
      "ems": null
    },
    {
      "latitude": 51.041382,
      "longitude": 6.929552,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 34,
      "squawk": "7742",
      "timestamp": 1650024594,
      "ems": null
    },
    {
      "latitude": 51.043442,
      "longitude": 6.931482,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1650024600,
      "ems": null
    },
    {
      "latitude": 51.044586,
      "longitude": 6.932447,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1650024603,
      "ems": null
    },
    {
      "latitude": 51.045593,
      "longitude": 6.933264,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1650024606,
      "ems": null
    },
    {
      "latitude": 51.046719,
      "longitude": 6.934204,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1650024609,
      "ems": null
    },
    {
      "latitude": 51.047928,
      "longitude": 6.935196,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650024612,
      "ems": null
    },
    {
      "latitude": 51.048981,
      "longitude": 6.936085,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650024615,
      "ems": null
    },
    {
      "latitude": 51.049976,
      "longitude": 6.936874,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650024618,
      "ems": null
    },
    {
      "latitude": 51.05127,
      "longitude": 6.937866,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650024621,
      "ems": null
    },
    {
      "latitude": 51.053375,
      "longitude": 6.939468,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650024627,
      "ems": null
    },
    {
      "latitude": 51.055515,
      "longitude": 6.941071,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650024633,
      "ems": null
    },
    {
      "latitude": 51.057377,
      "longitude": 6.942596,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650024639,
      "ems": null
    },
    {
      "latitude": 51.059601,
      "longitude": 6.944324,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1650024645,
      "ems": null
    },
    {
      "latitude": 51.061661,
      "longitude": 6.946106,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1650024651,
      "ems": null
    },
    {
      "latitude": 51.063755,
      "longitude": 6.947861,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1650024657,
      "ems": null
    },
    {
      "latitude": 51.064827,
      "longitude": 6.948776,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024660,
      "ems": null
    },
    {
      "latitude": 51.066833,
      "longitude": 6.950634,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024666,
      "ems": null
    },
    {
      "latitude": 51.069107,
      "longitude": 6.952667,
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
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1650024672,
      "ems": null
    },
    {
      "latitude": 51.071064,
      "longitude": 6.954346,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650024678,
      "ems": null
    },
    {
      "latitude": 51.073334,
      "longitude": 6.956053,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650024684,
      "ems": null
    },
    {
      "latitude": 51.075298,
      "longitude": 6.957703,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "7742",
      "timestamp": 1650024690,
      "ems": null
    },
    {
      "latitude": 51.077591,
      "longitude": 6.959616,
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
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1650024696,
      "ems": null
    },
    {
      "latitude": 51.079559,
      "longitude": 6.961769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024702,
      "ems": null
    },
    {
      "latitude": 51.080513,
      "longitude": 6.96312,
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
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024705,
      "ems": null
    },
    {
      "latitude": 51.081253,
      "longitude": 6.964219,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024708,
      "ems": null
    },
    {
      "latitude": 51.082188,
      "longitude": 6.965561,
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
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1650024711,
      "ems": null
    },
    {
      "latitude": 51.083176,
      "longitude": 6.966965,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1650024714,
      "ems": null
    },
    {
      "latitude": 51.084145,
      "longitude": 6.968307,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024717,
      "ems": null
    },
    {
      "latitude": 51.08503,
      "longitude": 6.969604,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024720,
      "ems": null
    },
    {
      "latitude": 51.085968,
      "longitude": 6.970973,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1650024723,
      "ems": null
    },
    {
      "latitude": 51.0868,
      "longitude": 6.972275,
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
      "heading": 44,
      "squawk": "7742",
      "timestamp": 1650024726,
      "ems": null
    },
    {
      "latitude": 51.087681,
      "longitude": 6.973572,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 44,
      "squawk": "7742",
      "timestamp": 1650024729,
      "ems": null
    },
    {
      "latitude": 51.089447,
      "longitude": 6.976244,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 43,
      "squawk": "7742",
      "timestamp": 1650024735,
      "ems": null
    },
    {
      "latitude": 51.091221,
      "longitude": 6.978912,
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
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1650024741,
      "ems": null
    },
    {
      "latitude": 51.093082,
      "longitude": 6.981354,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024747,
      "ems": null
    },
    {
      "latitude": 51.095039,
      "longitude": 6.9841,
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
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024753,
      "ems": null
    },
    {
      "latitude": 51.095947,
      "longitude": 6.985226,
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
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024756,
      "ems": null
    },
    {
      "latitude": 51.09676,
      "longitude": 6.986313,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024759,
      "ems": null
    },
    {
      "latitude": 51.098576,
      "longitude": 6.988678,
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1650024765,
      "ems": null
    },
    {
      "latitude": 51.099415,
      "longitude": 6.989746,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 37,
      "squawk": "7742",
      "timestamp": 1650024768,
      "ems": null
    },
    {
      "latitude": 51.101303,
      "longitude": 6.991907,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1650024774,
      "ems": null
    },
    {
      "latitude": 51.102951,
      "longitude": 6.994208,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1650024780,
      "ems": null
    },
    {
      "latitude": 51.104675,
      "longitude": 6.996613,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024786,
      "ems": null
    },
    {
      "latitude": 51.106339,
      "longitude": 6.998885,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024792,
      "ems": null
    },
    {
      "latitude": 51.107841,
      "longitude": 7.000961,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1650024798,
      "ems": null
    },
    {
      "latitude": 51.108818,
      "longitude": 7.002335,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1650024801,
      "ems": null
    },
    {
      "latitude": 51.110413,
      "longitude": 7.004675,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1650024807,
      "ems": null
    },
    {
      "latitude": 51.112309,
      "longitude": 7.006912,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024813,
      "ems": null
    },
    {
      "latitude": 51.113297,
      "longitude": 7.007719,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1650024816,
      "ems": null
    },
    {
      "latitude": 51.114357,
      "longitude": 7.008362,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1650024819,
      "ems": null
    },
    {
      "latitude": 51.11552,
      "longitude": 7.008743,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1650024822,
      "ems": null
    },
    {
      "latitude": 51.116547,
      "longitude": 7.009055,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1650024825,
      "ems": null
    },
    {
      "latitude": 51.117828,
      "longitude": 7.009426,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 11,
      "squawk": "7742",
      "timestamp": 1650024828,
      "ems": null
    },
    {
      "latitude": 51.118835,
      "longitude": 7.009797,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1650024831,
      "ems": null
    },
    {
      "latitude": 51.120117,
      "longitude": 7.010094,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1650024834,
      "ems": null
    },
    {
      "latitude": 51.121246,
      "longitude": 7.010269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1650024837,
      "ems": null
    },
    {
      "latitude": 51.122688,
      "longitude": 7.010422,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650024840,
      "ems": null
    },
    {
      "latitude": 51.123947,
      "longitude": 7.010574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650024843,
      "ems": null
    },
    {
      "latitude": 51.125202,
      "longitude": 7.010651,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024846,
      "ems": null
    },
    {
      "latitude": 51.126343,
      "longitude": 7.010762,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024849,
      "ems": null
    },
    {
      "latitude": 51.12767,
      "longitude": 7.010836,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024852,
      "ems": null
    },
    {
      "latitude": 51.129162,
      "longitude": 7.01088,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650024855,
      "ems": null
    },
    {
      "latitude": 51.130234,
      "longitude": 7.010985,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024858,
      "ems": null
    },
    {
      "latitude": 51.131699,
      "longitude": 7.011059,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024861,
      "ems": null
    },
    {
      "latitude": 51.132931,
      "longitude": 7.011108,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650024864,
      "ems": null
    },
    {
      "latitude": 51.135361,
      "longitude": 7.011208,
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
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1650024870,
      "ems": null
    },
    {
      "latitude": 51.138935,
      "longitude": 7.011337,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1650024879,
      "ems": null
    },
    {
      "latitude": 51.14024,
      "longitude": 7.011948,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1650024882,
      "ems": null
    },
    {
      "latitude": 51.141357,
      "longitude": 7.012634,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1650024885,
      "ems": null
    },
    {
      "latitude": 51.142288,
      "longitude": 7.013397,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024888,
      "ems": null
    },
    {
      "latitude": 51.143143,
      "longitude": 7.014251,
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024891,
      "ems": null
    },
    {
      "latitude": 51.144291,
      "longitude": 7.015457,
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024894,
      "ems": null
    },
    {
      "latitude": 51.145111,
      "longitude": 7.016329,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650024897,
      "ems": null
    },
    {
      "latitude": 51.146385,
      "longitude": 7.01767,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650024900,
      "ems": null
    },
    {
      "latitude": 51.146805,
      "longitude": 7.018051,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650024903,
      "ems": null
    },
    {
      "latitude": 51.148106,
      "longitude": 7.019272,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024906,
      "ems": null
    },
    {
      "latitude": 51.149139,
      "longitude": 7.020189,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024909,
      "ems": null
    },
    {
      "latitude": 51.150375,
      "longitude": 7.021303,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650024913,
      "ems": null
    },
    {
      "latitude": 51.152756,
      "longitude": 7.023456,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650024920,
      "ems": null
    },
    {
      "latitude": 51.154625,
      "longitude": 7.025681,
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
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024927,
      "ems": null
    },
    {
      "latitude": 51.155415,
      "longitude": 7.026672,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024930,
      "ems": null
    },
    {
      "latitude": 51.156208,
      "longitude": 7.027664,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1650024932,
      "ems": null
    },
    {
      "latitude": 51.156952,
      "longitude": 7.028732,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "7742",
      "timestamp": 1650024935,
      "ems": null
    },
    {
      "latitude": 51.157654,
      "longitude": 7.030062,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1650024938,
      "ems": null
    },
    {
      "latitude": 51.15834,
      "longitude": 7.031473,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1650024942,
      "ems": null
    },
    {
      "latitude": 51.158936,
      "longitude": 7.03266,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1650024944,
      "ems": null
    },
    {
      "latitude": 51.159561,
      "longitude": 7.03392,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1650024948,
      "ems": null
    },
    {
      "latitude": 51.16021,
      "longitude": 7.035217,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1650024951,
      "ems": null
    },
    {
      "latitude": 51.160904,
      "longitude": 7.03652,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 53,
      "squawk": "7742",
      "timestamp": 1650024954,
      "ems": null
    },
    {
      "latitude": 51.161373,
      "longitude": 7.038116,
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1650024956,
      "ems": null
    },
    {
      "latitude": 51.161499,
      "longitude": 7.039861,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1650024959,
      "ems": null
    },
    {
      "latitude": 51.161282,
      "longitude": 7.041702,
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1650024962,
      "ems": null
    },
    {
      "latitude": 51.160858,
      "longitude": 7.043795,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1650024965,
      "ems": null
    },
    {
      "latitude": 51.160351,
      "longitude": 7.04567,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1650024969,
      "ems": null
    },
    {
      "latitude": 51.159977,
      "longitude": 7.047653,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 98,
      "squawk": "7742",
      "timestamp": 1650024972,
      "ems": null
    },
    {
      "latitude": 51.159943,
      "longitude": 7.049808,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1650024975,
      "ems": null
    },
    {
      "latitude": 51.159943,
      "longitude": 7.051589,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1650024977,
      "ems": null
    },
    {
      "latitude": 51.160172,
      "longitude": 7.053371,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1650024980,
      "ems": null
    },
    {
      "latitude": 51.161636,
      "longitude": 7.056118,
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650024987,
      "ems": null
    },
    {
      "latitude": 51.162773,
      "longitude": 7.056885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1650024990,
      "ems": null
    },
    {
      "latitude": 51.163696,
      "longitude": 7.057157,
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
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1650024993,
      "ems": null
    },
    {
      "latitude": 51.164867,
      "longitude": 7.057343,
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1650024995,
      "ems": null
    },
    {
      "latitude": 51.165985,
      "longitude": 7.057528,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1650024998,
      "ems": null
    },
    {
      "latitude": 51.167175,
      "longitude": 7.057825,
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
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1650025002,
      "ems": null
    },
    {
      "latitude": 51.168034,
      "longitude": 7.058105,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 9,
      "squawk": "7742",
      "timestamp": 1650025005,
      "ems": null
    },
    {
      "latitude": 51.169189,
      "longitude": 7.058345,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1650025008,
      "ems": null
    },
    {
      "latitude": 51.170219,
      "longitude": 7.058487,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650025010,
      "ems": null
    },
    {
      "latitude": 51.171337,
      "longitude": 7.05864,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1650025014,
      "ems": null
    },
    {
      "latitude": 51.172348,
      "longitude": 7.058716,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650025017,
      "ems": null
    },
    {
      "latitude": 51.173244,
      "longitude": 7.058868,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1650025019,
      "ems": null
    },
    {
      "latitude": 51.175293,
      "longitude": 7.05925,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650025025,
      "ems": null
    },
    {
      "latitude": 51.177341,
      "longitude": 7.059326,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650025032,
      "ems": null
    },
    {
      "latitude": 51.178226,
      "longitude": 7.059402,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650025034,
      "ems": null
    },
    {
      "latitude": 51.180183,
      "longitude": 7.059708,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1650025041,
      "ems": null
    },
    {
      "latitude": 51.182465,
      "longitude": 7.059978,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650025047,
      "ems": null
    },
    {
      "latitude": 51.184792,
      "longitude": 7.060318,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1650025053,
      "ems": null
    },
    {
      "latitude": 51.187134,
      "longitude": 7.060646,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650025058,
      "ems": null
    },
    {
      "latitude": 51.189697,
      "longitude": 7.060943,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1650025065,
      "ems": null
    },
    {
      "latitude": 51.192169,
      "longitude": 7.061611,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1650025071,
      "ems": null
    },
    {
      "latitude": 51.193405,
      "longitude": 7.062279,
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
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1650025074,
      "ems": null
    },
    {
      "latitude": 51.194504,
      "longitude": 7.063021,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1650025077,
      "ems": null
    },
    {
      "latitude": 51.195637,
      "longitude": 7.063828,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650025079,
      "ems": null
    },
    {
      "latitude": 51.196754,
      "longitude": 7.064743,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650025083,
      "ems": null
    },
    {
      "latitude": 51.197845,
      "longitude": 7.065842,
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
      "heading": 34,
      "squawk": "7742",
      "timestamp": 1650025086,
      "ems": null
    },
    {
      "latitude": 51.198944,
      "longitude": 7.067032,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650025089,
      "ems": null
    },
    {
      "latitude": 51.199997,
      "longitude": 7.068069,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025092,
      "ems": null
    },
    {
      "latitude": 51.201084,
      "longitude": 7.069168,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650025095,
      "ems": null
    },
    {
      "latitude": 51.201645,
      "longitude": 7.069702,
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650025097,
      "ems": null
    },
    {
      "latitude": 51.203339,
      "longitude": 7.071558,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1650025101,
      "ems": null
    },
    {
      "latitude": 51.20467,
      "longitude": 7.072906,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025105,
      "ems": null
    },
    {
      "latitude": 51.205647,
      "longitude": 7.073822,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025108,
      "ems": null
    },
    {
      "latitude": 51.207928,
      "longitude": 7.075958,
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
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1650025114,
      "ems": null
    },
    {
      "latitude": 51.210251,
      "longitude": 7.077868,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650025120,
      "ems": null
    },
    {
      "latitude": 51.211372,
      "longitude": 7.078781,
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
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1650025123,
      "ems": null
    },
    {
      "latitude": 51.212582,
      "longitude": 7.07962,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1650025126,
      "ems": null
    },
    {
      "latitude": 51.213608,
      "longitude": 7.080307,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1650025128,
      "ems": null
    },
    {
      "latitude": 51.214874,
      "longitude": 7.081134,
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
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1650025132,
      "ems": null
    },
    {
      "latitude": 51.216167,
      "longitude": 7.081909,
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
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1650025135,
      "ems": null
    },
    {
      "latitude": 51.217255,
      "longitude": 7.082544,
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
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1650025138,
      "ems": null
    },
    {
      "latitude": 51.218494,
      "longitude": 7.083206,
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
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1650025141,
      "ems": null
    },
    {
      "latitude": 51.219681,
      "longitude": 7.083806,
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
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1650025144,
      "ems": null
    },
    {
      "latitude": 51.220963,
      "longitude": 7.084474,
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
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1650025147,
      "ems": null
    },
    {
      "latitude": 51.222061,
      "longitude": 7.08492,
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
      "heading": 15,
      "squawk": "7742",
      "timestamp": 1650025150,
      "ems": null
    },
    {
      "latitude": 51.223522,
      "longitude": 7.085571,
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
      "heading": 15,
      "squawk": "7742",
      "timestamp": 1650025153,
      "ems": null
    },
    {
      "latitude": 51.224594,
      "longitude": 7.086029,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1650025156,
      "ems": null
    },
    {
      "latitude": 51.225769,
      "longitude": 7.086553,
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
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1650025158,
      "ems": null
    },
    {
      "latitude": 51.227108,
      "longitude": 7.087021,
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
      "heading": 12,
      "squawk": "7742",
      "timestamp": 1650025162,
      "ems": null
    },
    {
      "latitude": 51.228409,
      "longitude": 7.087479,
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
      "heading": 12,
      "squawk": "7742",
      "timestamp": 1650025165,
      "ems": null
    },
    {
      "latitude": 51.229614,
      "longitude": 7.087889,
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
      "heading": 14,
      "squawk": "7742",
      "timestamp": 1650025168,
      "ems": null
    },
    {
      "latitude": 51.231716,
      "longitude": 7.089005,
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
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1650025174,
      "ems": null
    },
    {
      "latitude": 51.234146,
      "longitude": 7.090487,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1650025180,
      "ems": null
    },
    {
      "latitude": 51.235207,
      "longitude": 7.091293,
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
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1650025183,
      "ems": null
    },
    {
      "latitude": 51.236416,
      "longitude": 7.092209,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650025186,
      "ems": null
    },
    {
      "latitude": 51.237301,
      "longitude": 7.092896,
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1650025188,
      "ems": null
    },
    {
      "latitude": 51.238358,
      "longitude": 7.093902,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025191,
      "ems": null
    },
    {
      "latitude": 51.239536,
      "longitude": 7.095032,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025195,
      "ems": null
    },
    {
      "latitude": 51.240372,
      "longitude": 7.095832,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025197,
      "ems": null
    },
    {
      "latitude": 51.241539,
      "longitude": 7.097015,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025201,
      "ems": null
    },
    {
      "latitude": 51.242569,
      "longitude": 7.09791,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025204,
      "ems": null
    },
    {
      "latitude": 51.243538,
      "longitude": 7.098923,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025207,
      "ems": null
    },
    {
      "latitude": 51.244705,
      "longitude": 7.100067,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025210,
      "ems": null
    },
    {
      "latitude": 51.245682,
      "longitude": 7.101028,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025213,
      "ems": null
    },
    {
      "latitude": 51.246597,
      "longitude": 7.101845,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650025216,
      "ems": null
    },
    {
      "latitude": 51.247776,
      "longitude": 7.102966,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025219,
      "ems": null
    },
    {
      "latitude": 51.249916,
      "longitude": 7.105103,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025225,
      "ems": null
    },
    {
      "latitude": 51.252136,
      "longitude": 7.107264,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025231,
      "ems": null
    },
    {
      "latitude": 51.254105,
      "longitude": 7.109193,
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1650025237,
      "ems": null
    },
    {
      "latitude": 51.255692,
      "longitude": 7.110825,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650025241,
      "ems": null
    },
    {
      "latitude": 51.256943,
      "longitude": 7.112534,
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
      "heading": 43,
      "squawk": "7742",
      "timestamp": 1650025245,
      "ems": null
    },
    {
      "latitude": 51.257813,
      "longitude": 7.114167,
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
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1650025249,
      "ems": null
    },
    {
      "latitude": 51.258636,
      "longitude": 7.116394,
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1650025253,
      "ems": null
    },
    {
      "latitude": 51.258904,
      "longitude": 7.118835,
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1650025257,
      "ems": null
    },
    {
      "latitude": 51.258621,
      "longitude": 7.121658,
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1650025261,
      "ems": null
    },
    {
      "latitude": 51.258224,
      "longitude": 7.12404,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1650025265,
      "ems": null
    },
    {
      "latitude": 51.257736,
      "longitude": 7.12677,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025269,
      "ems": null
    },
    {
      "latitude": 51.257412,
      "longitude": 7.128677,
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025272,
      "ems": null
    },
    {
      "latitude": 51.257133,
      "longitude": 7.130356,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025276,
      "ems": null
    },
    {
      "latitude": 51.256989,
      "longitude": 7.13124,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025278,
      "ems": null
    },
    {
      "latitude": 51.256485,
      "longitude": 7.134507,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025282,
      "ems": null
    },
    {
      "latitude": 51.256165,
      "longitude": 7.136659,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025286,
      "ems": null
    },
    {
      "latitude": 51.255249,
      "longitude": 7.141856,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1650025294,
      "ems": null
    },
    {
      "latitude": 51.254433,
      "longitude": 7.146378,
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025302,
      "ems": null
    },
    {
      "latitude": 51.253735,
      "longitude": 7.150497,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025310,
      "ems": null
    },
    {
      "latitude": 51.252777,
      "longitude": 7.156108,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025318,
      "ems": null
    },
    {
      "latitude": 51.251999,
      "longitude": 7.160933,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025326,
      "ems": null
    },
    {
      "latitude": 51.250992,
      "longitude": 7.166649,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1650025334,
      "ems": null
    },
    {
      "latitude": 51.250351,
      "longitude": 7.169322,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1650025338,
      "ems": null
    },
    {
      "latitude": 51.249729,
      "longitude": 7.171707,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1650025342,
      "ems": null
    },
    {
      "latitude": 51.249172,
      "longitude": 7.173767,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1650025346,
      "ems": null
    },
    {
      "latitude": 51.248474,
      "longitude": 7.17659,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1650025350,
      "ems": null
    },
    {
      "latitude": 51.247787,
      "longitude": 7.179046,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1650025354,
      "ems": null
    },
    {
      "latitude": 51.247169,
      "longitude": 7.181396,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1650025358,
      "ems": null
    },
    {
      "latitude": 51.245914,
      "longitude": 7.186203,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1650025366,
      "ems": null
    },
    {
      "latitude": 51.244656,
      "longitude": 7.191086,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1650025374,
      "ems": null
    },
    {
      "latitude": 51.243259,
      "longitude": 7.195816,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1650025382,
      "ems": null
    },
    {
      "latitude": 51.242477,
      "longitude": 7.197901,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1650025386,
      "ems": null
    },
    {
      "latitude": 51.240463,
      "longitude": 7.202206,
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1650025394,
      "ems": null
    },
    {
      "latitude": 51.239677,
      "longitude": 7.203598,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025396,
      "ems": null
    },
    {
      "latitude": 51.239025,
      "longitude": 7.204819,
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1650025399,
      "ems": null
    },
    {
      "latitude": 51.238083,
      "longitude": 7.206586,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025402,
      "ems": null
    },
    {
      "latitude": 51.237305,
      "longitude": 7.207922,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025405,
      "ems": null
    },
    {
      "latitude": 51.236416,
      "longitude": 7.209473,
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
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1650025408,
      "ems": null
    },
    {
      "latitude": 51.235531,
      "longitude": 7.210922,
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1650025411,
      "ems": null
    },
    {
      "latitude": 51.234558,
      "longitude": 7.21245,
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1650025415,
      "ems": null
    },
    {
      "latitude": 51.233856,
      "longitude": 7.213669,
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1650025417,
      "ems": null
    },
    {
      "latitude": 51.23204,
      "longitude": 7.216533,
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1650025423,
      "ems": null
    },
    {
      "latitude": 51.230118,
      "longitude": 7.219873,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025430,
      "ems": null
    },
    {
      "latitude": 51.22847,
      "longitude": 7.222768,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025436,
      "ems": null
    },
    {
      "latitude": 51.227509,
      "longitude": 7.22455,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1650025440,
      "ems": null
    },
    {
      "latitude": 51.225952,
      "longitude": 7.227519,
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
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1650025447,
      "ems": null
    },
    {
      "latitude": 51.225246,
      "longitude": 7.229233,
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1650025450,
      "ems": null
    },
    {
      "latitude": 51.22467,
      "longitude": 7.231305,
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1650025453,
      "ems": null
    },
    {
      "latitude": 51.224213,
      "longitude": 7.233755,
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025456,
      "ems": null
    },
    {
      "latitude": 51.223988,
      "longitude": 7.235031,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025459,
      "ems": null
    },
    {
      "latitude": 51.223709,
      "longitude": 7.236724,
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025462,
      "ems": null
    },
    {
      "latitude": 51.223614,
      "longitude": 7.237473,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1650025465,
      "ems": null
    },
    {
      "latitude": 51.222885,
      "longitude": 7.241326,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1650025469,
      "ems": null
    },
    {
      "latitude": 51.22261,
      "longitude": 7.243034,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025473,
      "ems": null
    },
    {
      "latitude": 51.222263,
      "longitude": 7.245483,
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
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1650025477,
      "ems": null
    },
    {
      "latitude": 51.221924,
      "longitude": 7.247859,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1650025481,
      "ems": null
    },
    {
      "latitude": 51.221149,
      "longitude": 7.252731,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025489,
      "ems": null
    },
    {
      "latitude": 51.220543,
      "longitude": 7.256851,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1650025496,
      "ems": null
    },
    {
      "latitude": 51.219955,
      "longitude": 7.260627,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650025502,
      "ems": null
    },
    {
      "latitude": 51.219612,
      "longitude": 7.262497,
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
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1650025505,
      "ems": null
    },
    {
      "latitude": 51.219006,
      "longitude": 7.26593,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025511,
      "ems": null
    },
    {
      "latitude": 51.218449,
      "longitude": 7.269821,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1650025516,
      "ems": null
    },
    {
      "latitude": 51.217621,
      "longitude": 7.273246,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1650025522,
      "ems": null
    },
    {
      "latitude": 51.217026,
      "longitude": 7.274953,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1650025526,
      "ems": null
    },
    {
      "latitude": 51.216446,
      "longitude": 7.276154,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1650025528,
      "ems": null
    },
    {
      "latitude": 51.215374,
      "longitude": 7.277679,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1650025531,
      "ems": null
    },
    {
      "latitude": 51.214211,
      "longitude": 7.278976,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "7742",
      "timestamp": 1650025534,
      "ems": null
    },
    {
      "latitude": 51.21286,
      "longitude": 7.279892,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1650025538,
      "ems": null
    },
    {
      "latitude": 51.211578,
      "longitude": 7.280298,
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
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1650025541,
      "ems": null
    },
    {
      "latitude": 51.2103,
      "longitude": 7.280426,
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1650025544,
      "ems": null
    },
    {
      "latitude": 51.209137,
      "longitude": 7.28035,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1650025546,
      "ems": null
    },
    {
      "latitude": 51.207554,
      "longitude": 7.280121,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1650025550,
      "ems": null
    },
    {
      "latitude": 51.206299,
      "longitude": 7.279892,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1650025553,
      "ems": null
    },
    {
      "latitude": 51.204941,
      "longitude": 7.27963,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1650025556,
      "ems": null
    },
    {
      "latitude": 51.203644,
      "longitude": 7.279282,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025559,
      "ems": null
    },
    {
      "latitude": 51.202435,
      "longitude": 7.278976,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025562,
      "ems": null
    },
    {
      "latitude": 51.201038,
      "longitude": 7.278519,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025565,
      "ems": null
    },
    {
      "latitude": 51.199677,
      "longitude": 7.278071,
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1650025568,
      "ems": null
    },
    {
      "latitude": 51.198532,
      "longitude": 7.2777,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025570,
      "ems": null
    },
    {
      "latitude": 51.197159,
      "longitude": 7.277106,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025574,
      "ems": null
    },
    {
      "latitude": 51.196102,
      "longitude": 7.276764,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025576,
      "ems": null
    },
    {
      "latitude": 51.195007,
      "longitude": 7.276364,
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1650025579,
      "ems": null
    },
    {
      "latitude": 51.194149,
      "longitude": 7.276001,
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1650025581,
      "ems": null
    },
    {
      "latitude": 51.189911,
      "longitude": 7.27478,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025591,
      "ems": null
    },
    {
      "latitude": 51.187397,
      "longitude": 7.273941,
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1650025596,
      "ems": null
    },
    {
      "latitude": 51.185211,
      "longitude": 7.273024,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1650025602,
      "ems": null
    },
    {
      "latitude": 51.182465,
      "longitude": 7.271576,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1650025608,
      "ems": null
    },
    {
      "latitude": 51.181347,
      "longitude": 7.270889,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650025612,
      "ems": null
    },
    {
      "latitude": 51.180084,
      "longitude": 7.270128,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650025615,
      "ems": null
    },
    {
      "latitude": 51.17902,
      "longitude": 7.269592,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1650025617,
      "ems": null
    },
    {
      "latitude": 51.177715,
      "longitude": 7.268906,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1650025621,
      "ems": null
    },
    {
      "latitude": 51.176739,
      "longitude": 7.268372,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1650025623,
      "ems": null
    },
    {
      "latitude": 51.175758,
      "longitude": 7.267838,
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1650025626,
      "ems": null
    },
    {
      "latitude": 51.174736,
      "longitude": 7.267227,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650025629,
      "ems": null
    },
    {
      "latitude": 51.173431,
      "longitude": 7.266388,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025632,
      "ems": null
    },
    {
      "latitude": 51.172268,
      "longitude": 7.265701,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025635,
      "ems": null
    },
    {
      "latitude": 51.169754,
      "longitude": 7.264099,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025641,
      "ems": null
    },
    {
      "latitude": 51.166901,
      "longitude": 7.262705,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025648,
      "ems": null
    },
    {
      "latitude": 51.164215,
      "longitude": 7.261658,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025654,
      "ems": null
    },
    {
      "latitude": 51.163101,
      "longitude": 7.261147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025656,
      "ems": null
    },
    {
      "latitude": 51.161499,
      "longitude": 7.260478,
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1650025660,
      "ems": null
    },
    {
      "latitude": 51.160027,
      "longitude": 7.259827,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025662,
      "ems": null
    },
    {
      "latitude": 51.158798,
      "longitude": 7.259365,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025666,
      "ems": null
    },
    {
      "latitude": 51.157059,
      "longitude": 7.258697,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025669,
      "ems": null
    },
    {
      "latitude": 51.15596,
      "longitude": 7.258326,
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1650025671,
      "ems": null
    },
    {
      "latitude": 51.154205,
      "longitude": 7.25769,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1650025674,
      "ems": null
    },
    {
      "latitude": 51.150387,
      "longitude": 7.256165,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1650025682,
      "ems": null
    },
    {
      "latitude": 51.147308,
      "longitude": 7.254911,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025688,
      "ems": null
    },
    {
      "latitude": 51.144287,
      "longitude": 7.253723,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025694,
      "ems": null
    },
    {
      "latitude": 51.141312,
      "longitude": 7.252502,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025700,
      "ems": null
    },
    {
      "latitude": 51.13847,
      "longitude": 7.251434,
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1650025706,
      "ems": null
    },
    {
      "latitude": 51.135498,
      "longitude": 7.25016,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1650025712,
      "ems": null
    },
    {
      "latitude": 51.132568,
      "longitude": 7.248824,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1650025718,
      "ems": null
    },
    {
      "latitude": 51.129765,
      "longitude": 7.247467,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1650025724,
      "ems": null
    },
    {
      "latitude": 51.128647,
      "longitude": 7.24678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025727,
      "ems": null
    },
    {
      "latitude": 51.127159,
      "longitude": 7.245712,
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1650025730,
      "ems": null
    },
    {
      "latitude": 51.125717,
      "longitude": 7.244644,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1650025733,
      "ems": null
    },
    {
      "latitude": 51.124512,
      "longitude": 7.243628,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1650025736,
      "ems": null
    },
    {
      "latitude": 51.123047,
      "longitude": 7.24244,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1650025739,
      "ems": null
    },
    {
      "latitude": 51.121853,
      "longitude": 7.241364,
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1650025742,
      "ems": null
    },
    {
      "latitude": 51.120987,
      "longitude": 7.240584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1650025745,
      "ems": null
    },
    {
      "latitude": 51.119572,
      "longitude": 7.239227,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1650025748,
      "ems": null
    },
    {
      "latitude": 51.118103,
      "longitude": 7.237912,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1650025751,
      "ems": null
    },
    {
      "latitude": 51.116913,
      "longitude": 7.236798,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1650025754,
      "ems": null
    },
    {
      "latitude": 51.11586,
      "longitude": 7.235908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1650025757,
      "ems": null
    },
    {
      "latitude": 51.113297,
      "longitude": 7.233606,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1650025763,
      "ems": null
    },
    {
      "latitude": 51.109634,
      "longitude": 7.230711,
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1650025772,
      "ems": null
    },
    {
      "latitude": 51.108536,
      "longitude": 7.229969,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1650025775,
      "ems": null
    },
    {
      "latitude": 51.107071,
      "longitude": 7.228856,
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1650025778,
      "ems": null
    },
    {
      "latitude": 51.105839,
      "longitude": 7.227936,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1650025781,
      "ems": null
    },
    {
      "latitude": 51.103184,
      "longitude": 7.225876,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1650025787,
      "ems": null
    },
    {
      "latitude": 51.101883,
      "longitude": 7.224884,
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1650025790,
      "ems": null
    },
    {
      "latitude": 51.100754,
      "longitude": 7.224179,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650025793,
      "ems": null
    },
    {
      "latitude": 51.09787,
      "longitude": 7.222175,
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1650025799,
      "ems": null
    },
    {
      "latitude": 51.094013,
      "longitude": 7.219315,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1650025808,
      "ems": null
    },
    {
      "latitude": 51.090012,
      "longitude": 7.215881,
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1650025817,
      "ems": null
    },
    {
      "latitude": 51.08757,
      "longitude": 7.214232,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025823,
      "ems": null
    },
    {
      "latitude": 51.083725,
      "longitude": 7.211856,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1650025832,
      "ems": null
    },
    {
      "latitude": 51.082329,
      "longitude": 7.211304,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025835,
      "ems": null
    },
    {
      "latitude": 51.081024,
      "longitude": 7.21077,
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1650025838,
      "ems": null
    },
    {
      "latitude": 51.079788,
      "longitude": 7.210223,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1650025841,
      "ems": null
    },
    {
      "latitude": 51.078327,
      "longitude": 7.209549,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1650025844,
      "ems": null
    },
    {
      "latitude": 51.074417,
      "longitude": 7.207413,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650025853,
      "ems": null
    },
    {
      "latitude": 51.071575,
      "longitude": 7.205658,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650025859,
      "ems": null
    },
    {
      "latitude": 51.070736,
      "longitude": 7.205048,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650025862,
      "ems": null
    },
    {
      "latitude": 51.069214,
      "longitude": 7.20421,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650025865,
      "ems": null
    },
    {
      "latitude": 51.066467,
      "longitude": 7.202577,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650025871,
      "ems": null
    },
    {
      "latitude": 51.064079,
      "longitude": 7.201233,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1650025877,
      "ems": null
    },
    {
      "latitude": 51.062576,
      "longitude": 7.200499,
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1650025880,
      "ems": null
    },
    {
      "latitude": 51.061428,
      "longitude": 7.200165,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025883,
      "ems": null
    },
    {
      "latitude": 51.059799,
      "longitude": 7.19986,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1650025886,
      "ems": null
    },
    {
      "latitude": 51.058727,
      "longitude": 7.199707,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025889,
      "ems": null
    },
    {
      "latitude": 51.057236,
      "longitude": 7.199554,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025892,
      "ems": null
    },
    {
      "latitude": 51.055656,
      "longitude": 7.199402,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025895,
      "ems": null
    },
    {
      "latitude": 51.054382,
      "longitude": 7.199311,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1650025899,
      "ems": null
    },
    {
      "latitude": 51.052917,
      "longitude": 7.199237,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1650025901,
      "ems": null
    },
    {
      "latitude": 51.051743,
      "longitude": 7.199173,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1650025904,
      "ems": null
    },
    {
      "latitude": 51.050068,
      "longitude": 7.19902,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025907,
      "ems": null
    },
    {
      "latitude": 51.048672,
      "longitude": 7.198868,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1650025910,
      "ems": null
    },
    {
      "latitude": 51.047195,
      "longitude": 7.198717,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1650025914,
      "ems": null
    },
    {
      "latitude": 51.044586,
      "longitude": 7.198346,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1650025919,
      "ems": null
    },
    {
      "latitude": 51.041363,
      "longitude": 7.197723,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1650025925,
      "ems": null
    },
    {
      "latitude": 51.039825,
      "longitude": 7.197342,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1650025929,
      "ems": null
    },
    {
      "latitude": 51.038315,
      "longitude": 7.196936,
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1650025931,
      "ems": null
    },
    {
      "latitude": 51.036896,
      "longitude": 7.196503,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1650025934,
      "ems": null
    },
    {
      "latitude": 51.032684,
      "longitude": 7.195822,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025943,
      "ems": null
    },
    {
      "latitude": 51.02977,
      "longitude": 7.195435,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1650025949,
      "ems": null
    },
    {
      "latitude": 51.026791,
      "longitude": 7.194977,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025955,
      "ems": null
    },
    {
      "latitude": 51.025543,
      "longitude": 7.194857,
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1650025958,
      "ems": null
    },
    {
      "latitude": 51.024078,
      "longitude": 7.194709,
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1650025961,
      "ems": null
    },
    {
      "latitude": 51.022614,
      "longitude": 7.194709,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1650025964,
      "ems": null
    },
    {
      "latitude": 51.021423,
      "longitude": 7.194709,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1650025967,
      "ems": null
    },
    {
      "latitude": 51.019997,
      "longitude": 7.194824,
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1650025970,
      "ems": null
    },
    {
      "latitude": 51.017155,
      "longitude": 7.194672,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025976,
      "ems": null
    },
    {
      "latitude": 51.014595,
      "longitude": 7.194214,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1650025982,
      "ems": null
    },
    {
      "latitude": 51.013229,
      "longitude": 7.194189,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1650025985,
      "ems": null
    },
    {
      "latitude": 51.011902,
      "longitude": 7.194486,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1650025988,
      "ems": null
    },
    {
      "latitude": 51.010361,
      "longitude": 7.195358,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1650025992,
      "ems": null
    },
    {
      "latitude": 51.009335,
      "longitude": 7.196274,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1650025995,
      "ems": null
    },
    {
      "latitude": 51.008743,
      "longitude": 7.197084,
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
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1650025997,
      "ems": null
    },
    {
      "latitude": 51.00769,
      "longitude": 7.198717,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1650026001,
      "ems": null
    },
    {
      "latitude": 51.006775,
      "longitude": 7.200128,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1650026004,
      "ems": null
    },
    {
      "latitude": 51.005936,
      "longitude": 7.201385,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1650026007,
      "ems": null
    },
    {
      "latitude": 51.005005,
      "longitude": 7.202759,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1650026010,
      "ems": null
    },
    {
      "latitude": 51.004166,
      "longitude": 7.203839,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1650026013,
      "ems": null
    },
    {
      "latitude": 51.003376,
      "longitude": 7.204819,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 143,
      "squawk": "7742",
      "timestamp": 1650026015,
      "ems": null
    },
    {
      "latitude": 51.002884,
      "longitude": 7.205398,
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
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1650026017,
      "ems": null
    },
    {
      "latitude": 51.001328,
      "longitude": 7.207031,
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1650026021,
      "ems": null
    },
    {
      "latitude": 50.999187,
      "longitude": 7.208862,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1650026027,
      "ems": null
    },
    {
      "latitude": 50.998352,
      "longitude": 7.209555,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1650026030,
      "ems": null
    },
    {
      "latitude": 50.996979,
      "longitude": 7.210594,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1650026033,
      "ems": null
    },
    {
      "latitude": 50.996021,
      "longitude": 7.211304,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1650026036,
      "ems": null
    },
    {
      "latitude": 50.994999,
      "longitude": 7.211914,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1650026039,
      "ems": null
    },
    {
      "latitude": 50.993416,
      "longitude": 7.212906,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1650026042,
      "ems": null
    },
    {
      "latitude": 50.992203,
      "longitude": 7.213593,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1650026045,
      "ems": null
    },
    {
      "latitude": 50.991074,
      "longitude": 7.214455,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1650026048,
      "ems": null
    },
    {
      "latitude": 50.989319,
      "longitude": 7.217178,
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
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1650026054,
      "ems": null
    },
    {
      "latitude": 50.988853,
      "longitude": 7.219086,
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1650026057,
      "ems": null
    },
    {
      "latitude": 50.988739,
      "longitude": 7.220764,
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1650026060,
      "ems": null
    },
    {
      "latitude": 50.988876,
      "longitude": 7.222843,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1650026063,
      "ems": null
    },
    {
      "latitude": 50.989197,
      "longitude": 7.22455,
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1650026066,
      "ems": null
    },
    {
      "latitude": 50.989689,
      "longitude": 7.225952,
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
      "heading": 55,
      "squawk": "7742",
      "timestamp": 1650026069,
      "ems": null
    },
    {
      "latitude": 50.990387,
      "longitude": 7.227222,
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
      "heading": 48,
      "squawk": "7742",
      "timestamp": 1650026072,
      "ems": null
    },
    {
      "latitude": 50.991348,
      "longitude": 7.228261,
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
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1650026075,
      "ems": null
    },
    {
      "latitude": 50.99239,
      "longitude": 7.228851,
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
      "squawk": "7742",
      "timestamp": 1650026078,
      "ems": null
    },
    {
      "latitude": 50.993362,
      "longitude": 7.229004,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1650026081,
      "ems": null
    },
    {
      "latitude": 50.995182,
      "longitude": 7.228241,
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
      "heading": 337,
      "squawk": "7742",
      "timestamp": 1650026087,
      "ems": null
    },
    {
      "latitude": 50.996246,
      "longitude": 7.226628,
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
      "heading": 307,
      "squawk": "7742",
      "timestamp": 1650026091,
      "ems": null
    },
    {
      "latitude": 50.996811,
      "longitude": 7.224503,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1650026095,
      "ems": null
    },
    {
      "latitude": 50.996906,
      "longitude": 7.222443,
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
      "heading": 269,
      "squawk": "7742",
      "timestamp": 1650026099,
      "ems": null
    },
    {
      "latitude": 50.996628,
      "longitude": 7.220001,
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
      "heading": 267,
      "squawk": "7742",
      "timestamp": 1650026103,
      "ems": null
    },
    {
      "latitude": 50.996155,
      "longitude": 7.21824,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1650026107,
      "ems": null
    },
    {
      "latitude": 50.994965,
      "longitude": 7.216013,
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1650026111,
      "ems": null
    },
    {
      "latitude": 50.993462,
      "longitude": 7.214432,
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1650026115,
      "ems": null
    },
    {
      "latitude": 50.991737,
      "longitude": 7.213593,
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1650026119,
      "ems": null
    },
    {
      "latitude": 50.990158,
      "longitude": 7.21349,
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
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1650026123,
      "ems": null
    },
    {
      "latitude": 50.988712,
      "longitude": 7.213898,
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
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1650026127,
      "ems": null
    },
    {
      "latitude": 50.986897,
      "longitude": 7.21489,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1650026131,
      "ems": null
    },
    {
      "latitude": 50.985535,
      "longitude": 7.216384,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1650026135,
      "ems": null
    },
    {
      "latitude": 50.984253,
      "longitude": 7.218463,
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1650026139,
      "ems": null
    },
    {
      "latitude": 50.983219,
      "longitude": 7.220993,
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1650026143,
      "ems": null
    },
    {
      "latitude": 50.982754,
      "longitude": 7.222748,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1650026147,
      "ems": null
    },
    {
      "latitude": 50.982475,
      "longitude": 7.224655,
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
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1650026150,
      "ems": null
    },
    {
      "latitude": 50.982334,
      "longitude": 7.226715,
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
      "heading": 92,
      "squawk": "7742",
      "timestamp": 1650026153,
      "ems": null
    },
    {
      "latitude": 50.982334,
      "longitude": 7.228546,
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1650026156,
      "ems": null
    },
    {
      "latitude": 50.982521,
      "longitude": 7.230377,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1650026159,
      "ems": null
    },
    {
      "latitude": 50.982845,
      "longitude": 7.232361,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1650026162,
      "ems": null
    },
    {
      "latitude": 50.983128,
      "longitude": 7.233505,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1650026164,
      "ems": null
    },
    {
      "latitude": 50.983826,
      "longitude": 7.235413,
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
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1650026168,
      "ems": null
    },
    {
      "latitude": 50.984619,
      "longitude": 7.236873,
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
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1650026170,
      "ems": null
    },
    {
      "latitude": 50.985214,
      "longitude": 7.237763,
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
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1650026173,
      "ems": null
    },
    {
      "latitude": 50.986153,
      "longitude": 7.238846,
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
      "heading": 34,
      "squawk": "7742",
      "timestamp": 1650026175,
      "ems": null
    },
    {
      "latitude": 50.987736,
      "longitude": 7.240295,
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1650026180,
      "ems": null
    },
    {
      "latitude": 50.989471,
      "longitude": 7.241326,
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
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1650026184,
      "ems": null
    },
    {
      "latitude": 50.990753,
      "longitude": 7.241846,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1650026188,
      "ems": null
    },
    {
      "latitude": 50.992264,
      "longitude": 7.241846,
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
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1650026192,
      "ems": null
    },
    {
      "latitude": 50.994297,
      "longitude": 7.240982,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "7742",
      "timestamp": 1650026196,
      "ems": null
    },
    {
      "latitude": 50.995285,
      "longitude": 7.240213,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 328,
      "squawk": "7742",
      "timestamp": 1650026200,
      "ems": null
    },
    {
      "latitude": 50.996441,
      "longitude": 7.23877,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 316,
      "squawk": "7742",
      "timestamp": 1650026204,
      "ems": null
    },
    {
      "latitude": 50.997559,
      "longitude": 7.23671,
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
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1650026208,
      "ems": null
    },
    {
      "latitude": 50.998077,
      "longitude": 7.235165,
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
      "heading": 294,
      "squawk": "7742",
      "timestamp": 1650026212,
      "ems": null
    },
    {
      "latitude": 50.998722,
      "longitude": 7.231674,
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
      "squawk": "7742",
      "timestamp": 1650026216,
      "ems": null
    },
    {
      "latitude": 50.998901,
      "longitude": 7.228856,
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
      "heading": 271,
      "squawk": "7742",
      "timestamp": 1650026220,
      "ems": null
    },
    {
      "latitude": 50.998768,
      "longitude": 7.226181,
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
      "squawk": "7742",
      "timestamp": 1650026224,
      "ems": null
    },
    {
      "latitude": 50.998215,
      "longitude": 7.223436,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1650026228,
      "ems": null
    },
    {
      "latitude": 50.99794,
      "longitude": 7.222546,
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1650026232,
      "ems": null
    },
    {
      "latitude": 50.996674,
      "longitude": 7.219925,
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1650026236,
      "ems": null
    },
    {
      "latitude": 50.994965,
      "longitude": 7.218018,
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1650026240,
      "ems": null
    },
    {
      "latitude": 50.993454,
      "longitude": 7.217127,
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1650026244,
      "ems": null
    },
    {
      "latitude": 50.991806,
      "longitude": 7.216607,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1650026248,
      "ems": null
    },
    {
      "latitude": 50.99025,
      "longitude": 7.216607,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1650026252,
      "ems": null
    },
    {
      "latitude": 50.98851,
      "longitude": 7.217201,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1650026256,
      "ems": null
    },
    {
      "latitude": 50.986992,
      "longitude": 7.218246,
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1650026260,
      "ems": null
    },
    {
      "latitude": 50.985626,
      "longitude": 7.219651,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1650026264,
      "ems": null
    },
    {
      "latitude": 50.984524,
      "longitude": 7.221375,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1650026268,
      "ems": null
    },
    {
      "latitude": 50.983639,
      "longitude": 7.223434,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1650026272,
      "ems": null
    },
    {
      "latitude": 50.983017,
      "longitude": 7.225515,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1650026276,
      "ems": null
    },
    {
      "latitude": 50.982697,
      "longitude": 7.227593,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1650026279,
      "ems": null
    },
    {
      "latitude": 50.982559,
      "longitude": 7.229152,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1650026282,
      "ems": null
    },
    {
      "latitude": 50.982513,
      "longitude": 7.231305,
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1650026285,
      "ems": null
    },
    {
      "latitude": 50.982559,
      "longitude": 7.233161,
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
      "heading": 85,
      "squawk": "7742",
      "timestamp": 1650026288,
      "ems": null
    },
    {
      "latitude": 50.982742,
      "longitude": 7.234942,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1650026291,
      "ems": null
    },
    {
      "latitude": 50.982925,
      "longitude": 7.235833,
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1650026293,
      "ems": null
    },
    {
      "latitude": 50.983658,
      "longitude": 7.238357,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 58,
      "squawk": "7742",
      "timestamp": 1650026297,
      "ems": null
    },
    {
      "latitude": 50.984482,
      "longitude": 7.240065,
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1650026301,
      "ems": null
    },
    {
      "latitude": 50.985592,
      "longitude": 7.241669,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 37,
      "squawk": "7742",
      "timestamp": 1650026305,
      "ems": null
    },
    {
      "latitude": 50.986759,
      "longitude": 7.242661,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1650026309,
      "ems": null
    },
    {
      "latitude": 50.987408,
      "longitude": 7.243042,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1650026311,
      "ems": null
    },
    {
      "latitude": 50.989132,
      "longitude": 7.243576,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1650026315,
      "ems": null
    },
    {
      "latitude": 50.990108,
      "longitude": 7.243576,
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
      "heading": 360,
      "squawk": "7742",
      "timestamp": 1650026318,
      "ems": null
    },
    {
      "latitude": 50.991486,
      "longitude": 7.243182,
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
      "heading": 344,
      "squawk": "7742",
      "timestamp": 1650026321,
      "ems": null
    },
    {
      "latitude": 50.992493,
      "longitude": 7.24244,
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
      "heading": 331,
      "squawk": "7742",
      "timestamp": 1650026324,
      "ems": null
    },
    {
      "latitude": 50.993637,
      "longitude": 7.240955,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7742",
      "timestamp": 1650026328,
      "ems": null
    },
    {
      "latitude": 50.994049,
      "longitude": 7.240065,
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
      "heading": 306,
      "squawk": "7742",
      "timestamp": 1650026332,
      "ems": null
    },
    {
      "latitude": 50.994827,
      "longitude": 7.237095,
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
      "heading": 283,
      "squawk": "7742",
      "timestamp": 1650026336,
      "ems": null
    },
    {
      "latitude": 50.994949,
      "longitude": 7.234497,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "7742",
      "timestamp": 1650026340,
      "ems": null
    },
    {
      "latitude": 50.99437,
      "longitude": 7.23138,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1650026344,
      "ems": null
    },
    {
      "latitude": 50.9935,
      "longitude": 7.229375,
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1650026348,
      "ems": null
    },
    {
      "latitude": 50.992218,
      "longitude": 7.227742,
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1650026352,
      "ems": null
    },
    {
      "latitude": 50.990433,
      "longitude": 7.226332,
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1650026356,
      "ems": null
    },
    {
      "latitude": 50.988758,
      "longitude": 7.225266,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650026360,
      "ems": null
    },
    {
      "latitude": 50.987316,
      "longitude": 7.22435,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650026364,
      "ems": null
    },
    {
      "latitude": 50.985214,
      "longitude": 7.223065,
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1650026368,
      "ems": null
    },
    {
      "latitude": 50.983547,
      "longitude": 7.222137,
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1650026372,
      "ems": null
    },
    {
      "latitude": 50.981915,
      "longitude": 7.221222,
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1650026376,
      "ems": null
    },
    {
      "latitude": 50.980408,
      "longitude": 7.220319,
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
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1650026380,
      "ems": null
    },
    {
      "latitude": 50.976791,
      "longitude": 7.217647,
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1650026388,
      "ems": null
    },
    {
      "latitude": 50.974236,
      "longitude": 7.215347,
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1650026396,
      "ems": null
    },
    {
      "latitude": 50.972652,
      "longitude": 7.213821,
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1650026400,
      "ems": null
    },
    {
      "latitude": 50.971664,
      "longitude": 7.21297,
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1650026404,
      "ems": null
    },
    {
      "latitude": 50.969254,
      "longitude": 7.21077,
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1650026408,
      "ems": null
    },
    {
      "latitude": 50.968094,
      "longitude": 7.209703,
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
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1650026411,
      "ems": null
    },
    {
      "latitude": 50.966995,
      "longitude": 7.20859,
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1650026414,
      "ems": null
    },
    {
      "latitude": 50.966042,
      "longitude": 7.207794,
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1650026417,
      "ems": null
    },
    {
      "latitude": 50.964661,
      "longitude": 7.206438,
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1650026420,
      "ems": null
    },
    {
      "latitude": 50.963608,
      "longitude": 7.205101,
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
      "heading": 220,
      "squawk": "7044",
      "timestamp": 1650026423,
      "ems": null
    },
    {
      "latitude": 50.962738,
      "longitude": 7.203674,
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
      "heading": 228,
      "squawk": "7044",
      "timestamp": 1650026426,
      "ems": null
    },
    {
      "latitude": 50.961945,
      "longitude": 7.202072,
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
      "heading": 234,
      "squawk": "7044",
      "timestamp": 1650026429,
      "ems": null
    },
    {
      "latitude": 50.961227,
      "longitude": 7.20035,
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
      "heading": 235,
      "squawk": "7044",
      "timestamp": 1650026432,
      "ems": null
    },
    {
      "latitude": 50.960548,
      "longitude": 7.198868,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 236,
      "squawk": "7044",
      "timestamp": 1650026435,
      "ems": null
    },
    {
      "latitude": 50.959854,
      "longitude": 7.197158,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 236,
      "squawk": "7044",
      "timestamp": 1650026438,
      "ems": null
    },
    {
      "latitude": 50.95903,
      "longitude": 7.195229,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 236,
      "squawk": "7044",
      "timestamp": 1650026441,
      "ems": null
    },
    {
      "latitude": 50.958298,
      "longitude": 7.193447,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 235,
      "squawk": "7044",
      "timestamp": 1650026444,
      "ems": null
    },
    {
      "latitude": 50.957657,
      "longitude": 7.191962,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 236,
      "squawk": "7044",
      "timestamp": 1650026447,
      "ems": null
    },
    {
      "latitude": 50.956879,
      "longitude": 7.190106,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 237,
      "squawk": "7044",
      "timestamp": 1650026450,
      "ems": null
    },
    {
      "latitude": 50.956219,
      "longitude": 7.188416,
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
      "heading": 238,
      "squawk": "7044",
      "timestamp": 1650026453,
      "ems": null
    },
    {
      "latitude": 50.955566,
      "longitude": 7.186737,
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
      "heading": 238,
      "squawk": "7044",
      "timestamp": 1650026456,
      "ems": null
    },
    {
      "latitude": 50.954216,
      "longitude": 7.18338,
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
      "heading": 237,
      "squawk": "7044",
      "timestamp": 1650026462,
      "ems": null
    },
    {
      "latitude": 50.952759,
      "longitude": 7.179862,
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
      "heading": 235,
      "squawk": "7044",
      "timestamp": 1650026468,
      "ems": null
    },
    {
      "latitude": 50.951191,
      "longitude": 7.17659,
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
      "heading": 231,
      "squawk": "7044",
      "timestamp": 1650026474,
      "ems": null
    },
    {
      "latitude": 50.950352,
      "longitude": 7.174835,
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
      "heading": 231,
      "squawk": "7044",
      "timestamp": 1650026477,
      "ems": null
    },
    {
      "latitude": 50.94854,
      "longitude": 7.171097,
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
      "heading": 232,
      "squawk": "7044",
      "timestamp": 1650026483,
      "ems": null
    },
    {
      "latitude": 50.947746,
      "longitude": 7.169647,
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
      "heading": 225,
      "squawk": "7044",
      "timestamp": 1650026486,
      "ems": null
    },
    {
      "latitude": 50.946674,
      "longitude": 7.168198,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1650026489,
      "ems": null
    },
    {
      "latitude": 50.945251,
      "longitude": 7.166946,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1650026492,
      "ems": null
    },
    {
      "latitude": 50.94379,
      "longitude": 7.16629,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1650026495,
      "ems": null
    },
    {
      "latitude": 50.942581,
      "longitude": 7.165833,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 192,
      "squawk": "7044",
      "timestamp": 1650026498,
      "ems": null
    },
    {
      "latitude": 50.941181,
      "longitude": 7.165375,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 192,
      "squawk": "7044",
      "timestamp": 1650026501,
      "ems": null
    },
    {
      "latitude": 50.939758,
      "longitude": 7.164867,
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
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1650026504,
      "ems": null
    },
    {
      "latitude": 50.938435,
      "longitude": 7.16423,
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
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1650026507,
      "ems": null
    },
    {
      "latitude": 50.937271,
      "longitude": 7.16362,
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
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650026510,
      "ems": null
    },
    {
      "latitude": 50.936016,
      "longitude": 7.162933,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650026513,
      "ems": null
    },
    {
      "latitude": 50.934723,
      "longitude": 7.16227,
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026516,
      "ems": null
    },
    {
      "latitude": 50.93335,
      "longitude": 7.161527,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026519,
      "ems": null
    },
    {
      "latitude": 50.932068,
      "longitude": 7.160933,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026522,
      "ems": null
    },
    {
      "latitude": 50.929592,
      "longitude": 7.159576,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026528,
      "ems": null
    },
    {
      "latitude": 50.92836,
      "longitude": 7.159003,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650026531,
      "ems": null
    },
    {
      "latitude": 50.925751,
      "longitude": 7.157815,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1650026537,
      "ems": null
    },
    {
      "latitude": 50.923027,
      "longitude": 7.156754,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 193,
      "squawk": "7044",
      "timestamp": 1650026543,
      "ems": null
    },
    {
      "latitude": 50.920139,
      "longitude": 7.155457,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650026549,
      "ems": null
    },
    {
      "latitude": 50.917419,
      "longitude": 7.153955,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650026555,
      "ems": null
    },
    {
      "latitude": 50.914719,
      "longitude": 7.152471,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650026561,
      "ems": null
    },
    {
      "latitude": 50.911995,
      "longitude": 7.150955,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650026567,
      "ems": null
    },
    {
      "latitude": 50.90892,
      "longitude": 7.1492,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650026573,
      "ems": null
    },
    {
      "latitude": 50.90799,
      "longitude": 7.148666,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650026576,
      "ems": null
    },
    {
      "latitude": 50.904739,
      "longitude": 7.146681,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650026582,
      "ems": null
    },
    {
      "latitude": 50.901009,
      "longitude": 7.145538,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 181,
      "squawk": "7044",
      "timestamp": 1650026590,
      "ems": null
    },
    {
      "latitude": 50.899517,
      "longitude": 7.14592,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 168,
      "squawk": "7044",
      "timestamp": 1650026594,
      "ems": null
    },
    {
      "latitude": 50.898121,
      "longitude": 7.146683,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 155,
      "squawk": "7044",
      "timestamp": 1650026598,
      "ems": null
    },
    {
      "latitude": 50.896729,
      "longitude": 7.147943,
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
      "heading": 144,
      "squawk": "7044",
      "timestamp": 1650026602,
      "ems": null
    },
    {
      "latitude": 50.89584,
      "longitude": 7.149048,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "7044",
      "timestamp": 1650026606,
      "ems": null
    },
    {
      "latitude": 50.893982,
      "longitude": 7.151432,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 142,
      "squawk": "7044",
      "timestamp": 1650026610,
      "ems": null
    },
    {
      "latitude": 50.89291,
      "longitude": 7.152634,
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
      "heading": 143,
      "squawk": "7044",
      "timestamp": 1650026613,
      "ems": null
    },
    {
      "latitude": 50.891884,
      "longitude": 7.153854,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "7044",
      "timestamp": 1650026616,
      "ems": null
    },
    {
      "latitude": 50.890907,
      "longitude": 7.154922,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "7044",
      "timestamp": 1650026619,
      "ems": null
    },
    {
      "latitude": 50.89072,
      "longitude": 7.155151,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "7044",
      "timestamp": 1650026620,
      "ems": null
    },
    {
      "latitude": 50.88937,
      "longitude": 7.156601,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "7044",
      "timestamp": 1650026623,
      "ems": null
    },
    {
      "latitude": 50.887939,
      "longitude": 7.158186,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "7044",
      "timestamp": 1650026627,
      "ems": null
    },
    {
      "latitude": 50.884949,
      "longitude": 7.16156,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7044",
      "timestamp": 1650026636,
      "ems": null
    },
    {
      "latitude": 50.883785,
      "longitude": 7.162781,
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
      "heading": 148,
      "squawk": "7044",
      "timestamp": 1650026640,
      "ems": null
    },
    {
      "latitude": 50.881439,
      "longitude": 7.165164,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7044",
      "timestamp": 1650026646,
      "ems": null
    },
    {
      "latitude": 50.879379,
      "longitude": 7.167317,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7044",
      "timestamp": 1650026652,
      "ems": null
    },
    {
      "latitude": 50.877182,
      "longitude": 7.169544,
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
      "heading": 148,
      "squawk": "7044",
      "timestamp": 1650026658,
      "ems": null
    },
    {
      "latitude": 50.876148,
      "longitude": 7.170563,
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
      "heading": 148,
      "squawk": "7044",
      "timestamp": 1650026661,
      "ems": null
    },
    {
      "latitude": 50.873978,
      "longitude": 7.172513,
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
      "heading": 151,
      "squawk": "7044",
      "timestamp": 1650026667,
      "ems": null
    },
    {
      "latitude": 50.871681,
      "longitude": 7.17453,
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
      "heading": 149,
      "squawk": "7044",
      "timestamp": 1650026673,
      "ems": null
    },
    {
      "latitude": 50.8694,
      "longitude": 7.176671,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 149,
      "squawk": "7044",
      "timestamp": 1650026679,
      "ems": null
    },
    {
      "latitude": 50.867111,
      "longitude": 7.178675,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 152,
      "squawk": "7044",
      "timestamp": 1650026685,
      "ems": null
    },
    {
      "latitude": 50.865967,
      "longitude": 7.179565,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 154,
      "squawk": "7044",
      "timestamp": 1650026688,
      "ems": null
    },
    {
      "latitude": 50.864883,
      "longitude": 7.180328,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 158,
      "squawk": "7044",
      "timestamp": 1650026691,
      "ems": null
    },
    {
      "latitude": 50.863579,
      "longitude": 7.181091,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1650026694,
      "ems": null
    },
    {
      "latitude": 50.86235,
      "longitude": 7.181867,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1650026697,
      "ems": null
    },
    {
      "latitude": 50.86116,
      "longitude": 7.182535,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 160,
      "squawk": "7044",
      "timestamp": 1650026700,
      "ems": null
    },
    {
      "latitude": 50.85997,
      "longitude": 7.183128,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 163,
      "squawk": "7044",
      "timestamp": 1650026703,
      "ems": null
    },
    {
      "latitude": 50.858871,
      "longitude": 7.1835,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 173,
      "squawk": "7044",
      "timestamp": 1650026706,
      "ems": null
    },
    {
      "latitude": 50.857407,
      "longitude": 7.183574,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 176,
      "squawk": "7044",
      "timestamp": 1650026709,
      "ems": null
    },
    {
      "latitude": 50.856037,
      "longitude": 7.183228,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 192,
      "squawk": "7044",
      "timestamp": 1650026712,
      "ems": null
    },
    {
      "latitude": 50.854874,
      "longitude": 7.182693,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1650026715,
      "ems": null
    },
    {
      "latitude": 50.85466,
      "longitude": 7.182535,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1650026718,
      "ems": null
    },
    {
      "latitude": 50.85236,
      "longitude": 7.180176,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1650026722,
      "ems": null
    },
    {
      "latitude": 50.851429,
      "longitude": 7.178345,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 240,
      "squawk": "7044",
      "timestamp": 1650026726,
      "ems": null
    },
    {
      "latitude": 50.850826,
      "longitude": 7.17514,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 268,
      "squawk": "7044",
      "timestamp": 1650026730,
      "ems": null
    },
    {
      "latitude": 50.850906,
      "longitude": 7.173627,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 280,
      "squawk": "7044",
      "timestamp": 1650026734,
      "ems": null
    },
    {
      "latitude": 50.851711,
      "longitude": 7.171097,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 301,
      "squawk": "7044",
      "timestamp": 1650026738,
      "ems": null
    },
    {
      "latitude": 50.853104,
      "longitude": 7.168653,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 317,
      "squawk": "7044",
      "timestamp": 1650026743,
      "ems": null
    },
    {
      "latitude": 50.854408,
      "longitude": 7.166824,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 314,
      "squawk": "7044",
      "timestamp": 1650026747,
      "ems": null
    },
    {
      "latitude": 50.868622,
      "longitude": 7.146161,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 317,
      "squawk": "7044",
      "timestamp": 1650026790,
      "ems": null
    },
    {
      "latitude": 50.871353,
      "longitude": 7.142258,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 317,
      "squawk": "7044",
      "timestamp": 1650026798,
      "ems": null
    },
    {
      "latitude": 50.879105,
      "longitude": 7.130943,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 315,
      "squawk": "7044",
      "timestamp": 1650026823,
      "ems": null
    },
    {
      "latitude": 50.880478,
      "longitude": 7.129211,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 324,
      "squawk": "7044",
      "timestamp": 1650026828,
      "ems": null
    },
    {
      "latitude": 50.882015,
      "longitude": 7.127457,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 322,
      "squawk": "7044",
      "timestamp": 1650026835,
      "ems": null
    },
    {
      "latitude": 50.882584,
      "longitude": 7.126564,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 315,
      "squawk": "7044",
      "timestamp": 1650026838,
      "ems": null
    },
    {
      "latitude": 50.883087,
      "longitude": 7.125473,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 302,
      "squawk": "7044",
      "timestamp": 1650026841,
      "ems": null
    },
    {
      "latitude": 50.883366,
      "longitude": 7.124329,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 286,
      "squawk": "7044",
      "timestamp": 1650026843,
      "ems": null
    },
    {
      "latitude": 50.883553,
      "longitude": 7.122726,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 273,
      "squawk": "7044",
      "timestamp": 1650026847,
      "ems": null
    },
    {
      "latitude": 50.883499,
      "longitude": 7.121367,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 264,
      "squawk": "7044",
      "timestamp": 1650026850,
      "ems": null
    },
    {
      "latitude": 50.88327,
      "longitude": 7.119809,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 254,
      "squawk": "7044",
      "timestamp": 1650026853,
      "ems": null
    },
    {
      "latitude": 50.8829,
      "longitude": 7.118454,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 244,
      "squawk": "7044",
      "timestamp": 1650026856,
      "ems": null
    },
    {
      "latitude": 50.882389,
      "longitude": 7.117081,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 235,
      "squawk": "7044",
      "timestamp": 1650026859,
      "ems": null
    },
    {
      "latitude": 50.881687,
      "longitude": 7.115707,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 224,
      "squawk": "7044",
      "timestamp": 1650026862,
      "ems": null
    },
    {
      "latitude": 50.880852,
      "longitude": 7.114716,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1650026865,
      "ems": null
    },
    {
      "latitude": 50.880341,
      "longitude": 7.11439,
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026866,
      "ems": null
    },
    {
      "latitude": 50.879791,
      "longitude": 7.114093,
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
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1650026870,
      "ems": null
    },
    {
      "latitude": 50.877548,
      "longitude": 7.11335,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "7044",
      "timestamp": 1650026874,
      "ems": null
    },
    {
      "latitude": 50.876495,
      "longitude": 7.113276,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7044",
      "timestamp": 1650026877,
      "ems": null
    },
    {
      "latitude": 50.875359,
      "longitude": 7.113342,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 178,
      "squawk": "7044",
      "timestamp": 1650026879,
      "ems": null
    },
    {
      "latitude": 50.874115,
      "longitude": 7.113499,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 174,
      "squawk": "7044",
      "timestamp": 1650026883,
      "ems": null
    },
    {
      "latitude": 50.872936,
      "longitude": 7.113647,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 174,
      "squawk": "7044",
      "timestamp": 1650026886,
      "ems": null
    },
    {
      "latitude": 50.871552,
      "longitude": 7.11387,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 174,
      "squawk": "7044",
      "timestamp": 1650026889,
      "ems": null
    },
    {
      "latitude": 50.87027,
      "longitude": 7.114018,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 175,
      "squawk": "7044",
      "timestamp": 1650026892,
      "ems": null
    },
    {
      "latitude": 50.869259,
      "longitude": 7.114182,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 175,
      "squawk": "7044",
      "timestamp": 1650026895,
      "ems": null
    },
    {
      "latitude": 50.867981,
      "longitude": 7.114316,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 175,
      "squawk": "7044",
      "timestamp": 1650026898,
      "ems": null
    },
    {
      "latitude": 50.866791,
      "longitude": 7.114464,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 175,
      "squawk": "7044",
      "timestamp": 1650026901,
      "ems": null
    },
    {
      "latitude": 50.865536,
      "longitude": 7.114639,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 176,
      "squawk": "7044",
      "timestamp": 1650026904,
      "ems": null
    },
    {
      "latitude": 50.863163,
      "longitude": 7.114868,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 176,
      "squawk": "7044",
      "timestamp": 1650026910,
      "ems": null
    },
    {
      "latitude": 50.860462,
      "longitude": 7.115021,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 178,
      "squawk": "7044",
      "timestamp": 1650026916,
      "ems": null
    },
    {
      "latitude": 50.857864,
      "longitude": 7.115206,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 180,
      "squawk": "7044",
      "timestamp": 1650026922,
      "ems": null
    },
    {
      "latitude": 50.856552,
      "longitude": 7.114944,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 193,
      "squawk": "7044",
      "timestamp": 1650026925,
      "ems": null
    },
    {
      "latitude": 50.855301,
      "longitude": 7.114241,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026928,
      "ems": null
    },
    {
      "latitude": 50.854084,
      "longitude": 7.113419,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026931,
      "ems": null
    },
    {
      "latitude": 50.852734,
      "longitude": 7.112579,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1650026934,
      "ems": null
    },
    {
      "latitude": 50.851292,
      "longitude": 7.11174,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650026937,
      "ems": null
    },
    {
      "latitude": 50.849991,
      "longitude": 7.110901,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650026940,
      "ems": null
    },
    {
      "latitude": 50.848663,
      "longitude": 7.110158,
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026943,
      "ems": null
    },
    {
      "latitude": 50.84724,
      "longitude": 7.109451,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026946,
      "ems": null
    },
    {
      "latitude": 50.84589,
      "longitude": 7.108765,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650026949,
      "ems": null
    },
    {
      "latitude": 50.843124,
      "longitude": 7.107338,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650026955,
      "ems": null
    },
    {
      "latitude": 50.840488,
      "longitude": 7.105789,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1650026961,
      "ems": null
    },
    {
      "latitude": 50.837559,
      "longitude": 7.103882,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026967,
      "ems": null
    },
    {
      "latitude": 50.834949,
      "longitude": 7.102203,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026973,
      "ems": null
    },
    {
      "latitude": 50.833603,
      "longitude": 7.101251,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1650026976,
      "ems": null
    },
    {
      "latitude": 50.832275,
      "longitude": 7.10036,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1650026979,
      "ems": null
    },
    {
      "latitude": 50.829689,
      "longitude": 7.098618,
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026985,
      "ems": null
    },
    {
      "latitude": 50.825775,
      "longitude": 7.096055,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650026994,
      "ems": null
    },
    {
      "latitude": 50.823074,
      "longitude": 7.094347,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650027000,
      "ems": null
    },
    {
      "latitude": 50.821701,
      "longitude": 7.093605,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650027003,
      "ems": null
    },
    {
      "latitude": 50.820328,
      "longitude": 7.092863,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1650027006,
      "ems": null
    },
    {
      "latitude": 50.81889,
      "longitude": 7.092209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650027009,
      "ems": null
    },
    {
      "latitude": 50.816422,
      "longitude": 7.090912,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650027015,
      "ems": null
    },
    {
      "latitude": 50.81337,
      "longitude": 7.089299,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650027021,
      "ems": null
    },
    {
      "latitude": 50.81044,
      "longitude": 7.087667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650027027,
      "ems": null
    },
    {
      "latitude": 50.807648,
      "longitude": 7.086182,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650027033,
      "ems": null
    },
    {
      "latitude": 50.803482,
      "longitude": 7.083893,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650027042,
      "ems": null
    },
    {
      "latitude": 50.800873,
      "longitude": 7.082367,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1650027048,
      "ems": null
    },
    {
      "latitude": 50.798309,
      "longitude": 7.080688,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650027054,
      "ems": null
    },
    {
      "latitude": 50.795837,
      "longitude": 7.079278,
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650027060,
      "ems": null
    },
    {
      "latitude": 50.793274,
      "longitude": 7.078016,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1650027066,
      "ems": null
    },
    {
      "latitude": 50.790939,
      "longitude": 7.07668,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650027072,
      "ems": null
    },
    {
      "latitude": 50.789051,
      "longitude": 7.075653,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1650027078,
      "ems": null
    },
    {
      "latitude": 50.786118,
      "longitude": 7.073822,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1650027084,
      "ems": null
    },
    {
      "latitude": 50.783844,
      "longitude": 7.072523,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1650027090,
      "ems": null
    },
    {
      "latitude": 50.781326,
      "longitude": 7.07141,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1650027096,
      "ems": null
    },
    {
      "latitude": 50.7789,
      "longitude": 7.07037,
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
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1650027102,
      "ems": null
    },
    {
      "latitude": 50.777691,
      "longitude": 7.069778,
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
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1650027105,
      "ems": null
    },
    {
      "latitude": 50.776337,
      "longitude": 7.069182,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1650027108,
      "ems": null
    },
    {
      "latitude": 50.775085,
      "longitude": 7.06871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1650027111,
      "ems": null
    },
    {
      "latitude": 50.773682,
      "longitude": 7.068143,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1650027114,
      "ems": null
    },
    {
      "latitude": 50.7724,
      "longitude": 7.067624,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1650027117,
      "ems": null
    },
    {
      "latitude": 50.768753,
      "longitude": 7.066422,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1650027126,
      "ems": null
    },
    {
      "latitude": 50.767273,
      "longitude": 7.06599,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1650027129,
      "ems": null
    },
    {
      "latitude": 50.765945,
      "longitude": 7.065694,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1650027132,
      "ems": null
    },
    {
      "latitude": 50.76461,
      "longitude": 7.065353,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1650027135,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.064743,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1650027141,
      "ems": null
    },
    {
      "latitude": 50.759769,
      "longitude": 7.064133,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1650027148,
      "ems": null
    },
    {
      "latitude": 50.758209,
      "longitude": 7.063986,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1650027152,
      "ems": null
    },
    {
      "latitude": 50.756378,
      "longitude": 7.063764,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1650027156,
      "ems": null
    },
    {
      "latitude": 50.755112,
      "longitude": 7.063675,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1650027159,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 7.063522,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1650027162,
      "ems": null
    },
    {
      "latitude": 50.752739,
      "longitude": 7.06337,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1650027165,
      "ems": null
    },
    {
      "latitude": 50.751575,
      "longitude": 7.06337,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1650027168,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.063599,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1650027171,
      "ems": null
    },
    {
      "latitude": 50.74897,
      "longitude": 7.06398,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1650027174,
      "ems": null
    },
    {
      "latitude": 50.747589,
      "longitude": 7.064357,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1650027177,
      "ems": null
    },
    {
      "latitude": 50.746315,
      "longitude": 7.064743,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1650027180,
      "ems": null
    },
    {
      "latitude": 50.744965,
      "longitude": 7.065201,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1650027183,
      "ems": null
    },
    {
      "latitude": 50.743469,
      "longitude": 7.065768,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1650027186,
      "ems": null
    },
    {
      "latitude": 50.742172,
      "longitude": 7.066193,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1650027189,
      "ems": null
    },
    {
      "latitude": 50.740913,
      "longitude": 7.06665,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1650027192,
      "ems": null
    },
    {
      "latitude": 50.739395,
      "longitude": 7.067178,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1650027195,
      "ems": null
    },
    {
      "latitude": 50.738167,
      "longitude": 7.067566,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1650027198,
      "ems": null
    },
    {
      "latitude": 50.735283,
      "longitude": 7.067871,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1650027204,
      "ems": null
    },
    {
      "latitude": 50.733856,
      "longitude": 7.067549,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1650027207,
      "ems": null
    },
    {
      "latitude": 50.732712,
      "longitude": 7.066956,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1650027210,
      "ems": null
    },
    {
      "latitude": 50.731327,
      "longitude": 7.06604,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1650027213,
      "ems": null
    },
    {
      "latitude": 50.730114,
      "longitude": 7.065201,
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
      "squawk": "7000",
      "timestamp": 1650027216,
      "ems": null
    },
    {
      "latitude": 50.728958,
      "longitude": 7.064432,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1650027219,
      "ems": null
    },
    {
      "latitude": 50.727905,
      "longitude": 7.063689,
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1650027222,
      "ems": null
    },
    {
      "latitude": 50.72644,
      "longitude": 7.06265,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1650027225,
      "ems": null
    },
    {
      "latitude": 50.725132,
      "longitude": 7.061768,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1650027228,
      "ems": null
    },
    {
      "latitude": 50.723877,
      "longitude": 7.061017,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1650027231,
      "ems": null
    },
    {
      "latitude": 50.722622,
      "longitude": 7.060242,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1650027234,
      "ems": null
    },
    {
      "latitude": 50.721359,
      "longitude": 7.059458,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1650027237,
      "ems": null
    },
    {
      "latitude": 50.71875,
      "longitude": 7.057825,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1650027243,
      "ems": null
    },
    {
      "latitude": 50.716103,
      "longitude": 7.056351,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1650027249,
      "ems": null
    },
    {
      "latitude": 50.714752,
      "longitude": 7.05574,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1650027252,
      "ems": null
    },
    {
      "latitude": 50.713257,
      "longitude": 7.055079,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1650027255,
      "ems": null
    },
    {
      "latitude": 50.711884,
      "longitude": 7.054484,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1650027258,
      "ems": null
    },
    {
      "latitude": 50.710564,
      "longitude": 7.053833,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1650027261,
      "ems": null
    },
    {
      "latitude": 50.709091,
      "longitude": 7.053223,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1650027264,
      "ems": null
    },
    {
      "latitude": 50.707909,
      "longitude": 7.052765,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1650027267,
      "ems": null
    },
    {
      "latitude": 50.706345,
      "longitude": 7.052109,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1650027270,
      "ems": null
    },
    {
      "latitude": 50.703629,
      "longitude": 7.050934,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1650027276,
      "ems": null
    },
    {
      "latitude": 50.700806,
      "longitude": 7.049956,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1650027283,
      "ems": null
    },
    {
      "latitude": 50.699615,
      "longitude": 7.049585,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1650027285,
      "ems": null
    },
    {
      "latitude": 50.698086,
      "longitude": 7.049179,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1650027288,
      "ems": null
    },
    {
      "latitude": 50.69669,
      "longitude": 7.048721,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1650027291,
      "ems": null
    },
    {
      "latitude": 50.693939,
      "longitude": 7.047878,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1650027298,
      "ems": null
    },
    {
      "latitude": 50.691284,
      "longitude": 7.046839,
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1650027304,
      "ems": null
    },
    {
      "latitude": 50.689011,
      "longitude": 7.045746,
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
      "heading": 195,
      "squawk": "4451",
      "timestamp": 1650027310,
      "ems": null
    },
    {
      "latitude": 50.686077,
      "longitude": 7.044983,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1650027315,
      "ems": null
    },
    {
      "latitude": 50.68454,
      "longitude": 7.045288,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1650027318,
      "ems": null
    },
    {
      "latitude": 50.683235,
      "longitude": 7.046051,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1650027322,
      "ems": null
    },
    {
      "latitude": 50.681889,
      "longitude": 7.047653,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1650027325,
      "ems": null
    },
    {
      "latitude": 50.681122,
      "longitude": 7.04914,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1650027327,
      "ems": null
    },
    {
      "latitude": 50.680164,
      "longitude": 7.051239,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1650027331,
      "ems": null
    },
    {
      "latitude": 50.679245,
      "longitude": 7.052703,
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
      "heading": 136,
      "squawk": "4451",
      "timestamp": 1650027333,
      "ems": null
    },
    {
      "latitude": 50.678162,
      "longitude": 7.053909,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1650027336,
      "ems": null
    },
    {
      "latitude": 50.676773,
      "longitude": 7.05493,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1650027340,
      "ems": null
    },
    {
      "latitude": 50.675602,
      "longitude": 7.055511,
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1650027342,
      "ems": null
    },
    {
      "latitude": 50.672714,
      "longitude": 7.05658,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1650027349,
      "ems": null
    },
    {
      "latitude": 50.671413,
      "longitude": 7.057008,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1650027352,
      "ems": null
    },
    {
      "latitude": 50.669968,
      "longitude": 7.05738,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1650027355,
      "ems": null
    },
    {
      "latitude": 50.668758,
      "longitude": 7.057751,
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1650027358,
      "ems": null
    },
    {
      "latitude": 50.667435,
      "longitude": 7.058282,
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1650027360,
      "ems": null
    },
    {
      "latitude": 50.666428,
      "longitude": 7.058933,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1650027364,
      "ems": null
    },
    {
      "latitude": 50.665009,
      "longitude": 7.060523,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1650027367,
      "ems": null
    },
    {
      "latitude": 50.664059,
      "longitude": 7.06213,
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1650027370,
      "ems": null
    },
    {
      "latitude": 50.663361,
      "longitude": 7.063986,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1650027373,
      "ems": null
    },
    {
      "latitude": 50.662895,
      "longitude": 7.065545,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1650027375,
      "ems": null
    },
    {
      "latitude": 50.662262,
      "longitude": 7.067461,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1650027379,
      "ems": null
    },
    {
      "latitude": 50.661545,
      "longitude": 7.069331,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "4451",
      "timestamp": 1650027382,
      "ems": null
    },
    {
      "latitude": 50.660984,
      "longitude": 7.071113,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1650027384,
      "ems": null
    },
    {
      "latitude": 50.660522,
      "longitude": 7.073027,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1650027388,
      "ems": null
    },
    {
      "latitude": 50.659973,
      "longitude": 7.075123,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1650027391,
      "ems": null
    },
    {
      "latitude": 50.659496,
      "longitude": 7.076977,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1650027394,
      "ems": null
    },
    {
      "latitude": 50.659012,
      "longitude": 7.078809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1650027396,
      "ems": null
    },
    {
      "latitude": 50.658463,
      "longitude": 7.080905,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "4451",
      "timestamp": 1650027400,
      "ems": null
    },
    {
      "latitude": 50.657402,
      "longitude": 7.084994,
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
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1650027406,
      "ems": null
    },
    {
      "latitude": 50.656906,
      "longitude": 7.086977,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1650027409,
      "ems": null
    },
    {
      "latitude": 50.656448,
      "longitude": 7.088639,
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1650027412,
      "ems": null
    },
    {
      "latitude": 50.65567,
      "longitude": 7.090518,
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
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1650027415,
      "ems": null
    },
    {
      "latitude": 50.655075,
      "longitude": 7.091819,
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
      "heading": 128,
      "squawk": "4451",
      "timestamp": 1650027418,
      "ems": null
    },
    {
      "latitude": 50.654022,
      "longitude": 7.093626,
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1650027421,
      "ems": null
    },
    {
      "latitude": 50.653164,
      "longitude": 7.095015,
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
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1650027424,
      "ems": null
    },
    {
      "latitude": 50.652054,
      "longitude": 7.096301,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1650027427,
      "ems": null
    },
    {
      "latitude": 50.650955,
      "longitude": 7.097312,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1650027429,
      "ems": null
    },
    {
      "latitude": 50.649811,
      "longitude": 7.098324,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1650027433,
      "ems": null
    },
    {
      "latitude": 50.648788,
      "longitude": 7.099469,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1650027436,
      "ems": null
    },
    {
      "latitude": 50.647812,
      "longitude": 7.101251,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1650027439,
      "ems": null
    },
    {
      "latitude": 50.647297,
      "longitude": 7.103181,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1650027442,
      "ems": null
    },
    {
      "latitude": 50.647064,
      "longitude": 7.105263,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 99,
      "squawk": "4451",
      "timestamp": 1650027445,
      "ems": null
    },
    {
      "latitude": 50.646881,
      "longitude": 7.107486,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1650027448,
      "ems": null
    },
    {
      "latitude": 50.64674,
      "longitude": 7.109268,
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
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1650027451,
      "ems": null
    },
    {
      "latitude": 50.646599,
      "longitude": 7.111643,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 97,
      "squawk": "4451",
      "timestamp": 1650027454,
      "ems": null
    },
    {
      "latitude": 50.646332,
      "longitude": 7.11372,
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
      "heading": 106,
      "squawk": "4451",
      "timestamp": 1650027457,
      "ems": null
    },
    {
      "latitude": 50.645782,
      "longitude": 7.115671,
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
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1650027460,
      "ems": null
    },
    {
      "latitude": 50.64497,
      "longitude": 7.117582,
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
      "heading": 127,
      "squawk": "4451",
      "timestamp": 1650027463,
      "ems": null
    },
    {
      "latitude": 50.643997,
      "longitude": 7.119358,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1650027466,
      "ems": null
    },
    {
      "latitude": 50.643063,
      "longitude": 7.120996,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1650027469,
      "ems": null
    },
    {
      "latitude": 50.642212,
      "longitude": 7.122899,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "4451",
      "timestamp": 1650027472,
      "ems": null
    },
    {
      "latitude": 50.641571,
      "longitude": 7.124782,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1650027475,
      "ems": null
    },
    {
      "latitude": 50.641155,
      "longitude": 7.126564,
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
      "heading": 108,
      "squawk": "4451",
      "timestamp": 1650027477,
      "ems": null
    },
    {
      "latitude": 50.641068,
      "longitude": 7.129477,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 84,
      "squawk": "4451",
      "timestamp": 1650027483,
      "ems": null
    },
    {
      "latitude": 50.641525,
      "longitude": 7.132503,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 73,
      "squawk": "4451",
      "timestamp": 1650027485,
      "ems": null
    },
    {
      "latitude": 50.641945,
      "longitude": 7.134507,
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
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1650027489,
      "ems": null
    },
    {
      "latitude": 50.642319,
      "longitude": 7.136956,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 77,
      "squawk": "4451",
      "timestamp": 1650027493,
      "ems": null
    },
    {
      "latitude": 50.642551,
      "longitude": 7.139406,
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
      "heading": 83,
      "squawk": "4451",
      "timestamp": 1650027496,
      "ems": null
    },
    {
      "latitude": 50.642689,
      "longitude": 7.141484,
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
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1650027499,
      "ems": null
    },
    {
      "latitude": 50.642807,
      "longitude": 7.143498,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 85,
      "squawk": "4451",
      "timestamp": 1650027502,
      "ems": null
    },
    {
      "latitude": 50.642944,
      "longitude": 7.145522,
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
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1650027505,
      "ems": null
    },
    {
      "latitude": 50.643127,
      "longitude": 7.147185,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 79,
      "squawk": "4451",
      "timestamp": 1650027508,
      "ems": null
    },
    {
      "latitude": 50.643436,
      "longitude": 7.151803,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 88,
      "squawk": "4451",
      "timestamp": 1650027514,
      "ems": null
    },
    {
      "latitude": 50.643402,
      "longitude": 7.153617,
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
      "heading": 96,
      "squawk": "4451",
      "timestamp": 1650027517,
      "ems": null
    },
    {
      "latitude": 50.643082,
      "longitude": 7.155931,
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
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1650027520,
      "ems": null
    },
    {
      "latitude": 50.642715,
      "longitude": 7.15781,
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
      "heading": 109,
      "squawk": "4451",
      "timestamp": 1650027523,
      "ems": null
    },
    {
      "latitude": 50.642223,
      "longitude": 7.15982,
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
      "heading": 113,
      "squawk": "4451",
      "timestamp": 1650027526,
      "ems": null
    },
    {
      "latitude": 50.641663,
      "longitude": 7.161568,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 117,
      "squawk": "4451",
      "timestamp": 1650027529,
      "ems": null
    },
    {
      "latitude": 50.640656,
      "longitude": 7.163809,
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
      "heading": 114,
      "squawk": "4451",
      "timestamp": 1650027533,
      "ems": null
    },
    {
      "latitude": 50.639523,
      "longitude": 7.165016,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1650027537,
      "ems": null
    },
    {
      "latitude": 50.638275,
      "longitude": 7.165905,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1650027539,
      "ems": null
    },
    {
      "latitude": 50.636684,
      "longitude": 7.166278,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1650027543,
      "ems": null
    },
    {
      "latitude": 50.634888,
      "longitude": 7.165833,
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
      "heading": 193,
      "squawk": "4451",
      "timestamp": 1650027547,
      "ems": null
    },
    {
      "latitude": 50.633881,
      "longitude": 7.165254,
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1650027550,
      "ems": null
    },
    {
      "latitude": 50.632919,
      "longitude": 7.164315,
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
      "heading": 217,
      "squawk": "4451",
      "timestamp": 1650027553,
      "ems": null
    },
    {
      "latitude": 50.631191,
      "longitude": 7.161675,
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1650027558,
      "ems": null
    },
    {
      "latitude": 50.630219,
      "longitude": 7.158533,
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
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1650027563,
      "ems": null
    },
    {
      "latitude": 50.629944,
      "longitude": 7.155714,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 267,
      "squawk": "4451",
      "timestamp": 1650027567,
      "ems": null
    },
    {
      "latitude": 50.629944,
      "longitude": 7.154702,
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
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1650027571,
      "ems": null
    },
    {
      "latitude": 50.630402,
      "longitude": 7.150986,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1650027575,
      "ems": null
    },
    {
      "latitude": 50.630913,
      "longitude": 7.149205,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1650027579,
      "ems": null
    },
    {
      "latitude": 50.631683,
      "longitude": 7.147257,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1650027583,
      "ems": null
    },
    {
      "latitude": 50.632496,
      "longitude": 7.14579,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1650027586,
      "ems": null
    },
    {
      "latitude": 50.63324,
      "longitude": 7.1448,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1650027589,
      "ems": null
    },
    {
      "latitude": 50.634521,
      "longitude": 7.143571,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1650027593,
      "ems": null
    },
    {
      "latitude": 50.635845,
      "longitude": 7.142746,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1650027597,
      "ems": null
    },
    {
      "latitude": 50.637241,
      "longitude": 7.142078,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1650027601,
      "ems": null
    },
    {
      "latitude": 50.639099,
      "longitude": 7.14133,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1650027606,
      "ems": null
    },
    {
      "latitude": 50.640701,
      "longitude": 7.14068,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1650027610,
      "ems": null
    },
    {
      "latitude": 50.641758,
      "longitude": 7.140223,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1650027613,
      "ems": null
    },
    {
      "latitude": 50.642784,
      "longitude": 7.139628,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1650027616,
      "ems": null
    },
    {
      "latitude": 50.643631,
      "longitude": 7.13909,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1650027619,
      "ems": null
    },
    {
      "latitude": 50.645855,
      "longitude": 7.137402,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1650027625,
      "ems": null
    },
    {
      "latitude": 50.646832,
      "longitude": 7.136659,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1650027628,
      "ems": null
    },
    {
      "latitude": 50.647751,
      "longitude": 7.135837,
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
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1650027631,
      "ems": null
    },
    {
      "latitude": 50.648647,
      "longitude": 7.134952,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1650027634,
      "ems": null
    },
    {
      "latitude": 50.649441,
      "longitude": 7.133987,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1650027637,
      "ems": null
    },
    {
      "latitude": 50.65004,
      "longitude": 7.133307,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1650027641,
      "ems": null
    },
    {
      "latitude": 50.651581,
      "longitude": 7.131092,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1650027645,
      "ems": null
    },
    {
      "latitude": 50.652237,
      "longitude": 7.130127,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1650027649,
      "ems": null
    },
    {
      "latitude": 50.653656,
      "longitude": 7.128031,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1650027653,
      "ems": null
    },
    {
      "latitude": 50.654663,
      "longitude": 7.126585,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1650027657,
      "ems": null
    },
    {
      "latitude": 50.655819,
      "longitude": 7.124708,
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1650027661,
      "ems": null
    },
    {
      "latitude": 50.656631,
      "longitude": 7.123549,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1650027664,
      "ems": null
    },
    {
      "latitude": 50.657272,
      "longitude": 7.12261,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1650027667,
      "ems": null
    },
    {
      "latitude": 50.658279,
      "longitude": 7.121092,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1650027670,
      "ems": null
    },
    {
      "latitude": 50.660019,
      "longitude": 7.118562,
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1650027676,
      "ems": null
    },
    {
      "latitude": 50.661484,
      "longitude": 7.116322,
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1650027682,
      "ems": null
    },
    {
      "latitude": 50.663361,
      "longitude": 7.113214,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1650027690,
      "ems": null
    },
    {
      "latitude": 50.665787,
      "longitude": 7.109094,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1650027697,
      "ems": null
    },
    {
      "latitude": 50.667736,
      "longitude": 7.106744,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1650027703,
      "ems": null
    },
    {
      "latitude": 50.668434,
      "longitude": 7.106373,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1650027706,
      "ems": null
    },
    {
      "latitude": 50.669632,
      "longitude": 7.105914,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1650027709,
      "ems": null
    },
    {
      "latitude": 50.671413,
      "longitude": 7.105779,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1650027713,
      "ems": null
    },
    {
      "latitude": 50.672668,
      "longitude": 7.105865,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1650027717,
      "ems": null
    },
    {
      "latitude": 50.674072,
      "longitude": 7.106001,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1650027721,
      "ems": null
    },
    {
      "latitude": 50.675602,
      "longitude": 7.1064,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1650027725,
      "ems": null
    },
    {
      "latitude": 50.676811,
      "longitude": 7.10701,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1650027729,
      "ems": null
    },
    {
      "latitude": 50.678238,
      "longitude": 7.107783,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1650027733,
      "ems": null
    },
    {
      "latitude": 50.679108,
      "longitude": 7.108377,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1650027737,
      "ems": null
    },
    {
      "latitude": 50.68071,
      "longitude": 7.109342,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1650027741,
      "ems": null
    },
    {
      "latitude": 50.68198,
      "longitude": 7.110214,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1650027745,
      "ems": null
    },
    {
      "latitude": 50.683182,
      "longitude": 7.111124,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1650027749,
      "ems": null
    },
    {
      "latitude": 50.684326,
      "longitude": 7.11194,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1650027753,
      "ems": null
    },
    {
      "latitude": 50.687164,
      "longitude": 7.113425,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1650027761,
      "ems": null
    },
    {
      "latitude": 50.688034,
      "longitude": 7.113796,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1650027763,
      "ems": null
    },
    {
      "latitude": 50.689316,
      "longitude": 7.114167,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1650027766,
      "ems": null
    },
    {
      "latitude": 50.690361,
      "longitude": 7.11441,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1650027769,
      "ems": null
    },
    {
      "latitude": 50.691467,
      "longitude": 7.114613,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1650027773,
      "ems": null
    },
    {
      "latitude": 50.692547,
      "longitude": 7.114716,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1650027775,
      "ems": null
    },
    {
      "latitude": 50.693619,
      "longitude": 7.114868,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1650027778,
      "ems": null
    },
    {
      "latitude": 50.694305,
      "longitude": 7.114909,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1650027781,
      "ems": null
    },
    {
      "latitude": 50.695862,
      "longitude": 7.114984,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1650027784,
      "ems": null
    },
    {
      "latitude": 50.69669,
      "longitude": 7.115021,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1650027787,
      "ems": null
    },
    {
      "latitude": 50.697784,
      "longitude": 7.115058,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1650027790,
      "ems": null
    },
    {
      "latitude": 50.698833,
      "longitude": 7.115021,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1650027793,
      "ems": null
    },
    {
      "latitude": 50.70023,
      "longitude": 7.114944,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1650027797,
      "ems": null
    },
    {
      "latitude": 50.700806,
      "longitude": 7.114909,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1650027799,
      "ems": null
    },
    {
      "latitude": 50.702591,
      "longitude": 7.114909,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1650027803,
      "ems": null
    },
    {
      "latitude": 50.704651,
      "longitude": 7.115503,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1650027809,
      "ems": null
    },
    {
      "latitude": 50.705566,
      "longitude": 7.1158,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1650027811,
      "ems": null
    },
    {
      "latitude": 50.706528,
      "longitude": 7.116097,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1650027814,
      "ems": null
    },
    {
      "latitude": 50.708221,
      "longitude": 7.116394,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1650027821,
      "ems": null
    },
    {
      "latitude": 50.709549,
      "longitude": 7.116542,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1650027824,
      "ems": null
    },
    {
      "latitude": 50.710602,
      "longitude": 7.116691,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1650027827,
      "ems": null
    },
    {
      "latitude": 50.710968,
      "longitude": 7.116765,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1650027829,
      "ems": null
    },
    {
      "latitude": 50.712704,
      "longitude": 7.117233,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1650027833,
      "ems": null
    },
    {
      "latitude": 50.71376,
      "longitude": 7.117582,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1650027835,
      "ems": null
    },
    {
      "latitude": 50.71587,
      "longitude": 7.118378,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1650027841,
      "ems": null
    },
    {
      "latitude": 50.718018,
      "longitude": 7.119215,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1650027847,
      "ems": null
    },
    {
      "latitude": 50.719173,
      "longitude": 7.119751,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1650027851,
      "ems": null
    },
    {
      "latitude": 50.720032,
      "longitude": 7.12018,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1650027854,
      "ems": null
    },
    {
      "latitude": 50.721176,
      "longitude": 7.120848,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1650027857,
      "ems": null
    },
    {
      "latitude": 50.722046,
      "longitude": 7.121367,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1650027860,
      "ems": null
    },
    {
      "latitude": 50.723179,
      "longitude": 7.122116,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1650027863,
      "ems": null
    },
    {
      "latitude": 50.724014,
      "longitude": 7.122555,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1650027866,
      "ems": null
    },
    {
      "latitude": 50.72504,
      "longitude": 7.123184,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1650027869,
      "ems": null
    },
    {
      "latitude": 50.726158,
      "longitude": 7.123871,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1650027872,
      "ems": null
    },
    {
      "latitude": 50.727089,
      "longitude": 7.124634,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1650027875,
      "ems": null
    },
    {
      "latitude": 50.727905,
      "longitude": 7.125302,
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1650027878,
      "ems": null
    },
    {
      "latitude": 50.728764,
      "longitude": 7.126083,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1650027881,
      "ems": null
    },
    {
      "latitude": 50.729649,
      "longitude": 7.126999,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1650027884,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 7.127677,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1650027887,
      "ems": null
    },
    {
      "latitude": 50.731186,
      "longitude": 7.128525,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1650027890,
      "ems": null
    },
    {
      "latitude": 50.732025,
      "longitude": 7.129385,
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1650027893,
      "ems": null
    },
    {
      "latitude": 50.732956,
      "longitude": 7.13028,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1650027896,
      "ems": null
    },
    {
      "latitude": 50.733654,
      "longitude": 7.130966,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1650027899,
      "ems": null
    },
    {
      "latitude": 50.734634,
      "longitude": 7.131983,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1650027902,
      "ems": null
    },
    {
      "latitude": 50.735367,
      "longitude": 7.132725,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1650027905,
      "ems": null
    },
    {
      "latitude": 50.737656,
      "longitude": 7.135175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1650027913,
      "ems": null
    },
    {
      "latitude": 50.738525,
      "longitude": 7.136214,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1650027917,
      "ems": null
    },
    {
      "latitude": 50.739239,
      "longitude": 7.13707,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1650027920,
      "ems": null
    },
    {
      "latitude": 50.740078,
      "longitude": 7.138062,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1650027923,
      "ems": null
    },
    {
      "latitude": 50.741592,
      "longitude": 7.139852,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1650027929,
      "ems": null
    },
    {
      "latitude": 50.743103,
      "longitude": 7.141418,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1650027935,
      "ems": null
    },
    {
      "latitude": 50.743755,
      "longitude": 7.14241,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1650027938,
      "ems": null
    },
    {
      "latitude": 50.744408,
      "longitude": 7.144012,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1650027941,
      "ems": null
    },
    {
      "latitude": 50.744732,
      "longitude": 7.145309,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1650027944,
      "ems": null
    },
    {
      "latitude": 50.744965,
      "longitude": 7.147293,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1650027947,
      "ems": null
    },
    {
      "latitude": 50.744934,
      "longitude": 7.14913,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1650027950,
      "ems": null
    },
    {
      "latitude": 50.744797,
      "longitude": 7.150912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1650027953,
      "ems": null
    },
    {
      "latitude": 50.744686,
      "longitude": 7.152481,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1650027956,
      "ems": null
    },
    {
      "latitude": 50.74464,
      "longitude": 7.15416,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1650027959,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.155663,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1650027962,
      "ems": null
    },
    {
      "latitude": 50.744499,
      "longitude": 7.157288,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1650027965,
      "ems": null
    },
    {
      "latitude": 50.744431,
      "longitude": 7.158854,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1650027968,
      "ems": null
    },
    {
      "latitude": 50.744358,
      "longitude": 7.160416,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1650027971,
      "ems": null
    },
    {
      "latitude": 50.744247,
      "longitude": 7.161973,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1650027974,
      "ems": null
    },
    {
      "latitude": 50.744156,
      "longitude": 7.163531,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1650027977,
      "ems": null
    },
    {
      "latitude": 50.74408,
      "longitude": 7.166748,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1650027983,
      "ems": null
    },
    {
      "latitude": 50.74411,
      "longitude": 7.167985,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1650027986,
      "ems": null
    },
    {
      "latitude": 50.744312,
      "longitude": 7.170029,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1650027989,
      "ems": null
    },
    {
      "latitude": 50.744476,
      "longitude": 7.171177,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1650027992,
      "ems": null
    },
    {
      "latitude": 50.744778,
      "longitude": 7.173004,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1650027995,
      "ems": null
    },
    {
      "latitude": 50.745026,
      "longitude": 7.174443,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1650027998,
      "ems": null
    },
    {
      "latitude": 50.745293,
      "longitude": 7.17598,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1650028001,
      "ems": null
    },
    {
      "latitude": 50.745529,
      "longitude": 7.177339,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1650028004,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.178955,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1650028007,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.180328,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1650028010,
      "ems": null
    },
    {
      "latitude": 50.746128,
      "longitude": 7.181778,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1650028013,
      "ems": null
    },
    {
      "latitude": 50.746315,
      "longitude": 7.183304,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1650028016,
      "ems": null
    },
    {
      "latitude": 50.746502,
      "longitude": 7.184982,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1650028019,
      "ems": null
    },
    {
      "latitude": 50.746639,
      "longitude": 7.186584,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1650028022,
      "ems": null
    },
    {
      "latitude": 50.746994,
      "longitude": 7.189216,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1650028028,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.19223,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1650028034,
      "ems": null
    },
    {
      "latitude": 50.747898,
      "longitude": 7.193527,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1650028037,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.194672,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1650028040,
      "ems": null
    },
    {
      "latitude": 50.749107,
      "longitude": 7.195663,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1650028043,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.196579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1650028046,
      "ems": null
    },
    {
      "latitude": 50.750427,
      "longitude": 7.197381,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1650028049,
      "ems": null
    },
    {
      "latitude": 50.75111,
      "longitude": 7.198029,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1650028052,
      "ems": null
    },
    {
      "latitude": 50.751846,
      "longitude": 7.198569,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1650028055,
      "ems": null
    },
    {
      "latitude": 50.75267,
      "longitude": 7.199014,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1650028058,
      "ems": null
    },
    {
      "latitude": 50.753448,
      "longitude": 7.199311,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1650028061,
      "ems": null
    },
    {
      "latitude": 50.754509,
      "longitude": 7.199554,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1650028065,
      "ems": null
    },
    {
      "latitude": 50.7556,
      "longitude": 7.199757,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1650028069,
      "ems": null
    },
    {
      "latitude": 50.756287,
      "longitude": 7.199905,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1650028072,
      "ems": null
    },
    {
      "latitude": 50.75721,
      "longitude": 7.199936,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1650028075,
      "ems": null
    },
    {
      "latitude": 50.757954,
      "longitude": 7.199783,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1650028079,
      "ems": null
    },
    {
      "latitude": 50.759079,
      "longitude": 7.199385,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1650028082,
      "ems": null
    },
    {
      "latitude": 50.759857,
      "longitude": 7.198866,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1650028085,
      "ems": null
    },
    {
      "latitude": 50.760605,
      "longitude": 7.198257,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1650028088,
      "ems": null
    },
    {
      "latitude": 50.761257,
      "longitude": 7.197418,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1650028091,
      "ems": null
    },
    {
      "latitude": 50.761723,
      "longitude": 7.196655,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1650028094,
      "ems": null
    },
    {
      "latitude": 50.762096,
      "longitude": 7.195663,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1650028096,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.194041,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1650028100,
      "ems": null
    },
    {
      "latitude": 50.762562,
      "longitude": 7.192917,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1650028103,
      "ems": null
    },
    {
      "latitude": 50.762787,
      "longitude": 7.19174,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028106,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.190774,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1650028108,
      "ems": null
    },
    {
      "latitude": 50.763306,
      "longitude": 7.18956,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028111,
      "ems": null
    },
    {
      "latitude": 50.763538,
      "longitude": 7.188187,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1650028115,
      "ems": null
    },
    {
      "latitude": 50.76368,
      "longitude": 7.1875,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1650028118,
      "ems": null
    },
    {
      "latitude": 50.763821,
      "longitude": 7.186737,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1650028118,
      "ems": null
    },
    {
      "latitude": 50.764206,
      "longitude": 7.185207,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1650028123,
      "ems": null
    },
    {
      "latitude": 50.764519,
      "longitude": 7.183609,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1650028127,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.180827,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1650028135,
      "ems": null
    },
    {
      "latitude": 50.765671,
      "longitude": 7.178304,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028143,
      "ems": null
    },
    {
      "latitude": 50.766239,
      "longitude": 7.175522,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028151,
      "ems": null
    },
    {
      "latitude": 50.766891,
      "longitude": 7.172623,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028159,
      "ems": null
    },
    {
      "latitude": 50.767502,
      "longitude": 7.169693,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1650028167,
      "ems": null
    },
    {
      "latitude": 50.768894,
      "longitude": 7.163239,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 50,
        "kts": 27,
        "mph": 31.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1650028191,
      "ems": null
    }
  ]
};
