import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20240111LPCOLPSO",
    callsign: "RVP110",
    name: "NAV 1",
    description: "",
  },
  pilotLog: {
    departure: new Date(2024, 0, 11, 16, 20).getTime(),
    arrival: new Date(2024, 0, 11, 17, 15).getTime(),
    singleEnginePistonTime: 55,
    multiEnginePistonTime: 0,
    picTime: 55,
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
      registration: "CS-DHS",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656,
      },
    },
    origin: {
      name: "Coimbra",
      code: "LPCO",
      position: {
        latitude: 40.1572,
        longitude: -8.47,
      },
    },
  },
  track: [
    {
      "latitude": 40.16217,
      "longitude": -8.472839,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 335,
      "squawk": "3213",
      "timestamp": 1704989931,
      "ems": null
    },
    {
      "latitude": 40.163864,
      "longitude": -8.473938,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 333,
      "squawk": "3213",
      "timestamp": 1704989937,
      "ems": null
    },
    {
      "latitude": 40.166668,
      "longitude": -8.47589,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 330,
      "squawk": "3213",
      "timestamp": 1704989946,
      "ems": null
    },
    {
      "latitude": 40.167572,
      "longitude": -8.476685,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 324,
      "squawk": "3213",
      "timestamp": 1704989949,
      "ems": null
    },
    {
      "latitude": 40.168304,
      "longitude": -8.477661,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 306,
      "squawk": "3213",
      "timestamp": 1704989952,
      "ems": null
    },
    {
      "latitude": 40.168762,
      "longitude": -8.478824,
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
      "heading": 294,
      "squawk": "3213",
      "timestamp": 1704989955,
      "ems": null
    },
    {
      "latitude": 40.169041,
      "longitude": -8.480259,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 279,
      "squawk": "3213",
      "timestamp": 1704989958,
      "ems": null
    },
    {
      "latitude": 40.169041,
      "longitude": -8.481945,
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
      "heading": 266,
      "squawk": "3213",
      "timestamp": 1704989962,
      "ems": null
    },
    {
      "latitude": 40.168854,
      "longitude": -8.483459,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 259,
      "squawk": "3213",
      "timestamp": 1704989964,
      "ems": null
    },
    {
      "latitude": 40.168396,
      "longitude": -8.484985,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 242,
      "squawk": "3213",
      "timestamp": 1704989968,
      "ems": null
    },
    {
      "latitude": 40.16774,
      "longitude": -8.486252,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 233,
      "squawk": "3213",
      "timestamp": 1704989970,
      "ems": null
    },
    {
      "latitude": 40.166656,
      "longitude": -8.487549,
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
      "heading": 220,
      "squawk": "3213",
      "timestamp": 1704989973,
      "ems": null
    },
    {
      "latitude": 40.165642,
      "longitude": -8.488312,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "3213",
      "timestamp": 1704989976,
      "ems": null
    },
    {
      "latitude": 40.1642,
      "longitude": -8.488873,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "3213",
      "timestamp": 1704989979,
      "ems": null
    },
    {
      "latitude": 40.162849,
      "longitude": -8.488936,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704989982,
      "ems": null
    },
    {
      "latitude": 40.161686,
      "longitude": -8.488749,
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
      "heading": 170,
      "squawk": "3213",
      "timestamp": 1704989985,
      "ems": null
    },
    {
      "latitude": 40.16029,
      "longitude": -8.488125,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704989988,
      "ems": null
    },
    {
      "latitude": 40.159332,
      "longitude": -8.487427,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704989991,
      "ems": null
    },
    {
      "latitude": 40.158051,
      "longitude": -8.486389,
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
      "heading": 147,
      "squawk": "3213",
      "timestamp": 1704989994,
      "ems": null
    },
    {
      "latitude": 40.156998,
      "longitude": -8.485596,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704989998,
      "ems": null
    },
    {
      "latitude": 40.155762,
      "longitude": -8.484802,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704990000,
      "ems": null
    },
    {
      "latitude": 40.154472,
      "longitude": -8.484005,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990004,
      "ems": null
    },
    {
      "latitude": 40.153446,
      "longitude": -8.48338,
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
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704990006,
      "ems": null
    },
    {
      "latitude": 40.152283,
      "longitude": -8.482632,
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
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704990009,
      "ems": null
    },
    {
      "latitude": 40.151073,
      "longitude": -8.481757,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704990013,
      "ems": null
    },
    {
      "latitude": 40.149994,
      "longitude": -8.481018,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704990015,
      "ems": null
    },
    {
      "latitude": 40.146744,
      "longitude": -8.478949,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990025,
      "ems": null
    },
    {
      "latitude": 40.145626,
      "longitude": -8.478262,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990028,
      "ems": null
    },
    {
      "latitude": 40.142715,
      "longitude": -8.476501,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990037,
      "ems": null
    },
    {
      "latitude": 40.13974,
      "longitude": -8.47467,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990046,
      "ems": null
    },
    {
      "latitude": 40.136581,
      "longitude": -8.4729,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990055,
      "ems": null
    },
    {
      "latitude": 40.133522,
      "longitude": -8.471208,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 157,
      "squawk": "3213",
      "timestamp": 1704990064,
      "ems": null
    },
    {
      "latitude": 40.13245,
      "longitude": -8.470709,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 158,
      "squawk": "3213",
      "timestamp": 1704990067,
      "ems": null
    },
    {
      "latitude": 40.131454,
      "longitude": -8.470154,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 158,
      "squawk": "3213",
      "timestamp": 1704990070,
      "ems": null
    },
    {
      "latitude": 40.128353,
      "longitude": -8.468399,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990079,
      "ems": null
    },
    {
      "latitude": 40.125328,
      "longitude": -8.466589,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 154,
      "squawk": "3213",
      "timestamp": 1704990088,
      "ems": null
    },
    {
      "latitude": 40.122574,
      "longitude": -8.464905,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 154,
      "squawk": "3213",
      "timestamp": 1704990097,
      "ems": null
    },
    {
      "latitude": 40.119507,
      "longitude": -8.462952,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704990106,
      "ems": null
    },
    {
      "latitude": 40.116577,
      "longitude": -8.461096,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990115,
      "ems": null
    },
    {
      "latitude": 40.113739,
      "longitude": -8.459411,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990124,
      "ems": null
    },
    {
      "latitude": 40.110672,
      "longitude": -8.457397,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704990133,
      "ems": null
    },
    {
      "latitude": 40.108795,
      "longitude": -8.455994,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 149,
      "squawk": "3213",
      "timestamp": 1704990139,
      "ems": null
    },
    {
      "latitude": 40.107834,
      "longitude": -8.455261,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 149,
      "squawk": "3213",
      "timestamp": 1704990142,
      "ems": null
    },
    {
      "latitude": 40.106941,
      "longitude": -8.454541,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 148,
      "squawk": "3213",
      "timestamp": 1704990145,
      "ems": null
    },
    {
      "latitude": 40.105915,
      "longitude": -8.45373,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704990148,
      "ems": null
    },
    {
      "latitude": 40.104984,
      "longitude": -8.452918,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704990151,
      "ems": null
    },
    {
      "latitude": 40.104126,
      "longitude": -8.452087,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 145,
      "squawk": "3213",
      "timestamp": 1704990154,
      "ems": null
    },
    {
      "latitude": 40.10321,
      "longitude": -8.451294,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 144,
      "squawk": "3213",
      "timestamp": 1704990157,
      "ems": null
    },
    {
      "latitude": 40.102333,
      "longitude": -8.450484,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 143,
      "squawk": "3213",
      "timestamp": 1704990160,
      "ems": null
    },
    {
      "latitude": 40.101402,
      "longitude": -8.449548,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 142,
      "squawk": "3213",
      "timestamp": 1704990164,
      "ems": null
    },
    {
      "latitude": 40.100655,
      "longitude": -8.448736,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 142,
      "squawk": "3213",
      "timestamp": 1704990166,
      "ems": null
    },
    {
      "latitude": 40.099686,
      "longitude": -8.447754,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 142,
      "squawk": "3213",
      "timestamp": 1704990169,
      "ems": null
    },
    {
      "latitude": 40.098816,
      "longitude": -8.44696,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 141,
      "squawk": "3213",
      "timestamp": 1704990172,
      "ems": null
    },
    {
      "latitude": 40.097816,
      "longitude": -8.445865,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990175,
      "ems": null
    },
    {
      "latitude": 40.097027,
      "longitude": -8.445053,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990178,
      "ems": null
    },
    {
      "latitude": 40.096001,
      "longitude": -8.44393,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990181,
      "ems": null
    },
    {
      "latitude": 40.094978,
      "longitude": -8.442806,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990185,
      "ems": null
    },
    {
      "latitude": 40.092091,
      "longitude": -8.439747,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990194,
      "ems": null
    },
    {
      "latitude": 40.089249,
      "longitude": -8.436768,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704990203,
      "ems": null
    },
    {
      "latitude": 40.086224,
      "longitude": -8.433692,
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
      "heading": 141,
      "squawk": "3213",
      "timestamp": 1704990212,
      "ems": null
    },
    {
      "latitude": 40.083252,
      "longitude": -8.430725,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "3213",
      "timestamp": 1704990220,
      "ems": null
    },
    {
      "latitude": 40.080048,
      "longitude": -8.427795,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "3213",
      "timestamp": 1704990230,
      "ems": null
    },
    {
      "latitude": 40.078949,
      "longitude": -8.42688,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704990233,
      "ems": null
    },
    {
      "latitude": 40.077942,
      "longitude": -8.426025,
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
      "heading": 148,
      "squawk": "3213",
      "timestamp": 1704990236,
      "ems": null
    },
    {
      "latitude": 40.07687,
      "longitude": -8.425202,
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
      "heading": 149,
      "squawk": "3213",
      "timestamp": 1704990239,
      "ems": null
    },
    {
      "latitude": 40.075607,
      "longitude": -8.424255,
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
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704990242,
      "ems": null
    },
    {
      "latitude": 40.074726,
      "longitude": -8.42358,
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
      "heading": 149,
      "squawk": "3213",
      "timestamp": 1704990245,
      "ems": null
    },
    {
      "latitude": 40.073502,
      "longitude": -8.422668,
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
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704990247,
      "ems": null
    },
    {
      "latitude": 40.072266,
      "longitude": -8.421814,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704990251,
      "ems": null
    },
    {
      "latitude": 40.071121,
      "longitude": -8.420959,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704990254,
      "ems": null
    },
    {
      "latitude": 40.069931,
      "longitude": -8.420105,
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
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704990257,
      "ems": null
    },
    {
      "latitude": 40.06863,
      "longitude": -8.419147,
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
      "heading": 151,
      "squawk": "3213",
      "timestamp": 1704990260,
      "ems": null
    },
    {
      "latitude": 40.067596,
      "longitude": -8.418457,
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
      "heading": 153,
      "squawk": "3213",
      "timestamp": 1704990263,
      "ems": null
    },
    {
      "latitude": 40.066208,
      "longitude": -8.417712,
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990266,
      "ems": null
    },
    {
      "latitude": 40.064999,
      "longitude": -8.416963,
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990269,
      "ems": null
    },
    {
      "latitude": 40.063786,
      "longitude": -8.416276,
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
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990272,
      "ems": null
    },
    {
      "latitude": 40.062698,
      "longitude": -8.415649,
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
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704990275,
      "ems": null
    },
    {
      "latitude": 40.059082,
      "longitude": -8.413513,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990284,
      "ems": null
    },
    {
      "latitude": 40.057663,
      "longitude": -8.41272,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990287,
      "ems": null
    },
    {
      "latitude": 40.056477,
      "longitude": -8.412032,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704990290,
      "ems": null
    },
    {
      "latitude": 40.054001,
      "longitude": -8.410706,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "3213",
      "timestamp": 1704990296,
      "ems": null
    },
    {
      "latitude": 40.052673,
      "longitude": -8.410339,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 172,
      "squawk": "3213",
      "timestamp": 1704990299,
      "ems": null
    },
    {
      "latitude": 40.051311,
      "longitude": -8.410284,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704990302,
      "ems": null
    },
    {
      "latitude": 40.049789,
      "longitude": -8.4104,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990305,
      "ems": null
    },
    {
      "latitude": 40.048424,
      "longitude": -8.410783,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990308,
      "ems": null
    },
    {
      "latitude": 40.047073,
      "longitude": -8.411221,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990311,
      "ems": null
    },
    {
      "latitude": 40.04591,
      "longitude": -8.411594,
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
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990314,
      "ems": null
    },
    {
      "latitude": 40.044342,
      "longitude": -8.41217,
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
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990317,
      "ems": null
    },
    {
      "latitude": 40.043209,
      "longitude": -8.412594,
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990320,
      "ems": null
    },
    {
      "latitude": 40.04163,
      "longitude": -8.413218,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990323,
      "ems": null
    },
    {
      "latitude": 40.040405,
      "longitude": -8.413635,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990326,
      "ems": null
    },
    {
      "latitude": 40.039169,
      "longitude": -8.414124,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990329,
      "ems": null
    },
    {
      "latitude": 40.03809,
      "longitude": -8.414591,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 197,
      "squawk": "3213",
      "timestamp": 1704990332,
      "ems": null
    },
    {
      "latitude": 40.036789,
      "longitude": -8.415039,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990335,
      "ems": null
    },
    {
      "latitude": 40.032784,
      "longitude": -8.416401,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "3213",
      "timestamp": 1704990344,
      "ems": null
    },
    {
      "latitude": 40.029007,
      "longitude": -8.417664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990353,
      "ems": null
    },
    {
      "latitude": 40.024731,
      "longitude": -8.419147,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990363,
      "ems": null
    },
    {
      "latitude": 40.022217,
      "longitude": -8.420147,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 198,
      "squawk": "3213",
      "timestamp": 1704990368,
      "ems": null
    },
    {
      "latitude": 40.018211,
      "longitude": -8.421395,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 192,
      "squawk": "3213",
      "timestamp": 1704990378,
      "ems": null
    },
    {
      "latitude": 40.01445,
      "longitude": -8.422668,
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990386,
      "ems": null
    },
    {
      "latitude": 40.010345,
      "longitude": -8.424204,
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
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990396,
      "ems": null
    },
    {
      "latitude": 40.006577,
      "longitude": -8.425537,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990404,
      "ems": null
    },
    {
      "latitude": 40.002594,
      "longitude": -8.426758,
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
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704990414,
      "ems": null
    },
    {
      "latitude": 39.998661,
      "longitude": -8.428262,
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
      "heading": 197,
      "squawk": "3213",
      "timestamp": 1704990423,
      "ems": null
    },
    {
      "latitude": 39.99461,
      "longitude": -8.429822,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990432,
      "ems": null
    },
    {
      "latitude": 39.990978,
      "longitude": -8.431258,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990440,
      "ems": null
    },
    {
      "latitude": 39.988174,
      "longitude": -8.431946,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990447,
      "ems": null
    },
    {
      "latitude": 39.986984,
      "longitude": -8.43219,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990450,
      "ems": null
    },
    {
      "latitude": 39.985439,
      "longitude": -8.432507,
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990453,
      "ems": null
    },
    {
      "latitude": 39.984089,
      "longitude": -8.432693,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990456,
      "ems": null
    },
    {
      "latitude": 39.982647,
      "longitude": -8.43288,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990459,
      "ems": null
    },
    {
      "latitude": 39.981388,
      "longitude": -8.432943,
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990462,
      "ems": null
    },
    {
      "latitude": 39.979889,
      "longitude": -8.433167,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990465,
      "ems": null
    },
    {
      "latitude": 39.978783,
      "longitude": -8.433318,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990468,
      "ems": null
    },
    {
      "latitude": 39.97464,
      "longitude": -8.434254,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990477,
      "ems": null
    },
    {
      "latitude": 39.970634,
      "longitude": -8.435253,
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
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990486,
      "ems": null
    },
    {
      "latitude": 39.969238,
      "longitude": -8.435627,
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
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704990489,
      "ems": null
    },
    {
      "latitude": 39.967983,
      "longitude": -8.435877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704990492,
      "ems": null
    },
    {
      "latitude": 39.966568,
      "longitude": -8.436279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990495,
      "ems": null
    },
    {
      "latitude": 39.965195,
      "longitude": -8.436646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "3213",
      "timestamp": 1704990498,
      "ems": null
    },
    {
      "latitude": 39.963684,
      "longitude": -8.437134,
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
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704990501,
      "ems": null
    },
    {
      "latitude": 39.962349,
      "longitude": -8.437562,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990504,
      "ems": null
    },
    {
      "latitude": 39.958466,
      "longitude": -8.438965,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990513,
      "ems": null
    },
    {
      "latitude": 39.956955,
      "longitude": -8.439575,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990516,
      "ems": null
    },
    {
      "latitude": 39.955738,
      "longitude": -8.439997,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704990519,
      "ems": null
    },
    {
      "latitude": 39.954208,
      "longitude": -8.440552,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "3213",
      "timestamp": 1704990522,
      "ems": null
    },
    {
      "latitude": 39.950153,
      "longitude": -8.441995,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990531,
      "ems": null
    },
    {
      "latitude": 39.947311,
      "longitude": -8.442931,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990537,
      "ems": null
    },
    {
      "latitude": 39.943314,
      "longitude": -8.444214,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704990546,
      "ems": null
    },
    {
      "latitude": 39.939072,
      "longitude": -8.445428,
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
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990555,
      "ems": null
    },
    {
      "latitude": 39.934978,
      "longitude": -8.446488,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990564,
      "ems": null
    },
    {
      "latitude": 39.930786,
      "longitude": -8.447738,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704990574,
      "ems": null
    },
    {
      "latitude": 39.928272,
      "longitude": -8.448299,
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990580,
      "ems": null
    },
    {
      "latitude": 39.926697,
      "longitude": -8.448547,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990583,
      "ems": null
    },
    {
      "latitude": 39.925323,
      "longitude": -8.44873,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990586,
      "ems": null
    },
    {
      "latitude": 39.923996,
      "longitude": -8.448914,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990589,
      "ems": null
    },
    {
      "latitude": 39.922642,
      "longitude": -8.449111,
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990592,
      "ems": null
    },
    {
      "latitude": 39.921478,
      "longitude": -8.449219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990594,
      "ems": null
    },
    {
      "latitude": 39.919987,
      "longitude": -8.449402,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990597,
      "ems": null
    },
    {
      "latitude": 39.918545,
      "longitude": -8.449524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990601,
      "ems": null
    },
    {
      "latitude": 39.914337,
      "longitude": -8.450098,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990610,
      "ems": null
    },
    {
      "latitude": 39.910351,
      "longitude": -8.450623,
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990619,
      "ems": null
    },
    {
      "latitude": 39.906372,
      "longitude": -8.451054,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990627,
      "ems": null
    },
    {
      "latitude": 39.90239,
      "longitude": -8.451591,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990636,
      "ems": null
    },
    {
      "latitude": 39.898201,
      "longitude": -8.452271,
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990646,
      "ems": null
    },
    {
      "latitude": 39.894104,
      "longitude": -8.453084,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990655,
      "ems": null
    },
    {
      "latitude": 39.889938,
      "longitude": -8.453979,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990664,
      "ems": null
    },
    {
      "latitude": 39.885864,
      "longitude": -8.454956,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704990673,
      "ems": null
    },
    {
      "latitude": 39.881676,
      "longitude": -8.455872,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990682,
      "ems": null
    },
    {
      "latitude": 39.877716,
      "longitude": -8.456726,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704990691,
      "ems": null
    },
    {
      "latitude": 39.873436,
      "longitude": -8.457642,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990700,
      "ems": null
    },
    {
      "latitude": 39.869431,
      "longitude": -8.458313,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990709,
      "ems": null
    },
    {
      "latitude": 39.865311,
      "longitude": -8.458995,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990718,
      "ems": null
    },
    {
      "latitude": 39.861099,
      "longitude": -8.459778,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990728,
      "ems": null
    },
    {
      "latitude": 39.856796,
      "longitude": -8.460547,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990736,
      "ems": null
    },
    {
      "latitude": 39.852394,
      "longitude": -8.461304,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990746,
      "ems": null
    },
    {
      "latitude": 39.848064,
      "longitude": -8.461853,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990754,
      "ems": null
    },
    {
      "latitude": 39.84343,
      "longitude": -8.462399,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704990763,
      "ems": null
    },
    {
      "latitude": 39.839031,
      "longitude": -8.463196,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990772,
      "ems": null
    },
    {
      "latitude": 39.834366,
      "longitude": -8.464129,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990781,
      "ems": null
    },
    {
      "latitude": 39.829514,
      "longitude": -8.465145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990791,
      "ems": null
    },
    {
      "latitude": 39.82663,
      "longitude": -8.465861,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704990796,
      "ems": null
    },
    {
      "latitude": 39.822227,
      "longitude": -8.467041,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704990806,
      "ems": null
    },
    {
      "latitude": 39.820862,
      "longitude": -8.467474,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990809,
      "ems": null
    },
    {
      "latitude": 39.819714,
      "longitude": -8.467896,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990811,
      "ems": null
    },
    {
      "latitude": 39.818344,
      "longitude": -8.468309,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990814,
      "ems": null
    },
    {
      "latitude": 39.816696,
      "longitude": -8.468906,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 194,
      "squawk": "3213",
      "timestamp": 1704990818,
      "ems": null
    },
    {
      "latitude": 39.812393,
      "longitude": -8.469683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990827,
      "ems": null
    },
    {
      "latitude": 39.810883,
      "longitude": -8.469743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704990830,
      "ems": null
    },
    {
      "latitude": 39.809471,
      "longitude": -8.469727,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704990833,
      "ems": null
    },
    {
      "latitude": 39.808228,
      "longitude": -8.469743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990836,
      "ems": null
    },
    {
      "latitude": 39.806538,
      "longitude": -8.469788,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990839,
      "ems": null
    },
    {
      "latitude": 39.805237,
      "longitude": -8.469849,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990842,
      "ems": null
    },
    {
      "latitude": 39.803741,
      "longitude": -8.469862,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990845,
      "ems": null
    },
    {
      "latitude": 39.802322,
      "longitude": -8.469922,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990848,
      "ems": null
    },
    {
      "latitude": 39.800903,
      "longitude": -8.469981,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990851,
      "ems": null
    },
    {
      "latitude": 39.799603,
      "longitude": -8.470032,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990854,
      "ems": null
    },
    {
      "latitude": 39.795135,
      "longitude": -8.470215,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704990863,
      "ems": null
    },
    {
      "latitude": 39.790806,
      "longitude": -8.470337,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990872,
      "ems": null
    },
    {
      "latitude": 39.786575,
      "longitude": -8.470578,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990881,
      "ems": null
    },
    {
      "latitude": 39.782192,
      "longitude": -8.470825,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990890,
      "ems": null
    },
    {
      "latitude": 39.778049,
      "longitude": -8.471069,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990898,
      "ems": null
    },
    {
      "latitude": 39.773579,
      "longitude": -8.471375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704990908,
      "ems": null
    },
    {
      "latitude": 39.769318,
      "longitude": -8.471713,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704990917,
      "ems": null
    },
    {
      "latitude": 39.766479,
      "longitude": -8.472071,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704990923,
      "ems": null
    },
    {
      "latitude": 39.764969,
      "longitude": -8.472351,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990926,
      "ems": null
    },
    {
      "latitude": 39.76376,
      "longitude": -8.472595,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990929,
      "ems": null
    },
    {
      "latitude": 39.762268,
      "longitude": -8.4729,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990932,
      "ems": null
    },
    {
      "latitude": 39.760803,
      "longitude": -8.473145,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990935,
      "ems": null
    },
    {
      "latitude": 39.759384,
      "longitude": -8.473504,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704990938,
      "ems": null
    },
    {
      "latitude": 39.757893,
      "longitude": -8.473816,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 189,
      "squawk": "3213",
      "timestamp": 1704990941,
      "ems": null
    },
    {
      "latitude": 39.7565,
      "longitude": -8.474101,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990944,
      "ems": null
    },
    {
      "latitude": 39.753563,
      "longitude": -8.474609,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704990950,
      "ems": null
    },
    {
      "latitude": 39.749084,
      "longitude": -8.475355,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "3213",
      "timestamp": 1704990959,
      "ems": null
    },
    {
      "latitude": 39.747604,
      "longitude": -8.475525,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990963,
      "ems": null
    },
    {
      "latitude": 39.746246,
      "longitude": -8.475654,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990965,
      "ems": null
    },
    {
      "latitude": 39.74469,
      "longitude": -8.475773,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704990969,
      "ems": null
    },
    {
      "latitude": 39.743454,
      "longitude": -8.475892,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704990971,
      "ems": null
    },
    {
      "latitude": 39.742065,
      "longitude": -8.475952,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704990975,
      "ems": null
    },
    {
      "latitude": 39.737595,
      "longitude": -8.47637,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704990983,
      "ems": null
    },
    {
      "latitude": 39.7332,
      "longitude": -8.477027,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704990993,
      "ems": null
    },
    {
      "latitude": 39.729076,
      "longitude": -8.477539,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704991001,
      "ems": null
    },
    {
      "latitude": 39.724777,
      "longitude": -8.478102,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704991011,
      "ems": null
    },
    {
      "latitude": 39.720612,
      "longitude": -8.478699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704991020,
      "ems": null
    },
    {
      "latitude": 39.716492,
      "longitude": -8.479177,
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991029,
      "ems": null
    },
    {
      "latitude": 39.712086,
      "longitude": -8.47937,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991038,
      "ems": null
    },
    {
      "latitude": 39.710724,
      "longitude": -8.479415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991041,
      "ems": null
    },
    {
      "latitude": 39.709534,
      "longitude": -8.479415,
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
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991044,
      "ems": null
    },
    {
      "latitude": 39.707893,
      "longitude": -8.479492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991047,
      "ems": null
    },
    {
      "latitude": 39.706497,
      "longitude": -8.479492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991050,
      "ems": null
    },
    {
      "latitude": 39.705231,
      "longitude": -8.479535,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991053,
      "ems": null
    },
    {
      "latitude": 39.701202,
      "longitude": -8.479774,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991061,
      "ems": null
    },
    {
      "latitude": 39.696583,
      "longitude": -8.47998,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991071,
      "ems": null
    },
    {
      "latitude": 39.692253,
      "longitude": -8.480286,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991080,
      "ems": null
    },
    {
      "latitude": 39.687923,
      "longitude": -8.48053,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991089,
      "ems": null
    },
    {
      "latitude": 39.683872,
      "longitude": -8.480591,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991098,
      "ems": null
    },
    {
      "latitude": 39.679916,
      "longitude": -8.480848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704991107,
      "ems": null
    },
    {
      "latitude": 39.675522,
      "longitude": -8.481266,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704991116,
      "ems": null
    },
    {
      "latitude": 39.67112,
      "longitude": -8.481506,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704991125,
      "ems": null
    },
    {
      "latitude": 39.668472,
      "longitude": -8.481625,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991131,
      "ems": null
    },
    {
      "latitude": 39.664169,
      "longitude": -8.481625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991140,
      "ems": null
    },
    {
      "latitude": 39.659855,
      "longitude": -8.481506,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991150,
      "ems": null
    },
    {
      "latitude": 39.6572,
      "longitude": -8.481384,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991156,
      "ems": null
    },
    {
      "latitude": 39.655708,
      "longitude": -8.481323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991159,
      "ems": null
    },
    {
      "latitude": 39.654373,
      "longitude": -8.481207,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 176,
      "squawk": "3213",
      "timestamp": 1704991161,
      "ems": null
    },
    {
      "latitude": 39.653057,
      "longitude": -8.481079,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991164,
      "ems": null
    },
    {
      "latitude": 39.651672,
      "longitude": -8.480908,
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
      "heading": 174,
      "squawk": "3213",
      "timestamp": 1704991167,
      "ems": null
    },
    {
      "latitude": 39.650215,
      "longitude": -8.480713,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "3213",
      "timestamp": 1704991170,
      "ems": null
    },
    {
      "latitude": 39.647415,
      "longitude": -8.480371,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 173,
      "squawk": "3213",
      "timestamp": 1704991176,
      "ems": null
    },
    {
      "latitude": 39.645935,
      "longitude": -8.480164,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 173,
      "squawk": "3213",
      "timestamp": 1704991179,
      "ems": null
    },
    {
      "latitude": 39.644909,
      "longitude": -8.47998,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 173,
      "squawk": "3213",
      "timestamp": 1704991182,
      "ems": null
    },
    {
      "latitude": 39.641602,
      "longitude": -8.479475,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 172,
      "squawk": "3213",
      "timestamp": 1704991189,
      "ems": null
    },
    {
      "latitude": 39.640114,
      "longitude": -8.479187,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704991192,
      "ems": null
    },
    {
      "latitude": 39.635651,
      "longitude": -8.4784,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 172,
      "squawk": "3213",
      "timestamp": 1704991200,
      "ems": null
    },
    {
      "latitude": 39.630981,
      "longitude": -8.477564,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704991210,
      "ems": null
    },
    {
      "latitude": 39.626129,
      "longitude": -8.476549,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 169,
      "squawk": "3213",
      "timestamp": 1704991219,
      "ems": null
    },
    {
      "latitude": 39.624615,
      "longitude": -8.476074,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991222,
      "ems": null
    },
    {
      "latitude": 39.623108,
      "longitude": -8.475534,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991225,
      "ems": null
    },
    {
      "latitude": 39.621635,
      "longitude": -8.475037,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991228,
      "ems": null
    },
    {
      "latitude": 39.620087,
      "longitude": -8.474519,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "3213",
      "timestamp": 1704991231,
      "ems": null
    },
    {
      "latitude": 39.618622,
      "longitude": -8.473982,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991234,
      "ems": null
    },
    {
      "latitude": 39.617065,
      "longitude": -8.473504,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991237,
      "ems": null
    },
    {
      "latitude": 39.616093,
      "longitude": -8.473145,
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
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991239,
      "ems": null
    },
    {
      "latitude": 39.614594,
      "longitude": -8.472669,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 165,
      "squawk": "3213",
      "timestamp": 1704991242,
      "ems": null
    },
    {
      "latitude": 39.609879,
      "longitude": -8.471295,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "3213",
      "timestamp": 1704991252,
      "ems": null
    },
    {
      "latitude": 39.606995,
      "longitude": -8.470578,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704991258,
      "ems": null
    },
    {
      "latitude": 39.60548,
      "longitude": -8.470398,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991261,
      "ems": null
    },
    {
      "latitude": 39.603989,
      "longitude": -8.470337,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991264,
      "ems": null
    },
    {
      "latitude": 39.602642,
      "longitude": -8.470337,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991267,
      "ems": null
    },
    {
      "latitude": 39.601059,
      "longitude": -8.470398,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991270,
      "ems": null
    },
    {
      "latitude": 39.599567,
      "longitude": -8.470459,
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991273,
      "ems": null
    },
    {
      "latitude": 39.598125,
      "longitude": -8.47052,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991276,
      "ems": null
    },
    {
      "latitude": 39.596916,
      "longitude": -8.470581,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991279,
      "ems": null
    },
    {
      "latitude": 39.595367,
      "longitude": -8.470697,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991282,
      "ems": null
    },
    {
      "latitude": 39.593796,
      "longitude": -8.470764,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991285,
      "ems": null
    },
    {
      "latitude": 39.592632,
      "longitude": -8.470825,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991288,
      "ems": null
    },
    {
      "latitude": 39.590973,
      "longitude": -8.470937,
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991291,
      "ems": null
    },
    {
      "latitude": 39.586906,
      "longitude": -8.471191,
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704991300,
      "ems": null
    },
    {
      "latitude": 39.582733,
      "longitude": -8.471474,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991309,
      "ems": null
    },
    {
      "latitude": 39.578568,
      "longitude": -8.471594,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991318,
      "ems": null
    },
    {
      "latitude": 39.574539,
      "longitude": -8.471594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991327,
      "ems": null
    },
    {
      "latitude": 39.571682,
      "longitude": -8.47168,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991333,
      "ems": null
    },
    {
      "latitude": 39.567402,
      "longitude": -8.471802,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991342,
      "ems": null
    },
    {
      "latitude": 39.563023,
      "longitude": -8.47168,
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
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991351,
      "ems": null
    },
    {
      "latitude": 39.558655,
      "longitude": -8.471594,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991360,
      "ems": null
    },
    {
      "latitude": 39.55426,
      "longitude": -8.471474,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991369,
      "ems": null
    },
    {
      "latitude": 39.549896,
      "longitude": -8.471497,
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991378,
      "ems": null
    },
    {
      "latitude": 39.545334,
      "longitude": -8.47168,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991387,
      "ems": null
    },
    {
      "latitude": 39.54071,
      "longitude": -8.471772,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991397,
      "ems": null
    },
    {
      "latitude": 39.536072,
      "longitude": -8.471802,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991406,
      "ems": null
    },
    {
      "latitude": 39.531921,
      "longitude": -8.471772,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991414,
      "ems": null
    },
    {
      "latitude": 39.527664,
      "longitude": -8.471653,
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991424,
      "ems": null
    },
    {
      "latitude": 39.523781,
      "longitude": -8.47168,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991432,
      "ems": null
    },
    {
      "latitude": 39.519497,
      "longitude": -8.471619,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991442,
      "ems": null
    },
    {
      "latitude": 39.515076,
      "longitude": -8.471713,
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
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991451,
      "ems": null
    },
    {
      "latitude": 39.512375,
      "longitude": -8.471985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704991457,
      "ems": null
    },
    {
      "latitude": 39.509491,
      "longitude": -8.47229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704991463,
      "ems": null
    },
    {
      "latitude": 39.508091,
      "longitude": -8.472473,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704991466,
      "ems": null
    },
    {
      "latitude": 39.506649,
      "longitude": -8.472656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704991469,
      "ems": null
    },
    {
      "latitude": 39.50528,
      "longitude": -8.472907,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991472,
      "ems": null
    },
    {
      "latitude": 39.504135,
      "longitude": -8.473206,
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
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704991474,
      "ems": null
    },
    {
      "latitude": 39.502579,
      "longitude": -8.473683,
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
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704991478,
      "ems": null
    },
    {
      "latitude": 39.50116,
      "longitude": -8.474161,
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704991481,
      "ems": null
    },
    {
      "latitude": 39.499851,
      "longitude": -8.474731,
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
      "heading": 196,
      "squawk": "3213",
      "timestamp": 1704991484,
      "ems": null
    },
    {
      "latitude": 39.498184,
      "longitude": -8.475295,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "3213",
      "timestamp": 1704991487,
      "ems": null
    },
    {
      "latitude": 39.495338,
      "longitude": -8.475647,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991493,
      "ems": null
    },
    {
      "latitude": 39.493847,
      "longitude": -8.475525,
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
      "heading": 176,
      "squawk": "3213",
      "timestamp": 1704991496,
      "ems": null
    },
    {
      "latitude": 39.492683,
      "longitude": -8.475403,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "3213",
      "timestamp": 1704991499,
      "ems": null
    },
    {
      "latitude": 39.490963,
      "longitude": -8.475281,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991502,
      "ems": null
    },
    {
      "latitude": 39.489487,
      "longitude": -8.475295,
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991505,
      "ems": null
    },
    {
      "latitude": 39.488022,
      "longitude": -8.475236,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991508,
      "ems": null
    },
    {
      "latitude": 39.486771,
      "longitude": -8.47522,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991511,
      "ems": null
    },
    {
      "latitude": 39.485046,
      "longitude": -8.475116,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 176,
      "squawk": "3213",
      "timestamp": 1704991514,
      "ems": null
    },
    {
      "latitude": 39.483582,
      "longitude": -8.474937,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991517,
      "ems": null
    },
    {
      "latitude": 39.482071,
      "longitude": -8.474792,
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
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991520,
      "ems": null
    },
    {
      "latitude": 39.480766,
      "longitude": -8.47467,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991523,
      "ems": null
    },
    {
      "latitude": 39.477676,
      "longitude": -8.4744,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3213",
      "timestamp": 1704991529,
      "ems": null
    },
    {
      "latitude": 39.473328,
      "longitude": -8.473982,
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
      "heading": 175,
      "squawk": "3213",
      "timestamp": 1704991538,
      "ems": null
    },
    {
      "latitude": 39.468979,
      "longitude": -8.473803,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991547,
      "ems": null
    },
    {
      "latitude": 39.464615,
      "longitude": -8.473755,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991556,
      "ems": null
    },
    {
      "latitude": 39.460098,
      "longitude": -8.473683,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991565,
      "ems": null
    },
    {
      "latitude": 39.457165,
      "longitude": -8.473816,
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
      "heading": 182,
      "squawk": "3213",
      "timestamp": 1704991572,
      "ems": null
    },
    {
      "latitude": 39.455795,
      "longitude": -8.473982,
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
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704991574,
      "ems": null
    },
    {
      "latitude": 39.454514,
      "longitude": -8.47428,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704991577,
      "ems": null
    },
    {
      "latitude": 39.452976,
      "longitude": -8.47467,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "3213",
      "timestamp": 1704991581,
      "ems": null
    },
    {
      "latitude": 39.451904,
      "longitude": -8.474976,
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
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704991583,
      "ems": null
    },
    {
      "latitude": 39.450256,
      "longitude": -8.475295,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991586,
      "ems": null
    },
    {
      "latitude": 39.448879,
      "longitude": -8.475586,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "3213",
      "timestamp": 1704991590,
      "ems": null
    },
    {
      "latitude": 39.447483,
      "longitude": -8.47583,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991592,
      "ems": null
    },
    {
      "latitude": 39.445908,
      "longitude": -8.476131,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991596,
      "ems": null
    },
    {
      "latitude": 39.444454,
      "longitude": -8.47644,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991599,
      "ems": null
    },
    {
      "latitude": 39.443012,
      "longitude": -8.476746,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991602,
      "ems": null
    },
    {
      "latitude": 39.438915,
      "longitude": -8.477539,
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
      "heading": 188,
      "squawk": "3213",
      "timestamp": 1704991610,
      "ems": null
    },
    {
      "latitude": 39.434097,
      "longitude": -8.4784,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704991620,
      "ems": null
    },
    {
      "latitude": 39.432678,
      "longitude": -8.478516,
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
      "heading": 183,
      "squawk": "3213",
      "timestamp": 1704991623,
      "ems": null
    },
    {
      "latitude": 39.431168,
      "longitude": -8.47858,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991626,
      "ems": null
    },
    {
      "latitude": 39.429703,
      "longitude": -8.47858,
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
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704991629,
      "ems": null
    },
    {
      "latitude": 39.428513,
      "longitude": -8.47858,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991631,
      "ems": null
    },
    {
      "latitude": 39.426907,
      "longitude": -8.478516,
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991635,
      "ems": null
    },
    {
      "latitude": 39.426361,
      "longitude": -8.478519,
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991636,
      "ems": null
    },
    {
      "latitude": 39.42416,
      "longitude": -8.478455,
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
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991640,
      "ems": null
    },
    {
      "latitude": 39.422668,
      "longitude": -8.478333,
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
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991643,
      "ems": null
    },
    {
      "latitude": 39.421371,
      "longitude": -8.478281,
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
      "heading": 177,
      "squawk": "3213",
      "timestamp": 1704991646,
      "ems": null
    },
    {
      "latitude": 39.420273,
      "longitude": -8.478221,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991649,
      "ems": null
    },
    {
      "latitude": 39.419086,
      "longitude": -8.478149,
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
      "heading": 178,
      "squawk": "3213",
      "timestamp": 1704991651,
      "ems": null
    },
    {
      "latitude": 39.413826,
      "longitude": -8.47821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3213",
      "timestamp": 1704991661,
      "ems": null
    },
    {
      "latitude": 39.409355,
      "longitude": -8.478271,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991670,
      "ems": null
    },
    {
      "latitude": 39.404934,
      "longitude": -8.478149,
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
      "heading": 179,
      "squawk": "3213",
      "timestamp": 1704991679,
      "ems": null
    },
    {
      "latitude": 39.401024,
      "longitude": -8.478333,
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704991689,
      "ems": null
    },
    {
      "latitude": 39.399445,
      "longitude": -8.478519,
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704991691,
      "ems": null
    },
    {
      "latitude": 39.397476,
      "longitude": -8.478818,
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
      "heading": 186,
      "squawk": "3213",
      "timestamp": 1704991695,
      "ems": null
    },
    {
      "latitude": 39.396057,
      "longitude": -8.478997,
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
      "heading": 185,
      "squawk": "3213",
      "timestamp": 1704991698,
      "ems": null
    },
    {
      "latitude": 39.394775,
      "longitude": -8.479057,
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
      "heading": 184,
      "squawk": "3213",
      "timestamp": 1704991700,
      "ems": null
    },
    {
      "latitude": 39.391899,
      "longitude": -8.47876,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 170,
      "squawk": "3213",
      "timestamp": 1704991706,
      "ems": null
    },
    {
      "latitude": 39.390335,
      "longitude": -8.478162,
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
      "heading": 161,
      "squawk": "3213",
      "timestamp": 1704991710,
      "ems": null
    },
    {
      "latitude": 39.389244,
      "longitude": -8.477539,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "3213",
      "timestamp": 1704991713,
      "ems": null
    },
    {
      "latitude": 39.387848,
      "longitude": -8.476685,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "3213",
      "timestamp": 1704991716,
      "ems": null
    },
    {
      "latitude": 39.38681,
      "longitude": -8.475833,
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
      "heading": 144,
      "squawk": "3213",
      "timestamp": 1704991719,
      "ems": null
    },
    {
      "latitude": 39.385754,
      "longitude": -8.474609,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991722,
      "ems": null
    },
    {
      "latitude": 39.384823,
      "longitude": -8.473267,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 130,
      "squawk": "3213",
      "timestamp": 1704991725,
      "ems": null
    },
    {
      "latitude": 39.383881,
      "longitude": -8.471832,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704991728,
      "ems": null
    },
    {
      "latitude": 39.382961,
      "longitude": -8.470337,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991731,
      "ems": null
    },
    {
      "latitude": 39.382233,
      "longitude": -8.469086,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704991733,
      "ems": null
    },
    {
      "latitude": 39.381516,
      "longitude": -8.467896,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991736,
      "ems": null
    },
    {
      "latitude": 39.380402,
      "longitude": -8.465981,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991740,
      "ems": null
    },
    {
      "latitude": 39.379486,
      "longitude": -8.464548,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991743,
      "ems": null
    },
    {
      "latitude": 39.378632,
      "longitude": -8.463135,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991746,
      "ems": null
    },
    {
      "latitude": 39.377792,
      "longitude": -8.461731,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704991749,
      "ems": null
    },
    {
      "latitude": 39.374626,
      "longitude": -8.457397,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991758,
      "ems": null
    },
    {
      "latitude": 39.37365,
      "longitude": -8.456238,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991761,
      "ems": null
    },
    {
      "latitude": 39.372528,
      "longitude": -8.454935,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991764,
      "ems": null
    },
    {
      "latitude": 39.371658,
      "longitude": -8.453919,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991767,
      "ems": null
    },
    {
      "latitude": 39.370377,
      "longitude": -8.452368,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704991770,
      "ems": null
    },
    {
      "latitude": 39.369324,
      "longitude": -8.451114,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704991773,
      "ems": null
    },
    {
      "latitude": 39.368225,
      "longitude": -8.44968,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991776,
      "ems": null
    },
    {
      "latitude": 39.365086,
      "longitude": -8.445679,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704991785,
      "ems": null
    },
    {
      "latitude": 39.36319,
      "longitude": -8.443112,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991791,
      "ems": null
    },
    {
      "latitude": 39.362244,
      "longitude": -8.441711,
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
      "heading": 131,
      "squawk": "3213",
      "timestamp": 1704991794,
      "ems": null
    },
    {
      "latitude": 39.361313,
      "longitude": -8.440308,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 130,
      "squawk": "3213",
      "timestamp": 1704991797,
      "ems": null
    },
    {
      "latitude": 39.360477,
      "longitude": -8.438965,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704991800,
      "ems": null
    },
    {
      "latitude": 39.359482,
      "longitude": -8.437321,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991803,
      "ems": null
    },
    {
      "latitude": 39.358704,
      "longitude": -8.436007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704991806,
      "ems": null
    },
    {
      "latitude": 39.357697,
      "longitude": -8.434276,
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
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704991810,
      "ems": null
    },
    {
      "latitude": 39.356964,
      "longitude": -8.432902,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704991813,
      "ems": null
    },
    {
      "latitude": 39.356564,
      "longitude": -8.43219,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 124,
      "squawk": "3213",
      "timestamp": 1704991815,
      "ems": null
    },
    {
      "latitude": 39.354004,
      "longitude": -8.429016,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 141,
      "squawk": "3213",
      "timestamp": 1704991822,
      "ems": null
    },
    {
      "latitude": 39.353214,
      "longitude": -8.428223,
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
      "heading": 141,
      "squawk": "3213",
      "timestamp": 1704991824,
      "ems": null
    },
    {
      "latitude": 39.351883,
      "longitude": -8.426812,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704991828,
      "ems": null
    },
    {
      "latitude": 39.351242,
      "longitude": -8.426096,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704991831,
      "ems": null
    },
    {
      "latitude": 39.349907,
      "longitude": -8.424683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991834,
      "ems": null
    },
    {
      "latitude": 39.349091,
      "longitude": -8.423707,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991836,
      "ems": null
    },
    {
      "latitude": 39.347946,
      "longitude": -8.422334,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704991840,
      "ems": null
    },
    {
      "latitude": 39.347488,
      "longitude": -8.421797,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704991841,
      "ems": null
    },
    {
      "latitude": 39.346371,
      "longitude": -8.420349,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991845,
      "ems": null
    },
    {
      "latitude": 39.344322,
      "longitude": -8.417725,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704991852,
      "ems": null
    },
    {
      "latitude": 39.343369,
      "longitude": -8.416423,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704991855,
      "ems": null
    },
    {
      "latitude": 39.342499,
      "longitude": -8.415169,
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
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991858,
      "ems": null
    },
    {
      "latitude": 39.341484,
      "longitude": -8.413757,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991861,
      "ems": null
    },
    {
      "latitude": 39.340645,
      "longitude": -8.412598,
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
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991864,
      "ems": null
    },
    {
      "latitude": 39.33976,
      "longitude": -8.411316,
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
      "heading": 131,
      "squawk": "3213",
      "timestamp": 1704991867,
      "ems": null
    },
    {
      "latitude": 39.338928,
      "longitude": -8.410094,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "3213",
      "timestamp": 1704991870,
      "ems": null
    },
    {
      "latitude": 39.338013,
      "longitude": -8.408661,
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
      "heading": 130,
      "squawk": "3213",
      "timestamp": 1704991873,
      "ems": null
    },
    {
      "latitude": 39.335197,
      "longitude": -8.404907,
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
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991882,
      "ems": null
    },
    {
      "latitude": 39.332428,
      "longitude": -8.401258,
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
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704991891,
      "ems": null
    },
    {
      "latitude": 39.329453,
      "longitude": -8.397316,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704991900,
      "ems": null
    },
    {
      "latitude": 39.326351,
      "longitude": -8.393127,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704991909,
      "ems": null
    },
    {
      "latitude": 39.323593,
      "longitude": -8.389316,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991918,
      "ems": null
    },
    {
      "latitude": 39.320675,
      "longitude": -8.385315,
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
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704991927,
      "ems": null
    },
    {
      "latitude": 39.317974,
      "longitude": -8.381226,
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
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704991936,
      "ems": null
    },
    {
      "latitude": 39.315273,
      "longitude": -8.377197,
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
      "heading": 131,
      "squawk": "3213",
      "timestamp": 1704991945,
      "ems": null
    },
    {
      "latitude": 39.312294,
      "longitude": -8.373413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991954,
      "ems": null
    },
    {
      "latitude": 39.311222,
      "longitude": -8.372192,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991957,
      "ems": null
    },
    {
      "latitude": 39.310226,
      "longitude": -8.370985,
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
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991960,
      "ems": null
    },
    {
      "latitude": 39.309219,
      "longitude": -8.369791,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991963,
      "ems": null
    },
    {
      "latitude": 39.308121,
      "longitude": -8.368477,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991966,
      "ems": null
    },
    {
      "latitude": 39.307079,
      "longitude": -8.367249,
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
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704991969,
      "ems": null
    },
    {
      "latitude": 39.305916,
      "longitude": -8.365845,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704991973,
      "ems": null
    },
    {
      "latitude": 39.303822,
      "longitude": -8.363403,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991979,
      "ems": null
    },
    {
      "latitude": 39.300568,
      "longitude": -8.35964,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704991988,
      "ems": null
    },
    {
      "latitude": 39.297363,
      "longitude": -8.35576,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704991997,
      "ems": null
    },
    {
      "latitude": 39.294373,
      "longitude": -8.351868,
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
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704992006,
      "ems": null
    },
    {
      "latitude": 39.293335,
      "longitude": -8.350505,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992009,
      "ems": null
    },
    {
      "latitude": 39.292416,
      "longitude": -8.349243,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704992012,
      "ems": null
    },
    {
      "latitude": 39.291531,
      "longitude": -8.347839,
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
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704992015,
      "ems": null
    },
    {
      "latitude": 39.290634,
      "longitude": -8.346504,
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
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704992017,
      "ems": null
    },
    {
      "latitude": 39.289623,
      "longitude": -8.344971,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "3213",
      "timestamp": 1704992021,
      "ems": null
    },
    {
      "latitude": 39.287666,
      "longitude": -8.342651,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "3213",
      "timestamp": 1704992026,
      "ems": null
    },
    {
      "latitude": 39.28632,
      "longitude": -8.341675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704992030,
      "ems": null
    },
    {
      "latitude": 39.284958,
      "longitude": -8.340653,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "3213",
      "timestamp": 1704992033,
      "ems": null
    },
    {
      "latitude": 39.283756,
      "longitude": -8.339722,
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
      "heading": 148,
      "squawk": "3213",
      "timestamp": 1704992036,
      "ems": null
    },
    {
      "latitude": 39.282486,
      "longitude": -8.338742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "3213",
      "timestamp": 1704992039,
      "ems": null
    },
    {
      "latitude": 39.281525,
      "longitude": -8.337891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "3213",
      "timestamp": 1704992042,
      "ems": null
    },
    {
      "latitude": 39.280266,
      "longitude": -8.336609,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704992045,
      "ems": null
    },
    {
      "latitude": 39.279419,
      "longitude": -8.335578,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992048,
      "ems": null
    },
    {
      "latitude": 39.278313,
      "longitude": -8.334229,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992051,
      "ems": null
    },
    {
      "latitude": 39.276169,
      "longitude": -8.331577,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992057,
      "ems": null
    },
    {
      "latitude": 39.275253,
      "longitude": -8.330503,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992060,
      "ems": null
    },
    {
      "latitude": 39.27412,
      "longitude": -8.329102,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992063,
      "ems": null
    },
    {
      "latitude": 39.273098,
      "longitude": -8.327759,
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
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992066,
      "ems": null
    },
    {
      "latitude": 39.272141,
      "longitude": -8.326502,
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
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704992069,
      "ems": null
    },
    {
      "latitude": 39.271042,
      "longitude": -8.325009,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992072,
      "ems": null
    },
    {
      "latitude": 39.270081,
      "longitude": -8.323636,
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
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704992075,
      "ems": null
    },
    {
      "latitude": 39.267105,
      "longitude": -8.319576,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992084,
      "ems": null
    },
    {
      "latitude": 39.264297,
      "longitude": -8.315735,
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
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992093,
      "ems": null
    },
    {
      "latitude": 39.261459,
      "longitude": -8.312073,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992101,
      "ems": null
    },
    {
      "latitude": 39.258106,
      "longitude": -8.307556,
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
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992112,
      "ems": null
    },
    {
      "latitude": 39.255501,
      "longitude": -8.304199,
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
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992120,
      "ems": null
    },
    {
      "latitude": 39.252228,
      "longitude": -8.299932,
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
      "heading": 134,
      "squawk": "3213",
      "timestamp": 1704992130,
      "ems": null
    },
    {
      "latitude": 39.249355,
      "longitude": -8.296082,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992139,
      "ems": null
    },
    {
      "latitude": 39.246506,
      "longitude": -8.29211,
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
      "heading": 132,
      "squawk": "3213",
      "timestamp": 1704992148,
      "ems": null
    },
    {
      "latitude": 39.24353,
      "longitude": -8.288289,
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
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704992157,
      "ems": null
    },
    {
      "latitude": 39.242386,
      "longitude": -8.287035,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "3213",
      "timestamp": 1704992160,
      "ems": null
    },
    {
      "latitude": 39.239273,
      "longitude": -8.283393,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992169,
      "ems": null
    },
    {
      "latitude": 39.236206,
      "longitude": -8.279691,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "3213",
      "timestamp": 1704992178,
      "ems": null
    },
    {
      "latitude": 39.235199,
      "longitude": -8.278676,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "3213",
      "timestamp": 1704992181,
      "ems": null
    },
    {
      "latitude": 39.234039,
      "longitude": -8.277588,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "3213",
      "timestamp": 1704992184,
      "ems": null
    },
    {
      "latitude": 39.233093,
      "longitude": -8.276765,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704992187,
      "ems": null
    },
    {
      "latitude": 39.232269,
      "longitude": -8.276062,
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
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704992189,
      "ems": null
    },
    {
      "latitude": 39.230453,
      "longitude": -8.274475,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704992193,
      "ems": null
    },
    {
      "latitude": 39.22934,
      "longitude": -8.273499,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704992196,
      "ems": null
    },
    {
      "latitude": 39.228176,
      "longitude": -8.272522,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "3213",
      "timestamp": 1704992199,
      "ems": null
    },
    {
      "latitude": 39.226963,
      "longitude": -8.271484,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 145,
      "squawk": "3213",
      "timestamp": 1704992202,
      "ems": null
    },
    {
      "latitude": 39.223381,
      "longitude": -8.267944,
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
      "heading": 140,
      "squawk": "3213",
      "timestamp": 1704992212,
      "ems": null
    },
    {
      "latitude": 39.222473,
      "longitude": -8.266913,
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
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704992214,
      "ems": null
    },
    {
      "latitude": 39.221283,
      "longitude": -8.2656,
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
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704992217,
      "ems": null
    },
    {
      "latitude": 39.220169,
      "longitude": -8.264343,
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
      "heading": 138,
      "squawk": "3213",
      "timestamp": 1704992221,
      "ems": null
    },
    {
      "latitude": 39.219131,
      "longitude": -8.263152,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "3213",
      "timestamp": 1704992224,
      "ems": null
    },
    {
      "latitude": 39.218304,
      "longitude": -8.262085,
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
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992226,
      "ems": null
    },
    {
      "latitude": 39.21714,
      "longitude": -8.260681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992230,
      "ems": null
    },
    {
      "latitude": 39.216255,
      "longitude": -8.259583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "3213",
      "timestamp": 1704992232,
      "ems": null
    },
    {
      "latitude": 39.215141,
      "longitude": -8.258057,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "3213",
      "timestamp": 1704992235,
      "ems": null
    },
    {
      "latitude": 39.214142,
      "longitude": -8.256703,
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
      "heading": 131,
      "squawk": "3213",
      "timestamp": 1704992238,
      "ems": null
    },
    {
      "latitude": 39.213226,
      "longitude": -8.255211,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704992242,
      "ems": null
    },
    {
      "latitude": 39.212265,
      "longitude": -8.253658,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704992245,
      "ems": null
    },
    {
      "latitude": 39.21146,
      "longitude": -8.252319,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704992248,
      "ems": null
    },
    {
      "latitude": 39.210625,
      "longitude": -8.250977,
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
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704992251,
      "ems": null
    },
    {
      "latitude": 39.209747,
      "longitude": -8.249538,
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
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704992254,
      "ems": null
    },
    {
      "latitude": 39.208996,
      "longitude": -8.24823,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992257,
      "ems": null
    },
    {
      "latitude": 39.208099,
      "longitude": -8.246673,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992260,
      "ems": null
    },
    {
      "latitude": 39.207367,
      "longitude": -8.245419,
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
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992263,
      "ems": null
    },
    {
      "latitude": 39.206451,
      "longitude": -8.243747,
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
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992266,
      "ems": null
    },
    {
      "latitude": 39.205597,
      "longitude": -8.24231,
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
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992269,
      "ems": null
    },
    {
      "latitude": 39.202927,
      "longitude": -8.237955,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "3213",
      "timestamp": 1704992278,
      "ems": null
    },
    {
      "latitude": 39.200317,
      "longitude": -8.233835,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704992287,
      "ems": null
    },
    {
      "latitude": 39.197662,
      "longitude": -8.229536,
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
      "heading": 128,
      "squawk": "3213",
      "timestamp": 1704992296,
      "ems": null
    },
    {
      "latitude": 39.195076,
      "longitude": -8.225403,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992305,
      "ems": null
    },
    {
      "latitude": 39.193539,
      "longitude": -8.222473,
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
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992311,
      "ems": null
    },
    {
      "latitude": 39.192719,
      "longitude": -8.220879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992314,
      "ems": null
    },
    {
      "latitude": 39.192215,
      "longitude": -8.219923,
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
      "heading": 122,
      "squawk": "3213",
      "timestamp": 1704992316,
      "ems": null
    },
    {
      "latitude": 39.191303,
      "longitude": -8.218079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "3213",
      "timestamp": 1704992320,
      "ems": null
    },
    {
      "latitude": 39.190567,
      "longitude": -8.216519,
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
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992323,
      "ems": null
    },
    {
      "latitude": 39.189907,
      "longitude": -8.215332,
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
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992326,
      "ems": null
    },
    {
      "latitude": 39.189022,
      "longitude": -8.213562,
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
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992329,
      "ems": null
    },
    {
      "latitude": 39.187592,
      "longitude": -8.210548,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "3213",
      "timestamp": 1704992335,
      "ems": null
    },
    {
      "latitude": 39.18544,
      "longitude": -8.205811,
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
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704992344,
      "ems": null
    },
    {
      "latitude": 39.183392,
      "longitude": -8.201233,
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
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704992353,
      "ems": null
    },
    {
      "latitude": 39.181297,
      "longitude": -8.196777,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "3213",
      "timestamp": 1704992362,
      "ems": null
    },
    {
      "latitude": 39.179108,
      "longitude": -8.192383,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "3213",
      "timestamp": 1704992371,
      "ems": null
    },
    {
      "latitude": 39.176922,
      "longitude": -8.187866,
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
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704992381,
      "ems": null
    },
    {
      "latitude": 39.174911,
      "longitude": -8.183441,
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
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704992390,
      "ems": null
    },
    {
      "latitude": 39.17276,
      "longitude": -8.178963,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "3213",
      "timestamp": 1704992399,
      "ems": null
    },
    {
      "latitude": 39.170563,
      "longitude": -8.174485,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "3213",
      "timestamp": 1704992408,
      "ems": null
    },
    {
      "latitude": 39.16864,
      "longitude": -8.169827,
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
      "heading": 116,
      "squawk": "3213",
      "timestamp": 1704992416,
      "ems": null
    },
    {
      "latitude": 39.167999,
      "longitude": -8.168156,
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
      "heading": 116,
      "squawk": "3213",
      "timestamp": 1704992420,
      "ems": null
    },
    {
      "latitude": 39.167423,
      "longitude": -8.166565,
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
      "heading": 116,
      "squawk": "3213",
      "timestamp": 1704992423,
      "ems": null
    },
    {
      "latitude": 39.166725,
      "longitude": -8.164856,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "3213",
      "timestamp": 1704992426,
      "ems": null
    },
    {
      "latitude": 39.166073,
      "longitude": -8.163147,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "3213",
      "timestamp": 1704992429,
      "ems": null
    },
    {
      "latitude": 39.163979,
      "longitude": -8.158325,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 118,
      "squawk": "3213",
      "timestamp": 1704992438,
      "ems": null
    },
    {
      "latitude": 39.162117,
      "longitude": -8.153687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "3213",
      "timestamp": 1704992447,
      "ems": null
    },
    {
      "latitude": 39.160255,
      "longitude": -8.14856,
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
      "heading": 113,
      "squawk": "3213",
      "timestamp": 1704992456,
      "ems": null
    },
    {
      "latitude": 39.158661,
      "longitude": -8.143854,
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
      "heading": 114,
      "squawk": "3213",
      "timestamp": 1704992465,
      "ems": null
    },
    {
      "latitude": 39.157379,
      "longitude": -8.140391,
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
      "heading": 115,
      "squawk": "3213",
      "timestamp": 1704992471,
      "ems": null
    },
    {
      "latitude": 39.155685,
      "longitude": -8.135555,
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
      "heading": 112,
      "squawk": "3213",
      "timestamp": 1704992480,
      "ems": null
    },
    {
      "latitude": 39.155273,
      "longitude": -8.134033,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "3213",
      "timestamp": 1704992483,
      "ems": null
    },
    {
      "latitude": 39.154949,
      "longitude": -8.132385,
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
      "heading": 102,
      "squawk": "3213",
      "timestamp": 1704992486,
      "ems": null
    },
    {
      "latitude": 39.154678,
      "longitude": -8.130361,
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
      "heading": 100,
      "squawk": "3213",
      "timestamp": 1704992489,
      "ems": null
    },
    {
      "latitude": 39.154495,
      "longitude": -8.128927,
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
      "heading": 99,
      "squawk": "3213",
      "timestamp": 1704992492,
      "ems": null
    },
    {
      "latitude": 39.154266,
      "longitude": -8.127196,
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
      "heading": 98,
      "squawk": "3213",
      "timestamp": 1704992495,
      "ems": null
    },
    {
      "latitude": 39.154083,
      "longitude": -8.125525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "3213",
      "timestamp": 1704992498,
      "ems": null
    },
    {
      "latitude": 39.153923,
      "longitude": -8.123779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "3213",
      "timestamp": 1704992501,
      "ems": null
    },
    {
      "latitude": 39.153809,
      "longitude": -8.122121,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "3213",
      "timestamp": 1704992505,
      "ems": null
    },
    {
      "latitude": 39.153671,
      "longitude": -8.12009,
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
      "heading": 94,
      "squawk": "3213",
      "timestamp": 1704992508,
      "ems": null
    },
    {
      "latitude": 39.153599,
      "longitude": -8.118652,
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
      "heading": 93,
      "squawk": "3213",
      "timestamp": 1704992510,
      "ems": null
    },
    {
      "latitude": 39.153549,
      "longitude": -8.116821,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "3213",
      "timestamp": 1704992513,
      "ems": null
    },
    {
      "latitude": 39.153549,
      "longitude": -8.11499,
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
      "heading": 89,
      "squawk": "3213",
      "timestamp": 1704992517,
      "ems": null
    },
    {
      "latitude": 39.153625,
      "longitude": -8.113224,
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
      "heading": 84,
      "squawk": "3213",
      "timestamp": 1704992520,
      "ems": null
    },
    {
      "latitude": 39.153854,
      "longitude": -8.111493,
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
      "heading": 80,
      "squawk": "3213",
      "timestamp": 1704992523,
      "ems": null
    },
    {
      "latitude": 39.154129,
      "longitude": -8.11006,
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
      "heading": 74,
      "squawk": "3213",
      "timestamp": 1704992525,
      "ems": null
    },
    {
      "latitude": 39.154587,
      "longitude": -8.108447,
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
      "heading": 67,
      "squawk": "3213",
      "timestamp": 1704992528,
      "ems": null
    },
    {
      "latitude": 39.155228,
      "longitude": -8.106775,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 61,
      "squawk": "3213",
      "timestamp": 1704992532,
      "ems": null
    },
    {
      "latitude": 39.155926,
      "longitude": -8.105286,
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
      "heading": 57,
      "squawk": "3213",
      "timestamp": 1704992535,
      "ems": null
    },
    {
      "latitude": 39.156624,
      "longitude": -8.104065,
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
      "heading": 54,
      "squawk": "3213",
      "timestamp": 1704992538,
      "ems": null
    },
    {
      "latitude": 39.157516,
      "longitude": -8.102596,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "3213",
      "timestamp": 1704992541,
      "ems": null
    },
    {
      "latitude": 39.158249,
      "longitude": -8.101581,
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
      "heading": 48,
      "squawk": "3213",
      "timestamp": 1704992544,
      "ems": null
    },
    {
      "latitude": 39.159184,
      "longitude": -8.100342,
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
      "heading": 45,
      "squawk": "3213",
      "timestamp": 1704992547,
      "ems": null
    },
    {
      "latitude": 39.160126,
      "longitude": -8.099193,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "3213",
      "timestamp": 1704992550,
      "ems": null
    },
    {
      "latitude": 39.161278,
      "longitude": -8.098022,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 38,
      "squawk": "3213",
      "timestamp": 1704992553,
      "ems": null
    },
    {
      "latitude": 39.162369,
      "longitude": -8.096924,
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
      "heading": 36,
      "squawk": "3213",
      "timestamp": 1704992556,
      "ems": null
    },
    {
      "latitude": 39.163422,
      "longitude": -8.096008,
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
      "heading": 34,
      "squawk": "3213",
      "timestamp": 1704992559,
      "ems": null
    },
    {
      "latitude": 39.164631,
      "longitude": -8.095032,
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
      "heading": 31,
      "squawk": "3213",
      "timestamp": 1704992562,
      "ems": null
    },
    {
      "latitude": 39.165756,
      "longitude": -8.094117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "3213",
      "timestamp": 1704992565,
      "ems": null
    },
    {
      "latitude": 39.166992,
      "longitude": -8.093222,
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
      "heading": 30,
      "squawk": "3213",
      "timestamp": 1704992568,
      "ems": null
    },
    {
      "latitude": 39.168121,
      "longitude": -8.092346,
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
      "heading": 31,
      "squawk": "3213",
      "timestamp": 1704992571,
      "ems": null
    },
    {
      "latitude": 39.169189,
      "longitude": -8.091431,
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
      "heading": 32,
      "squawk": "3213",
      "timestamp": 1704992574,
      "ems": null
    },
    {
      "latitude": 39.170334,
      "longitude": -8.090535,
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
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704992577,
      "ems": null
    },
    {
      "latitude": 39.171429,
      "longitude": -8.0896,
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
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704992580,
      "ems": null
    },
    {
      "latitude": 39.172543,
      "longitude": -8.088684,
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
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704992583,
      "ems": null
    },
    {
      "latitude": 39.176056,
      "longitude": -8.085699,
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
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704992592,
      "ems": null
    },
    {
      "latitude": 39.179153,
      "longitude": -8.08313,
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
      "heading": 32,
      "squawk": "3213",
      "timestamp": 1704992601,
      "ems": null
    },
    {
      "latitude": 39.181595,
      "longitude": -8.081161,
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
      "heading": 32,
      "squawk": "3213",
      "timestamp": 1704992607,
      "ems": null
    },
    {
      "latitude": 39.184937,
      "longitude": -8.078355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3213",
      "timestamp": 1704992616,
      "ems": null
    },
    {
      "latitude": 39.188324,
      "longitude": -8.075369,
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
      "heading": 34,
      "squawk": "3213",
      "timestamp": 1704992626,
      "ems": null
    },
    {
      "latitude": 39.191723,
      "longitude": -8.072449,
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
      "heading": 31,
      "squawk": "3213",
      "timestamp": 1704992635,
      "ems": null
    },
    {
      "latitude": 39.194962,
      "longitude": -8.069817,
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
      "heading": 33,
      "squawk": "3213",
      "timestamp": 1704992643,
      "ems": null
    },
    {
      "latitude": 39.198212,
      "longitude": -8.067189,
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
      "heading": 30,
      "squawk": "3213",
      "timestamp": 1704992652,
      "ems": null
    },
    {
      "latitude": 39.201824,
      "longitude": -8.064514,
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
      "heading": 29,
      "squawk": "3213",
      "timestamp": 1704992662,
      "ems": null
    },
    {
      "latitude": 39.203037,
      "longitude": -8.063782,
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
      "heading": 18,
      "squawk": "3213",
      "timestamp": 1704992665,
      "ems": null
    },
    {
      "latitude": 39.204254,
      "longitude": -8.063547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "3213",
      "timestamp": 1704992667,
      "ems": null
    },
    {
      "latitude": 39.205811,
      "longitude": -8.063846,
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
      "heading": 345,
      "squawk": "3213",
      "timestamp": 1704992671,
      "ems": null
    },
    {
      "latitude": 39.206268,
      "longitude": -8.064025,
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
      "heading": 341,
      "squawk": "3213",
      "timestamp": 1704992672,
      "ems": null
    },
    {
      "latitude": 39.208008,
      "longitude": -8.065697,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 313,
      "squawk": "3213",
      "timestamp": 1704992677,
      "ems": null
    },
    {
      "latitude": 39.208878,
      "longitude": -8.067189,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704992680,
      "ems": null
    },
    {
      "latitude": 39.209473,
      "longitude": -8.068502,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704992682,
      "ems": null
    },
    {
      "latitude": 39.210346,
      "longitude": -8.070679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3213",
      "timestamp": 1704992686,
      "ems": null
    },
    {
      "latitude": 39.211044,
      "longitude": -8.072327,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704992689,
      "ems": null
    },
    {
      "latitude": 39.21167,
      "longitude": -8.073816,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "3213",
      "timestamp": 1704992691,
      "ems": null
    },
    {
      "latitude": 39.212395,
      "longitude": -8.075439,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704992694,
      "ems": null
    },
    {
      "latitude": 39.21286,
      "longitude": -8.076599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704992696,
      "ems": null
    },
    {
      "latitude": 39.213791,
      "longitude": -8.078613,
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
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704992700,
      "ems": null
    },
    {
      "latitude": 39.214508,
      "longitude": -8.080146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "3213",
      "timestamp": 1704992703,
      "ems": null
    },
    {
      "latitude": 39.215286,
      "longitude": -8.081818,
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
      "heading": 301,
      "squawk": "3213",
      "timestamp": 1704992706,
      "ems": null
    },
    {
      "latitude": 39.217003,
      "longitude": -8.085266,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704992712,
      "ems": null
    },
    {
      "latitude": 39.217758,
      "longitude": -8.086714,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "3213",
      "timestamp": 1704992715,
      "ems": null
    },
    {
      "latitude": 39.220276,
      "longitude": -8.091848,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "3213",
      "timestamp": 1704992724,
      "ems": null
    },
    {
      "latitude": 39.222885,
      "longitude": -8.097162,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 299,
      "squawk": "3213",
      "timestamp": 1704992733,
      "ems": null
    },
    {
      "latitude": 39.223389,
      "longitude": -8.098954,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 285,
      "squawk": "3213",
      "timestamp": 1704992736,
      "ems": null
    },
    {
      "latitude": 39.223473,
      "longitude": -8.100891,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 266,
      "squawk": "3213",
      "timestamp": 1704992739,
      "ems": null
    },
    {
      "latitude": 39.22316,
      "longitude": -8.102954,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 255,
      "squawk": "3213",
      "timestamp": 1704992742,
      "ems": null
    },
    {
      "latitude": 39.222473,
      "longitude": -8.104984,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 243,
      "squawk": "3213",
      "timestamp": 1704992745,
      "ems": null
    },
    {
      "latitude": 39.221603,
      "longitude": -8.106597,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 234,
      "squawk": "3213",
      "timestamp": 1704992748,
      "ems": null
    },
    {
      "latitude": 39.220367,
      "longitude": -8.108209,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 220,
      "squawk": "3213",
      "timestamp": 1704992751,
      "ems": null
    },
    {
      "latitude": 39.219131,
      "longitude": -8.109223,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 210,
      "squawk": "3213",
      "timestamp": 1704992754,
      "ems": null
    },
    {
      "latitude": 39.218857,
      "longitude": -8.109403,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 210,
      "squawk": "3213",
      "timestamp": 1704992755,
      "ems": null
    },
    {
      "latitude": 39.216209,
      "longitude": -8.110352,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 190,
      "squawk": "3213",
      "timestamp": 1704992760,
      "ems": null
    },
    {
      "latitude": 39.214626,
      "longitude": -8.110291,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 171,
      "squawk": "3213",
      "timestamp": 1704992763,
      "ems": null
    },
    {
      "latitude": 39.21286,
      "longitude": -8.10968,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 159,
      "squawk": "3213",
      "timestamp": 1704992766,
      "ems": null
    },
    {
      "latitude": 39.211578,
      "longitude": -8.108806,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 148,
      "squawk": "3213",
      "timestamp": 1704992769,
      "ems": null
    },
    {
      "latitude": 39.210297,
      "longitude": -8.107373,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992772,
      "ems": null
    },
    {
      "latitude": 39.209381,
      "longitude": -8.106,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 126,
      "squawk": "3213",
      "timestamp": 1704992775,
      "ems": null
    },
    {
      "latitude": 39.208668,
      "longitude": -8.104553,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 118,
      "squawk": "3213",
      "timestamp": 1704992778,
      "ems": null
    },
    {
      "latitude": 39.207878,
      "longitude": -8.102417,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 116,
      "squawk": "3213",
      "timestamp": 1704992781,
      "ems": null
    },
    {
      "latitude": 39.207413,
      "longitude": -8.100507,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 105,
      "squawk": "3213",
      "timestamp": 1704992785,
      "ems": null
    },
    {
      "latitude": 39.207134,
      "longitude": -8.098511,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 99,
      "squawk": "3213",
      "timestamp": 1704992788,
      "ems": null
    },
    {
      "latitude": 39.206993,
      "longitude": -8.096741,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 94,
      "squawk": "3213",
      "timestamp": 1704992790,
      "ems": null
    },
    {
      "latitude": 39.206902,
      "longitude": -8.094849,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 91,
      "squawk": "3213",
      "timestamp": 1704992794,
      "ems": null
    },
    {
      "latitude": 39.206909,
      "longitude": -8.092864,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 88,
      "squawk": "3213",
      "timestamp": 1704992796,
      "ems": null
    },
    {
      "latitude": 39.207138,
      "longitude": -8.090894,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 77,
      "squawk": "3213",
      "timestamp": 1704992800,
      "ems": null
    },
    {
      "latitude": 39.207691,
      "longitude": -8.089172,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 65,
      "squawk": "3213",
      "timestamp": 1704992802,
      "ems": null
    },
    {
      "latitude": 39.208622,
      "longitude": -8.08728,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 53,
      "squawk": "3213",
      "timestamp": 1704992806,
      "ems": null
    },
    {
      "latitude": 39.209461,
      "longitude": -8.086121,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "3213",
      "timestamp": 1704992809,
      "ems": null
    },
    {
      "latitude": 39.210709,
      "longitude": -8.084863,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "3213",
      "timestamp": 1704992812,
      "ems": null
    },
    {
      "latitude": 39.211929,
      "longitude": -8.083862,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "3213",
      "timestamp": 1704992815,
      "ems": null
    },
    {
      "latitude": 39.212952,
      "longitude": -8.083131,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "3213",
      "timestamp": 1704992817,
      "ems": null
    },
    {
      "latitude": 39.214302,
      "longitude": -8.082153,
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
      "heading": 27,
      "squawk": "3213",
      "timestamp": 1704992821,
      "ems": null
    },
    {
      "latitude": 39.215511,
      "longitude": -8.08136,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "3213",
      "timestamp": 1704992824,
      "ems": null
    },
    {
      "latitude": 39.216797,
      "longitude": -8.080624,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "3213",
      "timestamp": 1704992827,
      "ems": null
    },
    {
      "latitude": 39.218025,
      "longitude": -8.079895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3213",
      "timestamp": 1704992830,
      "ems": null
    },
    {
      "latitude": 39.219315,
      "longitude": -8.07919,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 23,
      "squawk": "3213",
      "timestamp": 1704992833,
      "ems": null
    },
    {
      "latitude": 39.220642,
      "longitude": -8.078474,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "3213",
      "timestamp": 1704992836,
      "ems": null
    },
    {
      "latitude": 39.221832,
      "longitude": -8.077817,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 22,
      "squawk": "3213",
      "timestamp": 1704992839,
      "ems": null
    },
    {
      "latitude": 39.223194,
      "longitude": -8.077148,
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
      "heading": 20,
      "squawk": "3213",
      "timestamp": 1704992842,
      "ems": null
    },
    {
      "latitude": 39.224403,
      "longitude": -8.076599,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "3213",
      "timestamp": 1704992845,
      "ems": null
    },
    {
      "latitude": 39.225677,
      "longitude": -8.075966,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "3213",
      "timestamp": 1704992848,
      "ems": null
    },
    {
      "latitude": 39.22673,
      "longitude": -8.075439,
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
      "heading": 20,
      "squawk": "3213",
      "timestamp": 1704992851,
      "ems": null
    },
    {
      "latitude": 39.228035,
      "longitude": -8.074829,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "3213",
      "timestamp": 1704992854,
      "ems": null
    },
    {
      "latitude": 39.231525,
      "longitude": -8.073059,
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
      "heading": 21,
      "squawk": "3213",
      "timestamp": 1704992863,
      "ems": null
    },
    {
      "latitude": 39.233761,
      "longitude": -8.071716,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "3213",
      "timestamp": 1704992869,
      "ems": null
    },
    {
      "latitude": 39.234646,
      "longitude": -8.070923,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 35,
      "squawk": "3213",
      "timestamp": 1704992872,
      "ems": null
    },
    {
      "latitude": 39.235748,
      "longitude": -8.069757,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "3213",
      "timestamp": 1704992875,
      "ems": null
    },
    {
      "latitude": 39.236462,
      "longitude": -8.068665,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 52,
      "squawk": "3213",
      "timestamp": 1704992878,
      "ems": null
    },
    {
      "latitude": 39.23703,
      "longitude": -8.067548,
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
      "heading": 60,
      "squawk": "3213",
      "timestamp": 1704992881,
      "ems": null
    },
    {
      "latitude": 39.237442,
      "longitude": -8.066294,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "3213",
      "timestamp": 1704992884,
      "ems": null
    },
    {
      "latitude": 39.237717,
      "longitude": -8.065002,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "3213",
      "timestamp": 1704992887,
      "ems": null
    },
    {
      "latitude": 39.237854,
      "longitude": -8.063666,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 84,
      "squawk": "3213",
      "timestamp": 1704992890,
      "ems": null
    },
    {
      "latitude": 39.237858,
      "longitude": -8.062378,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 90,
      "squawk": "3213",
      "timestamp": 1704992893,
      "ems": null
    },
    {
      "latitude": 39.237762,
      "longitude": -8.060913,
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
      "heading": 95,
      "squawk": "3213",
      "timestamp": 1704992896,
      "ems": null
    },
    {
      "latitude": 39.237625,
      "longitude": -8.05957,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "3213",
      "timestamp": 1704992899,
      "ems": null
    },
    {
      "latitude": 39.237297,
      "longitude": -8.058105,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 105,
      "squawk": "3213",
      "timestamp": 1704992902,
      "ems": null
    },
    {
      "latitude": 39.236973,
      "longitude": -8.056885,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 108,
      "squawk": "3213",
      "timestamp": 1704992905,
      "ems": null
    },
    {
      "latitude": 39.236526,
      "longitude": -8.055367,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 112,
      "squawk": "3213",
      "timestamp": 1704992909,
      "ems": null
    },
    {
      "latitude": 39.236134,
      "longitude": -8.054199,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "3213",
      "timestamp": 1704992911,
      "ems": null
    },
    {
      "latitude": 39.235794,
      "longitude": -8.053337,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "3213",
      "timestamp": 1704992913,
      "ems": null
    },
    {
      "latitude": 39.235249,
      "longitude": -8.051941,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 117,
      "squawk": "3213",
      "timestamp": 1704992917,
      "ems": null
    },
    {
      "latitude": 39.23455,
      "longitude": -8.050659,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 127,
      "squawk": "3213",
      "timestamp": 1704992920,
      "ems": null
    },
    {
      "latitude": 39.233826,
      "longitude": -8.049635,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 136,
      "squawk": "3213",
      "timestamp": 1704992923,
      "ems": null
    },
    {
      "latitude": 39.233002,
      "longitude": -8.048919,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 147,
      "squawk": "3213",
      "timestamp": 1704992927,
      "ems": null
    },
    {
      "latitude": 39.232086,
      "longitude": -8.048262,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 156,
      "squawk": "3213",
      "timestamp": 1704992929,
      "ems": null
    },
    {
      "latitude": 39.230942,
      "longitude": -8.047844,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 168,
      "squawk": "3213",
      "timestamp": 1704992933,
      "ems": null
    },
    {
      "latitude": 39.229897,
      "longitude": -8.047791,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 180,
      "squawk": "3213",
      "timestamp": 1704992936,
      "ems": null
    },
    {
      "latitude": 39.228825,
      "longitude": -8.048035,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 192,
      "squawk": "3213",
      "timestamp": 1704992939,
      "ems": null
    },
    {
      "latitude": 39.228149,
      "longitude": -8.048322,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 201,
      "squawk": "3213",
      "timestamp": 1704992941,
      "ems": null
    },
    {
      "latitude": 39.226501,
      "longitude": -8.049157,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 201,
      "squawk": "3213",
      "timestamp": 1704992946,
      "ems": null
    },
    {
      "latitude": 39.225586,
      "longitude": -8.049635,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 201,
      "squawk": "3213",
      "timestamp": 1704992948,
      "ems": null
    },
    {
      "latitude": 39.224682,
      "longitude": -8.050171,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "3213",
      "timestamp": 1704992952,
      "ems": null
    },
    {
      "latitude": 39.223846,
      "longitude": -8.05071,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 205,
      "squawk": "3213",
      "timestamp": 1704992955,
      "ems": null
    },
    {
      "latitude": 39.223389,
      "longitude": -8.050948,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 204,
      "squawk": "3213",
      "timestamp": 1704992956,
      "ems": null
    },
    {
      "latitude": 39.222076,
      "longitude": -8.051697,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 203,
      "squawk": "3213",
      "timestamp": 1704992961,
      "ems": null
    },
    {
      "latitude": 39.220772,
      "longitude": -8.052429,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 203,
      "squawk": "3213",
      "timestamp": 1704992965,
      "ems": null
    }
  ],
};
