import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220820LPEVLPCS",
    callsign: "RVP015",
    name: "Cross Country With Uber Girl",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 20, 13, 0).getTime(),
    arrival: new Date(2022, 7, 20, 14, 15).getTime(),
    singleEnginePistonTime: 75,
    picTime: 75,
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
      "latitude": 38.52924,
      "longitude": -7.890472,
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
      "heading": 0,
      "squawk": "0",
      "timestamp": 1661000937,
      "ems": null
    },
    {
      "latitude": 38.527145,
      "longitude": -7.890991,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 188,
      "squawk": "0",
      "timestamp": 1661000945,
      "ems": null
    },
    {
      "latitude": 38.526306,
      "longitude": -7.891113,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 187,
      "squawk": "0",
      "timestamp": 1661000948,
      "ems": null
    },
    {
      "latitude": 38.525482,
      "longitude": -7.891288,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 189,
      "squawk": "0",
      "timestamp": 1661000951,
      "ems": null
    },
    {
      "latitude": 38.524612,
      "longitude": -7.891408,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 185,
      "squawk": "0",
      "timestamp": 1661000954,
      "ems": null
    },
    {
      "latitude": 38.523834,
      "longitude": -7.891527,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 187,
      "squawk": "0",
      "timestamp": 1661000957,
      "ems": null
    },
    {
      "latitude": 38.52301,
      "longitude": -7.891826,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "0",
      "timestamp": 1661000960,
      "ems": null
    },
    {
      "latitude": 38.522232,
      "longitude": -7.892483,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 217,
      "squawk": "0",
      "timestamp": 1661000963,
      "ems": null
    },
    {
      "latitude": 38.521698,
      "longitude": -7.893311,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 233,
      "squawk": "0",
      "timestamp": 1661000966,
      "ems": null
    },
    {
      "latitude": 38.521278,
      "longitude": -7.894226,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 244,
      "squawk": "0",
      "timestamp": 1661000968,
      "ems": null
    },
    {
      "latitude": 38.521042,
      "longitude": -7.895289,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 256,
      "squawk": "0",
      "timestamp": 1661000971,
      "ems": null
    },
    {
      "latitude": 38.521,
      "longitude": -7.896545,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 270,
      "squawk": "0",
      "timestamp": 1661000975,
      "ems": null
    },
    {
      "latitude": 38.521046,
      "longitude": -7.897888,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 274,
      "squawk": "0",
      "timestamp": 1661000978,
      "ems": null
    },
    {
      "latitude": 38.521137,
      "longitude": -7.89917,
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
      "heading": 277,
      "squawk": "0",
      "timestamp": 1661000981,
      "ems": null
    },
    {
      "latitude": 38.521278,
      "longitude": -7.900452,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1661000984,
      "ems": null
    },
    {
      "latitude": 38.521408,
      "longitude": -7.901558,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1661000987,
      "ems": null
    },
    {
      "latitude": 38.521591,
      "longitude": -7.902812,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1661000990,
      "ems": null
    },
    {
      "latitude": 38.521729,
      "longitude": -7.903887,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1661000993,
      "ems": null
    },
    {
      "latitude": 38.521931,
      "longitude": -7.904968,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1661000996,
      "ems": null
    },
    {
      "latitude": 38.522118,
      "longitude": -7.906128,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1661000999,
      "ems": null
    },
    {
      "latitude": 38.522255,
      "longitude": -7.90741,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1661001002,
      "ems": null
    },
    {
      "latitude": 38.522396,
      "longitude": -7.90863,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1661001005,
      "ems": null
    },
    {
      "latitude": 38.522629,
      "longitude": -7.911011,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1661001011,
      "ems": null
    },
    {
      "latitude": 38.522919,
      "longitude": -7.91344,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1661001017,
      "ems": null
    },
    {
      "latitude": 38.523281,
      "longitude": -7.916016,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1661001022,
      "ems": null
    },
    {
      "latitude": 38.523792,
      "longitude": -7.918701,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1661001029,
      "ems": null
    },
    {
      "latitude": 38.524063,
      "longitude": -7.920068,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1661001032,
      "ems": null
    },
    {
      "latitude": 38.524303,
      "longitude": -7.921265,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1661001035,
      "ems": null
    },
    {
      "latitude": 38.524567,
      "longitude": -7.922277,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661001038,
      "ems": null
    },
    {
      "latitude": 38.524979,
      "longitude": -7.92377,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1661001041,
      "ems": null
    },
    {
      "latitude": 38.525345,
      "longitude": -7.925024,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661001044,
      "ems": null
    },
    {
      "latitude": 38.525757,
      "longitude": -7.926278,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1661001047,
      "ems": null
    },
    {
      "latitude": 38.526215,
      "longitude": -7.927551,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1661001050,
      "ems": null
    },
    {
      "latitude": 38.526581,
      "longitude": -7.928726,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1661001053,
      "ems": null
    },
    {
      "latitude": 38.526993,
      "longitude": -7.929979,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1661001056,
      "ems": null
    },
    {
      "latitude": 38.527359,
      "longitude": -7.930995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1661001059,
      "ems": null
    },
    {
      "latitude": 38.527889,
      "longitude": -7.932251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1661001062,
      "ems": null
    },
    {
      "latitude": 38.528503,
      "longitude": -7.933621,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1661001065,
      "ems": null
    },
    {
      "latitude": 38.529007,
      "longitude": -7.934875,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1661001068,
      "ems": null
    },
    {
      "latitude": 38.529518,
      "longitude": -7.936096,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1661001071,
      "ems": null
    },
    {
      "latitude": 38.529785,
      "longitude": -7.936667,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1661001073,
      "ems": null
    },
    {
      "latitude": 38.530357,
      "longitude": -7.937805,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1661001076,
      "ems": null
    },
    {
      "latitude": 38.530884,
      "longitude": -7.938995,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1661001079,
      "ems": null
    },
    {
      "latitude": 38.531055,
      "longitude": -7.939392,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1661001080,
      "ems": null
    },
    {
      "latitude": 38.531616,
      "longitude": -7.941324,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1661001085,
      "ems": null
    },
    {
      "latitude": 38.53194,
      "longitude": -7.94281,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1661001090,
      "ems": null
    },
    {
      "latitude": 38.532303,
      "longitude": -7.944309,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1661001092,
      "ems": null
    },
    {
      "latitude": 38.532578,
      "longitude": -7.945623,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1661001096,
      "ems": null
    },
    {
      "latitude": 38.532871,
      "longitude": -7.947021,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1661001099,
      "ems": null
    },
    {
      "latitude": 38.533127,
      "longitude": -7.94819,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1661001102,
      "ems": null
    },
    {
      "latitude": 38.53331,
      "longitude": -7.949146,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1661001105,
      "ems": null
    },
    {
      "latitude": 38.533539,
      "longitude": -7.950937,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1661001108,
      "ems": null
    },
    {
      "latitude": 38.533585,
      "longitude": -7.953266,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1661001113,
      "ems": null
    },
    {
      "latitude": 38.53363,
      "longitude": -7.955296,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001117,
      "ems": null
    },
    {
      "latitude": 38.533676,
      "longitude": -7.956669,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001120,
      "ems": null
    },
    {
      "latitude": 38.533768,
      "longitude": -7.958102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001123,
      "ems": null
    },
    {
      "latitude": 38.533813,
      "longitude": -7.959535,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001126,
      "ems": null
    },
    {
      "latitude": 38.533848,
      "longitude": -7.960999,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1661001129,
      "ems": null
    },
    {
      "latitude": 38.533848,
      "longitude": -7.96228,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1661001132,
      "ems": null
    },
    {
      "latitude": 38.533859,
      "longitude": -7.963416,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1661001134,
      "ems": null
    },
    {
      "latitude": 38.533989,
      "longitude": -7.965942,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001141,
      "ems": null
    },
    {
      "latitude": 38.534042,
      "longitude": -7.968253,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001147,
      "ems": null
    },
    {
      "latitude": 38.534035,
      "longitude": -7.970581,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1661001152,
      "ems": null
    },
    {
      "latitude": 38.533989,
      "longitude": -7.973938,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1661001159,
      "ems": null
    },
    {
      "latitude": 38.533939,
      "longitude": -7.976501,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1661001164,
      "ems": null
    },
    {
      "latitude": 38.533905,
      "longitude": -7.977866,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1661001167,
      "ems": null
    },
    {
      "latitude": 38.533802,
      "longitude": -7.980652,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1661001174,
      "ems": null
    },
    {
      "latitude": 38.533905,
      "longitude": -7.983538,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1661001179,
      "ems": null
    },
    {
      "latitude": 38.533997,
      "longitude": -7.986225,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1661001185,
      "ems": null
    },
    {
      "latitude": 38.534081,
      "longitude": -7.98938,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001192,
      "ems": null
    },
    {
      "latitude": 38.534134,
      "longitude": -7.990882,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1661001195,
      "ems": null
    },
    {
      "latitude": 38.53418,
      "longitude": -7.991897,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1661001198,
      "ems": null
    },
    {
      "latitude": 38.534405,
      "longitude": -7.993896,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1661001201,
      "ems": null
    },
    {
      "latitude": 38.5345,
      "longitude": -7.996494,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001207,
      "ems": null
    },
    {
      "latitude": 38.534637,
      "longitude": -7.999002,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1661001213,
      "ems": null
    },
    {
      "latitude": 38.534733,
      "longitude": -8.000061,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1661001216,
      "ems": null
    },
    {
      "latitude": 38.534866,
      "longitude": -8.00139,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1661001219,
      "ems": null
    },
    {
      "latitude": 38.535057,
      "longitude": -8.003784,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1661001225,
      "ems": null
    },
    {
      "latitude": 38.535324,
      "longitude": -8.005928,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1661001230,
      "ems": null
    },
    {
      "latitude": 38.535477,
      "longitude": -8.007446,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1661001233,
      "ems": null
    },
    {
      "latitude": 38.53569,
      "longitude": -8.008735,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1661001236,
      "ems": null
    },
    {
      "latitude": 38.535755,
      "longitude": -8.009277,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1661001238,
      "ems": null
    },
    {
      "latitude": 38.536037,
      "longitude": -8.012939,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1661001245,
      "ems": null
    },
    {
      "latitude": 38.536129,
      "longitude": -8.01593,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001251,
      "ems": null
    },
    {
      "latitude": 38.536175,
      "longitude": -8.017395,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1661001254,
      "ems": null
    },
    {
      "latitude": 38.536194,
      "longitude": -8.018885,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1661001257,
      "ems": null
    },
    {
      "latitude": 38.536194,
      "longitude": -8.020437,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1661001260,
      "ems": null
    },
    {
      "latitude": 38.536175,
      "longitude": -8.021729,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1661001263,
      "ems": null
    },
    {
      "latitude": 38.536129,
      "longitude": -8.023254,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1661001266,
      "ems": null
    },
    {
      "latitude": 38.536083,
      "longitude": -8.024719,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1661001269,
      "ems": null
    },
    {
      "latitude": 38.535942,
      "longitude": -8.026306,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1661001272,
      "ems": null
    },
    {
      "latitude": 38.535801,
      "longitude": -8.02771,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1661001275,
      "ems": null
    },
    {
      "latitude": 38.535599,
      "longitude": -8.029155,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1661001278,
      "ems": null
    },
    {
      "latitude": 38.535416,
      "longitude": -8.030647,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1661001281,
      "ems": null
    },
    {
      "latitude": 38.535103,
      "longitude": -8.032166,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1661001284,
      "ems": null
    },
    {
      "latitude": 38.534775,
      "longitude": -8.033216,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1661001287,
      "ems": null
    },
    {
      "latitude": 38.5345,
      "longitude": -8.033872,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1661001288,
      "ems": null
    },
    {
      "latitude": 38.533813,
      "longitude": -8.035305,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1661001292,
      "ems": null
    },
    {
      "latitude": 38.533241,
      "longitude": -8.036438,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1661001296,
      "ems": null
    },
    {
      "latitude": 38.532543,
      "longitude": -8.037781,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1661001298,
      "ems": null
    },
    {
      "latitude": 38.532349,
      "longitude": -8.038171,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1661001299,
      "ems": null
    },
    {
      "latitude": 38.531567,
      "longitude": -8.039551,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1661001303,
      "ems": null
    },
    {
      "latitude": 38.530884,
      "longitude": -8.040619,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1661001306,
      "ems": null
    },
    {
      "latitude": 38.530029,
      "longitude": -8.041687,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1661001309,
      "ems": null
    },
    {
      "latitude": 38.529053,
      "longitude": -8.042603,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1661001312,
      "ems": null
    },
    {
      "latitude": 38.528137,
      "longitude": -8.043426,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1661001315,
      "ems": null
    },
    {
      "latitude": 38.527798,
      "longitude": -8.043701,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1661001317,
      "ems": null
    },
    {
      "latitude": 38.527039,
      "longitude": -8.04438,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1661001321,
      "ems": null
    },
    {
      "latitude": 38.524612,
      "longitude": -8.04653,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1661001326,
      "ems": null
    },
    {
      "latitude": 38.523651,
      "longitude": -8.047424,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1661001329,
      "ems": null
    },
    {
      "latitude": 38.522736,
      "longitude": -8.048322,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1661001332,
      "ems": null
    },
    {
      "latitude": 38.521225,
      "longitude": -8.050292,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1661001337,
      "ems": null
    },
    {
      "latitude": 38.520535,
      "longitude": -8.051331,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1661001340,
      "ems": null
    },
    {
      "latitude": 38.520035,
      "longitude": -8.052442,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1661001343,
      "ems": null
    },
    {
      "latitude": 38.519463,
      "longitude": -8.05365,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1661001347,
      "ems": null
    },
    {
      "latitude": 38.518936,
      "longitude": -8.054889,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1661001350,
      "ems": null
    },
    {
      "latitude": 38.51844,
      "longitude": -8.05603,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1661001353,
      "ems": null
    },
    {
      "latitude": 38.517925,
      "longitude": -8.057251,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1661001356,
      "ems": null
    },
    {
      "latitude": 38.517517,
      "longitude": -8.058651,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1661001359,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -8.059509,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1661001362,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.061337,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1661001365,
      "ems": null
    },
    {
      "latitude": 38.516575,
      "longitude": -8.062622,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1661001368,
      "ems": null
    },
    {
      "latitude": 38.516296,
      "longitude": -8.063904,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1661001370,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.064941,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1661001374,
      "ems": null
    },
    {
      "latitude": 38.515644,
      "longitude": -8.066833,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1661001377,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.068145,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1661001380,
      "ems": null
    },
    {
      "latitude": 38.514854,
      "longitude": -8.069214,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1661001383,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.071472,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1661001388,
      "ems": null
    },
    {
      "latitude": 38.513458,
      "longitude": -8.072571,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 241,
      "squawk": "3277",
      "timestamp": 1661001392,
      "ems": null
    },
    {
      "latitude": 38.512894,
      "longitude": -8.073816,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661001395,
      "ems": null
    },
    {
      "latitude": 38.512436,
      "longitude": -8.074951,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001398,
      "ems": null
    },
    {
      "latitude": 38.511967,
      "longitude": -8.076904,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001404,
      "ems": null
    },
    {
      "latitude": 38.511875,
      "longitude": -8.077881,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001407,
      "ems": null
    },
    {
      "latitude": 38.511841,
      "longitude": -8.079847,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 271,
      "squawk": "3277",
      "timestamp": 1661001413,
      "ems": null
    },
    {
      "latitude": 38.511795,
      "longitude": -8.080743,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001416,
      "ems": null
    },
    {
      "latitude": 38.511688,
      "longitude": -8.081421,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001418,
      "ems": null
    },
    {
      "latitude": 38.511612,
      "longitude": -8.081997,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001422,
      "ems": null
    },
    {
      "latitude": 38.511383,
      "longitude": -8.083131,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001425,
      "ems": null
    },
    {
      "latitude": 38.5112,
      "longitude": -8.083907,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001427,
      "ems": null
    },
    {
      "latitude": 38.511063,
      "longitude": -8.084863,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661001430,
      "ems": null
    },
    {
      "latitude": 38.510899,
      "longitude": -8.085876,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001434,
      "ems": null
    },
    {
      "latitude": 38.510712,
      "longitude": -8.086609,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001436,
      "ems": null
    },
    {
      "latitude": 38.510433,
      "longitude": -8.087708,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001440,
      "ems": null
    },
    {
      "latitude": 38.510147,
      "longitude": -8.088684,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001443,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -8.0896,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661001446,
      "ems": null
    },
    {
      "latitude": 38.509594,
      "longitude": -8.090393,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001448,
      "ems": null
    },
    {
      "latitude": 38.509277,
      "longitude": -8.09155,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001452,
      "ems": null
    },
    {
      "latitude": 38.50885,
      "longitude": -8.09314,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001457,
      "ems": null
    },
    {
      "latitude": 38.508476,
      "longitude": -8.09436,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001461,
      "ems": null
    },
    {
      "latitude": 38.508198,
      "longitude": -8.095337,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001464,
      "ems": null
    },
    {
      "latitude": 38.507904,
      "longitude": -8.096208,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001467,
      "ems": null
    },
    {
      "latitude": 38.507217,
      "longitude": -8.098297,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001473,
      "ems": null
    },
    {
      "latitude": 38.506569,
      "longitude": -8.100281,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661001479,
      "ems": null
    },
    {
      "latitude": 38.505936,
      "longitude": -8.102417,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661001485,
      "ems": null
    },
    {
      "latitude": 38.50531,
      "longitude": -8.104492,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001491,
      "ems": null
    },
    {
      "latitude": 38.504799,
      "longitude": -8.106506,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001497,
      "ems": null
    },
    {
      "latitude": 38.504471,
      "longitude": -8.10797,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001499,
      "ems": null
    },
    {
      "latitude": 38.504101,
      "longitude": -8.109497,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001503,
      "ems": null
    },
    {
      "latitude": 38.503822,
      "longitude": -8.110657,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001506,
      "ems": null
    },
    {
      "latitude": 38.503143,
      "longitude": -8.113403,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001512,
      "ems": null
    },
    {
      "latitude": 38.502518,
      "longitude": -8.116089,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001518,
      "ems": null
    },
    {
      "latitude": 38.501999,
      "longitude": -8.118538,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001523,
      "ems": null
    },
    {
      "latitude": 38.501541,
      "longitude": -8.121033,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001530,
      "ems": null
    },
    {
      "latitude": 38.50098,
      "longitude": -8.12384,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001536,
      "ems": null
    },
    {
      "latitude": 38.500515,
      "longitude": -8.126282,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001542,
      "ems": null
    },
    {
      "latitude": 38.500259,
      "longitude": -8.127673,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661001545,
      "ems": null
    },
    {
      "latitude": 38.500122,
      "longitude": -8.128748,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001548,
      "ems": null
    },
    {
      "latitude": 38.499985,
      "longitude": -8.130062,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661001551,
      "ems": null
    },
    {
      "latitude": 38.499912,
      "longitude": -8.131348,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001554,
      "ems": null
    },
    {
      "latitude": 38.499847,
      "longitude": -8.132569,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001557,
      "ems": null
    },
    {
      "latitude": 38.49971,
      "longitude": -8.134182,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001560,
      "ems": null
    },
    {
      "latitude": 38.499584,
      "longitude": -8.135376,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661001563,
      "ems": null
    },
    {
      "latitude": 38.499527,
      "longitude": -8.136689,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001566,
      "ems": null
    },
    {
      "latitude": 38.499435,
      "longitude": -8.138062,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001569,
      "ems": null
    },
    {
      "latitude": 38.499352,
      "longitude": -8.139343,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001572,
      "ems": null
    },
    {
      "latitude": 38.49926,
      "longitude": -8.140564,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001575,
      "ems": null
    },
    {
      "latitude": 38.499069,
      "longitude": -8.143079,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001581,
      "ems": null
    },
    {
      "latitude": 38.498978,
      "longitude": -8.145945,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "3277",
      "timestamp": 1661001587,
      "ems": null
    },
    {
      "latitude": 38.498886,
      "longitude": -8.148682,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001593,
      "ems": null
    },
    {
      "latitude": 38.498657,
      "longitude": -8.151438,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661001599,
      "ems": null
    },
    {
      "latitude": 38.498375,
      "longitude": -8.152954,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001602,
      "ems": null
    },
    {
      "latitude": 38.498051,
      "longitude": -8.154236,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001605,
      "ems": null
    },
    {
      "latitude": 38.497742,
      "longitude": -8.155558,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001608,
      "ems": null
    },
    {
      "latitude": 38.497444,
      "longitude": -8.156555,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001611,
      "ems": null
    },
    {
      "latitude": 38.496979,
      "longitude": -8.158264,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001614,
      "ems": null
    },
    {
      "latitude": 38.496597,
      "longitude": -8.159617,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001617,
      "ems": null
    },
    {
      "latitude": 38.496185,
      "longitude": -8.160991,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001620,
      "ems": null
    },
    {
      "latitude": 38.49577,
      "longitude": -8.162415,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661001623,
      "ems": null
    },
    {
      "latitude": 38.495361,
      "longitude": -8.163558,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001626,
      "ems": null
    },
    {
      "latitude": 38.494858,
      "longitude": -8.165111,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001629,
      "ems": null
    },
    {
      "latitude": 38.494419,
      "longitude": -8.166443,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001632,
      "ems": null
    },
    {
      "latitude": 38.494045,
      "longitude": -8.167603,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661001635,
      "ems": null
    },
    {
      "latitude": 38.49316,
      "longitude": -8.170349,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001641,
      "ems": null
    },
    {
      "latitude": 38.492661,
      "longitude": -8.171798,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001644,
      "ems": null
    },
    {
      "latitude": 38.491699,
      "longitude": -8.174485,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001650,
      "ems": null
    },
    {
      "latitude": 38.490833,
      "longitude": -8.176941,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001656,
      "ems": null
    },
    {
      "latitude": 38.489948,
      "longitude": -8.179443,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001662,
      "ems": null
    },
    {
      "latitude": 38.488972,
      "longitude": -8.182129,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001669,
      "ems": null
    },
    {
      "latitude": 38.488087,
      "longitude": -8.184326,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 241,
      "squawk": "3277",
      "timestamp": 1661001674,
      "ems": null
    },
    {
      "latitude": 38.487442,
      "longitude": -8.18577,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661001678,
      "ems": null
    },
    {
      "latitude": 38.487297,
      "longitude": -8.186157,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661001679,
      "ems": null
    },
    {
      "latitude": 38.486458,
      "longitude": -8.187866,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 236,
      "squawk": "3277",
      "timestamp": 1661001683,
      "ems": null
    },
    {
      "latitude": 38.485947,
      "longitude": -8.188904,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661001686,
      "ems": null
    },
    {
      "latitude": 38.485199,
      "longitude": -8.190487,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661001689,
      "ems": null
    },
    {
      "latitude": 38.484642,
      "longitude": -8.19165,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661001692,
      "ems": null
    },
    {
      "latitude": 38.484085,
      "longitude": -8.19281,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 236,
      "squawk": "3277",
      "timestamp": 1661001695,
      "ems": null
    },
    {
      "latitude": 38.483433,
      "longitude": -8.194031,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 234,
      "squawk": "3277",
      "timestamp": 1661001698,
      "ems": null
    },
    {
      "latitude": 38.482872,
      "longitude": -8.195007,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 235,
      "squawk": "3277",
      "timestamp": 1661001701,
      "ems": null
    },
    {
      "latitude": 38.481617,
      "longitude": -8.19751,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661001707,
      "ems": null
    },
    {
      "latitude": 38.480221,
      "longitude": -8.200378,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 237,
      "squawk": "3277",
      "timestamp": 1661001713,
      "ems": null
    },
    {
      "latitude": 38.478928,
      "longitude": -8.202667,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661001719,
      "ems": null
    },
    {
      "latitude": 38.478104,
      "longitude": -8.203861,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 229,
      "squawk": "3277",
      "timestamp": 1661001722,
      "ems": null
    },
    {
      "latitude": 38.477474,
      "longitude": -8.204773,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 227,
      "squawk": "3277",
      "timestamp": 1661001725,
      "ems": null
    },
    {
      "latitude": 38.476639,
      "longitude": -8.205892,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 226,
      "squawk": "3277",
      "timestamp": 1661001728,
      "ems": null
    },
    {
      "latitude": 38.475891,
      "longitude": -8.206848,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 223,
      "squawk": "3277",
      "timestamp": 1661001731,
      "ems": null
    },
    {
      "latitude": 38.475128,
      "longitude": -8.207683,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 221,
      "squawk": "3277",
      "timestamp": 1661001734,
      "ems": null
    },
    {
      "latitude": 38.474213,
      "longitude": -8.208697,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 220,
      "squawk": "3277",
      "timestamp": 1661001737,
      "ems": null
    },
    {
      "latitude": 38.47348,
      "longitude": -8.209534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "3277",
      "timestamp": 1661001740,
      "ems": null
    },
    {
      "latitude": 38.472519,
      "longitude": -8.210489,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 218,
      "squawk": "3277",
      "timestamp": 1661001743,
      "ems": null
    },
    {
      "latitude": 38.471748,
      "longitude": -8.211304,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 219,
      "squawk": "3277",
      "timestamp": 1661001746,
      "ems": null
    },
    {
      "latitude": 38.470825,
      "longitude": -8.21234,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "3277",
      "timestamp": 1661001749,
      "ems": null
    },
    {
      "latitude": 38.469513,
      "longitude": -8.214294,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001755,
      "ems": null
    },
    {
      "latitude": 38.469177,
      "longitude": -8.215564,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001758,
      "ems": null
    },
    {
      "latitude": 38.468719,
      "longitude": -8.217057,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001761,
      "ems": null
    },
    {
      "latitude": 38.468349,
      "longitude": -8.218323,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661001764,
      "ems": null
    },
    {
      "latitude": 38.467987,
      "longitude": -8.219505,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661001767,
      "ems": null
    },
    {
      "latitude": 38.467606,
      "longitude": -8.220581,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001770,
      "ems": null
    },
    {
      "latitude": 38.467072,
      "longitude": -8.221953,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 242,
      "squawk": "3277",
      "timestamp": 1661001773,
      "ems": null
    },
    {
      "latitude": 38.466568,
      "longitude": -8.223028,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661001776,
      "ems": null
    },
    {
      "latitude": 38.466019,
      "longitude": -8.224222,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661001779,
      "ems": null
    },
    {
      "latitude": 38.465603,
      "longitude": -8.22522,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 243,
      "squawk": "3277",
      "timestamp": 1661001782,
      "ems": null
    },
    {
      "latitude": 38.464905,
      "longitude": -8.228027,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661001788,
      "ems": null
    },
    {
      "latitude": 38.464809,
      "longitude": -8.229431,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001791,
      "ems": null
    },
    {
      "latitude": 38.464737,
      "longitude": -8.230611,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001794,
      "ems": null
    },
    {
      "latitude": 38.4646,
      "longitude": -8.231984,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661001798,
      "ems": null
    },
    {
      "latitude": 38.464508,
      "longitude": -8.233297,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661001800,
      "ems": null
    },
    {
      "latitude": 38.464371,
      "longitude": -8.234612,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661001804,
      "ems": null
    },
    {
      "latitude": 38.464207,
      "longitude": -8.235962,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661001806,
      "ems": null
    },
    {
      "latitude": 38.464066,
      "longitude": -8.237305,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661001809,
      "ems": null
    },
    {
      "latitude": 38.463879,
      "longitude": -8.238708,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661001812,
      "ems": null
    },
    {
      "latitude": 38.46373,
      "longitude": -8.240403,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661001815,
      "ems": null
    },
    {
      "latitude": 38.463459,
      "longitude": -8.243408,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661001821,
      "ems": null
    },
    {
      "latitude": 38.463135,
      "longitude": -8.246135,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661001827,
      "ems": null
    },
    {
      "latitude": 38.462669,
      "longitude": -8.249023,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001833,
      "ems": null
    },
    {
      "latitude": 38.46225,
      "longitude": -8.251831,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661001839,
      "ems": null
    },
    {
      "latitude": 38.461784,
      "longitude": -8.254517,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001846,
      "ems": null
    },
    {
      "latitude": 38.46146,
      "longitude": -8.255798,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001848,
      "ems": null
    },
    {
      "latitude": 38.461086,
      "longitude": -8.257263,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001851,
      "ems": null
    },
    {
      "latitude": 38.460709,
      "longitude": -8.258614,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001855,
      "ems": null
    },
    {
      "latitude": 38.460388,
      "longitude": -8.259827,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001857,
      "ems": null
    },
    {
      "latitude": 38.460114,
      "longitude": -8.260882,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001861,
      "ems": null
    },
    {
      "latitude": 38.459793,
      "longitude": -8.262495,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001863,
      "ems": null
    },
    {
      "latitude": 38.459473,
      "longitude": -8.265062,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661001869,
      "ems": null
    },
    {
      "latitude": 38.459381,
      "longitude": -8.266436,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001872,
      "ems": null
    },
    {
      "latitude": 38.459316,
      "longitude": -8.266785,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001873,
      "ems": null
    },
    {
      "latitude": 38.459225,
      "longitude": -8.267761,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001876,
      "ems": null
    },
    {
      "latitude": 38.458851,
      "longitude": -8.269409,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001882,
      "ems": null
    },
    {
      "latitude": 38.458145,
      "longitude": -8.271749,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001886,
      "ems": null
    },
    {
      "latitude": 38.457642,
      "longitude": -8.273421,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001890,
      "ems": null
    },
    {
      "latitude": 38.45755,
      "longitude": -8.27372,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001891,
      "ems": null
    },
    {
      "latitude": 38.456955,
      "longitude": -8.27581,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001895,
      "ems": null
    },
    {
      "latitude": 38.456711,
      "longitude": -8.276794,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661001897,
      "ems": null
    },
    {
      "latitude": 38.45636,
      "longitude": -8.278378,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001901,
      "ems": null
    },
    {
      "latitude": 38.456104,
      "longitude": -8.27948,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001903,
      "ems": null
    },
    {
      "latitude": 38.455719,
      "longitude": -8.281005,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001907,
      "ems": null
    },
    {
      "latitude": 38.455082,
      "longitude": -8.283508,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661001912,
      "ems": null
    },
    {
      "latitude": 38.454483,
      "longitude": -8.286139,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001919,
      "ems": null
    },
    {
      "latitude": 38.454346,
      "longitude": -8.286797,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661001920,
      "ems": null
    },
    {
      "latitude": 38.454071,
      "longitude": -8.288767,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661001924,
      "ems": null
    },
    {
      "latitude": 38.453873,
      "longitude": -8.2901,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661001927,
      "ems": null
    },
    {
      "latitude": 38.453705,
      "longitude": -8.291453,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661001930,
      "ems": null
    },
    {
      "latitude": 38.453659,
      "longitude": -8.293125,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661001933,
      "ems": null
    },
    {
      "latitude": 38.453613,
      "longitude": -8.294559,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 269,
      "squawk": "3277",
      "timestamp": 1661001936,
      "ems": null
    },
    {
      "latitude": 38.45359,
      "longitude": -8.296082,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661001939,
      "ems": null
    },
    {
      "latitude": 38.453476,
      "longitude": -8.297424,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001942,
      "ems": null
    },
    {
      "latitude": 38.453339,
      "longitude": -8.298858,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661001945,
      "ems": null
    },
    {
      "latitude": 38.453247,
      "longitude": -8.299753,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661001948,
      "ems": null
    },
    {
      "latitude": 38.452744,
      "longitude": -8.302798,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661001954,
      "ems": null
    },
    {
      "latitude": 38.452469,
      "longitude": -8.304231,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001957,
      "ems": null
    },
    {
      "latitude": 38.452194,
      "longitude": -8.305359,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001960,
      "ems": null
    },
    {
      "latitude": 38.451916,
      "longitude": -8.306519,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661001963,
      "ems": null
    },
    {
      "latitude": 38.451645,
      "longitude": -8.307933,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661001966,
      "ems": null
    },
    {
      "latitude": 38.451324,
      "longitude": -8.309306,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661001969,
      "ems": null
    },
    {
      "latitude": 38.450985,
      "longitude": -8.310486,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661001972,
      "ems": null
    },
    {
      "latitude": 38.450592,
      "longitude": -8.311635,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661001975,
      "ems": null
    },
    {
      "latitude": 38.450134,
      "longitude": -8.31271,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661001978,
      "ems": null
    },
    {
      "latitude": 38.449631,
      "longitude": -8.313545,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 232,
      "squawk": "3277",
      "timestamp": 1661001981,
      "ems": null
    },
    {
      "latitude": 38.449036,
      "longitude": -8.31462,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 233,
      "squawk": "3277",
      "timestamp": 1661001984,
      "ems": null
    },
    {
      "latitude": 38.448425,
      "longitude": -8.315613,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661001987,
      "ems": null
    },
    {
      "latitude": 38.447727,
      "longitude": -8.316711,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661001991,
      "ems": null
    },
    {
      "latitude": 38.447159,
      "longitude": -8.317606,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661001993,
      "ems": null
    },
    {
      "latitude": 38.446514,
      "longitude": -8.318665,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661001997,
      "ems": null
    },
    {
      "latitude": 38.445866,
      "longitude": -8.319702,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 232,
      "squawk": "3277",
      "timestamp": 1661002000,
      "ems": null
    },
    {
      "latitude": 38.445259,
      "longitude": -8.32074,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 233,
      "squawk": "3277",
      "timestamp": 1661002003,
      "ems": null
    },
    {
      "latitude": 38.444187,
      "longitude": -8.322998,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 243,
      "squawk": "3277",
      "timestamp": 1661002009,
      "ems": null
    },
    {
      "latitude": 38.443768,
      "longitude": -8.324097,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661002012,
      "ems": null
    },
    {
      "latitude": 38.443405,
      "longitude": -8.325249,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661002015,
      "ems": null
    },
    {
      "latitude": 38.442978,
      "longitude": -8.326904,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002018,
      "ems": null
    },
    {
      "latitude": 38.442719,
      "longitude": -8.328174,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002021,
      "ems": null
    },
    {
      "latitude": 38.442513,
      "longitude": -8.329407,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002024,
      "ems": null
    },
    {
      "latitude": 38.44228,
      "longitude": -8.330688,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002027,
      "ems": null
    },
    {
      "latitude": 38.442032,
      "longitude": -8.331995,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002030,
      "ems": null
    },
    {
      "latitude": 38.441769,
      "longitude": -8.333191,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002033,
      "ems": null
    },
    {
      "latitude": 38.441483,
      "longitude": -8.334265,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002036,
      "ems": null
    },
    {
      "latitude": 38.440887,
      "longitude": -8.336713,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002042,
      "ems": null
    },
    {
      "latitude": 38.440613,
      "longitude": -8.338086,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002045,
      "ems": null
    },
    {
      "latitude": 38.440155,
      "longitude": -8.340295,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002051,
      "ems": null
    },
    {
      "latitude": 38.439606,
      "longitude": -8.342564,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002057,
      "ems": null
    },
    {
      "latitude": 38.439331,
      "longitude": -8.343519,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002059,
      "ems": null
    },
    {
      "latitude": 38.438919,
      "longitude": -8.344713,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661002062,
      "ems": null
    },
    {
      "latitude": 38.438141,
      "longitude": -8.347341,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661002069,
      "ems": null
    },
    {
      "latitude": 38.437717,
      "longitude": -8.348816,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002072,
      "ems": null
    },
    {
      "latitude": 38.437344,
      "longitude": -8.349976,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002075,
      "ems": null
    },
    {
      "latitude": 38.437042,
      "longitude": -8.350863,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661002078,
      "ems": null
    },
    {
      "latitude": 38.436646,
      "longitude": -8.35199,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 243,
      "squawk": "3277",
      "timestamp": 1661002080,
      "ems": null
    },
    {
      "latitude": 38.436043,
      "longitude": -8.353455,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661002084,
      "ems": null
    },
    {
      "latitude": 38.435528,
      "longitude": -8.354553,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661002087,
      "ems": null
    },
    {
      "latitude": 38.435017,
      "longitude": -8.355713,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661002090,
      "ems": null
    },
    {
      "latitude": 38.434479,
      "longitude": -8.356894,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661002093,
      "ems": null
    },
    {
      "latitude": 38.434021,
      "longitude": -8.357968,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661002095,
      "ems": null
    },
    {
      "latitude": 38.433296,
      "longitude": -8.359436,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661002099,
      "ems": null
    },
    {
      "latitude": 38.432739,
      "longitude": -8.360715,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661002102,
      "ems": null
    },
    {
      "latitude": 38.432144,
      "longitude": -8.362088,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 241,
      "squawk": "3277",
      "timestamp": 1661002105,
      "ems": null
    },
    {
      "latitude": 38.431198,
      "longitude": -8.364685,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 247,
      "squawk": "3277",
      "timestamp": 1661002111,
      "ems": null
    },
    {
      "latitude": 38.430733,
      "longitude": -8.366089,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002114,
      "ems": null
    },
    {
      "latitude": 38.430317,
      "longitude": -8.367615,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002117,
      "ems": null
    },
    {
      "latitude": 38.429989,
      "longitude": -8.368835,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002120,
      "ems": null
    },
    {
      "latitude": 38.429626,
      "longitude": -8.370388,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002123,
      "ems": null
    },
    {
      "latitude": 38.42926,
      "longitude": -8.371941,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002126,
      "ems": null
    },
    {
      "latitude": 38.42894,
      "longitude": -8.373314,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002129,
      "ems": null
    },
    {
      "latitude": 38.428619,
      "longitude": -8.374687,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002132,
      "ems": null
    },
    {
      "latitude": 38.428299,
      "longitude": -8.376,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661002135,
      "ems": null
    },
    {
      "latitude": 38.427429,
      "longitude": -8.378418,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 242,
      "squawk": "3277",
      "timestamp": 1661002141,
      "ems": null
    },
    {
      "latitude": 38.427017,
      "longitude": -8.379225,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661002144,
      "ems": null
    },
    {
      "latitude": 38.426102,
      "longitude": -8.381076,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 236,
      "squawk": "3277",
      "timestamp": 1661002147,
      "ems": null
    },
    {
      "latitude": 38.425507,
      "longitude": -8.38227,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 238,
      "squawk": "3277",
      "timestamp": 1661002150,
      "ems": null
    },
    {
      "latitude": 38.425049,
      "longitude": -8.383285,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 240,
      "squawk": "3277",
      "timestamp": 1661002153,
      "ems": null
    },
    {
      "latitude": 38.424404,
      "longitude": -8.384827,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 245,
      "squawk": "3277",
      "timestamp": 1661002156,
      "ems": null
    },
    {
      "latitude": 38.423985,
      "longitude": -8.38623,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002159,
      "ems": null
    },
    {
      "latitude": 38.423172,
      "longitude": -8.388957,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 248,
      "squawk": "3277",
      "timestamp": 1661002165,
      "ems": null
    },
    {
      "latitude": 38.42226,
      "longitude": -8.391479,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 242,
      "squawk": "3277",
      "timestamp": 1661002171,
      "ems": null
    },
    {
      "latitude": 38.421112,
      "longitude": -8.393972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 237,
      "squawk": "3277",
      "timestamp": 1661002177,
      "ems": null
    },
    {
      "latitude": 38.419785,
      "longitude": -8.396182,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 231,
      "squawk": "3277",
      "timestamp": 1661002183,
      "ems": null
    },
    {
      "latitude": 38.419235,
      "longitude": -8.397095,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 229,
      "squawk": "3277",
      "timestamp": 1661002186,
      "ems": null
    },
    {
      "latitude": 38.418503,
      "longitude": -8.398152,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 227,
      "squawk": "3277",
      "timestamp": 1661002189,
      "ems": null
    },
    {
      "latitude": 38.417679,
      "longitude": -8.399167,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 224,
      "squawk": "3277",
      "timestamp": 1661002192,
      "ems": null
    },
    {
      "latitude": 38.416946,
      "longitude": -8.400003,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 220,
      "squawk": "3277",
      "timestamp": 1661002195,
      "ems": null
    },
    {
      "latitude": 38.415985,
      "longitude": -8.401018,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 219,
      "squawk": "3277",
      "timestamp": 1661002198,
      "ems": null
    },
    {
      "latitude": 38.415234,
      "longitude": -8.401855,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 221,
      "squawk": "3277",
      "timestamp": 1661002201,
      "ems": null
    },
    {
      "latitude": 38.414951,
      "longitude": -8.402161,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 223,
      "squawk": "3277",
      "timestamp": 1661002202,
      "ems": null
    },
    {
      "latitude": 38.413879,
      "longitude": -8.403646,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 228,
      "squawk": "3277",
      "timestamp": 1661002206,
      "ems": null
    },
    {
      "latitude": 38.412487,
      "longitude": -8.406189,
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
      "heading": 239,
      "squawk": "3277",
      "timestamp": 1661002212,
      "ems": null
    },
    {
      "latitude": 38.411972,
      "longitude": -8.407348,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 241,
      "squawk": "3277",
      "timestamp": 1661002214,
      "ems": null
    },
    {
      "latitude": 38.411407,
      "longitude": -8.408807,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 244,
      "squawk": "3277",
      "timestamp": 1661002218,
      "ems": null
    },
    {
      "latitude": 38.411041,
      "longitude": -8.409976,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 249,
      "squawk": "3277",
      "timestamp": 1661002221,
      "ems": null
    },
    {
      "latitude": 38.410767,
      "longitude": -8.411028,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002223,
      "ems": null
    },
    {
      "latitude": 38.410446,
      "longitude": -8.412255,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002226,
      "ems": null
    },
    {
      "latitude": 38.410172,
      "longitude": -8.413774,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002230,
      "ems": null
    },
    {
      "latitude": 38.409878,
      "longitude": -8.41505,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002233,
      "ems": null
    },
    {
      "latitude": 38.409554,
      "longitude": -8.416364,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661002235,
      "ems": null
    },
    {
      "latitude": 38.409134,
      "longitude": -8.417617,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661002239,
      "ems": null
    },
    {
      "latitude": 38.408249,
      "longitude": -8.419766,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 241,
      "squawk": "3277",
      "timestamp": 1661002244,
      "ems": null
    },
    {
      "latitude": 38.407242,
      "longitude": -8.422248,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 245,
      "squawk": "3277",
      "timestamp": 1661002251,
      "ems": null
    },
    {
      "latitude": 38.406853,
      "longitude": -8.423409,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 246,
      "squawk": "3277",
      "timestamp": 1661002253,
      "ems": null
    },
    {
      "latitude": 38.4062,
      "longitude": -8.425977,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002260,
      "ems": null
    },
    {
      "latitude": 38.405781,
      "longitude": -8.428424,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002266,
      "ems": null
    },
    {
      "latitude": 38.405548,
      "longitude": -8.429669,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002269,
      "ems": null
    },
    {
      "latitude": 38.405273,
      "longitude": -8.430897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002272,
      "ems": null
    },
    {
      "latitude": 38.404999,
      "longitude": -8.432065,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002275,
      "ems": null
    },
    {
      "latitude": 38.404804,
      "longitude": -8.433499,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002278,
      "ems": null
    },
    {
      "latitude": 38.404667,
      "longitude": -8.434634,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002281,
      "ems": null
    },
    {
      "latitude": 38.404404,
      "longitude": -8.436097,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002283,
      "ems": null
    },
    {
      "latitude": 38.40358,
      "longitude": -8.438844,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "3277",
      "timestamp": 1661002290,
      "ems": null
    },
    {
      "latitude": 38.403408,
      "longitude": -8.439291,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "squawk": "3277",
      "timestamp": 1661002291,
      "ems": null
    },
    {
      "latitude": 38.402802,
      "longitude": -8.440831,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 242,
      "squawk": "3277",
      "timestamp": 1661002295,
      "ems": null
    },
    {
      "latitude": 38.402336,
      "longitude": -8.442217,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 242,
      "squawk": "3277",
      "timestamp": 1661002297,
      "ems": null
    },
    {
      "latitude": 38.401657,
      "longitude": -8.444396,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002304,
      "ems": null
    },
    {
      "latitude": 38.401173,
      "longitude": -8.446218,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002306,
      "ems": null
    },
    {
      "latitude": 38.400803,
      "longitude": -8.44771,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002310,
      "ems": null
    },
    {
      "latitude": 38.400238,
      "longitude": -8.450064,
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002315,
      "ems": null
    },
    {
      "latitude": 38.399918,
      "longitude": -8.451412,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002318,
      "ems": null
    },
    {
      "latitude": 38.399597,
      "longitude": -8.452752,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002321,
      "ems": null
    },
    {
      "latitude": 38.399323,
      "longitude": -8.454213,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002324,
      "ems": null
    },
    {
      "latitude": 38.399174,
      "longitude": -8.455114,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002327,
      "ems": null
    },
    {
      "latitude": 38.3988,
      "longitude": -8.456905,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002330,
      "ems": null
    },
    {
      "latitude": 38.398453,
      "longitude": -8.458596,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002334,
      "ems": null
    },
    {
      "latitude": 38.398224,
      "longitude": -8.460057,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002337,
      "ems": null
    },
    {
      "latitude": 38.398041,
      "longitude": -8.46105,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002340,
      "ems": null
    },
    {
      "latitude": 38.397766,
      "longitude": -8.462687,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002343,
      "ems": null
    },
    {
      "latitude": 38.397217,
      "longitude": -8.465444,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002349,
      "ems": null
    },
    {
      "latitude": 38.396843,
      "longitude": -8.467593,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002355,
      "ems": null
    },
    {
      "latitude": 38.396301,
      "longitude": -8.471219,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661002360,
      "ems": null
    },
    {
      "latitude": 38.396164,
      "longitude": -8.472796,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002363,
      "ems": null
    },
    {
      "latitude": 38.396072,
      "longitude": -8.474316,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661002367,
      "ems": null
    },
    {
      "latitude": 38.396008,
      "longitude": -8.475833,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661002369,
      "ems": null
    },
    {
      "latitude": 38.395912,
      "longitude": -8.477325,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661002372,
      "ems": null
    },
    {
      "latitude": 38.395798,
      "longitude": -8.478932,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002376,
      "ems": null
    },
    {
      "latitude": 38.395615,
      "longitude": -8.480393,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002379,
      "ems": null
    },
    {
      "latitude": 38.395493,
      "longitude": -8.481744,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002381,
      "ems": null
    },
    {
      "latitude": 38.395111,
      "longitude": -8.484426,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002387,
      "ems": null
    },
    {
      "latitude": 38.394791,
      "longitude": -8.485945,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002390,
      "ems": null
    },
    {
      "latitude": 38.394516,
      "longitude": -8.487289,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002393,
      "ems": null
    },
    {
      "latitude": 38.394196,
      "longitude": -8.488925,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002397,
      "ems": null
    },
    {
      "latitude": 38.393921,
      "longitude": -8.490386,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002400,
      "ems": null
    },
    {
      "latitude": 38.393692,
      "longitude": -8.491731,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002403,
      "ems": null
    },
    {
      "latitude": 38.393417,
      "longitude": -8.493016,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002406,
      "ems": null
    },
    {
      "latitude": 38.39312,
      "longitude": -8.494581,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002408,
      "ems": null
    },
    {
      "latitude": 38.392887,
      "longitude": -8.495894,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "squawk": "3277",
      "timestamp": 1661002412,
      "ems": null
    },
    {
      "latitude": 38.392639,
      "longitude": -8.497282,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002414,
      "ems": null
    },
    {
      "latitude": 38.391907,
      "longitude": -8.50032,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002420,
      "ems": null
    },
    {
      "latitude": 38.39122,
      "longitude": -8.503126,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002427,
      "ems": null
    },
    {
      "latitude": 38.39056,
      "longitude": -8.506045,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002432,
      "ems": null
    },
    {
      "latitude": 38.389908,
      "longitude": -8.508911,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002438,
      "ems": null
    },
    {
      "latitude": 38.389584,
      "longitude": -8.510165,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002441,
      "ems": null
    },
    {
      "latitude": 38.388977,
      "longitude": -8.513119,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002447,
      "ems": null
    },
    {
      "latitude": 38.388653,
      "longitude": -8.514703,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002450,
      "ems": null
    },
    {
      "latitude": 38.388371,
      "longitude": -8.516195,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "squawk": "3277",
      "timestamp": 1661002454,
      "ems": null
    },
    {
      "latitude": 38.387833,
      "longitude": -8.519137,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002460,
      "ems": null
    },
    {
      "latitude": 38.387253,
      "longitude": -8.521987,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002466,
      "ems": null
    },
    {
      "latitude": 38.386963,
      "longitude": -8.523462,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "squawk": "3277",
      "timestamp": 1661002469,
      "ems": null
    },
    {
      "latitude": 38.386742,
      "longitude": -8.524854,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002471,
      "ems": null
    },
    {
      "latitude": 38.386185,
      "longitude": -8.527719,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002477,
      "ems": null
    },
    {
      "latitude": 38.385681,
      "longitude": -8.530708,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002483,
      "ems": null
    },
    {
      "latitude": 38.385223,
      "longitude": -8.533513,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002489,
      "ems": null
    },
    {
      "latitude": 38.384628,
      "longitude": -8.536494,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002495,
      "ems": null
    },
    {
      "latitude": 38.384041,
      "longitude": -8.539362,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002501,
      "ems": null
    },
    {
      "latitude": 38.383484,
      "longitude": -8.542221,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002507,
      "ems": null
    },
    {
      "latitude": 38.382889,
      "longitude": -8.545259,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002514,
      "ems": null
    },
    {
      "latitude": 38.382339,
      "longitude": -8.547714,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002520,
      "ems": null
    },
    {
      "latitude": 38.381516,
      "longitude": -8.551687,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002527,
      "ems": null
    },
    {
      "latitude": 38.380878,
      "longitude": -8.554528,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002533,
      "ems": null
    },
    {
      "latitude": 38.380325,
      "longitude": -8.55724,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002539,
      "ems": null
    },
    {
      "latitude": 38.379684,
      "longitude": -8.560044,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "squawk": "3277",
      "timestamp": 1661002545,
      "ems": null
    },
    {
      "latitude": 38.378998,
      "longitude": -8.563025,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002552,
      "ems": null
    },
    {
      "latitude": 38.378269,
      "longitude": -8.565873,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002558,
      "ems": null
    },
    {
      "latitude": 38.377899,
      "longitude": -8.56729,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661002560,
      "ems": null
    },
    {
      "latitude": 38.37748,
      "longitude": -8.568799,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661002564,
      "ems": null
    },
    {
      "latitude": 38.376736,
      "longitude": -8.571784,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "squawk": "3277",
      "timestamp": 1661002570,
      "ems": null
    },
    {
      "latitude": 38.375988,
      "longitude": -8.57465,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 251,
      "squawk": "3277",
      "timestamp": 1661002575,
      "ems": null
    },
    {
      "latitude": 38.37529,
      "longitude": -8.577337,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002582,
      "ems": null
    },
    {
      "latitude": 38.374603,
      "longitude": -8.580264,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661002588,
      "ems": null
    },
    {
      "latitude": 38.373989,
      "longitude": -8.583069,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002594,
      "ems": null
    },
    {
      "latitude": 38.373428,
      "longitude": -8.585876,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002600,
      "ems": null
    },
    {
      "latitude": 38.372818,
      "longitude": -8.588737,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002606,
      "ems": null
    },
    {
      "latitude": 38.372589,
      "longitude": -8.589965,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002608,
      "ems": null
    },
    {
      "latitude": 38.372311,
      "longitude": -8.591607,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002612,
      "ems": null
    },
    {
      "latitude": 38.37204,
      "longitude": -8.593003,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002615,
      "ems": null
    },
    {
      "latitude": 38.371613,
      "longitude": -8.595846,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661002621,
      "ems": null
    },
    {
      "latitude": 38.371426,
      "longitude": -8.59728,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002623,
      "ems": null
    },
    {
      "latitude": 38.371216,
      "longitude": -8.59873,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002627,
      "ems": null
    },
    {
      "latitude": 38.371033,
      "longitude": -8.600191,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002630,
      "ems": null
    },
    {
      "latitude": 38.37085,
      "longitude": -8.601418,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002632,
      "ems": null
    },
    {
      "latitude": 38.370346,
      "longitude": -8.604516,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002639,
      "ems": null
    },
    {
      "latitude": 38.369843,
      "longitude": -8.607251,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002644,
      "ems": null
    },
    {
      "latitude": 38.369385,
      "longitude": -8.610359,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002651,
      "ems": null
    },
    {
      "latitude": 38.369007,
      "longitude": -8.613281,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002657,
      "ems": null
    },
    {
      "latitude": 38.368561,
      "longitude": -8.616086,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661002663,
      "ems": null
    },
    {
      "latitude": 38.368214,
      "longitude": -8.619013,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002669,
      "ems": null
    },
    {
      "latitude": 38.368076,
      "longitude": -8.620386,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661002671,
      "ems": null
    },
    {
      "latitude": 38.368027,
      "longitude": -8.621759,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "squawk": "3277",
      "timestamp": 1661002674,
      "ems": null
    },
    {
      "latitude": 38.367691,
      "longitude": -8.624852,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002681,
      "ems": null
    },
    {
      "latitude": 38.367233,
      "longitude": -8.627481,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002687,
      "ems": null
    },
    {
      "latitude": 38.366867,
      "longitude": -8.628884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002690,
      "ems": null
    },
    {
      "latitude": 38.366547,
      "longitude": -8.630228,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002693,
      "ems": null
    },
    {
      "latitude": 38.366226,
      "longitude": -8.631573,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 252,
      "squawk": "3277",
      "timestamp": 1661002695,
      "ems": null
    },
    {
      "latitude": 38.365906,
      "longitude": -8.632975,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002698,
      "ems": null
    },
    {
      "latitude": 38.365631,
      "longitude": -8.634494,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002702,
      "ems": null
    },
    {
      "latitude": 38.365311,
      "longitude": -8.637358,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002707,
      "ems": null
    },
    {
      "latitude": 38.365189,
      "longitude": -8.638896,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002711,
      "ems": null
    },
    {
      "latitude": 38.364815,
      "longitude": -8.641463,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002717,
      "ems": null
    },
    {
      "latitude": 38.364304,
      "longitude": -8.644031,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002722,
      "ems": null
    },
    {
      "latitude": 38.363617,
      "longitude": -8.647292,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002729,
      "ems": null
    },
    {
      "latitude": 38.363235,
      "longitude": -8.650062,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002734,
      "ems": null
    },
    {
      "latitude": 38.362862,
      "longitude": -8.653107,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002741,
      "ems": null
    },
    {
      "latitude": 38.362381,
      "longitude": -8.655883,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002747,
      "ems": null
    },
    {
      "latitude": 38.361877,
      "longitude": -8.658512,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002753,
      "ems": null
    },
    {
      "latitude": 38.361324,
      "longitude": -8.661407,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002759,
      "ems": null
    },
    {
      "latitude": 38.360767,
      "longitude": -8.664212,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002765,
      "ems": null
    },
    {
      "latitude": 38.360458,
      "longitude": -8.665642,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "squawk": "3277",
      "timestamp": 1661002768,
      "ems": null
    },
    {
      "latitude": 38.359882,
      "longitude": -8.668451,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002774,
      "ems": null
    },
    {
      "latitude": 38.359276,
      "longitude": -8.671556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661002780,
      "ems": null
    },
    {
      "latitude": 38.358444,
      "longitude": -8.675401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661002788,
      "ems": null
    },
    {
      "latitude": 38.357693,
      "longitude": -8.679318,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661002796,
      "ems": null
    },
    {
      "latitude": 38.357162,
      "longitude": -8.682297,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661002802,
      "ems": null
    },
    {
      "latitude": 38.356613,
      "longitude": -8.685452,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661002808,
      "ems": null
    },
    {
      "latitude": 38.35643,
      "longitude": -8.686679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002811,
      "ems": null
    },
    {
      "latitude": 38.356205,
      "longitude": -8.688633,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661002814,
      "ems": null
    },
    {
      "latitude": 38.356064,
      "longitude": -8.689894,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661002817,
      "ems": null
    },
    {
      "latitude": 38.355652,
      "longitude": -8.692932,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661002823,
      "ems": null
    },
    {
      "latitude": 38.355228,
      "longitude": -8.695739,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661002829,
      "ems": null
    },
    {
      "latitude": 38.355042,
      "longitude": -8.697351,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002832,
      "ems": null
    },
    {
      "latitude": 38.354855,
      "longitude": -8.699381,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002835,
      "ems": null
    },
    {
      "latitude": 38.354668,
      "longitude": -8.702067,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002841,
      "ems": null
    },
    {
      "latitude": 38.354294,
      "longitude": -8.706128,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661002848,
      "ems": null
    },
    {
      "latitude": 38.354202,
      "longitude": -8.707262,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661002851,
      "ems": null
    },
    {
      "latitude": 38.354015,
      "longitude": -8.710009,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661002855,
      "ems": null
    },
    {
      "latitude": 38.353924,
      "longitude": -8.7118,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661002858,
      "ems": null
    },
    {
      "latitude": 38.353878,
      "longitude": -8.713352,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661002861,
      "ems": null
    },
    {
      "latitude": 38.353737,
      "longitude": -8.716577,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661002867,
      "ems": null
    },
    {
      "latitude": 38.353455,
      "longitude": -8.719931,
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661002873,
      "ems": null
    },
    {
      "latitude": 38.35318,
      "longitude": -8.722911,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661002879,
      "ems": null
    },
    {
      "latitude": 38.352947,
      "longitude": -8.725891,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661002885,
      "ems": null
    },
    {
      "latitude": 38.352951,
      "longitude": -8.727586,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661002888,
      "ems": null
    },
    {
      "latitude": 38.35313,
      "longitude": -8.729115,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 281,
      "squawk": "3277",
      "timestamp": 1661002892,
      "ems": null
    },
    {
      "latitude": 38.353455,
      "longitude": -8.730508,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "3277",
      "timestamp": 1661002894,
      "ems": null
    },
    {
      "latitude": 38.353924,
      "longitude": -8.731862,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 294,
      "squawk": "3277",
      "timestamp": 1661002897,
      "ems": null
    },
    {
      "latitude": 38.354481,
      "longitude": -8.733116,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661002901,
      "ems": null
    },
    {
      "latitude": 38.355087,
      "longitude": -8.734191,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 305,
      "squawk": "3277",
      "timestamp": 1661002903,
      "ems": null
    },
    {
      "latitude": 38.35574,
      "longitude": -8.735444,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661002907,
      "ems": null
    },
    {
      "latitude": 38.356201,
      "longitude": -8.736526,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 298,
      "squawk": "3277",
      "timestamp": 1661002909,
      "ems": null
    },
    {
      "latitude": 38.356705,
      "longitude": -8.737696,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661002913,
      "ems": null
    },
    {
      "latitude": 38.357136,
      "longitude": -8.738729,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661002916,
      "ems": null
    },
    {
      "latitude": 38.357529,
      "longitude": -8.739799,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 295,
      "squawk": "3277",
      "timestamp": 1661002919,
      "ems": null
    },
    {
      "latitude": 38.357925,
      "longitude": -8.740878,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 293,
      "squawk": "3277",
      "timestamp": 1661002921,
      "ems": null
    },
    {
      "latitude": 38.358253,
      "longitude": -8.741893,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 292,
      "squawk": "3277",
      "timestamp": 1661002924,
      "ems": null
    },
    {
      "latitude": 38.359039,
      "longitude": -8.744183,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 292,
      "squawk": "3277",
      "timestamp": 1661002931,
      "ems": null
    },
    {
      "latitude": 38.359406,
      "longitude": -8.745234,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 292,
      "squawk": "3277",
      "timestamp": 1661002934,
      "ems": null
    },
    {
      "latitude": 38.359772,
      "longitude": -8.746403,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 292,
      "squawk": "3277",
      "timestamp": 1661002936,
      "ems": null
    },
    {
      "latitude": 38.360115,
      "longitude": -8.747505,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 292,
      "squawk": "3277",
      "timestamp": 1661002940,
      "ems": null
    },
    {
      "latitude": 38.360962,
      "longitude": -8.749909,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 295,
      "squawk": "3277",
      "timestamp": 1661002946,
      "ems": null
    },
    {
      "latitude": 38.361885,
      "longitude": -8.752222,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 295,
      "squawk": "3277",
      "timestamp": 1661002952,
      "ems": null
    },
    {
      "latitude": 38.362747,
      "longitude": -8.754526,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661002958,
      "ems": null
    },
    {
      "latitude": 38.363651,
      "longitude": -8.75688,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 295,
      "squawk": "3277",
      "timestamp": 1661002964,
      "ems": null
    },
    {
      "latitude": 38.364117,
      "longitude": -8.758074,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661002967,
      "ems": null
    },
    {
      "latitude": 38.364582,
      "longitude": -8.759149,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 298,
      "squawk": "3277",
      "timestamp": 1661002969,
      "ems": null
    },
    {
      "latitude": 38.365513,
      "longitude": -8.761417,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 294,
      "squawk": "3277",
      "timestamp": 1661002976,
      "ems": null
    },
    {
      "latitude": 38.366318,
      "longitude": -8.763818,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 293,
      "squawk": "3277",
      "timestamp": 1661002982,
      "ems": null
    },
    {
      "latitude": 38.367325,
      "longitude": -8.766155,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661002988,
      "ems": null
    },
    {
      "latitude": 38.367935,
      "longitude": -8.767269,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 306,
      "squawk": "3277",
      "timestamp": 1661002991,
      "ems": null
    },
    {
      "latitude": 38.368561,
      "longitude": -8.768317,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 308,
      "squawk": "3277",
      "timestamp": 1661002994,
      "ems": null
    },
    {
      "latitude": 38.369247,
      "longitude": -8.769369,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 309,
      "squawk": "3277",
      "timestamp": 1661002997,
      "ems": null
    },
    {
      "latitude": 38.369843,
      "longitude": -8.770246,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "3277",
      "timestamp": 1661002999,
      "ems": null
    },
    {
      "latitude": 38.370682,
      "longitude": -8.77127,
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003003,
      "ems": null
    },
    {
      "latitude": 38.371475,
      "longitude": -8.771986,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003006,
      "ems": null
    },
    {
      "latitude": 38.372543,
      "longitude": -8.772875,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 329,
      "squawk": "3277",
      "timestamp": 1661003009,
      "ems": null
    },
    {
      "latitude": 38.373459,
      "longitude": -8.773518,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 330,
      "squawk": "3277",
      "timestamp": 1661003012,
      "ems": null
    },
    {
      "latitude": 38.37442,
      "longitude": -8.77422,
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
      "heading": 330,
      "squawk": "3277",
      "timestamp": 1661003015,
      "ems": null
    },
    {
      "latitude": 38.375381,
      "longitude": -8.774862,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661003018,
      "ems": null
    },
    {
      "latitude": 38.376408,
      "longitude": -8.775449,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "3277",
      "timestamp": 1661003021,
      "ems": null
    },
    {
      "latitude": 38.377434,
      "longitude": -8.775987,
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
      "heading": 339,
      "squawk": "3277",
      "timestamp": 1661003024,
      "ems": null
    },
    {
      "latitude": 38.37841,
      "longitude": -8.776464,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 336,
      "squawk": "3277",
      "timestamp": 1661003027,
      "ems": null
    },
    {
      "latitude": 38.37941,
      "longitude": -8.777024,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661003030,
      "ems": null
    },
    {
      "latitude": 38.380272,
      "longitude": -8.777658,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003033,
      "ems": null
    },
    {
      "latitude": 38.381287,
      "longitude": -8.77831,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "3277",
      "timestamp": 1661003036,
      "ems": null
    },
    {
      "latitude": 38.382294,
      "longitude": -8.778953,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "3277",
      "timestamp": 1661003039,
      "ems": null
    },
    {
      "latitude": 38.38316,
      "longitude": -8.77951,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661003042,
      "ems": null
    },
    {
      "latitude": 38.384182,
      "longitude": -8.780046,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 337,
      "squawk": "3277",
      "timestamp": 1661003045,
      "ems": null
    },
    {
      "latitude": 38.385223,
      "longitude": -8.780531,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "3277",
      "timestamp": 1661003048,
      "ems": null
    },
    {
      "latitude": 38.386276,
      "longitude": -8.780998,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661003051,
      "ems": null
    },
    {
      "latitude": 38.388371,
      "longitude": -8.781898,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "3277",
      "timestamp": 1661003057,
      "ems": null
    },
    {
      "latitude": 38.390396,
      "longitude": -8.783044,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661003063,
      "ems": null
    },
    {
      "latitude": 38.392502,
      "longitude": -8.78427,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661003069,
      "ems": null
    },
    {
      "latitude": 38.39447,
      "longitude": -8.78542,
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
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661003075,
      "ems": null
    },
    {
      "latitude": 38.395477,
      "longitude": -8.786024,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661003078,
      "ems": null
    },
    {
      "latitude": 38.396576,
      "longitude": -8.786725,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "3277",
      "timestamp": 1661003081,
      "ems": null
    },
    {
      "latitude": 38.397583,
      "longitude": -8.787426,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003084,
      "ems": null
    },
    {
      "latitude": 38.399506,
      "longitude": -8.788595,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "3277",
      "timestamp": 1661003090,
      "ems": null
    },
    {
      "latitude": 38.401749,
      "longitude": -8.789997,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661003096,
      "ems": null
    },
    {
      "latitude": 38.403671,
      "longitude": -8.791342,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "3277",
      "timestamp": 1661003102,
      "ems": null
    },
    {
      "latitude": 38.405594,
      "longitude": -8.792744,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003108,
      "ems": null
    },
    {
      "latitude": 38.407738,
      "longitude": -8.794197,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003114,
      "ems": null
    },
    {
      "latitude": 38.409786,
      "longitude": -8.79557,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003120,
      "ems": null
    },
    {
      "latitude": 38.411739,
      "longitude": -8.796885,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "squawk": "3277",
      "timestamp": 1661003126,
      "ems": null
    },
    {
      "latitude": 38.413788,
      "longitude": -8.798258,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661003132,
      "ems": null
    },
    {
      "latitude": 38.415802,
      "longitude": -8.799452,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661003138,
      "ems": null
    },
    {
      "latitude": 38.417953,
      "longitude": -8.800586,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 339,
      "squawk": "3277",
      "timestamp": 1661003144,
      "ems": null
    },
    {
      "latitude": 38.418911,
      "longitude": -8.801025,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661003147,
      "ems": null
    },
    {
      "latitude": 38.420151,
      "longitude": -8.801482,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661003150,
      "ems": null
    },
    {
      "latitude": 38.421158,
      "longitude": -8.8019,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661003153,
      "ems": null
    },
    {
      "latitude": 38.422256,
      "longitude": -8.802437,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661003156,
      "ems": null
    },
    {
      "latitude": 38.424088,
      "longitude": -8.803572,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "squawk": "3277",
      "timestamp": 1661003162,
      "ems": null
    },
    {
      "latitude": 38.425003,
      "longitude": -8.804288,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003165,
      "ems": null
    },
    {
      "latitude": 38.425987,
      "longitude": -8.805176,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003168,
      "ems": null
    },
    {
      "latitude": 38.426872,
      "longitude": -8.805969,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003171,
      "ems": null
    },
    {
      "latitude": 38.427795,
      "longitude": -8.806677,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003174,
      "ems": null
    },
    {
      "latitude": 38.428734,
      "longitude": -8.807495,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003177,
      "ems": null
    },
    {
      "latitude": 38.429672,
      "longitude": -8.808289,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "squawk": "3277",
      "timestamp": 1661003180,
      "ems": null
    },
    {
      "latitude": 38.43055,
      "longitude": -8.809021,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 328,
      "squawk": "3277",
      "timestamp": 1661003183,
      "ems": null
    },
    {
      "latitude": 38.431595,
      "longitude": -8.809841,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661003186,
      "ems": null
    },
    {
      "latitude": 38.432503,
      "longitude": -8.810608,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661003189,
      "ems": null
    },
    {
      "latitude": 38.434341,
      "longitude": -8.81205,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "squawk": "3277",
      "timestamp": 1661003195,
      "ems": null
    },
    {
      "latitude": 38.43631,
      "longitude": -8.813483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "3277",
      "timestamp": 1661003201,
      "ems": null
    },
    {
      "latitude": 38.437363,
      "longitude": -8.814199,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "squawk": "3277",
      "timestamp": 1661003204,
      "ems": null
    },
    {
      "latitude": 38.439331,
      "longitude": -8.815692,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003210,
      "ems": null
    },
    {
      "latitude": 38.441162,
      "longitude": -8.817305,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003216,
      "ems": null
    },
    {
      "latitude": 38.443069,
      "longitude": -8.818787,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "squawk": "3277",
      "timestamp": 1661003222,
      "ems": null
    },
    {
      "latitude": 38.445007,
      "longitude": -8.82023,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "squawk": "3277",
      "timestamp": 1661003228,
      "ems": null
    },
    {
      "latitude": 38.445866,
      "longitude": -8.820923,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003231,
      "ems": null
    },
    {
      "latitude": 38.446655,
      "longitude": -8.821655,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003234,
      "ems": null
    },
    {
      "latitude": 38.448441,
      "longitude": -8.823335,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003240,
      "ems": null
    },
    {
      "latitude": 38.450241,
      "longitude": -8.825073,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661003246,
      "ems": null
    },
    {
      "latitude": 38.451126,
      "longitude": -8.825867,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661003249,
      "ems": null
    },
    {
      "latitude": 38.45187,
      "longitude": -8.826599,
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003252,
      "ems": null
    },
    {
      "latitude": 38.452789,
      "longitude": -8.827515,
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003255,
      "ems": null
    },
    {
      "latitude": 38.454521,
      "longitude": -8.829163,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003261,
      "ems": null
    },
    {
      "latitude": 38.456387,
      "longitude": -8.830811,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003267,
      "ems": null
    },
    {
      "latitude": 38.458282,
      "longitude": -8.83253,
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003273,
      "ems": null
    },
    {
      "latitude": 38.459976,
      "longitude": -8.833963,
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003279,
      "ems": null
    },
    {
      "latitude": 38.461784,
      "longitude": -8.835571,
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
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003285,
      "ems": null
    },
    {
      "latitude": 38.463646,
      "longitude": -8.837097,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661003291,
      "ems": null
    },
    {
      "latitude": 38.465557,
      "longitude": -8.838562,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "3277",
      "timestamp": 1661003297,
      "ems": null
    },
    {
      "latitude": 38.467464,
      "longitude": -8.839966,
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
      "heading": 328,
      "squawk": "3277",
      "timestamp": 1661003303,
      "ems": null
    },
    {
      "latitude": 38.46928,
      "longitude": -8.841492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003309,
      "ems": null
    },
    {
      "latitude": 38.4711,
      "longitude": -8.843158,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003316,
      "ems": null
    },
    {
      "latitude": 38.472931,
      "longitude": -8.84489,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003321,
      "ems": null
    },
    {
      "latitude": 38.473892,
      "longitude": -8.845785,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003325,
      "ems": null
    },
    {
      "latitude": 38.475613,
      "longitude": -8.84729,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003331,
      "ems": null
    },
    {
      "latitude": 38.47752,
      "longitude": -8.84906,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661003337,
      "ems": null
    },
    {
      "latitude": 38.479156,
      "longitude": -8.850681,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661003342,
      "ems": null
    },
    {
      "latitude": 38.480026,
      "longitude": -8.851637,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003346,
      "ems": null
    },
    {
      "latitude": 38.480824,
      "longitude": -8.852539,
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
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661003348,
      "ems": null
    },
    {
      "latitude": 38.48172,
      "longitude": -8.853607,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003352,
      "ems": null
    },
    {
      "latitude": 38.483337,
      "longitude": -8.855347,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 320,
      "squawk": "3277",
      "timestamp": 1661003358,
      "ems": null
    },
    {
      "latitude": 38.484222,
      "longitude": -8.856262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "3277",
      "timestamp": 1661003360,
      "ems": null
    },
    {
      "latitude": 38.485062,
      "longitude": -8.857249,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661003364,
      "ems": null
    },
    {
      "latitude": 38.486801,
      "longitude": -8.85916,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003370,
      "ems": null
    },
    {
      "latitude": 38.488403,
      "longitude": -8.860951,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661003376,
      "ems": null
    },
    {
      "latitude": 38.48996,
      "longitude": -8.862683,
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003381,
      "ems": null
    },
    {
      "latitude": 38.491516,
      "longitude": -8.864414,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661003387,
      "ems": null
    },
    {
      "latitude": 38.493206,
      "longitude": -8.866211,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661003394,
      "ems": null
    },
    {
      "latitude": 38.494766,
      "longitude": -8.867818,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 321,
      "squawk": "3277",
      "timestamp": 1661003400,
      "ems": null
    },
    {
      "latitude": 38.496414,
      "longitude": -8.86949,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 321,
      "squawk": "3277",
      "timestamp": 1661003406,
      "ems": null
    },
    {
      "latitude": 38.49791,
      "longitude": -8.870972,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003412,
      "ems": null
    },
    {
      "latitude": 38.49884,
      "longitude": -8.871765,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "squawk": "3277",
      "timestamp": 1661003415,
      "ems": null
    },
    {
      "latitude": 38.499538,
      "longitude": -8.872437,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003417,
      "ems": null
    },
    {
      "latitude": 38.500397,
      "longitude": -8.873192,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003420,
      "ems": null
    },
    {
      "latitude": 38.501999,
      "longitude": -8.874684,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003426,
      "ems": null
    },
    {
      "latitude": 38.502823,
      "longitude": -8.875401,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661003430,
      "ems": null
    },
    {
      "latitude": 38.503681,
      "longitude": -8.876099,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661003433,
      "ems": null
    },
    {
      "latitude": 38.505386,
      "longitude": -8.87749,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661003439,
      "ems": null
    },
    {
      "latitude": 38.507034,
      "longitude": -8.878804,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661003444,
      "ems": null
    },
    {
      "latitude": 38.509232,
      "longitude": -8.880655,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "squawk": "3277",
      "timestamp": 1661003453,
      "ems": null
    },
    {
      "latitude": 38.510712,
      "longitude": -8.881958,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661003459,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -8.883606,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 328,
      "squawk": "3277",
      "timestamp": 1661003465,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.884834,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 329,
      "squawk": "3277",
      "timestamp": 1661003470,
      "ems": null
    },
    {
      "latitude": 38.515739,
      "longitude": -8.885925,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 329,
      "squawk": "3277",
      "timestamp": 1661003475,
      "ems": null
    },
    {
      "latitude": 38.518345,
      "longitude": -8.888184,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 320,
      "squawk": "3277",
      "timestamp": 1661003485,
      "ems": null
    },
    {
      "latitude": 38.519043,
      "longitude": -8.889099,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 311,
      "squawk": "3277",
      "timestamp": 1661003488,
      "ems": null
    },
    {
      "latitude": 38.519577,
      "longitude": -8.88991,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 304,
      "squawk": "3277",
      "timestamp": 1661003491,
      "ems": null
    },
    {
      "latitude": 38.520256,
      "longitude": -8.891296,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 299,
      "squawk": "3277",
      "timestamp": 1661003494,
      "ems": null
    },
    {
      "latitude": 38.520584,
      "longitude": -8.892179,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 294,
      "squawk": "3277",
      "timestamp": 1661003497,
      "ems": null
    },
    {
      "latitude": 38.521,
      "longitude": -8.893555,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 287,
      "squawk": "3277",
      "timestamp": 1661003500,
      "ems": null
    },
    {
      "latitude": 38.521233,
      "longitude": -8.894775,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 280,
      "squawk": "3277",
      "timestamp": 1661003503,
      "ems": null
    },
    {
      "latitude": 38.521317,
      "longitude": -8.89606,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003506,
      "ems": null
    },
    {
      "latitude": 38.521317,
      "longitude": -8.897314,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003509,
      "ems": null
    },
    {
      "latitude": 38.521233,
      "longitude": -8.898621,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003512,
      "ems": null
    },
    {
      "latitude": 38.521133,
      "longitude": -8.89994,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003515,
      "ems": null
    },
    {
      "latitude": 38.521088,
      "longitude": -8.901135,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003518,
      "ems": null
    },
    {
      "latitude": 38.521042,
      "longitude": -8.902449,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003521,
      "ems": null
    },
    {
      "latitude": 38.520996,
      "longitude": -8.903822,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003524,
      "ems": null
    },
    {
      "latitude": 38.520905,
      "longitude": -8.905135,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661003527,
      "ems": null
    },
    {
      "latitude": 38.520813,
      "longitude": -8.906372,
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003530,
      "ems": null
    },
    {
      "latitude": 38.520721,
      "longitude": -8.908061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003533,
      "ems": null
    },
    {
      "latitude": 38.520721,
      "longitude": -8.911133,
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
      "heading": 271,
      "squawk": "3277",
      "timestamp": 1661003539,
      "ems": null
    },
    {
      "latitude": 38.520767,
      "longitude": -8.912479,
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
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003542,
      "ems": null
    },
    {
      "latitude": 38.520676,
      "longitude": -8.915524,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003548,
      "ems": null
    },
    {
      "latitude": 38.520535,
      "longitude": -8.918518,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003554,
      "ems": null
    },
    {
      "latitude": 38.520302,
      "longitude": -8.921448,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661003560,
      "ems": null
    },
    {
      "latitude": 38.520035,
      "longitude": -8.924302,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "squawk": "3277",
      "timestamp": 1661003566,
      "ems": null
    },
    {
      "latitude": 38.519928,
      "longitude": -8.927124,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003572,
      "ems": null
    },
    {
      "latitude": 38.519806,
      "longitude": -8.930153,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003578,
      "ems": null
    },
    {
      "latitude": 38.51965,
      "longitude": -8.933044,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003584,
      "ems": null
    },
    {
      "latitude": 38.519508,
      "longitude": -8.935974,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "squawk": "3277",
      "timestamp": 1661003590,
      "ems": null
    },
    {
      "latitude": 38.519417,
      "longitude": -8.938904,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003596,
      "ems": null
    },
    {
      "latitude": 38.519257,
      "longitude": -8.941856,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003602,
      "ems": null
    },
    {
      "latitude": 38.519089,
      "longitude": -8.944824,
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003608,
      "ems": null
    },
    {
      "latitude": 38.518799,
      "longitude": -8.947707,
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003614,
      "ems": null
    },
    {
      "latitude": 38.518578,
      "longitude": -8.949219,
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661003617,
      "ems": null
    },
    {
      "latitude": 38.518387,
      "longitude": -8.950752,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003620,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -8.952126,
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
      "heading": 254,
      "squawk": "3277",
      "timestamp": 1661003623,
      "ems": null
    },
    {
      "latitude": 38.517746,
      "longitude": -8.953559,
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661003626,
      "ems": null
    },
    {
      "latitude": 38.517334,
      "longitude": -8.954992,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 250,
      "squawk": "3277",
      "timestamp": 1661003629,
      "ems": null
    },
    {
      "latitude": 38.516994,
      "longitude": -8.956421,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661003632,
      "ems": null
    },
    {
      "latitude": 38.516716,
      "longitude": -8.957764,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661003635,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.960903,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003641,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.962336,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "squawk": "3277",
      "timestamp": 1661003644,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.963769,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 272,
      "squawk": "3277",
      "timestamp": 1661003647,
      "ems": null
    },
    {
      "latitude": 38.516556,
      "longitude": -8.964963,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "3277",
      "timestamp": 1661003650,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.966516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003653,
      "ems": null
    },
    {
      "latitude": 38.516739,
      "longitude": -8.967889,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "3277",
      "timestamp": 1661003656,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.969262,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 276,
      "squawk": "3277",
      "timestamp": 1661003659,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -8.970516,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 276,
      "squawk": "3277",
      "timestamp": 1661003662,
      "ems": null
    },
    {
      "latitude": 38.517136,
      "longitude": -8.971802,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 278,
      "squawk": "3277",
      "timestamp": 1661003665,
      "ems": null
    },
    {
      "latitude": 38.517242,
      "longitude": -8.973023,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 278,
      "squawk": "3277",
      "timestamp": 1661003668,
      "ems": null
    },
    {
      "latitude": 38.517414,
      "longitude": -8.974548,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 276,
      "squawk": "3277",
      "timestamp": 1661003671,
      "ems": null
    },
    {
      "latitude": 38.517509,
      "longitude": -8.975891,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 275,
      "squawk": "3277",
      "timestamp": 1661003674,
      "ems": null
    },
    {
      "latitude": 38.5177,
      "longitude": -8.978517,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 275,
      "squawk": "3277",
      "timestamp": 1661003680,
      "ems": null
    },
    {
      "latitude": 38.517883,
      "longitude": -8.981323,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003686,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -8.983887,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003692,
      "ems": null
    },
    {
      "latitude": 38.518066,
      "longitude": -8.985107,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 271,
      "squawk": "3277",
      "timestamp": 1661003695,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -8.986578,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003698,
      "ems": null
    },
    {
      "latitude": 38.517975,
      "longitude": -8.988098,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003701,
      "ems": null
    },
    {
      "latitude": 38.517975,
      "longitude": -8.989502,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003704,
      "ems": null
    },
    {
      "latitude": 38.517929,
      "longitude": -8.990996,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003707,
      "ems": null
    },
    {
      "latitude": 38.517929,
      "longitude": -8.99219,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003710,
      "ems": null
    },
    {
      "latitude": 38.517883,
      "longitude": -8.995295,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003716,
      "ems": null
    },
    {
      "latitude": 38.517925,
      "longitude": -8.997803,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003722,
      "ems": null
    },
    {
      "latitude": 38.517975,
      "longitude": -9.001266,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "3277",
      "timestamp": 1661003730,
      "ems": null
    },
    {
      "latitude": 38.518066,
      "longitude": -9.003174,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 274,
      "squawk": "3277",
      "timestamp": 1661003733,
      "ems": null
    },
    {
      "latitude": 38.518112,
      "longitude": -9.004639,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003736,
      "ems": null
    },
    {
      "latitude": 38.518204,
      "longitude": -9.006341,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003739,
      "ems": null
    },
    {
      "latitude": 38.518387,
      "longitude": -9.009148,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 275,
      "squawk": "3277",
      "timestamp": 1661003745,
      "ems": null
    },
    {
      "latitude": 38.518532,
      "longitude": -9.011841,
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
      "heading": 272,
      "squawk": "3277",
      "timestamp": 1661003751,
      "ems": null
    },
    {
      "latitude": 38.518673,
      "longitude": -9.014709,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 273,
      "squawk": "3277",
      "timestamp": 1661003757,
      "ems": null
    },
    {
      "latitude": 38.518764,
      "longitude": -9.017517,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 271,
      "squawk": "3277",
      "timestamp": 1661003763,
      "ems": null
    },
    {
      "latitude": 38.518799,
      "longitude": -9.020492,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 272,
      "squawk": "3277",
      "timestamp": 1661003769,
      "ems": null
    },
    {
      "latitude": 38.518799,
      "longitude": -9.023238,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003775,
      "ems": null
    },
    {
      "latitude": 38.518753,
      "longitude": -9.024851,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003778,
      "ems": null
    },
    {
      "latitude": 38.518753,
      "longitude": -9.026105,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003781,
      "ems": null
    },
    {
      "latitude": 38.518719,
      "longitude": -9.027527,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "squawk": "3277",
      "timestamp": 1661003784,
      "ems": null
    },
    {
      "latitude": 38.518673,
      "longitude": -9.028198,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003785,
      "ems": null
    },
    {
      "latitude": 38.518623,
      "longitude": -9.03009,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003789,
      "ems": null
    },
    {
      "latitude": 38.518391,
      "longitude": -9.032166,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003794,
      "ems": null
    },
    {
      "latitude": 38.518204,
      "longitude": -9.033688,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003797,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -9.034912,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661003799,
      "ems": null
    },
    {
      "latitude": 38.517879,
      "longitude": -9.036133,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661003802,
      "ems": null
    },
    {
      "latitude": 38.517609,
      "longitude": -9.03936,
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003808,
      "ems": null
    },
    {
      "latitude": 38.51746,
      "longitude": -9.042114,
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003814,
      "ems": null
    },
    {
      "latitude": 38.517323,
      "longitude": -9.045349,
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003820,
      "ems": null
    },
    {
      "latitude": 38.517242,
      "longitude": -9.046584,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003823,
      "ems": null
    },
    {
      "latitude": 38.517136,
      "longitude": -9.04834,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "squawk": "3277",
      "timestamp": 1661003826,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -9.051421,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003833,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -9.052734,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003835,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -9.054227,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003838,
      "ems": null
    },
    {
      "latitude": 38.516903,
      "longitude": -9.056946,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003844,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -9.060019,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 270,
      "squawk": "3277",
      "timestamp": 1661003851,
      "ems": null
    },
    {
      "latitude": 38.51683,
      "longitude": -9.062765,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003856,
      "ems": null
    },
    {
      "latitude": 38.516762,
      "longitude": -9.065552,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 268,
      "squawk": "3277",
      "timestamp": 1661003863,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -9.068438,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 267,
      "squawk": "3277",
      "timestamp": 1661003869,
      "ems": null
    },
    {
      "latitude": 38.516556,
      "longitude": -9.071005,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003875,
      "ems": null
    },
    {
      "latitude": 38.516373,
      "longitude": -9.073751,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661003881,
      "ems": null
    },
    {
      "latitude": 38.516235,
      "longitude": -9.075185,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661003884,
      "ems": null
    },
    {
      "latitude": 38.516109,
      "longitude": -9.076538,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661003886,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -9.078064,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003890,
      "ems": null
    },
    {
      "latitude": 38.515732,
      "longitude": -9.079484,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661003893,
      "ems": null
    },
    {
      "latitude": 38.515549,
      "longitude": -9.080678,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661003895,
      "ems": null
    },
    {
      "latitude": 38.515503,
      "longitude": -9.081156,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661003896,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -9.08217,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661003898,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -9.083902,
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003902,
      "ems": null
    },
    {
      "latitude": 38.514763,
      "longitude": -9.087158,
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661003908,
      "ems": null
    },
    {
      "latitude": 38.514481,
      "longitude": -9.090271,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "squawk": "3277",
      "timestamp": 1661003914,
      "ems": null
    },
    {
      "latitude": 38.514156,
      "longitude": -9.093506,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661003920,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -9.094948,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661003923,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.096619,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661003926,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -9.097961,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661003929,
      "ems": null
    },
    {
      "latitude": 38.513596,
      "longitude": -9.100708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661003935,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.103606,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003941,
      "ems": null
    },
    {
      "latitude": 38.512939,
      "longitude": -9.106472,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661003946,
      "ems": null
    },
    {
      "latitude": 38.512573,
      "longitude": -9.109517,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "squawk": "3277",
      "timestamp": 1661003953,
      "ems": null
    },
    {
      "latitude": 38.512154,
      "longitude": -9.112976,
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
      "heading": 261,
      "squawk": "3277",
      "timestamp": 1661003960,
      "ems": null
    },
    {
      "latitude": 38.511829,
      "longitude": -9.115906,
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661003965,
      "ems": null
    },
    {
      "latitude": 38.511383,
      "longitude": -9.118891,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661003972,
      "ems": null
    },
    {
      "latitude": 38.510849,
      "longitude": -9.122009,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661003978,
      "ems": null
    },
    {
      "latitude": 38.510468,
      "longitude": -9.125041,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 262,
      "squawk": "3277",
      "timestamp": 1661003983,
      "ems": null
    },
    {
      "latitude": 38.510246,
      "longitude": -9.128052,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661003990,
      "ems": null
    },
    {
      "latitude": 38.510151,
      "longitude": -9.1297,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003993,
      "ems": null
    },
    {
      "latitude": 38.510101,
      "longitude": -9.131072,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003996,
      "ems": null
    },
    {
      "latitude": 38.51001,
      "longitude": -9.132744,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661003999,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -9.134295,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 266,
      "squawk": "3277",
      "timestamp": 1661004002,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -9.135742,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661004005,
      "ems": null
    },
    {
      "latitude": 38.509735,
      "longitude": -9.137221,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 265,
      "squawk": "3277",
      "timestamp": 1661004008,
      "ems": null
    },
    {
      "latitude": 38.509506,
      "longitude": -9.140326,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661004014,
      "ems": null
    },
    {
      "latitude": 38.509315,
      "longitude": -9.143372,
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
      "heading": 263,
      "squawk": "3277",
      "timestamp": 1661004020,
      "ems": null
    },
    {
      "latitude": 38.509037,
      "longitude": -9.146118,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 260,
      "squawk": "3277",
      "timestamp": 1661004026,
      "ems": null
    },
    {
      "latitude": 38.50882,
      "longitude": -9.147312,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 257,
      "squawk": "3277",
      "timestamp": 1661004029,
      "ems": null
    },
    {
      "latitude": 38.508636,
      "longitude": -9.148626,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661004032,
      "ems": null
    },
    {
      "latitude": 38.508476,
      "longitude": -9.149719,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661004035,
      "ems": null
    },
    {
      "latitude": 38.508362,
      "longitude": -9.150537,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661004037,
      "ems": null
    },
    {
      "latitude": 38.508102,
      "longitude": -9.152222,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 259,
      "squawk": "3277",
      "timestamp": 1661004041,
      "ems": null
    },
    {
      "latitude": 38.507919,
      "longitude": -9.153442,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 258,
      "squawk": "3277",
      "timestamp": 1661004044,
      "ems": null
    },
    {
      "latitude": 38.507687,
      "longitude": -9.154541,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661004046,
      "ems": null
    },
    {
      "latitude": 38.507404,
      "longitude": -9.156006,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661004050,
      "ems": null
    },
    {
      "latitude": 38.507217,
      "longitude": -9.157044,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 256,
      "squawk": "3277",
      "timestamp": 1661004053,
      "ems": null
    },
    {
      "latitude": 38.506668,
      "longitude": -9.159791,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 255,
      "squawk": "3277",
      "timestamp": 1661004058,
      "ems": null
    },
    {
      "latitude": 38.506348,
      "longitude": -9.161105,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 253,
      "squawk": "3277",
      "timestamp": 1661004062,
      "ems": null
    },
    {
      "latitude": 38.505871,
      "longitude": -9.16394,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "3277",
      "timestamp": 1661004068,
      "ems": null
    },
    {
      "latitude": 38.50589,
      "longitude": -9.165344,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 272,
      "squawk": "3277",
      "timestamp": 1661004070,
      "ems": null
    },
    {
      "latitude": 38.506008,
      "longitude": -9.166748,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "3277",
      "timestamp": 1661004073,
      "ems": null
    },
    {
      "latitude": 38.506302,
      "longitude": -9.16821,
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
      "heading": 286,
      "squawk": "3277",
      "timestamp": 1661004077,
      "ems": null
    },
    {
      "latitude": 38.506706,
      "longitude": -9.169617,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "3277",
      "timestamp": 1661004079,
      "ems": null
    },
    {
      "latitude": 38.507172,
      "longitude": -9.170898,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004082,
      "ems": null
    },
    {
      "latitude": 38.507721,
      "longitude": -9.172211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661004086,
      "ems": null
    },
    {
      "latitude": 38.508244,
      "longitude": -9.173584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004089,
      "ems": null
    },
    {
      "latitude": 38.50882,
      "longitude": -9.175017,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004092,
      "ems": null
    },
    {
      "latitude": 38.50927,
      "longitude": -9.176147,
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
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004094,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -9.177405,
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
      "heading": 300,
      "squawk": "3277",
      "timestamp": 1661004098,
      "ems": null
    },
    {
      "latitude": 38.51033,
      "longitude": -9.17848,
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
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661004100,
      "ems": null
    },
    {
      "latitude": 38.511017,
      "longitude": -9.179734,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 308,
      "squawk": "3277",
      "timestamp": 1661004103,
      "ems": null
    },
    {
      "latitude": 38.511875,
      "longitude": -9.180847,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004107,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.181763,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 328,
      "squawk": "3277",
      "timestamp": 1661004110,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -9.182421,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 340,
      "squawk": "3277",
      "timestamp": 1661004113,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -9.182739,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 349,
      "squawk": "3277",
      "timestamp": 1661004116,
      "ems": null
    },
    {
      "latitude": 38.516296,
      "longitude": -9.182983,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004118,
      "ems": null
    },
    {
      "latitude": 38.517471,
      "longitude": -9.183197,
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
      "heading": 351,
      "squawk": "3277",
      "timestamp": 1661004122,
      "ems": null
    },
    {
      "latitude": 38.518673,
      "longitude": -9.183472,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 349,
      "squawk": "3277",
      "timestamp": 1661004125,
      "ems": null
    },
    {
      "latitude": 38.520081,
      "longitude": -9.183854,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004128,
      "ems": null
    },
    {
      "latitude": 38.521233,
      "longitude": -9.184265,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004131,
      "ems": null
    },
    {
      "latitude": 38.522369,
      "longitude": -9.18463,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 347,
      "squawk": "3277",
      "timestamp": 1661004134,
      "ems": null
    },
    {
      "latitude": 38.523651,
      "longitude": -9.184937,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 349,
      "squawk": "3277",
      "timestamp": 1661004137,
      "ems": null
    },
    {
      "latitude": 38.524864,
      "longitude": -9.185181,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 350,
      "squawk": "3277",
      "timestamp": 1661004140,
      "ems": null
    },
    {
      "latitude": 38.525803,
      "longitude": -9.185347,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 350,
      "squawk": "3277",
      "timestamp": 1661004142,
      "ems": null
    },
    {
      "latitude": 38.528309,
      "longitude": -9.185852,
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
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004148,
      "ems": null
    },
    {
      "latitude": 38.530727,
      "longitude": -9.186157,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "3277",
      "timestamp": 1661004154,
      "ems": null
    },
    {
      "latitude": 38.53194,
      "longitude": -9.186401,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004157,
      "ems": null
    },
    {
      "latitude": 38.533104,
      "longitude": -9.186584,
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
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004161,
      "ems": null
    },
    {
      "latitude": 38.53418,
      "longitude": -9.18678,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004163,
      "ems": null
    },
    {
      "latitude": 38.536453,
      "longitude": -9.187195,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 352,
      "squawk": "3277",
      "timestamp": 1661004170,
      "ems": null
    },
    {
      "latitude": 38.53862,
      "longitude": -9.187615,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 350,
      "squawk": "3277",
      "timestamp": 1661004176,
      "ems": null
    },
    {
      "latitude": 38.540783,
      "longitude": -9.18811,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 350,
      "squawk": "3277",
      "timestamp": 1661004182,
      "ems": null
    },
    {
      "latitude": 38.542786,
      "longitude": -9.188599,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 347,
      "squawk": "3277",
      "timestamp": 1661004187,
      "ems": null
    },
    {
      "latitude": 38.54393,
      "longitude": -9.188929,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 347,
      "squawk": "3277",
      "timestamp": 1661004191,
      "ems": null
    },
    {
      "latitude": 38.544846,
      "longitude": -9.189168,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 347,
      "squawk": "3277",
      "timestamp": 1661004193,
      "ems": null
    },
    {
      "latitude": 38.546043,
      "longitude": -9.189514,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 346,
      "squawk": "3277",
      "timestamp": 1661004197,
      "ems": null
    },
    {
      "latitude": 38.547043,
      "longitude": -9.189825,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "3277",
      "timestamp": 1661004200,
      "ems": null
    },
    {
      "latitude": 38.548,
      "longitude": -9.190186,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004203,
      "ems": null
    },
    {
      "latitude": 38.550064,
      "longitude": -9.19084,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004209,
      "ems": null
    },
    {
      "latitude": 38.551167,
      "longitude": -9.191223,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004212,
      "ems": null
    },
    {
      "latitude": 38.55228,
      "longitude": -9.191589,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004215,
      "ems": null
    },
    {
      "latitude": 38.554459,
      "longitude": -9.192332,
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004221,
      "ems": null
    },
    {
      "latitude": 38.556747,
      "longitude": -9.193109,
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
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004227,
      "ems": null
    },
    {
      "latitude": 38.559082,
      "longitude": -9.193945,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004233,
      "ems": null
    },
    {
      "latitude": 38.560287,
      "longitude": -9.194397,
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661004236,
      "ems": null
    },
    {
      "latitude": 38.562653,
      "longitude": -9.195437,
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
      "heading": 339,
      "squawk": "3277",
      "timestamp": 1661004242,
      "ems": null
    },
    {
      "latitude": 38.563828,
      "longitude": -9.196045,
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
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661004245,
      "ems": null
    },
    {
      "latitude": 38.564163,
      "longitude": -9.196214,
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
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661004247,
      "ems": null
    },
    {
      "latitude": 38.565353,
      "longitude": -9.196811,
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
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661004249,
      "ems": null
    },
    {
      "latitude": 38.566853,
      "longitude": -9.197632,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3277",
      "timestamp": 1661004253,
      "ems": null
    },
    {
      "latitude": 38.567963,
      "longitude": -9.198303,
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
      "heading": 333,
      "squawk": "3277",
      "timestamp": 1661004256,
      "ems": null
    },
    {
      "latitude": 38.569042,
      "longitude": -9.199036,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 330,
      "squawk": "3277",
      "timestamp": 1661004259,
      "ems": null
    },
    {
      "latitude": 38.57016,
      "longitude": -9.199975,
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
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661004262,
      "ems": null
    },
    {
      "latitude": 38.571121,
      "longitude": -9.200751,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661004265,
      "ems": null
    },
    {
      "latitude": 38.572403,
      "longitude": -9.201766,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "3277",
      "timestamp": 1661004268,
      "ems": null
    },
    {
      "latitude": 38.573593,
      "longitude": -9.202722,
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
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661004271,
      "ems": null
    },
    {
      "latitude": 38.574554,
      "longitude": -9.203498,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "3277",
      "timestamp": 1661004273,
      "ems": null
    },
    {
      "latitude": 38.575607,
      "longitude": -9.204393,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661004277,
      "ems": null
    },
    {
      "latitude": 38.576721,
      "longitude": -9.205322,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661004280,
      "ems": null
    },
    {
      "latitude": 38.577747,
      "longitude": -9.206299,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661004283,
      "ems": null
    },
    {
      "latitude": 38.578815,
      "longitude": -9.207336,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661004286,
      "ems": null
    },
    {
      "latitude": 38.579655,
      "longitude": -9.208191,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 321,
      "squawk": "3277",
      "timestamp": 1661004289,
      "ems": null
    },
    {
      "latitude": 38.580585,
      "longitude": -9.209106,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661004292,
      "ems": null
    },
    {
      "latitude": 38.581512,
      "longitude": -9.210126,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004295,
      "ems": null
    },
    {
      "latitude": 38.582401,
      "longitude": -9.211182,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004298,
      "ems": null
    },
    {
      "latitude": 38.583241,
      "longitude": -9.212158,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3277",
      "timestamp": 1661004301,
      "ems": null
    },
    {
      "latitude": 38.583984,
      "longitude": -9.213051,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004304,
      "ems": null
    },
    {
      "latitude": 38.584774,
      "longitude": -9.213989,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3277",
      "timestamp": 1661004307,
      "ems": null
    },
    {
      "latitude": 38.585659,
      "longitude": -9.215088,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004310,
      "ems": null
    },
    {
      "latitude": 38.586452,
      "longitude": -9.216125,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004313,
      "ems": null
    },
    {
      "latitude": 38.587288,
      "longitude": -9.217163,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004316,
      "ems": null
    },
    {
      "latitude": 38.588127,
      "longitude": -9.21814,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "squawk": "3277",
      "timestamp": 1661004319,
      "ems": null
    },
    {
      "latitude": 38.589756,
      "longitude": -9.220154,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "squawk": "3277",
      "timestamp": 1661004325,
      "ems": null
    },
    {
      "latitude": 38.591434,
      "longitude": -9.222046,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004331,
      "ems": null
    },
    {
      "latitude": 38.593185,
      "longitude": -9.223978,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004337,
      "ems": null
    },
    {
      "latitude": 38.595016,
      "longitude": -9.226074,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004343,
      "ems": null
    },
    {
      "latitude": 38.596832,
      "longitude": -9.228088,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004349,
      "ems": null
    },
    {
      "latitude": 38.598694,
      "longitude": -9.230225,
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004355,
      "ems": null
    },
    {
      "latitude": 38.600651,
      "longitude": -9.232422,
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004361,
      "ems": null
    },
    {
      "latitude": 38.602558,
      "longitude": -9.234619,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004367,
      "ems": null
    },
    {
      "latitude": 38.604492,
      "longitude": -9.236755,
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
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004373,
      "ems": null
    },
    {
      "latitude": 38.606281,
      "longitude": -9.238892,
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
      "heading": 316,
      "squawk": "3277",
      "timestamp": 1661004379,
      "ems": null
    },
    {
      "latitude": 38.608246,
      "longitude": -9.241174,
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
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004385,
      "ems": null
    },
    {
      "latitude": 38.6101,
      "longitude": -9.243347,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "3277",
      "timestamp": 1661004391,
      "ems": null
    },
    {
      "latitude": 38.611916,
      "longitude": -9.245605,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 316,
      "squawk": "3277",
      "timestamp": 1661004397,
      "ems": null
    },
    {
      "latitude": 38.613693,
      "longitude": -9.247742,
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
      "squawk": "3277",
      "timestamp": 1661004403,
      "ems": null
    },
    {
      "latitude": 38.615479,
      "longitude": -9.25001,
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
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004410,
      "ems": null
    },
    {
      "latitude": 38.617317,
      "longitude": -9.252136,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 319,
      "squawk": "3277",
      "timestamp": 1661004415,
      "ems": null
    },
    {
      "latitude": 38.61834,
      "longitude": -9.253113,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661004418,
      "ems": null
    },
    {
      "latitude": 38.619366,
      "longitude": -9.254028,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 326,
      "squawk": "3277",
      "timestamp": 1661004422,
      "ems": null
    },
    {
      "latitude": 38.620377,
      "longitude": -9.254847,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "3277",
      "timestamp": 1661004424,
      "ems": null
    },
    {
      "latitude": 38.62146,
      "longitude": -9.255859,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "3277",
      "timestamp": 1661004428,
      "ems": null
    },
    {
      "latitude": 38.622345,
      "longitude": -9.256653,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661004430,
      "ems": null
    },
    {
      "latitude": 38.623089,
      "longitude": -9.257385,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661004433,
      "ems": null
    },
    {
      "latitude": 38.624344,
      "longitude": -9.258606,
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
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661004437,
      "ems": null
    },
    {
      "latitude": 38.625324,
      "longitude": -9.259521,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "3277",
      "timestamp": 1661004439,
      "ems": null
    },
    {
      "latitude": 38.62714,
      "longitude": -9.261414,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "3277",
      "timestamp": 1661004445,
      "ems": null
    },
    {
      "latitude": 38.628021,
      "longitude": -9.262451,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004448,
      "ems": null
    },
    {
      "latitude": 38.628616,
      "longitude": -9.263146,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004451,
      "ems": null
    },
    {
      "latitude": 38.629807,
      "longitude": -9.26458,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 316,
      "squawk": "3277",
      "timestamp": 1661004455,
      "ems": null
    },
    {
      "latitude": 38.630676,
      "longitude": -9.265534,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004458,
      "ems": null
    },
    {
      "latitude": 38.631409,
      "longitude": -9.266431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004460,
      "ems": null
    },
    {
      "latitude": 38.632324,
      "longitude": -9.267565,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 315,
      "squawk": "3277",
      "timestamp": 1661004464,
      "ems": null
    },
    {
      "latitude": 38.632866,
      "longitude": -9.26825,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 314,
      "squawk": "3277",
      "timestamp": 1661004467,
      "ems": null
    },
    {
      "latitude": 38.633888,
      "longitude": -9.269592,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 313,
      "squawk": "3277",
      "timestamp": 1661004470,
      "ems": null
    },
    {
      "latitude": 38.635666,
      "longitude": -9.271983,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 312,
      "squawk": "3277",
      "timestamp": 1661004477,
      "ems": null
    },
    {
      "latitude": 38.636444,
      "longitude": -9.272998,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 312,
      "squawk": "3277",
      "timestamp": 1661004480,
      "ems": null
    },
    {
      "latitude": 38.637241,
      "longitude": -9.27417,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 311,
      "squawk": "3277",
      "timestamp": 1661004483,
      "ems": null
    },
    {
      "latitude": 38.637909,
      "longitude": -9.275088,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 309,
      "squawk": "3277",
      "timestamp": 1661004486,
      "ems": null
    },
    {
      "latitude": 38.638542,
      "longitude": -9.276123,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "3277",
      "timestamp": 1661004489,
      "ems": null
    },
    {
      "latitude": 38.639194,
      "longitude": -9.277222,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 306,
      "squawk": "3277",
      "timestamp": 1661004492,
      "ems": null
    },
    {
      "latitude": 38.639923,
      "longitude": -9.278491,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 304,
      "squawk": "3277",
      "timestamp": 1661004495,
      "ems": null
    },
    {
      "latitude": 38.640499,
      "longitude": -9.279541,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 305,
      "squawk": "3277",
      "timestamp": 1661004498,
      "ems": null
    },
    {
      "latitude": 38.641159,
      "longitude": -9.280761,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 306,
      "squawk": "3277",
      "timestamp": 1661004501,
      "ems": null
    },
    {
      "latitude": 38.641846,
      "longitude": -9.281955,
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
      "heading": 305,
      "squawk": "3277",
      "timestamp": 1661004504,
      "ems": null
    },
    {
      "latitude": 38.642487,
      "longitude": -9.283149,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 304,
      "squawk": "3277",
      "timestamp": 1661004507,
      "ems": null
    },
    {
      "latitude": 38.643154,
      "longitude": -9.284485,
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
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661004510,
      "ems": null
    },
    {
      "latitude": 38.643814,
      "longitude": -9.285776,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661004513,
      "ems": null
    },
    {
      "latitude": 38.644409,
      "longitude": -9.28703,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661004516,
      "ems": null
    },
    {
      "latitude": 38.644913,
      "longitude": -9.288104,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661004519,
      "ems": null
    },
    {
      "latitude": 38.646133,
      "longitude": -9.290466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661004525,
      "ems": null
    },
    {
      "latitude": 38.647434,
      "longitude": -9.293091,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "3277",
      "timestamp": 1661004531,
      "ems": null
    },
    {
      "latitude": 38.648506,
      "longitude": -9.295349,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661004537,
      "ems": null
    },
    {
      "latitude": 38.64967,
      "longitude": -9.297668,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 303,
      "squawk": "3277",
      "timestamp": 1661004543,
      "ems": null
    },
    {
      "latitude": 38.650322,
      "longitude": -9.298828,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 307,
      "squawk": "3277",
      "timestamp": 1661004546,
      "ems": null
    },
    {
      "latitude": 38.651093,
      "longitude": -9.300106,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 308,
      "squawk": "3277",
      "timestamp": 1661004549,
      "ems": null
    },
    {
      "latitude": 38.652374,
      "longitude": -9.302375,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661004555,
      "ems": null
    },
    {
      "latitude": 38.652836,
      "longitude": -9.303528,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661004558,
      "ems": null
    },
    {
      "latitude": 38.653255,
      "longitude": -9.304749,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 291,
      "squawk": "3277",
      "timestamp": 1661004561,
      "ems": null
    },
    {
      "latitude": 38.653656,
      "longitude": -9.305957,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 291,
      "squawk": "3277",
      "timestamp": 1661004564,
      "ems": null
    },
    {
      "latitude": 38.654068,
      "longitude": -9.30739,
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
      "heading": 291,
      "squawk": "3277",
      "timestamp": 1661004567,
      "ems": null
    },
    {
      "latitude": 38.654465,
      "longitude": -9.308594,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "3277",
      "timestamp": 1661004570,
      "ems": null
    },
    {
      "latitude": 38.654839,
      "longitude": -9.309937,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 290,
      "squawk": "3277",
      "timestamp": 1661004573,
      "ems": null
    },
    {
      "latitude": 38.655209,
      "longitude": -9.311035,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 291,
      "squawk": "3277",
      "timestamp": 1661004576,
      "ems": null
    },
    {
      "latitude": 38.655815,
      "longitude": -9.312927,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 293,
      "squawk": "3277",
      "timestamp": 1661004579,
      "ems": null
    },
    {
      "latitude": 38.656235,
      "longitude": -9.314209,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 293,
      "squawk": "3277",
      "timestamp": 1661004582,
      "ems": null
    },
    {
      "latitude": 38.657166,
      "longitude": -9.316956,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 295,
      "squawk": "3277",
      "timestamp": 1661004588,
      "ems": null
    },
    {
      "latitude": 38.657585,
      "longitude": -9.318054,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004591,
      "ems": null
    },
    {
      "latitude": 38.658096,
      "longitude": -9.319332,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004594,
      "ems": null
    },
    {
      "latitude": 38.658646,
      "longitude": -9.320765,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004597,
      "ems": null
    },
    {
      "latitude": 38.658886,
      "longitude": -9.32135,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 296,
      "squawk": "3277",
      "timestamp": 1661004599,
      "ems": null
    },
    {
      "latitude": 38.659515,
      "longitude": -9.322974,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 297,
      "squawk": "3277",
      "timestamp": 1661004603,
      "ems": null
    },
    {
      "latitude": 38.660049,
      "longitude": -9.324219,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 300,
      "squawk": "3277",
      "timestamp": 1661004606,
      "ems": null
    },
    {
      "latitude": 38.66061,
      "longitude": -9.325317,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 301,
      "squawk": "3277",
      "timestamp": 1661004608,
      "ems": null
    },
    {
      "latitude": 38.661167,
      "longitude": -9.326416,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 303,
      "squawk": "3277",
      "timestamp": 1661004612,
      "ems": null
    },
    {
      "latitude": 38.661758,
      "longitude": -9.327572,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 304,
      "squawk": "3277",
      "timestamp": 1661004614,
      "ems": null
    },
    {
      "latitude": 38.662331,
      "longitude": -9.328552,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 306,
      "squawk": "3277",
      "timestamp": 1661004618,
      "ems": null
    },
    {
      "latitude": 38.662949,
      "longitude": -9.329542,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 309,
      "squawk": "3277",
      "timestamp": 1661004621,
      "ems": null
    },
    {
      "latitude": 38.663452,
      "longitude": -9.330258,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 310,
      "squawk": "3277",
      "timestamp": 1661004623,
      "ems": null
    },
    {
      "latitude": 38.664322,
      "longitude": -9.331393,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 317,
      "squawk": "3277",
      "timestamp": 1661004627,
      "ems": null
    },
    {
      "latitude": 38.665077,
      "longitude": -9.332153,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 323,
      "squawk": "3277",
      "timestamp": 1661004630,
      "ems": null
    },
    {
      "latitude": 38.665962,
      "longitude": -9.332886,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "3277",
      "timestamp": 1661004632,
      "ems": null
    },
    {
      "latitude": 38.666931,
      "longitude": -9.333423,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661004636,
      "ems": null
    },
    {
      "latitude": 38.667938,
      "longitude": -9.3339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 338,
      "squawk": "3277",
      "timestamp": 1661004638,
      "ems": null
    },
    {
      "latitude": 38.668941,
      "longitude": -9.334351,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661004642,
      "ems": null
    },
    {
      "latitude": 38.669827,
      "longitude": -9.334778,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004644,
      "ems": null
    },
    {
      "latitude": 38.670868,
      "longitude": -9.335155,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004648,
      "ems": null
    },
    {
      "latitude": 38.671783,
      "longitude": -9.335571,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 340,
      "squawk": "3277",
      "timestamp": 1661004651,
      "ems": null
    },
    {
      "latitude": 38.672882,
      "longitude": -9.33605,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004654,
      "ems": null
    },
    {
      "latitude": 38.673752,
      "longitude": -9.336349,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004657,
      "ems": null
    },
    {
      "latitude": 38.674763,
      "longitude": -9.336731,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004660,
      "ems": null
    },
    {
      "latitude": 38.675831,
      "longitude": -9.337219,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661004663,
      "ems": null
    },
    {
      "latitude": 38.677643,
      "longitude": -9.337901,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004669,
      "ems": null
    },
    {
      "latitude": 38.679417,
      "longitude": -9.338623,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004675,
      "ems": null
    },
    {
      "latitude": 38.68103,
      "longitude": -9.339155,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004681,
      "ems": null
    },
    {
      "latitude": 38.682629,
      "longitude": -9.339722,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004687,
      "ems": null
    },
    {
      "latitude": 38.684303,
      "longitude": -9.340332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004694,
      "ems": null
    },
    {
      "latitude": 38.686073,
      "longitude": -9.340942,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004700,
      "ems": null
    },
    {
      "latitude": 38.687668,
      "longitude": -9.341543,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004706,
      "ems": null
    },
    {
      "latitude": 38.689087,
      "longitude": -9.342081,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004712,
      "ems": null
    },
    {
      "latitude": 38.69046,
      "longitude": -9.342618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004718,
      "ems": null
    },
    {
      "latitude": 38.691742,
      "longitude": -9.343156,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "3277",
      "timestamp": 1661004724,
      "ems": null
    },
    {
      "latitude": 38.692978,
      "longitude": -9.343634,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661004730,
      "ems": null
    },
    {
      "latitude": 38.694221,
      "longitude": -9.344055,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 346,
      "squawk": "3277",
      "timestamp": 1661004736,
      "ems": null
    },
    {
      "latitude": 38.695572,
      "longitude": -9.344543,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004742,
      "ems": null
    },
    {
      "latitude": 38.696686,
      "longitude": -9.344971,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004748,
      "ems": null
    },
    {
      "latitude": 38.698132,
      "longitude": -9.345459,
      "altitude": {
        "feet": 550,
        "meters": 168
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004754,
      "ems": null
    },
    {
      "latitude": 38.699341,
      "longitude": -9.345886,
      "altitude": {
        "feet": 525,
        "meters": 160
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004760,
      "ems": null
    },
    {
      "latitude": 38.700531,
      "longitude": -9.34632,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004766,
      "ems": null
    },
    {
      "latitude": 38.701946,
      "longitude": -9.346802,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004772,
      "ems": null
    },
    {
      "latitude": 38.70314,
      "longitude": -9.347276,
      "altitude": {
        "feet": 450,
        "meters": 137
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
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004778,
      "ems": null
    },
    {
      "latitude": 38.704697,
      "longitude": -9.347873,
      "altitude": {
        "feet": 450,
        "meters": 137
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004784,
      "ems": null
    },
    {
      "latitude": 38.706139,
      "longitude": -9.348389,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004791,
      "ems": null
    },
    {
      "latitude": 38.707535,
      "longitude": -9.348816,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3277",
      "timestamp": 1661004796,
      "ems": null
    },
    {
      "latitude": 38.709072,
      "longitude": -9.349365,
      "altitude": {
        "feet": 375,
        "meters": 114
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
      "squawk": "3277",
      "timestamp": 1661004802,
      "ems": null
    },
    {
      "latitude": 38.71051,
      "longitude": -9.349902,
      "altitude": {
        "feet": 375,
        "meters": 114
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
      "heading": 341,
      "squawk": "3277",
      "timestamp": 1661004808,
      "ems": null
    },
    {
      "latitude": 38.711212,
      "longitude": -9.350159,
      "altitude": {
        "feet": 375,
        "meters": 114
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
      "heading": 347,
      "squawk": "3277",
      "timestamp": 1661004812,
      "ems": null
    },
    {
      "latitude": 38.712524,
      "longitude": -9.350559,
      "altitude": {
        "feet": 325,
        "meters": 99
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
      "heading": 342,
      "squawk": "3277",
      "timestamp": 1661004818,
      "ems": null
    },
    {
      "latitude": 38.713211,
      "longitude": -9.350858,
      "altitude": {
        "feet": 325,
        "meters": 99
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
      "squawk": "3277",
      "timestamp": 1661004820,
      "ems": null
    },
    {
      "latitude": 38.714447,
      "longitude": -9.351336,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004826,
      "ems": null
    },
    {
      "latitude": 38.715775,
      "longitude": -9.351813,
      "altitude": {
        "feet": 250,
        "meters": 76
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004832,
      "ems": null
    },
    {
      "latitude": 38.717056,
      "longitude": -9.352291,
      "altitude": {
        "feet": 225,
        "meters": 69
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
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004839,
      "ems": null
    },
    {
      "latitude": 38.718334,
      "longitude": -9.352722,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004845,
      "ems": null
    },
    {
      "latitude": 38.719482,
      "longitude": -9.353127,
      "altitude": {
        "feet": 175,
        "meters": 53
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
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004850,
      "ems": null
    },
    {
      "latitude": 38.721081,
      "longitude": -9.353699,
      "altitude": {
        "feet": 175,
        "meters": 53
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
      "heading": 345,
      "squawk": "3277",
      "timestamp": 1661004858,
      "ems": null
    },
    {
      "latitude": 38.721954,
      "longitude": -9.354022,
      "altitude": {
        "feet": 175,
        "meters": 53
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
      "heading": 344,
      "squawk": "3277",
      "timestamp": 1661004864,
      "ems": null
    },
    {
      "latitude": 38.722641,
      "longitude": -9.354291,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 31.5,
        "kts": 17,
        "mph": 19.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3277",
      "timestamp": 1661004870,
      "ems": null
    },
    {
      "latitude": 38.722851,
      "longitude": -9.354355,
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
      "heading": 354,
      "squawk": "3277",
      "timestamp": 1661004873,
      "ems": null
    },
    {
      "latitude": 38.723076,
      "longitude": -9.354261,
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
      "heading": 42,
      "squawk": "3277",
      "timestamp": 1661004878,
      "ems": null
    },
    {
      "latitude": 38.723156,
      "longitude": -9.354053,
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
      "heading": 67,
      "squawk": "3277",
      "timestamp": 1661004885,
      "ems": null
    },
    {
      "latitude": 38.723202,
      "longitude": -9.353844,
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
      "heading": 73,
      "squawk": "3277",
      "timestamp": 1661004890,
      "ems": null
    }
  ],
};
