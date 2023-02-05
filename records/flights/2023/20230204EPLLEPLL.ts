import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230204EPLLEPLL",
    callsign: "BNI8D",
    name: "CPL Referesher training",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 1, 4, 7, 35).getTime(),
    arrival: new Date(2023, 1, 4, 8, 40).getTime(),
    singleEnginePistonTime: 65,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 65,
    ifrTime: 0,
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
      modes: "3D3720",
      registration: "SP-PFD",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    origin: {
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
      "latitude": 51.720886,
      "longitude": 19.393692,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1675496505,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.39072,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1675496511,
      "ems": null
    },
    {
      "latitude": 51.719513,
      "longitude": 19.387974,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1675496517,
      "ems": null
    },
    {
      "latitude": 51.718597,
      "longitude": 19.38456,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1675496524,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 19.382019,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1675496530,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 19.380646,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1675496533,
      "ems": null
    },
    {
      "latitude": 51.716885,
      "longitude": 19.379196,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1675496536,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 19.376097,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1675496542,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 19.372608,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1675496548,
      "ems": null
    },
    {
      "latitude": 51.714294,
      "longitude": 19.36949,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1675496554,
      "ems": null
    },
    {
      "latitude": 51.713856,
      "longitude": 19.367447,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1675496557,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.364014,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1675496563,
      "ems": null
    },
    {
      "latitude": 51.711914,
      "longitude": 19.362587,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1675496566,
      "ems": null
    },
    {
      "latitude": 51.710907,
      "longitude": 19.361399,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1675496569,
      "ems": null
    },
    {
      "latitude": 51.709713,
      "longitude": 19.360352,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1675496573,
      "ems": null
    },
    {
      "latitude": 51.708549,
      "longitude": 19.359741,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1675496575,
      "ems": null
    },
    {
      "latitude": 51.707291,
      "longitude": 19.35932,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1675496578,
      "ems": null
    },
    {
      "latitude": 51.706009,
      "longitude": 19.359247,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1675496581,
      "ems": null
    },
    {
      "latitude": 51.704639,
      "longitude": 19.359512,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1675496584,
      "ems": null
    },
    {
      "latitude": 51.703384,
      "longitude": 19.360046,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1675496587,
      "ems": null
    },
    {
      "latitude": 51.702217,
      "longitude": 19.360733,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1675496590,
      "ems": null
    },
    {
      "latitude": 51.701065,
      "longitude": 19.361696,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1675496593,
      "ems": null
    },
    {
      "latitude": 51.700077,
      "longitude": 19.362793,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1675496596,
      "ems": null
    },
    {
      "latitude": 51.6991,
      "longitude": 19.36409,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675496599,
      "ems": null
    },
    {
      "latitude": 51.698124,
      "longitude": 19.365463,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675496603,
      "ems": null
    },
    {
      "latitude": 51.697128,
      "longitude": 19.366817,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675496606,
      "ems": null
    },
    {
      "latitude": 51.696354,
      "longitude": 19.368057,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496608,
      "ems": null
    },
    {
      "latitude": 51.69556,
      "longitude": 19.369507,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496611,
      "ems": null
    },
    {
      "latitude": 51.694794,
      "longitude": 19.370975,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1675496614,
      "ems": null
    },
    {
      "latitude": 51.694073,
      "longitude": 19.372559,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1675496618,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.374018,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1675496620,
      "ems": null
    },
    {
      "latitude": 51.693146,
      "longitude": 19.374538,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1675496621,
      "ems": null
    },
    {
      "latitude": 51.692276,
      "longitude": 19.376543,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1675496626,
      "ems": null
    },
    {
      "latitude": 51.691513,
      "longitude": 19.378891,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1675496630,
      "ems": null
    },
    {
      "latitude": 51.690994,
      "longitude": 19.380402,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1675496633,
      "ems": null
    },
    {
      "latitude": 51.690441,
      "longitude": 19.382095,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1675496636,
      "ems": null
    },
    {
      "latitude": 51.690022,
      "longitude": 19.383469,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1675496638,
      "ems": null
    },
    {
      "latitude": 51.68951,
      "longitude": 19.3853,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1675496642,
      "ems": null
    },
    {
      "latitude": 51.689117,
      "longitude": 19.386786,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1675496645,
      "ems": null
    },
    {
      "latitude": 51.688671,
      "longitude": 19.38858,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1675496648,
      "ems": null
    },
    {
      "latitude": 51.688251,
      "longitude": 19.390335,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675496651,
      "ems": null
    },
    {
      "latitude": 51.687836,
      "longitude": 19.392206,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675496654,
      "ems": null
    },
    {
      "latitude": 51.687424,
      "longitude": 19.394135,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675496657,
      "ems": null
    },
    {
      "latitude": 51.687012,
      "longitude": 19.396139,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675496660,
      "ems": null
    },
    {
      "latitude": 51.686646,
      "longitude": 19.397921,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675496663,
      "ems": null
    },
    {
      "latitude": 51.686234,
      "longitude": 19.399925,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675496666,
      "ems": null
    },
    {
      "latitude": 51.685738,
      "longitude": 19.402084,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675496669,
      "ems": null
    },
    {
      "latitude": 51.684902,
      "longitude": 19.405746,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675496675,
      "ems": null
    },
    {
      "latitude": 51.684174,
      "longitude": 19.409576,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1675496680,
      "ems": null
    },
    {
      "latitude": 51.683807,
      "longitude": 19.411951,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675496684,
      "ems": null
    },
    {
      "latitude": 51.683739,
      "longitude": 19.412537,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675496685,
      "ems": null
    },
    {
      "latitude": 51.683552,
      "longitude": 19.41391,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675496687,
      "ems": null
    },
    {
      "latitude": 51.683273,
      "longitude": 19.416504,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675496690,
      "ems": null
    },
    {
      "latitude": 51.683075,
      "longitude": 19.418558,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1675496693,
      "ems": null
    },
    {
      "latitude": 51.683029,
      "longitude": 19.4193,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1675496695,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.422455,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675496699,
      "ems": null
    },
    {
      "latitude": 51.682388,
      "longitude": 19.424591,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1675496702,
      "ems": null
    },
    {
      "latitude": 51.68161,
      "longitude": 19.429247,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1675496708,
      "ems": null
    },
    {
      "latitude": 51.681107,
      "longitude": 19.433256,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675496714,
      "ems": null
    },
    {
      "latitude": 51.680603,
      "longitude": 19.437487,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675496720,
      "ems": null
    },
    {
      "latitude": 51.680099,
      "longitude": 19.441717,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1675496726,
      "ems": null
    },
    {
      "latitude": 51.679276,
      "longitude": 19.44595,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675496732,
      "ems": null
    },
    {
      "latitude": 51.678635,
      "longitude": 19.447805,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1675496735,
      "ems": null
    },
    {
      "latitude": 51.677856,
      "longitude": 19.449736,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1675496738,
      "ems": null
    },
    {
      "latitude": 51.676987,
      "longitude": 19.451591,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1675496741,
      "ems": null
    },
    {
      "latitude": 51.67598,
      "longitude": 19.453522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496744,
      "ems": null
    },
    {
      "latitude": 51.674927,
      "longitude": 19.455154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496747,
      "ems": null
    },
    {
      "latitude": 51.67387,
      "longitude": 19.456787,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675496750,
      "ems": null
    },
    {
      "latitude": 51.672684,
      "longitude": 19.458494,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496753,
      "ems": null
    },
    {
      "latitude": 51.671635,
      "longitude": 19.460144,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496756,
      "ems": null
    },
    {
      "latitude": 51.670395,
      "longitude": 19.461983,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496759,
      "ems": null
    },
    {
      "latitude": 51.669388,
      "longitude": 19.463543,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496762,
      "ems": null
    },
    {
      "latitude": 51.668243,
      "longitude": 19.465324,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1675496765,
      "ems": null
    },
    {
      "latitude": 51.667145,
      "longitude": 19.467031,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496768,
      "ems": null
    },
    {
      "latitude": 51.665909,
      "longitude": 19.468962,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675496771,
      "ems": null
    },
    {
      "latitude": 51.66394,
      "longitude": 19.472004,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496777,
      "ems": null
    },
    {
      "latitude": 51.661606,
      "longitude": 19.475864,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675496783,
      "ems": null
    },
    {
      "latitude": 51.6595,
      "longitude": 19.479132,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675496789,
      "ems": null
    },
    {
      "latitude": 51.658321,
      "longitude": 19.480667,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675496792,
      "ems": null
    },
    {
      "latitude": 51.656845,
      "longitude": 19.482397,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1675496796,
      "ems": null
    },
    {
      "latitude": 51.655525,
      "longitude": 19.483795,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675496799,
      "ems": null
    },
    {
      "latitude": 51.654224,
      "longitude": 19.48494,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675496801,
      "ems": null
    },
    {
      "latitude": 51.652771,
      "longitude": 19.486332,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1675496804,
      "ems": null
    },
    {
      "latitude": 51.65126,
      "longitude": 19.487593,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1675496807,
      "ems": null
    },
    {
      "latitude": 51.649796,
      "longitude": 19.488781,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1675496811,
      "ems": null
    },
    {
      "latitude": 51.648285,
      "longitude": 19.489895,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1675496814,
      "ems": null
    },
    {
      "latitude": 51.647003,
      "longitude": 19.490786,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1675496816,
      "ems": null
    },
    {
      "latitude": 51.645264,
      "longitude": 19.492046,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1675496820,
      "ems": null
    },
    {
      "latitude": 51.643753,
      "longitude": 19.49316,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1675496823,
      "ems": null
    },
    {
      "latitude": 51.642242,
      "longitude": 19.494349,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1675496826,
      "ems": null
    },
    {
      "latitude": 51.639187,
      "longitude": 19.496994,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1675496832,
      "ems": null
    },
    {
      "latitude": 51.638023,
      "longitude": 19.498291,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1675496834,
      "ems": null
    },
    {
      "latitude": 51.636337,
      "longitude": 19.500286,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675496838,
      "ems": null
    },
    {
      "latitude": 51.635147,
      "longitude": 19.501995,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675496841,
      "ems": null
    },
    {
      "latitude": 51.634232,
      "longitude": 19.50333,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675496844,
      "ems": null
    },
    {
      "latitude": 51.633499,
      "longitude": 19.504519,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675496846,
      "ems": null
    },
    {
      "latitude": 51.631973,
      "longitude": 19.506912,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496850,
      "ems": null
    },
    {
      "latitude": 51.630936,
      "longitude": 19.508526,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496853,
      "ems": null
    },
    {
      "latitude": 51.629829,
      "longitude": 19.510269,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496856,
      "ems": null
    },
    {
      "latitude": 51.628693,
      "longitude": 19.512016,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496859,
      "ems": null
    },
    {
      "latitude": 51.627686,
      "longitude": 19.513649,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496862,
      "ems": null
    },
    {
      "latitude": 51.626572,
      "longitude": 19.515381,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496865,
      "ems": null
    },
    {
      "latitude": 51.625595,
      "longitude": 19.516983,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675496868,
      "ems": null
    },
    {
      "latitude": 51.623501,
      "longitude": 19.520264,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675496873,
      "ems": null
    },
    {
      "latitude": 51.62122,
      "longitude": 19.523773,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1675496880,
      "ems": null
    },
    {
      "latitude": 51.618988,
      "longitude": 19.527456,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1675496886,
      "ems": null
    },
    {
      "latitude": 51.61684,
      "longitude": 19.531097,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1675496892,
      "ems": null
    },
    {
      "latitude": 51.614887,
      "longitude": 19.534531,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496898,
      "ems": null
    },
    {
      "latitude": 51.612808,
      "longitude": 19.538294,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496904,
      "ems": null
    },
    {
      "latitude": 51.611801,
      "longitude": 19.540224,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496907,
      "ems": null
    },
    {
      "latitude": 51.609951,
      "longitude": 19.543533,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675496913,
      "ems": null
    },
    {
      "latitude": 51.607956,
      "longitude": 19.547052,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675496919,
      "ems": null
    },
    {
      "latitude": 51.606079,
      "longitude": 19.550245,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675496925,
      "ems": null
    },
    {
      "latitude": 51.603836,
      "longitude": 19.554255,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1675496931,
      "ems": null
    },
    {
      "latitude": 51.602085,
      "longitude": 19.557648,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1675496937,
      "ems": null
    },
    {
      "latitude": 51.601059,
      "longitude": 19.560013,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1675496940,
      "ems": null
    },
    {
      "latitude": 51.600266,
      "longitude": 19.561825,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1675496943,
      "ems": null
    },
    {
      "latitude": 51.599247,
      "longitude": 19.563904,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1675496946,
      "ems": null
    },
    {
      "latitude": 51.597149,
      "longitude": 19.567642,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1675496952,
      "ems": null
    },
    {
      "latitude": 51.595596,
      "longitude": 19.570955,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1675496958,
      "ems": null
    },
    {
      "latitude": 51.595196,
      "longitude": 19.571915,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1675496959,
      "ems": null
    },
    {
      "latitude": 51.594452,
      "longitude": 19.574127,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1675496963,
      "ems": null
    },
    {
      "latitude": 51.593765,
      "longitude": 19.576374,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1675496966,
      "ems": null
    },
    {
      "latitude": 51.593079,
      "longitude": 19.578602,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1675496970,
      "ems": null
    },
    {
      "latitude": 51.592308,
      "longitude": 19.581146,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1675496974,
      "ems": null
    },
    {
      "latitude": 51.591476,
      "longitude": 19.583576,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1675496977,
      "ems": null
    },
    {
      "latitude": 51.590725,
      "longitude": 19.585648,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1675496980,
      "ems": null
    },
    {
      "latitude": 51.590149,
      "longitude": 19.587435,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1675496983,
      "ems": null
    },
    {
      "latitude": 51.589375,
      "longitude": 19.589767,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1675496986,
      "ems": null
    },
    {
      "latitude": 51.587841,
      "longitude": 19.593658,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1675496992,
      "ems": null
    },
    {
      "latitude": 51.586861,
      "longitude": 19.595566,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1675496995,
      "ems": null
    },
    {
      "latitude": 51.585983,
      "longitude": 19.597309,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1675496998,
      "ems": null
    },
    {
      "latitude": 51.584976,
      "longitude": 19.599237,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1675497001,
      "ems": null
    },
    {
      "latitude": 51.584152,
      "longitude": 19.600946,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1675497004,
      "ems": null
    },
    {
      "latitude": 51.583649,
      "longitude": 19.602127,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1675497006,
      "ems": null
    },
    {
      "latitude": 51.581928,
      "longitude": 19.607925,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1675497015,
      "ems": null
    },
    {
      "latitude": 51.581322,
      "longitude": 19.610443,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497019,
      "ems": null
    },
    {
      "latitude": 51.580856,
      "longitude": 19.612452,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497022,
      "ems": null
    },
    {
      "latitude": 51.580486,
      "longitude": 19.614029,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497024,
      "ems": null
    },
    {
      "latitude": 51.580112,
      "longitude": 19.615631,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497026,
      "ems": null
    },
    {
      "latitude": 51.579529,
      "longitude": 19.617945,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497030,
      "ems": null
    },
    {
      "latitude": 51.579025,
      "longitude": 19.620098,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675497034,
      "ems": null
    },
    {
      "latitude": 51.578522,
      "longitude": 19.622622,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675497037,
      "ems": null
    },
    {
      "latitude": 51.57843,
      "longitude": 19.623066,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675497038,
      "ems": null
    },
    {
      "latitude": 51.577744,
      "longitude": 19.626259,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675497042,
      "ems": null
    },
    {
      "latitude": 51.576416,
      "longitude": 19.632345,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497052,
      "ems": null
    },
    {
      "latitude": 51.575596,
      "longitude": 19.635696,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497058,
      "ems": null
    },
    {
      "latitude": 51.575089,
      "longitude": 19.638062,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497062,
      "ems": null
    },
    {
      "latitude": 51.574108,
      "longitude": 19.64325,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1675497070,
      "ems": null
    },
    {
      "latitude": 51.573395,
      "longitude": 19.647043,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1675497076,
      "ems": null
    },
    {
      "latitude": 51.57312,
      "longitude": 19.648825,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1675497079,
      "ems": null
    },
    {
      "latitude": 51.572758,
      "longitude": 19.650879,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1675497082,
      "ems": null
    },
    {
      "latitude": 51.572525,
      "longitude": 19.652388,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675497085,
      "ems": null
    },
    {
      "latitude": 51.572247,
      "longitude": 19.654541,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1675497088,
      "ems": null
    },
    {
      "latitude": 51.571964,
      "longitude": 19.656143,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1675497091,
      "ems": null
    },
    {
      "latitude": 51.571335,
      "longitude": 19.660183,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1675497097,
      "ems": null
    },
    {
      "latitude": 51.570847,
      "longitude": 19.66362,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675497103,
      "ems": null
    },
    {
      "latitude": 51.570335,
      "longitude": 19.667358,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1675497109,
      "ems": null
    },
    {
      "latitude": 51.569916,
      "longitude": 19.67041,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1675497115,
      "ems": null
    },
    {
      "latitude": 51.569366,
      "longitude": 19.674955,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675497121,
      "ems": null
    },
    {
      "latitude": 51.569172,
      "longitude": 19.676971,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1675497124,
      "ems": null
    },
    {
      "latitude": 51.56868,
      "longitude": 19.681414,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1675497131,
      "ems": null
    },
    {
      "latitude": 51.568333,
      "longitude": 19.685059,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1675497137,
      "ems": null
    },
    {
      "latitude": 51.567963,
      "longitude": 19.688568,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1675497144,
      "ems": null
    },
    {
      "latitude": 51.567627,
      "longitude": 19.692102,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1675497150,
      "ems": null
    },
    {
      "latitude": 51.56731,
      "longitude": 19.695969,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1675497156,
      "ems": null
    },
    {
      "latitude": 51.566803,
      "longitude": 19.699749,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1675497162,
      "ems": null
    },
    {
      "latitude": 51.566658,
      "longitude": 19.70047,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675497163,
      "ems": null
    },
    {
      "latitude": 51.565636,
      "longitude": 19.703369,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1675497167,
      "ems": null
    },
    {
      "latitude": 51.565121,
      "longitude": 19.704437,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675497169,
      "ems": null
    },
    {
      "latitude": 51.563725,
      "longitude": 19.706726,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497173,
      "ems": null
    },
    {
      "latitude": 51.562424,
      "longitude": 19.708252,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1675497176,
      "ems": null
    },
    {
      "latitude": 51.56218,
      "longitude": 19.708508,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1675497177,
      "ems": null
    },
    {
      "latitude": 51.560188,
      "longitude": 19.710159,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1675497182,
      "ems": null
    },
    {
      "latitude": 51.557114,
      "longitude": 19.711533,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1675497186,
      "ems": null
    },
    {
      "latitude": 51.55545,
      "longitude": 19.711847,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675497189,
      "ems": null
    },
    {
      "latitude": 51.553669,
      "longitude": 19.712067,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1675497192,
      "ems": null
    },
    {
      "latitude": 51.551971,
      "longitude": 19.712294,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497195,
      "ems": null
    },
    {
      "latitude": 51.550095,
      "longitude": 19.712517,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1675497198,
      "ems": null
    },
    {
      "latitude": 51.549179,
      "longitude": 19.712591,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1675497200,
      "ems": null
    },
    {
      "latitude": 51.546661,
      "longitude": 19.712812,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497204,
      "ems": null
    },
    {
      "latitude": 51.544781,
      "longitude": 19.712982,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497207,
      "ems": null
    },
    {
      "latitude": 51.543011,
      "longitude": 19.713211,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497210,
      "ems": null
    },
    {
      "latitude": 51.541122,
      "longitude": 19.713333,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497213,
      "ems": null
    },
    {
      "latitude": 51.537598,
      "longitude": 19.713629,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497219,
      "ems": null
    },
    {
      "latitude": 51.533794,
      "longitude": 19.713898,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1675497226,
      "ems": null
    },
    {
      "latitude": 51.530117,
      "longitude": 19.714584,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1675497232,
      "ems": null
    },
    {
      "latitude": 51.528397,
      "longitude": 19.715115,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1675497234,
      "ems": null
    },
    {
      "latitude": 51.52681,
      "longitude": 19.715881,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1675497237,
      "ems": null
    },
    {
      "latitude": 51.525284,
      "longitude": 19.716896,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1675497241,
      "ems": null
    },
    {
      "latitude": 51.523819,
      "longitude": 19.718231,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1675497243,
      "ems": null
    },
    {
      "latitude": 51.5224,
      "longitude": 19.719866,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1675497247,
      "ems": null
    },
    {
      "latitude": 51.520935,
      "longitude": 19.721573,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1675497250,
      "ems": null
    },
    {
      "latitude": 51.519642,
      "longitude": 19.722977,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1675497253,
      "ems": null
    },
    {
      "latitude": 51.518326,
      "longitude": 19.724615,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1675497256,
      "ems": null
    },
    {
      "latitude": 51.517033,
      "longitude": 19.726181,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1675497259,
      "ems": null
    },
    {
      "latitude": 51.515717,
      "longitude": 19.727882,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497262,
      "ems": null
    },
    {
      "latitude": 51.514526,
      "longitude": 19.729366,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497265,
      "ems": null
    },
    {
      "latitude": 51.513153,
      "longitude": 19.731073,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1675497268,
      "ems": null
    },
    {
      "latitude": 51.511822,
      "longitude": 19.732742,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1675497271,
      "ems": null
    },
    {
      "latitude": 51.51075,
      "longitude": 19.734116,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497274,
      "ems": null
    },
    {
      "latitude": 51.507957,
      "longitude": 19.737701,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497280,
      "ems": null
    },
    {
      "latitude": 51.505463,
      "longitude": 19.741022,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497286,
      "ems": null
    },
    {
      "latitude": 51.502991,
      "longitude": 19.744139,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497292,
      "ems": null
    },
    {
      "latitude": 51.500885,
      "longitude": 19.74696,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497298,
      "ems": null
    },
    {
      "latitude": 51.498413,
      "longitude": 19.750366,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497305,
      "ems": null
    },
    {
      "latitude": 51.49604,
      "longitude": 19.753647,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497310,
      "ems": null
    },
    {
      "latitude": 51.493927,
      "longitude": 19.756683,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497316,
      "ems": null
    },
    {
      "latitude": 51.491913,
      "longitude": 19.759653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675497322,
      "ems": null
    },
    {
      "latitude": 51.489521,
      "longitude": 19.763336,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675497328,
      "ems": null
    },
    {
      "latitude": 51.488499,
      "longitude": 19.764938,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1675497331,
      "ems": null
    },
    {
      "latitude": 51.487518,
      "longitude": 19.766617,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1675497335,
      "ems": null
    },
    {
      "latitude": 51.486496,
      "longitude": 19.768448,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675497338,
      "ems": null
    },
    {
      "latitude": 51.485519,
      "longitude": 19.770203,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675497341,
      "ems": null
    },
    {
      "latitude": 51.484589,
      "longitude": 19.771881,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675497344,
      "ems": null
    },
    {
      "latitude": 51.483658,
      "longitude": 19.773636,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1675497347,
      "ems": null
    },
    {
      "latitude": 51.482632,
      "longitude": 19.775696,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1675497350,
      "ems": null
    },
    {
      "latitude": 51.48175,
      "longitude": 19.77747,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1675497353,
      "ems": null
    },
    {
      "latitude": 51.480927,
      "longitude": 19.779102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1675497356,
      "ems": null
    },
    {
      "latitude": 51.480072,
      "longitude": 19.781036,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1675497359,
      "ems": null
    },
    {
      "latitude": 51.479233,
      "longitude": 19.782867,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1675497362,
      "ems": null
    },
    {
      "latitude": 51.478409,
      "longitude": 19.78467,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1675497365,
      "ems": null
    },
    {
      "latitude": 51.477558,
      "longitude": 19.78653,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1675497368,
      "ems": null
    },
    {
      "latitude": 51.476898,
      "longitude": 19.788158,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1675497371,
      "ems": null
    },
    {
      "latitude": 51.476166,
      "longitude": 19.789791,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1675497374,
      "ems": null
    },
    {
      "latitude": 51.474346,
      "longitude": 19.792786,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675497380,
      "ems": null
    },
    {
      "latitude": 51.473145,
      "longitude": 19.794098,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497383,
      "ems": null
    },
    {
      "latitude": 51.471863,
      "longitude": 19.795135,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1675497386,
      "ems": null
    },
    {
      "latitude": 51.470718,
      "longitude": 19.796175,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497389,
      "ems": null
    },
    {
      "latitude": 51.469456,
      "longitude": 19.797287,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1675497392,
      "ems": null
    },
    {
      "latitude": 51.46806,
      "longitude": 19.798508,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497395,
      "ems": null
    },
    {
      "latitude": 51.46669,
      "longitude": 19.799664,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497399,
      "ems": null
    },
    {
      "latitude": 51.4655,
      "longitude": 19.80072,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497401,
      "ems": null
    },
    {
      "latitude": 51.464127,
      "longitude": 19.801891,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497404,
      "ems": null
    },
    {
      "latitude": 51.461792,
      "longitude": 19.80397,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497410,
      "ems": null
    },
    {
      "latitude": 51.45845,
      "longitude": 19.806866,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497416,
      "ems": null
    },
    {
      "latitude": 51.455444,
      "longitude": 19.809418,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497423,
      "ems": null
    },
    {
      "latitude": 51.452652,
      "longitude": 19.811859,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1675497429,
      "ems": null
    },
    {
      "latitude": 51.449951,
      "longitude": 19.814224,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1675497435,
      "ems": null
    },
    {
      "latitude": 51.447464,
      "longitude": 19.816515,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1675497441,
      "ems": null
    },
    {
      "latitude": 51.446365,
      "longitude": 19.817852,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497444,
      "ems": null
    },
    {
      "latitude": 51.445221,
      "longitude": 19.819559,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675497447,
      "ems": null
    },
    {
      "latitude": 51.44418,
      "longitude": 19.821167,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675497450,
      "ems": null
    },
    {
      "latitude": 51.44339,
      "longitude": 19.822601,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1675497453,
      "ems": null
    },
    {
      "latitude": 51.442566,
      "longitude": 19.824532,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1675497456,
      "ems": null
    },
    {
      "latitude": 51.441925,
      "longitude": 19.826536,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1675497459,
      "ems": null
    },
    {
      "latitude": 51.441433,
      "longitude": 19.828262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1675497462,
      "ems": null
    },
    {
      "latitude": 51.440968,
      "longitude": 19.83017,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1675497465,
      "ems": null
    },
    {
      "latitude": 51.44046,
      "longitude": 19.832253,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497468,
      "ems": null
    },
    {
      "latitude": 51.440048,
      "longitude": 19.83396,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1675497471,
      "ems": null
    },
    {
      "latitude": 51.439545,
      "longitude": 19.836334,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1675497474,
      "ems": null
    },
    {
      "latitude": 51.439178,
      "longitude": 19.838264,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1675497477,
      "ems": null
    },
    {
      "latitude": 51.438812,
      "longitude": 19.840567,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1675497480,
      "ems": null
    },
    {
      "latitude": 51.438583,
      "longitude": 19.842497,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1675497483,
      "ems": null
    },
    {
      "latitude": 51.438641,
      "longitude": 19.844513,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1675497486,
      "ems": null
    },
    {
      "latitude": 51.438858,
      "longitude": 19.846355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1675497489,
      "ems": null
    },
    {
      "latitude": 51.43927,
      "longitude": 19.848434,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1675497492,
      "ems": null
    },
    {
      "latitude": 51.439865,
      "longitude": 19.849995,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1675497495,
      "ems": null
    },
    {
      "latitude": 51.440548,
      "longitude": 19.851379,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1675497498,
      "ems": null
    },
    {
      "latitude": 51.441422,
      "longitude": 19.852592,
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1675497501,
      "ems": null
    },
    {
      "latitude": 51.442177,
      "longitude": 19.853439,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1675497504,
      "ems": null
    },
    {
      "latitude": 51.443436,
      "longitude": 19.854151,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1675497508,
      "ems": null
    },
    {
      "latitude": 51.444504,
      "longitude": 19.854431,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1675497511,
      "ems": null
    },
    {
      "latitude": 51.445576,
      "longitude": 19.854507,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675497514,
      "ems": null
    },
    {
      "latitude": 51.446091,
      "longitude": 19.854374,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1675497517,
      "ems": null
    },
    {
      "latitude": 51.447464,
      "longitude": 19.853704,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1675497520,
      "ems": null
    },
    {
      "latitude": 51.448425,
      "longitude": 19.852814,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1675497523,
      "ems": null
    },
    {
      "latitude": 51.449299,
      "longitude": 19.851685,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1675497526,
      "ems": null
    },
    {
      "latitude": 51.450027,
      "longitude": 19.850439,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1675497529,
      "ems": null
    },
    {
      "latitude": 51.450603,
      "longitude": 19.849167,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1675497532,
      "ems": null
    },
    {
      "latitude": 51.451256,
      "longitude": 19.84726,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1675497535,
      "ems": null
    },
    {
      "latitude": 51.451908,
      "longitude": 19.845505,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1675497538,
      "ems": null
    },
    {
      "latitude": 51.452511,
      "longitude": 19.844208,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1675497541,
      "ems": null
    },
    {
      "latitude": 51.453163,
      "longitude": 19.842682,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497544,
      "ems": null
    },
    {
      "latitude": 51.45377,
      "longitude": 19.841232,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497547,
      "ems": null
    },
    {
      "latitude": 51.454422,
      "longitude": 19.839783,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497550,
      "ems": null
    },
    {
      "latitude": 51.454926,
      "longitude": 19.838488,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675497552,
      "ems": null
    },
    {
      "latitude": 51.455399,
      "longitude": 19.836807,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675497556,
      "ems": null
    },
    {
      "latitude": 51.455795,
      "longitude": 19.835222,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1675497559,
      "ems": null
    },
    {
      "latitude": 51.456142,
      "longitude": 19.833679,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675497562,
      "ems": null
    },
    {
      "latitude": 51.456482,
      "longitude": 19.832253,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675497565,
      "ems": null
    },
    {
      "latitude": 51.456894,
      "longitude": 19.830471,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1675497568,
      "ems": null
    },
    {
      "latitude": 51.457169,
      "longitude": 19.829178,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1675497571,
      "ems": null
    },
    {
      "latitude": 51.457539,
      "longitude": 19.827271,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1675497574,
      "ems": null
    },
    {
      "latitude": 51.457855,
      "longitude": 19.825943,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1675497577,
      "ems": null
    },
    {
      "latitude": 51.458286,
      "longitude": 19.824066,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1675497580,
      "ems": null
    },
    {
      "latitude": 51.458679,
      "longitude": 19.82238,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1675497583,
      "ems": null
    },
    {
      "latitude": 51.459404,
      "longitude": 19.819031,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675497589,
      "ems": null
    },
    {
      "latitude": 51.46019,
      "longitude": 19.815699,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675497596,
      "ems": null
    },
    {
      "latitude": 51.460876,
      "longitude": 19.812654,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1675497601,
      "ems": null
    },
    {
      "latitude": 51.461685,
      "longitude": 19.80957,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1675497607,
      "ems": null
    },
    {
      "latitude": 51.462475,
      "longitude": 19.806671,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1675497613,
      "ems": null
    },
    {
      "latitude": 51.463032,
      "longitude": 19.80484,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1675497616,
      "ems": null
    },
    {
      "latitude": 51.463547,
      "longitude": 19.803467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1675497619,
      "ems": null
    },
    {
      "latitude": 51.464127,
      "longitude": 19.801743,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1675497623,
      "ems": null
    },
    {
      "latitude": 51.464676,
      "longitude": 19.800184,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675497626,
      "ems": null
    },
    {
      "latitude": 51.465179,
      "longitude": 19.798847,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675497628,
      "ems": null
    },
    {
      "latitude": 51.465729,
      "longitude": 19.797438,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675497631,
      "ems": null
    },
    {
      "latitude": 51.466415,
      "longitude": 19.795656,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1675497635,
      "ems": null
    },
    {
      "latitude": 51.466946,
      "longitude": 19.794388,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1675497637,
      "ems": null
    },
    {
      "latitude": 51.468292,
      "longitude": 19.790802,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675497644,
      "ems": null
    },
    {
      "latitude": 51.469574,
      "longitude": 19.787416,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1675497650,
      "ems": null
    },
    {
      "latitude": 51.470901,
      "longitude": 19.784077,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1675497656,
      "ems": null
    },
    {
      "latitude": 51.472,
      "longitude": 19.781181,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1675497661,
      "ems": null
    },
    {
      "latitude": 51.473602,
      "longitude": 19.777603,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1675497668,
      "ems": null
    },
    {
      "latitude": 51.475067,
      "longitude": 19.774277,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497675,
      "ems": null
    },
    {
      "latitude": 51.476486,
      "longitude": 19.771011,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497681,
      "ems": null
    },
    {
      "latitude": 51.477791,
      "longitude": 19.768066,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1675497686,
      "ems": null
    },
    {
      "latitude": 51.479328,
      "longitude": 19.764557,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1675497692,
      "ems": null
    },
    {
      "latitude": 51.480881,
      "longitude": 19.76136,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1675497699,
      "ems": null
    },
    {
      "latitude": 51.482346,
      "longitude": 19.758169,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497705,
      "ems": null
    },
    {
      "latitude": 51.483658,
      "longitude": 19.754944,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1675497711,
      "ems": null
    },
    {
      "latitude": 51.48436,
      "longitude": 19.753567,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1675497714,
      "ems": null
    },
    {
      "latitude": 51.485191,
      "longitude": 19.752426,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675497717,
      "ems": null
    },
    {
      "latitude": 51.486122,
      "longitude": 19.751663,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675497720,
      "ems": null
    },
    {
      "latitude": 51.486969,
      "longitude": 19.751413,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1675497723,
      "ems": null
    },
    {
      "latitude": 51.487984,
      "longitude": 19.751587,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1675497726,
      "ems": null
    },
    {
      "latitude": 51.488892,
      "longitude": 19.752081,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1675497729,
      "ems": null
    },
    {
      "latitude": 51.489708,
      "longitude": 19.752884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1675497732,
      "ems": null
    },
    {
      "latitude": 51.49036,
      "longitude": 19.753799,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1675497735,
      "ems": null
    },
    {
      "latitude": 51.491058,
      "longitude": 19.755249,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1675497738,
      "ems": null
    },
    {
      "latitude": 51.491524,
      "longitude": 19.756775,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1675497741,
      "ems": null
    },
    {
      "latitude": 51.49173,
      "longitude": 19.758244,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1675497744,
      "ems": null
    },
    {
      "latitude": 51.491821,
      "longitude": 19.75906,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1675497745,
      "ems": null
    },
    {
      "latitude": 51.491756,
      "longitude": 19.761276,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1675497749,
      "ems": null
    },
    {
      "latitude": 51.491501,
      "longitude": 19.762772,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1675497751,
      "ems": null
    },
    {
      "latitude": 51.49054,
      "longitude": 19.765888,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1675497755,
      "ems": null
    },
    {
      "latitude": 51.489624,
      "longitude": 19.767818,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1675497758,
      "ems": null
    },
    {
      "latitude": 51.488544,
      "longitude": 19.769669,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675497761,
      "ems": null
    },
    {
      "latitude": 51.487381,
      "longitude": 19.771271,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497764,
      "ems": null
    },
    {
      "latitude": 51.486172,
      "longitude": 19.772873,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497767,
      "ems": null
    },
    {
      "latitude": 51.485001,
      "longitude": 19.774426,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497770,
      "ems": null
    },
    {
      "latitude": 51.483749,
      "longitude": 19.776077,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497773,
      "ems": null
    },
    {
      "latitude": 51.482529,
      "longitude": 19.777765,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497776,
      "ems": null
    },
    {
      "latitude": 51.481293,
      "longitude": 19.779325,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497779,
      "ems": null
    },
    {
      "latitude": 51.480103,
      "longitude": 19.780958,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497782,
      "ems": null
    },
    {
      "latitude": 51.478683,
      "longitude": 19.78274,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497785,
      "ems": null
    },
    {
      "latitude": 51.477493,
      "longitude": 19.784372,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497788,
      "ems": null
    },
    {
      "latitude": 51.47509,
      "longitude": 19.787598,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497794,
      "ems": null
    },
    {
      "latitude": 51.472622,
      "longitude": 19.791031,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497800,
      "ems": null
    },
    {
      "latitude": 51.470261,
      "longitude": 19.794468,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675497807,
      "ems": null
    },
    {
      "latitude": 51.467968,
      "longitude": 19.797745,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497812,
      "ems": null
    },
    {
      "latitude": 51.465683,
      "longitude": 19.801075,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675497818,
      "ems": null
    },
    {
      "latitude": 51.463348,
      "longitude": 19.804415,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497824,
      "ems": null
    },
    {
      "latitude": 51.46106,
      "longitude": 19.807608,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675497830,
      "ems": null
    },
    {
      "latitude": 51.457867,
      "longitude": 19.811935,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675497840,
      "ems": null
    },
    {
      "latitude": 51.455959,
      "longitude": 19.814529,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497846,
      "ems": null
    },
    {
      "latitude": 51.454094,
      "longitude": 19.817047,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1675497852,
      "ems": null
    },
    {
      "latitude": 51.452232,
      "longitude": 19.819717,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675497858,
      "ems": null
    },
    {
      "latitude": 51.450649,
      "longitude": 19.822083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675497864,
      "ems": null
    },
    {
      "latitude": 51.448975,
      "longitude": 19.824755,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675497870,
      "ems": null
    },
    {
      "latitude": 51.448105,
      "longitude": 19.826313,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675497873,
      "ems": null
    },
    {
      "latitude": 51.447392,
      "longitude": 19.827576,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1675497876,
      "ems": null
    },
    {
      "latitude": 51.446602,
      "longitude": 19.828949,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675497879,
      "ems": null
    },
    {
      "latitude": 51.444901,
      "longitude": 19.831213,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1675497885,
      "ems": null
    },
    {
      "latitude": 51.444031,
      "longitude": 19.832253,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1675497888,
      "ems": null
    },
    {
      "latitude": 51.443062,
      "longitude": 19.833374,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1675497891,
      "ems": null
    },
    {
      "latitude": 51.441971,
      "longitude": 19.834553,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1675497894,
      "ems": null
    },
    {
      "latitude": 51.440968,
      "longitude": 19.835663,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1675497897,
      "ems": null
    },
    {
      "latitude": 51.440037,
      "longitude": 19.836807,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497900,
      "ems": null
    },
    {
      "latitude": 51.439198,
      "longitude": 19.837952,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1675497903,
      "ems": null
    },
    {
      "latitude": 51.438217,
      "longitude": 19.83923,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1675497906,
      "ems": null
    },
    {
      "latitude": 51.436405,
      "longitude": 19.84169,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675497912,
      "ems": null
    },
    {
      "latitude": 51.435474,
      "longitude": 19.842987,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675497916,
      "ems": null
    },
    {
      "latitude": 51.434647,
      "longitude": 19.84413,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1675497918,
      "ems": null
    },
    {
      "latitude": 51.43375,
      "longitude": 19.845428,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675497921,
      "ems": null
    },
    {
      "latitude": 51.433052,
      "longitude": 19.846573,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1675497924,
      "ems": null
    },
    {
      "latitude": 51.431984,
      "longitude": 19.848328,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1675497927,
      "ems": null
    },
    {
      "latitude": 51.431099,
      "longitude": 19.849777,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1675497930,
      "ems": null
    },
    {
      "latitude": 51.430069,
      "longitude": 19.851479,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1675497934,
      "ems": null
    },
    {
      "latitude": 51.427826,
      "longitude": 19.854225,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1675497940,
      "ems": null
    },
    {
      "latitude": 51.426537,
      "longitude": 19.855423,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1675497943,
      "ems": null
    },
    {
      "latitude": 51.425465,
      "longitude": 19.856415,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497945,
      "ems": null
    },
    {
      "latitude": 51.424576,
      "longitude": 19.857195,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1675497948,
      "ems": null
    },
    {
      "latitude": 51.422974,
      "longitude": 19.858753,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497951,
      "ems": null
    },
    {
      "latitude": 51.4216,
      "longitude": 19.860016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497955,
      "ems": null
    },
    {
      "latitude": 51.420486,
      "longitude": 19.860992,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497957,
      "ems": null
    },
    {
      "latitude": 51.41922,
      "longitude": 19.862167,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497960,
      "ems": null
    },
    {
      "latitude": 51.417892,
      "longitude": 19.86343,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1675497963,
      "ems": null
    },
    {
      "latitude": 51.416199,
      "longitude": 19.865063,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1675497967,
      "ems": null
    },
    {
      "latitude": 51.413132,
      "longitude": 19.867365,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1675497973,
      "ems": null
    },
    {
      "latitude": 51.412079,
      "longitude": 19.867884,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1675497975,
      "ems": null
    },
    {
      "latitude": 51.411026,
      "longitude": 19.868328,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1675497977,
      "ems": null
    },
    {
      "latitude": 51.409058,
      "longitude": 19.868849,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1675497981,
      "ems": null
    },
    {
      "latitude": 51.407402,
      "longitude": 19.868927,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1675497983,
      "ems": null
    },
    {
      "latitude": 51.405636,
      "longitude": 19.868622,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1675497986,
      "ems": null
    },
    {
      "latitude": 51.40382,
      "longitude": 19.867783,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1675497990,
      "ems": null
    },
    {
      "latitude": 51.402374,
      "longitude": 19.866714,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1675497992,
      "ems": null
    },
    {
      "latitude": 51.400841,
      "longitude": 19.865036,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1675497995,
      "ems": null
    },
    {
      "latitude": 51.399582,
      "longitude": 19.862909,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1675497999,
      "ems": null
    },
    {
      "latitude": 51.398651,
      "longitude": 19.860535,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1675498002,
      "ems": null
    },
    {
      "latitude": 51.398094,
      "longitude": 19.858093,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1675498005,
      "ems": null
    },
    {
      "latitude": 51.397842,
      "longitude": 19.855709,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1675498007,
      "ems": null
    },
    {
      "latitude": 51.39798,
      "longitude": 19.853334,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1675498011,
      "ems": null
    },
    {
      "latitude": 51.398209,
      "longitude": 19.851107,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1675498014,
      "ems": null
    },
    {
      "latitude": 51.398651,
      "longitude": 19.848785,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1675498017,
      "ems": null
    },
    {
      "latitude": 51.399124,
      "longitude": 19.846951,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675498020,
      "ems": null
    },
    {
      "latitude": 51.399719,
      "longitude": 19.844946,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1675498023,
      "ems": null
    },
    {
      "latitude": 51.400269,
      "longitude": 19.843016,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675498026,
      "ems": null
    },
    {
      "latitude": 51.400791,
      "longitude": 19.841156,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675498029,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 19.839401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675498032,
      "ems": null
    },
    {
      "latitude": 51.401917,
      "longitude": 19.837523,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1675498035,
      "ems": null
    },
    {
      "latitude": 51.402649,
      "longitude": 19.83589,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1675498038,
      "ems": null
    },
    {
      "latitude": 51.403519,
      "longitude": 19.834553,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675498041,
      "ems": null
    },
    {
      "latitude": 51.40448,
      "longitude": 19.833588,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "timestamp": 1675498044,
      "ems": null
    },
    {
      "latitude": 51.405579,
      "longitude": 19.832697,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498047,
      "ems": null
    },
    {
      "latitude": 51.406494,
      "longitude": 19.831955,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498050,
      "ems": null
    },
    {
      "latitude": 51.407501,
      "longitude": 19.831139,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498053,
      "ems": null
    },
    {
      "latitude": 51.408566,
      "longitude": 19.830246,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1675498056,
      "ems": null
    },
    {
      "latitude": 51.4095,
      "longitude": 19.829407,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1675498059,
      "ems": null
    },
    {
      "latitude": 51.410522,
      "longitude": 19.828568,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498062,
      "ems": null
    },
    {
      "latitude": 51.411301,
      "longitude": 19.828022,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498065,
      "ems": null
    },
    {
      "latitude": 51.412292,
      "longitude": 19.827423,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498068,
      "ems": null
    },
    {
      "latitude": 51.413315,
      "longitude": 19.826759,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498071,
      "ems": null
    },
    {
      "latitude": 51.414276,
      "longitude": 19.826239,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498074,
      "ems": null
    },
    {
      "latitude": 51.415691,
      "longitude": 19.825439,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1675498079,
      "ems": null
    },
    {
      "latitude": 51.416714,
      "longitude": 19.824905,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1675498082,
      "ems": null
    },
    {
      "latitude": 51.417755,
      "longitude": 19.824383,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1675498085,
      "ems": null
    },
    {
      "latitude": 51.418716,
      "longitude": 19.823864,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498088,
      "ems": null
    },
    {
      "latitude": 51.419552,
      "longitude": 19.823456,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498091,
      "ems": null
    },
    {
      "latitude": 51.420624,
      "longitude": 19.822922,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1675498094,
      "ems": null
    },
    {
      "latitude": 51.421555,
      "longitude": 19.822529,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498097,
      "ems": null
    },
    {
      "latitude": 51.42244,
      "longitude": 19.822083,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1675498100,
      "ems": null
    },
    {
      "latitude": 51.423466,
      "longitude": 19.821701,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1675498103,
      "ems": null
    },
    {
      "latitude": 51.4254,
      "longitude": 19.82082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498109,
      "ems": null
    },
    {
      "latitude": 51.427185,
      "longitude": 19.819929,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498115,
      "ems": null
    },
    {
      "latitude": 51.428211,
      "longitude": 19.819183,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498118,
      "ems": null
    },
    {
      "latitude": 51.429096,
      "longitude": 19.818344,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498121,
      "ems": null
    },
    {
      "latitude": 51.430027,
      "longitude": 19.817505,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498124,
      "ems": null
    },
    {
      "latitude": 51.430958,
      "longitude": 19.816666,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1675498127,
      "ems": null
    },
    {
      "latitude": 51.431984,
      "longitude": 19.815674,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1675498130,
      "ems": null
    },
    {
      "latitude": 51.432915,
      "longitude": 19.814758,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675498133,
      "ems": null
    },
    {
      "latitude": 51.4338,
      "longitude": 19.813766,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675498137,
      "ems": null
    },
    {
      "latitude": 51.434731,
      "longitude": 19.812851,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675498139,
      "ems": null
    },
    {
      "latitude": 51.435699,
      "longitude": 19.811913,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675498142,
      "ems": null
    },
    {
      "latitude": 51.436733,
      "longitude": 19.810867,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1675498146,
      "ems": null
    },
    {
      "latitude": 51.438686,
      "longitude": 19.80896,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498152,
      "ems": null
    },
    {
      "latitude": 51.440643,
      "longitude": 19.807205,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498158,
      "ems": null
    },
    {
      "latitude": 51.44165,
      "longitude": 19.806494,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498161,
      "ems": null
    },
    {
      "latitude": 51.442795,
      "longitude": 19.805603,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675498164,
      "ems": null
    },
    {
      "latitude": 51.443848,
      "longitude": 19.804861,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498167,
      "ems": null
    },
    {
      "latitude": 51.444878,
      "longitude": 19.804001,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498170,
      "ems": null
    },
    {
      "latitude": 51.44577,
      "longitude": 19.803375,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675498173,
      "ems": null
    },
    {
      "latitude": 51.44688,
      "longitude": 19.802628,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498176,
      "ems": null
    },
    {
      "latitude": 51.44809,
      "longitude": 19.801788,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498179,
      "ems": null
    },
    {
      "latitude": 51.449207,
      "longitude": 19.801102,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498182,
      "ems": null
    },
    {
      "latitude": 51.450325,
      "longitude": 19.800415,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498185,
      "ems": null
    },
    {
      "latitude": 51.451355,
      "longitude": 19.799812,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1675498188,
      "ems": null
    },
    {
      "latitude": 51.452511,
      "longitude": 19.799118,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1675498191,
      "ems": null
    },
    {
      "latitude": 51.45377,
      "longitude": 19.798508,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1675498194,
      "ems": null
    },
    {
      "latitude": 51.454887,
      "longitude": 19.797897,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498197,
      "ems": null
    },
    {
      "latitude": 51.456116,
      "longitude": 19.797363,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1675498200,
      "ems": null
    },
    {
      "latitude": 51.457306,
      "longitude": 19.796829,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1675498203,
      "ems": null
    },
    {
      "latitude": 51.458378,
      "longitude": 19.796371,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1675498206,
      "ems": null
    },
    {
      "latitude": 51.459541,
      "longitude": 19.795837,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1675498209,
      "ems": null
    },
    {
      "latitude": 51.463074,
      "longitude": 19.793875,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498218,
      "ems": null
    },
    {
      "latitude": 51.464081,
      "longitude": 19.793207,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1675498221,
      "ems": null
    },
    {
      "latitude": 51.465363,
      "longitude": 19.792252,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498224,
      "ems": null
    },
    {
      "latitude": 51.466415,
      "longitude": 19.791424,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498227,
      "ems": null
    },
    {
      "latitude": 51.467503,
      "longitude": 19.790573,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498230,
      "ems": null
    },
    {
      "latitude": 51.46806,
      "longitude": 19.790115,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498232,
      "ems": null
    },
    {
      "latitude": 51.468933,
      "longitude": 19.789421,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498234,
      "ems": null
    },
    {
      "latitude": 51.470123,
      "longitude": 19.788456,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1675498238,
      "ems": null
    },
    {
      "latitude": 51.471039,
      "longitude": 19.787598,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498241,
      "ems": null
    },
    {
      "latitude": 51.472046,
      "longitude": 19.786674,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498244,
      "ems": null
    },
    {
      "latitude": 51.47287,
      "longitude": 19.785931,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498247,
      "ems": null
    },
    {
      "latitude": 51.473831,
      "longitude": 19.784967,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498250,
      "ems": null
    },
    {
      "latitude": 51.475479,
      "longitude": 19.783705,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498256,
      "ems": null
    },
    {
      "latitude": 51.476349,
      "longitude": 19.783325,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1675498259,
      "ems": null
    },
    {
      "latitude": 51.47723,
      "longitude": 19.783249,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675498262,
      "ems": null
    },
    {
      "latitude": 51.478043,
      "longitude": 19.783258,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1675498265,
      "ems": null
    },
    {
      "latitude": 51.478821,
      "longitude": 19.783482,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1675498268,
      "ems": null
    },
    {
      "latitude": 51.479511,
      "longitude": 19.783859,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1675498271,
      "ems": null
    },
    {
      "latitude": 51.480164,
      "longitude": 19.78447,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1675498274,
      "ems": null
    },
    {
      "latitude": 51.480652,
      "longitude": 19.785263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1675498277,
      "ems": null
    },
    {
      "latitude": 51.481144,
      "longitude": 19.786377,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1675498280,
      "ems": null
    },
    {
      "latitude": 51.481514,
      "longitude": 19.78775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1675498283,
      "ems": null
    },
    {
      "latitude": 51.481705,
      "longitude": 19.789124,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1675498286,
      "ems": null
    },
    {
      "latitude": 51.481796,
      "longitude": 19.790533,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1675498289,
      "ems": null
    },
    {
      "latitude": 51.48175,
      "longitude": 19.792316,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1675498292,
      "ems": null
    },
    {
      "latitude": 51.481468,
      "longitude": 19.794159,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1675498296,
      "ems": null
    },
    {
      "latitude": 51.481018,
      "longitude": 19.795805,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1675498299,
      "ems": null
    },
    {
      "latitude": 51.480469,
      "longitude": 19.797289,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1675498301,
      "ems": null
    },
    {
      "latitude": 51.479645,
      "longitude": 19.798996,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1675498305,
      "ems": null
    },
    {
      "latitude": 51.478722,
      "longitude": 19.800491,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1675498308,
      "ems": null
    },
    {
      "latitude": 51.477585,
      "longitude": 19.801817,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1675498311,
      "ems": null
    },
    {
      "latitude": 51.476486,
      "longitude": 19.80278,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1675498314,
      "ems": null
    },
    {
      "latitude": 51.475021,
      "longitude": 19.803822,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1675498317,
      "ems": null
    },
    {
      "latitude": 51.47374,
      "longitude": 19.804459,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1675498320,
      "ems": null
    },
    {
      "latitude": 51.47197,
      "longitude": 19.805145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1675498323,
      "ems": null
    },
    {
      "latitude": 51.470444,
      "longitude": 19.805529,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1675498326,
      "ems": null
    },
    {
      "latitude": 51.46907,
      "longitude": 19.805677,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1675498329,
      "ems": null
    },
    {
      "latitude": 51.46727,
      "longitude": 19.805374,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1675498332,
      "ems": null
    },
    {
      "latitude": 51.465687,
      "longitude": 19.80484,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1675498335,
      "ems": null
    },
    {
      "latitude": 51.464218,
      "longitude": 19.804045,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1675498338,
      "ems": null
    },
    {
      "latitude": 51.462708,
      "longitude": 19.802933,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1675498341,
      "ems": null
    },
    {
      "latitude": 51.461266,
      "longitude": 19.801483,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1675498344,
      "ems": null
    },
    {
      "latitude": 51.459915,
      "longitude": 19.799664,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1675498348,
      "ems": null
    },
    {
      "latitude": 51.459,
      "longitude": 19.798105,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1675498350,
      "ems": null
    },
    {
      "latitude": 51.458084,
      "longitude": 19.796101,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1675498353,
      "ems": null
    },
    {
      "latitude": 51.45726,
      "longitude": 19.793726,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1675498357,
      "ems": null
    },
    {
      "latitude": 51.456703,
      "longitude": 19.791641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1675498359,
      "ems": null
    },
    {
      "latitude": 51.456329,
      "longitude": 19.789505,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1675498362,
      "ems": null
    },
    {
      "latitude": 51.45607,
      "longitude": 19.787268,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1675498366,
      "ems": null
    },
    {
      "latitude": 51.456051,
      "longitude": 19.78508,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1675498369,
      "ems": null
    },
    {
      "latitude": 51.456161,
      "longitude": 19.783112,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1675498372,
      "ems": null
    },
    {
      "latitude": 51.456436,
      "longitude": 19.781181,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1675498375,
      "ems": null
    },
    {
      "latitude": 51.456848,
      "longitude": 19.779696,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1675498378,
      "ems": null
    },
    {
      "latitude": 51.457489,
      "longitude": 19.778212,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1675498381,
      "ems": null
    },
    {
      "latitude": 51.45813,
      "longitude": 19.777172,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675498384,
      "ems": null
    },
    {
      "latitude": 51.45903,
      "longitude": 19.776154,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675498387,
      "ems": null
    },
    {
      "latitude": 51.459778,
      "longitude": 19.775465,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498390,
      "ems": null
    },
    {
      "latitude": 51.460648,
      "longitude": 19.774872,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675498393,
      "ems": null
    },
    {
      "latitude": 51.461544,
      "longitude": 19.774399,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1675498396,
      "ems": null
    },
    {
      "latitude": 51.462616,
      "longitude": 19.773758,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498399,
      "ems": null
    },
    {
      "latitude": 51.463074,
      "longitude": 19.77346,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1675498401,
      "ems": null
    },
    {
      "latitude": 51.464355,
      "longitude": 19.772421,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498405,
      "ems": null
    },
    {
      "latitude": 51.465267,
      "longitude": 19.771652,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675498408,
      "ems": null
    },
    {
      "latitude": 51.466106,
      "longitude": 19.770966,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498411,
      "ems": null
    },
    {
      "latitude": 51.467102,
      "longitude": 19.770195,
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
      "squawk": "7000",
      "timestamp": 1675498414,
      "ems": null
    },
    {
      "latitude": 51.46788,
      "longitude": 19.7696,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498417,
      "ems": null
    },
    {
      "latitude": 51.468807,
      "longitude": 19.768906,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498420,
      "ems": null
    },
    {
      "latitude": 51.46983,
      "longitude": 19.768066,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498423,
      "ems": null
    },
    {
      "latitude": 51.470764,
      "longitude": 19.767374,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498426,
      "ems": null
    },
    {
      "latitude": 51.472733,
      "longitude": 19.765814,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498432,
      "ems": null
    },
    {
      "latitude": 51.474716,
      "longitude": 19.764175,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498438,
      "ems": null
    },
    {
      "latitude": 51.476765,
      "longitude": 19.762726,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498444,
      "ems": null
    },
    {
      "latitude": 51.477768,
      "longitude": 19.762251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1675498447,
      "ems": null
    },
    {
      "latitude": 51.478867,
      "longitude": 19.762177,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1675498450,
      "ems": null
    },
    {
      "latitude": 51.479511,
      "longitude": 19.762344,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1675498452,
      "ems": null
    },
    {
      "latitude": 51.480927,
      "longitude": 19.762846,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1675498456,
      "ems": null
    },
    {
      "latitude": 51.482529,
      "longitude": 19.763365,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1675498461,
      "ems": null
    },
    {
      "latitude": 51.483608,
      "longitude": 19.76387,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1675498464,
      "ems": null
    },
    {
      "latitude": 51.484539,
      "longitude": 19.764404,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1675498467,
      "ems": null
    },
    {
      "latitude": 51.485565,
      "longitude": 19.764938,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1675498470,
      "ems": null
    },
    {
      "latitude": 51.486588,
      "longitude": 19.765472,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1675498473,
      "ems": null
    },
    {
      "latitude": 51.487614,
      "longitude": 19.765778,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1675498476,
      "ems": null
    },
    {
      "latitude": 51.489895,
      "longitude": 19.76593,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675498482,
      "ems": null
    },
    {
      "latitude": 51.490768,
      "longitude": 19.765814,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1675498485,
      "ems": null
    },
    {
      "latitude": 51.491756,
      "longitude": 19.765625,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1675498488,
      "ems": null
    },
    {
      "latitude": 51.493011,
      "longitude": 19.765396,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1675498491,
      "ems": null
    },
    {
      "latitude": 51.494064,
      "longitude": 19.765221,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1675498494,
      "ems": null
    },
    {
      "latitude": 51.495201,
      "longitude": 19.764938,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1675498497,
      "ems": null
    },
    {
      "latitude": 51.49683,
      "longitude": 19.764404,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1675498502,
      "ems": null
    },
    {
      "latitude": 51.497807,
      "longitude": 19.764099,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1675498505,
      "ems": null
    },
    {
      "latitude": 51.498833,
      "longitude": 19.763794,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1675498508,
      "ems": null
    },
    {
      "latitude": 51.499924,
      "longitude": 19.76329,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1675498511,
      "ems": null
    },
    {
      "latitude": 51.500786,
      "longitude": 19.76265,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675498514,
      "ems": null
    },
    {
      "latitude": 51.501801,
      "longitude": 19.761881,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498517,
      "ems": null
    },
    {
      "latitude": 51.502762,
      "longitude": 19.761211,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675498520,
      "ems": null
    },
    {
      "latitude": 51.503719,
      "longitude": 19.760437,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498523,
      "ems": null
    },
    {
      "latitude": 51.504593,
      "longitude": 19.759802,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498527,
      "ems": null
    },
    {
      "latitude": 51.505508,
      "longitude": 19.75906,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498529,
      "ems": null
    },
    {
      "latitude": 51.506607,
      "longitude": 19.758244,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498533,
      "ems": null
    },
    {
      "latitude": 51.507397,
      "longitude": 19.75769,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1675498535,
      "ems": null
    },
    {
      "latitude": 51.509445,
      "longitude": 19.756388,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498541,
      "ems": null
    },
    {
      "latitude": 51.511139,
      "longitude": 19.755199,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498547,
      "ems": null
    },
    {
      "latitude": 51.51329,
      "longitude": 19.753641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1675498554,
      "ems": null
    },
    {
      "latitude": 51.515079,
      "longitude": 19.752502,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1675498560,
      "ems": null
    },
    {
      "latitude": 51.516861,
      "longitude": 19.751265,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1675498566,
      "ems": null
    },
    {
      "latitude": 51.518616,
      "longitude": 19.749985,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498572,
      "ems": null
    },
    {
      "latitude": 51.519966,
      "longitude": 19.74884,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1675498577,
      "ems": null
    },
    {
      "latitude": 51.521622,
      "longitude": 19.747257,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675498584,
      "ems": null
    },
    {
      "latitude": 51.522293,
      "longitude": 19.746399,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1675498586,
      "ems": null
    },
    {
      "latitude": 51.523132,
      "longitude": 19.744949,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1675498590,
      "ems": null
    },
    {
      "latitude": 51.523972,
      "longitude": 19.742432,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1675498594,
      "ems": null
    },
    {
      "latitude": 51.524342,
      "longitude": 19.740829,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675498597,
      "ems": null
    },
    {
      "latitude": 51.524624,
      "longitude": 19.73877,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1675498601,
      "ems": null
    },
    {
      "latitude": 51.52467,
      "longitude": 19.735641,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1675498606,
      "ems": null
    },
    {
      "latitude": 51.524643,
      "longitude": 19.733969,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1675498609,
      "ems": null
    },
    {
      "latitude": 51.524624,
      "longitude": 19.732285,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1675498612,
      "ems": null
    },
    {
      "latitude": 51.524529,
      "longitude": 19.730301,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1675498616,
      "ems": null
    },
    {
      "latitude": 51.524368,
      "longitude": 19.727659,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1675498620,
      "ems": null
    },
    {
      "latitude": 51.524277,
      "longitude": 19.725729,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1675498624,
      "ems": null
    },
    {
      "latitude": 51.524204,
      "longitude": 19.724045,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1675498626,
      "ems": null
    },
    {
      "latitude": 51.524109,
      "longitude": 19.722366,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1675498629,
      "ems": null
    },
    {
      "latitude": 51.524017,
      "longitude": 19.718781,
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
      "squawk": "7000",
      "timestamp": 1675498635,
      "ems": null
    },
    {
      "latitude": 51.523922,
      "longitude": 19.714737,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1675498642,
      "ems": null
    },
    {
      "latitude": 51.523819,
      "longitude": 19.710735,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1675498648,
      "ems": null
    },
    {
      "latitude": 51.52383,
      "longitude": 19.706497,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1675498654,
      "ems": null
    },
    {
      "latitude": 51.523865,
      "longitude": 19.704351,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675498657,
      "ems": null
    },
    {
      "latitude": 51.523911,
      "longitude": 19.702198,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1675498660,
      "ems": null
    },
    {
      "latitude": 51.524017,
      "longitude": 19.700165,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675498663,
      "ems": null
    },
    {
      "latitude": 51.524063,
      "longitude": 19.698181,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675498666,
      "ems": null
    },
    {
      "latitude": 51.524109,
      "longitude": 19.695969,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675498669,
      "ems": null
    },
    {
      "latitude": 51.524185,
      "longitude": 19.693735,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1675498672,
      "ems": null
    },
    {
      "latitude": 51.524323,
      "longitude": 19.689281,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675498678,
      "ems": null
    },
    {
      "latitude": 51.524437,
      "longitude": 19.684677,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1675498684,
      "ems": null
    },
    {
      "latitude": 51.524734,
      "longitude": 19.680449,
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
      "squawk": "7000",
      "timestamp": 1675498690,
      "ems": null
    },
    {
      "latitude": 51.525135,
      "longitude": 19.67865,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1675498693,
      "ems": null
    },
    {
      "latitude": 51.525738,
      "longitude": 19.676895,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1675498696,
      "ems": null
    },
    {
      "latitude": 51.526382,
      "longitude": 19.675623,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1675498699,
      "ems": null
    },
    {
      "latitude": 51.526997,
      "longitude": 19.674683,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675498702,
      "ems": null
    },
    {
      "latitude": 51.528069,
      "longitude": 19.673691,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1675498705,
      "ems": null
    },
    {
      "latitude": 51.52895,
      "longitude": 19.67308,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1675498708,
      "ems": null
    },
    {
      "latitude": 51.529816,
      "longitude": 19.672728,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1675498711,
      "ems": null
    },
    {
      "latitude": 51.530766,
      "longitude": 19.672699,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675498714,
      "ems": null
    },
    {
      "latitude": 51.531883,
      "longitude": 19.673004,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1675498718,
      "ems": null
    },
    {
      "latitude": 51.532516,
      "longitude": 19.673248,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1675498720,
      "ems": null
    },
    {
      "latitude": 51.533707,
      "longitude": 19.673321,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1675498723,
      "ems": null
    },
    {
      "latitude": 51.534805,
      "longitude": 19.673174,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1675498726,
      "ems": null
    },
    {
      "latitude": 51.535889,
      "longitude": 19.67308,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498730,
      "ems": null
    },
    {
      "latitude": 51.536911,
      "longitude": 19.673025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498733,
      "ems": null
    },
    {
      "latitude": 51.537918,
      "longitude": 19.672876,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498736,
      "ems": null
    },
    {
      "latitude": 51.538822,
      "longitude": 19.672852,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675498738,
      "ems": null
    },
    {
      "latitude": 51.539936,
      "longitude": 19.672775,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675498741,
      "ems": null
    },
    {
      "latitude": 51.541985,
      "longitude": 19.672928,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1675498747,
      "ems": null
    },
    {
      "latitude": 51.542999,
      "longitude": 19.672876,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675498750,
      "ems": null
    },
    {
      "latitude": 51.545105,
      "longitude": 19.672623,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1675498757,
      "ems": null
    },
    {
      "latitude": 51.547119,
      "longitude": 19.67243,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498763,
      "ems": null
    },
    {
      "latitude": 51.54895,
      "longitude": 19.672209,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498769,
      "ems": null
    },
    {
      "latitude": 51.55069,
      "longitude": 19.671986,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498775,
      "ems": null
    },
    {
      "latitude": 51.552368,
      "longitude": 19.67186,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675498781,
      "ems": null
    },
    {
      "latitude": 51.554031,
      "longitude": 19.671762,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675498787,
      "ems": null
    },
    {
      "latitude": 51.555679,
      "longitude": 19.671837,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1675498793,
      "ems": null
    },
    {
      "latitude": 51.556595,
      "longitude": 19.671837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1675498796,
      "ems": null
    },
    {
      "latitude": 51.55751,
      "longitude": 19.671837,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1675498799,
      "ems": null
    },
    {
      "latitude": 51.558186,
      "longitude": 19.67186,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1675498802,
      "ems": null
    },
    {
      "latitude": 51.559956,
      "longitude": 19.67186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675498808,
      "ems": null
    },
    {
      "latitude": 51.560715,
      "longitude": 19.671986,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1675498811,
      "ems": null
    },
    {
      "latitude": 51.561584,
      "longitude": 19.672134,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1675498814,
      "ems": null
    },
    {
      "latitude": 51.562469,
      "longitude": 19.672318,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1675498817,
      "ems": null
    },
    {
      "latitude": 51.563232,
      "longitude": 19.672579,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1675498820,
      "ems": null
    },
    {
      "latitude": 51.564144,
      "longitude": 19.672852,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1675498823,
      "ems": null
    },
    {
      "latitude": 51.564972,
      "longitude": 19.6731,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1675498827,
      "ems": null
    },
    {
      "latitude": 51.565773,
      "longitude": 19.673309,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1675498829,
      "ems": null
    },
    {
      "latitude": 51.566101,
      "longitude": 19.673386,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1675498831,
      "ems": null
    },
    {
      "latitude": 51.568268,
      "longitude": 19.673693,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1675498838,
      "ems": null
    },
    {
      "latitude": 51.570007,
      "longitude": 19.673693,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675498845,
      "ems": null
    },
    {
      "latitude": 51.570847,
      "longitude": 19.673615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1675498847,
      "ems": null
    },
    {
      "latitude": 51.571686,
      "longitude": 19.673691,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1675498850,
      "ems": null
    },
    {
      "latitude": 51.572525,
      "longitude": 19.673691,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675498853,
      "ems": null
    },
    {
      "latitude": 51.57341,
      "longitude": 19.673538,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1675498857,
      "ems": null
    },
    {
      "latitude": 51.574173,
      "longitude": 19.673321,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1675498860,
      "ems": null
    },
    {
      "latitude": 51.575089,
      "longitude": 19.672728,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675498863,
      "ems": null
    },
    {
      "latitude": 51.575821,
      "longitude": 19.671837,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675498866,
      "ems": null
    },
    {
      "latitude": 51.57634,
      "longitude": 19.67041,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1675498869,
      "ems": null
    },
    {
      "latitude": 51.576622,
      "longitude": 19.668808,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1675498872,
      "ems": null
    },
    {
      "latitude": 51.576736,
      "longitude": 19.667086,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1675498875,
      "ems": null
    },
    {
      "latitude": 51.576622,
      "longitude": 19.665527,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1675498877,
      "ems": null
    },
    {
      "latitude": 51.576187,
      "longitude": 19.6633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1675498881,
      "ems": null
    },
    {
      "latitude": 51.57555,
      "longitude": 19.661255,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1675498884,
      "ems": null
    },
    {
      "latitude": 51.57513,
      "longitude": 19.66011,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1675498886,
      "ems": null
    },
    {
      "latitude": 51.573853,
      "longitude": 19.65766,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1675498890,
      "ems": null
    },
    {
      "latitude": 51.572803,
      "longitude": 19.656219,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1675498893,
      "ems": null
    },
    {
      "latitude": 51.571838,
      "longitude": 19.654615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1675498896,
      "ems": null
    },
    {
      "latitude": 51.571033,
      "longitude": 19.652786,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1675498899,
      "ems": null
    },
    {
      "latitude": 51.570335,
      "longitude": 19.650955,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1675498902,
      "ems": null
    },
    {
      "latitude": 51.569637,
      "longitude": 19.6492,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1675498906,
      "ems": null
    },
    {
      "latitude": 51.568939,
      "longitude": 19.647293,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1675498909,
      "ems": null
    },
    {
      "latitude": 51.568287,
      "longitude": 19.645691,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1675498911,
      "ems": null
    },
    {
      "latitude": 51.566849,
      "longitude": 19.641848,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1675498918,
      "ems": null
    },
    {
      "latitude": 51.566299,
      "longitude": 19.640215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1675498920,
      "ems": null
    },
    {
      "latitude": 51.565613,
      "longitude": 19.63821,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1675498923,
      "ems": null
    },
    {
      "latitude": 51.565075,
      "longitude": 19.636307,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1675498926,
      "ems": null
    },
    {
      "latitude": 51.564472,
      "longitude": 19.634094,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1675498930,
      "ems": null
    },
    {
      "latitude": 51.564098,
      "longitude": 19.632187,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1675498933,
      "ems": null
    },
    {
      "latitude": 51.563911,
      "longitude": 19.630508,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1675498936,
      "ems": null
    },
    {
      "latitude": 51.563866,
      "longitude": 19.628448,
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
      "squawk": "7000",
      "timestamp": 1675498938,
      "ems": null
    },
    {
      "latitude": 51.564056,
      "longitude": 19.626482,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1675498942,
      "ems": null
    },
    {
      "latitude": 51.56424,
      "longitude": 19.624996,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1675498944,
      "ems": null
    },
    {
      "latitude": 51.56461,
      "longitude": 19.623108,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1675498948,
      "ems": null
    },
    {
      "latitude": 51.564972,
      "longitude": 19.621582,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1675498951,
      "ems": null
    },
    {
      "latitude": 51.565495,
      "longitude": 19.620132,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675498954,
      "ems": null
    },
    {
      "latitude": 51.566055,
      "longitude": 19.618683,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1675498957,
      "ems": null
    },
    {
      "latitude": 51.56662,
      "longitude": 19.617128,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1675498960,
      "ems": null
    },
    {
      "latitude": 51.567078,
      "longitude": 19.615479,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1675498963,
      "ems": null
    },
    {
      "latitude": 51.567402,
      "longitude": 19.6138,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1675498966,
      "ems": null
    },
    {
      "latitude": 51.567673,
      "longitude": 19.612005,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1675498969,
      "ems": null
    },
    {
      "latitude": 51.568085,
      "longitude": 19.608889,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1675498974,
      "ems": null
    },
    {
      "latitude": 51.568268,
      "longitude": 19.606884,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1675498978,
      "ems": null
    },
    {
      "latitude": 51.568474,
      "longitude": 19.604797,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1675498981,
      "ems": null
    },
    {
      "latitude": 51.568634,
      "longitude": 19.603172,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1675498984,
      "ems": null
    },
    {
      "latitude": 51.56908,
      "longitude": 19.601364,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1675498987,
      "ems": null
    },
    {
      "latitude": 51.569683,
      "longitude": 19.599915,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1675498990,
      "ems": null
    },
    {
      "latitude": 51.57029,
      "longitude": 19.598846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1675498992,
      "ems": null
    },
    {
      "latitude": 51.57122,
      "longitude": 19.597549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675498996,
      "ems": null
    },
    {
      "latitude": 51.572067,
      "longitude": 19.596788,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675498999,
      "ems": null
    },
    {
      "latitude": 51.572754,
      "longitude": 19.596195,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675499001,
      "ems": null
    },
    {
      "latitude": 51.573212,
      "longitude": 19.595823,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1675499005,
      "ems": null
    },
    {
      "latitude": 51.574722,
      "longitude": 19.594265,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499008,
      "ems": null
    },
    {
      "latitude": 51.575459,
      "longitude": 19.593506,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499011,
      "ems": null
    },
    {
      "latitude": 51.576389,
      "longitude": 19.592361,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1675499014,
      "ems": null
    },
    {
      "latitude": 51.57724,
      "longitude": 19.591072,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675499017,
      "ems": null
    },
    {
      "latitude": 51.577972,
      "longitude": 19.590033,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675499020,
      "ems": null
    },
    {
      "latitude": 51.579319,
      "longitude": 19.588013,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1675499026,
      "ems": null
    },
    {
      "latitude": 51.580112,
      "longitude": 19.586945,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1675499029,
      "ems": null
    },
    {
      "latitude": 51.581039,
      "longitude": 19.585728,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1675499032,
      "ems": null
    },
    {
      "latitude": 51.581772,
      "longitude": 19.584614,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1675499035,
      "ems": null
    },
    {
      "latitude": 51.582535,
      "longitude": 19.583435,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1675499038,
      "ems": null
    },
    {
      "latitude": 51.583183,
      "longitude": 19.582443,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499041,
      "ems": null
    },
    {
      "latitude": 51.584629,
      "longitude": 19.580078,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1675499047,
      "ems": null
    },
    {
      "latitude": 51.585892,
      "longitude": 19.577711,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1675499053,
      "ems": null
    },
    {
      "latitude": 51.586582,
      "longitude": 19.576416,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1675499056,
      "ems": null
    },
    {
      "latitude": 51.587173,
      "longitude": 19.575336,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1675499059,
      "ems": null
    },
    {
      "latitude": 51.588043,
      "longitude": 19.573702,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1675499063,
      "ems": null
    },
    {
      "latitude": 51.588676,
      "longitude": 19.572372,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1675499065,
      "ems": null
    },
    {
      "latitude": 51.589325,
      "longitude": 19.57103,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1675499069,
      "ems": null
    },
    {
      "latitude": 51.58984,
      "longitude": 19.569931,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1675499072,
      "ems": null
    },
    {
      "latitude": 51.591339,
      "longitude": 19.567169,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1675499078,
      "ems": null
    },
    {
      "latitude": 51.59285,
      "longitude": 19.564646,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1675499084,
      "ems": null
    },
    {
      "latitude": 51.594311,
      "longitude": 19.562073,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1675499090,
      "ems": null
    },
    {
      "latitude": 51.595047,
      "longitude": 19.561008,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1675499093,
      "ems": null
    },
    {
      "latitude": 51.595707,
      "longitude": 19.55986,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499096,
      "ems": null
    },
    {
      "latitude": 51.596375,
      "longitude": 19.558857,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675499099,
      "ems": null
    },
    {
      "latitude": 51.597431,
      "longitude": 19.557266,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675499102,
      "ems": null
    },
    {
      "latitude": 51.597839,
      "longitude": 19.556704,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1675499105,
      "ems": null
    },
    {
      "latitude": 51.59967,
      "longitude": 19.553734,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1675499111,
      "ems": null
    },
    {
      "latitude": 51.600826,
      "longitude": 19.551697,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1675499116,
      "ems": null
    },
    {
      "latitude": 51.602646,
      "longitude": 19.548687,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1675499123,
      "ems": null
    },
    {
      "latitude": 51.604065,
      "longitude": 19.54631,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1675499129,
      "ems": null
    },
    {
      "latitude": 51.605621,
      "longitude": 19.543762,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499135,
      "ems": null
    },
    {
      "latitude": 51.606972,
      "longitude": 19.541626,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1675499140,
      "ems": null
    },
    {
      "latitude": 51.608555,
      "longitude": 19.538498,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1675499147,
      "ems": null
    },
    {
      "latitude": 51.610016,
      "longitude": 19.53577,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1675499153,
      "ems": null
    },
    {
      "latitude": 51.61158,
      "longitude": 19.532928,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1675499159,
      "ems": null
    },
    {
      "latitude": 51.613163,
      "longitude": 19.530334,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1675499165,
      "ems": null
    },
    {
      "latitude": 51.6147,
      "longitude": 19.527893,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499171,
      "ems": null
    },
    {
      "latitude": 51.614841,
      "longitude": 19.527588,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499171,
      "ems": null
    },
    {
      "latitude": 51.617065,
      "longitude": 19.523596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1675499181,
      "ems": null
    },
    {
      "latitude": 51.617725,
      "longitude": 19.522476,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1675499184,
      "ems": null
    },
    {
      "latitude": 51.619308,
      "longitude": 19.520111,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1675499190,
      "ems": null
    },
    {
      "latitude": 51.620193,
      "longitude": 19.518967,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1675499193,
      "ems": null
    },
    {
      "latitude": 51.621094,
      "longitude": 19.517731,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1675499196,
      "ems": null
    },
    {
      "latitude": 51.622742,
      "longitude": 19.51543,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675499202,
      "ems": null
    },
    {
      "latitude": 51.623547,
      "longitude": 19.514389,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1675499205,
      "ems": null
    },
    {
      "latitude": 51.624435,
      "longitude": 19.513056,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1675499208,
      "ems": null
    },
    {
      "latitude": 51.62513,
      "longitude": 19.5121,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675499211,
      "ems": null
    },
    {
      "latitude": 51.626038,
      "longitude": 19.511051,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499214,
      "ems": null
    },
    {
      "latitude": 51.627045,
      "longitude": 19.510086,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675499217,
      "ems": null
    },
    {
      "latitude": 51.627827,
      "longitude": 19.509277,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499220,
      "ems": null
    },
    {
      "latitude": 51.628807,
      "longitude": 19.508286,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1675499223,
      "ems": null
    },
    {
      "latitude": 51.6297,
      "longitude": 19.507414,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675499226,
      "ems": null
    },
    {
      "latitude": 51.630623,
      "longitude": 19.506531,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1675499229,
      "ems": null
    },
    {
      "latitude": 51.631599,
      "longitude": 19.505615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675499232,
      "ems": null
    },
    {
      "latitude": 51.632538,
      "longitude": 19.504667,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499235,
      "ems": null
    },
    {
      "latitude": 51.6343,
      "longitude": 19.50264,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499241,
      "ems": null
    },
    {
      "latitude": 51.636154,
      "longitude": 19.500658,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499248,
      "ems": null
    },
    {
      "latitude": 51.637836,
      "longitude": 19.498901,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499253,
      "ems": null
    },
    {
      "latitude": 51.638763,
      "longitude": 19.497837,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675499256,
      "ems": null
    },
    {
      "latitude": 51.640629,
      "longitude": 19.49585,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499263,
      "ems": null
    },
    {
      "latitude": 51.642105,
      "longitude": 19.494274,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499268,
      "ems": null
    },
    {
      "latitude": 51.644211,
      "longitude": 19.492046,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499275,
      "ems": null
    },
    {
      "latitude": 51.645939,
      "longitude": 19.490128,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499280,
      "ems": null
    },
    {
      "latitude": 51.647705,
      "longitude": 19.488297,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1675499286,
      "ems": null
    },
    {
      "latitude": 51.649616,
      "longitude": 19.486313,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499293,
      "ems": null
    },
    {
      "latitude": 51.65126,
      "longitude": 19.484625,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499298,
      "ems": null
    },
    {
      "latitude": 51.653107,
      "longitude": 19.482651,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499305,
      "ems": null
    },
    {
      "latitude": 51.654877,
      "longitude": 19.480667,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499311,
      "ems": null
    },
    {
      "latitude": 51.656616,
      "longitude": 19.47876,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499317,
      "ems": null
    },
    {
      "latitude": 51.658226,
      "longitude": 19.476776,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675499322,
      "ems": null
    },
    {
      "latitude": 51.659206,
      "longitude": 19.475632,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1675499326,
      "ems": null
    },
    {
      "latitude": 51.660965,
      "longitude": 19.473713,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499332,
      "ems": null
    },
    {
      "latitude": 51.662464,
      "longitude": 19.47197,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675499338,
      "ems": null
    },
    {
      "latitude": 51.664124,
      "longitude": 19.469927,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499344,
      "ems": null
    },
    {
      "latitude": 51.665726,
      "longitude": 19.467922,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1675499350,
      "ems": null
    },
    {
      "latitude": 51.667351,
      "longitude": 19.466095,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499356,
      "ems": null
    },
    {
      "latitude": 51.668888,
      "longitude": 19.464035,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1675499362,
      "ems": null
    },
    {
      "latitude": 51.670471,
      "longitude": 19.461975,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675499368,
      "ems": null
    },
    {
      "latitude": 51.672226,
      "longitude": 19.460052,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1675499375,
      "ems": null
    },
    {
      "latitude": 51.673775,
      "longitude": 19.458313,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1675499380,
      "ems": null
    },
    {
      "latitude": 51.674847,
      "longitude": 19.457169,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499384,
      "ems": null
    },
    {
      "latitude": 51.675797,
      "longitude": 19.456194,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499387,
      "ems": null
    },
    {
      "latitude": 51.67749,
      "longitude": 19.454487,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1675499392,
      "ems": null
    },
    {
      "latitude": 51.678383,
      "longitude": 19.453583,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675499395,
      "ems": null
    },
    {
      "latitude": 51.679276,
      "longitude": 19.452703,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1675499398,
      "ems": null
    },
    {
      "latitude": 51.680832,
      "longitude": 19.451145,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1675499403,
      "ems": null
    },
    {
      "latitude": 51.682617,
      "longitude": 19.449141,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675499410,
      "ems": null
    },
    {
      "latitude": 51.684761,
      "longitude": 19.446945,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1675499416,
      "ems": null
    },
    {
      "latitude": 51.686279,
      "longitude": 19.446173,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1675499420,
      "ems": null
    },
    {
      "latitude": 51.687462,
      "longitude": 19.445953,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1675499424,
      "ems": null
    },
    {
      "latitude": 51.688625,
      "longitude": 19.445801,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675499427,
      "ems": null
    },
    {
      "latitude": 51.689667,
      "longitude": 19.445801,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675499430,
      "ems": null
    },
    {
      "latitude": 51.690811,
      "longitude": 19.445801,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675499433,
      "ems": null
    },
    {
      "latitude": 51.691418,
      "longitude": 19.445801,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1675499435,
      "ems": null
    },
    {
      "latitude": 51.692688,
      "longitude": 19.44595,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1675499439,
      "ems": null
    },
    {
      "latitude": 51.693604,
      "longitude": 19.446173,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1675499442,
      "ems": null
    },
    {
      "latitude": 51.69426,
      "longitude": 19.446411,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1675499444,
      "ems": null
    },
    {
      "latitude": 51.695282,
      "longitude": 19.446716,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1675499448,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.446989,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1675499451,
      "ems": null
    },
    {
      "latitude": 51.696762,
      "longitude": 19.447285,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1675499454,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.447632,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1675499457,
      "ems": null
    },
    {
      "latitude": 51.698307,
      "longitude": 19.447937,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1675499461,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.448318,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1675499464,
      "ems": null
    },
    {
      "latitude": 51.699703,
      "longitude": 19.448547,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1675499467,
      "ems": null
    },
    {
      "latitude": 51.700974,
      "longitude": 19.448771,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1675499473,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 19.448776,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675499476,
      "ems": null
    },
    {
      "latitude": 51.702347,
      "longitude": 19.448771,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675499479,
      "ems": null
    },
    {
      "latitude": 51.703056,
      "longitude": 19.448776,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1675499482,
      "ems": null
    },
    {
      "latitude": 51.703709,
      "longitude": 19.448776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675499485,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.448624,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1675499488,
      "ems": null
    },
    {
      "latitude": 51.705048,
      "longitude": 19.448547,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675499491,
      "ems": null
    },
    {
      "latitude": 51.70578,
      "longitude": 19.448547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1675499494,
      "ems": null
    },
    {
      "latitude": 51.706547,
      "longitude": 19.448395,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1675499497,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.448166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1675499500,
      "ems": null
    },
    {
      "latitude": 51.707886,
      "longitude": 19.448101,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1675499503,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.447784,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1675499506,
      "ems": null
    },
    {
      "latitude": 51.709396,
      "longitude": 19.447582,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1675499509,
      "ems": null
    },
    {
      "latitude": 51.710133,
      "longitude": 19.447479,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1675499512,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 19.447327,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1675499515,
      "ems": null
    },
    {
      "latitude": 51.712418,
      "longitude": 19.446915,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1675499521,
      "ems": null
    },
    {
      "latitude": 51.713856,
      "longitude": 19.44664,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1675499527,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.446259,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1675499533,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.446173,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1675499536,
      "ems": null
    },
    {
      "latitude": 51.716995,
      "longitude": 19.446098,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1675499539,
      "ems": null
    },
    {
      "latitude": 51.71846,
      "longitude": 19.44595,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1675499545,
      "ems": null
    },
    {
      "latitude": 51.71933,
      "longitude": 19.44595,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1675499548,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.44595,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1675499551,
      "ems": null
    },
    {
      "latitude": 51.721443,
      "longitude": 19.445801,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1675499557,
      "ems": null
    },
    {
      "latitude": 51.7229,
      "longitude": 19.445503,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1675499563,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.445208,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1675499566,
      "ems": null
    },
    {
      "latitude": 51.724365,
      "longitude": 19.444836,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1675499569,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.444351,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1675499572,
      "ems": null
    },
    {
      "latitude": 51.725727,
      "longitude": 19.443817,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1675499575,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.44298,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1675499579,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.442596,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1675499581,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.441347,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1675499584,
      "ems": null
    },
    {
      "latitude": 51.727982,
      "longitude": 19.440233,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1675499587,
      "ems": null
    },
    {
      "latitude": 51.728474,
      "longitude": 19.438934,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1675499590,
      "ems": null
    },
    {
      "latitude": 51.728752,
      "longitude": 19.437866,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1675499593,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.436188,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1675499596,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.434296,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1675499600,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.43281,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "7000",
      "timestamp": 1675499602,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.431177,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "7000",
      "timestamp": 1675499605,
      "ems": null
    },
    {
      "latitude": 51.728531,
      "longitude": 19.42947,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1675499609,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.428101,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1675499611,
      "ems": null
    },
    {
      "latitude": 51.72789,
      "longitude": 19.426649,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1675499614,
      "ems": null
    },
    {
      "latitude": 51.727543,
      "longitude": 19.425278,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1675499617,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.423828,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1675499621,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.422226,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1675499623,
      "ems": null
    },
    {
      "latitude": 51.726791,
      "longitude": 19.421156,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1675499626,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.4193,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1675499629,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.417648,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1675499632,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.416479,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1675499635,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.412918,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1675499642,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.410244,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1675499647,
      "ems": null
    },
    {
      "latitude": 51.723911,
      "longitude": 19.407806,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1675499654,
      "ems": null
    },
    {
      "latitude": 51.723354,
      "longitude": 19.404984,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1675499658,
      "ems": null
    },
    {
      "latitude": 51.723518,
      "longitude": 19.406124,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1675499816,
      "ems": null
    },
    {
      "latitude": 51.722797,
      "longitude": 19.407108,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1675499838,
      "ems": null
    },
    {
      "latitude": 51.721607,
      "longitude": 19.408333,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1675499871,
      "ems": null
    },
    {
      "latitude": 51.721184,
      "longitude": 19.408407,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499877,
      "ems": null
    },
    {
      "latitude": 51.720863,
      "longitude": 19.408463,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499883,
      "ems": null
    },
    {
      "latitude": 51.720554,
      "longitude": 19.408518,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499889,
      "ems": null
    },
    {
      "latitude": 51.720268,
      "longitude": 19.408455,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499901,
      "ems": null
    },
    {
      "latitude": 51.720211,
      "longitude": 19.408146,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499908,
      "ems": null
    },
    {
      "latitude": 51.720036,
      "longitude": 19.407539,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499929,
      "ems": null
    },
    {
      "latitude": 51.719933,
      "longitude": 19.407043,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1675499944,
      "ems": null
    }
  ],
};
