import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220822EDKBEDKB",
    callsign: "DEFCZ",
    name: "Traffic pattern with flap failure",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 22, 16, 25).getTime(),
    arrival: new Date(2022, 7, 22, 16, 45).getTime(),
    singleEnginePistonTime: 20,
    picTime: 20,
    dualTime: 0,
    landings: {
      day: 2,
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
      "latitude": 50.748688,
      "longitude": 7.188034,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "0",
      "timestamp": 1661186233,
      "ems": null
    },
    {
      "latitude": 50.74942,
      "longitude": 7.190626,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "0",
      "timestamp": 1661186239,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.191772,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 61,
      "squawk": "0",
      "timestamp": 1661186242,
      "ems": null
    },
    {
      "latitude": 50.750179,
      "longitude": 7.192841,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "0",
      "timestamp": 1661186245,
      "ems": null
    },
    {
      "latitude": 50.750702,
      "longitude": 7.193892,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 48,
      "squawk": "0",
      "timestamp": 1661186248,
      "ems": null
    },
    {
      "latitude": 50.751343,
      "longitude": 7.194857,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "0",
      "timestamp": 1661186251,
      "ems": null
    },
    {
      "latitude": 50.751949,
      "longitude": 7.195663,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "0",
      "timestamp": 1661186254,
      "ems": null
    },
    {
      "latitude": 50.752693,
      "longitude": 7.196274,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "0",
      "timestamp": 1661186257,
      "ems": null
    },
    {
      "latitude": 50.75325,
      "longitude": 7.196579,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 18,
      "squawk": "0",
      "timestamp": 1661186260,
      "ems": null
    },
    {
      "latitude": 50.754227,
      "longitude": 7.197158,
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
      "heading": 20,
      "squawk": "0",
      "timestamp": 1661186263,
      "ems": null
    },
    {
      "latitude": 50.754501,
      "longitude": 7.197307,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1661186266,
      "ems": null
    },
    {
      "latitude": 50.755875,
      "longitude": 7.197975,
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
      "heading": 14,
      "squawk": "0",
      "timestamp": 1661186269,
      "ems": null
    },
    {
      "latitude": 50.756603,
      "longitude": 7.198257,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 12,
      "squawk": "0",
      "timestamp": 1661186272,
      "ems": null
    },
    {
      "latitude": 50.757523,
      "longitude": 7.198421,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1661186275,
      "ems": null
    },
    {
      "latitude": 50.758743,
      "longitude": 7.19841,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1661186279,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 7.197975,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1661186283,
      "ems": null
    },
    {
      "latitude": 50.760559,
      "longitude": 7.197037,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1661186287,
      "ems": null
    },
    {
      "latitude": 50.76123,
      "longitude": 7.195822,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1661186291,
      "ems": null
    },
    {
      "latitude": 50.761917,
      "longitude": 7.194263,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1661186295,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.192705,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1661186299,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.190323,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1661186303,
      "ems": null
    },
    {
      "latitude": 50.763153,
      "longitude": 7.18929,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661186307,
      "ems": null
    },
    {
      "latitude": 50.76368,
      "longitude": 7.187119,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186311,
      "ems": null
    },
    {
      "latitude": 50.764069,
      "longitude": 7.185356,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186315,
      "ems": null
    },
    {
      "latitude": 50.764389,
      "longitude": 7.183722,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186319,
      "ems": null
    },
    {
      "latitude": 50.764847,
      "longitude": 7.181718,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186324,
      "ems": null
    },
    {
      "latitude": 50.765213,
      "longitude": 7.179936,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186329,
      "ems": null
    },
    {
      "latitude": 50.765854,
      "longitude": 7.177042,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1661186336,
      "ems": null
    },
    {
      "latitude": 50.766613,
      "longitude": 7.173615,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186345,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.169915,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186355,
      "ems": null
    },
    {
      "latitude": 50.768055,
      "longitude": 7.167053,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186364,
      "ems": null
    },
    {
      "latitude": 50.768799,
      "longitude": 7.163391,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186373,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 7.158335,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186385,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.154694,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186393,
      "ems": null
    },
    {
      "latitude": 50.771267,
      "longitude": 7.151413,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1661186401,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.148759,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1661186408,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.147141,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1661186413,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 7.144305,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1661186420,
      "ems": null
    },
    {
      "latitude": 50.772617,
      "longitude": 7.143326,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1661186422,
      "ems": null
    },
    {
      "latitude": 50.772583,
      "longitude": 7.142524,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1661186426,
      "ems": null
    },
    {
      "latitude": 50.771965,
      "longitude": 7.140732,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1661186429,
      "ems": null
    },
    {
      "latitude": 50.771255,
      "longitude": 7.139852,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1661186432,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.139183,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1661186435,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 7.138824,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1661186438,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.137756,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1661186441,
      "ems": null
    },
    {
      "latitude": 50.767731,
      "longitude": 7.137146,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1661186444,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.137031,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1661186447,
      "ems": null
    },
    {
      "latitude": 50.765774,
      "longitude": 7.13623,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1661186450,
      "ems": null
    },
    {
      "latitude": 50.764938,
      "longitude": 7.135843,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1661186452,
      "ems": null
    },
    {
      "latitude": 50.76368,
      "longitude": 7.135468,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1661186456,
      "ems": null
    },
    {
      "latitude": 50.762703,
      "longitude": 7.135162,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1661186459,
      "ems": null
    },
    {
      "latitude": 50.761772,
      "longitude": 7.134933,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1661186462,
      "ems": null
    },
    {
      "latitude": 50.76091,
      "longitude": 7.134804,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1661186464,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.134781,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1661186468,
      "ems": null
    },
    {
      "latitude": 50.758511,
      "longitude": 7.134933,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1661186471,
      "ems": null
    },
    {
      "latitude": 50.757534,
      "longitude": 7.135162,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1661186474,
      "ems": null
    },
    {
      "latitude": 50.756462,
      "longitude": 7.135696,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1661186476,
      "ems": null
    },
    {
      "latitude": 50.755463,
      "longitude": 7.136288,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1661186480,
      "ems": null
    },
    {
      "latitude": 50.754646,
      "longitude": 7.136841,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1661186482,
      "ems": null
    },
    {
      "latitude": 50.753765,
      "longitude": 7.137756,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1661186486,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.138738,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1661186488,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.140148,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1661186492,
      "ems": null
    },
    {
      "latitude": 50.751892,
      "longitude": 7.14193,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1661186495,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 7.143117,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1661186498,
      "ems": null
    },
    {
      "latitude": 50.751297,
      "longitude": 7.144775,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1661186501,
      "ems": null
    },
    {
      "latitude": 50.750969,
      "longitude": 7.146149,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1661186504,
      "ems": null
    },
    {
      "latitude": 50.750645,
      "longitude": 7.147751,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186507,
      "ems": null
    },
    {
      "latitude": 50.750366,
      "longitude": 7.149124,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186510,
      "ems": null
    },
    {
      "latitude": 50.750088,
      "longitude": 7.150574,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186513,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 7.151871,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1661186516,
      "ems": null
    },
    {
      "latitude": 50.749557,
      "longitude": 7.15351,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186519,
      "ems": null
    },
    {
      "latitude": 50.749294,
      "longitude": 7.15477,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186522,
      "ems": null
    },
    {
      "latitude": 50.749054,
      "longitude": 7.156034,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1661186525,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.158737,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1661186531,
      "ems": null
    },
    {
      "latitude": 50.747944,
      "longitude": 7.161255,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1661186537,
      "ems": null
    },
    {
      "latitude": 50.74736,
      "longitude": 7.16368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1661186543,
      "ems": null
    },
    {
      "latitude": 50.746922,
      "longitude": 7.165146,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1661186546,
      "ems": null
    },
    {
      "latitude": 50.746628,
      "longitude": 7.166203,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1661186549,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 7.168732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1661186555,
      "ems": null
    },
    {
      "latitude": 50.745667,
      "longitude": 7.171326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1661186561,
      "ems": null
    },
    {
      "latitude": 50.745575,
      "longitude": 7.172587,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1661186564,
      "ems": null
    },
    {
      "latitude": 50.745575,
      "longitude": 7.17385,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1661186567,
      "ems": null
    },
    {
      "latitude": 50.745663,
      "longitude": 7.175293,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1661186570,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 7.176448,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1661186573,
      "ems": null
    },
    {
      "latitude": 50.746262,
      "longitude": 7.177635,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1661186576,
      "ems": null
    },
    {
      "latitude": 50.746674,
      "longitude": 7.178823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1661186579,
      "ems": null
    },
    {
      "latitude": 50.747131,
      "longitude": 7.179936,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1661186582,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.180939,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1661186585,
      "ems": null
    },
    {
      "latitude": 50.74799,
      "longitude": 7.182159,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1661186588,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.183277,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1661186591,
      "ems": null
    },
    {
      "latitude": 50.748825,
      "longitude": 7.184242,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1661186594,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.185593,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1661186597,
      "ems": null
    },
    {
      "latitude": 50.749878,
      "longitude": 7.186766,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1661186600,
      "ems": null
    },
    {
      "latitude": 50.750336,
      "longitude": 7.187805,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1661186603,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 7.188873,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1661186606,
      "ems": null
    },
    {
      "latitude": 50.75153,
      "longitude": 7.189789,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1661186609,
      "ems": null
    },
    {
      "latitude": 50.752304,
      "longitude": 7.190477,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1661186612,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.190923,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1661186615,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.191391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1661186618,
      "ems": null
    },
    {
      "latitude": 50.754822,
      "longitude": 7.191962,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1661186621,
      "ems": null
    },
    {
      "latitude": 50.755554,
      "longitude": 7.192482,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1661186624,
      "ems": null
    },
    {
      "latitude": 50.756332,
      "longitude": 7.193076,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1661186627,
      "ems": null
    },
    {
      "latitude": 50.757111,
      "longitude": 7.193669,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1661186630,
      "ems": null
    },
    {
      "latitude": 50.757889,
      "longitude": 7.194041,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1661186633,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 7.194337,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1661186636,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 7.194263,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1661186639,
      "ems": null
    },
    {
      "latitude": 50.760235,
      "longitude": 7.193985,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1661186641,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 7.193375,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1661186645,
      "ems": null
    },
    {
      "latitude": 50.761826,
      "longitude": 7.192705,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1661186648,
      "ems": null
    },
    {
      "latitude": 50.76247,
      "longitude": 7.191849,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1661186651,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.190849,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1661186654,
      "ems": null
    },
    {
      "latitude": 50.763336,
      "longitude": 7.189513,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186657,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.18811,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1661186660,
      "ems": null
    },
    {
      "latitude": 50.763748,
      "longitude": 7.187063,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1661186662,
      "ems": null
    },
    {
      "latitude": 50.764053,
      "longitude": 7.185364,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1661186666,
      "ems": null
    },
    {
      "latitude": 50.764236,
      "longitude": 7.184372,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186668,
      "ems": null
    },
    {
      "latitude": 50.764572,
      "longitude": 7.182832,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186672,
      "ems": null
    },
    {
      "latitude": 50.764847,
      "longitude": 7.181644,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661186674,
      "ems": null
    },
    {
      "latitude": 50.765121,
      "longitude": 7.180634,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661186678,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 7.179343,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186680,
      "ems": null
    },
    {
      "latitude": 50.765633,
      "longitude": 7.178268,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661186683,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.17659,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661186687,
      "ems": null
    },
    {
      "latitude": 50.766449,
      "longitude": 7.174963,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186691,
      "ems": null
    },
    {
      "latitude": 50.767124,
      "longitude": 7.171402,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186699,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.167816,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186707,
      "ems": null
    },
    {
      "latitude": 50.768646,
      "longitude": 7.164348,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186718,
      "ems": null
    },
    {
      "latitude": 50.76894,
      "longitude": 7.16301,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661186726,
      "ems": null
    },
    {
      "latitude": 50.769001,
      "longitude": 7.162529,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1661186730,
      "ems": null
    },
    {
      "latitude": 50.768967,
      "longitude": 7.162306,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1661186733,
      "ems": null
    },
    {
      "latitude": 50.768829,
      "longitude": 7.162102,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1661186738,
      "ems": null
    },
    {
      "latitude": 50.768612,
      "longitude": 7.161922,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1661186746,
      "ems": null
    },
    {
      "latitude": 50.768391,
      "longitude": 7.161808,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1661186754,
      "ems": null
    },
    {
      "latitude": 50.768177,
      "longitude": 7.161768,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1661186761,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.161638,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1661186773,
      "ems": null
    },
    {
      "latitude": 50.767673,
      "longitude": 7.161342,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1661186784,
      "ems": null
    },
    {
      "latitude": 50.767624,
      "longitude": 7.161121,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1661186789,
      "ems": null
    },
    {
      "latitude": 50.767647,
      "longitude": 7.160892,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1661186793,
      "ems": null
    },
    {
      "latitude": 50.767765,
      "longitude": 7.160543,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1661186799,
      "ems": null
    },
    {
      "latitude": 50.767857,
      "longitude": 7.160302,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1661186804,
      "ems": null
    },
    {
      "latitude": 50.767765,
      "longitude": 7.160061,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1661186814,
      "ems": null
    },
    {
      "latitude": 50.768032,
      "longitude": 7.161732,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1661186827,
      "ems": null
    }
  ]
};
