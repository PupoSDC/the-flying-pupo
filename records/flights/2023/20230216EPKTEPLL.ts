import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230216EPKTEPLL",
    callsign: "BNI6L",
    name: "IR check ride",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 1, 16, 11, 43).getTime(),
    arrival: new Date(2023, 1, 16, 13, 12).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 89,
    picTime: 0,
    dualTime: 89,
    ifrTime: 89,
    landings: {
      day: 1,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-MEL",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Katowice International Airport",
      code: "EPKT",
      position: {
        latitude: 50.474251,
        longitude
          :
          19.080009
      },
    },
    destination: {
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
      "latitude": 50.475998,
      "longitude": 19.078409,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547746,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.074566,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547755,
      "ems": null
    },
    {
      "latitude": 50.476089,
      "longitude": 19.06988,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676547762,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 19.0667,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676547768,
      "ems": null
    },
    {
      "latitude": 50.476318,
      "longitude": 19.065039,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676547770,
      "ems": null
    },
    {
      "latitude": 50.476543,
      "longitude": 19.059942,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676547780,
      "ems": null
    },
    {
      "latitude": 50.476639,
      "longitude": 19.058161,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676547783,
      "ems": null
    },
    {
      "latitude": 50.47673,
      "longitude": 19.055136,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676547788,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.051556,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547794,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.049498,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676547798,
      "ems": null
    },
    {
      "latitude": 50.476776,
      "longitude": 19.047695,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547801,
      "ems": null
    },
    {
      "latitude": 50.47673,
      "longitude": 19.045839,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676547804,
      "ems": null
    },
    {
      "latitude": 50.476685,
      "longitude": 19.044004,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676547807,
      "ems": null
    },
    {
      "latitude": 50.476593,
      "longitude": 19.042053,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676547810,
      "ems": null
    },
    {
      "latitude": 50.476593,
      "longitude": 19.039974,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547813,
      "ems": null
    },
    {
      "latitude": 50.476593,
      "longitude": 19.03627,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547819,
      "ems": null
    },
    {
      "latitude": 50.476543,
      "longitude": 19.032551,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547825,
      "ems": null
    },
    {
      "latitude": 50.47641,
      "longitude": 19.027525,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676547833,
      "ems": null
    },
    {
      "latitude": 50.476219,
      "longitude": 19.023941,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676547838,
      "ems": null
    },
    {
      "latitude": 50.476135,
      "longitude": 19.022177,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676547841,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.020229,
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
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676547844,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.018417,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676547847,
      "ems": null
    },
    {
      "latitude": 50.475769,
      "longitude": 19.016466,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676547850,
      "ems": null
    },
    {
      "latitude": 50.475475,
      "longitude": 19.012583,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 262,
      "squawk": "4154",
      "timestamp": 1676547856,
      "ems": null
    },
    {
      "latitude": 50.475193,
      "longitude": 19.00902,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 262,
      "squawk": "4154",
      "timestamp": 1676547862,
      "ems": null
    },
    {
      "latitude": 50.474899,
      "longitude": 19.005264,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676547868,
      "ems": null
    },
    {
      "latitude": 50.474636,
      "longitude": 19.001745,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676547874,
      "ems": null
    },
    {
      "latitude": 50.47435,
      "longitude": 18.998035,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "4154",
      "timestamp": 1676547880,
      "ems": null
    },
    {
      "latitude": 50.474079,
      "longitude": 18.994099,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676547886,
      "ems": null
    },
    {
      "latitude": 50.474079,
      "longitude": 18.991947,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547889,
      "ems": null
    },
    {
      "latitude": 50.474262,
      "longitude": 18.990017,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 279,
      "squawk": "4154",
      "timestamp": 1676547892,
      "ems": null
    },
    {
      "latitude": 50.474545,
      "longitude": 18.988459,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 287,
      "squawk": "4154",
      "timestamp": 1676547894,
      "ems": null
    },
    {
      "latitude": 50.475311,
      "longitude": 18.985966,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 299,
      "squawk": "4154",
      "timestamp": 1676547898,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 18.984301,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 300,
      "squawk": "4154",
      "timestamp": 1676547901,
      "ems": null
    },
    {
      "latitude": 50.476593,
      "longitude": 18.98341,
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
      "heading": 309,
      "squawk": "4154",
      "timestamp": 1676547903,
      "ems": null
    },
    {
      "latitude": 50.478378,
      "longitude": 18.981339,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 322,
      "squawk": "4154",
      "timestamp": 1676547908,
      "ems": null
    },
    {
      "latitude": 50.47966,
      "longitude": 18.980328,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 336,
      "squawk": "4154",
      "timestamp": 1676547910,
      "ems": null
    },
    {
      "latitude": 50.481308,
      "longitude": 18.97946,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 344,
      "squawk": "4154",
      "timestamp": 1676547914,
      "ems": null
    },
    {
      "latitude": 50.482876,
      "longitude": 18.979105,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676547916,
      "ems": null
    },
    {
      "latitude": 50.4846,
      "longitude": 18.979105,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "4154",
      "timestamp": 1676547919,
      "ems": null
    },
    {
      "latitude": 50.486881,
      "longitude": 18.979624,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "4154",
      "timestamp": 1676547923,
      "ems": null
    },
    {
      "latitude": 50.488602,
      "longitude": 18.980515,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "4154",
      "timestamp": 1676547926,
      "ems": null
    },
    {
      "latitude": 50.490097,
      "longitude": 18.981701,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "4154",
      "timestamp": 1676547929,
      "ems": null
    },
    {
      "latitude": 50.491627,
      "longitude": 18.983261,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676547932,
      "ems": null
    },
    {
      "latitude": 50.493256,
      "longitude": 18.985489,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4154",
      "timestamp": 1676547935,
      "ems": null
    },
    {
      "latitude": 50.494492,
      "longitude": 18.9877,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "4154",
      "timestamp": 1676547938,
      "ems": null
    },
    {
      "latitude": 50.495632,
      "longitude": 18.990387,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "4154",
      "timestamp": 1676547941,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 18.990908,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676547942,
      "ems": null
    },
    {
      "latitude": 50.496231,
      "longitude": 18.992182,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "4154",
      "timestamp": 1676547943,
      "ems": null
    },
    {
      "latitude": 50.497055,
      "longitude": 18.995289,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "4154",
      "timestamp": 1676547947,
      "ems": null
    },
    {
      "latitude": 50.497448,
      "longitude": 18.997217,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "4154",
      "timestamp": 1676547948,
      "ems": null
    },
    {
      "latitude": 50.497604,
      "longitude": 18.99818,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "4154",
      "timestamp": 1676547949,
      "ems": null
    },
    {
      "latitude": 50.498146,
      "longitude": 19.001894,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "4154",
      "timestamp": 1676547953,
      "ems": null
    },
    {
      "latitude": 50.498238,
      "longitude": 19.002934,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "4154",
      "timestamp": 1676547954,
      "ems": null
    },
    {
      "latitude": 50.498657,
      "longitude": 19.007015,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "4154",
      "timestamp": 1676547958,
      "ems": null
    },
    {
      "latitude": 50.499031,
      "longitude": 19.011618,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547962,
      "ems": null
    },
    {
      "latitude": 50.499207,
      "longitude": 19.014154,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547964,
      "ems": null
    },
    {
      "latitude": 50.499481,
      "longitude": 19.017912,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547968,
      "ems": null
    },
    {
      "latitude": 50.49968,
      "longitude": 19.021269,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "4154",
      "timestamp": 1676547971,
      "ems": null
    },
    {
      "latitude": 50.499912,
      "longitude": 19.024609,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547974,
      "ems": null
    },
    {
      "latitude": 50.500149,
      "longitude": 19.027948,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "4154",
      "timestamp": 1676547977,
      "ems": null
    },
    {
      "latitude": 50.500397,
      "longitude": 19.031572,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547980,
      "ems": null
    },
    {
      "latitude": 50.5009,
      "longitude": 19.038151,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676547986,
      "ems": null
    },
    {
      "latitude": 50.50145,
      "longitude": 19.044727,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676547992,
      "ems": null
    },
    {
      "latitude": 50.501953,
      "longitude": 19.051088,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547998,
      "ems": null
    },
    {
      "latitude": 50.50238,
      "longitude": 19.0569,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548004,
      "ems": null
    },
    {
      "latitude": 50.50296,
      "longitude": 19.064531,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548010,
      "ems": null
    },
    {
      "latitude": 50.503498,
      "longitude": 19.071003,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548016,
      "ems": null
    },
    {
      "latitude": 50.503918,
      "longitude": 19.077166,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548021,
      "ems": null
    },
    {
      "latitude": 50.504425,
      "longitude": 19.08412,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548028,
      "ems": null
    },
    {
      "latitude": 50.504929,
      "longitude": 19.090841,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548034,
      "ems": null
    },
    {
      "latitude": 50.505432,
      "longitude": 19.09749,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548040,
      "ems": null
    },
    {
      "latitude": 50.50592,
      "longitude": 19.103592,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548045,
      "ems": null
    },
    {
      "latitude": 50.506577,
      "longitude": 19.111078,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548052,
      "ems": null
    },
    {
      "latitude": 50.507084,
      "longitude": 19.118216,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548058,
      "ems": null
    },
    {
      "latitude": 50.507595,
      "longitude": 19.124525,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548064,
      "ems": null
    },
    {
      "latitude": 50.508224,
      "longitude": 19.131823,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548070,
      "ems": null
    },
    {
      "latitude": 50.508774,
      "longitude": 19.138544,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548076,
      "ems": null
    },
    {
      "latitude": 50.50927,
      "longitude": 19.144939,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548082,
      "ems": null
    },
    {
      "latitude": 50.509735,
      "longitude": 19.151339,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548088,
      "ems": null
    },
    {
      "latitude": 50.510155,
      "longitude": 19.157261,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548093,
      "ems": null
    },
    {
      "latitude": 50.510696,
      "longitude": 19.164999,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548100,
      "ems": null
    },
    {
      "latitude": 50.511181,
      "longitude": 19.171291,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548106,
      "ems": null
    },
    {
      "latitude": 50.511795,
      "longitude": 19.178877,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548113,
      "ems": null
    },
    {
      "latitude": 50.512436,
      "longitude": 19.186285,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548119,
      "ems": null
    },
    {
      "latitude": 50.512947,
      "longitude": 19.192669,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548125,
      "ems": null
    },
    {
      "latitude": 50.513626,
      "longitude": 19.20056,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548132,
      "ems": null
    },
    {
      "latitude": 50.51413,
      "longitude": 19.206993,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548138,
      "ems": null
    },
    {
      "latitude": 50.514671,
      "longitude": 19.2139,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548144,
      "ems": null
    },
    {
      "latitude": 50.515091,
      "longitude": 19.219913,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676548149,
      "ems": null
    },
    {
      "latitude": 50.515732,
      "longitude": 19.227375,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548156,
      "ems": null
    },
    {
      "latitude": 50.516346,
      "longitude": 19.234165,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548162,
      "ems": null
    },
    {
      "latitude": 50.516953,
      "longitude": 19.240847,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548168,
      "ems": null
    },
    {
      "latitude": 50.517509,
      "longitude": 19.247082,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548174,
      "ems": null
    },
    {
      "latitude": 50.518066,
      "longitude": 19.253395,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548180,
      "ems": null
    },
    {
      "latitude": 50.518661,
      "longitude": 19.260046,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548186,
      "ems": null
    },
    {
      "latitude": 50.519325,
      "longitude": 19.267422,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548192,
      "ems": null
    },
    {
      "latitude": 50.519932,
      "longitude": 19.274103,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548198,
      "ems": null
    },
    {
      "latitude": 50.520538,
      "longitude": 19.280487,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548204,
      "ems": null
    },
    {
      "latitude": 50.521095,
      "longitude": 19.287167,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548210,
      "ems": null
    },
    {
      "latitude": 50.521748,
      "longitude": 19.29422,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548216,
      "ems": null
    },
    {
      "latitude": 50.522305,
      "longitude": 19.300604,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548222,
      "ems": null
    },
    {
      "latitude": 50.522957,
      "longitude": 19.307209,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548228,
      "ems": null
    },
    {
      "latitude": 50.52356,
      "longitude": 19.313892,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548234,
      "ems": null
    },
    {
      "latitude": 50.5242,
      "longitude": 19.320541,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548240,
      "ems": null
    },
    {
      "latitude": 50.524868,
      "longitude": 19.327772,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "4154",
      "timestamp": 1676548247,
      "ems": null
    },
    {
      "latitude": 50.525436,
      "longitude": 19.334131,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548253,
      "ems": null
    },
    {
      "latitude": 50.525986,
      "longitude": 19.340635,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548258,
      "ems": null
    },
    {
      "latitude": 50.526588,
      "longitude": 19.347443,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548264,
      "ems": null
    },
    {
      "latitude": 50.527145,
      "longitude": 19.354124,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4154",
      "timestamp": 1676548270,
      "ems": null
    },
    {
      "latitude": 50.527405,
      "longitude": 19.359066,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "4154",
      "timestamp": 1676548275,
      "ems": null
    },
    {
      "latitude": 50.527195,
      "longitude": 19.363626,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "4154",
      "timestamp": 1676548279,
      "ems": null
    },
    {
      "latitude": 50.526947,
      "longitude": 19.365932,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "4154",
      "timestamp": 1676548281,
      "ems": null
    },
    {
      "latitude": 50.526031,
      "longitude": 19.370415,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "4154",
      "timestamp": 1676548285,
      "ems": null
    },
    {
      "latitude": 50.525703,
      "longitude": 19.371494,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "4154",
      "timestamp": 1676548286,
      "ems": null
    },
    {
      "latitude": 50.524612,
      "longitude": 19.37468,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "4154",
      "timestamp": 1676548290,
      "ems": null
    },
    {
      "latitude": 50.523235,
      "longitude": 19.377583,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "4154",
      "timestamp": 1676548293,
      "ems": null
    },
    {
      "latitude": 50.521729,
      "longitude": 19.380028,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "4154",
      "timestamp": 1676548296,
      "ems": null
    },
    {
      "latitude": 50.520397,
      "longitude": 19.381739,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "4154",
      "timestamp": 1676548299,
      "ems": null
    },
    {
      "latitude": 50.518673,
      "longitude": 19.383446,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "4154",
      "timestamp": 1676548302,
      "ems": null
    },
    {
      "latitude": 50.51651,
      "longitude": 19.384943,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "4154",
      "timestamp": 1676548305,
      "ems": null
    },
    {
      "latitude": 50.514812,
      "longitude": 19.385674,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "4154",
      "timestamp": 1676548308,
      "ems": null
    },
    {
      "latitude": 50.51281,
      "longitude": 19.386267,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 172,
      "squawk": "4154",
      "timestamp": 1676548311,
      "ems": null
    },
    {
      "latitude": 50.510807,
      "longitude": 19.386564,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676548314,
      "ems": null
    },
    {
      "latitude": 50.509094,
      "longitude": 19.386749,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676548317,
      "ems": null
    },
    {
      "latitude": 50.507217,
      "longitude": 19.386822,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548320,
      "ems": null
    },
    {
      "latitude": 50.505222,
      "longitude": 19.386934,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548323,
      "ems": null
    },
    {
      "latitude": 50.503544,
      "longitude": 19.387009,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548326,
      "ems": null
    },
    {
      "latitude": 50.501217,
      "longitude": 19.387083,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548329,
      "ems": null
    },
    {
      "latitude": 50.499756,
      "longitude": 19.38711,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548332,
      "ems": null
    },
    {
      "latitude": 50.49754,
      "longitude": 19.387232,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548335,
      "ems": null
    },
    {
      "latitude": 50.495491,
      "longitude": 19.387306,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548338,
      "ems": null
    },
    {
      "latitude": 50.493668,
      "longitude": 19.3874,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "4154",
      "timestamp": 1676548341,
      "ems": null
    },
    {
      "latitude": 50.492157,
      "longitude": 19.387472,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 179,
      "squawk": "4154",
      "timestamp": 1676548343,
      "ems": null
    },
    {
      "latitude": 50.490326,
      "longitude": 19.387327,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "4154",
      "timestamp": 1676548347,
      "ems": null
    },
    {
      "latitude": 50.488495,
      "longitude": 19.386967,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "4154",
      "timestamp": 1676548350,
      "ems": null
    },
    {
      "latitude": 50.486649,
      "longitude": 19.386118,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "4154",
      "timestamp": 1676548353,
      "ems": null
    },
    {
      "latitude": 50.485016,
      "longitude": 19.384871,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "4154",
      "timestamp": 1676548356,
      "ems": null
    },
    {
      "latitude": 50.483643,
      "longitude": 19.383425,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "4154",
      "timestamp": 1676548359,
      "ems": null
    },
    {
      "latitude": 50.482498,
      "longitude": 19.381762,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 224,
      "squawk": "4154",
      "timestamp": 1676548362,
      "ems": null
    },
    {
      "latitude": 50.481445,
      "longitude": 19.37981,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 232,
      "squawk": "4154",
      "timestamp": 1676548365,
      "ems": null
    },
    {
      "latitude": 50.480503,
      "longitude": 19.377655,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 237,
      "squawk": "4154",
      "timestamp": 1676548368,
      "ems": null
    },
    {
      "latitude": 50.479706,
      "longitude": 19.375618,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 239,
      "squawk": "4154",
      "timestamp": 1676548371,
      "ems": null
    },
    {
      "latitude": 50.47892,
      "longitude": 19.37335,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 241,
      "squawk": "4154",
      "timestamp": 1676548374,
      "ems": null
    },
    {
      "latitude": 50.478127,
      "longitude": 19.370975,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 242,
      "squawk": "4154",
      "timestamp": 1676548377,
      "ems": null
    },
    {
      "latitude": 50.477291,
      "longitude": 19.368599,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 240,
      "squawk": "4154",
      "timestamp": 1676548380,
      "ems": null
    },
    {
      "latitude": 50.476501,
      "longitude": 19.36651,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 237,
      "squawk": "4154",
      "timestamp": 1676548383,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.364416,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 236,
      "squawk": "4154",
      "timestamp": 1676548386,
      "ems": null
    },
    {
      "latitude": 50.474823,
      "longitude": 19.362141,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676548389,
      "ems": null
    },
    {
      "latitude": 50.47435,
      "longitude": 19.360006,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 255,
      "squawk": "4154",
      "timestamp": 1676548392,
      "ems": null
    },
    {
      "latitude": 50.474125,
      "longitude": 19.357317,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548395,
      "ems": null
    },
    {
      "latitude": 50.474171,
      "longitude": 19.354792,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548398,
      "ems": null
    },
    {
      "latitude": 50.474312,
      "longitude": 19.352417,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548401,
      "ems": null
    },
    {
      "latitude": 50.474396,
      "longitude": 19.34996,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548404,
      "ems": null
    },
    {
      "latitude": 50.474403,
      "longitude": 19.347963,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548407,
      "ems": null
    },
    {
      "latitude": 50.474442,
      "longitude": 19.345478,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "squawk": "4154",
      "timestamp": 1676548410,
      "ems": null
    },
    {
      "latitude": 50.47435,
      "longitude": 19.343094,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548413,
      "ems": null
    },
    {
      "latitude": 50.474216,
      "longitude": 19.341059,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548416,
      "ems": null
    },
    {
      "latitude": 50.474213,
      "longitude": 19.338974,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548419,
      "ems": null
    },
    {
      "latitude": 50.474262,
      "longitude": 19.336977,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548422,
      "ems": null
    },
    {
      "latitude": 50.474487,
      "longitude": 19.332901,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548428,
      "ems": null
    },
    {
      "latitude": 50.47467,
      "longitude": 19.328854,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548435,
      "ems": null
    },
    {
      "latitude": 50.474808,
      "longitude": 19.324806,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548441,
      "ems": null
    },
    {
      "latitude": 50.474808,
      "longitude": 19.320759,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548447,
      "ems": null
    },
    {
      "latitude": 50.474728,
      "longitude": 19.316414,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548453,
      "ems": null
    },
    {
      "latitude": 50.474716,
      "longitude": 19.314325,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "4154",
      "timestamp": 1676548456,
      "ems": null
    },
    {
      "latitude": 50.47467,
      "longitude": 19.312374,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548459,
      "ems": null
    },
    {
      "latitude": 50.474625,
      "longitude": 19.310423,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548462,
      "ems": null
    },
    {
      "latitude": 50.474545,
      "longitude": 19.308472,
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548465,
      "ems": null
    },
    {
      "latitude": 50.474487,
      "longitude": 19.306738,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548468,
      "ems": null
    },
    {
      "latitude": 50.474403,
      "longitude": 19.303053,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676548474,
      "ems": null
    },
    {
      "latitude": 50.474396,
      "longitude": 19.299509,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548480,
      "ems": null
    },
    {
      "latitude": 50.474396,
      "longitude": 19.295822,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548486,
      "ems": null
    },
    {
      "latitude": 50.474396,
      "longitude": 19.291992,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "squawk": "4154",
      "timestamp": 1676548492,
      "ems": null
    },
    {
      "latitude": 50.474358,
      "longitude": 19.28828,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548498,
      "ems": null
    },
    {
      "latitude": 50.474304,
      "longitude": 19.28462,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "4154",
      "timestamp": 1676548504,
      "ems": null
    },
    {
      "latitude": 50.474396,
      "longitude": 19.281078,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548510,
      "ems": null
    },
    {
      "latitude": 50.474403,
      "longitude": 19.277517,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548516,
      "ems": null
    },
    {
      "latitude": 50.474403,
      "longitude": 19.27425,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548522,
      "ems": null
    },
    {
      "latitude": 50.474358,
      "longitude": 19.270836,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548528,
      "ems": null
    },
    {
      "latitude": 50.474312,
      "longitude": 19.26757,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548534,
      "ems": null
    },
    {
      "latitude": 50.474312,
      "longitude": 19.264229,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548540,
      "ems": null
    },
    {
      "latitude": 50.474449,
      "longitude": 19.260889,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548547,
      "ems": null
    },
    {
      "latitude": 50.474579,
      "longitude": 19.257732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548553,
      "ems": null
    },
    {
      "latitude": 50.474636,
      "longitude": 19.256287,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548556,
      "ems": null
    },
    {
      "latitude": 50.474716,
      "longitude": 19.254841,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548558,
      "ems": null
    },
    {
      "latitude": 50.474854,
      "longitude": 19.251806,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548565,
      "ems": null
    },
    {
      "latitude": 50.474915,
      "longitude": 19.250051,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548568,
      "ems": null
    },
    {
      "latitude": 50.475174,
      "longitude": 19.247179,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548574,
      "ems": null
    },
    {
      "latitude": 50.475334,
      "longitude": 19.245523,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548577,
      "ems": null
    },
    {
      "latitude": 50.475494,
      "longitude": 19.242626,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548583,
      "ems": null
    },
    {
      "latitude": 50.475586,
      "longitude": 19.239447,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548589,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.236338,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548595,
      "ems": null
    },
    {
      "latitude": 50.475662,
      "longitude": 19.234907,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548598,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.233519,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548601,
      "ems": null
    },
    {
      "latitude": 50.475845,
      "longitude": 19.230305,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548607,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.227114,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548613,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.223833,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676548619,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.220221,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548625,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.217167,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548631,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.215534,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548634,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.213974,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548637,
      "ems": null
    },
    {
      "latitude": 50.475845,
      "longitude": 19.210485,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548643,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.207354,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548649,
      "ems": null
    },
    {
      "latitude": 50.475769,
      "longitude": 19.203884,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548656,
      "ems": null
    },
    {
      "latitude": 50.475567,
      "longitude": 19.200687,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676548662,
      "ems": null
    },
    {
      "latitude": 50.475403,
      "longitude": 19.197596,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548668,
      "ems": null
    },
    {
      "latitude": 50.475193,
      "longitude": 19.194304,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548674,
      "ems": null
    },
    {
      "latitude": 50.475193,
      "longitude": 19.191111,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548680,
      "ems": null
    },
    {
      "latitude": 50.475266,
      "longitude": 19.189356,
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548683,
      "ems": null
    },
    {
      "latitude": 50.47538,
      "longitude": 19.187548,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548686,
      "ems": null
    },
    {
      "latitude": 50.475475,
      "longitude": 19.185915,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548689,
      "ems": null
    },
    {
      "latitude": 50.475521,
      "longitude": 19.184059,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548692,
      "ems": null
    },
    {
      "latitude": 50.475494,
      "longitude": 19.182419,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548695,
      "ems": null
    },
    {
      "latitude": 50.47554,
      "longitude": 19.180611,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548698,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.178877,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548701,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.176996,
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
      "heading": 277,
      "squawk": "4154",
      "timestamp": 1676548704,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.175335,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548707,
      "ems": null
    },
    {
      "latitude": 50.476089,
      "longitude": 19.171721,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548713,
      "ems": null
    },
    {
      "latitude": 50.476265,
      "longitude": 19.168322,
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548719,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 19.165131,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676548725,
      "ems": null
    },
    {
      "latitude": 50.476078,
      "longitude": 19.163126,
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
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676548728,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.161457,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676548731,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 19.159723,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548734,
      "ems": null
    },
    {
      "latitude": 50.4758,
      "longitude": 19.15637,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548740,
      "ems": null
    },
    {
      "latitude": 50.475754,
      "longitude": 19.154812,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548743,
      "ems": null
    },
    {
      "latitude": 50.475613,
      "longitude": 19.1511,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548749,
      "ems": null
    },
    {
      "latitude": 50.475632,
      "longitude": 19.149387,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548753,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.147724,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548756,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.146063,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548758,
      "ems": null
    },
    {
      "latitude": 50.475708,
      "longitude": 19.14427,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548761,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.14064,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548768,
      "ems": null
    },
    {
      "latitude": 50.475567,
      "longitude": 19.136995,
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548774,
      "ems": null
    },
    {
      "latitude": 50.475586,
      "longitude": 19.133703,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548780,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.131895,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 276,
      "squawk": "4154",
      "timestamp": 1676548783,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.130522,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548785,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.128353,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548789,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 19.127048,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 279,
      "squawk": "4154",
      "timestamp": 1676548791,
      "ems": null
    },
    {
      "latitude": 50.476311,
      "longitude": 19.125118,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 276,
      "squawk": "4154",
      "timestamp": 1676548795,
      "ems": null
    },
    {
      "latitude": 50.476273,
      "longitude": 19.121559,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676548801,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 19.118141,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548807,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.116285,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548810,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.11462,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548813,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.113031,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548816,
      "ems": null
    },
    {
      "latitude": 50.475861,
      "longitude": 19.111296,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 262,
      "squawk": "4154",
      "timestamp": 1676548819,
      "ems": null
    },
    {
      "latitude": 50.475769,
      "longitude": 19.109705,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548822,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.106562,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548828,
      "ems": null
    },
    {
      "latitude": 50.475941,
      "longitude": 19.105076,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548831,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.103634,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548834,
      "ems": null
    },
    {
      "latitude": 50.476032,
      "longitude": 19.102255,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548837,
      "ems": null
    },
    {
      "latitude": 50.476089,
      "longitude": 19.100672,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548840,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 19.099285,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548843,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 19.097635,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548846,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.094671,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676548853,
      "ems": null
    },
    {
      "latitude": 50.475906,
      "longitude": 19.093298,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "4154",
      "timestamp": 1676548856,
      "ems": null
    },
    {
      "latitude": 50.475815,
      "longitude": 19.09207,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676548859,
      "ems": null
    },
    {
      "latitude": 50.4758,
      "longitude": 19.090527,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548861,
      "ems": null
    },
    {
      "latitude": 50.475708,
      "longitude": 19.088745,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548865,
      "ems": null
    },
    {
      "latitude": 50.475662,
      "longitude": 19.087112,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "squawk": "4154",
      "timestamp": 1676548868,
      "ems": null
    },
    {
      "latitude": 50.475677,
      "longitude": 19.083685,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548874,
      "ems": null
    },
    {
      "latitude": 50.475895,
      "longitude": 19.079987,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548880,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.077759,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 275,
      "squawk": "4154",
      "timestamp": 1676548883,
      "ems": null
    },
    {
      "latitude": 50.476135,
      "longitude": 19.075953,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548886,
      "ems": null
    },
    {
      "latitude": 50.476227,
      "longitude": 19.073784,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548889,
      "ems": null
    },
    {
      "latitude": 50.476364,
      "longitude": 19.071976,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548892,
      "ems": null
    },
    {
      "latitude": 50.47641,
      "longitude": 19.069809,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 273,
      "squawk": "4154",
      "timestamp": 1676548895,
      "ems": null
    },
    {
      "latitude": 50.476456,
      "longitude": 19.067856,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676548898,
      "ems": null
    },
    {
      "latitude": 50.47673,
      "longitude": 19.063953,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676548904,
      "ems": null
    },
    {
      "latitude": 50.476917,
      "longitude": 19.062096,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 280,
      "squawk": "4154",
      "timestamp": 1676548907,
      "ems": null
    },
    {
      "latitude": 50.47715,
      "longitude": 19.06024,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 281,
      "squawk": "4154",
      "timestamp": 1676548910,
      "ems": null
    },
    {
      "latitude": 50.477428,
      "longitude": 19.058014,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 280,
      "squawk": "4154",
      "timestamp": 1676548913,
      "ems": null
    },
    {
      "latitude": 50.477707,
      "longitude": 19.054228,
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676548919,
      "ems": null
    },
    {
      "latitude": 50.477829,
      "longitude": 19.04986,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548925,
      "ems": null
    },
    {
      "latitude": 50.477783,
      "longitude": 19.045668,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548931,
      "ems": null
    },
    {
      "latitude": 50.477757,
      "longitude": 19.043537,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548934,
      "ems": null
    },
    {
      "latitude": 50.477646,
      "longitude": 19.04133,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548937,
      "ems": null
    },
    {
      "latitude": 50.47757,
      "longitude": 19.039158,
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548940,
      "ems": null
    },
    {
      "latitude": 50.477474,
      "longitude": 19.036932,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548943,
      "ems": null
    },
    {
      "latitude": 50.477417,
      "longitude": 19.034464,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676548947,
      "ems": null
    },
    {
      "latitude": 50.477325,
      "longitude": 19.032295,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 266,
      "squawk": "4154",
      "timestamp": 1676548949,
      "ems": null
    },
    {
      "latitude": 50.477196,
      "longitude": 19.026539,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548957,
      "ems": null
    },
    {
      "latitude": 50.47715,
      "longitude": 19.020748,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548964,
      "ems": null
    },
    {
      "latitude": 50.477234,
      "longitude": 19.015816,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548971,
      "ems": null
    },
    {
      "latitude": 50.477234,
      "longitude": 19.013575,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 271,
      "squawk": "4154",
      "timestamp": 1676548974,
      "ems": null
    },
    {
      "latitude": 50.477291,
      "longitude": 19.008575,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548980,
      "ems": null
    },
    {
      "latitude": 50.47728,
      "longitude": 19.003962,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676548986,
      "ems": null
    },
    {
      "latitude": 50.477234,
      "longitude": 18.999191,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548992,
      "ems": null
    },
    {
      "latitude": 50.477196,
      "longitude": 18.993952,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676548998,
      "ems": null
    },
    {
      "latitude": 50.47715,
      "longitude": 18.987938,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676549006,
      "ems": null
    },
    {
      "latitude": 50.477371,
      "longitude": 18.984665,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 276,
      "squawk": "4154",
      "timestamp": 1676549010,
      "ems": null
    },
    {
      "latitude": 50.477615,
      "longitude": 18.983038,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 278,
      "squawk": "4154",
      "timestamp": 1676549012,
      "ems": null
    },
    {
      "latitude": 50.478149,
      "longitude": 18.980545,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 286,
      "squawk": "4154",
      "timestamp": 1676549015,
      "ems": null
    },
    {
      "latitude": 50.478825,
      "longitude": 18.97851,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 294,
      "squawk": "4154",
      "timestamp": 1676549018,
      "ems": null
    },
    {
      "latitude": 50.479385,
      "longitude": 18.977219,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 302,
      "squawk": "4154",
      "timestamp": 1676549020,
      "ems": null
    },
    {
      "latitude": 50.48085,
      "longitude": 18.974689,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 315,
      "squawk": "4154",
      "timestamp": 1676549024,
      "ems": null
    },
    {
      "latitude": 50.481621,
      "longitude": 18.973686,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 318,
      "squawk": "4154",
      "timestamp": 1676549026,
      "ems": null
    },
    {
      "latitude": 50.4832,
      "longitude": 18.972126,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 330,
      "squawk": "4154",
      "timestamp": 1676549030,
      "ems": null
    },
    {
      "latitude": 50.484467,
      "longitude": 18.97122,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 338,
      "squawk": "4154",
      "timestamp": 1676549032,
      "ems": null
    },
    {
      "latitude": 50.486275,
      "longitude": 18.970345,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676549036,
      "ems": null
    },
    {
      "latitude": 50.488174,
      "longitude": 18.969919,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676549039,
      "ems": null
    },
    {
      "latitude": 50.489319,
      "longitude": 18.969774,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 357,
      "squawk": "4154",
      "timestamp": 1676549041,
      "ems": null
    },
    {
      "latitude": 50.49115,
      "longitude": 18.969992,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 2,
      "squawk": "4154",
      "timestamp": 1676549044,
      "ems": null
    },
    {
      "latitude": 50.493301,
      "longitude": 18.970715,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 14,
      "squawk": "4154",
      "timestamp": 1676549048,
      "ems": null
    },
    {
      "latitude": 50.495316,
      "longitude": 18.971943,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 23,
      "squawk": "4154",
      "timestamp": 1676549052,
      "ems": null
    },
    {
      "latitude": 50.496655,
      "longitude": 18.973017,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "4154",
      "timestamp": 1676549055,
      "ems": null
    },
    {
      "latitude": 50.498199,
      "longitude": 18.974762,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676549057,
      "ems": null
    },
    {
      "latitude": 50.499729,
      "longitude": 18.976952,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 42,
      "squawk": "4154",
      "timestamp": 1676549061,
      "ems": null
    },
    {
      "latitude": 50.500992,
      "longitude": 18.979387,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 52,
      "squawk": "4154",
      "timestamp": 1676549064,
      "ems": null
    },
    {
      "latitude": 50.501869,
      "longitude": 18.98148,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549066,
      "ems": null
    },
    {
      "latitude": 50.50296,
      "longitude": 18.984375,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 60,
      "squawk": "4154",
      "timestamp": 1676549070,
      "ems": null
    },
    {
      "latitude": 50.503872,
      "longitude": 18.986898,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 61,
      "squawk": "4154",
      "timestamp": 1676549072,
      "ems": null
    },
    {
      "latitude": 50.504791,
      "longitude": 18.989651,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 61,
      "squawk": "4154",
      "timestamp": 1676549076,
      "ems": null
    },
    {
      "latitude": 50.505753,
      "longitude": 18.992542,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 61,
      "squawk": "4154",
      "timestamp": 1676549079,
      "ems": null
    },
    {
      "latitude": 50.506668,
      "longitude": 18.995001,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 61,
      "squawk": "4154",
      "timestamp": 1676549082,
      "ems": null
    },
    {
      "latitude": 50.507675,
      "longitude": 18.99789,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "4154",
      "timestamp": 1676549085,
      "ems": null
    },
    {
      "latitude": 50.508545,
      "longitude": 19.000204,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 59,
      "squawk": "4154",
      "timestamp": 1676549087,
      "ems": null
    },
    {
      "latitude": 50.509552,
      "longitude": 19.002806,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 59,
      "squawk": "4154",
      "timestamp": 1676549090,
      "ems": null
    },
    {
      "latitude": 50.510574,
      "longitude": 19.005531,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 58,
      "squawk": "4154",
      "timestamp": 1676549093,
      "ems": null
    },
    {
      "latitude": 50.512577,
      "longitude": 19.010578,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549100,
      "ems": null
    },
    {
      "latitude": 50.514671,
      "longitude": 19.015776,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549105,
      "ems": null
    },
    {
      "latitude": 50.516861,
      "longitude": 19.02112,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549112,
      "ems": null
    },
    {
      "latitude": 50.518627,
      "longitude": 19.025425,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549117,
      "ems": null
    },
    {
      "latitude": 50.520908,
      "longitude": 19.030993,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549124,
      "ems": null
    },
    {
      "latitude": 50.522919,
      "longitude": 19.035982,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549130,
      "ems": null
    },
    {
      "latitude": 50.524773,
      "longitude": 19.040421,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549135,
      "ems": null
    },
    {
      "latitude": 50.526947,
      "longitude": 19.045378,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549142,
      "ems": null
    },
    {
      "latitude": 50.529011,
      "longitude": 19.050219,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549148,
      "ems": null
    },
    {
      "latitude": 50.530964,
      "longitude": 19.054821,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549154,
      "ems": null
    },
    {
      "latitude": 50.532593,
      "longitude": 19.058607,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549160,
      "ems": null
    },
    {
      "latitude": 50.534828,
      "longitude": 19.063951,
      "altitude": {
        "feet": 4125,
        "meters": 1257
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549166,
      "ems": null
    },
    {
      "latitude": 50.53669,
      "longitude": 19.068405,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549172,
      "ems": null
    },
    {
      "latitude": 50.538574,
      "longitude": 19.072989,
      "altitude": {
        "feet": 4275,
        "meters": 1303
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549178,
      "ems": null
    },
    {
      "latitude": 50.540321,
      "longitude": 19.077017,
      "altitude": {
        "feet": 4350,
        "meters": 1326
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549184,
      "ems": null
    },
    {
      "latitude": 50.542236,
      "longitude": 19.081518,
      "altitude": {
        "feet": 4425,
        "meters": 1349
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 55,
      "squawk": "4154",
      "timestamp": 1676549190,
      "ems": null
    },
    {
      "latitude": 50.544022,
      "longitude": 19.085638,
      "altitude": {
        "feet": 4500,
        "meters": 1372
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549196,
      "ems": null
    },
    {
      "latitude": 50.545807,
      "longitude": 19.089758,
      "altitude": {
        "feet": 4575,
        "meters": 1394
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549202,
      "ems": null
    },
    {
      "latitude": 50.547256,
      "longitude": 19.093273,
      "altitude": {
        "feet": 4650,
        "meters": 1417
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549207,
      "ems": null
    },
    {
      "latitude": 50.54924,
      "longitude": 19.097925,
      "altitude": {
        "feet": 4725,
        "meters": 1440
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549214,
      "ems": null
    },
    {
      "latitude": 50.550934,
      "longitude": 19.101885,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549220,
      "ems": null
    },
    {
      "latitude": 50.552658,
      "longitude": 19.106041,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549226,
      "ems": null
    },
    {
      "latitude": 50.554333,
      "longitude": 19.109976,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 55,
      "squawk": "4154",
      "timestamp": 1676549232,
      "ems": null
    },
    {
      "latitude": 50.557022,
      "longitude": 19.116283,
      "altitude": {
        "feet": 5075,
        "meters": 1547
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549242,
      "ems": null
    },
    {
      "latitude": 50.560291,
      "longitude": 19.123932,
      "altitude": {
        "feet": 5225,
        "meters": 1593
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549254,
      "ems": null
    },
    {
      "latitude": 50.563568,
      "longitude": 19.131895,
      "altitude": {
        "feet": 5375,
        "meters": 1638
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549266,
      "ems": null
    },
    {
      "latitude": 50.566765,
      "longitude": 19.139446,
      "altitude": {
        "feet": 5500,
        "meters": 1676
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549278,
      "ems": null
    },
    {
      "latitude": 50.569927,
      "longitude": 19.147017,
      "altitude": {
        "feet": 5650,
        "meters": 1722
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549290,
      "ems": null
    },
    {
      "latitude": 50.573048,
      "longitude": 19.154366,
      "altitude": {
        "feet": 5800,
        "meters": 1768
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549302,
      "ems": null
    },
    {
      "latitude": 50.576168,
      "longitude": 19.161938,
      "altitude": {
        "feet": 5925,
        "meters": 1806
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549314,
      "ems": null
    },
    {
      "latitude": 50.579315,
      "longitude": 19.169264,
      "altitude": {
        "feet": 6075,
        "meters": 1852
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549326,
      "ems": null
    },
    {
      "latitude": 50.582405,
      "longitude": 19.176413,
      "altitude": {
        "feet": 6200,
        "meters": 1890
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
      "heading": 55,
      "squawk": "4154",
      "timestamp": 1676549338,
      "ems": null
    },
    {
      "latitude": 50.585339,
      "longitude": 19.183317,
      "altitude": {
        "feet": 6325,
        "meters": 1928
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 55,
      "squawk": "4154",
      "timestamp": 1676549350,
      "ems": null
    },
    {
      "latitude": 50.588196,
      "longitude": 19.190008,
      "altitude": {
        "feet": 6475,
        "meters": 1974
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549362,
      "ems": null
    },
    {
      "latitude": 50.591343,
      "longitude": 19.19742,
      "altitude": {
        "feet": 6625,
        "meters": 2019
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549374,
      "ems": null
    },
    {
      "latitude": 50.594322,
      "longitude": 19.204548,
      "altitude": {
        "feet": 6750,
        "meters": 2057
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549387,
      "ems": null
    },
    {
      "latitude": 50.597214,
      "longitude": 19.211546,
      "altitude": {
        "feet": 6900,
        "meters": 2103
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549399,
      "ems": null
    },
    {
      "latitude": 50.600189,
      "longitude": 19.218847,
      "altitude": {
        "feet": 7000,
        "meters": 2134
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
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549411,
      "ems": null
    },
    {
      "latitude": 50.603306,
      "longitude": 19.226446,
      "altitude": {
        "feet": 7100,
        "meters": 2164
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
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549423,
      "ems": null
    },
    {
      "latitude": 50.606369,
      "longitude": 19.233953,
      "altitude": {
        "feet": 7175,
        "meters": 2187
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
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549434,
      "ems": null
    },
    {
      "latitude": 50.609825,
      "longitude": 19.242331,
      "altitude": {
        "feet": 7275,
        "meters": 2217
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549447,
      "ems": null
    },
    {
      "latitude": 50.613361,
      "longitude": 19.250645,
      "altitude": {
        "feet": 7350,
        "meters": 2240
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
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549459,
      "ems": null
    },
    {
      "latitude": 50.61676,
      "longitude": 19.2586,
      "altitude": {
        "feet": 7425,
        "meters": 2263
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549470,
      "ems": null
    },
    {
      "latitude": 50.62056,
      "longitude": 19.267633,
      "altitude": {
        "feet": 7500,
        "meters": 2286
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549483,
      "ems": null
    },
    {
      "latitude": 50.624359,
      "longitude": 19.276741,
      "altitude": {
        "feet": 7575,
        "meters": 2309
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549495,
      "ems": null
    },
    {
      "latitude": 50.628025,
      "longitude": 19.285534,
      "altitude": {
        "feet": 7650,
        "meters": 2332
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549507,
      "ems": null
    },
    {
      "latitude": 50.631798,
      "longitude": 19.294664,
      "altitude": {
        "feet": 7725,
        "meters": 2355
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549519,
      "ems": null
    },
    {
      "latitude": 50.635254,
      "longitude": 19.303411,
      "altitude": {
        "feet": 7800,
        "meters": 2377
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549531,
      "ems": null
    },
    {
      "latitude": 50.639099,
      "longitude": 19.312881,
      "altitude": {
        "feet": 7875,
        "meters": 2400
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549543,
      "ems": null
    },
    {
      "latitude": 50.64267,
      "longitude": 19.321554,
      "altitude": {
        "feet": 7975,
        "meters": 2431
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549555,
      "ems": null
    },
    {
      "latitude": 50.646507,
      "longitude": 19.330963,
      "altitude": {
        "feet": 8050,
        "meters": 2454
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549567,
      "ems": null
    },
    {
      "latitude": 50.65023,
      "longitude": 19.339947,
      "altitude": {
        "feet": 8125,
        "meters": 2477
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549579,
      "ems": null
    },
    {
      "latitude": 50.653885,
      "longitude": 19.348875,
      "altitude": {
        "feet": 8175,
        "meters": 2492
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549591,
      "ems": null
    },
    {
      "latitude": 50.657547,
      "longitude": 19.357693,
      "altitude": {
        "feet": 8250,
        "meters": 2515
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549603,
      "ems": null
    },
    {
      "latitude": 50.661358,
      "longitude": 19.366892,
      "altitude": {
        "feet": 8325,
        "meters": 2537
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549615,
      "ems": null
    },
    {
      "latitude": 50.665009,
      "longitude": 19.37569,
      "altitude": {
        "feet": 8400,
        "meters": 2560
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549627,
      "ems": null
    },
    {
      "latitude": 50.668804,
      "longitude": 19.384708,
      "altitude": {
        "feet": 8475,
        "meters": 2583
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549639,
      "ems": null
    },
    {
      "latitude": 50.672195,
      "longitude": 19.392948,
      "altitude": {
        "feet": 8550,
        "meters": 2606
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549651,
      "ems": null
    },
    {
      "latitude": 50.676315,
      "longitude": 19.402895,
      "altitude": {
        "feet": 8625,
        "meters": 2629
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549663,
      "ems": null
    },
    {
      "latitude": 50.679977,
      "longitude": 19.411774,
      "altitude": {
        "feet": 8700,
        "meters": 2652
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549675,
      "ems": null
    },
    {
      "latitude": 50.683502,
      "longitude": 19.420265,
      "altitude": {
        "feet": 8775,
        "meters": 2675
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549687,
      "ems": null
    },
    {
      "latitude": 50.687302,
      "longitude": 19.42947,
      "altitude": {
        "feet": 8825,
        "meters": 2690
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549700,
      "ems": null
    },
    {
      "latitude": 50.691055,
      "longitude": 19.438452,
      "altitude": {
        "feet": 8900,
        "meters": 2713
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549711,
      "ems": null
    },
    {
      "latitude": 50.694672,
      "longitude": 19.447285,
      "altitude": {
        "feet": 9000,
        "meters": 2743
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549723,
      "ems": null
    },
    {
      "latitude": 50.698471,
      "longitude": 19.45649,
      "altitude": {
        "feet": 9075,
        "meters": 2766
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549736,
      "ems": null
    },
    {
      "latitude": 50.702316,
      "longitude": 19.465694,
      "altitude": {
        "feet": 9150,
        "meters": 2789
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549748,
      "ems": null
    },
    {
      "latitude": 50.706047,
      "longitude": 19.474564,
      "altitude": {
        "feet": 9225,
        "meters": 2812
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549760,
      "ems": null
    },
    {
      "latitude": 50.709072,
      "longitude": 19.481964,
      "altitude": {
        "feet": 9275,
        "meters": 2827
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549770,
      "ems": null
    },
    {
      "latitude": 50.713169,
      "longitude": 19.491882,
      "altitude": {
        "feet": 9350,
        "meters": 2850
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549783,
      "ems": null
    },
    {
      "latitude": 50.71669,
      "longitude": 19.500509,
      "altitude": {
        "feet": 9425,
        "meters": 2873
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549794,
      "ems": null
    },
    {
      "latitude": 50.720665,
      "longitude": 19.510193,
      "altitude": {
        "feet": 9500,
        "meters": 2896
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549807,
      "ems": null
    },
    {
      "latitude": 50.724472,
      "longitude": 19.519365,
      "altitude": {
        "feet": 9575,
        "meters": 2918
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549819,
      "ems": null
    },
    {
      "latitude": 50.727787,
      "longitude": 19.527359,
      "altitude": {
        "feet": 9650,
        "meters": 2941
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549829,
      "ems": null
    },
    {
      "latitude": 50.731659,
      "longitude": 19.53681,
      "altitude": {
        "feet": 9725,
        "meters": 2964
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549842,
      "ems": null
    },
    {
      "latitude": 50.735283,
      "longitude": 19.545517,
      "altitude": {
        "feet": 9800,
        "meters": 2987
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549853,
      "ems": null
    },
    {
      "latitude": 50.738354,
      "longitude": 19.552841,
      "altitude": {
        "feet": 9850,
        "meters": 3002
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549863,
      "ems": null
    },
    {
      "latitude": 50.742416,
      "longitude": 19.562641,
      "altitude": {
        "feet": 9925,
        "meters": 3025
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 56,
      "squawk": "4154",
      "timestamp": 1676549876,
      "ems": null
    },
    {
      "latitude": 50.746078,
      "longitude": 19.571476,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549888,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 19.581528,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549901,
      "ems": null
    },
    {
      "latitude": 50.754318,
      "longitude": 19.591518,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549913,
      "ems": null
    },
    {
      "latitude": 50.757999,
      "longitude": 19.600677,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549925,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 19.610519,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549937,
      "ems": null
    },
    {
      "latitude": 50.766861,
      "longitude": 19.622398,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676549949,
      "ems": null
    },
    {
      "latitude": 50.771667,
      "longitude": 19.632792,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "4154",
      "timestamp": 1676549961,
      "ems": null
    },
    {
      "latitude": 50.772949,
      "longitude": 19.634647,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "4154",
      "timestamp": 1676549964,
      "ems": null
    },
    {
      "latitude": 50.774292,
      "longitude": 19.636383,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4154",
      "timestamp": 1676549967,
      "ems": null
    },
    {
      "latitude": 50.776108,
      "longitude": 19.638443,
      "altitude": {
        "feet": 10025,
        "meters": 3056
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "4154",
      "timestamp": 1676549970,
      "ems": null
    },
    {
      "latitude": 50.77771,
      "longitude": 19.640215,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "4154",
      "timestamp": 1676549973,
      "ems": null
    },
    {
      "latitude": 50.779037,
      "longitude": 19.641624,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676549976,
      "ems": null
    },
    {
      "latitude": 50.780392,
      "longitude": 19.643021,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676549979,
      "ems": null
    },
    {
      "latitude": 50.781975,
      "longitude": 19.644699,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676549981,
      "ems": null
    },
    {
      "latitude": 50.783558,
      "longitude": 19.646301,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676549985,
      "ems": null
    },
    {
      "latitude": 50.785126,
      "longitude": 19.647934,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "4154",
      "timestamp": 1676549987,
      "ems": null
    },
    {
      "latitude": 50.791004,
      "longitude": 19.654312,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "4154",
      "timestamp": 1676549999,
      "ems": null
    },
    {
      "latitude": 50.797577,
      "longitude": 19.661667,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550011,
      "ems": null
    },
    {
      "latitude": 50.803528,
      "longitude": 19.668579,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550024,
      "ems": null
    },
    {
      "latitude": 50.809719,
      "longitude": 19.675903,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550035,
      "ems": null
    },
    {
      "latitude": 50.815659,
      "longitude": 19.682898,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550047,
      "ems": null
    },
    {
      "latitude": 50.822475,
      "longitude": 19.690857,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550061,
      "ems": null
    },
    {
      "latitude": 50.828526,
      "longitude": 19.6978,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550073,
      "ems": null
    },
    {
      "latitude": 50.834427,
      "longitude": 19.704721,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550085,
      "ems": null
    },
    {
      "latitude": 50.840488,
      "longitude": 19.711838,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550097,
      "ems": null
    },
    {
      "latitude": 50.846558,
      "longitude": 19.718826,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550109,
      "ems": null
    },
    {
      "latitude": 50.852005,
      "longitude": 19.72521,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550120,
      "ems": null
    },
    {
      "latitude": 50.857544,
      "longitude": 19.731743,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550131,
      "ems": null
    },
    {
      "latitude": 50.863724,
      "longitude": 19.738869,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550143,
      "ems": null
    },
    {
      "latitude": 50.86982,
      "longitude": 19.745941,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550155,
      "ems": null
    },
    {
      "latitude": 50.875717,
      "longitude": 19.752899,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550167,
      "ems": null
    },
    {
      "latitude": 50.881851,
      "longitude": 19.760025,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550179,
      "ems": null
    },
    {
      "latitude": 50.888065,
      "longitude": 19.76738,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550191,
      "ems": null
    },
    {
      "latitude": 50.894073,
      "longitude": 19.774399,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550203,
      "ems": null
    },
    {
      "latitude": 50.900299,
      "longitude": 19.781626,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550215,
      "ems": null
    },
    {
      "latitude": 50.906456,
      "longitude": 19.788895,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550227,
      "ems": null
    },
    {
      "latitude": 50.912476,
      "longitude": 19.795879,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550239,
      "ems": null
    },
    {
      "latitude": 50.918518,
      "longitude": 19.803005,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550251,
      "ems": null
    },
    {
      "latitude": 50.924702,
      "longitude": 19.810181,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550263,
      "ems": null
    },
    {
      "latitude": 50.930801,
      "longitude": 19.817276,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550275,
      "ems": null
    },
    {
      "latitude": 50.936806,
      "longitude": 19.824295,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550287,
      "ems": null
    },
    {
      "latitude": 50.942825,
      "longitude": 19.831436,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550299,
      "ems": null
    },
    {
      "latitude": 50.949051,
      "longitude": 19.838636,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550312,
      "ems": null
    },
    {
      "latitude": 50.954868,
      "longitude": 19.845505,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550323,
      "ems": null
    },
    {
      "latitude": 50.961201,
      "longitude": 19.852829,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550336,
      "ems": null
    },
    {
      "latitude": 50.96727,
      "longitude": 19.860016,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550348,
      "ems": null
    },
    {
      "latitude": 50.973267,
      "longitude": 19.866993,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550360,
      "ems": null
    },
    {
      "latitude": 50.978985,
      "longitude": 19.873657,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550372,
      "ems": null
    },
    {
      "latitude": 50.985126,
      "longitude": 19.880905,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550383,
      "ems": null
    },
    {
      "latitude": 50.991165,
      "longitude": 19.888,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550396,
      "ems": null
    },
    {
      "latitude": 50.997025,
      "longitude": 19.894831,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550408,
      "ems": null
    },
    {
      "latitude": 51.003021,
      "longitude": 19.901882,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550420,
      "ems": null
    },
    {
      "latitude": 51.009018,
      "longitude": 19.908934,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550432,
      "ems": null
    },
    {
      "latitude": 51.015656,
      "longitude": 19.916729,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550445,
      "ems": null
    },
    {
      "latitude": 51.021626,
      "longitude": 19.923859,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550457,
      "ems": null
    },
    {
      "latitude": 51.027054,
      "longitude": 19.930462,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550469,
      "ems": null
    },
    {
      "latitude": 51.033401,
      "longitude": 19.938278,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550481,
      "ems": null
    },
    {
      "latitude": 51.03936,
      "longitude": 19.945602,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4154",
      "timestamp": 1676550494,
      "ems": null
    },
    {
      "latitude": 51.045368,
      "longitude": 19.953156,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4154",
      "timestamp": 1676550506,
      "ems": null
    },
    {
      "latitude": 51.051231,
      "longitude": 19.960251,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550517,
      "ems": null
    },
    {
      "latitude": 51.057098,
      "longitude": 19.967346,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550529,
      "ems": null
    },
    {
      "latitude": 51.062729,
      "longitude": 19.974136,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550541,
      "ems": null
    },
    {
      "latitude": 51.068642,
      "longitude": 19.981308,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550553,
      "ems": null
    },
    {
      "latitude": 51.074463,
      "longitude": 19.988251,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4154",
      "timestamp": 1676550564,
      "ems": null
    },
    {
      "latitude": 51.079742,
      "longitude": 19.994524,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550576,
      "ems": null
    },
    {
      "latitude": 51.085739,
      "longitude": 20.001799,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550588,
      "ems": null
    },
    {
      "latitude": 51.092293,
      "longitude": 20.009613,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4154",
      "timestamp": 1676550601,
      "ems": null
    },
    {
      "latitude": 51.098328,
      "longitude": 20.016571,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 32,
      "squawk": "4154",
      "timestamp": 1676550613,
      "ems": null
    },
    {
      "latitude": 51.101532,
      "longitude": 20.019169,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "4154",
      "timestamp": 1676550619,
      "ems": null
    },
    {
      "latitude": 51.102631,
      "longitude": 20.019762,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "4154",
      "timestamp": 1676550621,
      "ems": null
    },
    {
      "latitude": 51.104828,
      "longitude": 20.020504,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "4154",
      "timestamp": 1676550625,
      "ems": null
    },
    {
      "latitude": 51.106304,
      "longitude": 20.020676,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 2,
      "squawk": "4154",
      "timestamp": 1676550628,
      "ems": null
    },
    {
      "latitude": 51.107986,
      "longitude": 20.020578,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "4154",
      "timestamp": 1676550631,
      "ems": null
    },
    {
      "latitude": 51.10968,
      "longitude": 20.020208,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 348,
      "squawk": "4154",
      "timestamp": 1676550634,
      "ems": null
    },
    {
      "latitude": 51.111191,
      "longitude": 20.019539,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 344,
      "squawk": "4154",
      "timestamp": 1676550637,
      "ems": null
    },
    {
      "latitude": 51.112728,
      "longitude": 20.018692,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 338,
      "squawk": "4154",
      "timestamp": 1676550640,
      "ems": null
    },
    {
      "latitude": 51.114212,
      "longitude": 20.017683,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 335,
      "squawk": "4154",
      "timestamp": 1676550643,
      "ems": null
    },
    {
      "latitude": 51.115494,
      "longitude": 20.016644,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676550646,
      "ems": null
    },
    {
      "latitude": 51.116867,
      "longitude": 20.015606,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 334,
      "squawk": "4154",
      "timestamp": 1676550649,
      "ems": null
    },
    {
      "latitude": 51.118362,
      "longitude": 20.014496,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 335,
      "squawk": "4154",
      "timestamp": 1676550652,
      "ems": null
    },
    {
      "latitude": 51.119896,
      "longitude": 20.013428,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676550655,
      "ems": null
    },
    {
      "latitude": 51.121387,
      "longitude": 20.012512,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676550658,
      "ems": null
    },
    {
      "latitude": 51.122643,
      "longitude": 20.011749,
      "altitude": {
        "feet": 9975,
        "meters": 3040
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
      "heading": 340,
      "squawk": "4154",
      "timestamp": 1676550661,
      "ems": null
    },
    {
      "latitude": 51.128929,
      "longitude": 20.008545,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550673,
      "ems": null
    },
    {
      "latitude": 51.130463,
      "longitude": 20.007782,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676550676,
      "ems": null
    },
    {
      "latitude": 51.136505,
      "longitude": 20.004915,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676550688,
      "ems": null
    },
    {
      "latitude": 51.142639,
      "longitude": 20.00202,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550700,
      "ems": null
    },
    {
      "latitude": 51.148682,
      "longitude": 19.999052,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550712,
      "ems": null
    },
    {
      "latitude": 51.154861,
      "longitude": 19.996008,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676550724,
      "ems": null
    },
    {
      "latitude": 51.160816,
      "longitude": 19.992981,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550736,
      "ems": null
    },
    {
      "latitude": 51.166962,
      "longitude": 19.989929,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550748,
      "ems": null
    },
    {
      "latitude": 51.173264,
      "longitude": 19.986803,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550761,
      "ems": null
    },
    {
      "latitude": 51.179214,
      "longitude": 19.983759,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550772,
      "ems": null
    },
    {
      "latitude": 51.185577,
      "longitude": 19.980494,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550785,
      "ems": null
    },
    {
      "latitude": 51.190842,
      "longitude": 19.977821,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550796,
      "ems": null
    },
    {
      "latitude": 51.197617,
      "longitude": 19.974333,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550808,
      "ems": null
    },
    {
      "latitude": 51.203133,
      "longitude": 19.971542,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550819,
      "ems": null
    },
    {
      "latitude": 51.209465,
      "longitude": 19.968262,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676550832,
      "ems": null
    },
    {
      "latitude": 51.214817,
      "longitude": 19.965439,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676550842,
      "ems": null
    },
    {
      "latitude": 51.22073,
      "longitude": 19.962463,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550854,
      "ems": null
    },
    {
      "latitude": 51.227142,
      "longitude": 19.959188,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550867,
      "ems": null
    },
    {
      "latitude": 51.233139,
      "longitude": 19.956072,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550879,
      "ems": null
    },
    {
      "latitude": 51.239258,
      "longitude": 19.952927,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550890,
      "ems": null
    },
    {
      "latitude": 51.246517,
      "longitude": 19.949188,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550904,
      "ems": null
    },
    {
      "latitude": 51.252548,
      "longitude": 19.946051,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676550916,
      "ems": null
    },
    {
      "latitude": 51.25882,
      "longitude": 19.942709,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550929,
      "ems": null
    },
    {
      "latitude": 51.264771,
      "longitude": 19.939667,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676550941,
      "ems": null
    },
    {
      "latitude": 51.270634,
      "longitude": 19.9366,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676550953,
      "ems": null
    },
    {
      "latitude": 51.276672,
      "longitude": 19.93343,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550965,
      "ems": null
    },
    {
      "latitude": 51.282852,
      "longitude": 19.930239,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550977,
      "ems": null
    },
    {
      "latitude": 51.288834,
      "longitude": 19.927216,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676550989,
      "ems": null
    },
    {
      "latitude": 51.294933,
      "longitude": 19.924011,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551001,
      "ems": null
    },
    {
      "latitude": 51.302242,
      "longitude": 19.920273,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551016,
      "ems": null
    },
    {
      "latitude": 51.308155,
      "longitude": 19.917221,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551028,
      "ems": null
    },
    {
      "latitude": 51.313934,
      "longitude": 19.914129,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551040,
      "ems": null
    },
    {
      "latitude": 51.320343,
      "longitude": 19.910789,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551053,
      "ems": null
    },
    {
      "latitude": 51.326157,
      "longitude": 19.90745,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 338,
      "squawk": "4154",
      "timestamp": 1676551065,
      "ems": null
    },
    {
      "latitude": 51.332062,
      "longitude": 19.903812,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676551077,
      "ems": null
    },
    {
      "latitude": 51.337204,
      "longitude": 19.900818,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676551088,
      "ems": null
    },
    {
      "latitude": 51.343185,
      "longitude": 19.897429,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 340,
      "squawk": "4154",
      "timestamp": 1676551099,
      "ems": null
    },
    {
      "latitude": 51.349258,
      "longitude": 19.894104,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551112,
      "ems": null
    },
    {
      "latitude": 51.354939,
      "longitude": 19.891205,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551124,
      "ems": null
    },
    {
      "latitude": 51.361317,
      "longitude": 19.888,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551136,
      "ems": null
    },
    {
      "latitude": 51.367538,
      "longitude": 19.884808,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551148,
      "ems": null
    },
    {
      "latitude": 51.373562,
      "longitude": 19.881668,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551160,
      "ems": null
    },
    {
      "latitude": 51.37989,
      "longitude": 19.878387,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551173,
      "ems": null
    },
    {
      "latitude": 51.385895,
      "longitude": 19.875381,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551184,
      "ems": null
    },
    {
      "latitude": 51.392532,
      "longitude": 19.871893,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551197,
      "ems": null
    },
    {
      "latitude": 51.399212,
      "longitude": 19.868393,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551210,
      "ems": null
    },
    {
      "latitude": 51.405449,
      "longitude": 19.865189,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551222,
      "ems": null
    },
    {
      "latitude": 51.411118,
      "longitude": 19.862242,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551234,
      "ems": null
    },
    {
      "latitude": 51.417366,
      "longitude": 19.858932,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551247,
      "ems": null
    },
    {
      "latitude": 51.422333,
      "longitude": 19.856379,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551256,
      "ems": null
    },
    {
      "latitude": 51.430023,
      "longitude": 19.852369,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551272,
      "ems": null
    },
    {
      "latitude": 51.435661,
      "longitude": 19.849396,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551284,
      "ems": null
    },
    {
      "latitude": 51.442337,
      "longitude": 19.845911,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551296,
      "ems": null
    },
    {
      "latitude": 51.448975,
      "longitude": 19.842422,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551309,
      "ems": null
    },
    {
      "latitude": 51.453873,
      "longitude": 19.839899,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551320,
      "ems": null
    },
    {
      "latitude": 51.460472,
      "longitude": 19.836426,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551333,
      "ems": null
    },
    {
      "latitude": 51.466141,
      "longitude": 19.833441,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551344,
      "ems": null
    },
    {
      "latitude": 51.471737,
      "longitude": 19.830551,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551356,
      "ems": null
    },
    {
      "latitude": 51.477745,
      "longitude": 19.827423,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551368,
      "ems": null
    },
    {
      "latitude": 51.483936,
      "longitude": 19.824142,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551380,
      "ems": null
    },
    {
      "latitude": 51.489807,
      "longitude": 19.821117,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551392,
      "ems": null
    },
    {
      "latitude": 51.495758,
      "longitude": 19.817886,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551404,
      "ems": null
    },
    {
      "latitude": 51.501717,
      "longitude": 19.814835,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551416,
      "ems": null
    },
    {
      "latitude": 51.507675,
      "longitude": 19.811707,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551428,
      "ems": null
    },
    {
      "latitude": 51.513702,
      "longitude": 19.808573,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551440,
      "ems": null
    },
    {
      "latitude": 51.519562,
      "longitude": 19.805529,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551452,
      "ems": null
    },
    {
      "latitude": 51.525925,
      "longitude": 19.803085,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 352,
      "squawk": "4154",
      "timestamp": 1676551464,
      "ems": null
    },
    {
      "latitude": 51.527508,
      "longitude": 19.802856,
      "altitude": {
        "feet": 10000,
        "meters": 3048
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551467,
      "ems": null
    },
    {
      "latitude": 51.529221,
      "longitude": 19.802633,
      "altitude": {
        "feet": 10000,
        "meters": 3048
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
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551470,
      "ems": null
    },
    {
      "latitude": 51.530869,
      "longitude": 19.80241,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551473,
      "ems": null
    },
    {
      "latitude": 51.532654,
      "longitude": 19.802189,
      "altitude": {
        "feet": 9975,
        "meters": 3040
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551477,
      "ems": null
    },
    {
      "latitude": 51.534256,
      "longitude": 19.801966,
      "altitude": {
        "feet": 9950,
        "meters": 3033
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551480,
      "ems": null
    },
    {
      "latitude": 51.535995,
      "longitude": 19.801743,
      "altitude": {
        "feet": 9900,
        "meters": 3018
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551482,
      "ems": null
    },
    {
      "latitude": 51.53775,
      "longitude": 19.801483,
      "altitude": {
        "feet": 9850,
        "meters": 3002
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551485,
      "ems": null
    },
    {
      "latitude": 51.545151,
      "longitude": 19.800184,
      "altitude": {
        "feet": 9700,
        "meters": 2957
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551498,
      "ems": null
    },
    {
      "latitude": 51.552647,
      "longitude": 19.798813,
      "altitude": {
        "feet": 9575,
        "meters": 2918
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551509,
      "ems": null
    },
    {
      "latitude": 51.56044,
      "longitude": 19.797512,
      "altitude": {
        "feet": 9425,
        "meters": 2873
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551522,
      "ems": null
    },
    {
      "latitude": 51.568314,
      "longitude": 19.796249,
      "altitude": {
        "feet": 9325,
        "meters": 2842
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551534,
      "ems": null
    },
    {
      "latitude": 51.575455,
      "longitude": 19.794617,
      "altitude": {
        "feet": 9300,
        "meters": 2835
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676551546,
      "ems": null
    },
    {
      "latitude": 51.582825,
      "longitude": 19.792686,
      "altitude": {
        "feet": 9150,
        "meters": 2789
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 349,
      "squawk": "4154",
      "timestamp": 1676551558,
      "ems": null
    },
    {
      "latitude": 51.590103,
      "longitude": 19.790682,
      "altitude": {
        "feet": 9050,
        "meters": 2758
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676551570,
      "ems": null
    },
    {
      "latitude": 51.597473,
      "longitude": 19.788975,
      "altitude": {
        "feet": 8950,
        "meters": 2728
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 352,
      "squawk": "4154",
      "timestamp": 1676551582,
      "ems": null
    },
    {
      "latitude": 51.604973,
      "longitude": 19.787216,
      "altitude": {
        "feet": 8825,
        "meters": 2690
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676551594,
      "ems": null
    },
    {
      "latitude": 51.61171,
      "longitude": 19.785784,
      "altitude": {
        "feet": 8775,
        "meters": 2675
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
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551607,
      "ems": null
    },
    {
      "latitude": 51.617249,
      "longitude": 19.785114,
      "altitude": {
        "feet": 8750,
        "meters": 2667
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
      "heading": 358,
      "squawk": "4154",
      "timestamp": 1676551619,
      "ems": null
    },
    {
      "latitude": 51.62027,
      "longitude": 19.785189,
      "altitude": {
        "feet": 8750,
        "meters": 2667
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
      "heading": 2,
      "squawk": "4154",
      "timestamp": 1676551627,
      "ems": null
    },
    {
      "latitude": 51.62114,
      "longitude": 19.785263,
      "altitude": {
        "feet": 8750,
        "meters": 2667
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
      "heading": 1,
      "squawk": "4154",
      "timestamp": 1676551630,
      "ems": null
    },
    {
      "latitude": 51.622009,
      "longitude": 19.785337,
      "altitude": {
        "feet": 8675,
        "meters": 2644
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 7,
      "squawk": "4154",
      "timestamp": 1676551634,
      "ems": null
    },
    {
      "latitude": 51.622879,
      "longitude": 19.785561,
      "altitude": {
        "feet": 8575,
        "meters": 2614
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -2112,
        "ms": -10.7
      },
      "heading": 7,
      "squawk": "4154",
      "timestamp": 1676551636,
      "ems": null
    },
    {
      "latitude": 51.628433,
      "longitude": 19.785309,
      "altitude": {
        "feet": 8400,
        "meters": 2560
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
      "squawk": "4154",
      "timestamp": 1676551648,
      "ems": null
    },
    {
      "latitude": 51.633911,
      "longitude": 19.784744,
      "altitude": {
        "feet": 8275,
        "meters": 2522
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
      "heading": 358,
      "squawk": "4154",
      "timestamp": 1676551661,
      "ems": null
    },
    {
      "latitude": 51.637985,
      "longitude": 19.784893,
      "altitude": {
        "feet": 8225,
        "meters": 2507
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
      "heading": 8,
      "squawk": "4154",
      "timestamp": 1676551673,
      "ems": null
    },
    {
      "latitude": 51.638809,
      "longitude": 19.785189,
      "altitude": {
        "feet": 8225,
        "meters": 2507
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
      "heading": 13,
      "squawk": "4154",
      "timestamp": 1676551676,
      "ems": null
    },
    {
      "latitude": 51.63942,
      "longitude": 19.785614,
      "altitude": {
        "feet": 8175,
        "meters": 2492
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
      "heading": 24,
      "squawk": "4154",
      "timestamp": 1676551679,
      "ems": null
    },
    {
      "latitude": 51.640137,
      "longitude": 19.786228,
      "altitude": {
        "feet": 8025,
        "meters": 2446
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -2944,
        "ms": -15
      },
      "heading": 31,
      "squawk": "4154",
      "timestamp": 1676551681,
      "ems": null
    },
    {
      "latitude": 51.641514,
      "longitude": 19.787598,
      "altitude": {
        "feet": 7850,
        "meters": 2393
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -2816,
        "ms": -14.3
      },
      "heading": 29,
      "squawk": "4154",
      "timestamp": 1676551685,
      "ems": null
    },
    {
      "latitude": 51.64254,
      "longitude": 19.788437,
      "altitude": {
        "feet": 7875,
        "meters": 2400
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
      "heading": 26,
      "squawk": "4154",
      "timestamp": 1676551687,
      "ems": null
    },
    {
      "latitude": 51.643799,
      "longitude": 19.789421,
      "altitude": {
        "feet": 7875,
        "meters": 2400
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
      "heading": 25,
      "squawk": "4154",
      "timestamp": 1676551690,
      "ems": null
    },
    {
      "latitude": 51.644447,
      "longitude": 19.78981,
      "altitude": {
        "feet": 7875,
        "meters": 2400
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
      "heading": 21,
      "squawk": "4154",
      "timestamp": 1676551692,
      "ems": null
    },
    {
      "latitude": 51.646587,
      "longitude": 19.789734,
      "altitude": {
        "feet": 7925,
        "meters": 2416
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676551699,
      "ems": null
    },
    {
      "latitude": 51.64724,
      "longitude": 19.789124,
      "altitude": {
        "feet": 7925,
        "meters": 2416
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "4154",
      "timestamp": 1676551701,
      "ems": null
    },
    {
      "latitude": 51.647919,
      "longitude": 19.788605,
      "altitude": {
        "feet": 7925,
        "meters": 2416
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
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676551705,
      "ems": null
    },
    {
      "latitude": 51.648499,
      "longitude": 19.788284,
      "altitude": {
        "feet": 7925,
        "meters": 2416
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551707,
      "ems": null
    },
    {
      "latitude": 51.649063,
      "longitude": 19.78801,
      "altitude": {
        "feet": 7925,
        "meters": 2416
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676551711,
      "ems": null
    },
    {
      "latitude": 51.649384,
      "longitude": 19.787861,
      "altitude": {
        "feet": 7875,
        "meters": 2400
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676551714,
      "ems": null
    },
    {
      "latitude": 51.650024,
      "longitude": 19.787491,
      "altitude": {
        "feet": 7675,
        "meters": 2339
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -2816,
        "ms": -14.3
      },
      "heading": 331,
      "squawk": "4154",
      "timestamp": 1676551717,
      "ems": null
    },
    {
      "latitude": 51.65115,
      "longitude": 19.786377,
      "altitude": {
        "feet": 7675,
        "meters": 2339
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 328,
      "squawk": "4154",
      "timestamp": 1676551720,
      "ems": null
    },
    {
      "latitude": 51.651943,
      "longitude": 19.785538,
      "altitude": {
        "feet": 7700,
        "meters": 2347
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
      "heading": 325,
      "squawk": "4154",
      "timestamp": 1676551723,
      "ems": null
    },
    {
      "latitude": 51.652679,
      "longitude": 19.784595,
      "altitude": {
        "feet": 7700,
        "meters": 2347
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
      "heading": 322,
      "squawk": "4154",
      "timestamp": 1676551726,
      "ems": null
    },
    {
      "latitude": 51.653385,
      "longitude": 19.783554,
      "altitude": {
        "feet": 7650,
        "meters": 2332
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
      "heading": 317,
      "squawk": "4154",
      "timestamp": 1676551729,
      "ems": null
    },
    {
      "latitude": 51.654083,
      "longitude": 19.78241,
      "altitude": {
        "feet": 7625,
        "meters": 2324
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
      "heading": 313,
      "squawk": "4154",
      "timestamp": 1676551731,
      "ems": null
    },
    {
      "latitude": 51.654922,
      "longitude": 19.78096,
      "altitude": {
        "feet": 7550,
        "meters": 2301
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 312,
      "squawk": "4154",
      "timestamp": 1676551735,
      "ems": null
    },
    {
      "latitude": 51.655472,
      "longitude": 19.779993,
      "altitude": {
        "feet": 7500,
        "meters": 2286
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 313,
      "squawk": "4154",
      "timestamp": 1676551737,
      "ems": null
    },
    {
      "latitude": 51.656643,
      "longitude": 19.778214,
      "altitude": {
        "feet": 7425,
        "meters": 2263
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 318,
      "squawk": "4154",
      "timestamp": 1676551740,
      "ems": null
    },
    {
      "latitude": 51.658081,
      "longitude": 19.77643,
      "altitude": {
        "feet": 7375,
        "meters": 2248
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
      "heading": 322,
      "squawk": "4154",
      "timestamp": 1676551744,
      "ems": null
    },
    {
      "latitude": 51.662247,
      "longitude": 19.773237,
      "altitude": {
        "feet": 7300,
        "meters": 2225
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
      "squawk": "4154",
      "timestamp": 1676551753,
      "ems": null
    },
    {
      "latitude": 51.663712,
      "longitude": 19.772942,
      "altitude": {
        "feet": 7300,
        "meters": 2225
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
      "squawk": "4154",
      "timestamp": 1676551756,
      "ems": null
    },
    {
      "latitude": 51.665085,
      "longitude": 19.772867,
      "altitude": {
        "feet": 7275,
        "meters": 2217
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
      "heading": 358,
      "squawk": "4154",
      "timestamp": 1676551759,
      "ems": null
    },
    {
      "latitude": 51.666687,
      "longitude": 19.773016,
      "altitude": {
        "feet": 7250,
        "meters": 2210
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
      "heading": 5,
      "squawk": "4154",
      "timestamp": 1676551762,
      "ems": null
    },
    {
      "latitude": 51.66861,
      "longitude": 19.773609,
      "altitude": {
        "feet": 7175,
        "meters": 2187
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 12,
      "squawk": "4154",
      "timestamp": 1676551765,
      "ems": null
    },
    {
      "latitude": 51.670006,
      "longitude": 19.774246,
      "altitude": {
        "feet": 7150,
        "meters": 2179
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 15,
      "squawk": "4154",
      "timestamp": 1676551768,
      "ems": null
    },
    {
      "latitude": 51.671951,
      "longitude": 19.775167,
      "altitude": {
        "feet": 7100,
        "meters": 2164
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 16,
      "squawk": "4154",
      "timestamp": 1676551771,
      "ems": null
    },
    {
      "latitude": 51.67345,
      "longitude": 19.775848,
      "altitude": {
        "feet": 7075,
        "meters": 2156
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 15,
      "squawk": "4154",
      "timestamp": 1676551774,
      "ems": null
    },
    {
      "latitude": 51.675247,
      "longitude": 19.776653,
      "altitude": {
        "feet": 7050,
        "meters": 2149
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 15,
      "squawk": "4154",
      "timestamp": 1676551777,
      "ems": null
    },
    {
      "latitude": 51.676666,
      "longitude": 19.777246,
      "altitude": {
        "feet": 7050,
        "meters": 2149
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 14,
      "squawk": "4154",
      "timestamp": 1676551780,
      "ems": null
    },
    {
      "latitude": 51.678314,
      "longitude": 19.777765,
      "altitude": {
        "feet": 7025,
        "meters": 2141
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
      "heading": 9,
      "squawk": "4154",
      "timestamp": 1676551783,
      "ems": null
    },
    {
      "latitude": 51.679916,
      "longitude": 19.778063,
      "altitude": {
        "feet": 7025,
        "meters": 2141
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
      "heading": 5,
      "squawk": "4154",
      "timestamp": 1676551786,
      "ems": null
    },
    {
      "latitude": 51.683132,
      "longitude": 19.777832,
      "altitude": {
        "feet": 7000,
        "meters": 2134
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
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551792,
      "ems": null
    },
    {
      "latitude": 51.684624,
      "longitude": 19.777451,
      "altitude": {
        "feet": 6975,
        "meters": 2126
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
      "heading": 350,
      "squawk": "4154",
      "timestamp": 1676551795,
      "ems": null
    },
    {
      "latitude": 51.686096,
      "longitude": 19.776949,
      "altitude": {
        "feet": 6950,
        "meters": 2118
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
      "heading": 347,
      "squawk": "4154",
      "timestamp": 1676551798,
      "ems": null
    },
    {
      "latitude": 51.687561,
      "longitude": 19.776356,
      "altitude": {
        "feet": 6925,
        "meters": 2111
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
      "heading": 346,
      "squawk": "4154",
      "timestamp": 1676551801,
      "ems": null
    },
    {
      "latitude": 51.689091,
      "longitude": 19.775696,
      "altitude": {
        "feet": 6875,
        "meters": 2096
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
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676551804,
      "ems": null
    },
    {
      "latitude": 51.690491,
      "longitude": 19.775167,
      "altitude": {
        "feet": 6850,
        "meters": 2088
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
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676551807,
      "ems": null
    },
    {
      "latitude": 51.691956,
      "longitude": 19.7745,
      "altitude": {
        "feet": 6825,
        "meters": 2080
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
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676551810,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.773758,
      "altitude": {
        "feet": 6800,
        "meters": 2073
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551813,
      "ems": null
    },
    {
      "latitude": 51.694912,
      "longitude": 19.772873,
      "altitude": {
        "feet": 6775,
        "meters": 2065
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
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676551816,
      "ems": null
    },
    {
      "latitude": 51.69603,
      "longitude": 19.772125,
      "altitude": {
        "feet": 6750,
        "meters": 2057
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 335,
      "squawk": "4154",
      "timestamp": 1676551819,
      "ems": null
    },
    {
      "latitude": 51.697403,
      "longitude": 19.771011,
      "altitude": {
        "feet": 6700,
        "meters": 2042
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 332,
      "squawk": "4154",
      "timestamp": 1676551822,
      "ems": null
    },
    {
      "latitude": 51.698547,
      "longitude": 19.770121,
      "altitude": {
        "feet": 6650,
        "meters": 2027
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
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676551825,
      "ems": null
    },
    {
      "latitude": 51.703995,
      "longitude": 19.767076,
      "altitude": {
        "feet": 6500,
        "meters": 1981
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 344,
      "squawk": "4154",
      "timestamp": 1676551837,
      "ems": null
    },
    {
      "latitude": 51.708271,
      "longitude": 19.765778,
      "altitude": {
        "feet": 6300,
        "meters": 1920
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 353,
      "squawk": "4154",
      "timestamp": 1676551845,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 19.765549,
      "altitude": {
        "feet": 6275,
        "meters": 1913
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551848,
      "ems": null
    },
    {
      "latitude": 51.710175,
      "longitude": 19.765518,
      "altitude": {
        "feet": 6200,
        "meters": 1890
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551852,
      "ems": null
    },
    {
      "latitude": 51.713516,
      "longitude": 19.765072,
      "altitude": {
        "feet": 6125,
        "meters": 1867
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
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551856,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 19.764862,
      "altitude": {
        "feet": 6075,
        "meters": 1852
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
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551858,
      "ems": null
    },
    {
      "latitude": 51.716557,
      "longitude": 19.764633,
      "altitude": {
        "feet": 6025,
        "meters": 1836
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
      "heading": 354,
      "squawk": "4154",
      "timestamp": 1676551861,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.764479,
      "altitude": {
        "feet": 5975,
        "meters": 1821
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 355,
      "squawk": "4154",
      "timestamp": 1676551865,
      "ems": null
    },
    {
      "latitude": 51.719421,
      "longitude": 19.76433,
      "altitude": {
        "feet": 5950,
        "meters": 1814
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 358,
      "squawk": "4154",
      "timestamp": 1676551867,
      "ems": null
    },
    {
      "latitude": 51.725693,
      "longitude": 19.764702,
      "altitude": {
        "feet": 5775,
        "meters": 1760
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
      "heading": 2,
      "squawk": "4154",
      "timestamp": 1676551880,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.764709,
      "altitude": {
        "feet": 5650,
        "meters": 1722
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
      "heading": 356,
      "squawk": "4154",
      "timestamp": 1676551892,
      "ems": null
    },
    {
      "latitude": 51.736202,
      "longitude": 19.763489,
      "altitude": {
        "feet": 5525,
        "meters": 1684
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676551901,
      "ems": null
    },
    {
      "latitude": 51.737595,
      "longitude": 19.762772,
      "altitude": {
        "feet": 5475,
        "meters": 1669
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 340,
      "squawk": "4154",
      "timestamp": 1676551904,
      "ems": null
    },
    {
      "latitude": 51.738018,
      "longitude": 19.762497,
      "altitude": {
        "feet": 5425,
        "meters": 1654
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676551906,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.76099,
      "altitude": {
        "feet": 5375,
        "meters": 1638
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 335,
      "squawk": "4154",
      "timestamp": 1676551910,
      "ems": null
    },
    {
      "latitude": 51.741417,
      "longitude": 19.760056,
      "altitude": {
        "feet": 5350,
        "meters": 1631
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
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676551913,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 19.758911,
      "altitude": {
        "feet": 5325,
        "meters": 1623
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
      "heading": 332,
      "squawk": "4154",
      "timestamp": 1676551916,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 19.75802,
      "altitude": {
        "feet": 5275,
        "meters": 1608
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
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676551919,
      "ems": null
    },
    {
      "latitude": 51.744816,
      "longitude": 19.757309,
      "altitude": {
        "feet": 5250,
        "meters": 1600
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676551921,
      "ems": null
    },
    {
      "latitude": 51.746246,
      "longitude": 19.756165,
      "altitude": {
        "feet": 5200,
        "meters": 1585
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 332,
      "squawk": "4154",
      "timestamp": 1676551925,
      "ems": null
    },
    {
      "latitude": 51.747528,
      "longitude": 19.755051,
      "altitude": {
        "feet": 5125,
        "meters": 1562
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 332,
      "squawk": "4154",
      "timestamp": 1676551928,
      "ems": null
    },
    {
      "latitude": 51.748169,
      "longitude": 19.754457,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 331,
      "squawk": "4154",
      "timestamp": 1676551931,
      "ems": null
    },
    {
      "latitude": 51.749634,
      "longitude": 19.75312,
      "altitude": {
        "feet": 5050,
        "meters": 1539
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 329,
      "squawk": "4154",
      "timestamp": 1676551934,
      "ems": null
    },
    {
      "latitude": 51.75087,
      "longitude": 19.752008,
      "altitude": {
        "feet": 5000,
        "meters": 1524
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 329,
      "squawk": "4154",
      "timestamp": 1676551936,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 19.750977,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 328,
      "squawk": "4154",
      "timestamp": 1676551939,
      "ems": null
    },
    {
      "latitude": 51.752728,
      "longitude": 19.750137,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 328,
      "squawk": "4154",
      "timestamp": 1676551941,
      "ems": null
    },
    {
      "latitude": 51.756912,
      "longitude": 19.746588,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 335,
      "squawk": "4154",
      "timestamp": 1676551951,
      "ems": null
    },
    {
      "latitude": 51.759338,
      "longitude": 19.744949,
      "altitude": {
        "feet": 4725,
        "meters": 1440
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
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676551957,
      "ems": null
    },
    {
      "latitude": 51.760593,
      "longitude": 19.74411,
      "altitude": {
        "feet": 4675,
        "meters": 1425
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676551960,
      "ems": null
    },
    {
      "latitude": 51.762131,
      "longitude": 19.743099,
      "altitude": {
        "feet": 4625,
        "meters": 1410
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 337,
      "squawk": "4154",
      "timestamp": 1676551963,
      "ems": null
    },
    {
      "latitude": 51.763275,
      "longitude": 19.742432,
      "altitude": {
        "feet": 4575,
        "meters": 1394
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 339,
      "squawk": "4154",
      "timestamp": 1676551966,
      "ems": null
    },
    {
      "latitude": 51.764786,
      "longitude": 19.741541,
      "altitude": {
        "feet": 4525,
        "meters": 1379
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551969,
      "ems": null
    },
    {
      "latitude": 51.765995,
      "longitude": 19.740906,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676551972,
      "ems": null
    },
    {
      "latitude": 51.767532,
      "longitude": 19.740143,
      "altitude": {
        "feet": 4475,
        "meters": 1364
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
      "heading": 342,
      "squawk": "4154",
      "timestamp": 1676551975,
      "ems": null
    },
    {
      "latitude": 51.768906,
      "longitude": 19.739462,
      "altitude": {
        "feet": 4425,
        "meters": 1349
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
      "heading": 343,
      "squawk": "4154",
      "timestamp": 1676551978,
      "ems": null
    },
    {
      "latitude": 51.770046,
      "longitude": 19.738922,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676551981,
      "ems": null
    },
    {
      "latitude": 51.77158,
      "longitude": 19.738312,
      "altitude": {
        "feet": 4375,
        "meters": 1334
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
      "heading": 347,
      "squawk": "4154",
      "timestamp": 1676551984,
      "ems": null
    },
    {
      "latitude": 51.772934,
      "longitude": 19.737829,
      "altitude": {
        "feet": 4325,
        "meters": 1318
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
      "heading": 348,
      "squawk": "4154",
      "timestamp": 1676551987,
      "ems": null
    },
    {
      "latitude": 51.774353,
      "longitude": 19.737385,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 348,
      "squawk": "4154",
      "timestamp": 1676551990,
      "ems": null
    },
    {
      "latitude": 51.775074,
      "longitude": 19.737244,
      "altitude": {
        "feet": 4275,
        "meters": 1303
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 349,
      "squawk": "4154",
      "timestamp": 1676551992,
      "ems": null
    },
    {
      "latitude": 51.777214,
      "longitude": 19.73671,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676551996,
      "ems": null
    },
    {
      "latitude": 51.778427,
      "longitude": 19.73642,
      "altitude": {
        "feet": 4150,
        "meters": 1265
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676551999,
      "ems": null
    },
    {
      "latitude": 51.780167,
      "longitude": 19.735973,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 351,
      "squawk": "4154",
      "timestamp": 1676552002,
      "ems": null
    },
    {
      "latitude": 51.781128,
      "longitude": 19.735676,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 349,
      "squawk": "4154",
      "timestamp": 1676552005,
      "ems": null
    },
    {
      "latitude": 51.783779,
      "longitude": 19.734726,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676552010,
      "ems": null
    },
    {
      "latitude": 51.78566,
      "longitude": 19.73382,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 341,
      "squawk": "4154",
      "timestamp": 1676552014,
      "ems": null
    },
    {
      "latitude": 51.786991,
      "longitude": 19.732819,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 327,
      "squawk": "4154",
      "timestamp": 1676552020,
      "ems": null
    },
    {
      "latitude": 51.789734,
      "longitude": 19.729292,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 314,
      "squawk": "4154",
      "timestamp": 1676552025,
      "ems": null
    },
    {
      "latitude": 51.790947,
      "longitude": 19.726562,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 299,
      "squawk": "4154",
      "timestamp": 1676552030,
      "ems": null
    },
    {
      "latitude": 51.791245,
      "longitude": 19.72558,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 293,
      "squawk": "4154",
      "timestamp": 1676552032,
      "ems": null
    },
    {
      "latitude": 51.791885,
      "longitude": 19.722612,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 285,
      "squawk": "4154",
      "timestamp": 1676552035,
      "ems": null
    },
    {
      "latitude": 51.792114,
      "longitude": 19.720459,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 279,
      "squawk": "4154",
      "timestamp": 1676552038,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.718529,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 274,
      "squawk": "4154",
      "timestamp": 1676552041,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.71608,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676552045,
      "ems": null
    },
    {
      "latitude": 51.792156,
      "longitude": 19.714127,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 265,
      "squawk": "4154",
      "timestamp": 1676552047,
      "ems": null
    },
    {
      "latitude": 51.791973,
      "longitude": 19.711761,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 261,
      "squawk": "4154",
      "timestamp": 1676552051,
      "ems": null
    },
    {
      "latitude": 51.791702,
      "longitude": 19.709696,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 255,
      "squawk": "4154",
      "timestamp": 1676552054,
      "ems": null
    },
    {
      "latitude": 51.791367,
      "longitude": 19.708023,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552056,
      "ems": null
    },
    {
      "latitude": 51.790855,
      "longitude": 19.705811,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552059,
      "ems": null
    },
    {
      "latitude": 51.790203,
      "longitude": 19.703293,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552063,
      "ems": null
    },
    {
      "latitude": 51.789829,
      "longitude": 19.70192,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552065,
      "ems": null
    },
    {
      "latitude": 51.789272,
      "longitude": 19.699554,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552069,
      "ems": null
    },
    {
      "latitude": 51.788712,
      "longitude": 19.69696,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552072,
      "ems": null
    },
    {
      "latitude": 51.788342,
      "longitude": 19.695282,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552074,
      "ems": null
    },
    {
      "latitude": 51.787876,
      "longitude": 19.693222,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552077,
      "ems": null
    },
    {
      "latitude": 51.787354,
      "longitude": 19.690989,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552080,
      "ems": null
    },
    {
      "latitude": 51.786896,
      "longitude": 19.68891,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552083,
      "ems": null
    },
    {
      "latitude": 51.786015,
      "longitude": 19.684982,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552090,
      "ems": null
    },
    {
      "latitude": 51.785156,
      "longitude": 19.681265,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552095,
      "ems": null
    },
    {
      "latitude": 51.784336,
      "longitude": 19.677963,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "squawk": "4154",
      "timestamp": 1676552100,
      "ems": null
    },
    {
      "latitude": 51.783234,
      "longitude": 19.671392,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 258,
      "squawk": "4154",
      "timestamp": 1676552109,
      "ems": null
    },
    {
      "latitude": 51.783218,
      "longitude": 19.671097,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "squawk": "4154",
      "timestamp": 1676552112,
      "ems": null
    },
    {
      "latitude": 51.782822,
      "longitude": 19.666716,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 262,
      "squawk": "4154",
      "timestamp": 1676552116,
      "ems": null
    },
    {
      "latitude": 51.782566,
      "longitude": 19.663849,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 260,
      "squawk": "4154",
      "timestamp": 1676552120,
      "ems": null
    },
    {
      "latitude": 51.782272,
      "longitude": 19.661074,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 260,
      "squawk": "4154",
      "timestamp": 1676552124,
      "ems": null
    },
    {
      "latitude": 51.782009,
      "longitude": 19.659195,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 256,
      "squawk": "4154",
      "timestamp": 1676552126,
      "ems": null
    },
    {
      "latitude": 51.781723,
      "longitude": 19.657288,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 256,
      "squawk": "4154",
      "timestamp": 1676552129,
      "ems": null
    },
    {
      "latitude": 51.781403,
      "longitude": 19.655134,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 256,
      "squawk": "4154",
      "timestamp": 1676552133,
      "ems": null
    },
    {
      "latitude": 51.780899,
      "longitude": 19.650755,
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
      "heading": 261,
      "squawk": "4154",
      "timestamp": 1676552138,
      "ems": null
    },
    {
      "latitude": 51.780056,
      "longitude": 19.64447,
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552147,
      "ems": null
    },
    {
      "latitude": 51.779217,
      "longitude": 19.6418,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 241,
      "squawk": "4154",
      "timestamp": 1676552151,
      "ems": null
    },
    {
      "latitude": 51.77829,
      "longitude": 19.638803,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552155,
      "ems": null
    },
    {
      "latitude": 51.777493,
      "longitude": 19.634552,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 257,
      "squawk": "4154",
      "timestamp": 1676552161,
      "ems": null
    },
    {
      "latitude": 51.776962,
      "longitude": 19.629005,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 261,
      "squawk": "4154",
      "timestamp": 1676552169,
      "ems": null
    },
    {
      "latitude": 51.77647,
      "longitude": 19.625015,
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
      "heading": 256,
      "squawk": "4154",
      "timestamp": 1676552175,
      "ems": null
    },
    {
      "latitude": 51.77623,
      "longitude": 19.623661,
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
      "heading": 254,
      "squawk": "4154",
      "timestamp": 1676552177,
      "ems": null
    },
    {
      "latitude": 51.775726,
      "longitude": 19.620989,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552181,
      "ems": null
    },
    {
      "latitude": 51.775452,
      "longitude": 19.619133,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 257,
      "squawk": "4154",
      "timestamp": 1676552184,
      "ems": null
    },
    {
      "latitude": 51.775398,
      "longitude": 19.614639,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 276,
      "squawk": "4154",
      "timestamp": 1676552191,
      "ems": null
    },
    {
      "latitude": 51.775631,
      "longitude": 19.612656,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 282,
      "squawk": "4154",
      "timestamp": 1676552194,
      "ems": null
    },
    {
      "latitude": 51.775909,
      "longitude": 19.610977,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 285,
      "squawk": "4154",
      "timestamp": 1676552197,
      "ems": null
    },
    {
      "latitude": 51.77623,
      "longitude": 19.609556,
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
      "heading": 288,
      "squawk": "4154",
      "timestamp": 1676552199,
      "ems": null
    },
    {
      "latitude": 51.776505,
      "longitude": 19.608368,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 282,
      "squawk": "4154",
      "timestamp": 1676552202,
      "ems": null
    },
    {
      "latitude": 51.7771,
      "longitude": 19.605993,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "4154",
      "timestamp": 1676552205,
      "ems": null
    },
    {
      "latitude": 51.777557,
      "longitude": 19.604584,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 297,
      "squawk": "4154",
      "timestamp": 1676552208,
      "ems": null
    },
    {
      "latitude": 51.778381,
      "longitude": 19.602875,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 308,
      "squawk": "4154",
      "timestamp": 1676552212,
      "ems": null
    },
    {
      "latitude": 51.779217,
      "longitude": 19.60144,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 315,
      "squawk": "4154",
      "timestamp": 1676552215,
      "ems": null
    },
    {
      "latitude": 51.780289,
      "longitude": 19.600143,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 326,
      "squawk": "4154",
      "timestamp": 1676552218,
      "ems": null
    },
    {
      "latitude": 51.781452,
      "longitude": 19.599075,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 333,
      "squawk": "4154",
      "timestamp": 1676552221,
      "ems": null
    },
    {
      "latitude": 51.782867,
      "longitude": 19.5982,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 340,
      "squawk": "4154",
      "timestamp": 1676552224,
      "ems": null
    },
    {
      "latitude": 51.783783,
      "longitude": 19.597828,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 345,
      "squawk": "4154",
      "timestamp": 1676552226,
      "ems": null
    },
    {
      "latitude": 51.785431,
      "longitude": 19.597382,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 348,
      "squawk": "4154",
      "timestamp": 1676552229,
      "ems": null
    },
    {
      "latitude": 51.787216,
      "longitude": 19.597456,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "4154",
      "timestamp": 1676552233,
      "ems": null
    },
    {
      "latitude": 51.78862,
      "longitude": 19.597931,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 12,
      "squawk": "4154",
      "timestamp": 1676552236,
      "ems": null
    },
    {
      "latitude": 51.790009,
      "longitude": 19.598719,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 21,
      "squawk": "4154",
      "timestamp": 1676552239,
      "ems": null
    },
    {
      "latitude": 51.791553,
      "longitude": 19.600067,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 31,
      "squawk": "4154",
      "timestamp": 1676552242,
      "ems": null
    },
    {
      "latitude": 51.792664,
      "longitude": 19.60154,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4154",
      "timestamp": 1676552245,
      "ems": null
    },
    {
      "latitude": 51.793304,
      "longitude": 19.602505,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 43,
      "squawk": "4154",
      "timestamp": 1676552246,
      "ems": null
    },
    {
      "latitude": 51.79467,
      "longitude": 19.605255,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "4154",
      "timestamp": 1676552250,
      "ems": null
    },
    {
      "latitude": 51.795555,
      "longitude": 19.607391,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "4154",
      "timestamp": 1676552253,
      "ems": null
    },
    {
      "latitude": 51.796463,
      "longitude": 19.609928,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "4154",
      "timestamp": 1676552256,
      "ems": null
    },
    {
      "latitude": 51.797333,
      "longitude": 19.612749,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "4154",
      "timestamp": 1676552260,
      "ems": null
    },
    {
      "latitude": 51.798115,
      "longitude": 19.615402,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "4154",
      "timestamp": 1676552263,
      "ems": null
    },
    {
      "latitude": 51.799438,
      "longitude": 19.619801,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "4154",
      "timestamp": 1676552268,
      "ems": null
    },
    {
      "latitude": 51.80035,
      "longitude": 19.622803,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "4154",
      "timestamp": 1676552272,
      "ems": null
    },
    {
      "latitude": 51.801094,
      "longitude": 19.62532,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "4154",
      "timestamp": 1676552275,
      "ems": null
    },
    {
      "latitude": 51.801773,
      "longitude": 19.627743,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "4154",
      "timestamp": 1676552278,
      "ems": null
    },
    {
      "latitude": 51.802494,
      "longitude": 19.63028,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "4154",
      "timestamp": 1676552280,
      "ems": null
    },
    {
      "latitude": 51.803192,
      "longitude": 19.633015,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "4154",
      "timestamp": 1676552284,
      "ems": null
    },
    {
      "latitude": 51.804474,
      "longitude": 19.637838,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "4154",
      "timestamp": 1676552290,
      "ems": null
    },
    {
      "latitude": 51.805241,
      "longitude": 19.640884,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 68,
      "squawk": "4154",
      "timestamp": 1676552293,
      "ems": null
    },
    {
      "latitude": 51.806442,
      "longitude": 19.645929,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "4154",
      "timestamp": 1676552299,
      "ems": null
    },
    {
      "latitude": 51.807194,
      "longitude": 19.648895,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "4154",
      "timestamp": 1676552304,
      "ems": null
    },
    {
      "latitude": 51.809372,
      "longitude": 19.657064,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "4154",
      "timestamp": 1676552312,
      "ems": null
    },
    {
      "latitude": 51.810734,
      "longitude": 19.661636,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "4154",
      "timestamp": 1676552317,
      "ems": null
    },
    {
      "latitude": 51.812176,
      "longitude": 19.666519,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "4154",
      "timestamp": 1676552323,
      "ems": null
    },
    {
      "latitude": 51.813061,
      "longitude": 19.669342,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "4154",
      "timestamp": 1676552326,
      "ems": null
    },
    {
      "latitude": 51.81427,
      "longitude": 19.674139,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "4154",
      "timestamp": 1676552332,
      "ems": null
    },
    {
      "latitude": 51.814865,
      "longitude": 19.678146,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "4154",
      "timestamp": 1676552336,
      "ems": null
    },
    {
      "latitude": 51.815002,
      "longitude": 19.681932,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "4154",
      "timestamp": 1676552340,
      "ems": null
    },
    {
      "latitude": 51.814819,
      "longitude": 19.685272,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "4154",
      "timestamp": 1676552344,
      "ems": null
    },
    {
      "latitude": 51.813992,
      "longitude": 19.689636,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "4154",
      "timestamp": 1676552348,
      "ems": null
    },
    {
      "latitude": 51.81308,
      "longitude": 19.6924,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "4154",
      "timestamp": 1676552351,
      "ems": null
    },
    {
      "latitude": 51.81208,
      "longitude": 19.694519,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "4154",
      "timestamp": 1676552354,
      "ems": null
    },
    {
      "latitude": 51.810654,
      "longitude": 19.696928,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "4154",
      "timestamp": 1676552357,
      "ems": null
    },
    {
      "latitude": 51.809235,
      "longitude": 19.698709,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "4154",
      "timestamp": 1676552360,
      "ems": null
    },
    {
      "latitude": 51.807678,
      "longitude": 19.700268,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 150,
      "squawk": "4154",
      "timestamp": 1676552363,
      "ems": null
    },
    {
      "latitude": 51.80603,
      "longitude": 19.701462,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "4154",
      "timestamp": 1676552366,
      "ems": null
    },
    {
      "latitude": 51.804821,
      "longitude": 19.702148,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 160,
      "squawk": "4154",
      "timestamp": 1676552369,
      "ems": null
    },
    {
      "latitude": 51.802773,
      "longitude": 19.702988,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 168,
      "squawk": "4154",
      "timestamp": 1676552372,
      "ems": null
    },
    {
      "latitude": 51.801327,
      "longitude": 19.703217,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 175,
      "squawk": "4154",
      "timestamp": 1676552374,
      "ems": null
    },
    {
      "latitude": 51.799438,
      "longitude": 19.703163,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 184,
      "squawk": "4154",
      "timestamp": 1676552378,
      "ems": null
    },
    {
      "latitude": 51.797977,
      "longitude": 19.702682,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 193,
      "squawk": "4154",
      "timestamp": 1676552381,
      "ems": null
    },
    {
      "latitude": 51.796555,
      "longitude": 19.701826,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 200,
      "squawk": "4154",
      "timestamp": 1676552384,
      "ems": null
    },
    {
      "latitude": 51.795227,
      "longitude": 19.700714,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 211,
      "squawk": "4154",
      "timestamp": 1676552387,
      "ems": null
    },
    {
      "latitude": 51.793972,
      "longitude": 19.699249,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 215,
      "squawk": "4154",
      "timestamp": 1676552390,
      "ems": null
    },
    {
      "latitude": 51.792801,
      "longitude": 19.697744,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 220,
      "squawk": "4154",
      "timestamp": 1676552393,
      "ems": null
    },
    {
      "latitude": 51.791924,
      "longitude": 19.696274,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676552396,
      "ems": null
    },
    {
      "latitude": 51.791134,
      "longitude": 19.694519,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676552399,
      "ems": null
    },
    {
      "latitude": 51.790573,
      "longitude": 19.692917,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 244,
      "squawk": "4154",
      "timestamp": 1676552402,
      "ems": null
    },
    {
      "latitude": 51.790203,
      "longitude": 19.691086,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552405,
      "ems": null
    },
    {
      "latitude": 51.789875,
      "longitude": 19.689407,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552408,
      "ems": null
    },
    {
      "latitude": 51.789551,
      "longitude": 19.687653,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 254,
      "squawk": "4154",
      "timestamp": 1676552411,
      "ems": null
    },
    {
      "latitude": 51.789227,
      "longitude": 19.685669,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552414,
      "ems": null
    },
    {
      "latitude": 51.788853,
      "longitude": 19.683838,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552417,
      "ems": null
    },
    {
      "latitude": 51.788498,
      "longitude": 19.682007,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552420,
      "ems": null
    },
    {
      "latitude": 51.788155,
      "longitude": 19.680099,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 255,
      "squawk": "4154",
      "timestamp": 1676552423,
      "ems": null
    },
    {
      "latitude": 51.787876,
      "longitude": 19.678268,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 257,
      "squawk": "4154",
      "timestamp": 1676552426,
      "ems": null
    },
    {
      "latitude": 51.787689,
      "longitude": 19.676743,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 257,
      "squawk": "4154",
      "timestamp": 1676552428,
      "ems": null
    },
    {
      "latitude": 51.787399,
      "longitude": 19.674509,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 258,
      "squawk": "4154",
      "timestamp": 1676552432,
      "ems": null
    },
    {
      "latitude": 51.786713,
      "longitude": 19.670563,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552438,
      "ems": null
    },
    {
      "latitude": 51.786255,
      "longitude": 19.666864,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 259,
      "squawk": "4154",
      "timestamp": 1676552444,
      "ems": null
    },
    {
      "latitude": 51.786015,
      "longitude": 19.664841,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 259,
      "squawk": "4154",
      "timestamp": 1676552447,
      "ems": null
    },
    {
      "latitude": 51.785782,
      "longitude": 19.66301,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 258,
      "squawk": "4154",
      "timestamp": 1676552450,
      "ems": null
    },
    {
      "latitude": 51.785385,
      "longitude": 19.659515,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 259,
      "squawk": "4154",
      "timestamp": 1676552456,
      "ems": null
    },
    {
      "latitude": 51.785221,
      "longitude": 19.657745,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 263,
      "squawk": "4154",
      "timestamp": 1676552459,
      "ems": null
    },
    {
      "latitude": 51.78511,
      "longitude": 19.656025,
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
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676552462,
      "ems": null
    },
    {
      "latitude": 51.785034,
      "longitude": 19.654236,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676552465,
      "ems": null
    },
    {
      "latitude": 51.784569,
      "longitude": 19.650803,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552471,
      "ems": null
    },
    {
      "latitude": 51.784149,
      "longitude": 19.648972,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 248,
      "squawk": "4154",
      "timestamp": 1676552474,
      "ems": null
    },
    {
      "latitude": 51.783646,
      "longitude": 19.647118,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552478,
      "ems": null
    },
    {
      "latitude": 51.783279,
      "longitude": 19.645634,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552480,
      "ems": null
    },
    {
      "latitude": 51.782867,
      "longitude": 19.643927,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552483,
      "ems": null
    },
    {
      "latitude": 51.782455,
      "longitude": 19.642071,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552487,
      "ems": null
    },
    {
      "latitude": 51.782055,
      "longitude": 19.64035,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 248,
      "squawk": "4154",
      "timestamp": 1676552489,
      "ems": null
    },
    {
      "latitude": 51.78159,
      "longitude": 19.638672,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552492,
      "ems": null
    },
    {
      "latitude": 51.780991,
      "longitude": 19.636578,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552496,
      "ems": null
    },
    {
      "latitude": 51.780579,
      "longitude": 19.634943,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552498,
      "ems": null
    },
    {
      "latitude": 51.779526,
      "longitude": 19.631231,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "4154",
      "timestamp": 1676552505,
      "ems": null
    },
    {
      "latitude": 51.778473,
      "longitude": 19.627304,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552511,
      "ems": null
    },
    {
      "latitude": 51.77742,
      "longitude": 19.623363,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552517,
      "ems": null
    },
    {
      "latitude": 51.776283,
      "longitude": 19.619522,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552523,
      "ems": null
    },
    {
      "latitude": 51.77504,
      "longitude": 19.615866,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 238,
      "squawk": "4154",
      "timestamp": 1676552528,
      "ems": null
    },
    {
      "latitude": 51.774235,
      "longitude": 19.613953,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676552531,
      "ems": null
    },
    {
      "latitude": 51.77335,
      "longitude": 19.612122,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 231,
      "squawk": "4154",
      "timestamp": 1676552534,
      "ems": null
    },
    {
      "latitude": 51.772514,
      "longitude": 19.610443,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 230,
      "squawk": "4154",
      "timestamp": 1676552537,
      "ems": null
    },
    {
      "latitude": 51.771629,
      "longitude": 19.608612,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 233,
      "squawk": "4154",
      "timestamp": 1676552541,
      "ems": null
    },
    {
      "latitude": 51.770699,
      "longitude": 19.606476,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 236,
      "squawk": "4154",
      "timestamp": 1676552544,
      "ems": null
    },
    {
      "latitude": 51.769913,
      "longitude": 19.604509,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 237,
      "squawk": "4154",
      "timestamp": 1676552547,
      "ems": null
    },
    {
      "latitude": 51.769272,
      "longitude": 19.602875,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 238,
      "squawk": "4154",
      "timestamp": 1676552549,
      "ems": null
    },
    {
      "latitude": 51.76767,
      "longitude": 19.598618,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 237,
      "squawk": "4154",
      "timestamp": 1676552556,
      "ems": null
    },
    {
      "latitude": 51.766296,
      "longitude": 19.594635,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 242,
      "squawk": "4154",
      "timestamp": 1676552562,
      "ems": null
    },
    {
      "latitude": 51.765701,
      "longitude": 19.592707,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 244,
      "squawk": "4154",
      "timestamp": 1676552565,
      "ems": null
    },
    {
      "latitude": 51.76506,
      "longitude": 19.590479,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 244,
      "squawk": "4154",
      "timestamp": 1676552568,
      "ems": null
    },
    {
      "latitude": 51.764507,
      "longitude": 19.588623,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552571,
      "ems": null
    },
    {
      "latitude": 51.763809,
      "longitude": 19.586487,
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
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552574,
      "ems": null
    },
    {
      "latitude": 51.763184,
      "longitude": 19.584539,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 242,
      "squawk": "4154",
      "timestamp": 1676552577,
      "ems": null
    },
    {
      "latitude": 51.762505,
      "longitude": 19.582367,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552580,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 19.578476,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "squawk": "4154",
      "timestamp": 1676552586,
      "ems": null
    },
    {
      "latitude": 51.760712,
      "longitude": 19.576523,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552589,
      "ems": null
    },
    {
      "latitude": 51.759888,
      "longitude": 19.572811,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552595,
      "ems": null
    },
    {
      "latitude": 51.759525,
      "longitude": 19.57077,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552598,
      "ems": null
    },
    {
      "latitude": 51.759197,
      "longitude": 19.569244,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552601,
      "ems": null
    },
    {
      "latitude": 51.758743,
      "longitude": 19.566725,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552604,
      "ems": null
    },
    {
      "latitude": 51.758408,
      "longitude": 19.564743,
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
      "heading": 255,
      "squawk": "4154",
      "timestamp": 1676552607,
      "ems": null
    },
    {
      "latitude": 51.758034,
      "longitude": 19.562607,
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
      "heading": 254,
      "squawk": "4154",
      "timestamp": 1676552610,
      "ems": null
    },
    {
      "latitude": 51.75771,
      "longitude": 19.560776,
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552613,
      "ems": null
    },
    {
      "latitude": 51.757336,
      "longitude": 19.558792,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552616,
      "ems": null
    },
    {
      "latitude": 51.757004,
      "longitude": 19.556927,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552619,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 19.554922,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552622,
      "ems": null
    },
    {
      "latitude": 51.755894,
      "longitude": 19.551392,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552628,
      "ems": null
    },
    {
      "latitude": 51.755219,
      "longitude": 19.547943,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552634,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.544231,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "squawk": "4154",
      "timestamp": 1676552640,
      "ems": null
    },
    {
      "latitude": 51.753891,
      "longitude": 19.540892,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552646,
      "ems": null
    },
    {
      "latitude": 51.75325,
      "longitude": 19.537477,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552652,
      "ems": null
    },
    {
      "latitude": 51.752426,
      "longitude": 19.534138,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 246,
      "squawk": "4154",
      "timestamp": 1676552658,
      "ems": null
    },
    {
      "latitude": 51.751968,
      "longitude": 19.532503,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552661,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 19.529238,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552667,
      "ems": null
    },
    {
      "latitude": 51.750774,
      "longitude": 19.527817,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552670,
      "ems": null
    },
    {
      "latitude": 51.750355,
      "longitude": 19.526443,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552673,
      "ems": null
    },
    {
      "latitude": 51.749981,
      "longitude": 19.525223,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 241,
      "squawk": "4154",
      "timestamp": 1676552676,
      "ems": null
    },
    {
      "latitude": 51.74947,
      "longitude": 19.523849,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 240,
      "squawk": "4154",
      "timestamp": 1676552680,
      "ems": null
    },
    {
      "latitude": 51.749004,
      "longitude": 19.5224,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 243,
      "squawk": "4154",
      "timestamp": 1676552682,
      "ems": null
    },
    {
      "latitude": 51.748581,
      "longitude": 19.521072,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 240,
      "squawk": "4154",
      "timestamp": 1676552685,
      "ems": null
    },
    {
      "latitude": 51.748119,
      "longitude": 19.51973,
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
      "heading": 241,
      "squawk": "4154",
      "timestamp": 1676552688,
      "ems": null
    },
    {
      "latitude": 51.74733,
      "longitude": 19.51683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552694,
      "ems": null
    },
    {
      "latitude": 51.746567,
      "longitude": 19.513649,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552701,
      "ems": null
    },
    {
      "latitude": 51.746258,
      "longitude": 19.512177,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552704,
      "ems": null
    },
    {
      "latitude": 51.74593,
      "longitude": 19.510498,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552707,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.509048,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552709,
      "ems": null
    },
    {
      "latitude": 51.745285,
      "longitude": 19.507265,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552713,
      "ems": null
    },
    {
      "latitude": 51.744953,
      "longitude": 19.505692,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552716,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.504147,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552719,
      "ems": null
    },
    {
      "latitude": 51.744255,
      "longitude": 19.502258,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552722,
      "ems": null
    },
    {
      "latitude": 51.743603,
      "longitude": 19.498978,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552728,
      "ems": null
    },
    {
      "latitude": 51.74295,
      "longitude": 19.495981,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552734,
      "ems": null
    },
    {
      "latitude": 51.74231,
      "longitude": 19.492865,
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552740,
      "ems": null
    },
    {
      "latitude": 51.74165,
      "longitude": 19.489899,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552745,
      "ems": null
    },
    {
      "latitude": 51.741028,
      "longitude": 19.486258,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 256,
      "squawk": "4154",
      "timestamp": 1676552752,
      "ems": null
    },
    {
      "latitude": 51.740578,
      "longitude": 19.483032,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 257,
      "squawk": "4154",
      "timestamp": 1676552758,
      "ems": null
    },
    {
      "latitude": 51.740433,
      "longitude": 19.481804,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 258,
      "squawk": "4154",
      "timestamp": 1676552760,
      "ems": null
    },
    {
      "latitude": 51.739788,
      "longitude": 19.478302,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552767,
      "ems": null
    },
    {
      "latitude": 51.738922,
      "longitude": 19.475197,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 244,
      "squawk": "4154",
      "timestamp": 1676552773,
      "ems": null
    },
    {
      "latitude": 51.738464,
      "longitude": 19.473713,
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
      "heading": 245,
      "squawk": "4154",
      "timestamp": 1676552776,
      "ems": null
    },
    {
      "latitude": 51.738064,
      "longitude": 19.472198,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 246,
      "squawk": "4154",
      "timestamp": 1676552779,
      "ems": null
    },
    {
      "latitude": 51.737503,
      "longitude": 19.46911,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 254,
      "squawk": "4154",
      "timestamp": 1676552785,
      "ems": null
    },
    {
      "latitude": 51.736855,
      "longitude": 19.465942,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552791,
      "ems": null
    },
    {
      "latitude": 51.736622,
      "longitude": 19.464951,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552793,
      "ems": null
    },
    {
      "latitude": 51.735737,
      "longitude": 19.461365,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552800,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 19.458643,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 247,
      "squawk": "4154",
      "timestamp": 1676552805,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.455032,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552812,
      "ems": null
    },
    {
      "latitude": 51.733612,
      "longitude": 19.451962,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552818,
      "ems": null
    },
    {
      "latitude": 51.733364,
      "longitude": 19.450455,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 255,
      "squawk": "4154",
      "timestamp": 1676552821,
      "ems": null
    },
    {
      "latitude": 51.733082,
      "longitude": 19.449081,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676552824,
      "ems": null
    },
    {
      "latitude": 51.732834,
      "longitude": 19.447582,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 252,
      "squawk": "4154",
      "timestamp": 1676552827,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 19.444656,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 246,
      "squawk": "4154",
      "timestamp": 1676552833,
      "ems": null
    },
    {
      "latitude": 51.731369,
      "longitude": 19.441717,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 248,
      "squawk": "4154",
      "timestamp": 1676552840,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.438629,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552845,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 19.437485,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552848,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.433136,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552856,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.427643,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552865,
      "ems": null
    },
    {
      "latitude": 51.727386,
      "longitude": 19.423456,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552874,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.4193,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552879,
      "ems": null
    },
    {
      "latitude": 51.725739,
      "longitude": 19.415737,
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
      "heading": 251,
      "squawk": "4154",
      "timestamp": 1676552885,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.4121,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 249,
      "squawk": "4154",
      "timestamp": 1676552892,
      "ems": null
    },
    {
      "latitude": 51.723862,
      "longitude": 19.407125,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676552901,
      "ems": null
    },
    {
      "latitude": 51.723503,
      "longitude": 19.406223,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 120,
      "squawk": "4154",
      "timestamp": 1676553013,
      "ems": null
    },
    {
      "latitude": 51.722214,
      "longitude": 19.40785,
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
      "heading": 140,
      "squawk": "4154",
      "timestamp": 1676553038,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 19.408239,
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
      "heading": 154,
      "squawk": "4154",
      "timestamp": 1676553047,
      "ems": null
    },
    {
      "latitude": 51.721573,
      "longitude": 19.40836,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676553053,
      "ems": null
    },
    {
      "latitude": 51.721367,
      "longitude": 19.408407,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676553057,
      "ems": null
    },
    {
      "latitude": 51.721142,
      "longitude": 19.408436,
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676553060,
      "ems": null
    },
    {
      "latitude": 51.720921,
      "longitude": 19.408474,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676553063,
      "ems": null
    },
    {
      "latitude": 51.720715,
      "longitude": 19.408407,
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
      "heading": 208,
      "squawk": "4154",
      "timestamp": 1676553068,
      "ems": null
    },
    {
      "latitude": 51.720577,
      "longitude": 19.408146,
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
      "heading": 244,
      "squawk": "4154",
      "timestamp": 1676553074,
      "ems": null
    },
    {
      "latitude": 51.720524,
      "longitude": 19.40794,
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
      "heading": 250,
      "squawk": "4154",
      "timestamp": 1676553077,
      "ems": null
    },
    {
      "latitude": 51.720291,
      "longitude": 19.406996,
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
      "heading": 233,
      "squawk": "4154",
      "timestamp": 1676553098,
      "ems": null
    },
    {
      "latitude": 51.720074,
      "longitude": 19.406717,
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
      "heading": 182,
      "squawk": "4154",
      "timestamp": 1676553112,
      "ems": null
    },
    {
      "latitude": 51.722042,
      "longitude": 19.408054,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 0,
        "kts": 0,
        "mph": 0
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "4154",
      "timestamp": 1676553142,
      "ems": null
    }
  ]
}