import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220313EDKBEDKB3",
    callsign: "DEFCZ",
    name: "Tour Flight with Micha",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 2, 13, 16, 30).getTime(),
    arrival: new Date(2022, 2, 13, 17, 20).getTime(),
    singleEnginePistonTime: 50,
    picTime: 50,
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
      "latitude": 50.768097,
      "longitude": 7.166575,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 110,
      "squawk": "0",
      "timestamp": 1647188991,
      "ems": null
    },
    {
      "latitude": 50.767448,
      "longitude": 7.169418,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 108,
      "squawk": "0",
      "timestamp": 1647188999,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.172852,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1647189007,
      "ems": null
    },
    {
      "latitude": 50.766006,
      "longitude": 7.175293,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 112,
      "squawk": "0",
      "timestamp": 1647189013,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 7.17771,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1647189019,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.179947,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "0",
      "timestamp": 1647189026,
      "ems": null
    },
    {
      "latitude": 50.764297,
      "longitude": 7.18246,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "0",
      "timestamp": 1647189031,
      "ems": null
    },
    {
      "latitude": 50.763702,
      "longitude": 7.185281,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647189037,
      "ems": null
    },
    {
      "latitude": 50.763119,
      "longitude": 7.187653,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647189043,
      "ems": null
    },
    {
      "latitude": 50.76247,
      "longitude": 7.190399,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647189049,
      "ems": null
    },
    {
      "latitude": 50.761723,
      "longitude": 7.192917,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1647189056,
      "ems": null
    },
    {
      "latitude": 50.761276,
      "longitude": 7.194115,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1647189058,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.195154,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1647189062,
      "ems": null
    },
    {
      "latitude": 50.760002,
      "longitude": 7.196045,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1647189065,
      "ems": null
    },
    {
      "latitude": 50.759441,
      "longitude": 7.196503,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1647189068,
      "ems": null
    },
    {
      "latitude": 50.758438,
      "longitude": 7.196936,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1647189070,
      "ems": null
    },
    {
      "latitude": 50.757523,
      "longitude": 7.19701,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1647189074,
      "ems": null
    },
    {
      "latitude": 50.756603,
      "longitude": 7.19696,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1647189076,
      "ems": null
    },
    {
      "latitude": 50.755718,
      "longitude": 7.196732,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1647189080,
      "ems": null
    },
    {
      "latitude": 50.754959,
      "longitude": 7.19649,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1647189083,
      "ems": null
    },
    {
      "latitude": 50.753815,
      "longitude": 7.196045,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1647189086,
      "ems": null
    },
    {
      "latitude": 50.752926,
      "longitude": 7.195587,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1647189089,
      "ems": null
    },
    {
      "latitude": 50.751995,
      "longitude": 7.195206,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647189092,
      "ems": null
    },
    {
      "latitude": 50.751019,
      "longitude": 7.194977,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1647189095,
      "ems": null
    },
    {
      "latitude": 50.750198,
      "longitude": 7.194783,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647189098,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 7.194519,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1647189101,
      "ems": null
    },
    {
      "latitude": 50.748222,
      "longitude": 7.194214,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1647189104,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.193892,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1647189107,
      "ems": null
    },
    {
      "latitude": 50.745346,
      "longitude": 7.193447,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1647189113,
      "ems": null
    },
    {
      "latitude": 50.744431,
      "longitude": 7.193224,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647189116,
      "ems": null
    },
    {
      "latitude": 50.74379,
      "longitude": 7.193076,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647189119,
      "ems": null
    },
    {
      "latitude": 50.741592,
      "longitude": 7.192482,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647189125,
      "ems": null
    },
    {
      "latitude": 50.739799,
      "longitude": 7.191925,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647189131,
      "ems": null
    },
    {
      "latitude": 50.737976,
      "longitude": 7.191368,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1647189136,
      "ems": null
    },
    {
      "latitude": 50.736679,
      "longitude": 7.190933,
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1647189140,
      "ems": null
    },
    {
      "latitude": 50.735703,
      "longitude": 7.190552,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1647189144,
      "ems": null
    },
    {
      "latitude": 50.734398,
      "longitude": 7.190018,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1647189148,
      "ems": null
    },
    {
      "latitude": 50.731792,
      "longitude": 7.189026,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647189156,
      "ems": null
    },
    {
      "latitude": 50.729279,
      "longitude": 7.188325,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1647189164,
      "ems": null
    },
    {
      "latitude": 50.726807,
      "longitude": 7.187657,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1647189172,
      "ems": null
    },
    {
      "latitude": 50.724575,
      "longitude": 7.186966,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1647189179,
      "ems": null
    },
    {
      "latitude": 50.723457,
      "longitude": 7.186737,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1647189182,
      "ems": null
    },
    {
      "latitude": 50.722595,
      "longitude": 7.186617,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647189185,
      "ems": null
    },
    {
      "latitude": 50.721405,
      "longitude": 7.186469,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1647189188,
      "ems": null
    },
    {
      "latitude": 50.720627,
      "longitude": 7.18632,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647189191,
      "ems": null
    },
    {
      "latitude": 50.719456,
      "longitude": 7.186203,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1647189194,
      "ems": null
    },
    {
      "latitude": 50.718567,
      "longitude": 7.186098,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "4451",
      "timestamp": 1647189196,
      "ems": null
    },
    {
      "latitude": 50.717468,
      "longitude": 7.185949,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1647189200,
      "ems": null
    },
    {
      "latitude": 50.716522,
      "longitude": 7.185898,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "4451",
      "timestamp": 1647189203,
      "ems": null
    },
    {
      "latitude": 50.715591,
      "longitude": 7.185822,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189206,
      "ems": null
    },
    {
      "latitude": 50.714493,
      "longitude": 7.185801,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1647189209,
      "ems": null
    },
    {
      "latitude": 50.713589,
      "longitude": 7.185822,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189212,
      "ems": null
    },
    {
      "latitude": 50.712471,
      "longitude": 7.185898,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189215,
      "ems": null
    },
    {
      "latitude": 50.711472,
      "longitude": 7.186098,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189218,
      "ems": null
    },
    {
      "latitude": 50.710564,
      "longitude": 7.186279,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1647189221,
      "ems": null
    },
    {
      "latitude": 50.709503,
      "longitude": 7.186543,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189224,
      "ems": null
    },
    {
      "latitude": 50.708588,
      "longitude": 7.186766,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189227,
      "ems": null
    },
    {
      "latitude": 50.707581,
      "longitude": 7.187063,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189230,
      "ems": null
    },
    {
      "latitude": 50.706619,
      "longitude": 7.18736,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189233,
      "ems": null
    },
    {
      "latitude": 50.705521,
      "longitude": 7.187657,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189236,
      "ems": null
    },
    {
      "latitude": 50.704514,
      "longitude": 7.187953,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189239,
      "ems": null
    },
    {
      "latitude": 50.703533,
      "longitude": 7.188187,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189242,
      "ems": null
    },
    {
      "latitude": 50.702454,
      "longitude": 7.188548,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189245,
      "ems": null
    },
    {
      "latitude": 50.701485,
      "longitude": 7.188873,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "4451",
      "timestamp": 1647189248,
      "ems": null
    },
    {
      "latitude": 50.699387,
      "longitude": 7.189587,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189254,
      "ems": null
    },
    {
      "latitude": 50.697464,
      "longitude": 7.190181,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189260,
      "ems": null
    },
    {
      "latitude": 50.695248,
      "longitude": 7.190933,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189266,
      "ems": null
    },
    {
      "latitude": 50.693245,
      "longitude": 7.191391,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1647189272,
      "ems": null
    },
    {
      "latitude": 50.692081,
      "longitude": 7.19162,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1647189275,
      "ems": null
    },
    {
      "latitude": 50.69101,
      "longitude": 7.191772,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1647189278,
      "ems": null
    },
    {
      "latitude": 50.688869,
      "longitude": 7.192383,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189284,
      "ems": null
    },
    {
      "latitude": 50.686775,
      "longitude": 7.193222,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189290,
      "ems": null
    },
    {
      "latitude": 50.68589,
      "longitude": 7.193604,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189293,
      "ems": null
    },
    {
      "latitude": 50.684727,
      "longitude": 7.194214,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189296,
      "ems": null
    },
    {
      "latitude": 50.683517,
      "longitude": 7.194748,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189299,
      "ems": null
    },
    {
      "latitude": 50.682446,
      "longitude": 7.195282,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189302,
      "ems": null
    },
    {
      "latitude": 50.681305,
      "longitude": 7.195822,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189305,
      "ems": null
    },
    {
      "latitude": 50.680344,
      "longitude": 7.196342,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189308,
      "ems": null
    },
    {
      "latitude": 50.679188,
      "longitude": 7.196884,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189311,
      "ems": null
    },
    {
      "latitude": 50.676998,
      "longitude": 7.197876,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189317,
      "ems": null
    },
    {
      "latitude": 50.674942,
      "longitude": 7.19894,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1647189323,
      "ems": null
    },
    {
      "latitude": 50.672668,
      "longitude": 7.200165,
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1647189329,
      "ems": null
    },
    {
      "latitude": 50.670502,
      "longitude": 7.201538,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1647189335,
      "ems": null
    },
    {
      "latitude": 50.668488,
      "longitude": 7.202622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189341,
      "ems": null
    },
    {
      "latitude": 50.666336,
      "longitude": 7.20349,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189347,
      "ems": null
    },
    {
      "latitude": 50.665081,
      "longitude": 7.203914,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189350,
      "ems": null
    },
    {
      "latitude": 50.664059,
      "longitude": 7.204285,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189353,
      "ems": null
    },
    {
      "latitude": 50.662941,
      "longitude": 7.204656,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189356,
      "ems": null
    },
    {
      "latitude": 50.661713,
      "longitude": 7.205008,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189359,
      "ems": null
    },
    {
      "latitude": 50.660847,
      "longitude": 7.20525,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189362,
      "ems": null
    },
    {
      "latitude": 50.659542,
      "longitude": 7.205695,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189365,
      "ems": null
    },
    {
      "latitude": 50.658554,
      "longitude": 7.206019,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189368,
      "ems": null
    },
    {
      "latitude": 50.65633,
      "longitude": 7.206734,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1647189374,
      "ems": null
    },
    {
      "latitude": 50.653164,
      "longitude": 7.20807,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189383,
      "ems": null
    },
    {
      "latitude": 50.652142,
      "longitude": 7.20859,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1647189386,
      "ems": null
    },
    {
      "latitude": 50.651115,
      "longitude": 7.209184,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1647189389,
      "ems": null
    },
    {
      "latitude": 50.650085,
      "longitude": 7.20985,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1647189392,
      "ems": null
    },
    {
      "latitude": 50.649113,
      "longitude": 7.210594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1647189395,
      "ems": null
    },
    {
      "latitude": 50.648045,
      "longitude": 7.211411,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189398,
      "ems": null
    },
    {
      "latitude": 50.647251,
      "longitude": 7.212005,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189401,
      "ems": null
    },
    {
      "latitude": 50.646088,
      "longitude": 7.212895,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189404,
      "ems": null
    },
    {
      "latitude": 50.645157,
      "longitude": 7.213563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189407,
      "ems": null
    },
    {
      "latitude": 50.644272,
      "longitude": 7.214232,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189410,
      "ems": null
    },
    {
      "latitude": 50.643108,
      "longitude": 7.215123,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189413,
      "ems": null
    },
    {
      "latitude": 50.642036,
      "longitude": 7.215939,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1647189416,
      "ems": null
    },
    {
      "latitude": 50.640976,
      "longitude": 7.216789,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1647189419,
      "ems": null
    },
    {
      "latitude": 50.638966,
      "longitude": 7.218537,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1647189425,
      "ems": null
    },
    {
      "latitude": 50.636078,
      "longitude": 7.220987,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1647189434,
      "ems": null
    },
    {
      "latitude": 50.633194,
      "longitude": 7.222917,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189443,
      "ems": null
    },
    {
      "latitude": 50.632233,
      "longitude": 7.223366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1647189446,
      "ems": null
    },
    {
      "latitude": 50.6311,
      "longitude": 7.223808,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189449,
      "ems": null
    },
    {
      "latitude": 50.630169,
      "longitude": 7.224179,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189452,
      "ems": null
    },
    {
      "latitude": 50.629051,
      "longitude": 7.224699,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189455,
      "ems": null
    },
    {
      "latitude": 50.628258,
      "longitude": 7.22507,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189458,
      "ems": null
    },
    {
      "latitude": 50.62706,
      "longitude": 7.225824,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1647189461,
      "ems": null
    },
    {
      "latitude": 50.626072,
      "longitude": 7.226406,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1647189464,
      "ems": null
    },
    {
      "latitude": 50.624954,
      "longitude": 7.227,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1647189467,
      "ems": null
    },
    {
      "latitude": 50.623978,
      "longitude": 7.227593,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189470,
      "ems": null
    },
    {
      "latitude": 50.622066,
      "longitude": 7.228336,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189476,
      "ems": null
    },
    {
      "latitude": 50.620949,
      "longitude": 7.228633,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189479,
      "ems": null
    },
    {
      "latitude": 50.619965,
      "longitude": 7.228931,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189482,
      "ems": null
    },
    {
      "latitude": 50.61895,
      "longitude": 7.229227,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189485,
      "ems": null
    },
    {
      "latitude": 50.617878,
      "longitude": 7.229524,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189488,
      "ems": null
    },
    {
      "latitude": 50.616714,
      "longitude": 7.229799,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1647189491,
      "ems": null
    },
    {
      "latitude": 50.615799,
      "longitude": 7.230016,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189494,
      "ems": null
    },
    {
      "latitude": 50.614712,
      "longitude": 7.230192,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189497,
      "ems": null
    },
    {
      "latitude": 50.613602,
      "longitude": 7.230377,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189500,
      "ems": null
    },
    {
      "latitude": 50.612522,
      "longitude": 7.230711,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189503,
      "ems": null
    },
    {
      "latitude": 50.610947,
      "longitude": 7.231245,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189509,
      "ems": null
    },
    {
      "latitude": 50.608292,
      "longitude": 7.232039,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189515,
      "ems": null
    },
    {
      "latitude": 50.60614,
      "longitude": 7.23269,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1647189521,
      "ems": null
    },
    {
      "latitude": 50.603943,
      "longitude": 7.233268,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189528,
      "ems": null
    },
    {
      "latitude": 50.601864,
      "longitude": 7.233977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189533,
      "ems": null
    },
    {
      "latitude": 50.599594,
      "longitude": 7.234859,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1647189539,
      "ems": null
    },
    {
      "latitude": 50.59845,
      "longitude": 7.235292,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189542,
      "ems": null
    },
    {
      "latitude": 50.597305,
      "longitude": 7.23587,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189545,
      "ems": null
    },
    {
      "latitude": 50.594971,
      "longitude": 7.236665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189551,
      "ems": null
    },
    {
      "latitude": 50.592648,
      "longitude": 7.237466,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189557,
      "ems": null
    },
    {
      "latitude": 50.590832,
      "longitude": 7.238134,
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189564,
      "ems": null
    },
    {
      "latitude": 50.587898,
      "longitude": 7.239322,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189569,
      "ems": null
    },
    {
      "latitude": 50.585617,
      "longitude": 7.240213,
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189575,
      "ems": null
    },
    {
      "latitude": 50.583252,
      "longitude": 7.241291,
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189581,
      "ems": null
    },
    {
      "latitude": 50.582127,
      "longitude": 7.241772,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189584,
      "ems": null
    },
    {
      "latitude": 50.580776,
      "longitude": 7.24244,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189588,
      "ems": null
    },
    {
      "latitude": 50.57975,
      "longitude": 7.242959,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189591,
      "ems": null
    },
    {
      "latitude": 50.577236,
      "longitude": 7.244296,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189597,
      "ems": null
    },
    {
      "latitude": 50.576073,
      "longitude": 7.24489,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189600,
      "ems": null
    },
    {
      "latitude": 50.574875,
      "longitude": 7.245556,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189603,
      "ems": null
    },
    {
      "latitude": 50.572441,
      "longitude": 7.246894,
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
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1647189609,
      "ems": null
    },
    {
      "latitude": 50.570068,
      "longitude": 7.248304,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1647189615,
      "ems": null
    },
    {
      "latitude": 50.569183,
      "longitude": 7.248824,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1647189618,
      "ems": null
    },
    {
      "latitude": 50.567688,
      "longitude": 7.24982,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1647189621,
      "ems": null
    },
    {
      "latitude": 50.566544,
      "longitude": 7.250615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1647189624,
      "ems": null
    },
    {
      "latitude": 50.565353,
      "longitude": 7.251555,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1647189626,
      "ems": null
    },
    {
      "latitude": 50.56411,
      "longitude": 7.252535,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1647189630,
      "ems": null
    },
    {
      "latitude": 50.561642,
      "longitude": 7.254243,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1647189636,
      "ems": null
    },
    {
      "latitude": 50.559402,
      "longitude": 7.255385,
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
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1647189641,
      "ems": null
    },
    {
      "latitude": 50.557983,
      "longitude": 7.256036,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189645,
      "ems": null
    },
    {
      "latitude": 50.555546,
      "longitude": 7.257435,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1647189651,
      "ems": null
    },
    {
      "latitude": 50.553356,
      "longitude": 7.258919,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1647189656,
      "ems": null
    },
    {
      "latitude": 50.55162,
      "longitude": 7.260156,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1647189662,
      "ems": null
    },
    {
      "latitude": 50.549866,
      "longitude": 7.261518,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1647189665,
      "ems": null
    },
    {
      "latitude": 50.548233,
      "longitude": 7.262758,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1647189669,
      "ems": null
    },
    {
      "latitude": 50.546677,
      "longitude": 7.263987,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1647189673,
      "ems": null
    },
    {
      "latitude": 50.546093,
      "longitude": 7.264412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1647189676,
      "ems": null
    },
    {
      "latitude": 50.543152,
      "longitude": 7.266661,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1647189682,
      "ems": null
    },
    {
      "latitude": 50.541138,
      "longitude": 7.268034,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1647189688,
      "ems": null
    },
    {
      "latitude": 50.539581,
      "longitude": 7.268974,
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
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1647189691,
      "ems": null
    },
    {
      "latitude": 50.538254,
      "longitude": 7.269624,
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
      "heading": 162,
      "squawk": "4451",
      "timestamp": 1647189694,
      "ems": null
    },
    {
      "latitude": 50.537018,
      "longitude": 7.270203,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647189697,
      "ems": null
    },
    {
      "latitude": 50.535736,
      "longitude": 7.270781,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189700,
      "ems": null
    },
    {
      "latitude": 50.534363,
      "longitude": 7.271214,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189703,
      "ems": null
    },
    {
      "latitude": 50.533081,
      "longitude": 7.271648,
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
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189706,
      "ems": null
    },
    {
      "latitude": 50.532082,
      "longitude": 7.271836,
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
      "heading": 171,
      "squawk": "4451",
      "timestamp": 1647189709,
      "ems": null
    },
    {
      "latitude": 50.530544,
      "longitude": 7.272058,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1647189712,
      "ems": null
    },
    {
      "latitude": 50.529568,
      "longitude": 7.272058,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189715,
      "ems": null
    },
    {
      "latitude": 50.528183,
      "longitude": 7.272154,
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189718,
      "ems": null
    },
    {
      "latitude": 50.527084,
      "longitude": 7.272154,
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189721,
      "ems": null
    },
    {
      "latitude": 50.525749,
      "longitude": 7.272207,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189724,
      "ems": null
    },
    {
      "latitude": 50.524567,
      "longitude": 7.272226,
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
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189727,
      "ems": null
    },
    {
      "latitude": 50.523102,
      "longitude": 7.272226,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189730,
      "ems": null
    },
    {
      "latitude": 50.522141,
      "longitude": 7.272226,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189733,
      "ems": null
    },
    {
      "latitude": 50.520447,
      "longitude": 7.272299,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189736,
      "ems": null
    },
    {
      "latitude": 50.519119,
      "longitude": 7.272371,
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
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189740,
      "ems": null
    },
    {
      "latitude": 50.516953,
      "longitude": 7.272504,
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189745,
      "ems": null
    },
    {
      "latitude": 50.514252,
      "longitude": 7.272727,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189751,
      "ems": null
    },
    {
      "latitude": 50.511925,
      "longitude": 7.272875,
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189757,
      "ems": null
    },
    {
      "latitude": 50.50983,
      "longitude": 7.273098,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189762,
      "ems": null
    },
    {
      "latitude": 50.506714,
      "longitude": 7.273455,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189770,
      "ems": null
    },
    {
      "latitude": 50.503918,
      "longitude": 7.273766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189779,
      "ems": null
    },
    {
      "latitude": 50.501175,
      "longitude": 7.274034,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189784,
      "ems": null
    },
    {
      "latitude": 50.497467,
      "longitude": 7.274178,
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
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1647189794,
      "ems": null
    },
    {
      "latitude": 50.496143,
      "longitude": 7.274137,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189797,
      "ems": null
    },
    {
      "latitude": 50.494934,
      "longitude": 7.274063,
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189800,
      "ems": null
    },
    {
      "latitude": 50.494328,
      "longitude": 7.274063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1647189803,
      "ems": null
    },
    {
      "latitude": 50.49144,
      "longitude": 7.274063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189809,
      "ems": null
    },
    {
      "latitude": 50.488083,
      "longitude": 7.27425,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189818,
      "ems": null
    },
    {
      "latitude": 50.485344,
      "longitude": 7.274434,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "4451",
      "timestamp": 1647189824,
      "ems": null
    },
    {
      "latitude": 50.4841,
      "longitude": 7.274467,
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
      "heading": 180,
      "squawk": "4451",
      "timestamp": 1647189830,
      "ems": null
    },
    {
      "latitude": 50.480873,
      "longitude": 7.274285,
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189836,
      "ems": null
    },
    {
      "latitude": 50.479107,
      "longitude": 7.274211,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1647189840,
      "ems": null
    },
    {
      "latitude": 50.478035,
      "longitude": 7.274063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1647189843,
      "ems": null
    },
    {
      "latitude": 50.475586,
      "longitude": 7.273961,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189849,
      "ems": null
    },
    {
      "latitude": 50.473148,
      "longitude": 7.27384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "4451",
      "timestamp": 1647189855,
      "ems": null
    },
    {
      "latitude": 50.470634,
      "longitude": 7.273988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189861,
      "ems": null
    },
    {
      "latitude": 50.46817,
      "longitude": 7.27425,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189867,
      "ems": null
    },
    {
      "latitude": 50.467072,
      "longitude": 7.274395,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189870,
      "ems": null
    },
    {
      "latitude": 50.465607,
      "longitude": 7.274582,
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1647189873,
      "ems": null
    },
    {
      "latitude": 50.464737,
      "longitude": 7.274684,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189875,
      "ems": null
    },
    {
      "latitude": 50.463226,
      "longitude": 7.274901,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189879,
      "ems": null
    },
    {
      "latitude": 50.462173,
      "longitude": 7.275045,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1647189882,
      "ems": null
    },
    {
      "latitude": 50.460205,
      "longitude": 7.275334,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189888,
      "ems": null
    },
    {
      "latitude": 50.457504,
      "longitude": 7.275918,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 170,
      "squawk": "4451",
      "timestamp": 1647189894,
      "ems": null
    },
    {
      "latitude": 50.456589,
      "longitude": 7.276129,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189897,
      "ems": null
    },
    {
      "latitude": 50.455456,
      "longitude": 7.276512,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 169,
      "squawk": "4451",
      "timestamp": 1647189900,
      "ems": null
    },
    {
      "latitude": 50.4543,
      "longitude": 7.276852,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189903,
      "ems": null
    },
    {
      "latitude": 50.45327,
      "longitude": 7.277255,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189906,
      "ems": null
    },
    {
      "latitude": 50.452057,
      "longitude": 7.277626,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 167,
      "squawk": "4451",
      "timestamp": 1647189909,
      "ems": null
    },
    {
      "latitude": 50.450989,
      "longitude": 7.278071,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189912,
      "ems": null
    },
    {
      "latitude": 50.450008,
      "longitude": 7.278442,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189915,
      "ems": null
    },
    {
      "latitude": 50.449173,
      "longitude": 7.278813,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 165,
      "squawk": "4451",
      "timestamp": 1647189917,
      "ems": null
    },
    {
      "latitude": 50.44693,
      "longitude": 7.279671,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 166,
      "squawk": "4451",
      "timestamp": 1647189924,
      "ems": null
    },
    {
      "latitude": 50.444733,
      "longitude": 7.280466,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 168,
      "squawk": "4451",
      "timestamp": 1647189930,
      "ems": null
    },
    {
      "latitude": 50.443306,
      "longitude": 7.280818,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1647189936,
      "ems": null
    },
    {
      "latitude": 50.441528,
      "longitude": 7.281044,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1647189939,
      "ems": null
    },
    {
      "latitude": 50.440746,
      "longitude": 7.281189,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189941,
      "ems": null
    },
    {
      "latitude": 50.440247,
      "longitude": 7.281189,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189945,
      "ems": null
    },
    {
      "latitude": 50.438278,
      "longitude": 7.281412,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 175,
      "squawk": "4451",
      "timestamp": 1647189948,
      "ems": null
    },
    {
      "latitude": 50.437767,
      "longitude": 7.281486,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189951,
      "ems": null
    },
    {
      "latitude": 50.436676,
      "longitude": 7.28155,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189953,
      "ems": null
    },
    {
      "latitude": 50.435577,
      "longitude": 7.281634,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 176,
      "squawk": "4451",
      "timestamp": 1647189957,
      "ems": null
    },
    {
      "latitude": 50.433437,
      "longitude": 7.281857,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189965,
      "ems": null
    },
    {
      "latitude": 50.431046,
      "longitude": 7.282273,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1647189971,
      "ems": null
    },
    {
      "latitude": 50.428688,
      "longitude": 7.282525,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 177,
      "squawk": "4451",
      "timestamp": 1647189978,
      "ems": null
    },
    {
      "latitude": 50.426781,
      "longitude": 7.282525,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 181,
      "squawk": "4451",
      "timestamp": 1647189982,
      "ems": null
    },
    {
      "latitude": 50.425663,
      "longitude": 7.282377,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1647189986,
      "ems": null
    },
    {
      "latitude": 50.424267,
      "longitude": 7.281931,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "4451",
      "timestamp": 1647189989,
      "ems": null
    },
    {
      "latitude": 50.423801,
      "longitude": 7.281783,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 197,
      "squawk": "4451",
      "timestamp": 1647189993,
      "ems": null
    },
    {
      "latitude": 50.422302,
      "longitude": 7.280972,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 199,
      "squawk": "4451",
      "timestamp": 1647189995,
      "ems": null
    },
    {
      "latitude": 50.421101,
      "longitude": 7.280076,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 208,
      "squawk": "4451",
      "timestamp": 1647189999,
      "ems": null
    },
    {
      "latitude": 50.420261,
      "longitude": 7.279259,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 211,
      "squawk": "4451",
      "timestamp": 1647190002,
      "ems": null
    },
    {
      "latitude": 50.418865,
      "longitude": 7.277552,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 221,
      "squawk": "4451",
      "timestamp": 1647190008,
      "ems": null
    },
    {
      "latitude": 50.417908,
      "longitude": 7.275913,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647190014,
      "ems": null
    },
    {
      "latitude": 50.417332,
      "longitude": 7.274805,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1647190017,
      "ems": null
    },
    {
      "latitude": 50.417084,
      "longitude": 7.274106,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 238,
      "squawk": "4451",
      "timestamp": 1647190019,
      "ems": null
    },
    {
      "latitude": 50.416718,
      "longitude": 7.273022,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 242,
      "squawk": "4451",
      "timestamp": 1647190023,
      "ems": null
    },
    {
      "latitude": 50.416447,
      "longitude": 7.271984,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1647190026,
      "ems": null
    },
    {
      "latitude": 50.415516,
      "longitude": 7.269683,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 234,
      "squawk": "4451",
      "timestamp": 1647190032,
      "ems": null
    },
    {
      "latitude": 50.414932,
      "longitude": 7.268396,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "4451",
      "timestamp": 1647190034,
      "ems": null
    },
    {
      "latitude": 50.413605,
      "longitude": 7.265794,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1647190041,
      "ems": null
    },
    {
      "latitude": 50.412674,
      "longitude": 7.264041,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647190046,
      "ems": null
    },
    {
      "latitude": 50.411884,
      "longitude": 7.262557,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647190049,
      "ems": null
    },
    {
      "latitude": 50.411324,
      "longitude": 7.261443,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1647190052,
      "ems": null
    },
    {
      "latitude": 50.410767,
      "longitude": 7.26033,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1647190055,
      "ems": null
    },
    {
      "latitude": 50.41008,
      "longitude": 7.259216,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1647190059,
      "ems": null
    },
    {
      "latitude": 50.409348,
      "longitude": 7.258349,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 210,
      "squawk": "4451",
      "timestamp": 1647190062,
      "ems": null
    },
    {
      "latitude": 50.408485,
      "longitude": 7.25788,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 194,
      "squawk": "4451",
      "timestamp": 1647190065,
      "ems": null
    },
    {
      "latitude": 50.407471,
      "longitude": 7.257915,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 173,
      "squawk": "4451",
      "timestamp": 1647190068,
      "ems": null
    },
    {
      "latitude": 50.40715,
      "longitude": 7.25806,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "4451",
      "timestamp": 1647190071,
      "ems": null
    },
    {
      "latitude": 50.405926,
      "longitude": 7.259216,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1647190073,
      "ems": null
    },
    {
      "latitude": 50.40509,
      "longitude": 7.260734,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1647190076,
      "ems": null
    },
    {
      "latitude": 50.404621,
      "longitude": 7.26226,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 116,
      "squawk": "4451",
      "timestamp": 1647190079,
      "ems": null
    },
    {
      "latitude": 50.404312,
      "longitude": 7.264131,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1647190082,
      "ems": null
    },
    {
      "latitude": 50.404312,
      "longitude": 7.266155,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 93,
      "squawk": "4451",
      "timestamp": 1647190086,
      "ems": null
    },
    {
      "latitude": 50.404358,
      "longitude": 7.266806,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 82,
      "squawk": "4451",
      "timestamp": 1647190087,
      "ems": null
    },
    {
      "latitude": 50.40477,
      "longitude": 7.268829,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 67,
      "squawk": "4451",
      "timestamp": 1647190091,
      "ems": null
    },
    {
      "latitude": 50.406006,
      "longitude": 7.272082,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1647190095,
      "ems": null
    },
    {
      "latitude": 50.407646,
      "longitude": 7.274731,
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
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1647190101,
      "ems": null
    },
    {
      "latitude": 50.40881,
      "longitude": 7.276364,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1647190104,
      "ems": null
    },
    {
      "latitude": 50.409714,
      "longitude": 7.277575,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1647190106,
      "ems": null
    },
    {
      "latitude": 50.410954,
      "longitude": 7.279185,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647190110,
      "ems": null
    },
    {
      "latitude": 50.411976,
      "longitude": 7.280447,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1647190113,
      "ems": null
    },
    {
      "latitude": 50.412964,
      "longitude": 7.281767,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1647190116,
      "ems": null
    },
    {
      "latitude": 50.414108,
      "longitude": 7.283141,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1647190119,
      "ems": null
    },
    {
      "latitude": 50.415562,
      "longitude": 7.284678,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1647190123,
      "ems": null
    },
    {
      "latitude": 50.416725,
      "longitude": 7.285717,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1647190126,
      "ems": null
    },
    {
      "latitude": 50.417515,
      "longitude": 7.286237,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647190127,
      "ems": null
    },
    {
      "latitude": 50.418915,
      "longitude": 7.286905,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1647190131,
      "ems": null
    },
    {
      "latitude": 50.419983,
      "longitude": 7.28735,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647190133,
      "ems": null
    },
    {
      "latitude": 50.421566,
      "longitude": 7.288018,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1647190137,
      "ems": null
    },
    {
      "latitude": 50.422405,
      "longitude": 7.288315,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647190139,
      "ems": null
    },
    {
      "latitude": 50.423523,
      "longitude": 7.288612,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1647190142,
      "ems": null
    },
    {
      "latitude": 50.425369,
      "longitude": 7.288706,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190148,
      "ems": null
    },
    {
      "latitude": 50.428482,
      "longitude": 7.287622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1647190152,
      "ems": null
    },
    {
      "latitude": 50.429764,
      "longitude": 7.286755,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190156,
      "ems": null
    },
    {
      "latitude": 50.430645,
      "longitude": 7.285791,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647190159,
      "ems": null
    },
    {
      "latitude": 50.431824,
      "longitude": 7.284225,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1647190162,
      "ems": null
    },
    {
      "latitude": 50.432598,
      "longitude": 7.282897,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1647190165,
      "ems": null
    },
    {
      "latitude": 50.433296,
      "longitude": 7.281486,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1647190168,
      "ems": null
    },
    {
      "latitude": 50.433903,
      "longitude": 7.279927,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1647190171,
      "ems": null
    },
    {
      "latitude": 50.434433,
      "longitude": 7.278225,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1647190174,
      "ems": null
    },
    {
      "latitude": 50.435028,
      "longitude": 7.275551,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1647190179,
      "ems": null
    },
    {
      "latitude": 50.435257,
      "longitude": 7.272732,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1647190184,
      "ems": null
    },
    {
      "latitude": 50.435303,
      "longitude": 7.270926,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1647190188,
      "ems": null
    },
    {
      "latitude": 50.435303,
      "longitude": 7.268829,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 270,
      "squawk": "4451",
      "timestamp": 1647190190,
      "ems": null
    },
    {
      "latitude": 50.435207,
      "longitude": 7.266936,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 264,
      "squawk": "4451",
      "timestamp": 1647190194,
      "ems": null
    },
    {
      "latitude": 50.435165,
      "longitude": 7.266661,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1647190197,
      "ems": null
    },
    {
      "latitude": 50.434753,
      "longitude": 7.263698,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1647190200,
      "ems": null
    },
    {
      "latitude": 50.43457,
      "longitude": 7.262686,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 261,
      "squawk": "4451",
      "timestamp": 1647190202,
      "ems": null
    },
    {
      "latitude": 50.434021,
      "longitude": 7.260734,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1647190206,
      "ems": null
    },
    {
      "latitude": 50.433701,
      "longitude": 7.259795,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "4451",
      "timestamp": 1647190208,
      "ems": null
    },
    {
      "latitude": 50.433113,
      "longitude": 7.258326,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1647190212,
      "ems": null
    },
    {
      "latitude": 50.432419,
      "longitude": 7.256687,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1647190215,
      "ems": null
    },
    {
      "latitude": 50.432228,
      "longitude": 7.256321,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1647190218,
      "ems": null
    },
    {
      "latitude": 50.43153,
      "longitude": 7.254911,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 230,
      "squawk": "4451",
      "timestamp": 1647190221,
      "ems": null
    },
    {
      "latitude": 50.43055,
      "longitude": 7.253055,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 229,
      "squawk": "4451",
      "timestamp": 1647190224,
      "ems": null
    },
    {
      "latitude": 50.429901,
      "longitude": 7.252061,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 223,
      "squawk": "4451",
      "timestamp": 1647190227,
      "ems": null
    },
    {
      "latitude": 50.428921,
      "longitude": 7.251051,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647190230,
      "ems": null
    },
    {
      "latitude": 50.427944,
      "longitude": 7.250606,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 189,
      "squawk": "4451",
      "timestamp": 1647190233,
      "ems": null
    },
    {
      "latitude": 50.426971,
      "longitude": 7.250543,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 183,
      "squawk": "4451",
      "timestamp": 1647190236,
      "ems": null
    },
    {
      "latitude": 50.426083,
      "longitude": 7.250828,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 164,
      "squawk": "4451",
      "timestamp": 1647190239,
      "ems": null
    },
    {
      "latitude": 50.424919,
      "longitude": 7.252016,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1647190242,
      "ems": null
    },
    {
      "latitude": 50.424316,
      "longitude": 7.253145,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1647190245,
      "ems": null
    },
    {
      "latitude": 50.423859,
      "longitude": 7.255096,
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
      "heading": 98,
      "squawk": "4451",
      "timestamp": 1647190248,
      "ems": null
    },
    {
      "latitude": 50.424545,
      "longitude": 7.259505,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1647190254,
      "ems": null
    },
    {
      "latitude": 50.425644,
      "longitude": 7.261023,
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
      "heading": 107,
      "squawk": "4451",
      "timestamp": 1647190258,
      "ems": null
    },
    {
      "latitude": 50.426605,
      "longitude": 7.261746,
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
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1647190261,
      "ems": null
    },
    {
      "latitude": 50.428223,
      "longitude": 7.261963,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1647190264,
      "ems": null
    },
    {
      "latitude": 50.429062,
      "longitude": 7.261592,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1647190267,
      "ems": null
    },
    {
      "latitude": 50.430458,
      "longitude": 7.260181,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1647190270,
      "ems": null
    },
    {
      "latitude": 50.430908,
      "longitude": 7.259072,
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
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1647190272,
      "ems": null
    },
    {
      "latitude": 50.430878,
      "longitude": 7.256915,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "4451",
      "timestamp": 1647190276,
      "ems": null
    },
    {
      "latitude": 50.430271,
      "longitude": 7.25595,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 205,
      "squawk": "4451",
      "timestamp": 1647190279,
      "ems": null
    },
    {
      "latitude": 50.429077,
      "longitude": 7.255819,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 172,
      "squawk": "4451",
      "timestamp": 1647190282,
      "ems": null
    },
    {
      "latitude": 50.428177,
      "longitude": 7.257435,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 105,
      "squawk": "4451",
      "timestamp": 1647190286,
      "ems": null
    },
    {
      "latitude": 50.429398,
      "longitude": 7.260445,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1647190291,
      "ems": null
    },
    {
      "latitude": 50.430817,
      "longitude": 7.260662,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1647190294,
      "ems": null
    },
    {
      "latitude": 50.432053,
      "longitude": 7.260662,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1647190297,
      "ems": null
    },
    {
      "latitude": 50.432968,
      "longitude": 7.260662,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1647190300,
      "ems": null
    },
    {
      "latitude": 50.434067,
      "longitude": 7.260662,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647190303,
      "ems": null
    },
    {
      "latitude": 50.435112,
      "longitude": 7.260701,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "4451",
      "timestamp": 1647190305,
      "ems": null
    },
    {
      "latitude": 50.436928,
      "longitude": 7.260627,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1647190309,
      "ems": null
    },
    {
      "latitude": 50.437954,
      "longitude": 7.260552,
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1647190312,
      "ems": null
    },
    {
      "latitude": 50.439423,
      "longitude": 7.260445,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1647190315,
      "ems": null
    },
    {
      "latitude": 50.440468,
      "longitude": 7.26033,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1647190318,
      "ems": null
    },
    {
      "latitude": 50.441574,
      "longitude": 7.260228,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1647190321,
      "ems": null
    },
    {
      "latitude": 50.442719,
      "longitude": 7.260011,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1647190324,
      "ems": null
    },
    {
      "latitude": 50.443726,
      "longitude": 7.259867,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1647190327,
      "ems": null
    },
    {
      "latitude": 50.444611,
      "longitude": 7.259662,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190330,
      "ems": null
    },
    {
      "latitude": 50.445633,
      "longitude": 7.259439,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1647190332,
      "ems": null
    },
    {
      "latitude": 50.446938,
      "longitude": 7.259216,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "4451",
      "timestamp": 1647190336,
      "ems": null
    },
    {
      "latitude": 50.448147,
      "longitude": 7.258919,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1647190339,
      "ems": null
    },
    {
      "latitude": 50.449402,
      "longitude": 7.258566,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1647190342,
      "ems": null
    },
    {
      "latitude": 50.450821,
      "longitude": 7.258132,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1647190345,
      "ems": null
    },
    {
      "latitude": 50.451874,
      "longitude": 7.257771,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "timestamp": 1647190348,
      "ems": null
    },
    {
      "latitude": 50.453156,
      "longitude": 7.257193,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1647190351,
      "ems": null
    },
    {
      "latitude": 50.454483,
      "longitude": 7.256542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1647190354,
      "ems": null
    },
    {
      "latitude": 50.455502,
      "longitude": 7.256024,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1647190357,
      "ems": null
    },
    {
      "latitude": 50.456589,
      "longitude": 7.255385,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1647190360,
      "ems": null
    },
    {
      "latitude": 50.458111,
      "longitude": 7.254614,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1647190363,
      "ems": null
    },
    {
      "latitude": 50.459198,
      "longitude": 7.254085,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1647190366,
      "ems": null
    },
    {
      "latitude": 50.460297,
      "longitude": 7.2535,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "4451",
      "timestamp": 1647190369,
      "ems": null
    },
    {
      "latitude": 50.461414,
      "longitude": 7.252832,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1647190372,
      "ems": null
    },
    {
      "latitude": 50.462631,
      "longitude": 7.252133,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1647190375,
      "ems": null
    },
    {
      "latitude": 50.463791,
      "longitude": 7.251422,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1647190378,
      "ems": null
    },
    {
      "latitude": 50.465012,
      "longitude": 7.250615,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1647190381,
      "ems": null
    },
    {
      "latitude": 50.468536,
      "longitude": 7.248824,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1647190390,
      "ems": null
    },
    {
      "latitude": 50.470913,
      "longitude": 7.247785,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1647190396,
      "ems": null
    },
    {
      "latitude": 50.473801,
      "longitude": 7.246568,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1647190402,
      "ems": null
    },
    {
      "latitude": 50.474899,
      "longitude": 7.246134,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1647190405,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 7.245556,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1647190408,
      "ems": null
    },
    {
      "latitude": 50.477615,
      "longitude": 7.245261,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190411,
      "ems": null
    },
    {
      "latitude": 50.478966,
      "longitude": 7.245409,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647190414,
      "ems": null
    },
    {
      "latitude": 50.480209,
      "longitude": 7.245989,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 20,
      "squawk": "4451",
      "timestamp": 1647190417,
      "ems": null
    },
    {
      "latitude": 50.481525,
      "longitude": 7.246894,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1647190420,
      "ems": null
    },
    {
      "latitude": 50.482319,
      "longitude": 7.247636,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1647190423,
      "ems": null
    },
    {
      "latitude": 50.483852,
      "longitude": 7.249195,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1647190426,
      "ems": null
    },
    {
      "latitude": 50.485107,
      "longitude": 7.250615,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1647190429,
      "ems": null
    },
    {
      "latitude": 50.486179,
      "longitude": 7.251867,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1647190432,
      "ems": null
    },
    {
      "latitude": 50.487251,
      "longitude": 7.253129,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1647190435,
      "ems": null
    },
    {
      "latitude": 50.488277,
      "longitude": 7.254317,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1647190438,
      "ems": null
    },
    {
      "latitude": 50.489319,
      "longitude": 7.255602,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1647190441,
      "ems": null
    },
    {
      "latitude": 50.49028,
      "longitude": 7.256831,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647190444,
      "ems": null
    },
    {
      "latitude": 50.491379,
      "longitude": 7.258349,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1647190447,
      "ems": null
    },
    {
      "latitude": 50.492325,
      "longitude": 7.259736,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1647190450,
      "ems": null
    },
    {
      "latitude": 50.49321,
      "longitude": 7.261147,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1647190453,
      "ems": null
    },
    {
      "latitude": 50.494308,
      "longitude": 7.262903,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1647190456,
      "ems": null
    },
    {
      "latitude": 50.495224,
      "longitude": 7.264348,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1647190459,
      "ems": null
    },
    {
      "latitude": 50.496002,
      "longitude": 7.265675,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1647190462,
      "ems": null
    },
    {
      "latitude": 50.496918,
      "longitude": 7.267312,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1647190465,
      "ems": null
    },
    {
      "latitude": 50.497913,
      "longitude": 7.269238,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1647190468,
      "ems": null
    },
    {
      "latitude": 50.498333,
      "longitude": 7.270128,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1647190471,
      "ems": null
    },
    {
      "latitude": 50.499542,
      "longitude": 7.272504,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1647190474,
      "ems": null
    },
    {
      "latitude": 50.50024,
      "longitude": 7.273988,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1647190477,
      "ems": null
    },
    {
      "latitude": 50.500893,
      "longitude": 7.275325,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1647190480,
      "ems": null
    },
    {
      "latitude": 50.501915,
      "longitude": 7.277477,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1647190483,
      "ems": null
    },
    {
      "latitude": 50.502754,
      "longitude": 7.279259,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1647190486,
      "ems": null
    },
    {
      "latitude": 50.503593,
      "longitude": 7.280966,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1647190489,
      "ems": null
    },
    {
      "latitude": 50.504292,
      "longitude": 7.282377,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1647190492,
      "ems": null
    },
    {
      "latitude": 50.506027,
      "longitude": 7.28567,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1647190498,
      "ems": null
    },
    {
      "latitude": 50.506943,
      "longitude": 7.287044,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1647190501,
      "ems": null
    },
    {
      "latitude": 50.508015,
      "longitude": 7.288464,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1647190504,
      "ems": null
    },
    {
      "latitude": 50.509232,
      "longitude": 7.28979,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1647190507,
      "ems": null
    },
    {
      "latitude": 50.510387,
      "longitude": 7.290765,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1647190510,
      "ems": null
    },
    {
      "latitude": 50.511646,
      "longitude": 7.291582,
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
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1647190513,
      "ems": null
    },
    {
      "latitude": 50.512848,
      "longitude": 7.292031,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1647190516,
      "ems": null
    },
    {
      "latitude": 50.514404,
      "longitude": 7.292248,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1647190519,
      "ems": null
    },
    {
      "latitude": 50.515228,
      "longitude": 7.29225,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1647190521,
      "ems": null
    },
    {
      "latitude": 50.517418,
      "longitude": 7.291804,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1647190526,
      "ems": null
    },
    {
      "latitude": 50.51889,
      "longitude": 7.291163,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1647190530,
      "ems": null
    },
    {
      "latitude": 50.520676,
      "longitude": 7.290097,
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
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1647190534,
      "ems": null
    },
    {
      "latitude": 50.521774,
      "longitude": 7.289356,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190537,
      "ems": null
    },
    {
      "latitude": 50.522957,
      "longitude": 7.288538,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190540,
      "ems": null
    },
    {
      "latitude": 50.524017,
      "longitude": 7.287838,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190543,
      "ems": null
    },
    {
      "latitude": 50.525146,
      "longitude": 7.287053,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190546,
      "ems": null
    },
    {
      "latitude": 50.526352,
      "longitude": 7.286176,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1647190550,
      "ems": null
    },
    {
      "latitude": 50.527332,
      "longitude": 7.285494,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190552,
      "ems": null
    },
    {
      "latitude": 50.528412,
      "longitude": 7.284658,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190555,
      "ems": null
    },
    {
      "latitude": 50.52951,
      "longitude": 7.283863,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1647190558,
      "ems": null
    },
    {
      "latitude": 50.530518,
      "longitude": 7.282996,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190561,
      "ems": null
    },
    {
      "latitude": 50.531662,
      "longitude": 7.282056,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190565,
      "ems": null
    },
    {
      "latitude": 50.533539,
      "longitude": 7.280539,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190570,
      "ems": null
    },
    {
      "latitude": 50.53569,
      "longitude": 7.279093,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1647190576,
      "ems": null
    },
    {
      "latitude": 50.53804,
      "longitude": 7.277329,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1647190582,
      "ems": null
    },
    {
      "latitude": 50.540405,
      "longitude": 7.275551,
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
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1647190589,
      "ems": null
    },
    {
      "latitude": 50.54158,
      "longitude": 7.274731,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190591,
      "ems": null
    },
    {
      "latitude": 50.542465,
      "longitude": 7.274178,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190594,
      "ems": null
    },
    {
      "latitude": 50.545162,
      "longitude": 7.272281,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1647190600,
      "ems": null
    },
    {
      "latitude": 50.547722,
      "longitude": 7.270648,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1647190607,
      "ems": null
    },
    {
      "latitude": 50.548874,
      "longitude": 7.269986,
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
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1647190609,
      "ems": null
    },
    {
      "latitude": 50.551071,
      "longitude": 7.268468,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190615,
      "ems": null
    },
    {
      "latitude": 50.554379,
      "longitude": 7.265749,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190623,
      "ems": null
    },
    {
      "latitude": 50.555313,
      "longitude": 7.264932,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647190626,
      "ems": null
    },
    {
      "latitude": 50.556702,
      "longitude": 7.263698,
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
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1647190629,
      "ems": null
    },
    {
      "latitude": 50.557846,
      "longitude": 7.262541,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190632,
      "ems": null
    },
    {
      "latitude": 50.558762,
      "longitude": 7.261601,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190635,
      "ems": null
    },
    {
      "latitude": 50.560272,
      "longitude": 7.260156,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190638,
      "ems": null
    },
    {
      "latitude": 50.561409,
      "longitude": 7.258994,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190641,
      "ems": null
    },
    {
      "latitude": 50.562572,
      "longitude": 7.257806,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190644,
      "ems": null
    },
    {
      "latitude": 50.563751,
      "longitude": 7.256542,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1647190647,
      "ems": null
    },
    {
      "latitude": 50.564716,
      "longitude": 7.255579,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1647190650,
      "ems": null
    },
    {
      "latitude": 50.565903,
      "longitude": 7.254229,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647190653,
      "ems": null
    },
    {
      "latitude": 50.566635,
      "longitude": 7.253434,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1647190656,
      "ems": null
    },
    {
      "latitude": 50.567833,
      "longitude": 7.251942,
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
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1647190659,
      "ems": null
    },
    {
      "latitude": 50.569092,
      "longitude": 7.250383,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1647190662,
      "ems": null
    },
    {
      "latitude": 50.570068,
      "longitude": 7.249046,
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1647190665,
      "ems": null
    },
    {
      "latitude": 50.570953,
      "longitude": 7.247859,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1647190668,
      "ems": null
    },
    {
      "latitude": 50.571976,
      "longitude": 7.246522,
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1647190671,
      "ems": null
    },
    {
      "latitude": 50.572906,
      "longitude": 7.245261,
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
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1647190674,
      "ems": null
    },
    {
      "latitude": 50.57407,
      "longitude": 7.243553,
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
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1647190677,
      "ems": null
    },
    {
      "latitude": 50.575104,
      "longitude": 7.241942,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1647190680,
      "ems": null
    },
    {
      "latitude": 50.575794,
      "longitude": 7.240733,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1647190683,
      "ems": null
    },
    {
      "latitude": 50.576679,
      "longitude": 7.2391,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1647190686,
      "ems": null
    },
    {
      "latitude": 50.577377,
      "longitude": 7.237763,
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
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1647190689,
      "ems": null
    },
    {
      "latitude": 50.577896,
      "longitude": 7.23681,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1647190692,
      "ems": null
    },
    {
      "latitude": 50.579193,
      "longitude": 7.234349,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1647190695,
      "ems": null
    },
    {
      "latitude": 50.579983,
      "longitude": 7.232864,
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
      "heading": 309,
      "squawk": "4451",
      "timestamp": 1647190698,
      "ems": null
    },
    {
      "latitude": 50.580402,
      "longitude": 7.232048,
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
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1647190701,
      "ems": null
    },
    {
      "latitude": 50.581287,
      "longitude": 7.230489,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 311,
      "squawk": "4451",
      "timestamp": 1647190703,
      "ems": null
    },
    {
      "latitude": 50.583344,
      "longitude": 7.227269,
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
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1647190709,
      "ems": null
    },
    {
      "latitude": 50.584534,
      "longitude": 7.225679,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1647190713,
      "ems": null
    },
    {
      "latitude": 50.585571,
      "longitude": 7.224253,
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
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1647190716,
      "ems": null
    },
    {
      "latitude": 50.587189,
      "longitude": 7.222282,
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
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1647190721,
      "ems": null
    },
    {
      "latitude": 50.588272,
      "longitude": 7.220987,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647190724,
      "ems": null
    },
    {
      "latitude": 50.58934,
      "longitude": 7.219824,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1647190727,
      "ems": null
    },
    {
      "latitude": 50.590317,
      "longitude": 7.21876,
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
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1647190729,
      "ems": null
    },
    {
      "latitude": 50.591576,
      "longitude": 7.217498,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190733,
      "ems": null
    },
    {
      "latitude": 50.592693,
      "longitude": 7.216533,
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
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190736,
      "ems": null
    },
    {
      "latitude": 50.593781,
      "longitude": 7.215704,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190738,
      "ems": null
    },
    {
      "latitude": 50.595245,
      "longitude": 7.214838,
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
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1647190742,
      "ems": null
    },
    {
      "latitude": 50.59623,
      "longitude": 7.214455,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1647190744,
      "ems": null
    },
    {
      "latitude": 50.597717,
      "longitude": 7.21397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1647190747,
      "ems": null
    },
    {
      "latitude": 50.599319,
      "longitude": 7.213464,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1647190751,
      "ems": null
    },
    {
      "latitude": 50.60051,
      "longitude": 7.213103,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1647190754,
      "ems": null
    },
    {
      "latitude": 50.602142,
      "longitude": 7.212599,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1647190757,
      "ems": null
    },
    {
      "latitude": 50.603493,
      "longitude": 7.212227,
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
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1647190760,
      "ems": null
    },
    {
      "latitude": 50.60461,
      "longitude": 7.211931,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1647190762,
      "ems": null
    },
    {
      "latitude": 50.605728,
      "longitude": 7.211708,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190765,
      "ems": null
    },
    {
      "latitude": 50.607449,
      "longitude": 7.211411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190769,
      "ems": null
    },
    {
      "latitude": 50.608658,
      "longitude": 7.211151,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647190771,
      "ems": null
    },
    {
      "latitude": 50.61058,
      "longitude": 7.21079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1647190775,
      "ems": null
    },
    {
      "latitude": 50.613556,
      "longitude": 7.209922,
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
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1647190781,
      "ems": null
    },
    {
      "latitude": 50.616062,
      "longitude": 7.209258,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "4451",
      "timestamp": 1647190786,
      "ems": null
    },
    {
      "latitude": 50.618622,
      "longitude": 7.208887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1647190793,
      "ems": null
    },
    {
      "latitude": 50.620697,
      "longitude": 7.208694,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1647190796,
      "ems": null
    },
    {
      "latitude": 50.62244,
      "longitude": 7.208664,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1647190799,
      "ems": null
    },
    {
      "latitude": 50.623947,
      "longitude": 7.208694,
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1647190802,
      "ems": null
    },
    {
      "latitude": 50.625324,
      "longitude": 7.208739,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647190805,
      "ems": null
    },
    {
      "latitude": 50.626724,
      "longitude": 7.208739,
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647190807,
      "ems": null
    },
    {
      "latitude": 50.628445,
      "longitude": 7.208813,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647190811,
      "ems": null
    },
    {
      "latitude": 50.629654,
      "longitude": 7.208887,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1647190814,
      "ems": null
    },
    {
      "latitude": 50.63147,
      "longitude": 7.209184,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647190817,
      "ems": null
    },
    {
      "latitude": 50.633007,
      "longitude": 7.20963,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647190820,
      "ems": null
    },
    {
      "latitude": 50.634495,
      "longitude": 7.210075,
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
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1647190823,
      "ems": null
    },
    {
      "latitude": 50.635941,
      "longitude": 7.21052,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647190826,
      "ems": null
    },
    {
      "latitude": 50.637428,
      "longitude": 7.210817,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1647190829,
      "ems": null
    },
    {
      "latitude": 50.640289,
      "longitude": 7.211151,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1647190835,
      "ems": null
    },
    {
      "latitude": 50.643036,
      "longitude": 7.211296,
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
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1647190840,
      "ems": null
    },
    {
      "latitude": 50.6446,
      "longitude": 7.211188,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 354,
      "squawk": "4451",
      "timestamp": 1647190844,
      "ems": null
    },
    {
      "latitude": 50.646332,
      "longitude": 7.21079,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1647190847,
      "ems": null
    },
    {
      "latitude": 50.647995,
      "longitude": 7.210223,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1647190850,
      "ems": null
    },
    {
      "latitude": 50.649441,
      "longitude": 7.209555,
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
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1647190853,
      "ems": null
    },
    {
      "latitude": 50.650864,
      "longitude": 7.20891,
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
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1647190856,
      "ems": null
    },
    {
      "latitude": 50.652374,
      "longitude": 7.208116,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1647190859,
      "ems": null
    },
    {
      "latitude": 50.653748,
      "longitude": 7.207104,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190862,
      "ems": null
    },
    {
      "latitude": 50.655075,
      "longitude": 7.206091,
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
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1647190865,
      "ems": null
    },
    {
      "latitude": 50.656403,
      "longitude": 7.205008,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1647190868,
      "ems": null
    },
    {
      "latitude": 50.657684,
      "longitude": 7.203923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1647190871,
      "ems": null
    },
    {
      "latitude": 50.658966,
      "longitude": 7.202767,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1647190874,
      "ems": null
    },
    {
      "latitude": 50.660019,
      "longitude": 7.201755,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647190877,
      "ems": null
    },
    {
      "latitude": 50.661312,
      "longitude": 7.200499,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647190880,
      "ems": null
    },
    {
      "latitude": 50.662476,
      "longitude": 7.19946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190883,
      "ems": null
    },
    {
      "latitude": 50.66391,
      "longitude": 7.198069,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647190886,
      "ems": null
    },
    {
      "latitude": 50.664944,
      "longitude": 7.197084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647190889,
      "ems": null
    },
    {
      "latitude": 50.667664,
      "longitude": 7.194599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647190895,
      "ems": null
    },
    {
      "latitude": 50.67025,
      "longitude": 7.192259,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647190901,
      "ems": null
    },
    {
      "latitude": 50.673973,
      "longitude": 7.189255,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647190910,
      "ems": null
    },
    {
      "latitude": 50.676395,
      "longitude": 7.186966,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1647190916,
      "ems": null
    },
    {
      "latitude": 50.678696,
      "longitude": 7.184762,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647190922,
      "ems": null
    },
    {
      "latitude": 50.681076,
      "longitude": 7.182757,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1647190928,
      "ems": null
    },
    {
      "latitude": 50.683701,
      "longitude": 7.180862,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190934,
      "ems": null
    },
    {
      "latitude": 50.68483,
      "longitude": 7.180085,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1647190937,
      "ems": null
    },
    {
      "latitude": 50.685982,
      "longitude": 7.179337,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1647190940,
      "ems": null
    },
    {
      "latitude": 50.687439,
      "longitude": 7.178378,
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
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1647190943,
      "ems": null
    },
    {
      "latitude": 50.688637,
      "longitude": 7.177582,
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
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1647190946,
      "ems": null
    },
    {
      "latitude": 50.691059,
      "longitude": 7.175903,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647190952,
      "ems": null
    },
    {
      "latitude": 50.693573,
      "longitude": 7.173615,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190958,
      "ems": null
    },
    {
      "latitude": 50.694687,
      "longitude": 7.17247,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190961,
      "ems": null
    },
    {
      "latitude": 50.695862,
      "longitude": 7.171251,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190964,
      "ems": null
    },
    {
      "latitude": 50.69664,
      "longitude": 7.170509,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1647190967,
      "ems": null
    },
    {
      "latitude": 50.698242,
      "longitude": 7.168876,
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
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1647190970,
      "ems": null
    },
    {
      "latitude": 50.699158,
      "longitude": 7.167911,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1647190973,
      "ems": null
    },
    {
      "latitude": 50.700508,
      "longitude": 7.166367,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647190976,
      "ems": null
    },
    {
      "latitude": 50.701485,
      "longitude": 7.16507,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1647190979,
      "ems": null
    },
    {
      "latitude": 50.702499,
      "longitude": 7.163309,
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
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1647190982,
      "ems": null
    },
    {
      "latitude": 50.703114,
      "longitude": 7.16156,
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
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1647190985,
      "ems": null
    },
    {
      "latitude": 50.703461,
      "longitude": 7.159671,
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
      "heading": 286,
      "squawk": "4451",
      "timestamp": 1647190988,
      "ems": null
    },
    {
      "latitude": 50.703579,
      "longitude": 7.157516,
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
      "heading": 268,
      "squawk": "4451",
      "timestamp": 1647190991,
      "ems": null
    },
    {
      "latitude": 50.703442,
      "longitude": 7.155914,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "4451",
      "timestamp": 1647190994,
      "ems": null
    },
    {
      "latitude": 50.703159,
      "longitude": 7.153854,
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
      "heading": 256,
      "squawk": "4451",
      "timestamp": 1647190997,
      "ems": null
    },
    {
      "latitude": 50.702927,
      "longitude": 7.152252,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1647191000,
      "ems": null
    },
    {
      "latitude": 50.702591,
      "longitude": 7.150318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1647191003,
      "ems": null
    },
    {
      "latitude": 50.702278,
      "longitude": 7.148743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1647191006,
      "ems": null
    },
    {
      "latitude": 50.701904,
      "longitude": 7.146829,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1647191009,
      "ems": null
    },
    {
      "latitude": 50.701584,
      "longitude": 7.145122,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "4451",
      "timestamp": 1647191012,
      "ems": null
    },
    {
      "latitude": 50.701252,
      "longitude": 7.143402,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "4451",
      "timestamp": 1647191015,
      "ems": null
    },
    {
      "latitude": 50.700943,
      "longitude": 7.141856,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1647191019,
      "ems": null
    },
    {
      "latitude": 50.700668,
      "longitude": 7.140148,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1647191022,
      "ems": null
    },
    {
      "latitude": 50.700302,
      "longitude": 7.138144,
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
      "heading": 254,
      "squawk": "4451",
      "timestamp": 1647191025,
      "ems": null
    },
    {
      "latitude": 50.699615,
      "longitude": 7.134581,
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
      "heading": 251,
      "squawk": "4451",
      "timestamp": 1647191031,
      "ems": null
    },
    {
      "latitude": 50.698879,
      "longitude": 7.131348,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "4451",
      "timestamp": 1647191037,
      "ems": null
    },
    {
      "latitude": 50.69846,
      "longitude": 7.129669,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "4451",
      "timestamp": 1647191040,
      "ems": null
    },
    {
      "latitude": 50.697994,
      "longitude": 7.127991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "4451",
      "timestamp": 1647191043,
      "ems": null
    },
    {
      "latitude": 50.69751,
      "longitude": 7.126341,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "4451",
      "timestamp": 1647191046,
      "ems": null
    },
    {
      "latitude": 50.697052,
      "longitude": 7.124856,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "4451",
      "timestamp": 1647191049,
      "ems": null
    },
    {
      "latitude": 50.696365,
      "longitude": 7.123108,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1647191052,
      "ems": null
    },
    {
      "latitude": 50.695724,
      "longitude": 7.121665,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 235,
      "squawk": "4451",
      "timestamp": 1647191055,
      "ems": null
    },
    {
      "latitude": 50.695175,
      "longitude": 7.120402,
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
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1647191058,
      "ems": null
    },
    {
      "latitude": 50.694641,
      "longitude": 7.118683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 243,
      "squawk": "4451",
      "timestamp": 1647191061,
      "ems": null
    },
    {
      "latitude": 50.693897,
      "longitude": 7.115173,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "4451",
      "timestamp": 1647191066,
      "ems": null
    },
    {
      "latitude": 50.693665,
      "longitude": 7.11319,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "4451",
      "timestamp": 1647191070,
      "ems": null
    },
    {
      "latitude": 50.693573,
      "longitude": 7.111816,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 265,
      "squawk": "4451",
      "timestamp": 1647191072,
      "ems": null
    },
    {
      "latitude": 50.693527,
      "longitude": 7.109639,
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
      "heading": 269,
      "squawk": "4451",
      "timestamp": 1647191075,
      "ems": null
    },
    {
      "latitude": 50.693573,
      "longitude": 7.107561,
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
      "heading": 271,
      "squawk": "4451",
      "timestamp": 1647191079,
      "ems": null
    },
    {
      "latitude": 50.693619,
      "longitude": 7.105865,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "4451",
      "timestamp": 1647191081,
      "ems": null
    },
    {
      "latitude": 50.693756,
      "longitude": 7.104034,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1647191085,
      "ems": null
    },
    {
      "latitude": 50.693897,
      "longitude": 7.102203,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1647191087,
      "ems": null
    },
    {
      "latitude": 50.694077,
      "longitude": 7.100286,
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
      "heading": 278,
      "squawk": "4451",
      "timestamp": 1647191090,
      "ems": null
    },
    {
      "latitude": 50.694221,
      "longitude": 7.098541,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1647191094,
      "ems": null
    },
    {
      "latitude": 50.694317,
      "longitude": 7.097321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "4451",
      "timestamp": 1647191097,
      "ems": null
    },
    {
      "latitude": 50.694489,
      "longitude": 7.094718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "4451",
      "timestamp": 1647191100,
      "ems": null
    },
    {
      "latitude": 50.694641,
      "longitude": 7.092667,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "4451",
      "timestamp": 1647191103,
      "ems": null
    },
    {
      "latitude": 50.694782,
      "longitude": 7.089005,
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
      "heading": 272,
      "squawk": "4451",
      "timestamp": 1647191109,
      "ems": null
    },
    {
      "latitude": 50.69492,
      "longitude": 7.085342,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "4451",
      "timestamp": 1647191115,
      "ems": null
    },
    {
      "latitude": 50.695248,
      "longitude": 7.081757,
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
      "heading": 280,
      "squawk": "4451",
      "timestamp": 1647191120,
      "ems": null
    },
    {
      "latitude": 50.69548,
      "longitude": 7.080231,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 284,
      "squawk": "4451",
      "timestamp": 1647191124,
      "ems": null
    },
    {
      "latitude": 50.695999,
      "longitude": 7.077942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1647191127,
      "ems": null
    },
    {
      "latitude": 50.696552,
      "longitude": 7.076187,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "4451",
      "timestamp": 1647191130,
      "ems": null
    },
    {
      "latitude": 50.697388,
      "longitude": 7.074432,
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
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1647191133,
      "ems": null
    },
    {
      "latitude": 50.698334,
      "longitude": 7.072894,
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
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1647191136,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 7.071609,
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
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1647191138,
      "ems": null
    },
    {
      "latitude": 50.700554,
      "longitude": 7.070465,
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
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1647191141,
      "ems": null
    },
    {
      "latitude": 50.701767,
      "longitude": 7.069479,
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
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1647191144,
      "ems": null
    },
    {
      "latitude": 50.703094,
      "longitude": 7.068663,
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
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1647191148,
      "ems": null
    },
    {
      "latitude": 50.704605,
      "longitude": 7.067947,
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
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1647191151,
      "ems": null
    },
    {
      "latitude": 50.705956,
      "longitude": 7.067566,
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
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1647191154,
      "ems": null
    },
    {
      "latitude": 50.707397,
      "longitude": 7.06749,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1647191157,
      "ems": null
    },
    {
      "latitude": 50.708771,
      "longitude": 7.067698,
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
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1647191160,
      "ems": null
    },
    {
      "latitude": 50.71019,
      "longitude": 7.068329,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1647191163,
      "ems": null
    },
    {
      "latitude": 50.711472,
      "longitude": 7.069108,
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
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1647191165,
      "ems": null
    },
    {
      "latitude": 50.712749,
      "longitude": 7.070236,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1647191168,
      "ems": null
    },
    {
      "latitude": 50.713806,
      "longitude": 7.071558,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1647191172,
      "ems": null
    },
    {
      "latitude": 50.714859,
      "longitude": 7.072968,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1647191175,
      "ems": null
    },
    {
      "latitude": 50.716011,
      "longitude": 7.074585,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1647191178,
      "ems": null
    },
    {
      "latitude": 50.717033,
      "longitude": 7.076035,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1647191181,
      "ems": null
    },
    {
      "latitude": 50.718201,
      "longitude": 7.077719,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1647191184,
      "ems": null
    },
    {
      "latitude": 50.719254,
      "longitude": 7.079278,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1647191187,
      "ems": null
    },
    {
      "latitude": 50.720169,
      "longitude": 7.080763,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1647191190,
      "ems": null
    },
    {
      "latitude": 50.721085,
      "longitude": 7.082619,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191193,
      "ems": null
    },
    {
      "latitude": 50.721725,
      "longitude": 7.084251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1647191196,
      "ems": null
    },
    {
      "latitude": 50.722321,
      "longitude": 7.085811,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1647191199,
      "ems": null
    },
    {
      "latitude": 50.723133,
      "longitude": 7.088013,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1647191202,
      "ems": null
    },
    {
      "latitude": 50.723602,
      "longitude": 7.089374,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1647191205,
      "ems": null
    },
    {
      "latitude": 50.724297,
      "longitude": 7.091293,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647191208,
      "ems": null
    },
    {
      "latitude": 50.724899,
      "longitude": 7.093124,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191211,
      "ems": null
    },
    {
      "latitude": 50.725506,
      "longitude": 7.094955,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647191214,
      "ems": null
    },
    {
      "latitude": 50.726158,
      "longitude": 7.096786,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1647191217,
      "ems": null
    },
    {
      "latitude": 50.72681,
      "longitude": 7.098618,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1647191220,
      "ems": null
    },
    {
      "latitude": 50.728226,
      "longitude": 7.102141,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191226,
      "ems": null
    },
    {
      "latitude": 50.729694,
      "longitude": 7.10556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191232,
      "ems": null
    },
    {
      "latitude": 50.730423,
      "longitude": 7.107115,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1647191235,
      "ems": null
    },
    {
      "latitude": 50.73114,
      "longitude": 7.108765,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1647191238,
      "ems": null
    },
    {
      "latitude": 50.731838,
      "longitude": 7.110291,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191241,
      "ems": null
    },
    {
      "latitude": 50.732536,
      "longitude": 7.111816,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191244,
      "ems": null
    },
    {
      "latitude": 50.733746,
      "longitude": 7.114639,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1647191249,
      "ems": null
    },
    {
      "latitude": 50.735283,
      "longitude": 7.11792,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1647191256,
      "ems": null
    },
    {
      "latitude": 50.736538,
      "longitude": 7.120972,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1647191262,
      "ems": null
    },
    {
      "latitude": 50.737701,
      "longitude": 7.12404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647191268,
      "ems": null
    },
    {
      "latitude": 50.738251,
      "longitude": 7.125599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191271,
      "ems": null
    },
    {
      "latitude": 50.7388,
      "longitude": 7.127306,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647191274,
      "ems": null
    },
    {
      "latitude": 50.739258,
      "longitude": 7.128642,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191277,
      "ems": null
    },
    {
      "latitude": 50.739761,
      "longitude": 7.130275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191280,
      "ems": null
    },
    {
      "latitude": 50.740215,
      "longitude": 7.131653,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191283,
      "ems": null
    },
    {
      "latitude": 50.740822,
      "longitude": 7.133484,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1647191286,
      "ems": null
    },
    {
      "latitude": 50.741364,
      "longitude": 7.135026,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1647191289,
      "ems": null
    },
    {
      "latitude": 50.742405,
      "longitude": 7.137985,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1647191295,
      "ems": null
    },
    {
      "latitude": 50.743523,
      "longitude": 7.140884,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1647191301,
      "ems": null
    },
    {
      "latitude": 50.744705,
      "longitude": 7.144083,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1647191307,
      "ems": null
    },
    {
      "latitude": 50.74543,
      "longitude": 7.145615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1647191310,
      "ems": null
    },
    {
      "latitude": 50.746124,
      "longitude": 7.146681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1647191313,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.147827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1647191316,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.148132,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1647191319,
      "ems": null
    },
    {
      "latitude": 50.750038,
      "longitude": 7.147751,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1647191322,
      "ems": null
    },
    {
      "latitude": 50.750969,
      "longitude": 7.146988,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1647191325,
      "ems": null
    },
    {
      "latitude": 50.752041,
      "longitude": 7.145615,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1647191328,
      "ems": null
    },
    {
      "latitude": 50.752808,
      "longitude": 7.144528,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1647191331,
      "ems": null
    },
    {
      "latitude": 50.753716,
      "longitude": 7.143173,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1647191334,
      "ems": null
    },
    {
      "latitude": 50.754555,
      "longitude": 7.141876,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1647191337,
      "ems": null
    },
    {
      "latitude": 50.755371,
      "longitude": 7.140668,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647191340,
      "ems": null
    },
    {
      "latitude": 50.756195,
      "longitude": 7.139332,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1647191343,
      "ems": null
    },
    {
      "latitude": 50.757069,
      "longitude": 7.138138,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1647191346,
      "ems": null
    },
    {
      "latitude": 50.757908,
      "longitude": 7.136993,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1647191349,
      "ems": null
    },
    {
      "latitude": 50.758804,
      "longitude": 7.135917,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1647191352,
      "ems": null
    },
    {
      "latitude": 50.760727,
      "longitude": 7.134358,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1647191358,
      "ems": null
    },
    {
      "latitude": 50.761818,
      "longitude": 7.133865,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1647191361,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.133713,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1647191362,
      "ems": null
    },
    {
      "latitude": 50.763428,
      "longitude": 7.133542,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1647191366,
      "ems": null
    },
    {
      "latitude": 50.764519,
      "longitude": 7.133713,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1647191369,
      "ems": null
    },
    {
      "latitude": 50.765541,
      "longitude": 7.134094,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1647191372,
      "ems": null
    },
    {
      "latitude": 50.766541,
      "longitude": 7.134581,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1647191375,
      "ems": null
    },
    {
      "latitude": 50.767635,
      "longitude": 7.135239,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1647191378,
      "ems": null
    },
    {
      "latitude": 50.76852,
      "longitude": 7.135849,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1647191380,
      "ems": null
    },
    {
      "latitude": 50.769562,
      "longitude": 7.136585,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1647191384,
      "ems": null
    },
    {
      "latitude": 50.770428,
      "longitude": 7.137222,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1647191386,
      "ems": null
    },
    {
      "latitude": 50.771347,
      "longitude": 7.138144,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1647191390,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 7.139035,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1647191393,
      "ems": null
    },
    {
      "latitude": 50.772629,
      "longitude": 7.140074,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1647191395,
      "ems": null
    },
    {
      "latitude": 50.773041,
      "longitude": 7.141336,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1647191399,
      "ems": null
    },
    {
      "latitude": 50.773129,
      "longitude": 7.142792,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1647191402,
      "ems": null
    },
    {
      "latitude": 50.773037,
      "longitude": 7.144089,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1647191405,
      "ems": null
    },
    {
      "latitude": 50.772812,
      "longitude": 7.14527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647191408,
      "ems": null
    },
    {
      "latitude": 50.772526,
      "longitude": 7.146454,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647191411,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.14772,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647191414,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.148611,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647191416,
      "ems": null
    },
    {
      "latitude": 50.771687,
      "longitude": 7.150345,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1647191420,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.151729,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1647191424,
      "ems": null
    },
    {
      "latitude": 50.770935,
      "longitude": 7.153807,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647191429,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.15538,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647191433,
      "ems": null
    },
    {
      "latitude": 50.769917,
      "longitude": 7.158508,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647191441,
      "ems": null
    },
    {
      "latitude": 50.769638,
      "longitude": 7.159729,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1647191445,
      "ems": null
    },
    {
      "latitude": 50.769104,
      "longitude": 7.16227,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647191454,
      "ems": null
    },
    {
      "latitude": 50.768509,
      "longitude": 7.165016,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1647191467,
      "ems": null
    },
    {
      "latitude": 50.768242,
      "longitude": 7.166214,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1647191473,
      "ems": null
    },
    {
      "latitude": 50.76796,
      "longitude": 7.167391,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1647191484,
      "ems": null
    },
    {
      "latitude": 50.767635,
      "longitude": 7.167816,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1647191488,
      "ems": null
    }
  ]
};