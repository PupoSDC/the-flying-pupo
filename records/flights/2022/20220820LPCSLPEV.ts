import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220820LPCSLPEV",
    callsign: "RVP015",
    name: "Cross Country With Uber Girl",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 20, 11, 25).getTime(),
    arrival: new Date(2022, 7, 20, 12, 50).getTime(),
    singleEnginePistonTime: 85,
    picTime: 85,
    dualTime: 0,
    landings: {
      day: 1,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "C150",
      text: "Cessna Reims F150",
    },
    identification: {
      modes: "49072A",
      registration: "CS-AYJ",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
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
      "latitude": 38.719265,
      "longitude": -9.352754,
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
      "heading": 225,
      "squawk": "0",
      "timestamp": 1660995543,
      "ems": null
    },
    {
      "latitude": 38.719208,
      "longitude": -9.352982,
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
      "heading": 271,
      "squawk": "0",
      "timestamp": 1660995550,
      "ems": null
    },
    {
      "latitude": 38.719425,
      "longitude": -9.353127,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 300,
      "squawk": "0",
      "timestamp": 1660995560,
      "ems": null
    },
    {
      "latitude": 38.719688,
      "longitude": -9.353216,
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
      "heading": 343,
      "squawk": "1371",
      "timestamp": 1660995596,
      "ems": null
    },
    {
      "latitude": 38.720264,
      "longitude": -9.353424,
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
      "heading": 343,
      "squawk": "1371",
      "timestamp": 1660995601,
      "ems": null
    },
    {
      "latitude": 38.721497,
      "longitude": -9.353873,
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
      "heading": 345,
      "squawk": "1371",
      "timestamp": 1660995608,
      "ems": null
    },
    {
      "latitude": 38.723503,
      "longitude": -9.354614,
      "altitude": {
        "feet": 225,
        "meters": 69
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "1371",
      "timestamp": 1660995616,
      "ems": null
    },
    {
      "latitude": 38.724384,
      "longitude": -9.354858,
      "altitude": {
        "feet": 250,
        "meters": 76
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 348,
      "squawk": "1371",
      "timestamp": 1660995620,
      "ems": null
    },
    {
      "latitude": 38.724617,
      "longitude": -9.35498,
      "altitude": {
        "feet": 275,
        "meters": 84
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 348,
      "squawk": "1371",
      "timestamp": 1660995621,
      "ems": null
    },
    {
      "latitude": 38.726028,
      "longitude": -9.355455,
      "altitude": {
        "feet": 325,
        "meters": 99
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 343,
      "squawk": "1371",
      "timestamp": 1660995627,
      "ems": null
    },
    {
      "latitude": 38.727402,
      "longitude": -9.355993,
      "altitude": {
        "feet": 350,
        "meters": 107
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 341,
      "squawk": "1371",
      "timestamp": 1660995633,
      "ems": null
    },
    {
      "latitude": 38.729179,
      "longitude": -9.356567,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 345,
      "squawk": "1371",
      "timestamp": 1660995641,
      "ems": null
    },
    {
      "latitude": 38.73053,
      "longitude": -9.357056,
      "altitude": {
        "feet": 450,
        "meters": 137
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 343,
      "squawk": "1371",
      "timestamp": 1660995647,
      "ems": null
    },
    {
      "latitude": 38.731834,
      "longitude": -9.357544,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "1371",
      "timestamp": 1660995653,
      "ems": null
    },
    {
      "latitude": 38.733444,
      "longitude": -9.358202,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 344,
      "squawk": "1371",
      "timestamp": 1660995661,
      "ems": null
    },
    {
      "latitude": 38.735001,
      "longitude": -9.35868,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "1371",
      "timestamp": 1660995668,
      "ems": null
    },
    {
      "latitude": 38.736488,
      "longitude": -9.359192,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "1371",
      "timestamp": 1660995675,
      "ems": null
    },
    {
      "latitude": 38.737141,
      "longitude": -9.359375,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 354,
      "squawk": "1371",
      "timestamp": 1660995678,
      "ems": null
    },
    {
      "latitude": 38.73793,
      "longitude": -9.359337,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 7,
      "squawk": "1371",
      "timestamp": 1660995681,
      "ems": null
    },
    {
      "latitude": 38.738491,
      "longitude": -9.359131,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 15,
      "squawk": "1371",
      "timestamp": 1660995684,
      "ems": null
    },
    {
      "latitude": 38.739235,
      "longitude": -9.358826,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 20,
      "squawk": "1371",
      "timestamp": 1660995687,
      "ems": null
    },
    {
      "latitude": 38.739807,
      "longitude": -9.358381,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 35,
      "squawk": "1371",
      "timestamp": 1660995690,
      "ems": null
    },
    {
      "latitude": 38.740448,
      "longitude": -9.357666,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 41,
      "squawk": "1371",
      "timestamp": 1660995693,
      "ems": null
    },
    {
      "latitude": 38.740818,
      "longitude": -9.356934,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 63,
      "squawk": "1371",
      "timestamp": 1660995695,
      "ems": null
    },
    {
      "latitude": 38.741051,
      "longitude": -9.355835,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660995699,
      "ems": null
    },
    {
      "latitude": 38.741089,
      "longitude": -9.35462,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660995702,
      "ems": null
    },
    {
      "latitude": 38.741005,
      "longitude": -9.35321,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 97,
      "squawk": "1371",
      "timestamp": 1660995705,
      "ems": null
    },
    {
      "latitude": 38.740768,
      "longitude": -9.351993,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 104,
      "squawk": "1371",
      "timestamp": 1660995708,
      "ems": null
    },
    {
      "latitude": 38.740448,
      "longitude": -9.350739,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 112,
      "squawk": "1371",
      "timestamp": 1660995711,
      "ems": null
    },
    {
      "latitude": 38.739807,
      "longitude": -9.349425,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "1371",
      "timestamp": 1660995714,
      "ems": null
    },
    {
      "latitude": 38.739098,
      "longitude": -9.348328,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995717,
      "ems": null
    },
    {
      "latitude": 38.738205,
      "longitude": -9.347156,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "1371",
      "timestamp": 1660995720,
      "ems": null
    },
    {
      "latitude": 38.737244,
      "longitude": -9.346141,
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
      "heading": 142,
      "squawk": "1371",
      "timestamp": 1660995723,
      "ems": null
    },
    {
      "latitude": 38.736164,
      "longitude": -9.345215,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995726,
      "ems": null
    },
    {
      "latitude": 38.735092,
      "longitude": -9.344238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995729,
      "ems": null
    },
    {
      "latitude": 38.734085,
      "longitude": -9.343394,
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995732,
      "ems": null
    },
    {
      "latitude": 38.732906,
      "longitude": -9.342346,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995735,
      "ems": null
    },
    {
      "latitude": 38.731693,
      "longitude": -9.34137,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995738,
      "ems": null
    },
    {
      "latitude": 38.73056,
      "longitude": -9.340409,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "squawk": "1371",
      "timestamp": 1660995741,
      "ems": null
    },
    {
      "latitude": 38.729462,
      "longitude": -9.339454,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995744,
      "ems": null
    },
    {
      "latitude": 38.72839,
      "longitude": -9.338501,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995747,
      "ems": null
    },
    {
      "latitude": 38.727364,
      "longitude": -9.337646,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995750,
      "ems": null
    },
    {
      "latitude": 38.725204,
      "longitude": -9.335692,
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995756,
      "ems": null
    },
    {
      "latitude": 38.723007,
      "longitude": -9.333662,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660995762,
      "ems": null
    },
    {
      "latitude": 38.722137,
      "longitude": -9.332767,
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995765,
      "ems": null
    },
    {
      "latitude": 38.72113,
      "longitude": -9.331573,
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995768,
      "ems": null
    },
    {
      "latitude": 38.720261,
      "longitude": -9.330617,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995771,
      "ems": null
    },
    {
      "latitude": 38.719208,
      "longitude": -9.329423,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 137,
      "squawk": "1371",
      "timestamp": 1660995774,
      "ems": null
    },
    {
      "latitude": 38.718246,
      "longitude": -9.328288,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "1371",
      "timestamp": 1660995777,
      "ems": null
    },
    {
      "latitude": 38.717285,
      "longitude": -9.327213,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 140,
      "squawk": "1371",
      "timestamp": 1660995780,
      "ems": null
    },
    {
      "latitude": 38.716324,
      "longitude": -9.326199,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "squawk": "1371",
      "timestamp": 1660995783,
      "ems": null
    },
    {
      "latitude": 38.714424,
      "longitude": -9.324219,
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660995789,
      "ems": null
    },
    {
      "latitude": 38.71225,
      "longitude": -9.322079,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660995795,
      "ems": null
    },
    {
      "latitude": 38.710236,
      "longitude": -9.320068,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 142,
      "squawk": "1371",
      "timestamp": 1660995801,
      "ems": null
    },
    {
      "latitude": 38.70813,
      "longitude": -9.317959,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660995807,
      "ems": null
    },
    {
      "latitude": 38.706184,
      "longitude": -9.315918,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "1371",
      "timestamp": 1660995813,
      "ems": null
    },
    {
      "latitude": 38.704193,
      "longitude": -9.313779,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "squawk": "1371",
      "timestamp": 1660995819,
      "ems": null
    },
    {
      "latitude": 38.70232,
      "longitude": -9.311646,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995825,
      "ems": null
    },
    {
      "latitude": 38.700363,
      "longitude": -9.30957,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "1371",
      "timestamp": 1660995831,
      "ems": null
    },
    {
      "latitude": 38.698364,
      "longitude": -9.307251,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995837,
      "ems": null
    },
    {
      "latitude": 38.696453,
      "longitude": -9.305176,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 139,
      "squawk": "1371",
      "timestamp": 1660995843,
      "ems": null
    },
    {
      "latitude": 38.694534,
      "longitude": -9.302972,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660995849,
      "ems": null
    },
    {
      "latitude": 38.692612,
      "longitude": -9.300763,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 136,
      "squawk": "1371",
      "timestamp": 1660995856,
      "ems": null
    },
    {
      "latitude": 38.690823,
      "longitude": -9.298523,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 135,
      "squawk": "1371",
      "timestamp": 1660995862,
      "ems": null
    },
    {
      "latitude": 38.688911,
      "longitude": -9.296143,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 135,
      "squawk": "1371",
      "timestamp": 1660995868,
      "ems": null
    },
    {
      "latitude": 38.688034,
      "longitude": -9.295031,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 134,
      "squawk": "1371",
      "timestamp": 1660995871,
      "ems": null
    },
    {
      "latitude": 38.687283,
      "longitude": -9.293945,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 132,
      "squawk": "1371",
      "timestamp": 1660995873,
      "ems": null
    },
    {
      "latitude": 38.686478,
      "longitude": -9.292822,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 132,
      "squawk": "1371",
      "timestamp": 1660995877,
      "ems": null
    },
    {
      "latitude": 38.685654,
      "longitude": -9.291687,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995879,
      "ems": null
    },
    {
      "latitude": 38.68483,
      "longitude": -9.290493,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995883,
      "ems": null
    },
    {
      "latitude": 38.68309,
      "longitude": -9.288045,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "1371",
      "timestamp": 1660995889,
      "ems": null
    },
    {
      "latitude": 38.682163,
      "longitude": -9.286743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 130,
      "squawk": "1371",
      "timestamp": 1660995892,
      "ems": null
    },
    {
      "latitude": 38.681465,
      "longitude": -9.285645,
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
      "heading": 129,
      "squawk": "1371",
      "timestamp": 1660995894,
      "ems": null
    },
    {
      "latitude": 38.680672,
      "longitude": -9.284363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660995898,
      "ems": null
    },
    {
      "latitude": 38.67979,
      "longitude": -9.282898,
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660995901,
      "ems": null
    },
    {
      "latitude": 38.679016,
      "longitude": -9.281715,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 127,
      "squawk": "1371",
      "timestamp": 1660995904,
      "ems": null
    },
    {
      "latitude": 38.677414,
      "longitude": -9.279114,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660995910,
      "ems": null
    },
    {
      "latitude": 38.675739,
      "longitude": -9.276611,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 130,
      "squawk": "1371",
      "timestamp": 1660995916,
      "ems": null
    },
    {
      "latitude": 38.674065,
      "longitude": -9.274109,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995922,
      "ems": null
    },
    {
      "latitude": 38.672386,
      "longitude": -9.271667,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 130,
      "squawk": "1371",
      "timestamp": 1660995928,
      "ems": null
    },
    {
      "latitude": 38.670757,
      "longitude": -9.269226,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995934,
      "ems": null
    },
    {
      "latitude": 38.669037,
      "longitude": -9.266788,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 132,
      "squawk": "1371",
      "timestamp": 1660995940,
      "ems": null
    },
    {
      "latitude": 38.667404,
      "longitude": -9.264526,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "1371",
      "timestamp": 1660995946,
      "ems": null
    },
    {
      "latitude": 38.665695,
      "longitude": -9.262012,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "1371",
      "timestamp": 1660995952,
      "ems": null
    },
    {
      "latitude": 38.664734,
      "longitude": -9.260938,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "1371",
      "timestamp": 1660995955,
      "ems": null
    },
    {
      "latitude": 38.663818,
      "longitude": -9.259982,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "1371",
      "timestamp": 1660995958,
      "ems": null
    },
    {
      "latitude": 38.662766,
      "longitude": -9.259027,
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660995961,
      "ems": null
    },
    {
      "latitude": 38.661667,
      "longitude": -9.258012,
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
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660995964,
      "ems": null
    },
    {
      "latitude": 38.660706,
      "longitude": -9.257056,
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660995967,
      "ems": null
    },
    {
      "latitude": 38.659607,
      "longitude": -9.256161,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660995970,
      "ems": null
    },
    {
      "latitude": 38.65926,
      "longitude": -9.255859,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660995971,
      "ems": null
    },
    {
      "latitude": 38.658142,
      "longitude": -9.254944,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660995974,
      "ems": null
    },
    {
      "latitude": 38.656998,
      "longitude": -9.254011,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660995977,
      "ems": null
    },
    {
      "latitude": 38.655899,
      "longitude": -9.253056,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660995980,
      "ems": null
    },
    {
      "latitude": 38.6548,
      "longitude": -9.2521,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660995983,
      "ems": null
    },
    {
      "latitude": 38.652882,
      "longitude": -9.250488,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660995988,
      "ems": null
    },
    {
      "latitude": 38.650276,
      "longitude": -9.248413,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660995995,
      "ems": null
    },
    {
      "latitude": 38.647945,
      "longitude": -9.246521,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "squawk": "1371",
      "timestamp": 1660996001,
      "ems": null
    },
    {
      "latitude": 38.645691,
      "longitude": -9.244816,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660996006,
      "ems": null
    },
    {
      "latitude": 38.643246,
      "longitude": -9.24292,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660996013,
      "ems": null
    },
    {
      "latitude": 38.640919,
      "longitude": -9.241272,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660996019,
      "ems": null
    },
    {
      "latitude": 38.638962,
      "longitude": -9.239562,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996024,
      "ems": null
    },
    {
      "latitude": 38.638638,
      "longitude": -9.239258,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660996025,
      "ems": null
    },
    {
      "latitude": 38.638138,
      "longitude": -9.238666,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660996029,
      "ems": null
    },
    {
      "latitude": 38.636581,
      "longitude": -9.236815,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660996032,
      "ems": null
    },
    {
      "latitude": 38.635391,
      "longitude": -9.235561,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 140,
      "squawk": "1371",
      "timestamp": 1660996035,
      "ems": null
    },
    {
      "latitude": 38.634384,
      "longitude": -9.234546,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660996038,
      "ems": null
    },
    {
      "latitude": 38.633331,
      "longitude": -9.233582,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996040,
      "ems": null
    },
    {
      "latitude": 38.632095,
      "longitude": -9.232456,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660996044,
      "ems": null
    },
    {
      "latitude": 38.630211,
      "longitude": -9.230835,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660996049,
      "ems": null
    },
    {
      "latitude": 38.628662,
      "longitude": -9.22959,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660996053,
      "ems": null
    },
    {
      "latitude": 38.627651,
      "longitude": -9.22876,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 148,
      "squawk": "1371",
      "timestamp": 1660996056,
      "ems": null
    },
    {
      "latitude": 38.626419,
      "longitude": -9.227859,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660996059,
      "ems": null
    },
    {
      "latitude": 38.625778,
      "longitude": -9.227381,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660996061,
      "ems": null
    },
    {
      "latitude": 38.624298,
      "longitude": -9.226379,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996065,
      "ems": null
    },
    {
      "latitude": 38.623077,
      "longitude": -9.22565,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 154,
      "squawk": "1371",
      "timestamp": 1660996068,
      "ems": null
    },
    {
      "latitude": 38.621841,
      "longitude": -9.224874,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 155,
      "squawk": "1371",
      "timestamp": 1660996071,
      "ems": null
    },
    {
      "latitude": 38.620712,
      "longitude": -9.224243,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 157,
      "squawk": "1371",
      "timestamp": 1660996074,
      "ems": null
    },
    {
      "latitude": 38.619549,
      "longitude": -9.223694,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 159,
      "squawk": "1371",
      "timestamp": 1660996077,
      "ems": null
    },
    {
      "latitude": 38.618362,
      "longitude": -9.223083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "1371",
      "timestamp": 1660996080,
      "ems": null
    },
    {
      "latitude": 38.617222,
      "longitude": -9.222534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "1371",
      "timestamp": 1660996083,
      "ems": null
    },
    {
      "latitude": 38.615891,
      "longitude": -9.221888,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660996086,
      "ems": null
    },
    {
      "latitude": 38.613602,
      "longitude": -9.220395,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "squawk": "1371",
      "timestamp": 1660996092,
      "ems": null
    },
    {
      "latitude": 38.611263,
      "longitude": -9.219055,
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660996098,
      "ems": null
    },
    {
      "latitude": 38.608887,
      "longitude": -9.217828,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 159,
      "squawk": "1371",
      "timestamp": 1660996104,
      "ems": null
    },
    {
      "latitude": 38.606377,
      "longitude": -9.216736,
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660996110,
      "ems": null
    },
    {
      "latitude": 38.603851,
      "longitude": -9.215678,
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660996116,
      "ems": null
    },
    {
      "latitude": 38.602654,
      "longitude": -9.21521,
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996119,
      "ems": null
    },
    {
      "latitude": 38.601425,
      "longitude": -9.214723,
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996122,
      "ems": null
    },
    {
      "latitude": 38.600143,
      "longitude": -9.214305,
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
      "heading": 164,
      "squawk": "1371",
      "timestamp": 1660996125,
      "ems": null
    },
    {
      "latitude": 38.59874,
      "longitude": -9.213806,
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
      "heading": 164,
      "squawk": "1371",
      "timestamp": 1660996128,
      "ems": null
    },
    {
      "latitude": 38.597439,
      "longitude": -9.213318,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996131,
      "ems": null
    },
    {
      "latitude": 38.594971,
      "longitude": -9.212402,
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996137,
      "ems": null
    },
    {
      "latitude": 38.592361,
      "longitude": -9.211439,
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996143,
      "ems": null
    },
    {
      "latitude": 38.589802,
      "longitude": -9.210449,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996149,
      "ems": null
    },
    {
      "latitude": 38.587051,
      "longitude": -9.209409,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996155,
      "ems": null
    },
    {
      "latitude": 38.584358,
      "longitude": -9.208496,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 165,
      "squawk": "1371",
      "timestamp": 1660996161,
      "ems": null
    },
    {
      "latitude": 38.581787,
      "longitude": -9.207499,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996167,
      "ems": null
    },
    {
      "latitude": 38.579269,
      "longitude": -9.206483,
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996173,
      "ems": null
    },
    {
      "latitude": 38.576862,
      "longitude": -9.205444,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660996179,
      "ems": null
    },
    {
      "latitude": 38.574348,
      "longitude": -9.204407,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996185,
      "ems": null
    },
    {
      "latitude": 38.572021,
      "longitude": -9.203491,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996191,
      "ems": null
    },
    {
      "latitude": 38.569462,
      "longitude": -9.202454,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660996198,
      "ems": null
    },
    {
      "latitude": 38.567184,
      "longitude": -9.201528,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660996203,
      "ems": null
    },
    {
      "latitude": 38.564575,
      "longitude": -9.200572,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996210,
      "ems": null
    },
    {
      "latitude": 38.562244,
      "longitude": -9.199646,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996216,
      "ems": null
    },
    {
      "latitude": 38.559448,
      "longitude": -9.198662,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 165,
      "squawk": "1371",
      "timestamp": 1660996222,
      "ems": null
    },
    {
      "latitude": 38.556892,
      "longitude": -9.197815,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 164,
      "squawk": "1371",
      "timestamp": 1660996228,
      "ems": null
    },
    {
      "latitude": 38.554367,
      "longitude": -9.19687,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996234,
      "ems": null
    },
    {
      "latitude": 38.551678,
      "longitude": -9.195862,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 165,
      "squawk": "1371",
      "timestamp": 1660996240,
      "ems": null
    },
    {
      "latitude": 38.549194,
      "longitude": -9.195139,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 167,
      "squawk": "1371",
      "timestamp": 1660996246,
      "ems": null
    },
    {
      "latitude": 38.546494,
      "longitude": -9.194363,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 168,
      "squawk": "1371",
      "timestamp": 1660996252,
      "ems": null
    },
    {
      "latitude": 38.543625,
      "longitude": -9.193665,
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
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996258,
      "ems": null
    },
    {
      "latitude": 38.542282,
      "longitude": -9.193407,
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
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996261,
      "ems": null
    },
    {
      "latitude": 38.540878,
      "longitude": -9.193115,
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
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996264,
      "ems": null
    },
    {
      "latitude": 38.539993,
      "longitude": -9.192929,
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
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996266,
      "ems": null
    },
    {
      "latitude": 38.536926,
      "longitude": -9.192213,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "1371",
      "timestamp": 1660996273,
      "ems": null
    },
    {
      "latitude": 38.534267,
      "longitude": -9.191528,
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
      "heading": 168,
      "squawk": "1371",
      "timestamp": 1660996278,
      "ems": null
    },
    {
      "latitude": 38.531708,
      "longitude": -9.1909,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996284,
      "ems": null
    },
    {
      "latitude": 38.52882,
      "longitude": -9.190247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996291,
      "ems": null
    },
    {
      "latitude": 38.526123,
      "longitude": -9.189705,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660996297,
      "ems": null
    },
    {
      "latitude": 38.523468,
      "longitude": -9.189148,
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
      "heading": 171,
      "squawk": "1371",
      "timestamp": 1660996303,
      "ems": null
    },
    {
      "latitude": 38.520721,
      "longitude": -9.18869,
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
      "heading": 173,
      "squawk": "1371",
      "timestamp": 1660996309,
      "ems": null
    },
    {
      "latitude": 38.517925,
      "longitude": -9.188293,
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
      "heading": 173,
      "squawk": "1371",
      "timestamp": 1660996315,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -9.187914,
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
      "heading": 171,
      "squawk": "1371",
      "timestamp": 1660996321,
      "ems": null
    },
    {
      "latitude": 38.513901,
      "longitude": -9.187496,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660996324,
      "ems": null
    },
    {
      "latitude": 38.51276,
      "longitude": -9.186951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "1371",
      "timestamp": 1660996326,
      "ems": null
    },
    {
      "latitude": 38.511566,
      "longitude": -9.186123,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660996330,
      "ems": null
    },
    {
      "latitude": 38.510468,
      "longitude": -9.184988,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 137,
      "squawk": "1371",
      "timestamp": 1660996333,
      "ems": null
    },
    {
      "latitude": 38.509598,
      "longitude": -9.183675,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660996336,
      "ems": null
    },
    {
      "latitude": 38.508896,
      "longitude": -9.182251,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 117,
      "squawk": "1371",
      "timestamp": 1660996339,
      "ems": null
    },
    {
      "latitude": 38.50843,
      "longitude": -9.180908,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 109,
      "squawk": "1371",
      "timestamp": 1660996342,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -9.179199,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 100,
      "squawk": "1371",
      "timestamp": 1660996345,
      "ems": null
    },
    {
      "latitude": 38.508011,
      "longitude": -9.177612,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996348,
      "ems": null
    },
    {
      "latitude": 38.508057,
      "longitude": -9.176086,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660996351,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -9.174622,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996354,
      "ems": null
    },
    {
      "latitude": 38.508152,
      "longitude": -9.173706,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660996357,
      "ems": null
    },
    {
      "latitude": 38.508224,
      "longitude": -9.171614,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996360,
      "ems": null
    },
    {
      "latitude": 38.508316,
      "longitude": -9.17024,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996363,
      "ems": null
    },
    {
      "latitude": 38.508335,
      "longitude": -9.168884,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660996366,
      "ems": null
    },
    {
      "latitude": 38.508362,
      "longitude": -9.167375,
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996369,
      "ems": null
    },
    {
      "latitude": 38.508316,
      "longitude": -9.16624,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996372,
      "ems": null
    },
    {
      "latitude": 38.50827,
      "longitude": -9.164927,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996375,
      "ems": null
    },
    {
      "latitude": 38.508224,
      "longitude": -9.162299,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996380,
      "ems": null
    },
    {
      "latitude": 38.508244,
      "longitude": -9.15863,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996389,
      "ems": null
    },
    {
      "latitude": 38.508179,
      "longitude": -9.156149,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996395,
      "ems": null
    },
    {
      "latitude": 38.508179,
      "longitude": -9.153999,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996400,
      "ems": null
    },
    {
      "latitude": 38.508152,
      "longitude": -9.151123,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996407,
      "ems": null
    },
    {
      "latitude": 38.508057,
      "longitude": -9.148499,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996413,
      "ems": null
    },
    {
      "latitude": 38.507965,
      "longitude": -9.145691,
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996419,
      "ems": null
    },
    {
      "latitude": 38.507824,
      "longitude": -9.142822,
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996425,
      "ems": null
    },
    {
      "latitude": 38.507732,
      "longitude": -9.139832,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996431,
      "ems": null
    },
    {
      "latitude": 38.507584,
      "longitude": -9.136864,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996437,
      "ems": null
    },
    {
      "latitude": 38.507545,
      "longitude": -9.133911,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996443,
      "ems": null
    },
    {
      "latitude": 38.5075,
      "longitude": -9.13092,
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996449,
      "ems": null
    },
    {
      "latitude": 38.507401,
      "longitude": -9.127668,
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996456,
      "ems": null
    },
    {
      "latitude": 38.507355,
      "longitude": -9.124743,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996461,
      "ems": null
    },
    {
      "latitude": 38.507221,
      "longitude": -9.121887,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996468,
      "ems": null
    },
    {
      "latitude": 38.507126,
      "longitude": -9.118533,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996474,
      "ems": null
    },
    {
      "latitude": 38.506989,
      "longitude": -9.115428,
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996480,
      "ems": null
    },
    {
      "latitude": 38.506847,
      "longitude": -9.112244,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996486,
      "ems": null
    },
    {
      "latitude": 38.506714,
      "longitude": -9.108979,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996492,
      "ems": null
    },
    {
      "latitude": 38.506622,
      "longitude": -9.105815,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "1371",
      "timestamp": 1660996498,
      "ems": null
    },
    {
      "latitude": 38.506485,
      "longitude": -9.102591,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996504,
      "ems": null
    },
    {
      "latitude": 38.506382,
      "longitude": -9.099426,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996510,
      "ems": null
    },
    {
      "latitude": 38.506336,
      "longitude": -9.096252,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996516,
      "ems": null
    },
    {
      "latitude": 38.50629,
      "longitude": -9.093079,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996522,
      "ems": null
    },
    {
      "latitude": 38.506195,
      "longitude": -9.089966,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996527,
      "ems": null
    },
    {
      "latitude": 38.506104,
      "longitude": -9.08667,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996534,
      "ems": null
    },
    {
      "latitude": 38.505981,
      "longitude": -9.082887,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996541,
      "ems": null
    },
    {
      "latitude": 38.505798,
      "longitude": -9.078767,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996549,
      "ems": null
    },
    {
      "latitude": 38.505753,
      "longitude": -9.075543,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996555,
      "ems": null
    },
    {
      "latitude": 38.505684,
      "longitude": -9.072327,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996561,
      "ems": null
    },
    {
      "latitude": 38.505707,
      "longitude": -9.070766,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660996564,
      "ems": null
    },
    {
      "latitude": 38.505775,
      "longitude": -9.069275,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996567,
      "ems": null
    },
    {
      "latitude": 38.505844,
      "longitude": -9.067661,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996570,
      "ems": null
    },
    {
      "latitude": 38.505917,
      "longitude": -9.066345,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996573,
      "ems": null
    },
    {
      "latitude": 38.505981,
      "longitude": -9.065034,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996576,
      "ems": null
    },
    {
      "latitude": 38.506058,
      "longitude": -9.06427,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996576,
      "ems": null
    },
    {
      "latitude": 38.506149,
      "longitude": -9.062561,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996580,
      "ems": null
    },
    {
      "latitude": 38.50629,
      "longitude": -9.059509,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660996586,
      "ems": null
    },
    {
      "latitude": 38.506439,
      "longitude": -9.056556,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996592,
      "ems": null
    },
    {
      "latitude": 38.506615,
      "longitude": -9.05365,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996598,
      "ems": null
    },
    {
      "latitude": 38.506756,
      "longitude": -9.050842,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996604,
      "ems": null
    },
    {
      "latitude": 38.506847,
      "longitude": -9.047729,
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
      "heading": 89,
      "squawk": "1371",
      "timestamp": 1660996610,
      "ems": null
    },
    {
      "latitude": 38.506805,
      "longitude": -9.044315,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "squawk": "1371",
      "timestamp": 1660996616,
      "ems": null
    },
    {
      "latitude": 38.506802,
      "longitude": -9.041199,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996622,
      "ems": null
    },
    {
      "latitude": 38.506805,
      "longitude": -9.039718,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660996625,
      "ems": null
    },
    {
      "latitude": 38.506802,
      "longitude": -9.036499,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660996631,
      "ems": null
    },
    {
      "latitude": 38.506756,
      "longitude": -9.035034,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996634,
      "ems": null
    },
    {
      "latitude": 38.50666,
      "longitude": -9.033325,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 94,
      "squawk": "1371",
      "timestamp": 1660996637,
      "ems": null
    },
    {
      "latitude": 38.506531,
      "longitude": -9.031897,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 97,
      "squawk": "1371",
      "timestamp": 1660996640,
      "ems": null
    },
    {
      "latitude": 38.506348,
      "longitude": -9.030344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 97,
      "squawk": "1371",
      "timestamp": 1660996643,
      "ems": null
    },
    {
      "latitude": 38.50621,
      "longitude": -9.028672,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 96,
      "squawk": "1371",
      "timestamp": 1660996646,
      "ems": null
    },
    {
      "latitude": 38.506008,
      "longitude": -9.025269,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996652,
      "ems": null
    },
    {
      "latitude": 38.505871,
      "longitude": -9.022034,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660996658,
      "ems": null
    },
    {
      "latitude": 38.50589,
      "longitude": -9.01882,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996664,
      "ems": null
    },
    {
      "latitude": 38.506027,
      "longitude": -9.017029,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996667,
      "ems": null
    },
    {
      "latitude": 38.506241,
      "longitude": -9.015198,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660996670,
      "ems": null
    },
    {
      "latitude": 38.506382,
      "longitude": -9.013489,
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996673,
      "ems": null
    },
    {
      "latitude": 38.506531,
      "longitude": -9.011834,
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996676,
      "ems": null
    },
    {
      "latitude": 38.506622,
      "longitude": -9.010282,
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996679,
      "ems": null
    },
    {
      "latitude": 38.50676,
      "longitude": -9.008491,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996682,
      "ems": null
    },
    {
      "latitude": 38.506851,
      "longitude": -9.006998,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996685,
      "ems": null
    },
    {
      "latitude": 38.506989,
      "longitude": -9.005249,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996688,
      "ems": null
    },
    {
      "latitude": 38.507217,
      "longitude": -9.001743,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996694,
      "ems": null
    },
    {
      "latitude": 38.507446,
      "longitude": -8.998758,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996700,
      "ems": null
    },
    {
      "latitude": 38.507732,
      "longitude": -8.995605,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996706,
      "ems": null
    },
    {
      "latitude": 38.507904,
      "longitude": -8.992727,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996710,
      "ems": null
    },
    {
      "latitude": 38.50827,
      "longitude": -8.987175,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996720,
      "ems": null
    },
    {
      "latitude": 38.508453,
      "longitude": -8.98407,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660996726,
      "ems": null
    },
    {
      "latitude": 38.508545,
      "longitude": -8.97995,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660996733,
      "ems": null
    },
    {
      "latitude": 38.508709,
      "longitude": -8.976501,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996739,
      "ems": null
    },
    {
      "latitude": 38.50885,
      "longitude": -8.97345,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996745,
      "ems": null
    },
    {
      "latitude": 38.50914,
      "longitude": -8.970456,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660996751,
      "ems": null
    },
    {
      "latitude": 38.509361,
      "longitude": -8.967834,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996757,
      "ems": null
    },
    {
      "latitude": 38.509598,
      "longitude": -8.964784,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660996763,
      "ems": null
    },
    {
      "latitude": 38.509735,
      "longitude": -8.96167,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996769,
      "ems": null
    },
    {
      "latitude": 38.509968,
      "longitude": -8.958435,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996775,
      "ems": null
    },
    {
      "latitude": 38.510201,
      "longitude": -8.9552,
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996781,
      "ems": null
    },
    {
      "latitude": 38.510468,
      "longitude": -8.951947,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996787,
      "ems": null
    },
    {
      "latitude": 38.510742,
      "longitude": -8.948603,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "1371",
      "timestamp": 1660996793,
      "ems": null
    },
    {
      "latitude": 38.510944,
      "longitude": -8.94696,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 81,
      "squawk": "1371",
      "timestamp": 1660996796,
      "ems": null
    },
    {
      "latitude": 38.511337,
      "longitude": -8.943408,
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
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660996803,
      "ems": null
    },
    {
      "latitude": 38.511734,
      "longitude": -8.940063,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660996809,
      "ems": null
    },
    {
      "latitude": 38.512154,
      "longitude": -8.93689,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 81,
      "squawk": "1371",
      "timestamp": 1660996815,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -8.933167,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "1371",
      "timestamp": 1660996821,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -8.929914,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660996826,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -8.92478,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "1371",
      "timestamp": 1660996835,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.921197,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660996841,
      "ems": null
    },
    {
      "latitude": 38.514313,
      "longitude": -8.917674,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660996847,
      "ems": null
    },
    {
      "latitude": 38.514435,
      "longitude": -8.916138,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996850,
      "ems": null
    },
    {
      "latitude": 38.514576,
      "longitude": -8.914429,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996853,
      "ems": null
    },
    {
      "latitude": 38.514679,
      "longitude": -8.912719,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996856,
      "ems": null
    },
    {
      "latitude": 38.5149,
      "longitude": -8.909058,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996862,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -8.905613,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 84,
      "squawk": "1371",
      "timestamp": 1660996869,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -8.902283,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660996875,
      "ems": null
    },
    {
      "latitude": 38.515503,
      "longitude": -8.900359,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660996877,
      "ems": null
    },
    {
      "latitude": 38.515179,
      "longitude": -8.89856,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 107,
      "squawk": "1371",
      "timestamp": 1660996880,
      "ems": null
    },
    {
      "latitude": 38.51445,
      "longitude": -8.897135,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 129,
      "squawk": "1371",
      "timestamp": 1660996883,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -8.895813,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660996886,
      "ems": null
    },
    {
      "latitude": 38.512154,
      "longitude": -8.894897,
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660996889,
      "ems": null
    },
    {
      "latitude": 38.51099,
      "longitude": -8.894104,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660996892,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -8.893253,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660996896,
      "ems": null
    },
    {
      "latitude": 38.508591,
      "longitude": -8.892418,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996898,
      "ems": null
    },
    {
      "latitude": 38.507359,
      "longitude": -8.891602,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660996901,
      "ems": null
    },
    {
      "latitude": 38.506165,
      "longitude": -8.890746,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996904,
      "ems": null
    },
    {
      "latitude": 38.504986,
      "longitude": -8.890015,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996907,
      "ems": null
    },
    {
      "latitude": 38.503784,
      "longitude": -8.889194,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996911,
      "ems": null
    },
    {
      "latitude": 38.502659,
      "longitude": -8.888428,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996913,
      "ems": null
    },
    {
      "latitude": 38.501446,
      "longitude": -8.887634,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660996916,
      "ems": null
    },
    {
      "latitude": 38.499115,
      "longitude": -8.886029,
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660996923,
      "ems": null
    },
    {
      "latitude": 38.498016,
      "longitude": -8.885372,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660996926,
      "ems": null
    },
    {
      "latitude": 38.495544,
      "longitude": -8.883999,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660996931,
      "ems": null
    },
    {
      "latitude": 38.493069,
      "longitude": -8.882446,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "1371",
      "timestamp": 1660996938,
      "ems": null
    },
    {
      "latitude": 38.491928,
      "longitude": -8.881491,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660996940,
      "ems": null
    },
    {
      "latitude": 38.490509,
      "longitude": -8.880297,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660996944,
      "ems": null
    },
    {
      "latitude": 38.489456,
      "longitude": -8.879341,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996947,
      "ems": null
    },
    {
      "latitude": 38.488228,
      "longitude": -8.878235,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996950,
      "ems": null
    },
    {
      "latitude": 38.487247,
      "longitude": -8.87738,
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996953,
      "ems": null
    },
    {
      "latitude": 38.486069,
      "longitude": -8.876296,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996956,
      "ems": null
    },
    {
      "latitude": 38.48497,
      "longitude": -8.875281,
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660996959,
      "ems": null
    },
    {
      "latitude": 38.483734,
      "longitude": -8.874146,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660996962,
      "ems": null
    },
    {
      "latitude": 38.482594,
      "longitude": -8.873047,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660996965,
      "ems": null
    },
    {
      "latitude": 38.480301,
      "longitude": -8.870923,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660996971,
      "ems": null
    },
    {
      "latitude": 38.478218,
      "longitude": -8.868896,
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
      "heading": 142,
      "squawk": "1371",
      "timestamp": 1660996977,
      "ems": null
    },
    {
      "latitude": 38.475937,
      "longitude": -8.866638,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660996983,
      "ems": null
    },
    {
      "latitude": 38.473572,
      "longitude": -8.864713,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 148,
      "squawk": "1371",
      "timestamp": 1660996989,
      "ems": null
    },
    {
      "latitude": 38.472336,
      "longitude": -8.863757,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660996992,
      "ems": null
    },
    {
      "latitude": 38.471001,
      "longitude": -8.862793,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660996995,
      "ems": null
    },
    {
      "latitude": 38.469837,
      "longitude": -8.861938,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660996998,
      "ems": null
    },
    {
      "latitude": 38.468628,
      "longitude": -8.860962,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660997001,
      "ems": null
    },
    {
      "latitude": 38.467484,
      "longitude": -8.860056,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660997004,
      "ems": null
    },
    {
      "latitude": 38.466255,
      "longitude": -8.85907,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997007,
      "ems": null
    },
    {
      "latitude": 38.465057,
      "longitude": -8.858205,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997010,
      "ems": null
    },
    {
      "latitude": 38.463787,
      "longitude": -8.857361,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "1371",
      "timestamp": 1660997013,
      "ems": null
    },
    {
      "latitude": 38.462585,
      "longitude": -8.856473,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "1371",
      "timestamp": 1660997016,
      "ems": null
    },
    {
      "latitude": 38.460014,
      "longitude": -8.854553,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997022,
      "ems": null
    },
    {
      "latitude": 38.457687,
      "longitude": -8.852891,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997028,
      "ems": null
    },
    {
      "latitude": 38.455215,
      "longitude": -8.85104,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997034,
      "ems": null
    },
    {
      "latitude": 38.452789,
      "longitude": -8.849249,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997040,
      "ems": null
    },
    {
      "latitude": 38.450474,
      "longitude": -8.847473,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "1371",
      "timestamp": 1660997046,
      "ems": null
    },
    {
      "latitude": 38.448097,
      "longitude": -8.84552,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660997052,
      "ems": null
    },
    {
      "latitude": 38.445724,
      "longitude": -8.843567,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660997058,
      "ems": null
    },
    {
      "latitude": 38.443211,
      "longitude": -8.841614,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997064,
      "ems": null
    },
    {
      "latitude": 38.440659,
      "longitude": -8.839874,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997070,
      "ems": null
    },
    {
      "latitude": 38.438137,
      "longitude": -8.838074,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997077,
      "ems": null
    },
    {
      "latitude": 38.435669,
      "longitude": -8.836182,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997083,
      "ems": null
    },
    {
      "latitude": 38.433247,
      "longitude": -8.834351,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 148,
      "squawk": "1371",
      "timestamp": 1660997088,
      "ems": null
    },
    {
      "latitude": 38.430965,
      "longitude": -8.832581,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660997095,
      "ems": null
    },
    {
      "latitude": 38.429756,
      "longitude": -8.831604,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 147,
      "squawk": "1371",
      "timestamp": 1660997097,
      "ems": null
    },
    {
      "latitude": 38.427246,
      "longitude": -8.829783,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997103,
      "ems": null
    },
    {
      "latitude": 38.424728,
      "longitude": -8.828064,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997110,
      "ems": null
    },
    {
      "latitude": 38.422302,
      "longitude": -8.826321,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997116,
      "ems": null
    },
    {
      "latitude": 38.419701,
      "longitude": -8.824463,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997122,
      "ems": null
    },
    {
      "latitude": 38.417328,
      "longitude": -8.822693,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660997128,
      "ems": null
    },
    {
      "latitude": 38.414841,
      "longitude": -8.820887,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997134,
      "ems": null
    },
    {
      "latitude": 38.412392,
      "longitude": -8.819275,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660997140,
      "ems": null
    },
    {
      "latitude": 38.409714,
      "longitude": -8.817463,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660997146,
      "ems": null
    },
    {
      "latitude": 38.407333,
      "longitude": -8.815944,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "1371",
      "timestamp": 1660997152,
      "ems": null
    },
    {
      "latitude": 38.405968,
      "longitude": -8.815095,
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
      "heading": 154,
      "squawk": "1371",
      "timestamp": 1660997155,
      "ems": null
    },
    {
      "latitude": 38.404587,
      "longitude": -8.814307,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997158,
      "ems": null
    },
    {
      "latitude": 38.403397,
      "longitude": -8.813664,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997161,
      "ems": null
    },
    {
      "latitude": 38.402153,
      "longitude": -8.813005,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997164,
      "ems": null
    },
    {
      "latitude": 38.399731,
      "longitude": -8.811513,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997170,
      "ems": null
    },
    {
      "latitude": 38.397358,
      "longitude": -8.809841,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997176,
      "ems": null
    },
    {
      "latitude": 38.395123,
      "longitude": -8.808228,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997182,
      "ems": null
    },
    {
      "latitude": 38.392776,
      "longitude": -8.806594,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997188,
      "ems": null
    },
    {
      "latitude": 38.391537,
      "longitude": -8.805721,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997191,
      "ems": null
    },
    {
      "latitude": 38.390282,
      "longitude": -8.804885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997194,
      "ems": null
    },
    {
      "latitude": 38.387878,
      "longitude": -8.803205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660997200,
      "ems": null
    },
    {
      "latitude": 38.385345,
      "longitude": -8.801541,
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
      "heading": 153,
      "squawk": "1371",
      "timestamp": 1660997206,
      "ems": null
    },
    {
      "latitude": 38.382889,
      "longitude": -8.799991,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 153,
      "squawk": "1371",
      "timestamp": 1660997212,
      "ems": null
    },
    {
      "latitude": 38.380371,
      "longitude": -8.798354,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 153,
      "squawk": "1371",
      "timestamp": 1660997218,
      "ems": null
    },
    {
      "latitude": 38.377716,
      "longitude": -8.796777,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 155,
      "squawk": "1371",
      "timestamp": 1660997224,
      "ems": null
    },
    {
      "latitude": 38.37648,
      "longitude": -8.796075,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997227,
      "ems": null
    },
    {
      "latitude": 38.3741,
      "longitude": -8.794847,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660997233,
      "ems": null
    },
    {
      "latitude": 38.371613,
      "longitude": -8.793541,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997239,
      "ems": null
    },
    {
      "latitude": 38.369019,
      "longitude": -8.792101,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660997245,
      "ems": null
    },
    {
      "latitude": 38.36673,
      "longitude": -8.790991,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660997251,
      "ems": null
    },
    {
      "latitude": 38.365421,
      "longitude": -8.790436,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660997254,
      "ems": null
    },
    {
      "latitude": 38.364029,
      "longitude": -8.789939,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660997257,
      "ems": null
    },
    {
      "latitude": 38.361465,
      "longitude": -8.788704,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "1371",
      "timestamp": 1660997263,
      "ems": null
    },
    {
      "latitude": 38.359043,
      "longitude": -8.787211,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 153,
      "squawk": "1371",
      "timestamp": 1660997269,
      "ems": null
    },
    {
      "latitude": 38.356575,
      "longitude": -8.78554,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997275,
      "ems": null
    },
    {
      "latitude": 38.355423,
      "longitude": -8.784739,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997278,
      "ems": null
    },
    {
      "latitude": 38.354233,
      "longitude": -8.783861,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660997281,
      "ems": null
    },
    {
      "latitude": 38.353039,
      "longitude": -8.783032,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997284,
      "ems": null
    },
    {
      "latitude": 38.351898,
      "longitude": -8.782226,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "1371",
      "timestamp": 1660997287,
      "ems": null
    },
    {
      "latitude": 38.350758,
      "longitude": -8.78148,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 152,
      "squawk": "1371",
      "timestamp": 1660997290,
      "ems": null
    },
    {
      "latitude": 38.348431,
      "longitude": -8.779867,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660997296,
      "ems": null
    },
    {
      "latitude": 38.346176,
      "longitude": -8.778134,
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660997302,
      "ems": null
    },
    {
      "latitude": 38.345078,
      "longitude": -8.777181,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660997305,
      "ems": null
    },
    {
      "latitude": 38.344162,
      "longitude": -8.776206,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660997308,
      "ems": null
    },
    {
      "latitude": 38.343246,
      "longitude": -8.775096,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 134,
      "squawk": "1371",
      "timestamp": 1660997311,
      "ems": null
    },
    {
      "latitude": 38.342377,
      "longitude": -8.773927,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 130,
      "squawk": "1371",
      "timestamp": 1660997314,
      "ems": null
    },
    {
      "latitude": 38.341541,
      "longitude": -8.772583,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660997317,
      "ems": null
    },
    {
      "latitude": 38.340729,
      "longitude": -8.771297,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660997320,
      "ems": null
    },
    {
      "latitude": 38.340088,
      "longitude": -8.770246,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660997323,
      "ems": null
    },
    {
      "latitude": 38.33931,
      "longitude": -8.769018,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 129,
      "squawk": "1371",
      "timestamp": 1660997326,
      "ems": null
    },
    {
      "latitude": 38.338467,
      "longitude": -8.767747,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 129,
      "squawk": "1371",
      "timestamp": 1660997329,
      "ems": null
    },
    {
      "latitude": 38.337662,
      "longitude": -8.766447,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660997332,
      "ems": null
    },
    {
      "latitude": 38.336929,
      "longitude": -8.765278,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660997335,
      "ems": null
    },
    {
      "latitude": 38.336151,
      "longitude": -8.763992,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 127,
      "squawk": "1371",
      "timestamp": 1660997338,
      "ems": null
    },
    {
      "latitude": 38.33535,
      "longitude": -8.762671,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 124,
      "squawk": "1371",
      "timestamp": 1660997341,
      "ems": null
    },
    {
      "latitude": 38.334652,
      "longitude": -8.761238,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 121,
      "squawk": "1371",
      "timestamp": 1660997344,
      "ems": null
    },
    {
      "latitude": 38.334045,
      "longitude": -8.759865,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "1371",
      "timestamp": 1660997347,
      "ems": null
    },
    {
      "latitude": 38.333534,
      "longitude": -8.758671,
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
      "heading": 117,
      "squawk": "1371",
      "timestamp": 1660997350,
      "ems": null
    },
    {
      "latitude": 38.332901,
      "longitude": -8.757038,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "1371",
      "timestamp": 1660997353,
      "ems": null
    },
    {
      "latitude": 38.332371,
      "longitude": -8.755686,
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
      "heading": 115,
      "squawk": "1371",
      "timestamp": 1660997357,
      "ems": null
    },
    {
      "latitude": 38.331894,
      "longitude": -8.754351,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 113,
      "squawk": "1371",
      "timestamp": 1660997359,
      "ems": null
    },
    {
      "latitude": 38.33139,
      "longitude": -8.75282,
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
      "heading": 111,
      "squawk": "1371",
      "timestamp": 1660997362,
      "ems": null
    },
    {
      "latitude": 38.33102,
      "longitude": -8.751327,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 106,
      "squawk": "1371",
      "timestamp": 1660997365,
      "ems": null
    },
    {
      "latitude": 38.330795,
      "longitude": -8.74985,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 96,
      "squawk": "1371",
      "timestamp": 1660997368,
      "ems": null
    },
    {
      "latitude": 38.330788,
      "longitude": -8.748162,
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
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660997372,
      "ems": null
    },
    {
      "latitude": 38.330978,
      "longitude": -8.74652,
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997374,
      "ems": null
    },
    {
      "latitude": 38.331345,
      "longitude": -8.745059,
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997377,
      "ems": null
    },
    {
      "latitude": 38.331848,
      "longitude": -8.743364,
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997380,
      "ems": null
    },
    {
      "latitude": 38.332371,
      "longitude": -8.741774,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660997384,
      "ems": null
    },
    {
      "latitude": 38.332836,
      "longitude": -8.7404,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997386,
      "ems": null
    },
    {
      "latitude": 38.333359,
      "longitude": -8.738806,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997389,
      "ems": null
    },
    {
      "latitude": 38.333862,
      "longitude": -8.737169,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997392,
      "ems": null
    },
    {
      "latitude": 38.334232,
      "longitude": -8.735863,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997395,
      "ems": null
    },
    {
      "latitude": 38.334602,
      "longitude": -8.734609,
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997398,
      "ems": null
    },
    {
      "latitude": 38.33519,
      "longitude": -8.732612,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997401,
      "ems": null
    },
    {
      "latitude": 38.335674,
      "longitude": -8.731026,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997404,
      "ems": null
    },
    {
      "latitude": 38.336933,
      "longitude": -8.726966,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997413,
      "ems": null
    },
    {
      "latitude": 38.337296,
      "longitude": -8.725599,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997416,
      "ems": null
    },
    {
      "latitude": 38.337444,
      "longitude": -8.724936,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997418,
      "ems": null
    },
    {
      "latitude": 38.338211,
      "longitude": -8.721917,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997424,
      "ems": null
    },
    {
      "latitude": 38.338516,
      "longitude": -8.720517,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997428,
      "ems": null
    },
    {
      "latitude": 38.338715,
      "longitude": -8.71958,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997430,
      "ems": null
    },
    {
      "latitude": 38.339027,
      "longitude": -8.718069,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997434,
      "ems": null
    },
    {
      "latitude": 38.339264,
      "longitude": -8.716891,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660997436,
      "ems": null
    },
    {
      "latitude": 38.339447,
      "longitude": -8.71586,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997439,
      "ems": null
    },
    {
      "latitude": 38.339722,
      "longitude": -8.714145,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997443,
      "ems": null
    },
    {
      "latitude": 38.339863,
      "longitude": -8.713114,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660997446,
      "ems": null
    },
    {
      "latitude": 38.340004,
      "longitude": -8.711979,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660997449,
      "ems": null
    },
    {
      "latitude": 38.340134,
      "longitude": -8.710755,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660997452,
      "ems": null
    },
    {
      "latitude": 38.340237,
      "longitude": -8.709591,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660997455,
      "ems": null
    },
    {
      "latitude": 38.340424,
      "longitude": -8.708337,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997458,
      "ems": null
    },
    {
      "latitude": 38.340591,
      "longitude": -8.70725,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997461,
      "ems": null
    },
    {
      "latitude": 38.340656,
      "longitude": -8.706903,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997462,
      "ems": null
    },
    {
      "latitude": 38.340889,
      "longitude": -8.704396,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660997468,
      "ems": null
    },
    {
      "latitude": 38.340981,
      "longitude": -8.702724,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660997472,
      "ems": null
    },
    {
      "latitude": 38.34103,
      "longitude": -8.70141,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660997475,
      "ems": null
    },
    {
      "latitude": 38.341049,
      "longitude": -8.700178,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 87,
      "squawk": "1371",
      "timestamp": 1660997478,
      "ems": null
    },
    {
      "latitude": 38.341076,
      "longitude": -8.698843,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660997481,
      "ems": null
    },
    {
      "latitude": 38.341122,
      "longitude": -8.697589,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 89,
      "squawk": "1371",
      "timestamp": 1660997484,
      "ems": null
    },
    {
      "latitude": 38.341122,
      "longitude": -8.696336,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660997487,
      "ems": null
    },
    {
      "latitude": 38.341095,
      "longitude": -8.694978,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660997489,
      "ems": null
    },
    {
      "latitude": 38.341095,
      "longitude": -8.693517,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660997492,
      "ems": null
    },
    {
      "latitude": 38.341095,
      "longitude": -8.690477,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660997499,
      "ems": null
    },
    {
      "latitude": 38.34103,
      "longitude": -8.686066,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 91,
      "squawk": "1371",
      "timestamp": 1660997508,
      "ems": null
    },
    {
      "latitude": 38.340935,
      "longitude": -8.683498,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 94,
      "squawk": "1371",
      "timestamp": 1660997514,
      "ems": null
    },
    {
      "latitude": 38.340775,
      "longitude": -8.681245,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 95,
      "squawk": "1371",
      "timestamp": 1660997517,
      "ems": null
    },
    {
      "latitude": 38.340637,
      "longitude": -8.678205,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660997523,
      "ems": null
    },
    {
      "latitude": 38.340775,
      "longitude": -8.676686,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660997526,
      "ems": null
    },
    {
      "latitude": 38.34103,
      "longitude": -8.675139,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997529,
      "ems": null
    },
    {
      "latitude": 38.341263,
      "longitude": -8.673646,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660997532,
      "ems": null
    },
    {
      "latitude": 38.341541,
      "longitude": -8.672094,
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997535,
      "ems": null
    },
    {
      "latitude": 38.341774,
      "longitude": -8.670542,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660997538,
      "ems": null
    },
    {
      "latitude": 38.341961,
      "longitude": -8.669049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "1371",
      "timestamp": 1660997541,
      "ems": null
    },
    {
      "latitude": 38.342102,
      "longitude": -8.667278,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660997544,
      "ems": null
    },
    {
      "latitude": 38.342331,
      "longitude": -8.665934,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660997547,
      "ems": null
    },
    {
      "latitude": 38.342743,
      "longitude": -8.664356,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997550,
      "ems": null
    },
    {
      "latitude": 38.343155,
      "longitude": -8.662953,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997552,
      "ems": null
    },
    {
      "latitude": 38.343636,
      "longitude": -8.661526,
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
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660997556,
      "ems": null
    },
    {
      "latitude": 38.344193,
      "longitude": -8.659973,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660997559,
      "ems": null
    },
    {
      "latitude": 38.344707,
      "longitude": -8.658481,
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997561,
      "ems": null
    },
    {
      "latitude": 38.345261,
      "longitude": -8.656935,
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997564,
      "ems": null
    },
    {
      "latitude": 38.34581,
      "longitude": -8.655415,
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997568,
      "ems": null
    },
    {
      "latitude": 38.346382,
      "longitude": -8.653823,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997571,
      "ems": null
    },
    {
      "latitude": 38.346863,
      "longitude": -8.652434,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997574,
      "ems": null
    },
    {
      "latitude": 38.347404,
      "longitude": -8.651017,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660997577,
      "ems": null
    },
    {
      "latitude": 38.348053,
      "longitude": -8.649338,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660997580,
      "ems": null
    },
    {
      "latitude": 38.349152,
      "longitude": -8.646474,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660997586,
      "ems": null
    },
    {
      "latitude": 38.350204,
      "longitude": -8.643903,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660997592,
      "ems": null
    },
    {
      "latitude": 38.351501,
      "longitude": -8.640926,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 59,
      "squawk": "1371",
      "timestamp": 1660997598,
      "ems": null
    },
    {
      "latitude": 38.352219,
      "longitude": -8.639462,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 58,
      "squawk": "1371",
      "timestamp": 1660997601,
      "ems": null
    },
    {
      "latitude": 38.352859,
      "longitude": -8.638059,
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
      "heading": 60,
      "squawk": "1371",
      "timestamp": 1660997604,
      "ems": null
    },
    {
      "latitude": 38.354111,
      "longitude": -8.635135,
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
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660997610,
      "ems": null
    },
    {
      "latitude": 38.355228,
      "longitude": -8.632388,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660997616,
      "ems": null
    },
    {
      "latitude": 38.356384,
      "longitude": -8.62906,
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997622,
      "ems": null
    },
    {
      "latitude": 38.356857,
      "longitude": -8.627551,
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997625,
      "ems": null
    },
    {
      "latitude": 38.357414,
      "longitude": -8.62582,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997628,
      "ems": null
    },
    {
      "latitude": 38.357895,
      "longitude": -8.624209,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997631,
      "ems": null
    },
    {
      "latitude": 38.358353,
      "longitude": -8.622631,
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997634,
      "ems": null
    },
    {
      "latitude": 38.358765,
      "longitude": -8.621112,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997637,
      "ems": null
    },
    {
      "latitude": 38.359184,
      "longitude": -8.61973,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997640,
      "ems": null
    },
    {
      "latitude": 38.359634,
      "longitude": -8.618014,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997643,
      "ems": null
    },
    {
      "latitude": 38.360439,
      "longitude": -8.614953,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997649,
      "ems": null
    },
    {
      "latitude": 38.360825,
      "longitude": -8.613457,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997652,
      "ems": null
    },
    {
      "latitude": 38.361191,
      "longitude": -8.611996,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997655,
      "ems": null
    },
    {
      "latitude": 38.361931,
      "longitude": -8.608982,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997661,
      "ems": null
    },
    {
      "latitude": 38.362839,
      "longitude": -8.60475,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997669,
      "ems": null
    },
    {
      "latitude": 38.363514,
      "longitude": -8.601698,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997675,
      "ems": null
    },
    {
      "latitude": 38.364166,
      "longitude": -8.598555,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997681,
      "ems": null
    },
    {
      "latitude": 38.364723,
      "longitude": -8.595428,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660997687,
      "ems": null
    },
    {
      "latitude": 38.365311,
      "longitude": -8.592185,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997693,
      "ems": null
    },
    {
      "latitude": 38.365513,
      "longitude": -8.590891,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997696,
      "ems": null
    },
    {
      "latitude": 38.366119,
      "longitude": -8.587427,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997702,
      "ems": null
    },
    {
      "latitude": 38.366772,
      "longitude": -8.584323,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660997708,
      "ems": null
    },
    {
      "latitude": 38.36747,
      "longitude": -8.581038,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997714,
      "ems": null
    },
    {
      "latitude": 38.368195,
      "longitude": -8.578101,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997720,
      "ems": null
    },
    {
      "latitude": 38.368515,
      "longitude": -8.576757,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997723,
      "ems": null
    },
    {
      "latitude": 38.368881,
      "longitude": -8.57518,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997726,
      "ems": null
    },
    {
      "latitude": 38.369614,
      "longitude": -8.572083,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997731,
      "ems": null
    },
    {
      "latitude": 38.370392,
      "longitude": -8.568693,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997738,
      "ems": null
    },
    {
      "latitude": 38.371193,
      "longitude": -8.565694,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997744,
      "ems": null
    },
    {
      "latitude": 38.372032,
      "longitude": -8.562828,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997750,
      "ems": null
    },
    {
      "latitude": 38.373104,
      "longitude": -8.559424,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997756,
      "ems": null
    },
    {
      "latitude": 38.373962,
      "longitude": -8.556363,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997762,
      "ems": null
    },
    {
      "latitude": 38.374557,
      "longitude": -8.553557,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997768,
      "ems": null
    },
    {
      "latitude": 38.375153,
      "longitude": -8.550528,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660997774,
      "ems": null
    },
    {
      "latitude": 38.375431,
      "longitude": -8.548856,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997777,
      "ems": null
    },
    {
      "latitude": 38.375664,
      "longitude": -8.547244,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997780,
      "ems": null
    },
    {
      "latitude": 38.37571,
      "longitude": -8.546706,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660997781,
      "ems": null
    },
    {
      "latitude": 38.375988,
      "longitude": -8.545034,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660997784,
      "ems": null
    },
    {
      "latitude": 38.376709,
      "longitude": -8.54187,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997790,
      "ems": null
    },
    {
      "latitude": 38.377106,
      "longitude": -8.540616,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997793,
      "ems": null
    },
    {
      "latitude": 38.377579,
      "longitude": -8.538948,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997796,
      "ems": null
    },
    {
      "latitude": 38.377945,
      "longitude": -8.53769,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997799,
      "ems": null
    },
    {
      "latitude": 38.378448,
      "longitude": -8.53591,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997802,
      "ems": null
    },
    {
      "latitude": 38.378597,
      "longitude": -8.535362,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997803,
      "ems": null
    },
    {
      "latitude": 38.379089,
      "longitude": -8.53363,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997807,
      "ems": null
    },
    {
      "latitude": 38.379593,
      "longitude": -8.531994,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997810,
      "ems": null
    },
    {
      "latitude": 38.380005,
      "longitude": -8.530533,
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997813,
      "ems": null
    },
    {
      "latitude": 38.381248,
      "longitude": -8.526764,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660997821,
      "ems": null
    },
    {
      "latitude": 38.382294,
      "longitude": -8.523638,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997827,
      "ems": null
    },
    {
      "latitude": 38.38316,
      "longitude": -8.520555,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997833,
      "ems": null
    },
    {
      "latitude": 38.383942,
      "longitude": -8.517794,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997839,
      "ems": null
    },
    {
      "latitude": 38.384903,
      "longitude": -8.514404,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997845,
      "ems": null
    },
    {
      "latitude": 38.38591,
      "longitude": -8.511249,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997851,
      "ems": null
    },
    {
      "latitude": 38.386826,
      "longitude": -8.50821,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997857,
      "ems": null
    },
    {
      "latitude": 38.387535,
      "longitude": -8.505328,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997863,
      "ems": null
    },
    {
      "latitude": 38.387814,
      "longitude": -8.503896,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660997866,
      "ems": null
    },
    {
      "latitude": 38.388016,
      "longitude": -8.502542,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660997869,
      "ems": null
    },
    {
      "latitude": 38.388245,
      "longitude": -8.500789,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660997872,
      "ems": null
    },
    {
      "latitude": 38.388466,
      "longitude": -8.499179,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660997875,
      "ems": null
    },
    {
      "latitude": 38.388744,
      "longitude": -8.497686,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997878,
      "ems": null
    },
    {
      "latitude": 38.389069,
      "longitude": -8.49623,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997881,
      "ems": null
    },
    {
      "latitude": 38.389435,
      "longitude": -8.494711,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997884,
      "ems": null
    },
    {
      "latitude": 38.390076,
      "longitude": -8.491964,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997890,
      "ems": null
    },
    {
      "latitude": 38.390854,
      "longitude": -8.488691,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997896,
      "ems": null
    },
    {
      "latitude": 38.391174,
      "longitude": -8.487348,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997899,
      "ems": null
    },
    {
      "latitude": 38.391541,
      "longitude": -8.485653,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660997902,
      "ems": null
    },
    {
      "latitude": 38.392227,
      "longitude": -8.482615,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997908,
      "ems": null
    },
    {
      "latitude": 38.392731,
      "longitude": -8.479692,
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660997914,
      "ems": null
    },
    {
      "latitude": 38.393463,
      "longitude": -8.476595,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997921,
      "ems": null
    },
    {
      "latitude": 38.39447,
      "longitude": -8.472609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997928,
      "ems": null
    },
    {
      "latitude": 38.395157,
      "longitude": -8.469583,
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660997934,
      "ems": null
    },
    {
      "latitude": 38.395775,
      "longitude": -8.466458,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660997940,
      "ems": null
    },
    {
      "latitude": 38.396393,
      "longitude": -8.463622,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660997946,
      "ems": null
    },
    {
      "latitude": 38.397171,
      "longitude": -8.460525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660997952,
      "ems": null
    },
    {
      "latitude": 38.397995,
      "longitude": -8.457661,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660997958,
      "ems": null
    },
    {
      "latitude": 38.398754,
      "longitude": -8.454994,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997964,
      "ems": null
    },
    {
      "latitude": 38.399174,
      "longitude": -8.453443,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660997968,
      "ems": null
    },
    {
      "latitude": 38.399643,
      "longitude": -8.451934,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660997971,
      "ems": null
    },
    {
      "latitude": 38.400055,
      "longitude": -8.450576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660997974,
      "ems": null
    },
    {
      "latitude": 38.400925,
      "longitude": -8.447844,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997979,
      "ems": null
    },
    {
      "latitude": 38.401474,
      "longitude": -8.446441,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660997983,
      "ems": null
    },
    {
      "latitude": 38.401978,
      "longitude": -8.445155,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 63,
      "squawk": "1371",
      "timestamp": 1660997985,
      "ems": null
    },
    {
      "latitude": 38.403442,
      "longitude": -8.441007,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660997994,
      "ems": null
    },
    {
      "latitude": 38.403992,
      "longitude": -8.439428,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "squawk": "1371",
      "timestamp": 1660997998,
      "ems": null
    },
    {
      "latitude": 38.405037,
      "longitude": -8.436067,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998003,
      "ems": null
    },
    {
      "latitude": 38.405914,
      "longitude": -8.432883,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998010,
      "ems": null
    },
    {
      "latitude": 38.4062,
      "longitude": -8.43141,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998013,
      "ems": null
    },
    {
      "latitude": 38.406555,
      "longitude": -8.429845,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998016,
      "ems": null
    },
    {
      "latitude": 38.406967,
      "longitude": -8.427975,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998018,
      "ems": null
    },
    {
      "latitude": 38.407288,
      "longitude": -8.426514,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998021,
      "ems": null
    },
    {
      "latitude": 38.407784,
      "longitude": -8.424782,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998025,
      "ems": null
    },
    {
      "latitude": 38.408157,
      "longitude": -8.4233,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998027,
      "ems": null
    },
    {
      "latitude": 38.409119,
      "longitude": -8.420027,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998034,
      "ems": null
    },
    {
      "latitude": 38.409973,
      "longitude": -8.416721,
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998040,
      "ems": null
    },
    {
      "latitude": 38.410675,
      "longitude": -8.414008,
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998046,
      "ems": null
    },
    {
      "latitude": 38.411739,
      "longitude": -8.409139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998053,
      "ems": null
    },
    {
      "latitude": 38.412022,
      "longitude": -8.407646,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998056,
      "ems": null
    },
    {
      "latitude": 38.412346,
      "longitude": -8.405735,
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660998059,
      "ems": null
    },
    {
      "latitude": 38.412579,
      "longitude": -8.404114,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "squawk": "1371",
      "timestamp": 1660998062,
      "ems": null
    },
    {
      "latitude": 38.412811,
      "longitude": -8.40271,
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660998065,
      "ems": null
    },
    {
      "latitude": 38.41309,
      "longitude": -8.400635,
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660998069,
      "ems": null
    },
    {
      "latitude": 38.413231,
      "longitude": -8.399414,
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660998072,
      "ems": null
    },
    {
      "latitude": 38.413509,
      "longitude": -8.397339,
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660998075,
      "ems": null
    },
    {
      "latitude": 38.413742,
      "longitude": -8.395764,
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660998078,
      "ems": null
    },
    {
      "latitude": 38.414253,
      "longitude": -8.392395,
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660998084,
      "ems": null
    },
    {
      "latitude": 38.414627,
      "longitude": -8.389221,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 81,
      "squawk": "1371",
      "timestamp": 1660998090,
      "ems": null
    },
    {
      "latitude": 38.415207,
      "longitude": -8.386091,
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998096,
      "ems": null
    },
    {
      "latitude": 38.415573,
      "longitude": -8.384658,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998099,
      "ems": null
    },
    {
      "latitude": 38.415939,
      "longitude": -8.383165,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998102,
      "ems": null
    },
    {
      "latitude": 38.41621,
      "longitude": -8.382141,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998104,
      "ems": null
    },
    {
      "latitude": 38.41663,
      "longitude": -8.380432,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998108,
      "ems": null
    },
    {
      "latitude": 38.417,
      "longitude": -8.378845,
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998111,
      "ems": null
    },
    {
      "latitude": 38.417404,
      "longitude": -8.377314,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998114,
      "ems": null
    },
    {
      "latitude": 38.417679,
      "longitude": -8.376359,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998116,
      "ems": null
    },
    {
      "latitude": 38.418137,
      "longitude": -8.374448,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998120,
      "ems": null
    },
    {
      "latitude": 38.41864,
      "longitude": -8.371701,
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998126,
      "ems": null
    },
    {
      "latitude": 38.419235,
      "longitude": -8.368716,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998132,
      "ems": null
    },
    {
      "latitude": 38.419842,
      "longitude": -8.365723,
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998138,
      "ems": null
    },
    {
      "latitude": 38.420563,
      "longitude": -8.362566,
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998144,
      "ems": null
    },
    {
      "latitude": 38.421284,
      "longitude": -8.359741,
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998150,
      "ems": null
    },
    {
      "latitude": 38.421703,
      "longitude": -8.358276,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998153,
      "ems": null
    },
    {
      "latitude": 38.422119,
      "longitude": -8.356714,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998156,
      "ems": null
    },
    {
      "latitude": 38.422493,
      "longitude": -8.355164,
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998159,
      "ems": null
    },
    {
      "latitude": 38.422897,
      "longitude": -8.353729,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998162,
      "ems": null
    },
    {
      "latitude": 38.423676,
      "longitude": -8.350744,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998168,
      "ems": null
    },
    {
      "latitude": 38.424404,
      "longitude": -8.3479,
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998174,
      "ems": null
    },
    {
      "latitude": 38.425049,
      "longitude": -8.344953,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998180,
      "ems": null
    },
    {
      "latitude": 38.425369,
      "longitude": -8.343519,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998183,
      "ems": null
    },
    {
      "latitude": 38.42601,
      "longitude": -8.340593,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998189,
      "ems": null
    },
    {
      "latitude": 38.426743,
      "longitude": -8.337787,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998194,
      "ems": null
    },
    {
      "latitude": 38.427155,
      "longitude": -8.336534,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "squawk": "1371",
      "timestamp": 1660998198,
      "ems": null
    },
    {
      "latitude": 38.42775,
      "longitude": -8.334921,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998201,
      "ems": null
    },
    {
      "latitude": 38.428268,
      "longitude": -8.333618,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 63,
      "squawk": "1371",
      "timestamp": 1660998204,
      "ems": null
    },
    {
      "latitude": 38.42878,
      "longitude": -8.332275,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998207,
      "ems": null
    },
    {
      "latitude": 38.429443,
      "longitude": -8.330742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 61,
      "squawk": "1371",
      "timestamp": 1660998210,
      "ems": null
    },
    {
      "latitude": 38.430035,
      "longitude": -8.329346,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 61,
      "squawk": "1371",
      "timestamp": 1660998213,
      "ems": null
    },
    {
      "latitude": 38.430405,
      "longitude": -8.328532,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 59,
      "squawk": "1371",
      "timestamp": 1660998216,
      "ems": null
    },
    {
      "latitude": 38.431366,
      "longitude": -8.326502,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 58,
      "squawk": "1371",
      "timestamp": 1660998219,
      "ems": null
    },
    {
      "latitude": 38.431946,
      "longitude": -8.325256,
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
      "heading": 59,
      "squawk": "1371",
      "timestamp": 1660998222,
      "ems": null
    },
    {
      "latitude": 38.432556,
      "longitude": -8.323995,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 59,
      "squawk": "1371",
      "timestamp": 1660998225,
      "ems": null
    },
    {
      "latitude": 38.433342,
      "longitude": -8.322327,
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
      "heading": 58,
      "squawk": "1371",
      "timestamp": 1660998228,
      "ems": null
    },
    {
      "latitude": 38.434067,
      "longitude": -8.320889,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 56,
      "squawk": "1371",
      "timestamp": 1660998231,
      "ems": null
    },
    {
      "latitude": 38.434784,
      "longitude": -8.319519,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 55,
      "squawk": "1371",
      "timestamp": 1660998234,
      "ems": null
    },
    {
      "latitude": 38.435528,
      "longitude": -8.318237,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 53,
      "squawk": "1371",
      "timestamp": 1660998237,
      "ems": null
    },
    {
      "latitude": 38.436367,
      "longitude": -8.316833,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 53,
      "squawk": "1371",
      "timestamp": 1660998240,
      "ems": null
    },
    {
      "latitude": 38.436859,
      "longitude": -8.315934,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 52,
      "squawk": "1371",
      "timestamp": 1660998242,
      "ems": null
    },
    {
      "latitude": 38.437729,
      "longitude": -8.314561,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 51,
      "squawk": "1371",
      "timestamp": 1660998246,
      "ems": null
    },
    {
      "latitude": 38.438782,
      "longitude": -8.312889,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "1371",
      "timestamp": 1660998249,
      "ems": null
    },
    {
      "latitude": 38.439743,
      "longitude": -8.311396,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 49,
      "squawk": "1371",
      "timestamp": 1660998251,
      "ems": null
    },
    {
      "latitude": 38.440567,
      "longitude": -8.310202,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 49,
      "squawk": "1371",
      "timestamp": 1660998254,
      "ems": null
    },
    {
      "latitude": 38.441483,
      "longitude": -8.308888,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 47,
      "squawk": "1371",
      "timestamp": 1660998258,
      "ems": null
    },
    {
      "latitude": 38.442444,
      "longitude": -8.307574,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 46,
      "squawk": "1371",
      "timestamp": 1660998260,
      "ems": null
    },
    {
      "latitude": 38.443497,
      "longitude": -8.306142,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 47,
      "squawk": "1371",
      "timestamp": 1660998264,
      "ems": null
    },
    {
      "latitude": 38.445282,
      "longitude": -8.303216,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 55,
      "squawk": "1371",
      "timestamp": 1660998269,
      "ems": null
    },
    {
      "latitude": 38.445957,
      "longitude": -8.301941,
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
      "heading": 57,
      "squawk": "1371",
      "timestamp": 1660998273,
      "ems": null
    },
    {
      "latitude": 38.446793,
      "longitude": -8.300111,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 61,
      "squawk": "1371",
      "timestamp": 1660998275,
      "ems": null
    },
    {
      "latitude": 38.44693,
      "longitude": -8.299753,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 56,
      "squawk": "1371",
      "timestamp": 1660998276,
      "ems": null
    },
    {
      "latitude": 38.447399,
      "longitude": -8.298462,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998279,
      "ems": null
    },
    {
      "latitude": 38.448051,
      "longitude": -8.296509,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998282,
      "ems": null
    },
    {
      "latitude": 38.448612,
      "longitude": -8.2948,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998285,
      "ems": null
    },
    {
      "latitude": 38.449265,
      "longitude": -8.292647,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998289,
      "ems": null
    },
    {
      "latitude": 38.449768,
      "longitude": -8.290976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998291,
      "ems": null
    },
    {
      "latitude": 38.450272,
      "longitude": -8.289245,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998294,
      "ems": null
    },
    {
      "latitude": 38.450546,
      "longitude": -8.288408,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998297,
      "ems": null
    },
    {
      "latitude": 38.451279,
      "longitude": -8.28596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998301,
      "ems": null
    },
    {
      "latitude": 38.45192,
      "longitude": -8.283572,
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998305,
      "ems": null
    },
    {
      "latitude": 38.452332,
      "longitude": -8.28208,
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998308,
      "ems": null
    },
    {
      "latitude": 38.452744,
      "longitude": -8.280348,
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998311,
      "ems": null
    },
    {
      "latitude": 38.453156,
      "longitude": -8.278735,
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998314,
      "ems": null
    },
    {
      "latitude": 38.453934,
      "longitude": -8.27581,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998320,
      "ems": null
    },
    {
      "latitude": 38.454712,
      "longitude": -8.272645,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998326,
      "ems": null
    },
    {
      "latitude": 38.455547,
      "longitude": -8.269226,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998332,
      "ems": null
    },
    {
      "latitude": 38.456387,
      "longitude": -8.266113,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998338,
      "ems": null
    },
    {
      "latitude": 38.457268,
      "longitude": -8.262756,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998344,
      "ems": null
    },
    {
      "latitude": 38.458054,
      "longitude": -8.259509,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998350,
      "ems": null
    },
    {
      "latitude": 38.458851,
      "longitude": -8.256226,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998356,
      "ems": null
    },
    {
      "latitude": 38.459564,
      "longitude": -8.253181,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998362,
      "ems": null
    },
    {
      "latitude": 38.460388,
      "longitude": -8.249837,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998368,
      "ems": null
    },
    {
      "latitude": 38.461227,
      "longitude": -8.246826,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998374,
      "ems": null
    },
    {
      "latitude": 38.46199,
      "longitude": -8.243985,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998380,
      "ems": null
    },
    {
      "latitude": 38.462769,
      "longitude": -8.240761,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998386,
      "ems": null
    },
    {
      "latitude": 38.463638,
      "longitude": -8.237477,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998392,
      "ems": null
    },
    {
      "latitude": 38.464439,
      "longitude": -8.234131,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998398,
      "ems": null
    },
    {
      "latitude": 38.46524,
      "longitude": -8.230909,
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998404,
      "ems": null
    },
    {
      "latitude": 38.466156,
      "longitude": -8.227804,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998410,
      "ems": null
    },
    {
      "latitude": 38.467045,
      "longitude": -8.224426,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998416,
      "ems": null
    },
    {
      "latitude": 38.467697,
      "longitude": -8.221741,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998421,
      "ems": null
    },
    {
      "latitude": 38.468536,
      "longitude": -8.218079,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998428,
      "ems": null
    },
    {
      "latitude": 38.46936,
      "longitude": -8.214549,
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998434,
      "ems": null
    },
    {
      "latitude": 38.469772,
      "longitude": -8.212698,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998437,
      "ems": null
    },
    {
      "latitude": 38.470139,
      "longitude": -8.210728,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998440,
      "ems": null
    },
    {
      "latitude": 38.470398,
      "longitude": -8.209351,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998443,
      "ems": null
    },
    {
      "latitude": 38.471008,
      "longitude": -8.205892,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998449,
      "ems": null
    },
    {
      "latitude": 38.471695,
      "longitude": -8.203085,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998455,
      "ems": null
    },
    {
      "latitude": 38.472584,
      "longitude": -8.199707,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998461,
      "ems": null
    },
    {
      "latitude": 38.473389,
      "longitude": -8.196039,
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998468,
      "ems": null
    },
    {
      "latitude": 38.473934,
      "longitude": -8.192505,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 80,
      "squawk": "1371",
      "timestamp": 1660998474,
      "ems": null
    },
    {
      "latitude": 38.474167,
      "longitude": -8.190918,
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
      "heading": 79,
      "squawk": "1371",
      "timestamp": 1660998476,
      "ems": null
    },
    {
      "latitude": 38.474396,
      "longitude": -8.189531,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998480,
      "ems": null
    },
    {
      "latitude": 38.475037,
      "longitude": -8.186008,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998485,
      "ems": null
    },
    {
      "latitude": 38.475357,
      "longitude": -8.184397,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998489,
      "ems": null
    },
    {
      "latitude": 38.476028,
      "longitude": -8.180664,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660998496,
      "ems": null
    },
    {
      "latitude": 38.476589,
      "longitude": -8.17749,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998502,
      "ems": null
    },
    {
      "latitude": 38.477188,
      "longitude": -8.174365,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998508,
      "ems": null
    },
    {
      "latitude": 38.47789,
      "longitude": -8.170959,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998513,
      "ems": null
    },
    {
      "latitude": 38.478359,
      "longitude": -8.168152,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660998519,
      "ems": null
    },
    {
      "latitude": 38.479019,
      "longitude": -8.164574,
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998525,
      "ems": null
    },
    {
      "latitude": 38.479568,
      "longitude": -8.161316,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 78,
      "squawk": "1371",
      "timestamp": 1660998531,
      "ems": null
    },
    {
      "latitude": 38.480221,
      "longitude": -8.157959,
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998537,
      "ems": null
    },
    {
      "latitude": 38.480778,
      "longitude": -8.154785,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 77,
      "squawk": "1371",
      "timestamp": 1660998544,
      "ems": null
    },
    {
      "latitude": 38.48143,
      "longitude": -8.151367,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998550,
      "ems": null
    },
    {
      "latitude": 38.482086,
      "longitude": -8.148631,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998556,
      "ems": null
    },
    {
      "latitude": 38.482685,
      "longitude": -8.146606,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998559,
      "ems": null
    },
    {
      "latitude": 38.483105,
      "longitude": -8.145142,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998562,
      "ems": null
    },
    {
      "latitude": 38.483643,
      "longitude": -8.143377,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998565,
      "ems": null
    },
    {
      "latitude": 38.484085,
      "longitude": -8.141846,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660998568,
      "ems": null
    },
    {
      "latitude": 38.48455,
      "longitude": -8.140259,
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660998571,
      "ems": null
    },
    {
      "latitude": 38.48497,
      "longitude": -8.13872,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998574,
      "ems": null
    },
    {
      "latitude": 38.485107,
      "longitude": -8.138183,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998575,
      "ems": null
    },
    {
      "latitude": 38.486389,
      "longitude": -8.133047,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998585,
      "ems": null
    },
    {
      "latitude": 38.48671,
      "longitude": -8.131674,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998588,
      "ems": null
    },
    {
      "latitude": 38.487396,
      "longitude": -8.128748,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998594,
      "ems": null
    },
    {
      "latitude": 38.487713,
      "longitude": -8.127258,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998597,
      "ems": null
    },
    {
      "latitude": 38.488365,
      "longitude": -8.124512,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998603,
      "ems": null
    },
    {
      "latitude": 38.489044,
      "longitude": -8.121822,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998609,
      "ems": null
    },
    {
      "latitude": 38.48941,
      "longitude": -8.120508,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998612,
      "ems": null
    },
    {
      "latitude": 38.489948,
      "longitude": -8.119019,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660998615,
      "ems": null
    },
    {
      "latitude": 38.490414,
      "longitude": -8.117737,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660998618,
      "ems": null
    },
    {
      "latitude": 38.490974,
      "longitude": -8.116211,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998621,
      "ems": null
    },
    {
      "latitude": 38.491486,
      "longitude": -8.114746,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660998624,
      "ems": null
    },
    {
      "latitude": 38.49202,
      "longitude": -8.113284,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998627,
      "ems": null
    },
    {
      "latitude": 38.492462,
      "longitude": -8.112122,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 61,
      "squawk": "1371",
      "timestamp": 1660998630,
      "ems": null
    },
    {
      "latitude": 38.493118,
      "longitude": -8.110657,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 59,
      "squawk": "1371",
      "timestamp": 1660998633,
      "ems": null
    },
    {
      "latitude": 38.493713,
      "longitude": -8.109344,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 60,
      "squawk": "1371",
      "timestamp": 1660998636,
      "ems": null
    },
    {
      "latitude": 38.494217,
      "longitude": -8.108209,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998639,
      "ems": null
    },
    {
      "latitude": 38.494904,
      "longitude": -8.106477,
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
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998642,
      "ems": null
    },
    {
      "latitude": 38.496048,
      "longitude": -8.103373,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660998648,
      "ems": null
    },
    {
      "latitude": 38.497055,
      "longitude": -8.100029,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998654,
      "ems": null
    },
    {
      "latitude": 38.498051,
      "longitude": -8.097229,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 66,
      "squawk": "1371",
      "timestamp": 1660998660,
      "ems": null
    },
    {
      "latitude": 38.498611,
      "longitude": -8.09549,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998664,
      "ems": null
    },
    {
      "latitude": 38.499619,
      "longitude": -8.092505,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 65,
      "squawk": "1371",
      "timestamp": 1660998670,
      "ems": null
    },
    {
      "latitude": 38.500797,
      "longitude": -8.0896,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998676,
      "ems": null
    },
    {
      "latitude": 38.501354,
      "longitude": -8.088135,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998678,
      "ems": null
    },
    {
      "latitude": 38.502472,
      "longitude": -8.085266,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660998685,
      "ems": null
    },
    {
      "latitude": 38.503078,
      "longitude": -8.083923,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 60,
      "squawk": "1371",
      "timestamp": 1660998688,
      "ems": null
    },
    {
      "latitude": 38.503601,
      "longitude": -8.082832,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 58,
      "squawk": "1371",
      "timestamp": 1660998690,
      "ems": null
    },
    {
      "latitude": 38.504379,
      "longitude": -8.081221,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 56,
      "squawk": "1371",
      "timestamp": 1660998694,
      "ems": null
    },
    {
      "latitude": 38.505032,
      "longitude": -8.079956,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "1371",
      "timestamp": 1660998697,
      "ems": null
    },
    {
      "latitude": 38.505524,
      "longitude": -8.079071,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 58,
      "squawk": "1371",
      "timestamp": 1660998699,
      "ems": null
    },
    {
      "latitude": 38.506851,
      "longitude": -8.076086,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 61,
      "squawk": "1371",
      "timestamp": 1660998705,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -8.073181,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "1371",
      "timestamp": 1660998712,
      "ems": null
    },
    {
      "latitude": 38.509315,
      "longitude": -8.07019,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "1371",
      "timestamp": 1660998718,
      "ems": null
    },
    {
      "latitude": 38.509872,
      "longitude": -8.068801,
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
      "heading": 64,
      "squawk": "1371",
      "timestamp": 1660998721,
      "ems": null
    },
    {
      "latitude": 38.510151,
      "longitude": -8.068054,
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998723,
      "ems": null
    },
    {
      "latitude": 38.510849,
      "longitude": -8.065674,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998727,
      "ems": null
    },
    {
      "latitude": 38.511131,
      "longitude": -8.064514,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998730,
      "ems": null
    },
    {
      "latitude": 38.51152,
      "longitude": -8.06283,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998733,
      "ems": null
    },
    {
      "latitude": 38.511887,
      "longitude": -8.061099,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 72,
      "squawk": "1371",
      "timestamp": 1660998736,
      "ems": null
    },
    {
      "latitude": 38.512249,
      "longitude": -8.05957,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 73,
      "squawk": "1371",
      "timestamp": 1660998738,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -8.057695,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998741,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -8.055786,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 75,
      "squawk": "1371",
      "timestamp": 1660998745,
      "ems": null
    },
    {
      "latitude": 38.513535,
      "longitude": -8.053993,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998748,
      "ems": null
    },
    {
      "latitude": 38.514404,
      "longitude": -8.050889,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998754,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.047485,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998760,
      "ems": null
    },
    {
      "latitude": 38.515869,
      "longitude": -8.045933,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660998763,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.043962,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998766,
      "ems": null
    },
    {
      "latitude": 38.516994,
      "longitude": -8.042358,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 67,
      "squawk": "1371",
      "timestamp": 1660998769,
      "ems": null
    },
    {
      "latitude": 38.517509,
      "longitude": -8.040649,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998772,
      "ems": null
    },
    {
      "latitude": 38.517929,
      "longitude": -8.039306,
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
      "heading": 69,
      "squawk": "1371",
      "timestamp": 1660998774,
      "ems": null
    },
    {
      "latitude": 38.518982,
      "longitude": -8.035723,
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
      "heading": 68,
      "squawk": "1371",
      "timestamp": 1660998781,
      "ems": null
    },
    {
      "latitude": 38.519882,
      "longitude": -8.032593,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "1371",
      "timestamp": 1660998787,
      "ems": null
    },
    {
      "latitude": 38.520721,
      "longitude": -8.02948,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660998793,
      "ems": null
    },
    {
      "latitude": 38.521465,
      "longitude": -8.026367,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "1371",
      "timestamp": 1660998799,
      "ems": null
    },
    {
      "latitude": 38.52179,
      "longitude": -8.02478,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 76,
      "squawk": "1371",
      "timestamp": 1660998802,
      "ems": null
    },
    {
      "latitude": 38.522003,
      "longitude": -8.023363,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 81,
      "squawk": "1371",
      "timestamp": 1660998805,
      "ems": null
    },
    {
      "latitude": 38.522141,
      "longitude": -8.021572,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "squawk": "1371",
      "timestamp": 1660998808,
      "ems": null
    },
    {
      "latitude": 38.522209,
      "longitude": -8.020081,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660998811,
      "ems": null
    },
    {
      "latitude": 38.522209,
      "longitude": -8.018555,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 88,
      "squawk": "1371",
      "timestamp": 1660998814,
      "ems": null
    },
    {
      "latitude": 38.522278,
      "longitude": -8.016855,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 86,
      "squawk": "1371",
      "timestamp": 1660998817,
      "ems": null
    },
    {
      "latitude": 38.52235,
      "longitude": -8.015381,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660998819,
      "ems": null
    },
    {
      "latitude": 38.522488,
      "longitude": -8.013611,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 85,
      "squawk": "1371",
      "timestamp": 1660998823,
      "ems": null
    },
    {
      "latitude": 38.522488,
      "longitude": -8.012207,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 90,
      "squawk": "1371",
      "timestamp": 1660998826,
      "ems": null
    },
    {
      "latitude": 38.522442,
      "longitude": -8.010681,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 92,
      "squawk": "1371",
      "timestamp": 1660998829,
      "ems": null
    },
    {
      "latitude": 38.522369,
      "longitude": -8.009392,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 96,
      "squawk": "1371",
      "timestamp": 1660998832,
      "ems": null
    },
    {
      "latitude": 38.522186,
      "longitude": -8.007839,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 99,
      "squawk": "1371",
      "timestamp": 1660998835,
      "ems": null
    },
    {
      "latitude": 38.522003,
      "longitude": -8.006466,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 100,
      "squawk": "1371",
      "timestamp": 1660998838,
      "ems": null
    },
    {
      "latitude": 38.521774,
      "longitude": -8.005152,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 101,
      "squawk": "1371",
      "timestamp": 1660998841,
      "ems": null
    },
    {
      "latitude": 38.521557,
      "longitude": -8.003906,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 103,
      "squawk": "1371",
      "timestamp": 1660998844,
      "ems": null
    },
    {
      "latitude": 38.521271,
      "longitude": -8.002286,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 102,
      "squawk": "1371",
      "timestamp": 1660998847,
      "ems": null
    },
    {
      "latitude": 38.521042,
      "longitude": -8.000793,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 101,
      "squawk": "1371",
      "timestamp": 1660998850,
      "ems": null
    },
    {
      "latitude": 38.520813,
      "longitude": -7.999512,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 102,
      "squawk": "1371",
      "timestamp": 1660998853,
      "ems": null
    },
    {
      "latitude": 38.520489,
      "longitude": -7.997681,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 102,
      "squawk": "1371",
      "timestamp": 1660998856,
      "ems": null
    },
    {
      "latitude": 38.520172,
      "longitude": -7.996077,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 104,
      "squawk": "1371",
      "timestamp": 1660998859,
      "ems": null
    },
    {
      "latitude": 38.519897,
      "longitude": -7.994584,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 105,
      "squawk": "1371",
      "timestamp": 1660998862,
      "ems": null
    },
    {
      "latitude": 38.519558,
      "longitude": -7.99292,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 104,
      "squawk": "1371",
      "timestamp": 1660998865,
      "ems": null
    },
    {
      "latitude": 38.518856,
      "longitude": -7.989807,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 105,
      "squawk": "1371",
      "timestamp": 1660998871,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -7.986523,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 111,
      "squawk": "1371",
      "timestamp": 1660998877,
      "ems": null
    },
    {
      "latitude": 38.517509,
      "longitude": -7.985046,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "1371",
      "timestamp": 1660998880,
      "ems": null
    },
    {
      "latitude": 38.517014,
      "longitude": -7.983777,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "1371",
      "timestamp": 1660998883,
      "ems": null
    },
    {
      "latitude": 38.516418,
      "longitude": -7.982344,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 123,
      "squawk": "1371",
      "timestamp": 1660998886,
      "ems": null
    },
    {
      "latitude": 38.51564,
      "longitude": -7.981149,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 133,
      "squawk": "1371",
      "timestamp": 1660998889,
      "ems": null
    },
    {
      "latitude": 38.514713,
      "longitude": -7.980103,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660998892,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -7.979179,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 148,
      "squawk": "1371",
      "timestamp": 1660998895,
      "ems": null
    },
    {
      "latitude": 38.512024,
      "longitude": -7.978224,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 160,
      "squawk": "1371",
      "timestamp": 1660998900,
      "ems": null
    },
    {
      "latitude": 38.510834,
      "longitude": -7.977746,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 166,
      "squawk": "1371",
      "timestamp": 1660998903,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -7.977539,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 171,
      "squawk": "1371",
      "timestamp": 1660998906,
      "ems": null
    },
    {
      "latitude": 38.50885,
      "longitude": -7.977356,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 170,
      "squawk": "1371",
      "timestamp": 1660998909,
      "ems": null
    },
    {
      "latitude": 38.507584,
      "longitude": -7.977029,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "squawk": "1371",
      "timestamp": 1660998912,
      "ems": null
    },
    {
      "latitude": 38.506474,
      "longitude": -7.976685,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 165,
      "squawk": "1371",
      "timestamp": 1660998915,
      "ems": null
    },
    {
      "latitude": 38.505356,
      "longitude": -7.976257,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 163,
      "squawk": "1371",
      "timestamp": 1660998918,
      "ems": null
    },
    {
      "latitude": 38.504333,
      "longitude": -7.975835,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 160,
      "squawk": "1371",
      "timestamp": 1660998921,
      "ems": null
    },
    {
      "latitude": 38.503216,
      "longitude": -7.975342,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 160,
      "squawk": "1371",
      "timestamp": 1660998924,
      "ems": null
    },
    {
      "latitude": 38.501038,
      "longitude": -7.974223,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 157,
      "squawk": "1371",
      "timestamp": 1660998930,
      "ems": null
    },
    {
      "latitude": 38.499912,
      "longitude": -7.973633,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 157,
      "squawk": "1371",
      "timestamp": 1660998933,
      "ems": null
    },
    {
      "latitude": 38.498795,
      "longitude": -7.973083,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660998936,
      "ems": null
    },
    {
      "latitude": 38.497768,
      "longitude": -7.972595,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 160,
      "squawk": "1371",
      "timestamp": 1660998939,
      "ems": null
    },
    {
      "latitude": 38.496689,
      "longitude": -7.972193,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660998942,
      "ems": null
    },
    {
      "latitude": 38.49577,
      "longitude": -7.971741,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 157,
      "squawk": "1371",
      "timestamp": 1660998945,
      "ems": null
    },
    {
      "latitude": 38.494217,
      "longitude": -7.97076,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660998949,
      "ems": null
    },
    {
      "latitude": 38.493484,
      "longitude": -7.970163,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 142,
      "squawk": "1371",
      "timestamp": 1660998952,
      "ems": null
    },
    {
      "latitude": 38.492229,
      "longitude": -7.968872,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660998955,
      "ems": null
    },
    {
      "latitude": 38.491344,
      "longitude": -7.968018,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660998958,
      "ems": null
    },
    {
      "latitude": 38.490322,
      "longitude": -7.967102,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660998961,
      "ems": null
    },
    {
      "latitude": 38.489529,
      "longitude": -7.96637,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 143,
      "squawk": "1371",
      "timestamp": 1660998964,
      "ems": null
    },
    {
      "latitude": 38.488449,
      "longitude": -7.965386,
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660998967,
      "ems": null
    },
    {
      "latitude": 38.48753,
      "longitude": -7.9646,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660998970,
      "ems": null
    },
    {
      "latitude": 38.486618,
      "longitude": -7.963774,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 144,
      "squawk": "1371",
      "timestamp": 1660998973,
      "ems": null
    },
    {
      "latitude": 38.485806,
      "longitude": -7.963074,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 145,
      "squawk": "1371",
      "timestamp": 1660998976,
      "ems": null
    },
    {
      "latitude": 38.484783,
      "longitude": -7.962219,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 146,
      "squawk": "1371",
      "timestamp": 1660998979,
      "ems": null
    },
    {
      "latitude": 38.483459,
      "longitude": -7.961147,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660998983,
      "ems": null
    },
    {
      "latitude": 38.482544,
      "longitude": -7.96049,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660998986,
      "ems": null
    },
    {
      "latitude": 38.481709,
      "longitude": -7.9599,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 150,
      "squawk": "1371",
      "timestamp": 1660998989,
      "ems": null
    },
    {
      "latitude": 38.480778,
      "longitude": -7.959229,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 149,
      "squawk": "1371",
      "timestamp": 1660998992,
      "ems": null
    },
    {
      "latitude": 38.479843,
      "longitude": -7.95858,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 154,
      "squawk": "1371",
      "timestamp": 1660998995,
      "ems": null
    },
    {
      "latitude": 38.47879,
      "longitude": -7.958042,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660998998,
      "ems": null
    },
    {
      "latitude": 38.477829,
      "longitude": -7.957565,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660999001,
      "ems": null
    },
    {
      "latitude": 38.476868,
      "longitude": -7.957092,
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
      "heading": 159,
      "squawk": "1371",
      "timestamp": 1660999004,
      "ems": null
    },
    {
      "latitude": 38.475906,
      "longitude": -7.956669,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660999007,
      "ems": null
    },
    {
      "latitude": 38.475052,
      "longitude": -7.95636,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 162,
      "squawk": "1371",
      "timestamp": 1660999010,
      "ems": null
    },
    {
      "latitude": 38.474213,
      "longitude": -7.956012,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660999013,
      "ems": null
    },
    {
      "latitude": 38.473343,
      "longitude": -7.955534,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 155,
      "squawk": "1371",
      "timestamp": 1660999016,
      "ems": null
    },
    {
      "latitude": 38.472473,
      "longitude": -7.955057,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 156,
      "squawk": "1371",
      "timestamp": 1660999019,
      "ems": null
    },
    {
      "latitude": 38.471561,
      "longitude": -7.95459,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 161,
      "squawk": "1371",
      "timestamp": 1660999022,
      "ems": null
    },
    {
      "latitude": 38.470642,
      "longitude": -7.954281,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 165,
      "squawk": "1371",
      "timestamp": 1660999025,
      "ems": null
    },
    {
      "latitude": 38.469864,
      "longitude": -7.953982,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 166,
      "squawk": "1371",
      "timestamp": 1660999028,
      "ems": null
    },
    {
      "latitude": 38.468021,
      "longitude": -7.953308,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 158,
      "squawk": "1371",
      "timestamp": 1660999034,
      "ems": null
    },
    {
      "latitude": 38.467186,
      "longitude": -7.952759,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 151,
      "squawk": "1371",
      "timestamp": 1660999037,
      "ems": null
    },
    {
      "latitude": 38.466797,
      "longitude": -7.95237,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660999040,
      "ems": null
    },
    {
      "latitude": 38.46574,
      "longitude": -7.951111,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 134,
      "squawk": "1371",
      "timestamp": 1660999043,
      "ems": null
    },
    {
      "latitude": 38.46492,
      "longitude": -7.950041,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 135,
      "squawk": "1371",
      "timestamp": 1660999046,
      "ems": null
    },
    {
      "latitude": 38.464096,
      "longitude": -7.949086,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 138,
      "squawk": "1371",
      "timestamp": 1660999049,
      "ems": null
    },
    {
      "latitude": 38.463272,
      "longitude": -7.94819,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 140,
      "squawk": "1371",
      "timestamp": 1660999052,
      "ems": null
    },
    {
      "latitude": 38.462437,
      "longitude": -7.947327,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 141,
      "squawk": "1371",
      "timestamp": 1660999055,
      "ems": null
    },
    {
      "latitude": 38.461533,
      "longitude": -7.946399,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 140,
      "squawk": "1371",
      "timestamp": 1660999058,
      "ems": null
    },
    {
      "latitude": 38.460808,
      "longitude": -7.945496,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 133,
      "squawk": "1371",
      "timestamp": 1660999061,
      "ems": null
    },
    {
      "latitude": 38.460114,
      "longitude": -7.944369,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 126,
      "squawk": "1371",
      "timestamp": 1660999064,
      "ems": null
    },
    {
      "latitude": 38.459473,
      "longitude": -7.943234,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 125,
      "squawk": "1371",
      "timestamp": 1660999067,
      "ems": null
    },
    {
      "latitude": 38.458805,
      "longitude": -7.942078,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 127,
      "squawk": "1371",
      "timestamp": 1660999070,
      "ems": null
    },
    {
      "latitude": 38.458099,
      "longitude": -7.941025,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 128,
      "squawk": "1371",
      "timestamp": 1660999073,
      "ems": null
    },
    {
      "latitude": 38.457413,
      "longitude": -7.939891,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 127,
      "squawk": "1371",
      "timestamp": 1660999076,
      "ems": null
    },
    {
      "latitude": 38.456711,
      "longitude": -7.93866,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 126,
      "squawk": "1371",
      "timestamp": 1660999079,
      "ems": null
    },
    {
      "latitude": 38.456039,
      "longitude": -7.937443,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 126,
      "squawk": "1371",
      "timestamp": 1660999082,
      "ems": null
    },
    {
      "latitude": 38.455452,
      "longitude": -7.936279,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 118,
      "squawk": "1371",
      "timestamp": 1660999085,
      "ems": null
    },
    {
      "latitude": 38.454895,
      "longitude": -7.934875,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 117,
      "squawk": "1371",
      "timestamp": 1660999088,
      "ems": null
    },
    {
      "latitude": 38.454384,
      "longitude": -7.933594,
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
      "heading": 116,
      "squawk": "1371",
      "timestamp": 1660999091,
      "ems": null
    },
    {
      "latitude": 38.453823,
      "longitude": -7.932129,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 115,
      "squawk": "1371",
      "timestamp": 1660999094,
      "ems": null
    },
    {
      "latitude": 38.453403,
      "longitude": -7.930847,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 113,
      "squawk": "1371",
      "timestamp": 1660999097,
      "ems": null
    },
    {
      "latitude": 38.452881,
      "longitude": -7.929382,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 113,
      "squawk": "1371",
      "timestamp": 1660999100,
      "ems": null
    },
    {
      "latitude": 38.452522,
      "longitude": -7.928528,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 117,
      "squawk": "1371",
      "timestamp": 1660999103,
      "ems": null
    },
    {
      "latitude": 38.451077,
      "longitude": -7.92627,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 137,
      "squawk": "1371",
      "timestamp": 1660999109,
      "ems": null
    },
    {
      "latitude": 38.4501,
      "longitude": -7.925171,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 136,
      "squawk": "1371",
      "timestamp": 1660999112,
      "ems": null
    },
    {
      "latitude": 38.449402,
      "longitude": -7.924133,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 129,
      "squawk": "1371",
      "timestamp": 1660999115,
      "ems": null
    },
    {
      "latitude": 38.448807,
      "longitude": -7.922994,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 123,
      "squawk": "1371",
      "timestamp": 1660999118,
      "ems": null
    },
    {
      "latitude": 38.447891,
      "longitude": -7.920426,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 114,
      "squawk": "1371",
      "timestamp": 1660999124,
      "ems": null
    },
    {
      "latitude": 38.446976,
      "longitude": -7.917859,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 113,
      "squawk": "1371",
      "timestamp": 1660999130,
      "ems": null
    },
    {
      "latitude": 38.446609,
      "longitude": -7.916724,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "1371",
      "timestamp": 1660999133,
      "ems": null
    },
    {
      "latitude": 38.446236,
      "longitude": -7.914795,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 101,
      "squawk": "1371",
      "timestamp": 1660999137,
      "ems": null
    },
    {
      "latitude": 38.446144,
      "longitude": -7.913269,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "1371",
      "timestamp": 1660999139,
      "ems": null
    },
    {
      "latitude": 38.446236,
      "longitude": -7.912109,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 83,
      "squawk": "1371",
      "timestamp": 1660999142,
      "ems": null
    },
    {
      "latitude": 38.446423,
      "longitude": -7.911133,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 70,
      "squawk": "1371",
      "timestamp": 1660999145,
      "ems": null
    },
    {
      "latitude": 38.447262,
      "longitude": -7.908997,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 60,
      "squawk": "1371",
      "timestamp": 1660999149,
      "ems": null
    },
    {
      "latitude": 38.447983,
      "longitude": -7.907768,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 53,
      "squawk": "1371",
      "timestamp": 1660999151,
      "ems": null
    },
    {
      "latitude": 38.44875,
      "longitude": -7.906372,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 55,
      "squawk": "1371",
      "timestamp": 1660999154,
      "ems": null
    },
    {
      "latitude": 38.449448,
      "longitude": -7.904968,
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
      "heading": 55,
      "squawk": "1371",
      "timestamp": 1660999158,
      "ems": null
    },
    {
      "latitude": 38.450191,
      "longitude": -7.903748,
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
      "heading": 52,
      "squawk": "1371",
      "timestamp": 1660999161,
      "ems": null
    },
    {
      "latitude": 38.450985,
      "longitude": -7.902344,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 53,
      "squawk": "1371",
      "timestamp": 1660999164,
      "ems": null
    },
    {
      "latitude": 38.451691,
      "longitude": -7.90114,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 52,
      "squawk": "1371",
      "timestamp": 1660999166,
      "ems": null
    },
    {
      "latitude": 38.45256,
      "longitude": -7.899827,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 49,
      "squawk": "1371",
      "timestamp": 1660999170,
      "ems": null
    },
    {
      "latitude": 38.45343,
      "longitude": -7.898573,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 48,
      "squawk": "1371",
      "timestamp": 1660999172,
      "ems": null
    },
    {
      "latitude": 38.454197,
      "longitude": -7.897522,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 48,
      "squawk": "1371",
      "timestamp": 1660999175,
      "ems": null
    },
    {
      "latitude": 38.454895,
      "longitude": -7.896606,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 42,
      "squawk": "1371",
      "timestamp": 1660999178,
      "ems": null
    },
    {
      "latitude": 38.456104,
      "longitude": -7.895325,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 38,
      "squawk": "1371",
      "timestamp": 1660999182,
      "ems": null
    },
    {
      "latitude": 38.45713,
      "longitude": -7.894348,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 34,
      "squawk": "1371",
      "timestamp": 1660999185,
      "ems": null
    },
    {
      "latitude": 38.458282,
      "longitude": -7.893558,
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
      "heading": 25,
      "squawk": "1371",
      "timestamp": 1660999187,
      "ems": null
    },
    {
      "latitude": 38.459473,
      "longitude": -7.8929,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 23,
      "squawk": "1371",
      "timestamp": 1660999190,
      "ems": null
    },
    {
      "latitude": 38.460663,
      "longitude": -7.892244,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 23,
      "squawk": "1371",
      "timestamp": 1660999193,
      "ems": null
    },
    {
      "latitude": 38.46183,
      "longitude": -7.891724,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 19,
      "squawk": "1371",
      "timestamp": 1660999196,
      "ems": null
    },
    {
      "latitude": 38.463867,
      "longitude": -7.89093,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999201,
      "ems": null
    },
    {
      "latitude": 38.465332,
      "longitude": -7.890393,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999205,
      "ems": null
    },
    {
      "latitude": 38.466534,
      "longitude": -7.889954,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999208,
      "ems": null
    },
    {
      "latitude": 38.467712,
      "longitude": -7.889497,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 17,
      "squawk": "1371",
      "timestamp": 1660999211,
      "ems": null
    },
    {
      "latitude": 38.468719,
      "longitude": -7.889139,
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
      "heading": 15,
      "squawk": "1371",
      "timestamp": 1660999213,
      "ems": null
    },
    {
      "latitude": 38.470211,
      "longitude": -7.888672,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 11,
      "squawk": "1371",
      "timestamp": 1660999217,
      "ems": null
    },
    {
      "latitude": 38.471466,
      "longitude": -7.888422,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 10,
      "squawk": "1371",
      "timestamp": 1660999220,
      "ems": null
    },
    {
      "latitude": 38.472771,
      "longitude": -7.888123,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 8,
      "squawk": "1371",
      "timestamp": 1660999223,
      "ems": null
    },
    {
      "latitude": 38.473934,
      "longitude": -7.887878,
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
      "heading": 9,
      "squawk": "1371",
      "timestamp": 1660999225,
      "ems": null
    },
    {
      "latitude": 38.475357,
      "longitude": -7.887587,
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
      "heading": 10,
      "squawk": "1371",
      "timestamp": 1660999229,
      "ems": null
    },
    {
      "latitude": 38.476547,
      "longitude": -7.887288,
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
      "heading": 9,
      "squawk": "1371",
      "timestamp": 1660999232,
      "ems": null
    },
    {
      "latitude": 38.479103,
      "longitude": -7.886475,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 20,
      "squawk": "1371",
      "timestamp": 1660999238,
      "ems": null
    },
    {
      "latitude": 38.480125,
      "longitude": -7.885925,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 24,
      "squawk": "1371",
      "timestamp": 1660999240,
      "ems": null
    },
    {
      "latitude": 38.481522,
      "longitude": -7.885071,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 25,
      "squawk": "1371",
      "timestamp": 1660999244,
      "ems": null
    },
    {
      "latitude": 38.482735,
      "longitude": -7.884399,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 23,
      "squawk": "1371",
      "timestamp": 1660999247,
      "ems": null
    },
    {
      "latitude": 38.483871,
      "longitude": -7.883825,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 20,
      "squawk": "1371",
      "timestamp": 1660999250,
      "ems": null
    },
    {
      "latitude": 38.485107,
      "longitude": -7.883301,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 17,
      "squawk": "1371",
      "timestamp": 1660999253,
      "ems": null
    },
    {
      "latitude": 38.487434,
      "longitude": -7.882751,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 5,
      "squawk": "1371",
      "timestamp": 1660999259,
      "ems": null
    },
    {
      "latitude": 38.488506,
      "longitude": -7.88269,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 1,
      "squawk": "1371",
      "timestamp": 1660999262,
      "ems": null
    },
    {
      "latitude": 38.489716,
      "longitude": -7.88269,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 359,
      "squawk": "1371",
      "timestamp": 1660999265,
      "ems": null
    },
    {
      "latitude": 38.491066,
      "longitude": -7.882568,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 7,
      "squawk": "1371",
      "timestamp": 1660999268,
      "ems": null
    },
    {
      "latitude": 38.493256,
      "longitude": -7.881377,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 29,
      "squawk": "1371",
      "timestamp": 1660999274,
      "ems": null
    },
    {
      "latitude": 38.494308,
      "longitude": -7.8806,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 31,
      "squawk": "1371",
      "timestamp": 1660999277,
      "ems": null
    },
    {
      "latitude": 38.49535,
      "longitude": -7.879822,
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
      "heading": 29,
      "squawk": "1371",
      "timestamp": 1660999280,
      "ems": null
    },
    {
      "latitude": 38.496372,
      "longitude": -7.87915,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 28,
      "squawk": "1371",
      "timestamp": 1660999283,
      "ems": null
    },
    {
      "latitude": 38.49733,
      "longitude": -7.878511,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 24,
      "squawk": "1371",
      "timestamp": 1660999286,
      "ems": null
    },
    {
      "latitude": 38.498516,
      "longitude": -7.877808,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 26,
      "squawk": "1371",
      "timestamp": 1660999289,
      "ems": null
    },
    {
      "latitude": 38.499584,
      "longitude": -7.877075,
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
      "heading": 30,
      "squawk": "1371",
      "timestamp": 1660999292,
      "ems": null
    },
    {
      "latitude": 38.500565,
      "longitude": -7.876343,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 31,
      "squawk": "1371",
      "timestamp": 1660999295,
      "ems": null
    },
    {
      "latitude": 38.501495,
      "longitude": -7.87561,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 32,
      "squawk": "1371",
      "timestamp": 1660999298,
      "ems": null
    },
    {
      "latitude": 38.502472,
      "longitude": -7.874817,
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
      "heading": 31,
      "squawk": "1371",
      "timestamp": 1660999301,
      "ems": null
    },
    {
      "latitude": 38.504517,
      "longitude": -7.873077,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 33,
      "squawk": "1371",
      "timestamp": 1660999307,
      "ems": null
    },
    {
      "latitude": 38.505524,
      "longitude": -7.872241,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 34,
      "squawk": "1371",
      "timestamp": 1660999310,
      "ems": null
    },
    {
      "latitude": 38.507492,
      "longitude": -7.870629,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 32,
      "squawk": "1371",
      "timestamp": 1660999316,
      "ems": null
    },
    {
      "latitude": 38.508499,
      "longitude": -7.869853,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 31,
      "squawk": "1371",
      "timestamp": 1660999319,
      "ems": null
    },
    {
      "latitude": 38.510422,
      "longitude": -7.86848,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 28,
      "squawk": "1371",
      "timestamp": 1660999325,
      "ems": null
    },
    {
      "latitude": 38.512386,
      "longitude": -7.867126,
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
      "heading": 27,
      "squawk": "1371",
      "timestamp": 1660999331,
      "ems": null
    },
    {
      "latitude": 38.513317,
      "longitude": -7.866577,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 23,
      "squawk": "1371",
      "timestamp": 1660999334,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -7.866092,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 18,
      "squawk": "1371",
      "timestamp": 1660999337,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -7.865793,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 14,
      "squawk": "1371",
      "timestamp": 1660999339,
      "ems": null
    },
    {
      "latitude": 38.516327,
      "longitude": -7.865494,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 10,
      "squawk": "1371",
      "timestamp": 1660999343,
      "ems": null
    },
    {
      "latitude": 38.517368,
      "longitude": -7.865234,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 10,
      "squawk": "1371",
      "timestamp": 1660999346,
      "ems": null
    },
    {
      "latitude": 38.518616,
      "longitude": -7.864957,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 9,
      "squawk": "1371",
      "timestamp": 1660999349,
      "ems": null
    },
    {
      "latitude": 38.519508,
      "longitude": -7.864807,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 6,
      "squawk": "1371",
      "timestamp": 1660999352,
      "ems": null
    },
    {
      "latitude": 38.520626,
      "longitude": -7.864685,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 2,
      "squawk": "1371",
      "timestamp": 1660999355,
      "ems": null
    },
    {
      "latitude": 38.52179,
      "longitude": -7.864624,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "1371",
      "timestamp": 1660999358,
      "ems": null
    },
    {
      "latitude": 38.52272,
      "longitude": -7.864563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "1371",
      "timestamp": 1660999361,
      "ems": null
    },
    {
      "latitude": 38.523933,
      "longitude": -7.86438,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "1371",
      "timestamp": 1660999364,
      "ems": null
    },
    {
      "latitude": 38.525002,
      "longitude": -7.864319,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 3,
      "squawk": "1371",
      "timestamp": 1660999367,
      "ems": null
    },
    {
      "latitude": 38.526123,
      "longitude": -7.864241,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 3,
      "squawk": "1371",
      "timestamp": 1660999370,
      "ems": null
    },
    {
      "latitude": 38.526993,
      "longitude": -7.864181,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 3,
      "squawk": "1371",
      "timestamp": 1660999373,
      "ems": null
    },
    {
      "latitude": 38.528,
      "longitude": -7.864061,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 3,
      "squawk": "1371",
      "timestamp": 1660999376,
      "ems": null
    },
    {
      "latitude": 38.529144,
      "longitude": -7.864061,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 359,
      "squawk": "1371",
      "timestamp": 1660999379,
      "ems": null
    },
    {
      "latitude": 38.530125,
      "longitude": -7.864075,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 360,
      "squawk": "1371",
      "timestamp": 1660999382,
      "ems": null
    },
    {
      "latitude": 38.532032,
      "longitude": -7.863831,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 8,
      "squawk": "1371",
      "timestamp": 1660999388,
      "ems": null
    },
    {
      "latitude": 38.534134,
      "longitude": -7.863345,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 13,
      "squawk": "1371",
      "timestamp": 1660999394,
      "ems": null
    },
    {
      "latitude": 38.535198,
      "longitude": -7.862976,
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
      "heading": 15,
      "squawk": "1371",
      "timestamp": 1660999397,
      "ems": null
    },
    {
      "latitude": 38.536083,
      "longitude": -7.86261,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999400,
      "ems": null
    },
    {
      "latitude": 38.537064,
      "longitude": -7.86221,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 18,
      "squawk": "1371",
      "timestamp": 1660999403,
      "ems": null
    },
    {
      "latitude": 38.537712,
      "longitude": -7.862,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999405,
      "ems": null
    },
    {
      "latitude": 38.538876,
      "longitude": -7.861572,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 14,
      "squawk": "1371",
      "timestamp": 1660999409,
      "ems": null
    },
    {
      "latitude": 38.539764,
      "longitude": -7.861315,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 13,
      "squawk": "1371",
      "timestamp": 1660999412,
      "ems": null
    },
    {
      "latitude": 38.540783,
      "longitude": -7.861023,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 12,
      "squawk": "1371",
      "timestamp": 1660999415,
      "ems": null
    },
    {
      "latitude": 38.54274,
      "longitude": -7.860479,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 13,
      "squawk": "1371",
      "timestamp": 1660999421,
      "ems": null
    },
    {
      "latitude": 38.544601,
      "longitude": -7.859802,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999427,
      "ems": null
    },
    {
      "latitude": 38.546043,
      "longitude": -7.859253,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 16,
      "squawk": "1371",
      "timestamp": 1660999432,
      "ems": null
    },
    {
      "latitude": 38.549301,
      "longitude": -7.858276,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 11,
      "squawk": "1371",
      "timestamp": 1660999442,
      "ems": null
    },
    {
      "latitude": 38.551399,
      "longitude": -7.857788,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "squawk": "1371",
      "timestamp": 1660999448,
      "ems": null
    },
    {
      "latitude": 38.552235,
      "longitude": -7.857666,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 8,
      "squawk": "1371",
      "timestamp": 1660999451,
      "ems": null
    },
    {
      "latitude": 38.553307,
      "longitude": -7.857605,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 356,
      "squawk": "1371",
      "timestamp": 1660999454,
      "ems": null
    },
    {
      "latitude": 38.554276,
      "longitude": -7.857792,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 347,
      "squawk": "1371",
      "timestamp": 1660999457,
      "ems": null
    },
    {
      "latitude": 38.555309,
      "longitude": -7.858276,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "1371",
      "timestamp": 1660999460,
      "ems": null
    },
    {
      "latitude": 38.55624,
      "longitude": -7.858826,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 331,
      "squawk": "1371",
      "timestamp": 1660999463,
      "ems": null
    },
    {
      "latitude": 38.557068,
      "longitude": -7.859524,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "1371",
      "timestamp": 1660999466,
      "ems": null
    },
    {
      "latitude": 38.557938,
      "longitude": -7.860538,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "1371",
      "timestamp": 1660999469,
      "ems": null
    },
    {
      "latitude": 38.558613,
      "longitude": -7.861511,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 310,
      "squawk": "1371",
      "timestamp": 1660999472,
      "ems": null
    },
    {
      "latitude": 38.559124,
      "longitude": -7.862366,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 305,
      "squawk": "1371",
      "timestamp": 1660999475,
      "ems": null
    },
    {
      "latitude": 38.559723,
      "longitude": -7.863524,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 300,
      "squawk": "1371",
      "timestamp": 1660999478,
      "ems": null
    },
    {
      "latitude": 38.560135,
      "longitude": -7.864718,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "1371",
      "timestamp": 1660999481,
      "ems": null
    },
    {
      "latitude": 38.560474,
      "longitude": -7.865906,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 287,
      "squawk": "1371",
      "timestamp": 1660999484,
      "ems": null
    },
    {
      "latitude": 38.56073,
      "longitude": -7.867106,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 284,
      "squawk": "1371",
      "timestamp": 1660999487,
      "ems": null
    },
    {
      "latitude": 38.56105,
      "longitude": -7.868301,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "1371",
      "timestamp": 1660999490,
      "ems": null
    },
    {
      "latitude": 38.561314,
      "longitude": -7.869263,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 287,
      "squawk": "1371",
      "timestamp": 1660999493,
      "ems": null
    },
    {
      "latitude": 38.561638,
      "longitude": -7.87085,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 283,
      "squawk": "1371",
      "timestamp": 1660999496,
      "ems": null
    },
    {
      "latitude": 38.561874,
      "longitude": -7.872122,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 281,
      "squawk": "1371",
      "timestamp": 1660999499,
      "ems": null
    },
    {
      "latitude": 38.562012,
      "longitude": -7.873197,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 278,
      "squawk": "1371",
      "timestamp": 1660999502,
      "ems": null
    },
    {
      "latitude": 38.562149,
      "longitude": -7.87451,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 279,
      "squawk": "1371",
      "timestamp": 1660999505,
      "ems": null
    },
    {
      "latitude": 38.562336,
      "longitude": -7.875854,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "1371",
      "timestamp": 1660999508,
      "ems": null
    },
    {
      "latitude": 38.562424,
      "longitude": -7.877197,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 274,
      "squawk": "1371",
      "timestamp": 1660999511,
      "ems": null
    },
    {
      "latitude": 38.562477,
      "longitude": -7.878479,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "1371",
      "timestamp": 1660999514,
      "ems": null
    },
    {
      "latitude": 38.562523,
      "longitude": -7.879822,
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
      "heading": 273,
      "squawk": "1371",
      "timestamp": 1660999517,
      "ems": null
    },
    {
      "latitude": 38.562561,
      "longitude": -7.880959,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 275,
      "squawk": "1371",
      "timestamp": 1660999519,
      "ems": null
    },
    {
      "latitude": 38.562618,
      "longitude": -7.882568,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 270,
      "squawk": "1371",
      "timestamp": 1660999523,
      "ems": null
    },
    {
      "latitude": 38.562477,
      "longitude": -7.88385,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 258,
      "squawk": "1371",
      "timestamp": 1660999526,
      "ems": null
    },
    {
      "latitude": 38.562149,
      "longitude": -7.8849,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 245,
      "squawk": "1371",
      "timestamp": 1660999529,
      "ems": null
    },
    {
      "latitude": 38.561371,
      "longitude": -7.885974,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 221,
      "squawk": "1371",
      "timestamp": 1660999532,
      "ems": null
    },
    {
      "latitude": 38.56057,
      "longitude": -7.886597,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 207,
      "squawk": "1371",
      "timestamp": 1660999535,
      "ems": null
    },
    {
      "latitude": 38.559677,
      "longitude": -7.887049,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 199,
      "squawk": "1371",
      "timestamp": 1660999538,
      "ems": null
    },
    {
      "latitude": 38.558853,
      "longitude": -7.887348,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 196,
      "squawk": "1371",
      "timestamp": 1660999541,
      "ems": null
    },
    {
      "latitude": 38.557709,
      "longitude": -7.887646,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 188,
      "squawk": "1371",
      "timestamp": 1660999544,
      "ems": null
    },
    {
      "latitude": 38.556839,
      "longitude": -7.887765,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 185,
      "squawk": "1371",
      "timestamp": 1660999547,
      "ems": null
    },
    {
      "latitude": 38.555866,
      "longitude": -7.887817,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 180,
      "squawk": "1371",
      "timestamp": 1660999550,
      "ems": null
    },
    {
      "latitude": 38.554962,
      "longitude": -7.887825,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 180,
      "squawk": "1371",
      "timestamp": 1660999553,
      "ems": null
    },
    {
      "latitude": 38.554138,
      "longitude": -7.887825,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 182,
      "squawk": "1371",
      "timestamp": 1660999556,
      "ems": null
    },
    {
      "latitude": 38.553177,
      "longitude": -7.887885,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 183,
      "squawk": "1371",
      "timestamp": 1660999559,
      "ems": null
    },
    {
      "latitude": 38.552235,
      "longitude": -7.888,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999562,
      "ems": null
    },
    {
      "latitude": 38.551445,
      "longitude": -7.888062,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 185,
      "squawk": "1371",
      "timestamp": 1660999565,
      "ems": null
    },
    {
      "latitude": 38.550514,
      "longitude": -7.888184,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999568,
      "ems": null
    },
    {
      "latitude": 38.548645,
      "longitude": -7.888363,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 182,
      "squawk": "1371",
      "timestamp": 1660999574,
      "ems": null
    },
    {
      "latitude": 38.54686,
      "longitude": -7.888542,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999580,
      "ems": null
    },
    {
      "latitude": 38.544975,
      "longitude": -7.888672,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "1371",
      "timestamp": 1660999586,
      "ems": null
    },
    {
      "latitude": 38.543159,
      "longitude": -7.888733,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 185,
      "squawk": "1371",
      "timestamp": 1660999592,
      "ems": null
    },
    {
      "latitude": 38.541111,
      "longitude": -7.888977,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999598,
      "ems": null
    },
    {
      "latitude": 38.539581,
      "longitude": -7.889139,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999604,
      "ems": null
    },
    {
      "latitude": 38.538025,
      "longitude": -7.889258,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "1371",
      "timestamp": 1660999608,
      "ems": null
    },
    {
      "latitude": 38.535851,
      "longitude": -7.889465,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 184,
      "squawk": "1371",
      "timestamp": 1660999616,
      "ems": null
    },
    {
      "latitude": 38.534317,
      "longitude": -7.889616,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 183,
      "squawk": "1371",
      "timestamp": 1660999625,
      "ems": null
    },
    {
      "latitude": 38.533527,
      "longitude": -7.889557,
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
      "heading": 137,
      "squawk": "1371",
      "timestamp": 1660999636,
      "ems": null
    },
    {
      "latitude": 38.53339,
      "longitude": -7.889303,
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
      "heading": 123,
      "squawk": "1371",
      "timestamp": 1660999644,
      "ems": null
    },
    {
      "latitude": 38.533264,
      "longitude": -7.889084,
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
      "heading": 123,
      "squawk": "1371",
      "timestamp": 1660999650,
      "ems": null
    }
  ],
};
