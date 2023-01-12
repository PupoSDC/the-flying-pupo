import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230111EPLLEPLL",
    callsign: "BNI6V",
    name: "IR2/14",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 0, 11, 17, 4).getTime(),
    arrival: new Date(2023, 0, 11, 18, 56).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 112,
    picTime: 0,
    dualTime: 112,
    ifrTime: 112,
    nightTime: 112,
    landings: {
      day: 0,
      night: 1,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-RVR",
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
      "latitude": 51.717636,
      "longitude": 19.376469,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 252,
      "squawk": "0",
      "timestamp": 1673457339,
      "ems": null
    },
    {
      "latitude": 51.716995,
      "longitude": 19.373425,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 251,
      "squawk": "0",
      "timestamp": 1673457345,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.370117,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1673457351,
      "ems": null
    },
    {
      "latitude": 51.715626,
      "longitude": 19.367065,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 251,
      "squawk": "0",
      "timestamp": 1673457357,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.36318,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 254,
      "squawk": "0",
      "timestamp": 1673457363,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.361547,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 256,
      "squawk": "0",
      "timestamp": 1673457366,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 19.359543,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 256,
      "squawk": "0",
      "timestamp": 1673457369,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.357317,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 256,
      "squawk": "0",
      "timestamp": 1673457372,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.353561,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673457378,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 19.351601,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673457381,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673457384,
      "ems": null
    },
    {
      "latitude": 51.712509,
      "longitude": 19.347815,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673457387,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.346182,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673457390,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.344028,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 264,
      "squawk": "2654",
      "timestamp": 1673457393,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.342247,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 270,
      "squawk": "2654",
      "timestamp": 1673457396,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.339947,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 278,
      "squawk": "2654",
      "timestamp": 1673457399,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.338017,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 286,
      "squawk": "2654",
      "timestamp": 1673457402,
      "ems": null
    },
    {
      "latitude": 51.713104,
      "longitude": 19.335863,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 297,
      "squawk": "2654",
      "timestamp": 1673457405,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.334824,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 297,
      "squawk": "2654",
      "timestamp": 1673457407,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.332968,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 306,
      "squawk": "2654",
      "timestamp": 1673457410,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 19.331512,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 310,
      "squawk": "2654",
      "timestamp": 1673457412,
      "ems": null
    },
    {
      "latitude": 51.716324,
      "longitude": 19.329529,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 318,
      "squawk": "2654",
      "timestamp": 1673457416,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.327927,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673457419,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.326706,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 331,
      "squawk": "2654",
      "timestamp": 1673457422,
      "ems": null
    },
    {
      "latitude": 51.719769,
      "longitude": 19.326096,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 333,
      "squawk": "2654",
      "timestamp": 1673457424,
      "ems": null
    },
    {
      "latitude": 51.72139,
      "longitude": 19.325026,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 338,
      "squawk": "2654",
      "timestamp": 1673457428,
      "ems": null
    },
    {
      "latitude": 51.723221,
      "longitude": 19.323986,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673457431,
      "ems": null
    },
    {
      "latitude": 51.724285,
      "longitude": 19.323502,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 345,
      "squawk": "2654",
      "timestamp": 1673457434,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.322815,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457437,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.322428,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457440,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.322052,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457443,
      "ems": null
    },
    {
      "latitude": 51.730682,
      "longitude": 19.321611,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457446,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 19.321289,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457449,
      "ems": null
    },
    {
      "latitude": 51.733643,
      "longitude": 19.320831,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457452,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 19.320423,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457455,
      "ems": null
    },
    {
      "latitude": 51.736622,
      "longitude": 19.319916,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 348,
      "squawk": "2654",
      "timestamp": 1673457458,
      "ems": null
    },
    {
      "latitude": 51.737686,
      "longitude": 19.319607,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457461,
      "ems": null
    },
    {
      "latitude": 51.73904,
      "longitude": 19.319305,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457464,
      "ems": null
    },
    {
      "latitude": 51.741974,
      "longitude": 19.318542,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457470,
      "ems": null
    },
    {
      "latitude": 51.744827,
      "longitude": 19.317751,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457476,
      "ems": null
    },
    {
      "latitude": 51.747562,
      "longitude": 19.317093,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457482,
      "ems": null
    },
    {
      "latitude": 51.750275,
      "longitude": 19.316414,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457488,
      "ems": null
    },
    {
      "latitude": 51.752975,
      "longitude": 19.315821,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457495,
      "ems": null
    },
    {
      "latitude": 51.755905,
      "longitude": 19.315228,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457500,
      "ems": null
    },
    {
      "latitude": 51.758606,
      "longitude": 19.314632,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457507,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 19.314041,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673457512,
      "ems": null
    },
    {
      "latitude": 51.763714,
      "longitude": 19.313583,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457518,
      "ems": null
    },
    {
      "latitude": 51.766602,
      "longitude": 19.312897,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457524,
      "ems": null
    },
    {
      "latitude": 51.769207,
      "longitude": 19.312363,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673457530,
      "ems": null
    },
    {
      "latitude": 51.771927,
      "longitude": 19.311737,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457537,
      "ems": null
    },
    {
      "latitude": 51.774353,
      "longitude": 19.311069,
      "altitude": {
        "feet": 3625,
        "meters": 1105
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457542,
      "ems": null
    },
    {
      "latitude": 51.776917,
      "longitude": 19.310402,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457548,
      "ems": null
    },
    {
      "latitude": 51.780239,
      "longitude": 19.30954,
      "altitude": {
        "feet": 3775,
        "meters": 1151
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673457556,
      "ems": null
    },
    {
      "latitude": 51.783188,
      "longitude": 19.308695,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457562,
      "ems": null
    },
    {
      "latitude": 51.786438,
      "longitude": 19.307878,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457570,
      "ems": null
    },
    {
      "latitude": 51.78923,
      "longitude": 19.307062,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457575,
      "ems": null
    },
    {
      "latitude": 51.792343,
      "longitude": 19.306244,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673457581,
      "ems": null
    },
    {
      "latitude": 51.795509,
      "longitude": 19.305267,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673457588,
      "ems": null
    },
    {
      "latitude": 51.79858,
      "longitude": 19.304352,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 348,
      "squawk": "2654",
      "timestamp": 1673457593,
      "ems": null
    },
    {
      "latitude": 51.802094,
      "longitude": 19.303127,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673457600,
      "ems": null
    },
    {
      "latitude": 51.805241,
      "longitude": 19.301987,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673457606,
      "ems": null
    },
    {
      "latitude": 51.808685,
      "longitude": 19.300766,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673457612,
      "ems": null
    },
    {
      "latitude": 51.812073,
      "longitude": 19.299564,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "2654",
      "timestamp": 1673457618,
      "ems": null
    },
    {
      "latitude": 51.81546,
      "longitude": 19.298227,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "2654",
      "timestamp": 1673457623,
      "ems": null
    },
    {
      "latitude": 51.818985,
      "longitude": 19.296892,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673457630,
      "ems": null
    },
    {
      "latitude": 51.822601,
      "longitude": 19.295555,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "2654",
      "timestamp": 1673457636,
      "ems": null
    },
    {
      "latitude": 51.825623,
      "longitude": 19.294739,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673457641,
      "ems": null
    },
    {
      "latitude": 51.827538,
      "longitude": 19.294586,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "2654",
      "timestamp": 1673457645,
      "ems": null
    },
    {
      "latitude": 51.829376,
      "longitude": 19.294813,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 7,
      "squawk": "2654",
      "timestamp": 1673457648,
      "ems": null
    },
    {
      "latitude": 51.831345,
      "longitude": 19.295555,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "2654",
      "timestamp": 1673457650,
      "ems": null
    },
    {
      "latitude": 51.833122,
      "longitude": 19.29657,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 23,
      "squawk": "2654",
      "timestamp": 1673457654,
      "ems": null
    },
    {
      "latitude": 51.834938,
      "longitude": 19.298096,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 29,
      "squawk": "2654",
      "timestamp": 1673457656,
      "ems": null
    },
    {
      "latitude": 51.8367,
      "longitude": 19.300232,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 38,
      "squawk": "2654",
      "timestamp": 1673457660,
      "ems": null
    },
    {
      "latitude": 51.837433,
      "longitude": 19.301271,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 42,
      "squawk": "2654",
      "timestamp": 1673457661,
      "ems": null
    },
    {
      "latitude": 51.837708,
      "longitude": 19.301716,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 48,
      "squawk": "2654",
      "timestamp": 1673457663,
      "ems": null
    },
    {
      "latitude": 51.839035,
      "longitude": 19.304241,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 52,
      "squawk": "2654",
      "timestamp": 1673457665,
      "ems": null
    },
    {
      "latitude": 51.839676,
      "longitude": 19.305874,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673457666,
      "ems": null
    },
    {
      "latitude": 51.84034,
      "longitude": 19.307861,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673457669,
      "ems": null
    },
    {
      "latitude": 51.841324,
      "longitude": 19.31196,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "2654",
      "timestamp": 1673457673,
      "ems": null
    },
    {
      "latitude": 51.841782,
      "longitude": 19.316254,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 81,
      "squawk": "2654",
      "timestamp": 1673457677,
      "ems": null
    },
    {
      "latitude": 51.841782,
      "longitude": 19.318939,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 92,
      "squawk": "2654",
      "timestamp": 1673457679,
      "ems": null
    },
    {
      "latitude": 51.841457,
      "longitude": 19.322357,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673457683,
      "ems": null
    },
    {
      "latitude": 51.841003,
      "longitude": 19.325323,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457686,
      "ems": null
    },
    {
      "latitude": 51.840527,
      "longitude": 19.328003,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457689,
      "ems": null
    },
    {
      "latitude": 51.839966,
      "longitude": 19.330444,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673457691,
      "ems": null
    },
    {
      "latitude": 51.839081,
      "longitude": 19.333572,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673457695,
      "ems": null
    },
    {
      "latitude": 51.838211,
      "longitude": 19.336384,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673457698,
      "ems": null
    },
    {
      "latitude": 51.837452,
      "longitude": 19.338684,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 117,
      "squawk": "2654",
      "timestamp": 1673457700,
      "ems": null
    },
    {
      "latitude": 51.836475,
      "longitude": 19.341507,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673457704,
      "ems": null
    },
    {
      "latitude": 51.835693,
      "longitude": 19.343731,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673457706,
      "ems": null
    },
    {
      "latitude": 51.834846,
      "longitude": 19.346161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673457709,
      "ems": null
    },
    {
      "latitude": 51.833908,
      "longitude": 19.349003,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673457713,
      "ems": null
    },
    {
      "latitude": 51.833122,
      "longitude": 19.351273,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673457715,
      "ems": null
    },
    {
      "latitude": 51.832241,
      "longitude": 19.353867,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673457718,
      "ems": null
    },
    {
      "latitude": 51.831299,
      "longitude": 19.356573,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673457721,
      "ems": null
    },
    {
      "latitude": 51.829376,
      "longitude": 19.362141,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673457728,
      "ems": null
    },
    {
      "latitude": 51.827591,
      "longitude": 19.366966,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673457734,
      "ems": null
    },
    {
      "latitude": 51.825813,
      "longitude": 19.371796,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673457740,
      "ems": null
    },
    {
      "latitude": 51.823792,
      "longitude": 19.377136,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673457746,
      "ems": null
    },
    {
      "latitude": 51.821857,
      "longitude": 19.382019,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673457752,
      "ems": null
    },
    {
      "latitude": 51.82032,
      "longitude": 19.387283,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673457758,
      "ems": null
    },
    {
      "latitude": 51.819809,
      "longitude": 19.390053,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457761,
      "ems": null
    },
    {
      "latitude": 51.819439,
      "longitude": 19.393234,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673457764,
      "ems": null
    },
    {
      "latitude": 51.819031,
      "longitude": 19.396288,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673457767,
      "ems": null
    },
    {
      "latitude": 51.8186,
      "longitude": 19.399643,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673457770,
      "ems": null
    },
    {
      "latitude": 51.81818,
      "longitude": 19.402618,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673457773,
      "ems": null
    },
    {
      "latitude": 51.817795,
      "longitude": 19.405493,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673457776,
      "ems": null
    },
    {
      "latitude": 51.81739,
      "longitude": 19.408569,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673457779,
      "ems": null
    },
    {
      "latitude": 51.816925,
      "longitude": 19.411545,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673457782,
      "ems": null
    },
    {
      "latitude": 51.816505,
      "longitude": 19.41452,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673457785,
      "ems": null
    },
    {
      "latitude": 51.815666,
      "longitude": 19.420471,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673457791,
      "ems": null
    },
    {
      "latitude": 51.814827,
      "longitude": 19.426041,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457797,
      "ems": null
    },
    {
      "latitude": 51.813805,
      "longitude": 19.43222,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457803,
      "ems": null
    },
    {
      "latitude": 51.812851,
      "longitude": 19.438229,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457809,
      "ems": null
    },
    {
      "latitude": 51.81189,
      "longitude": 19.444019,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673457815,
      "ems": null
    },
    {
      "latitude": 51.810837,
      "longitude": 19.449884,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673457821,
      "ems": null
    },
    {
      "latitude": 51.809784,
      "longitude": 19.455971,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673457827,
      "ems": null
    },
    {
      "latitude": 51.808777,
      "longitude": 19.461517,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673457833,
      "ems": null
    },
    {
      "latitude": 51.807678,
      "longitude": 19.467327,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673457839,
      "ems": null
    },
    {
      "latitude": 51.806541,
      "longitude": 19.473114,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673457845,
      "ems": null
    },
    {
      "latitude": 51.805344,
      "longitude": 19.478983,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457851,
      "ems": null
    },
    {
      "latitude": 51.804073,
      "longitude": 19.484863,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673457857,
      "ems": null
    },
    {
      "latitude": 51.802864,
      "longitude": 19.490509,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673457863,
      "ems": null
    },
    {
      "latitude": 51.801792,
      "longitude": 19.49646,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673457869,
      "ems": null
    },
    {
      "latitude": 51.800766,
      "longitude": 19.502514,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673457875,
      "ems": null
    },
    {
      "latitude": 51.800262,
      "longitude": 19.505558,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457878,
      "ems": null
    },
    {
      "latitude": 51.799793,
      "longitude": 19.508438,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457881,
      "ems": null
    },
    {
      "latitude": 51.799301,
      "longitude": 19.51157,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457884,
      "ems": null
    },
    {
      "latitude": 51.798813,
      "longitude": 19.514465,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457887,
      "ems": null
    },
    {
      "latitude": 51.797882,
      "longitude": 19.520569,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673457894,
      "ems": null
    },
    {
      "latitude": 51.796921,
      "longitude": 19.52701,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457899,
      "ems": null
    },
    {
      "latitude": 51.795929,
      "longitude": 19.533005,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457906,
      "ems": null
    },
    {
      "latitude": 51.795044,
      "longitude": 19.538591,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673457911,
      "ems": null
    },
    {
      "latitude": 51.794022,
      "longitude": 19.544525,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673457917,
      "ems": null
    },
    {
      "latitude": 51.792938,
      "longitude": 19.550468,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673457924,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 19.555962,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673457930,
      "ems": null
    },
    {
      "latitude": 51.790924,
      "longitude": 19.561083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457935,
      "ems": null
    },
    {
      "latitude": 51.789734,
      "longitude": 19.566725,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457942,
      "ems": null
    },
    {
      "latitude": 51.788589,
      "longitude": 19.572292,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457948,
      "ems": null
    },
    {
      "latitude": 51.787354,
      "longitude": 19.578083,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457954,
      "ems": null
    },
    {
      "latitude": 51.786163,
      "longitude": 19.583649,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673457960,
      "ems": null
    },
    {
      "latitude": 51.784973,
      "longitude": 19.589216,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673457966,
      "ems": null
    },
    {
      "latitude": 51.783684,
      "longitude": 19.595032,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673457972,
      "ems": null
    },
    {
      "latitude": 51.78252,
      "longitude": 19.60022,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673457978,
      "ems": null
    },
    {
      "latitude": 51.781219,
      "longitude": 19.60577,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673457984,
      "ems": null
    },
    {
      "latitude": 51.780029,
      "longitude": 19.610968,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673457990,
      "ems": null
    },
    {
      "latitude": 51.778706,
      "longitude": 19.616623,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673457996,
      "ems": null
    },
    {
      "latitude": 51.777374,
      "longitude": 19.62225,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673458002,
      "ems": null
    },
    {
      "latitude": 51.77623,
      "longitude": 19.627743,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673458008,
      "ems": null
    },
    {
      "latitude": 51.775864,
      "longitude": 19.630194,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673458011,
      "ems": null
    },
    {
      "latitude": 51.775635,
      "longitude": 19.633533,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 95,
      "squawk": "2654",
      "timestamp": 1673458014,
      "ems": null
    },
    {
      "latitude": 51.775589,
      "longitude": 19.636503,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 89,
      "squawk": "2654",
      "timestamp": 1673458017,
      "ems": null
    },
    {
      "latitude": 51.775726,
      "longitude": 19.639587,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 84,
      "squawk": "2654",
      "timestamp": 1673458020,
      "ems": null
    },
    {
      "latitude": 51.776005,
      "longitude": 19.642334,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 78,
      "squawk": "2654",
      "timestamp": 1673458023,
      "ems": null
    },
    {
      "latitude": 51.77647,
      "longitude": 19.645157,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 74,
      "squawk": "2654",
      "timestamp": 1673458026,
      "ems": null
    },
    {
      "latitude": 51.777054,
      "longitude": 19.647785,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 68,
      "squawk": "2654",
      "timestamp": 1673458029,
      "ems": null
    },
    {
      "latitude": 51.777958,
      "longitude": 19.651108,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673458032,
      "ems": null
    },
    {
      "latitude": 51.778751,
      "longitude": 19.653931,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673458035,
      "ems": null
    },
    {
      "latitude": 51.77948,
      "longitude": 19.656397,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673458038,
      "ems": null
    },
    {
      "latitude": 51.78035,
      "longitude": 19.659367,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673458041,
      "ems": null
    },
    {
      "latitude": 51.781124,
      "longitude": 19.662018,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673458044,
      "ems": null
    },
    {
      "latitude": 51.782135,
      "longitude": 19.66523,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673458047,
      "ems": null
    },
    {
      "latitude": 51.782867,
      "longitude": 19.667606,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673458050,
      "ems": null
    },
    {
      "latitude": 51.783779,
      "longitude": 19.670486,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 62,
      "squawk": "2654",
      "timestamp": 1673458053,
      "ems": null
    },
    {
      "latitude": 51.784199,
      "longitude": 19.671783,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 61,
      "squawk": "2654",
      "timestamp": 1673458054,
      "ems": null
    },
    {
      "latitude": 51.785267,
      "longitude": 19.674835,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673458058,
      "ems": null
    },
    {
      "latitude": 51.786247,
      "longitude": 19.677429,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673458061,
      "ems": null
    },
    {
      "latitude": 51.787037,
      "longitude": 19.679413,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673458063,
      "ems": null
    },
    {
      "latitude": 51.7882,
      "longitude": 19.682465,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673458067,
      "ems": null
    },
    {
      "latitude": 51.790157,
      "longitude": 19.688339,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 61,
      "squawk": "2654",
      "timestamp": 1673458073,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 19.693586,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673458079,
      "ems": null
    },
    {
      "latitude": 51.793488,
      "longitude": 19.697968,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673458084,
      "ems": null
    },
    {
      "latitude": 51.796486,
      "longitude": 19.706421,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "2654",
      "timestamp": 1673458094,
      "ems": null
    },
    {
      "latitude": 51.798752,
      "longitude": 19.711477,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "2654",
      "timestamp": 1673458100,
      "ems": null
    },
    {
      "latitude": 51.800079,
      "longitude": 19.713482,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 41,
      "squawk": "2654",
      "timestamp": 1673458103,
      "ems": null
    },
    {
      "latitude": 51.801544,
      "longitude": 19.715263,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 34,
      "squawk": "2654",
      "timestamp": 1673458106,
      "ems": null
    },
    {
      "latitude": 51.803467,
      "longitude": 19.71697,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "2654",
      "timestamp": 1673458109,
      "ems": null
    },
    {
      "latitude": 51.805332,
      "longitude": 19.71817,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "2654",
      "timestamp": 1673458112,
      "ems": null
    },
    {
      "latitude": 51.807148,
      "longitude": 19.719009,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 13,
      "squawk": "2654",
      "timestamp": 1673458115,
      "ems": null
    },
    {
      "latitude": 51.80901,
      "longitude": 19.719467,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 7,
      "squawk": "2654",
      "timestamp": 1673458118,
      "ems": null
    },
    {
      "latitude": 51.810699,
      "longitude": 19.719568,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "2654",
      "timestamp": 1673458121,
      "ems": null
    },
    {
      "latitude": 51.812733,
      "longitude": 19.719238,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673458124,
      "ems": null
    },
    {
      "latitude": 51.814407,
      "longitude": 19.718529,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673458127,
      "ems": null
    },
    {
      "latitude": 51.816055,
      "longitude": 19.717415,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "2654",
      "timestamp": 1673458130,
      "ems": null
    },
    {
      "latitude": 51.81752,
      "longitude": 19.715931,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673458133,
      "ems": null
    },
    {
      "latitude": 51.818848,
      "longitude": 19.714075,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "2654",
      "timestamp": 1673458136,
      "ems": null
    },
    {
      "latitude": 51.819901,
      "longitude": 19.71207,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 307,
      "squawk": "2654",
      "timestamp": 1673458139,
      "ems": null
    },
    {
      "latitude": 51.820724,
      "longitude": 19.709919,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 301,
      "squawk": "2654",
      "timestamp": 1673458142,
      "ems": null
    },
    {
      "latitude": 51.821301,
      "longitude": 19.707794,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 290,
      "squawk": "2654",
      "timestamp": 1673458145,
      "ems": null
    },
    {
      "latitude": 51.821579,
      "longitude": 19.705429,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 280,
      "squawk": "2654",
      "timestamp": 1673458148,
      "ems": null
    },
    {
      "latitude": 51.821625,
      "longitude": 19.702835,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673458151,
      "ems": null
    },
    {
      "latitude": 51.821438,
      "longitude": 19.70108,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673458154,
      "ems": null
    },
    {
      "latitude": 51.820835,
      "longitude": 19.698792,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458157,
      "ems": null
    },
    {
      "latitude": 51.820183,
      "longitude": 19.697189,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 233,
      "squawk": "2654",
      "timestamp": 1673458160,
      "ems": null
    },
    {
      "latitude": 51.819031,
      "longitude": 19.695442,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 220,
      "squawk": "2654",
      "timestamp": 1673458163,
      "ems": null
    },
    {
      "latitude": 51.818134,
      "longitude": 19.694443,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 208,
      "squawk": "2654",
      "timestamp": 1673458166,
      "ems": null
    },
    {
      "latitude": 51.81665,
      "longitude": 19.693439,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673458169,
      "ems": null
    },
    {
      "latitude": 51.816055,
      "longitude": 19.693068,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 202,
      "squawk": "2654",
      "timestamp": 1673458170,
      "ems": null
    },
    {
      "latitude": 51.814453,
      "longitude": 19.692251,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 197,
      "squawk": "2654",
      "timestamp": 1673458174,
      "ems": null
    },
    {
      "latitude": 51.813263,
      "longitude": 19.691656,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 196,
      "squawk": "2654",
      "timestamp": 1673458177,
      "ems": null
    },
    {
      "latitude": 51.811752,
      "longitude": 19.690989,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673458180,
      "ems": null
    },
    {
      "latitude": 51.810562,
      "longitude": 19.69047,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 194,
      "squawk": "2654",
      "timestamp": 1673458183,
      "ems": null
    },
    {
      "latitude": 51.809052,
      "longitude": 19.689875,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673458186,
      "ems": null
    },
    {
      "latitude": 51.8078,
      "longitude": 19.689407,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673458189,
      "ems": null
    },
    {
      "latitude": 51.806263,
      "longitude": 19.688721,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673458192,
      "ems": null
    },
    {
      "latitude": 51.805023,
      "longitude": 19.688242,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 194,
      "squawk": "2654",
      "timestamp": 1673458195,
      "ems": null
    },
    {
      "latitude": 51.803558,
      "longitude": 19.687574,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 194,
      "squawk": "2654",
      "timestamp": 1673458198,
      "ems": null
    },
    {
      "latitude": 51.80212,
      "longitude": 19.686966,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 194,
      "squawk": "2654",
      "timestamp": 1673458201,
      "ems": null
    },
    {
      "latitude": 51.799374,
      "longitude": 19.685822,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 195,
      "squawk": "2654",
      "timestamp": 1673458207,
      "ems": null
    },
    {
      "latitude": 51.796627,
      "longitude": 19.684372,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 198,
      "squawk": "2654",
      "timestamp": 1673458213,
      "ems": null
    },
    {
      "latitude": 51.795273,
      "longitude": 19.683565,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 200,
      "squawk": "2654",
      "timestamp": 1673458216,
      "ems": null
    },
    {
      "latitude": 51.794037,
      "longitude": 19.682749,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 204,
      "squawk": "2654",
      "timestamp": 1673458219,
      "ems": null
    },
    {
      "latitude": 51.792904,
      "longitude": 19.681549,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 215,
      "squawk": "2654",
      "timestamp": 1673458222,
      "ems": null
    },
    {
      "latitude": 51.792068,
      "longitude": 19.680225,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 230,
      "squawk": "2654",
      "timestamp": 1673458225,
      "ems": null
    },
    {
      "latitude": 51.791199,
      "longitude": 19.678295,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673458228,
      "ems": null
    },
    {
      "latitude": 51.790527,
      "longitude": 19.676056,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458231,
      "ems": null
    },
    {
      "latitude": 51.789829,
      "longitude": 19.673691,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458234,
      "ems": null
    },
    {
      "latitude": 51.789177,
      "longitude": 19.671707,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458237,
      "ems": null
    },
    {
      "latitude": 51.78862,
      "longitude": 19.669724,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458240,
      "ems": null
    },
    {
      "latitude": 51.788155,
      "longitude": 19.667969,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458243,
      "ems": null
    },
    {
      "latitude": 51.787628,
      "longitude": 19.665974,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458246,
      "ems": null
    },
    {
      "latitude": 51.786991,
      "longitude": 19.663544,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458249,
      "ems": null
    },
    {
      "latitude": 51.786438,
      "longitude": 19.661444,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458252,
      "ems": null
    },
    {
      "latitude": 51.785919,
      "longitude": 19.6595,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458255,
      "ems": null
    },
    {
      "latitude": 51.784882,
      "longitude": 19.655432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458261,
      "ems": null
    },
    {
      "latitude": 51.784382,
      "longitude": 19.65332,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458264,
      "ems": null
    },
    {
      "latitude": 51.783417,
      "longitude": 19.649122,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673458270,
      "ems": null
    },
    {
      "latitude": 51.782475,
      "longitude": 19.645004,
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458276,
      "ems": null
    },
    {
      "latitude": 51.781448,
      "longitude": 19.641106,
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458283,
      "ems": null
    },
    {
      "latitude": 51.780304,
      "longitude": 19.637096,
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458288,
      "ems": null
    },
    {
      "latitude": 51.779171,
      "longitude": 19.63295,
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458295,
      "ems": null
    },
    {
      "latitude": 51.778107,
      "longitude": 19.629154,
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458300,
      "ems": null
    },
    {
      "latitude": 51.777542,
      "longitude": 19.626999,
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458304,
      "ems": null
    },
    {
      "latitude": 51.776981,
      "longitude": 19.625168,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673458306,
      "ems": null
    },
    {
      "latitude": 51.776283,
      "longitude": 19.623184,
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673458310,
      "ems": null
    },
    {
      "latitude": 51.775539,
      "longitude": 19.621353,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673458313,
      "ems": null
    },
    {
      "latitude": 51.774765,
      "longitude": 19.619503,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673458316,
      "ems": null
    },
    {
      "latitude": 51.774002,
      "longitude": 19.617615,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 235,
      "squawk": "2654",
      "timestamp": 1673458319,
      "ems": null
    },
    {
      "latitude": 51.773346,
      "longitude": 19.616014,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673458322,
      "ems": null
    },
    {
      "latitude": 51.772614,
      "longitude": 19.614159,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673458325,
      "ems": null
    },
    {
      "latitude": 51.771816,
      "longitude": 19.611893,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673458328,
      "ems": null
    },
    {
      "latitude": 51.771149,
      "longitude": 19.610077,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673458331,
      "ems": null
    },
    {
      "latitude": 51.770508,
      "longitude": 19.608295,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673458334,
      "ems": null
    },
    {
      "latitude": 51.769161,
      "longitude": 19.604492,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673458340,
      "ems": null
    },
    {
      "latitude": 51.768555,
      "longitude": 19.602509,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458343,
      "ems": null
    },
    {
      "latitude": 51.767857,
      "longitude": 19.600296,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458346,
      "ems": null
    },
    {
      "latitude": 51.7673,
      "longitude": 19.598465,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458349,
      "ems": null
    },
    {
      "latitude": 51.766663,
      "longitude": 19.596416,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458352,
      "ems": null
    },
    {
      "latitude": 51.766087,
      "longitude": 19.594498,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458355,
      "ems": null
    },
    {
      "latitude": 51.765575,
      "longitude": 19.592743,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458358,
      "ems": null
    },
    {
      "latitude": 51.764923,
      "longitude": 19.59033,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458361,
      "ems": null
    },
    {
      "latitude": 51.764458,
      "longitude": 19.588547,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458364,
      "ems": null
    },
    {
      "latitude": 51.763855,
      "longitude": 19.586029,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458367,
      "ems": null
    },
    {
      "latitude": 51.763367,
      "longitude": 19.584021,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458370,
      "ems": null
    },
    {
      "latitude": 51.762829,
      "longitude": 19.581909,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458373,
      "ems": null
    },
    {
      "latitude": 51.76236,
      "longitude": 19.57979,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458376,
      "ems": null
    },
    {
      "latitude": 51.761856,
      "longitude": 19.577637,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458379,
      "ems": null
    },
    {
      "latitude": 51.76149,
      "longitude": 19.575558,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673458382,
      "ems": null
    },
    {
      "latitude": 51.761124,
      "longitude": 19.573332,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458385,
      "ems": null
    },
    {
      "latitude": 51.760803,
      "longitude": 19.571104,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673458388,
      "ems": null
    },
    {
      "latitude": 51.760548,
      "longitude": 19.569244,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673458391,
      "ems": null
    },
    {
      "latitude": 51.760223,
      "longitude": 19.566879,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673458394,
      "ems": null
    },
    {
      "latitude": 51.759895,
      "longitude": 19.564438,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673458397,
      "ems": null
    },
    {
      "latitude": 51.759567,
      "longitude": 19.562122,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673458400,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.560341,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458403,
      "ems": null
    },
    {
      "latitude": 51.758926,
      "longitude": 19.558039,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458406,
      "ems": null
    },
    {
      "latitude": 51.758606,
      "longitude": 19.55559,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458409,
      "ems": null
    },
    {
      "latitude": 51.757801,
      "longitude": 19.551239,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458415,
      "ems": null
    },
    {
      "latitude": 51.757336,
      "longitude": 19.549255,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458418,
      "ems": null
    },
    {
      "latitude": 51.756912,
      "longitude": 19.547424,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458421,
      "ems": null
    },
    {
      "latitude": 51.756317,
      "longitude": 19.545271,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458424,
      "ems": null
    },
    {
      "latitude": 51.755802,
      "longitude": 19.543228,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458427,
      "ems": null
    },
    {
      "latitude": 51.75531,
      "longitude": 19.541338,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458430,
      "ems": null
    },
    {
      "latitude": 51.754807,
      "longitude": 19.539482,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458433,
      "ems": null
    },
    {
      "latitude": 51.754166,
      "longitude": 19.537254,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458437,
      "ems": null
    },
    {
      "latitude": 51.753704,
      "longitude": 19.535522,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458439,
      "ems": null
    },
    {
      "latitude": 51.753147,
      "longitude": 19.533615,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458443,
      "ems": null
    },
    {
      "latitude": 51.752609,
      "longitude": 19.53191,
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458445,
      "ems": null
    },
    {
      "latitude": 51.752106,
      "longitude": 19.530277,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458448,
      "ems": null
    },
    {
      "latitude": 51.751472,
      "longitude": 19.528275,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673458452,
      "ems": null
    },
    {
      "latitude": 51.750412,
      "longitude": 19.524858,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458457,
      "ems": null
    },
    {
      "latitude": 51.749374,
      "longitude": 19.521561,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458463,
      "ems": null
    },
    {
      "latitude": 51.748352,
      "longitude": 19.518251,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458470,
      "ems": null
    },
    {
      "latitude": 51.74794,
      "longitude": 19.516619,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458473,
      "ems": null
    },
    {
      "latitude": 51.747654,
      "longitude": 19.514999,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458475,
      "ems": null
    },
    {
      "latitude": 51.747482,
      "longitude": 19.513277,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673458478,
      "ems": null
    },
    {
      "latitude": 51.747421,
      "longitude": 19.511719,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 264,
      "squawk": "2654",
      "timestamp": 1673458481,
      "ems": null
    },
    {
      "latitude": 51.747253,
      "longitude": 19.51016,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 259,
      "squawk": "2654",
      "timestamp": 1673458484,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.50882,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673458488,
      "ems": null
    },
    {
      "latitude": 51.746769,
      "longitude": 19.507523,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458491,
      "ems": null
    },
    {
      "latitude": 51.746475,
      "longitude": 19.506002,
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458494,
      "ems": null
    },
    {
      "latitude": 51.746155,
      "longitude": 19.504667,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458496,
      "ems": null
    },
    {
      "latitude": 51.745464,
      "longitude": 19.501801,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458503,
      "ems": null
    },
    {
      "latitude": 51.745102,
      "longitude": 19.500584,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458506,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.499174,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673458509,
      "ems": null
    },
    {
      "latitude": 51.744209,
      "longitude": 19.497833,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673458512,
      "ems": null
    },
    {
      "latitude": 51.743774,
      "longitude": 19.496428,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458515,
      "ems": null
    },
    {
      "latitude": 51.743317,
      "longitude": 19.494867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458518,
      "ems": null
    },
    {
      "latitude": 51.742905,
      "longitude": 19.493532,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458521,
      "ems": null
    },
    {
      "latitude": 51.742447,
      "longitude": 19.491899,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673458524,
      "ems": null
    },
    {
      "latitude": 51.741669,
      "longitude": 19.489079,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458530,
      "ems": null
    },
    {
      "latitude": 51.740753,
      "longitude": 19.485737,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458536,
      "ems": null
    },
    {
      "latitude": 51.740387,
      "longitude": 19.484104,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458539,
      "ems": null
    },
    {
      "latitude": 51.73988,
      "longitude": 19.482193,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458542,
      "ems": null
    },
    {
      "latitude": 51.739197,
      "longitude": 19.479279,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458548,
      "ems": null
    },
    {
      "latitude": 51.738857,
      "longitude": 19.47731,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673458551,
      "ems": null
    },
    {
      "latitude": 51.73851,
      "longitude": 19.475567,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458554,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.47386,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458557,
      "ems": null
    },
    {
      "latitude": 51.737778,
      "longitude": 19.472004,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458560,
      "ems": null
    },
    {
      "latitude": 51.737457,
      "longitude": 19.470367,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673458563,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.467163,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458569,
      "ems": null
    },
    {
      "latitude": 51.73613,
      "longitude": 19.464434,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458574,
      "ems": null
    },
    {
      "latitude": 51.735596,
      "longitude": 19.46228,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673458578,
      "ems": null
    },
    {
      "latitude": 51.735168,
      "longitude": 19.460722,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673458581,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.459162,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458584,
      "ems": null
    },
    {
      "latitude": 51.734207,
      "longitude": 19.457678,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673458587,
      "ems": null
    },
    {
      "latitude": 51.733429,
      "longitude": 19.454487,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458593,
      "ems": null
    },
    {
      "latitude": 51.7332,
      "longitude": 19.453224,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673458596,
      "ems": null
    },
    {
      "latitude": 51.73288,
      "longitude": 19.450848,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673458599,
      "ems": null
    },
    {
      "latitude": 51.732758,
      "longitude": 19.449539,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673458601,
      "ems": null
    },
    {
      "latitude": 51.732513,
      "longitude": 19.446989,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673458605,
      "ems": null
    },
    {
      "latitude": 51.73243,
      "longitude": 19.446411,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "squawk": "2654",
      "timestamp": 1673458608,
      "ems": null
    },
    {
      "latitude": 51.732193,
      "longitude": 19.444242,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673458611,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.442673,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673458612,
      "ems": null
    },
    {
      "latitude": 51.731552,
      "longitude": 19.44068,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458616,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 19.435705,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458624,
      "ems": null
    },
    {
      "latitude": 51.729916,
      "longitude": 19.433517,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458628,
      "ems": null
    },
    {
      "latitude": 51.729401,
      "longitude": 19.431475,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458632,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.429474,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673458636,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.426956,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458640,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.422302,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458648,
      "ems": null
    },
    {
      "latitude": 51.726563,
      "longitude": 19.418854,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673458654,
      "ems": null
    },
    {
      "latitude": 51.725773,
      "longitude": 19.415436,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673458660,
      "ems": null
    },
    {
      "latitude": 51.725006,
      "longitude": 19.4121,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458666,
      "ems": null
    },
    {
      "latitude": 51.724239,
      "longitude": 19.408112,
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458672,
      "ems": null
    },
    {
      "latitude": 51.723358,
      "longitude": 19.40423,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458678,
      "ems": null
    },
    {
      "latitude": 51.722534,
      "longitude": 19.400148,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673458684,
      "ems": null
    },
    {
      "latitude": 51.721802,
      "longitude": 19.396362,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458690,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.391983,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673458696,
      "ems": null
    },
    {
      "latitude": 51.719971,
      "longitude": 19.387455,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673458703,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.383297,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673458709,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.379585,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673458714,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.375429,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458721,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.371569,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673458727,
      "ems": null
    },
    {
      "latitude": 51.715714,
      "longitude": 19.367559,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673458733,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 19.365778,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673458736,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.363922,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 259,
      "squawk": "2654",
      "timestamp": 1673458739,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.363251,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673458740,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 19.361473,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673458743,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.359436,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 271,
      "squawk": "2654",
      "timestamp": 1673458746,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.357758,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 273,
      "squawk": "2654",
      "timestamp": 1673458749,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.35585,
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
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 277,
      "squawk": "2654",
      "timestamp": 1673458752,
      "ems": null
    },
    {
      "latitude": 51.71558,
      "longitude": 19.354095,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 285,
      "squawk": "2654",
      "timestamp": 1673458755,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.35264,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 290,
      "squawk": "2654",
      "timestamp": 1673458758,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.350636,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 294,
      "squawk": "2654",
      "timestamp": 1673458761,
      "ems": null
    },
    {
      "latitude": 51.717133,
      "longitude": 19.348705,
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
      "heading": 300,
      "squawk": "2654",
      "timestamp": 1673458764,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.347,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 304,
      "squawk": "2654",
      "timestamp": 1673458767,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.345514,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 308,
      "squawk": "2654",
      "timestamp": 1673458770,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.34388,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 313,
      "squawk": "2654",
      "timestamp": 1673458773,
      "ems": null
    },
    {
      "latitude": 51.720512,
      "longitude": 19.342346,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 318,
      "squawk": "2654",
      "timestamp": 1673458776,
      "ems": null
    },
    {
      "latitude": 51.721771,
      "longitude": 19.34082,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 325,
      "squawk": "2654",
      "timestamp": 1673458779,
      "ems": null
    },
    {
      "latitude": 51.722748,
      "longitude": 19.339905,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 331,
      "squawk": "2654",
      "timestamp": 1673458782,
      "ems": null
    },
    {
      "latitude": 51.724319,
      "longitude": 19.338833,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673458785,
      "ems": null
    },
    {
      "latitude": 51.725449,
      "longitude": 19.338303,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673458788,
      "ems": null
    },
    {
      "latitude": 51.726196,
      "longitude": 19.338017,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673458790,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.337234,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673458794,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 19.336929,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673458797,
      "ems": null
    },
    {
      "latitude": 51.731827,
      "longitude": 19.3367,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458800,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 19.336395,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "2654",
      "timestamp": 1673458803,
      "ems": null
    },
    {
      "latitude": 51.735409,
      "longitude": 19.33609,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458806,
      "ems": null
    },
    {
      "latitude": 51.737087,
      "longitude": 19.335785,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458809,
      "ems": null
    },
    {
      "latitude": 51.738762,
      "longitude": 19.33548,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458812,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.335121,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458815,
      "ems": null
    },
    {
      "latitude": 51.742081,
      "longitude": 19.334824,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 353,
      "squawk": "2654",
      "timestamp": 1673458818,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 19.334454,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673458821,
      "ems": null
    },
    {
      "latitude": 51.747097,
      "longitude": 19.333725,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673458827,
      "ems": null
    },
    {
      "latitude": 51.750492,
      "longitude": 19.333038,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673458833,
      "ems": null
    },
    {
      "latitude": 51.754356,
      "longitude": 19.332199,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673458839,
      "ems": null
    },
    {
      "latitude": 51.757919,
      "longitude": 19.331261,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673458845,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 19.330292,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673458851,
      "ems": null
    },
    {
      "latitude": 51.764923,
      "longitude": 19.329035,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "2654",
      "timestamp": 1673458857,
      "ems": null
    },
    {
      "latitude": 51.766342,
      "longitude": 19.328291,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673458860,
      "ems": null
    },
    {
      "latitude": 51.768044,
      "longitude": 19.327469,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673458863,
      "ems": null
    },
    {
      "latitude": 51.76973,
      "longitude": 19.326658,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673458866,
      "ems": null
    },
    {
      "latitude": 51.771194,
      "longitude": 19.325842,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673458869,
      "ems": null
    },
    {
      "latitude": 51.773071,
      "longitude": 19.324799,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673458873,
      "ems": null
    },
    {
      "latitude": 51.774353,
      "longitude": 19.323986,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673458875,
      "ems": null
    },
    {
      "latitude": 51.775909,
      "longitude": 19.323021,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 338,
      "squawk": "2654",
      "timestamp": 1673458878,
      "ems": null
    },
    {
      "latitude": 51.777466,
      "longitude": 19.322056,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673458881,
      "ems": null
    },
    {
      "latitude": 51.777969,
      "longitude": 19.321686,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673458882,
      "ems": null
    },
    {
      "latitude": 51.778423,
      "longitude": 19.321365,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 335,
      "squawk": "2654",
      "timestamp": 1673458885,
      "ems": null
    },
    {
      "latitude": 51.781311,
      "longitude": 19.31916,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458889,
      "ems": null
    },
    {
      "latitude": 51.782272,
      "longitude": 19.318419,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458891,
      "ems": null
    },
    {
      "latitude": 51.784149,
      "longitude": 19.317009,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458895,
      "ems": null
    },
    {
      "latitude": 51.7855,
      "longitude": 19.315948,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458898,
      "ems": null
    },
    {
      "latitude": 51.78804,
      "longitude": 19.314337,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458903,
      "ems": null
    },
    {
      "latitude": 51.788246,
      "longitude": 19.31427,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673458904,
      "ems": null
    },
    {
      "latitude": 51.790283,
      "longitude": 19.313223,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673458908,
      "ems": null
    },
    {
      "latitude": 51.791885,
      "longitude": 19.312481,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 345,
      "squawk": "2654",
      "timestamp": 1673458912,
      "ems": null
    },
    {
      "latitude": 51.793369,
      "longitude": 19.311905,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 346,
      "squawk": "2654",
      "timestamp": 1673458915,
      "ems": null
    },
    {
      "latitude": 51.794533,
      "longitude": 19.311523,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673458918,
      "ems": null
    },
    {
      "latitude": 51.795868,
      "longitude": 19.311069,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673458921,
      "ems": null
    },
    {
      "latitude": 51.797516,
      "longitude": 19.310625,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673458924,
      "ems": null
    },
    {
      "latitude": 51.798157,
      "longitude": 19.310476,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673458926,
      "ems": null
    },
    {
      "latitude": 51.800072,
      "longitude": 19.309845,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 348,
      "squawk": "2654",
      "timestamp": 1673458930,
      "ems": null
    },
    {
      "latitude": 51.801327,
      "longitude": 19.309464,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673458933,
      "ems": null
    },
    {
      "latitude": 51.802631,
      "longitude": 19.309006,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673458936,
      "ems": null
    },
    {
      "latitude": 51.805099,
      "longitude": 19.308167,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673458942,
      "ems": null
    },
    {
      "latitude": 51.807755,
      "longitude": 19.307327,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673458948,
      "ems": null
    },
    {
      "latitude": 51.810654,
      "longitude": 19.306467,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "squawk": "2654",
      "timestamp": 1673458954,
      "ems": null
    },
    {
      "latitude": 51.813293,
      "longitude": 19.305878,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "squawk": "2654",
      "timestamp": 1673458960,
      "ems": null
    },
    {
      "latitude": 51.814865,
      "longitude": 19.305502,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "squawk": "2654",
      "timestamp": 1673458963,
      "ems": null
    },
    {
      "latitude": 51.815575,
      "longitude": 19.30542,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "squawk": "2654",
      "timestamp": 1673458965,
      "ems": null
    },
    {
      "latitude": 51.818756,
      "longitude": 19.304686,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "squawk": "2654",
      "timestamp": 1673458972,
      "ems": null
    },
    {
      "latitude": 51.821018,
      "longitude": 19.303894,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673458977,
      "ems": null
    },
    {
      "latitude": 51.822739,
      "longitude": 19.303053,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673458981,
      "ems": null
    },
    {
      "latitude": 51.824112,
      "longitude": 19.302162,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673458984,
      "ems": null
    },
    {
      "latitude": 51.825165,
      "longitude": 19.301529,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673458987,
      "ems": null
    },
    {
      "latitude": 51.82642,
      "longitude": 19.300766,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673458990,
      "ems": null
    },
    {
      "latitude": 51.827637,
      "longitude": 19.300158,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673458993,
      "ems": null
    },
    {
      "latitude": 51.828609,
      "longitude": 19.299698,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673458996,
      "ems": null
    },
    {
      "latitude": 51.830017,
      "longitude": 19.299044,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 345,
      "squawk": "2654",
      "timestamp": 1673459000,
      "ems": null
    },
    {
      "latitude": 51.832489,
      "longitude": 19.298153,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673459005,
      "ems": null
    },
    {
      "latitude": 51.833729,
      "longitude": 19.297714,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 349,
      "squawk": "2654",
      "timestamp": 1673459009,
      "ems": null
    },
    {
      "latitude": 51.834892,
      "longitude": 19.297409,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673459012,
      "ems": null
    },
    {
      "latitude": 51.836243,
      "longitude": 19.297113,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673459015,
      "ems": null
    },
    {
      "latitude": 51.837498,
      "longitude": 19.296799,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673459018,
      "ems": null
    },
    {
      "latitude": 51.838615,
      "longitude": 19.29657,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 351,
      "squawk": "2654",
      "timestamp": 1673459020,
      "ems": null
    },
    {
      "latitude": 51.840012,
      "longitude": 19.296265,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673459024,
      "ems": null
    },
    {
      "latitude": 51.841232,
      "longitude": 19.296001,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 354,
      "squawk": "2654",
      "timestamp": 1673459027,
      "ems": null
    },
    {
      "latitude": 51.842514,
      "longitude": 19.295853,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 356,
      "squawk": "2654",
      "timestamp": 1673459030,
      "ems": null
    },
    {
      "latitude": 51.843796,
      "longitude": 19.295853,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 356,
      "squawk": "2654",
      "timestamp": 1673459033,
      "ems": null
    },
    {
      "latitude": 51.845181,
      "longitude": 19.296036,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "2654",
      "timestamp": 1673459036,
      "ems": null
    },
    {
      "latitude": 51.846577,
      "longitude": 19.296265,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 8,
      "squawk": "2654",
      "timestamp": 1673459039,
      "ems": null
    },
    {
      "latitude": 51.848099,
      "longitude": 19.296743,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 12,
      "squawk": "2654",
      "timestamp": 1673459042,
      "ems": null
    },
    {
      "latitude": 51.849369,
      "longitude": 19.297256,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 15,
      "squawk": "2654",
      "timestamp": 1673459045,
      "ems": null
    },
    {
      "latitude": 51.850754,
      "longitude": 19.297932,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 18,
      "squawk": "2654",
      "timestamp": 1673459048,
      "ems": null
    },
    {
      "latitude": 51.852348,
      "longitude": 19.298935,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 23,
      "squawk": "2654",
      "timestamp": 1673459051,
      "ems": null
    },
    {
      "latitude": 51.853561,
      "longitude": 19.300003,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 30,
      "squawk": "2654",
      "timestamp": 1673459054,
      "ems": null
    },
    {
      "latitude": 51.854862,
      "longitude": 19.301453,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 37,
      "squawk": "2654",
      "timestamp": 1673459057,
      "ems": null
    },
    {
      "latitude": 51.855843,
      "longitude": 19.302979,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 45,
      "squawk": "2654",
      "timestamp": 1673459060,
      "ems": null
    },
    {
      "latitude": 51.857025,
      "longitude": 19.305206,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 52,
      "squawk": "2654",
      "timestamp": 1673459063,
      "ems": null
    },
    {
      "latitude": 51.857841,
      "longitude": 19.307251,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 59,
      "squawk": "2654",
      "timestamp": 1673459066,
      "ems": null
    },
    {
      "latitude": 51.858536,
      "longitude": 19.309437,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459069,
      "ems": null
    },
    {
      "latitude": 51.859192,
      "longitude": 19.311752,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 67,
      "squawk": "2654",
      "timestamp": 1673459072,
      "ems": null
    },
    {
      "latitude": 51.85968,
      "longitude": 19.314039,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 72,
      "squawk": "2654",
      "timestamp": 1673459075,
      "ems": null
    },
    {
      "latitude": 51.860092,
      "longitude": 19.316637,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 77,
      "squawk": "2654",
      "timestamp": 1673459078,
      "ems": null
    },
    {
      "latitude": 51.860275,
      "longitude": 19.318865,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 83,
      "squawk": "2654",
      "timestamp": 1673459081,
      "ems": null
    },
    {
      "latitude": 51.86031,
      "longitude": 19.321442,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673459084,
      "ems": null
    },
    {
      "latitude": 51.860218,
      "longitude": 19.324036,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 95,
      "squawk": "2654",
      "timestamp": 1673459087,
      "ems": null
    },
    {
      "latitude": 51.860001,
      "longitude": 19.326361,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673459090,
      "ems": null
    },
    {
      "latitude": 51.859707,
      "longitude": 19.328537,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673459093,
      "ems": null
    },
    {
      "latitude": 51.859222,
      "longitude": 19.331186,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673459096,
      "ems": null
    },
    {
      "latitude": 51.858765,
      "longitude": 19.333265,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459099,
      "ems": null
    },
    {
      "latitude": 51.858215,
      "longitude": 19.335556,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459102,
      "ems": null
    },
    {
      "latitude": 51.857704,
      "longitude": 19.337769,
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459105,
      "ems": null
    },
    {
      "latitude": 51.857098,
      "longitude": 19.339905,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459108,
      "ems": null
    },
    {
      "latitude": 51.856476,
      "longitude": 19.342247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459112,
      "ems": null
    },
    {
      "latitude": 51.855934,
      "longitude": 19.344101,
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
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459115,
      "ems": null
    },
    {
      "latitude": 51.855286,
      "longitude": 19.346256,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673459118,
      "ems": null
    },
    {
      "latitude": 51.854645,
      "longitude": 19.348112,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673459121,
      "ems": null
    },
    {
      "latitude": 51.85405,
      "longitude": 19.349968,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673459124,
      "ems": null
    },
    {
      "latitude": 51.853363,
      "longitude": 19.351898,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459127,
      "ems": null
    },
    {
      "latitude": 51.852768,
      "longitude": 19.353605,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459130,
      "ems": null
    },
    {
      "latitude": 51.852127,
      "longitude": 19.355387,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459133,
      "ems": null
    },
    {
      "latitude": 51.851467,
      "longitude": 19.3573,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673459136,
      "ems": null
    },
    {
      "latitude": 51.8508,
      "longitude": 19.359024,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673459139,
      "ems": null
    },
    {
      "latitude": 51.850159,
      "longitude": 19.360657,
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
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673459142,
      "ems": null
    },
    {
      "latitude": 51.849419,
      "longitude": 19.36264,
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
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673459145,
      "ems": null
    },
    {
      "latitude": 51.848694,
      "longitude": 19.364443,
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
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673459148,
      "ems": null
    },
    {
      "latitude": 51.848007,
      "longitude": 19.36615,
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
      "heading": 124,
      "squawk": "2654",
      "timestamp": 1673459151,
      "ems": null
    },
    {
      "latitude": 51.847229,
      "longitude": 19.367857,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 126,
      "squawk": "2654",
      "timestamp": 1673459154,
      "ems": null
    },
    {
      "latitude": 51.846485,
      "longitude": 19.369431,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 127,
      "squawk": "2654",
      "timestamp": 1673459157,
      "ems": null
    },
    {
      "latitude": 51.845764,
      "longitude": 19.37105,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 127,
      "squawk": "2654",
      "timestamp": 1673459160,
      "ems": null
    },
    {
      "latitude": 51.844986,
      "longitude": 19.372683,
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
      "heading": 128,
      "squawk": "2654",
      "timestamp": 1673459163,
      "ems": null
    },
    {
      "latitude": 51.844116,
      "longitude": 19.374315,
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
      "heading": 130,
      "squawk": "2654",
      "timestamp": 1673459166,
      "ems": null
    },
    {
      "latitude": 51.843319,
      "longitude": 19.375687,
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
      "heading": 133,
      "squawk": "2654",
      "timestamp": 1673459169,
      "ems": null
    },
    {
      "latitude": 51.842468,
      "longitude": 19.377136,
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
      "heading": 135,
      "squawk": "2654",
      "timestamp": 1673459172,
      "ems": null
    },
    {
      "latitude": 51.841599,
      "longitude": 19.378399,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 138,
      "squawk": "2654",
      "timestamp": 1673459175,
      "ems": null
    },
    {
      "latitude": 51.840759,
      "longitude": 19.379654,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 137,
      "squawk": "2654",
      "timestamp": 1673459178,
      "ems": null
    },
    {
      "latitude": 51.83992,
      "longitude": 19.380951,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 133,
      "squawk": "2654",
      "timestamp": 1673459181,
      "ems": null
    },
    {
      "latitude": 51.838348,
      "longitude": 19.384411,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673459187,
      "ems": null
    },
    {
      "latitude": 51.83778,
      "longitude": 19.386139,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673459190,
      "ems": null
    },
    {
      "latitude": 51.837204,
      "longitude": 19.388346,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459193,
      "ems": null
    },
    {
      "latitude": 51.836617,
      "longitude": 19.390488,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673459196,
      "ems": null
    },
    {
      "latitude": 51.836102,
      "longitude": 19.392624,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459199,
      "ems": null
    },
    {
      "latitude": 51.835602,
      "longitude": 19.394581,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459202,
      "ems": null
    },
    {
      "latitude": 51.835098,
      "longitude": 19.396511,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459205,
      "ems": null
    },
    {
      "latitude": 51.834549,
      "longitude": 19.398441,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459208,
      "ems": null
    },
    {
      "latitude": 51.833961,
      "longitude": 19.400406,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 117,
      "squawk": "2654",
      "timestamp": 1673459211,
      "ems": null
    },
    {
      "latitude": 51.833359,
      "longitude": 19.402153,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459214,
      "ems": null
    },
    {
      "latitude": 51.832031,
      "longitude": 19.405716,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459220,
      "ems": null
    },
    {
      "latitude": 51.831448,
      "longitude": 19.407425,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459223,
      "ems": null
    },
    {
      "latitude": 51.83075,
      "longitude": 19.409279,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673459227,
      "ems": null
    },
    {
      "latitude": 51.830051,
      "longitude": 19.411163,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673459230,
      "ems": null
    },
    {
      "latitude": 51.829468,
      "longitude": 19.412693,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673459233,
      "ems": null
    },
    {
      "latitude": 51.828644,
      "longitude": 19.414772,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673459236,
      "ems": null
    },
    {
      "latitude": 51.827862,
      "longitude": 19.416733,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 121,
      "squawk": "2654",
      "timestamp": 1673459239,
      "ems": null
    },
    {
      "latitude": 51.826492,
      "longitude": 19.420635,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 119,
      "squawk": "2654",
      "timestamp": 1673459245,
      "ems": null
    },
    {
      "latitude": 51.825115,
      "longitude": 19.424591,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673459251,
      "ems": null
    },
    {
      "latitude": 51.823673,
      "longitude": 19.429245,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673459257,
      "ems": null
    },
    {
      "latitude": 51.823021,
      "longitude": 19.431229,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 117,
      "squawk": "2654",
      "timestamp": 1673459259,
      "ems": null
    },
    {
      "latitude": 51.821365,
      "longitude": 19.436224,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673459266,
      "ems": null
    },
    {
      "latitude": 51.820633,
      "longitude": 19.438675,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459269,
      "ems": null
    },
    {
      "latitude": 51.819855,
      "longitude": 19.441422,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459272,
      "ems": null
    },
    {
      "latitude": 51.819122,
      "longitude": 19.444019,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459275,
      "ems": null
    },
    {
      "latitude": 51.818481,
      "longitude": 19.446543,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459278,
      "ems": null
    },
    {
      "latitude": 51.817017,
      "longitude": 19.451887,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459284,
      "ems": null
    },
    {
      "latitude": 51.81562,
      "longitude": 19.457092,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459290,
      "ems": null
    },
    {
      "latitude": 51.814774,
      "longitude": 19.460201,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459293,
      "ems": null
    },
    {
      "latitude": 51.813293,
      "longitude": 19.465485,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459299,
      "ems": null
    },
    {
      "latitude": 51.811981,
      "longitude": 19.471336,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673459305,
      "ems": null
    },
    {
      "latitude": 51.81078,
      "longitude": 19.477081,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673459311,
      "ems": null
    },
    {
      "latitude": 51.81015,
      "longitude": 19.480169,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673459314,
      "ems": null
    },
    {
      "latitude": 51.809566,
      "longitude": 19.483109,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673459317,
      "ems": null
    },
    {
      "latitude": 51.808868,
      "longitude": 19.486183,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673459320,
      "ems": null
    },
    {
      "latitude": 51.807522,
      "longitude": 19.492416,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673459326,
      "ems": null
    },
    {
      "latitude": 51.806217,
      "longitude": 19.498138,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459332,
      "ems": null
    },
    {
      "latitude": 51.80484,
      "longitude": 19.503998,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673459338,
      "ems": null
    },
    {
      "latitude": 51.803471,
      "longitude": 19.509659,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673459344,
      "ems": null
    },
    {
      "latitude": 51.802048,
      "longitude": 19.51543,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459350,
      "ems": null
    },
    {
      "latitude": 51.800629,
      "longitude": 19.521591,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459356,
      "ems": null
    },
    {
      "latitude": 51.799328,
      "longitude": 19.526825,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673459362,
      "ems": null
    },
    {
      "latitude": 51.797791,
      "longitude": 19.533024,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459369,
      "ems": null
    },
    {
      "latitude": 51.796253,
      "longitude": 19.538879,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673459375,
      "ems": null
    },
    {
      "latitude": 51.794815,
      "longitude": 19.544306,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459380,
      "ems": null
    },
    {
      "latitude": 51.793121,
      "longitude": 19.550764,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459387,
      "ems": null
    },
    {
      "latitude": 51.791412,
      "longitude": 19.557037,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459393,
      "ems": null
    },
    {
      "latitude": 51.789871,
      "longitude": 19.562864,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459399,
      "ems": null
    },
    {
      "latitude": 51.788132,
      "longitude": 19.569248,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459405,
      "ems": null
    },
    {
      "latitude": 51.786572,
      "longitude": 19.57489,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459410,
      "ems": null
    },
    {
      "latitude": 51.784897,
      "longitude": 19.58107,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459417,
      "ems": null
    },
    {
      "latitude": 51.783314,
      "longitude": 19.586792,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459423,
      "ems": null
    },
    {
      "latitude": 51.781723,
      "longitude": 19.592632,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459429,
      "ems": null
    },
    {
      "latitude": 51.779938,
      "longitude": 19.598942,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673459435,
      "ems": null
    },
    {
      "latitude": 51.77829,
      "longitude": 19.604656,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459441,
      "ems": null
    },
    {
      "latitude": 51.776657,
      "longitude": 19.610138,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459447,
      "ems": null
    },
    {
      "latitude": 51.774948,
      "longitude": 19.615866,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459453,
      "ems": null
    },
    {
      "latitude": 51.773258,
      "longitude": 19.621506,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673459459,
      "ems": null
    },
    {
      "latitude": 51.77158,
      "longitude": 19.626846,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673459465,
      "ems": null
    },
    {
      "latitude": 51.769951,
      "longitude": 19.632263,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673459471,
      "ems": null
    },
    {
      "latitude": 51.768463,
      "longitude": 19.637604,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673459477,
      "ems": null
    },
    {
      "latitude": 51.767811,
      "longitude": 19.64035,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673459480,
      "ems": null
    },
    {
      "latitude": 51.767303,
      "longitude": 19.643406,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673459483,
      "ems": null
    },
    {
      "latitude": 51.766972,
      "longitude": 19.646225,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673459486,
      "ems": null
    },
    {
      "latitude": 51.766788,
      "longitude": 19.648361,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673459488,
      "ems": null
    },
    {
      "latitude": 51.766788,
      "longitude": 19.651794,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 92,
      "squawk": "2654",
      "timestamp": 1673459492,
      "ems": null
    },
    {
      "latitude": 51.766972,
      "longitude": 19.654999,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 81,
      "squawk": "2654",
      "timestamp": 1673459495,
      "ems": null
    },
    {
      "latitude": 51.767349,
      "longitude": 19.65766,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 77,
      "squawk": "2654",
      "timestamp": 1673459498,
      "ems": null
    },
    {
      "latitude": 51.76767,
      "longitude": 19.659218,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 74,
      "squawk": "2654",
      "timestamp": 1673459500,
      "ems": null
    },
    {
      "latitude": 51.768631,
      "longitude": 19.663153,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "2654",
      "timestamp": 1673459503,
      "ems": null
    },
    {
      "latitude": 51.769627,
      "longitude": 19.666443,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459507,
      "ems": null
    },
    {
      "latitude": 51.771057,
      "longitude": 19.670723,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "2654",
      "timestamp": 1673459511,
      "ems": null
    },
    {
      "latitude": 51.77211,
      "longitude": 19.673693,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673459514,
      "ems": null
    },
    {
      "latitude": 51.773026,
      "longitude": 19.676142,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 59,
      "squawk": "2654",
      "timestamp": 1673459517,
      "ems": null
    },
    {
      "latitude": 51.774078,
      "longitude": 19.678963,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673459520,
      "ems": null
    },
    {
      "latitude": 51.775269,
      "longitude": 19.681932,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673459523,
      "ems": null
    },
    {
      "latitude": 51.776192,
      "longitude": 19.684296,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "2654",
      "timestamp": 1673459526,
      "ems": null
    },
    {
      "latitude": 51.777073,
      "longitude": 19.686508,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673459528,
      "ems": null
    },
    {
      "latitude": 51.77861,
      "longitude": 19.690321,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673459532,
      "ems": null
    },
    {
      "latitude": 51.779682,
      "longitude": 19.693069,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "2654",
      "timestamp": 1673459535,
      "ems": null
    },
    {
      "latitude": 51.781723,
      "longitude": 19.698412,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673459541,
      "ems": null
    },
    {
      "latitude": 51.783691,
      "longitude": 19.703608,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673459546,
      "ems": null
    },
    {
      "latitude": 51.784927,
      "longitude": 19.707394,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "2654",
      "timestamp": 1673459550,
      "ems": null
    },
    {
      "latitude": 51.785919,
      "longitude": 19.710541,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459554,
      "ems": null
    },
    {
      "latitude": 51.786804,
      "longitude": 19.713364,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459557,
      "ems": null
    },
    {
      "latitude": 51.787399,
      "longitude": 19.715189,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459559,
      "ems": null
    },
    {
      "latitude": 51.788132,
      "longitude": 19.717712,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673459561,
      "ems": null
    },
    {
      "latitude": 51.789185,
      "longitude": 19.721201,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673459565,
      "ems": null
    },
    {
      "latitude": 51.790054,
      "longitude": 19.724096,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673459568,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 19.729813,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673459574,
      "ems": null
    },
    {
      "latitude": 51.79303,
      "longitude": 19.732485,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "2654",
      "timestamp": 1673459577,
      "ems": null
    },
    {
      "latitude": 51.794312,
      "longitude": 19.735231,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "2654",
      "timestamp": 1673459580,
      "ems": null
    },
    {
      "latitude": 51.795418,
      "longitude": 19.737244,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 46,
      "squawk": "2654",
      "timestamp": 1673459583,
      "ems": null
    },
    {
      "latitude": 51.796719,
      "longitude": 19.739227,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 42,
      "squawk": "2654",
      "timestamp": 1673459585,
      "ems": null
    },
    {
      "latitude": 51.798477,
      "longitude": 19.741467,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "2654",
      "timestamp": 1673459589,
      "ems": null
    },
    {
      "latitude": 51.800125,
      "longitude": 19.743174,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "2654",
      "timestamp": 1673459592,
      "ems": null
    },
    {
      "latitude": 51.801956,
      "longitude": 19.744659,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 25,
      "squawk": "2654",
      "timestamp": 1673459595,
      "ems": null
    },
    {
      "latitude": 51.80365,
      "longitude": 19.745771,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 20,
      "squawk": "2654",
      "timestamp": 1673459598,
      "ems": null
    },
    {
      "latitude": 51.805519,
      "longitude": 19.74678,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 16,
      "squawk": "2654",
      "timestamp": 1673459601,
      "ems": null
    },
    {
      "latitude": 51.807335,
      "longitude": 19.747543,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "2654",
      "timestamp": 1673459604,
      "ems": null
    },
    {
      "latitude": 51.809326,
      "longitude": 19.748074,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "2654",
      "timestamp": 1673459607,
      "ems": null
    },
    {
      "latitude": 51.811058,
      "longitude": 19.748306,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "2654",
      "timestamp": 1673459610,
      "ems": null
    },
    {
      "latitude": 51.812897,
      "longitude": 19.748222,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 357,
      "squawk": "2654",
      "timestamp": 1673459613,
      "ems": null
    },
    {
      "latitude": 51.814407,
      "longitude": 19.747925,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 350,
      "squawk": "2654",
      "timestamp": 1673459616,
      "ems": null
    },
    {
      "latitude": 51.816284,
      "longitude": 19.747257,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "2654",
      "timestamp": 1673459619,
      "ems": null
    },
    {
      "latitude": 51.817669,
      "longitude": 19.746399,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673459622,
      "ems": null
    },
    {
      "latitude": 51.819077,
      "longitude": 19.745104,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 327,
      "squawk": "2654",
      "timestamp": 1673459625,
      "ems": null
    },
    {
      "latitude": 51.820313,
      "longitude": 19.74362,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 320,
      "squawk": "2654",
      "timestamp": 1673459628,
      "ems": null
    },
    {
      "latitude": 51.820908,
      "longitude": 19.742804,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 321,
      "squawk": "2654",
      "timestamp": 1673459630,
      "ems": null
    },
    {
      "latitude": 51.82196,
      "longitude": 19.741022,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 311,
      "squawk": "2654",
      "timestamp": 1673459632,
      "ems": null
    },
    {
      "latitude": 51.822784,
      "longitude": 19.739092,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "2654",
      "timestamp": 1673459636,
      "ems": null
    },
    {
      "latitude": 51.823013,
      "longitude": 19.738571,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "2654",
      "timestamp": 1673459638,
      "ems": null
    },
    {
      "latitude": 51.824001,
      "longitude": 19.734421,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 283,
      "squawk": "2654",
      "timestamp": 1673459643,
      "ems": null
    },
    {
      "latitude": 51.824093,
      "longitude": 19.73114,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673459647,
      "ems": null
    },
    {
      "latitude": 51.823814,
      "longitude": 19.729004,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673459650,
      "ems": null
    },
    {
      "latitude": 51.823792,
      "longitude": 19.728699,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673459651,
      "ems": null
    },
    {
      "latitude": 51.823059,
      "longitude": 19.726175,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459655,
      "ems": null
    },
    {
      "latitude": 51.822369,
      "longitude": 19.724579,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673459658,
      "ems": null
    },
    {
      "latitude": 51.821487,
      "longitude": 19.723129,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 222,
      "squawk": "2654",
      "timestamp": 1673459661,
      "ems": null
    },
    {
      "latitude": 51.820541,
      "longitude": 19.721943,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 216,
      "squawk": "2654",
      "timestamp": 1673459664,
      "ems": null
    },
    {
      "latitude": 51.819443,
      "longitude": 19.720831,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "2654",
      "timestamp": 1673459667,
      "ems": null
    },
    {
      "latitude": 51.818459,
      "longitude": 19.720001,
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
      "heading": 205,
      "squawk": "2654",
      "timestamp": 1673459670,
      "ems": null
    },
    {
      "latitude": 51.817062,
      "longitude": 19.719049,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673459673,
      "ems": null
    },
    {
      "latitude": 51.81562,
      "longitude": 19.718246,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 199,
      "squawk": "2654",
      "timestamp": 1673459676,
      "ems": null
    },
    {
      "latitude": 51.814453,
      "longitude": 19.717638,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 198,
      "squawk": "2654",
      "timestamp": 1673459679,
      "ems": null
    },
    {
      "latitude": 51.813248,
      "longitude": 19.717026,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "2654",
      "timestamp": 1673459682,
      "ems": null
    },
    {
      "latitude": 51.811897,
      "longitude": 19.716339,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 196,
      "squawk": "2654",
      "timestamp": 1673459685,
      "ems": null
    },
    {
      "latitude": 51.810871,
      "longitude": 19.715881,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 195,
      "squawk": "2654",
      "timestamp": 1673459688,
      "ems": null
    },
    {
      "latitude": 51.809692,
      "longitude": 19.715338,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "2654",
      "timestamp": 1673459691,
      "ems": null
    },
    {
      "latitude": 51.808266,
      "longitude": 19.714737,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 195,
      "squawk": "2654",
      "timestamp": 1673459694,
      "ems": null
    },
    {
      "latitude": 51.807358,
      "longitude": 19.714373,
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
      "heading": 194,
      "squawk": "2654",
      "timestamp": 1673459697,
      "ems": null
    },
    {
      "latitude": 51.805706,
      "longitude": 19.713669,
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
      "heading": 195,
      "squawk": "2654",
      "timestamp": 1673459700,
      "ems": null
    },
    {
      "latitude": 51.803101,
      "longitude": 19.71207,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 206,
      "squawk": "2654",
      "timestamp": 1673459706,
      "ems": null
    },
    {
      "latitude": 51.802029,
      "longitude": 19.710999,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 215,
      "squawk": "2654",
      "timestamp": 1673459709,
      "ems": null
    },
    {
      "latitude": 51.801178,
      "longitude": 19.709696,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 224,
      "squawk": "2654",
      "timestamp": 1673459712,
      "ems": null
    },
    {
      "latitude": 51.800171,
      "longitude": 19.707766,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 232,
      "squawk": "2654",
      "timestamp": 1673459715,
      "ems": null
    },
    {
      "latitude": 51.799438,
      "longitude": 19.706059,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673459719,
      "ems": null
    },
    {
      "latitude": 51.798908,
      "longitude": 19.704361,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459721,
      "ems": null
    },
    {
      "latitude": 51.79834,
      "longitude": 19.702198,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673459725,
      "ems": null
    },
    {
      "latitude": 51.797882,
      "longitude": 19.700268,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673459728,
      "ems": null
    },
    {
      "latitude": 51.797417,
      "longitude": 19.698486,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673459731,
      "ems": null
    },
    {
      "latitude": 51.796967,
      "longitude": 19.696556,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673459734,
      "ems": null
    },
    {
      "latitude": 51.796692,
      "longitude": 19.695147,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673459737,
      "ems": null
    },
    {
      "latitude": 51.796234,
      "longitude": 19.69277,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673459740,
      "ems": null
    },
    {
      "latitude": 51.795883,
      "longitude": 19.690857,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673459743,
      "ems": null
    },
    {
      "latitude": 51.795601,
      "longitude": 19.689255,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673459745,
      "ems": null
    },
    {
      "latitude": 51.795273,
      "longitude": 19.687277,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673459749,
      "ems": null
    },
    {
      "latitude": 51.794952,
      "longitude": 19.685421,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673459752,
      "ems": null
    },
    {
      "latitude": 51.79467,
      "longitude": 19.683914,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673459754,
      "ems": null
    },
    {
      "latitude": 51.7943,
      "longitude": 19.681854,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673459758,
      "ems": null
    },
    {
      "latitude": 51.793739,
      "longitude": 19.678726,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2654",
      "timestamp": 1673459763,
      "ems": null
    },
    {
      "latitude": 51.793076,
      "longitude": 19.674881,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2654",
      "timestamp": 1673459769,
      "ems": null
    },
    {
      "latitude": 51.792484,
      "longitude": 19.67186,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673459774,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 19.669907,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673459778,
      "ems": null
    },
    {
      "latitude": 51.791382,
      "longitude": 19.667976,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673459782,
      "ems": null
    },
    {
      "latitude": 51.790901,
      "longitude": 19.666519,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459784,
      "ems": null
    },
    {
      "latitude": 51.790295,
      "longitude": 19.664536,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459788,
      "ems": null
    },
    {
      "latitude": 51.789875,
      "longitude": 19.663239,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459790,
      "ems": null
    },
    {
      "latitude": 51.789272,
      "longitude": 19.661331,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459794,
      "ems": null
    },
    {
      "latitude": 51.788994,
      "longitude": 19.660416,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459796,
      "ems": null
    },
    {
      "latitude": 51.788223,
      "longitude": 19.658104,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673459800,
      "ems": null
    },
    {
      "latitude": 51.787689,
      "longitude": 19.656677,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673459803,
      "ems": null
    },
    {
      "latitude": 51.78717,
      "longitude": 19.655283,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673459806,
      "ems": null
    },
    {
      "latitude": 51.786118,
      "longitude": 19.652092,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "squawk": "2654",
      "timestamp": 1673459813,
      "ems": null
    },
    {
      "latitude": 51.78513,
      "longitude": 19.648972,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459819,
      "ems": null
    },
    {
      "latitude": 51.784195,
      "longitude": 19.646004,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673459824,
      "ems": null
    },
    {
      "latitude": 51.783279,
      "longitude": 19.643036,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459831,
      "ems": null
    },
    {
      "latitude": 51.782333,
      "longitude": 19.640045,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459837,
      "ems": null
    },
    {
      "latitude": 51.781357,
      "longitude": 19.637299,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673459843,
      "ems": null
    },
    {
      "latitude": 51.780396,
      "longitude": 19.634499,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673459848,
      "ems": null
    },
    {
      "latitude": 51.779297,
      "longitude": 19.631529,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673459855,
      "ems": null
    },
    {
      "latitude": 51.778797,
      "longitude": 19.630127,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673459858,
      "ems": null
    },
    {
      "latitude": 51.777832,
      "longitude": 19.627522,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673459863,
      "ems": null
    },
    {
      "latitude": 51.776733,
      "longitude": 19.624254,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673459869,
      "ems": null
    },
    {
      "latitude": 51.775772,
      "longitude": 19.621353,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673459875,
      "ems": null
    },
    {
      "latitude": 51.774719,
      "longitude": 19.618019,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459882,
      "ems": null
    },
    {
      "latitude": 51.773628,
      "longitude": 19.614716,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459888,
      "ems": null
    },
    {
      "latitude": 51.772568,
      "longitude": 19.611412,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459894,
      "ems": null
    },
    {
      "latitude": 51.771488,
      "longitude": 19.608002,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459900,
      "ems": null
    },
    {
      "latitude": 51.770416,
      "longitude": 19.604645,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673459906,
      "ems": null
    },
    {
      "latitude": 51.769253,
      "longitude": 19.600983,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459912,
      "ems": null
    },
    {
      "latitude": 51.768127,
      "longitude": 19.597382,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459918,
      "ems": null
    },
    {
      "latitude": 51.767113,
      "longitude": 19.59404,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673459924,
      "ems": null
    },
    {
      "latitude": 51.766113,
      "longitude": 19.590628,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673459930,
      "ems": null
    },
    {
      "latitude": 51.765156,
      "longitude": 19.58725,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673459936,
      "ems": null
    },
    {
      "latitude": 51.764088,
      "longitude": 19.583817,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673459942,
      "ems": null
    },
    {
      "latitude": 51.763157,
      "longitude": 19.58046,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673459948,
      "ems": null
    },
    {
      "latitude": 51.762272,
      "longitude": 19.577179,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673459954,
      "ems": null
    },
    {
      "latitude": 51.76149,
      "longitude": 19.573627,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673459960,
      "ems": null
    },
    {
      "latitude": 51.761169,
      "longitude": 19.571772,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673459963,
      "ems": null
    },
    {
      "latitude": 51.76083,
      "longitude": 19.569855,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "squawk": "2654",
      "timestamp": 1673459966,
      "ems": null
    },
    {
      "latitude": 51.760529,
      "longitude": 19.56806,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673459969,
      "ems": null
    },
    {
      "latitude": 51.760178,
      "longitude": 19.566193,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673459972,
      "ems": null
    },
    {
      "latitude": 51.759804,
      "longitude": 19.564362,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673459976,
      "ems": null
    },
    {
      "latitude": 51.759521,
      "longitude": 19.562716,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673459978,
      "ems": null
    },
    {
      "latitude": 51.759247,
      "longitude": 19.56086,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673459981,
      "ems": null
    },
    {
      "latitude": 51.759064,
      "longitude": 19.559078,
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
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673459984,
      "ems": null
    },
    {
      "latitude": 51.758926,
      "longitude": 19.557297,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673459987,
      "ems": null
    },
    {
      "latitude": 51.758789,
      "longitude": 19.555813,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673459990,
      "ems": null
    },
    {
      "latitude": 51.758686,
      "longitude": 19.554062,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "2654",
      "timestamp": 1673459993,
      "ems": null
    },
    {
      "latitude": 51.758595,
      "longitude": 19.552155,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673459996,
      "ems": null
    },
    {
      "latitude": 51.758499,
      "longitude": 19.550476,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673459999,
      "ems": null
    },
    {
      "latitude": 51.758408,
      "longitude": 19.54895,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "2654",
      "timestamp": 1673460002,
      "ems": null
    },
    {
      "latitude": 51.75824,
      "longitude": 19.547052,
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
      "heading": 263,
      "squawk": "2654",
      "timestamp": 1673460006,
      "ems": null
    },
    {
      "latitude": 51.758148,
      "longitude": 19.545568,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673460008,
      "ems": null
    },
    {
      "latitude": 51.757523,
      "longitude": 19.542236,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673460014,
      "ems": null
    },
    {
      "latitude": 51.757095,
      "longitude": 19.540594,
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460018,
      "ems": null
    },
    {
      "latitude": 51.756683,
      "longitude": 19.53911,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460021,
      "ems": null
    },
    {
      "latitude": 51.756317,
      "longitude": 19.537775,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460024,
      "ems": null
    },
    {
      "latitude": 51.755951,
      "longitude": 19.536215,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673460027,
      "ems": null
    },
    {
      "latitude": 51.75563,
      "longitude": 19.535101,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673460029,
      "ems": null
    },
    {
      "latitude": 51.755264,
      "longitude": 19.533468,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673460032,
      "ems": null
    },
    {
      "latitude": 51.754898,
      "longitude": 19.53191,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673460036,
      "ems": null
    },
    {
      "latitude": 51.754589,
      "longitude": 19.530487,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673460039,
      "ems": null
    },
    {
      "latitude": 51.754078,
      "longitude": 19.52774,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460044,
      "ems": null
    },
    {
      "latitude": 51.753799,
      "longitude": 19.526268,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460048,
      "ems": null
    },
    {
      "latitude": 51.753567,
      "longitude": 19.524994,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460050,
      "ems": null
    },
    {
      "latitude": 51.75325,
      "longitude": 19.523373,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460054,
      "ems": null
    },
    {
      "latitude": 51.752728,
      "longitude": 19.52095,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673460059,
      "ems": null
    },
    {
      "latitude": 51.75206,
      "longitude": 19.518549,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673460066,
      "ems": null
    },
    {
      "latitude": 51.751648,
      "longitude": 19.517286,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673460069,
      "ems": null
    },
    {
      "latitude": 51.751282,
      "longitude": 19.516247,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673460071,
      "ems": null
    },
    {
      "latitude": 51.75087,
      "longitude": 19.515133,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673460075,
      "ems": null
    },
    {
      "latitude": 51.750366,
      "longitude": 19.513947,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673460078,
      "ems": null
    },
    {
      "latitude": 51.749908,
      "longitude": 19.512833,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673460081,
      "ems": null
    },
    {
      "latitude": 51.749374,
      "longitude": 19.511566,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 235,
      "squawk": "2654",
      "timestamp": 1673460084,
      "ems": null
    },
    {
      "latitude": 51.748901,
      "longitude": 19.510456,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 234,
      "squawk": "2654",
      "timestamp": 1673460087,
      "ems": null
    },
    {
      "latitude": 51.748444,
      "longitude": 19.50943,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 234,
      "squawk": "2654",
      "timestamp": 1673460090,
      "ems": null
    },
    {
      "latitude": 51.747887,
      "longitude": 19.508057,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 234,
      "squawk": "2654",
      "timestamp": 1673460093,
      "ems": null
    },
    {
      "latitude": 51.74733,
      "longitude": 19.506836,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 233,
      "squawk": "2654",
      "timestamp": 1673460096,
      "ems": null
    },
    {
      "latitude": 51.746769,
      "longitude": 19.505539,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673460099,
      "ems": null
    },
    {
      "latitude": 51.745972,
      "longitude": 19.502886,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460105,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.501251,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460108,
      "ems": null
    },
    {
      "latitude": 51.745377,
      "longitude": 19.499842,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460111,
      "ems": null
    },
    {
      "latitude": 51.74501,
      "longitude": 19.498432,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460114,
      "ems": null
    },
    {
      "latitude": 51.744553,
      "longitude": 19.497021,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673460117,
      "ems": null
    },
    {
      "latitude": 51.744095,
      "longitude": 19.495611,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673460120,
      "ems": null
    },
    {
      "latitude": 51.743591,
      "longitude": 19.494274,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673460123,
      "ems": null
    },
    {
      "latitude": 51.743134,
      "longitude": 19.492865,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673460126,
      "ems": null
    },
    {
      "latitude": 51.742126,
      "longitude": 19.489895,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673460133,
      "ems": null
    },
    {
      "latitude": 51.741695,
      "longitude": 19.488525,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673460135,
      "ems": null
    },
    {
      "latitude": 51.741257,
      "longitude": 19.487,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673460139,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.483807,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673460144,
      "ems": null
    },
    {
      "latitude": 51.740158,
      "longitude": 19.482471,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460147,
      "ems": null
    },
    {
      "latitude": 51.73988,
      "longitude": 19.48082,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673460150,
      "ems": null
    },
    {
      "latitude": 51.739506,
      "longitude": 19.479218,
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460153,
      "ems": null
    },
    {
      "latitude": 51.739151,
      "longitude": 19.477127,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673460156,
      "ems": null
    },
    {
      "latitude": 51.738995,
      "longitude": 19.476089,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673460158,
      "ems": null
    },
    {
      "latitude": 51.738647,
      "longitude": 19.473785,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460163,
      "ems": null
    },
    {
      "latitude": 51.738419,
      "longitude": 19.472078,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673460165,
      "ems": null
    },
    {
      "latitude": 51.738235,
      "longitude": 19.470743,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460168,
      "ems": null
    },
    {
      "latitude": 51.737972,
      "longitude": 19.468765,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673460171,
      "ems": null
    },
    {
      "latitude": 51.737366,
      "longitude": 19.465637,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673460177,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 19.463959,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673460180,
      "ems": null
    },
    {
      "latitude": 51.736359,
      "longitude": 19.462429,
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673460183,
      "ems": null
    },
    {
      "latitude": 51.73597,
      "longitude": 19.461212,
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673460186,
      "ems": null
    },
    {
      "latitude": 51.735363,
      "longitude": 19.459381,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673460190,
      "ems": null
    },
    {
      "latitude": 51.734898,
      "longitude": 19.457855,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460192,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.456406,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673460195,
      "ems": null
    },
    {
      "latitude": 51.733887,
      "longitude": 19.452852,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "squawk": "2654",
      "timestamp": 1673460201,
      "ems": null
    },
    {
      "latitude": 51.733246,
      "longitude": 19.449438,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673460207,
      "ems": null
    },
    {
      "latitude": 51.73288,
      "longitude": 19.447657,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673460211,
      "ems": null
    },
    {
      "latitude": 51.732525,
      "longitude": 19.445801,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460214,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 19.445354,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673460216,
      "ems": null
    },
    {
      "latitude": 51.732014,
      "longitude": 19.443817,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673460218,
      "ems": null
    },
    {
      "latitude": 51.731461,
      "longitude": 19.441422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460222,
      "ems": null
    },
    {
      "latitude": 51.730774,
      "longitude": 19.438007,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673460229,
      "ems": null
    },
    {
      "latitude": 51.730362,
      "longitude": 19.436298,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673460232,
      "ems": null
    },
    {
      "latitude": 51.730042,
      "longitude": 19.435038,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673460234,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.431229,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673460241,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.426575,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673460249,
      "ems": null
    },
    {
      "latitude": 51.727169,
      "longitude": 19.421463,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673460257,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.419598,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673460260,
      "ems": null
    },
    {
      "latitude": 51.726563,
      "longitude": 19.417593,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673460263,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.415665,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673460266,
      "ems": null
    },
    {
      "latitude": 51.726013,
      "longitude": 19.413956,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460268,
      "ems": null
    },
    {
      "latitude": 51.725647,
      "longitude": 19.411579,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460272,
      "ems": null
    },
    {
      "latitude": 51.725052,
      "longitude": 19.407795,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460277,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.403229,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673460283,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.398804,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673460290,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.395447,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673460295,
      "ems": null
    },
    {
      "latitude": 51.722855,
      "longitude": 19.390944,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673460302,
      "ems": null
    },
    {
      "latitude": 51.722717,
      "longitude": 19.389236,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673460304,
      "ems": null
    },
    {
      "latitude": 51.722282,
      "longitude": 19.385071,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673460311,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.38179,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673460316,
      "ems": null
    },
    {
      "latitude": 51.72205,
      "longitude": 19.38118,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673460317,
      "ems": null
    },
    {
      "latitude": 51.722004,
      "longitude": 19.379654,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673460319,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.377594,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673460323,
      "ems": null
    },
    {
      "latitude": 51.721863,
      "longitude": 19.375839,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 267,
      "squawk": "2654",
      "timestamp": 1673460326,
      "ems": null
    },
    {
      "latitude": 51.721817,
      "longitude": 19.374008,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 267,
      "squawk": "2654",
      "timestamp": 1673460329,
      "ems": null
    },
    {
      "latitude": 51.721817,
      "longitude": 19.373322,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 268,
      "squawk": "2654",
      "timestamp": 1673460330,
      "ems": null
    },
    {
      "latitude": 51.721817,
      "longitude": 19.37088,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 270,
      "squawk": "2654",
      "timestamp": 1673460334,
      "ems": null
    },
    {
      "latitude": 51.721817,
      "longitude": 19.369354,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "2654",
      "timestamp": 1673460337,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 19.367413,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 271,
      "squawk": "2654",
      "timestamp": 1673460340,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.365768,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 274,
      "squawk": "2654",
      "timestamp": 1673460343,
      "ems": null
    },
    {
      "latitude": 51.722031,
      "longitude": 19.364145,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 279,
      "squawk": "2654",
      "timestamp": 1673460346,
      "ems": null
    },
    {
      "latitude": 51.72226,
      "longitude": 19.362438,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 283,
      "squawk": "2654",
      "timestamp": 1673460350,
      "ems": null
    },
    {
      "latitude": 51.722561,
      "longitude": 19.360733,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 286,
      "squawk": "2654",
      "timestamp": 1673460352,
      "ems": null
    },
    {
      "latitude": 51.7229,
      "longitude": 19.359098,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 290,
      "squawk": "2654",
      "timestamp": 1673460356,
      "ems": null
    },
    {
      "latitude": 51.723309,
      "longitude": 19.357605,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 295,
      "squawk": "2654",
      "timestamp": 1673460358,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.356079,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 302,
      "squawk": "2654",
      "timestamp": 1673460362,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.354782,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 307,
      "squawk": "2654",
      "timestamp": 1673460364,
      "ems": null
    },
    {
      "latitude": 51.725216,
      "longitude": 19.353485,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 312,
      "squawk": "2654",
      "timestamp": 1673460368,
      "ems": null
    },
    {
      "latitude": 51.725914,
      "longitude": 19.352341,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 317,
      "squawk": "2654",
      "timestamp": 1673460370,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 19.351154,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 324,
      "squawk": "2654",
      "timestamp": 1673460374,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.350281,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 330,
      "squawk": "2654",
      "timestamp": 1673460376,
      "ems": null
    },
    {
      "latitude": 51.728939,
      "longitude": 19.349365,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673460379,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.348705,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460383,
      "ems": null
    },
    {
      "latitude": 51.731548,
      "longitude": 19.347992,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673460386,
      "ems": null
    },
    {
      "latitude": 51.73288,
      "longitude": 19.34737,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673460389,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.346775,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673460392,
      "ems": null
    },
    {
      "latitude": 51.735489,
      "longitude": 19.346182,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673460394,
      "ems": null
    },
    {
      "latitude": 51.736771,
      "longitude": 19.345587,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673460397,
      "ems": null
    },
    {
      "latitude": 51.738205,
      "longitude": 19.344864,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673460401,
      "ems": null
    },
    {
      "latitude": 51.73946,
      "longitude": 19.34433,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673460404,
      "ems": null
    },
    {
      "latitude": 51.740616,
      "longitude": 19.343805,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673460407,
      "ems": null
    },
    {
      "latitude": 51.74202,
      "longitude": 19.343109,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673460410,
      "ems": null
    },
    {
      "latitude": 51.744553,
      "longitude": 19.341877,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673460416,
      "ems": null
    },
    {
      "latitude": 51.747189,
      "longitude": 19.340591,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673460422,
      "ems": null
    },
    {
      "latitude": 51.749748,
      "longitude": 19.339218,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460428,
      "ems": null
    },
    {
      "latitude": 51.752216,
      "longitude": 19.337921,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460434,
      "ems": null
    },
    {
      "latitude": 51.754761,
      "longitude": 19.336605,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460440,
      "ems": null
    },
    {
      "latitude": 51.757477,
      "longitude": 19.335098,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673460446,
      "ems": null
    },
    {
      "latitude": 51.760178,
      "longitude": 19.333572,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460452,
      "ems": null
    },
    {
      "latitude": 51.763092,
      "longitude": 19.332003,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460458,
      "ems": null
    },
    {
      "latitude": 51.765656,
      "longitude": 19.330593,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673460464,
      "ems": null
    },
    {
      "latitude": 51.77,
      "longitude": 19.328079,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 340,
      "squawk": "2654",
      "timestamp": 1673460473,
      "ems": null
    },
    {
      "latitude": 51.77298,
      "longitude": 19.326288,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673460479,
      "ems": null
    },
    {
      "latitude": 51.775959,
      "longitude": 19.324493,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "squawk": "2654",
      "timestamp": 1673460485,
      "ems": null
    },
    {
      "latitude": 51.778984,
      "longitude": 19.322662,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 338,
      "squawk": "2654",
      "timestamp": 1673460491,
      "ems": null
    },
    {
      "latitude": 51.781963,
      "longitude": 19.320755,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "squawk": "2654",
      "timestamp": 1673460498,
      "ems": null
    },
    {
      "latitude": 51.78513,
      "longitude": 19.319305,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673460504,
      "ems": null
    },
    {
      "latitude": 51.786758,
      "longitude": 19.318924,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673460507,
      "ems": null
    },
    {
      "latitude": 51.788315,
      "longitude": 19.31879,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 359,
      "squawk": "2654",
      "timestamp": 1673460510,
      "ems": null
    },
    {
      "latitude": 51.789871,
      "longitude": 19.319012,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 7,
      "squawk": "2654",
      "timestamp": 1673460513,
      "ems": null
    },
    {
      "latitude": 51.791645,
      "longitude": 19.319611,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 15,
      "squawk": "2654",
      "timestamp": 1673460516,
      "ems": null
    },
    {
      "latitude": 51.793182,
      "longitude": 19.320526,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 21,
      "squawk": "2654",
      "timestamp": 1673460518,
      "ems": null
    },
    {
      "latitude": 51.794811,
      "longitude": 19.321899,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 28,
      "squawk": "2654",
      "timestamp": 1673460521,
      "ems": null
    },
    {
      "latitude": 51.79628,
      "longitude": 19.323467,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 36,
      "squawk": "2654",
      "timestamp": 1673460525,
      "ems": null
    },
    {
      "latitude": 51.797607,
      "longitude": 19.325397,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 42,
      "squawk": "2654",
      "timestamp": 1673460527,
      "ems": null
    },
    {
      "latitude": 51.798935,
      "longitude": 19.327772,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 51,
      "squawk": "2654",
      "timestamp": 1673460530,
      "ems": null
    },
    {
      "latitude": 51.799839,
      "longitude": 19.330063,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 58,
      "squawk": "2654",
      "timestamp": 1673460533,
      "ems": null
    },
    {
      "latitude": 51.800678,
      "longitude": 19.332962,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "2654",
      "timestamp": 1673460536,
      "ems": null
    },
    {
      "latitude": 51.801178,
      "longitude": 19.33564,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 75,
      "squawk": "2654",
      "timestamp": 1673460539,
      "ems": null
    },
    {
      "latitude": 51.801498,
      "longitude": 19.338907,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "2654",
      "timestamp": 1673460542,
      "ems": null
    },
    {
      "latitude": 51.801655,
      "longitude": 19.34166,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 85,
      "squawk": "2654",
      "timestamp": 1673460545,
      "ems": null
    },
    {
      "latitude": 51.801792,
      "longitude": 19.344482,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "2654",
      "timestamp": 1673460548,
      "ems": null
    },
    {
      "latitude": 51.80191,
      "longitude": 19.34737,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 86,
      "squawk": "2654",
      "timestamp": 1673460552,
      "ems": null
    },
    {
      "latitude": 51.802029,
      "longitude": 19.350357,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "2654",
      "timestamp": 1673460555,
      "ems": null
    },
    {
      "latitude": 51.802277,
      "longitude": 19.362587,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460568,
      "ems": null
    },
    {
      "latitude": 51.802166,
      "longitude": 19.365616,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 93,
      "squawk": "2654",
      "timestamp": 1673460571,
      "ems": null
    },
    {
      "latitude": 51.802074,
      "longitude": 19.368362,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "2654",
      "timestamp": 1673460574,
      "ems": null
    },
    {
      "latitude": 51.801956,
      "longitude": 19.370827,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "2654",
      "timestamp": 1673460577,
      "ems": null
    },
    {
      "latitude": 51.801746,
      "longitude": 19.373627,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "2654",
      "timestamp": 1673460580,
      "ems": null
    },
    {
      "latitude": 51.80159,
      "longitude": 19.376394,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "2654",
      "timestamp": 1673460583,
      "ems": null
    },
    {
      "latitude": 51.801189,
      "longitude": 19.381714,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 97,
      "squawk": "2654",
      "timestamp": 1673460589,
      "ems": null
    },
    {
      "latitude": 51.800724,
      "longitude": 19.386978,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673460595,
      "ems": null
    },
    {
      "latitude": 51.800491,
      "longitude": 19.389904,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673460598,
      "ems": null
    },
    {
      "latitude": 51.800259,
      "longitude": 19.392395,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673460601,
      "ems": null
    },
    {
      "latitude": 51.79998,
      "longitude": 19.395218,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673460604,
      "ems": null
    },
    {
      "latitude": 51.799438,
      "longitude": 19.400372,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460610,
      "ems": null
    },
    {
      "latitude": 51.798798,
      "longitude": 19.405567,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673460616,
      "ems": null
    },
    {
      "latitude": 51.798164,
      "longitude": 19.410782,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673460622,
      "ems": null
    },
    {
      "latitude": 51.797417,
      "longitude": 19.416199,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673460628,
      "ems": null
    },
    {
      "latitude": 51.796673,
      "longitude": 19.42131,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673460634,
      "ems": null
    },
    {
      "latitude": 51.795929,
      "longitude": 19.426956,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673460640,
      "ems": null
    },
    {
      "latitude": 51.795181,
      "longitude": 19.431919,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673460646,
      "ems": null
    },
    {
      "latitude": 51.794357,
      "longitude": 19.437487,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460652,
      "ems": null
    },
    {
      "latitude": 51.793552,
      "longitude": 19.442825,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460658,
      "ems": null
    },
    {
      "latitude": 51.792801,
      "longitude": 19.448175,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460664,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 19.453892,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460671,
      "ems": null
    },
    {
      "latitude": 51.79118,
      "longitude": 19.459229,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673460677,
      "ems": null
    },
    {
      "latitude": 51.790527,
      "longitude": 19.463654,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460682,
      "ems": null
    },
    {
      "latitude": 51.789551,
      "longitude": 19.469704,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673460689,
      "ems": null
    },
    {
      "latitude": 51.788666,
      "longitude": 19.475098,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673460695,
      "ems": null
    },
    {
      "latitude": 51.787781,
      "longitude": 19.480209,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673460701,
      "ems": null
    },
    {
      "latitude": 51.78685,
      "longitude": 19.485016,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673460706,
      "ems": null
    },
    {
      "latitude": 51.785843,
      "longitude": 19.490414,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673460712,
      "ems": null
    },
    {
      "latitude": 51.784847,
      "longitude": 19.495392,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673460718,
      "ems": null
    },
    {
      "latitude": 51.783684,
      "longitude": 19.500961,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673460725,
      "ems": null
    },
    {
      "latitude": 51.782593,
      "longitude": 19.505854,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2654",
      "timestamp": 1673460731,
      "ems": null
    },
    {
      "latitude": 51.781635,
      "longitude": 19.510651,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673460737,
      "ems": null
    },
    {
      "latitude": 51.780762,
      "longitude": 19.516172,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460742,
      "ems": null
    },
    {
      "latitude": 51.779915,
      "longitude": 19.522018,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673460749,
      "ems": null
    },
    {
      "latitude": 51.779526,
      "longitude": 19.524933,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460752,
      "ems": null
    },
    {
      "latitude": 51.779251,
      "longitude": 19.527752,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673460755,
      "ems": null
    },
    {
      "latitude": 51.779022,
      "longitude": 19.530352,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673460758,
      "ems": null
    },
    {
      "latitude": 51.778656,
      "longitude": 19.533691,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460761,
      "ems": null
    },
    {
      "latitude": 51.778286,
      "longitude": 19.536743,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460764,
      "ems": null
    },
    {
      "latitude": 51.777725,
      "longitude": 19.541931,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460769,
      "ems": null
    },
    {
      "latitude": 51.77726,
      "longitude": 19.546204,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673460774,
      "ems": null
    },
    {
      "latitude": 51.776562,
      "longitude": 19.55513,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 93,
      "squawk": "2654",
      "timestamp": 1673460784,
      "ems": null
    },
    {
      "latitude": 51.776413,
      "longitude": 19.560043,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460787,
      "ems": null
    },
    {
      "latitude": 51.776413,
      "longitude": 19.563311,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 89,
      "squawk": "2654",
      "timestamp": 1673460790,
      "ems": null
    },
    {
      "latitude": 51.776413,
      "longitude": 19.566576,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 89,
      "squawk": "2654",
      "timestamp": 1673460793,
      "ems": null
    },
    {
      "latitude": 51.776413,
      "longitude": 19.56962,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460796,
      "ems": null
    },
    {
      "latitude": 51.776375,
      "longitude": 19.572754,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460798,
      "ems": null
    },
    {
      "latitude": 51.776375,
      "longitude": 19.576263,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460802,
      "ems": null
    },
    {
      "latitude": 51.776321,
      "longitude": 19.578974,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460805,
      "ems": null
    },
    {
      "latitude": 51.776283,
      "longitude": 19.582062,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460807,
      "ems": null
    },
    {
      "latitude": 51.77623,
      "longitude": 19.585728,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460810,
      "ems": null
    },
    {
      "latitude": 51.776184,
      "longitude": 19.592335,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673460816,
      "ems": null
    },
    {
      "latitude": 51.776096,
      "longitude": 19.598694,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460822,
      "ems": null
    },
    {
      "latitude": 51.775909,
      "longitude": 19.605844,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 92,
      "squawk": "2654",
      "timestamp": 1673460828,
      "ems": null
    },
    {
      "latitude": 51.775677,
      "longitude": 19.612656,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "2654",
      "timestamp": 1673460835,
      "ems": null
    },
    {
      "latitude": 51.775543,
      "longitude": 19.619207,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460841,
      "ems": null
    },
    {
      "latitude": 51.775398,
      "longitude": 19.625168,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 92,
      "squawk": "2654",
      "timestamp": 1673460846,
      "ems": null
    },
    {
      "latitude": 51.775261,
      "longitude": 19.631805,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673460853,
      "ems": null
    },
    {
      "latitude": 51.775406,
      "longitude": 19.637468,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 83,
      "squawk": "2654",
      "timestamp": 1673460858,
      "ems": null
    },
    {
      "latitude": 51.775818,
      "longitude": 19.640961,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 78,
      "squawk": "2654",
      "timestamp": 1673460862,
      "ems": null
    },
    {
      "latitude": 51.776001,
      "longitude": 19.642071,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 76,
      "squawk": "2654",
      "timestamp": 1673460863,
      "ems": null
    },
    {
      "latitude": 51.776749,
      "longitude": 19.64592,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "2654",
      "timestamp": 1673460867,
      "ems": null
    },
    {
      "latitude": 51.7771,
      "longitude": 19.647341,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "2654",
      "timestamp": 1673460869,
      "ems": null
    },
    {
      "latitude": 51.77829,
      "longitude": 19.65172,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460873,
      "ems": null
    },
    {
      "latitude": 51.779205,
      "longitude": 19.654987,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460876,
      "ems": null
    },
    {
      "latitude": 51.780006,
      "longitude": 19.657669,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673460879,
      "ems": null
    },
    {
      "latitude": 51.780762,
      "longitude": 19.660257,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460882,
      "ems": null
    },
    {
      "latitude": 51.781906,
      "longitude": 19.66419,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460886,
      "ems": null
    },
    {
      "latitude": 51.78273,
      "longitude": 19.667011,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673460889,
      "ems": null
    },
    {
      "latitude": 51.783871,
      "longitude": 19.670868,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460893,
      "ems": null
    },
    {
      "latitude": 51.784012,
      "longitude": 19.671478,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673460894,
      "ems": null
    },
    {
      "latitude": 51.785614,
      "longitude": 19.677256,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "2654",
      "timestamp": 1673460900,
      "ems": null
    },
    {
      "latitude": 51.787361,
      "longitude": 19.68399,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "2654",
      "timestamp": 1673460907,
      "ems": null
    },
    {
      "latitude": 51.789185,
      "longitude": 19.69084,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "2654",
      "timestamp": 1673460914,
      "ems": null
    },
    {
      "latitude": 51.790806,
      "longitude": 19.697495,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 68,
      "squawk": "2654",
      "timestamp": 1673460921,
      "ems": null
    },
    {
      "latitude": 51.792206,
      "longitude": 19.703598,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 69,
      "squawk": "2654",
      "timestamp": 1673460927,
      "ems": null
    },
    {
      "latitude": 51.793762,
      "longitude": 19.709473,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673460933,
      "ems": null
    },
    {
      "latitude": 51.794586,
      "longitude": 19.711847,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 59,
      "squawk": "2654",
      "timestamp": 1673460936,
      "ems": null
    },
    {
      "latitude": 51.795834,
      "longitude": 19.714661,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "2654",
      "timestamp": 1673460939,
      "ems": null
    },
    {
      "latitude": 51.797104,
      "longitude": 19.716822,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "2654",
      "timestamp": 1673460942,
      "ems": null
    },
    {
      "latitude": 51.79858,
      "longitude": 19.718781,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "2654",
      "timestamp": 1673460945,
      "ems": null
    },
    {
      "latitude": 51.800304,
      "longitude": 19.720535,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 31,
      "squawk": "2654",
      "timestamp": 1673460948,
      "ems": null
    },
    {
      "latitude": 51.801979,
      "longitude": 19.721832,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "2654",
      "timestamp": 1673460951,
      "ems": null
    },
    {
      "latitude": 51.803749,
      "longitude": 19.722748,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "2654",
      "timestamp": 1673460954,
      "ems": null
    },
    {
      "latitude": 51.805573,
      "longitude": 19.72328,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 6,
      "squawk": "2654",
      "timestamp": 1673460957,
      "ems": null
    },
    {
      "latitude": 51.807285,
      "longitude": 19.723434,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 3,
      "squawk": "2654",
      "timestamp": 1673460960,
      "ems": null
    },
    {
      "latitude": 51.808964,
      "longitude": 19.723129,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673460963,
      "ems": null
    },
    {
      "latitude": 51.810032,
      "longitude": 19.722748,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673460965,
      "ems": null
    },
    {
      "latitude": 51.81171,
      "longitude": 19.721832,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 337,
      "squawk": "2654",
      "timestamp": 1673460969,
      "ems": null
    },
    {
      "latitude": 51.813217,
      "longitude": 19.720533,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673460972,
      "ems": null
    },
    {
      "latitude": 51.814407,
      "longitude": 19.719049,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 320,
      "squawk": "2654",
      "timestamp": 1673460975,
      "ems": null
    },
    {
      "latitude": 51.815247,
      "longitude": 19.717636,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "2654",
      "timestamp": 1673460977,
      "ems": null
    },
    {
      "latitude": 51.816101,
      "longitude": 19.715782,
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
      "heading": 301,
      "squawk": "2654",
      "timestamp": 1673460981,
      "ems": null
    },
    {
      "latitude": 51.816696,
      "longitude": 19.713778,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 292,
      "squawk": "2654",
      "timestamp": 1673460983,
      "ems": null
    },
    {
      "latitude": 51.816925,
      "longitude": 19.712448,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 284,
      "squawk": "2654",
      "timestamp": 1673460986,
      "ems": null
    },
    {
      "latitude": 51.817017,
      "longitude": 19.708954,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 267,
      "squawk": "2654",
      "timestamp": 1673460990,
      "ems": null
    },
    {
      "latitude": 51.816692,
      "longitude": 19.706802,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2654",
      "timestamp": 1673460994,
      "ems": null
    },
    {
      "latitude": 51.816193,
      "longitude": 19.705093,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2654",
      "timestamp": 1673460996,
      "ems": null
    },
    {
      "latitude": 51.815434,
      "longitude": 19.703522,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 227,
      "squawk": "2654",
      "timestamp": 1673461000,
      "ems": null
    },
    {
      "latitude": 51.814457,
      "longitude": 19.702148,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 217,
      "squawk": "2654",
      "timestamp": 1673461003,
      "ems": null
    },
    {
      "latitude": 51.81348,
      "longitude": 19.701233,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 207,
      "squawk": "2654",
      "timestamp": 1673461006,
      "ems": null
    },
    {
      "latitude": 51.812222,
      "longitude": 19.700394,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673461009,
      "ems": null
    },
    {
      "latitude": 51.811199,
      "longitude": 19.699783,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 199,
      "squawk": "2654",
      "timestamp": 1673461012,
      "ems": null
    },
    {
      "latitude": 51.809753,
      "longitude": 19.69902,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 199,
      "squawk": "2654",
      "timestamp": 1673461015,
      "ems": null
    },
    {
      "latitude": 51.80859,
      "longitude": 19.698486,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 192,
      "squawk": "2654",
      "timestamp": 1673461018,
      "ems": null
    },
    {
      "latitude": 51.8078,
      "longitude": 19.698257,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 192,
      "squawk": "2654",
      "timestamp": 1673461020,
      "ems": null
    },
    {
      "latitude": 51.806442,
      "longitude": 19.697744,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "2654",
      "timestamp": 1673461024,
      "ems": null
    },
    {
      "latitude": 51.805241,
      "longitude": 19.697342,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 189,
      "squawk": "2654",
      "timestamp": 1673461027,
      "ems": null
    },
    {
      "latitude": 51.804214,
      "longitude": 19.697113,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 186,
      "squawk": "2654",
      "timestamp": 1673461030,
      "ems": null
    },
    {
      "latitude": 51.803238,
      "longitude": 19.69696,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 185,
      "squawk": "2654",
      "timestamp": 1673461033,
      "ems": null
    },
    {
      "latitude": 51.802368,
      "longitude": 19.696854,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 183,
      "squawk": "2654",
      "timestamp": 1673461035,
      "ems": null
    },
    {
      "latitude": 51.801132,
      "longitude": 19.696854,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 180,
      "squawk": "2654",
      "timestamp": 1673461039,
      "ems": null
    },
    {
      "latitude": 51.800072,
      "longitude": 19.696808,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 184,
      "squawk": "2654",
      "timestamp": 1673461042,
      "ems": null
    },
    {
      "latitude": 51.799072,
      "longitude": 19.696482,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 192,
      "squawk": "2654",
      "timestamp": 1673461045,
      "ems": null
    },
    {
      "latitude": 51.798203,
      "longitude": 19.696037,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 197,
      "squawk": "2654",
      "timestamp": 1673461048,
      "ems": null
    },
    {
      "latitude": 51.797287,
      "longitude": 19.695517,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 203,
      "squawk": "2654",
      "timestamp": 1673461051,
      "ems": null
    },
    {
      "latitude": 51.79644,
      "longitude": 19.694824,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 207,
      "squawk": "2654",
      "timestamp": 1673461054,
      "ems": null
    },
    {
      "latitude": 51.795731,
      "longitude": 19.694033,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 215,
      "squawk": "2654",
      "timestamp": 1673461057,
      "ems": null
    },
    {
      "latitude": 51.795044,
      "longitude": 19.693216,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 218,
      "squawk": "2654",
      "timestamp": 1673461060,
      "ems": null
    },
    {
      "latitude": 51.794403,
      "longitude": 19.692326,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "2654",
      "timestamp": 1673461063,
      "ems": null
    },
    {
      "latitude": 51.793835,
      "longitude": 19.691391,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 226,
      "squawk": "2654",
      "timestamp": 1673461066,
      "ems": null
    },
    {
      "latitude": 51.793182,
      "longitude": 19.690247,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 225,
      "squawk": "2654",
      "timestamp": 1673461069,
      "ems": null
    },
    {
      "latitude": 51.792572,
      "longitude": 19.689207,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 228,
      "squawk": "2654",
      "timestamp": 1673461072,
      "ems": null
    },
    {
      "latitude": 51.792156,
      "longitude": 19.688263,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 233,
      "squawk": "2654",
      "timestamp": 1673461075,
      "ems": null
    },
    {
      "latitude": 51.791611,
      "longitude": 19.686981,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 235,
      "squawk": "2654",
      "timestamp": 1673461078,
      "ems": null
    },
    {
      "latitude": 51.791107,
      "longitude": 19.685942,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 232,
      "squawk": "2654",
      "timestamp": 1673461081,
      "ems": null
    },
    {
      "latitude": 51.790573,
      "longitude": 19.68483,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 230,
      "squawk": "2654",
      "timestamp": 1673461084,
      "ems": null
    },
    {
      "latitude": 51.790054,
      "longitude": 19.683937,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 228,
      "squawk": "2654",
      "timestamp": 1673461087,
      "ems": null
    },
    {
      "latitude": 51.789597,
      "longitude": 19.683046,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "2654",
      "timestamp": 1673461090,
      "ems": null
    },
    {
      "latitude": 51.788635,
      "longitude": 19.680819,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673461096,
      "ems": null
    },
    {
      "latitude": 51.788223,
      "longitude": 19.679558,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673461099,
      "ems": null
    },
    {
      "latitude": 51.787922,
      "longitude": 19.678574,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461102,
      "ems": null
    },
    {
      "latitude": 51.787735,
      "longitude": 19.677811,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461104,
      "ems": null
    },
    {
      "latitude": 51.787445,
      "longitude": 19.676291,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461108,
      "ems": null
    },
    {
      "latitude": 51.78717,
      "longitude": 19.67503,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461111,
      "ems": null
    },
    {
      "latitude": 51.78685,
      "longitude": 19.673386,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461115,
      "ems": null
    },
    {
      "latitude": 51.786617,
      "longitude": 19.672089,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461118,
      "ems": null
    },
    {
      "latitude": 51.786392,
      "longitude": 19.670723,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673461121,
      "ems": null
    },
    {
      "latitude": 51.786247,
      "longitude": 19.669266,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673461124,
      "ems": null
    },
    {
      "latitude": 51.786118,
      "longitude": 19.668051,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673461127,
      "ems": null
    },
    {
      "latitude": 51.78598,
      "longitude": 19.666567,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673461130,
      "ems": null
    },
    {
      "latitude": 51.785873,
      "longitude": 19.665298,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 263,
      "squawk": "2654",
      "timestamp": 1673461133,
      "ems": null
    },
    {
      "latitude": 51.785782,
      "longitude": 19.663849,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673461136,
      "ems": null
    },
    {
      "latitude": 51.785751,
      "longitude": 19.663597,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673461137,
      "ems": null
    },
    {
      "latitude": 51.7855,
      "longitude": 19.661484,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673461142,
      "ems": null
    },
    {
      "latitude": 51.785385,
      "longitude": 19.660034,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673461145,
      "ems": null
    },
    {
      "latitude": 51.785202,
      "longitude": 19.657881,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673461149,
      "ems": null
    },
    {
      "latitude": 51.785156,
      "longitude": 19.656471,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 265,
      "squawk": "2654",
      "timestamp": 1673461152,
      "ems": null
    },
    {
      "latitude": 51.784973,
      "longitude": 19.65365,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 263,
      "squawk": "2654",
      "timestamp": 1673461158,
      "ems": null
    },
    {
      "latitude": 51.784698,
      "longitude": 19.651127,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673461164,
      "ems": null
    },
    {
      "latitude": 51.784378,
      "longitude": 19.648083,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673461170,
      "ems": null
    },
    {
      "latitude": 51.784058,
      "longitude": 19.645262,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673461176,
      "ems": null
    },
    {
      "latitude": 51.783783,
      "longitude": 19.643778,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461179,
      "ems": null
    },
    {
      "latitude": 51.783508,
      "longitude": 19.642664,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461182,
      "ems": null
    },
    {
      "latitude": 51.783081,
      "longitude": 19.640961,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461185,
      "ems": null
    },
    {
      "latitude": 51.782661,
      "longitude": 19.639664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673461188,
      "ems": null
    },
    {
      "latitude": 51.782181,
      "longitude": 19.638359,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673461191,
      "ems": null
    },
    {
      "latitude": 51.781731,
      "longitude": 19.637299,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 234,
      "squawk": "2654",
      "timestamp": 1673461194,
      "ems": null
    },
    {
      "latitude": 51.7808,
      "longitude": 19.635544,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "2654",
      "timestamp": 1673461199,
      "ems": null
    },
    {
      "latitude": 51.779961,
      "longitude": 19.634323,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "2654",
      "timestamp": 1673461203,
      "ems": null
    },
    {
      "latitude": 51.779121,
      "longitude": 19.633102,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 224,
      "squawk": "2654",
      "timestamp": 1673461207,
      "ems": null
    },
    {
      "latitude": 51.778286,
      "longitude": 19.631653,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 228,
      "squawk": "2654",
      "timestamp": 1673461211,
      "ems": null
    },
    {
      "latitude": 51.777542,
      "longitude": 19.630051,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673461215,
      "ems": null
    },
    {
      "latitude": 51.77655,
      "longitude": 19.627224,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673461221,
      "ems": null
    },
    {
      "latitude": 51.776329,
      "longitude": 19.626694,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673461222,
      "ems": null
    },
    {
      "latitude": 51.775818,
      "longitude": 19.624922,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "squawk": "2654",
      "timestamp": 1673461226,
      "ems": null
    },
    {
      "latitude": 51.775211,
      "longitude": 19.623032,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673461230,
      "ems": null
    },
    {
      "latitude": 51.774841,
      "longitude": 19.621658,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673461233,
      "ems": null
    },
    {
      "latitude": 51.774563,
      "longitude": 19.620819,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673461234,
      "ems": null
    },
    {
      "latitude": 51.773956,
      "longitude": 19.618683,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673461239,
      "ems": null
    },
    {
      "latitude": 51.77335,
      "longitude": 19.616547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461243,
      "ems": null
    },
    {
      "latitude": 51.77293,
      "longitude": 19.614944,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461246,
      "ems": null
    },
    {
      "latitude": 51.772522,
      "longitude": 19.613342,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461249,
      "ems": null
    },
    {
      "latitude": 51.772141,
      "longitude": 19.611969,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673461251,
      "ems": null
    },
    {
      "latitude": 51.771103,
      "longitude": 19.608368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673461258,
      "ems": null
    },
    {
      "latitude": 51.770184,
      "longitude": 19.605179,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673461263,
      "ems": null
    },
    {
      "latitude": 51.769115,
      "longitude": 19.601593,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673461270,
      "ems": null
    },
    {
      "latitude": 51.768135,
      "longitude": 19.598541,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673461276,
      "ems": null
    },
    {
      "latitude": 51.767113,
      "longitude": 19.595413,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673461282,
      "ems": null
    },
    {
      "latitude": 51.766602,
      "longitude": 19.593964,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673461285,
      "ems": null
    },
    {
      "latitude": 51.765518,
      "longitude": 19.590776,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673461291,
      "ems": null
    },
    {
      "latitude": 51.764458,
      "longitude": 19.58786,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673461297,
      "ems": null
    },
    {
      "latitude": 51.763458,
      "longitude": 19.584911,
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
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673461303,
      "ems": null
    },
    {
      "latitude": 51.762589,
      "longitude": 19.582165,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673461309,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 19.580383,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673461312,
      "ems": null
    },
    {
      "latitude": 51.761711,
      "longitude": 19.578934,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461315,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 19.576035,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461321,
      "ems": null
    },
    {
      "latitude": 51.760483,
      "longitude": 19.574371,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461324,
      "ems": null
    },
    {
      "latitude": 51.760082,
      "longitude": 19.57283,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461327,
      "ems": null
    },
    {
      "latitude": 51.759663,
      "longitude": 19.571381,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461330,
      "ems": null
    },
    {
      "latitude": 51.758881,
      "longitude": 19.568432,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461336,
      "ems": null
    },
    {
      "latitude": 51.758221,
      "longitude": 19.565582,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461342,
      "ems": null
    },
    {
      "latitude": 51.757553,
      "longitude": 19.562641,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673461348,
      "ems": null
    },
    {
      "latitude": 51.757244,
      "longitude": 19.561234,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673461351,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 19.558411,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461357,
      "ems": null
    },
    {
      "latitude": 51.756409,
      "longitude": 19.557074,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461360,
      "ems": null
    },
    {
      "latitude": 51.755859,
      "longitude": 19.554476,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673461366,
      "ems": null
    },
    {
      "latitude": 51.755241,
      "longitude": 19.55162,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673461372,
      "ems": null
    },
    {
      "latitude": 51.754635,
      "longitude": 19.54895,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461379,
      "ems": null
    },
    {
      "latitude": 51.754078,
      "longitude": 19.546585,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461385,
      "ems": null
    },
    {
      "latitude": 51.753754,
      "longitude": 19.545364,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461388,
      "ems": null
    },
    {
      "latitude": 51.753387,
      "longitude": 19.54401,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461391,
      "ems": null
    },
    {
      "latitude": 51.752838,
      "longitude": 19.541708,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461397,
      "ems": null
    },
    {
      "latitude": 51.752197,
      "longitude": 19.539036,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461403,
      "ems": null
    },
    {
      "latitude": 51.751705,
      "longitude": 19.536667,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461409,
      "ems": null
    },
    {
      "latitude": 51.751465,
      "longitude": 19.535398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673461412,
      "ems": null
    },
    {
      "latitude": 51.75124,
      "longitude": 19.534149,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461415,
      "ems": null
    },
    {
      "latitude": 51.751053,
      "longitude": 19.532928,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461418,
      "ems": null
    },
    {
      "latitude": 51.75082,
      "longitude": 19.531631,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461421,
      "ems": null
    },
    {
      "latitude": 51.750641,
      "longitude": 19.530573,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673461424,
      "ems": null
    },
    {
      "latitude": 51.750412,
      "longitude": 19.529238,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461427,
      "ems": null
    },
    {
      "latitude": 51.750183,
      "longitude": 19.527901,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461430,
      "ems": null
    },
    {
      "latitude": 51.749794,
      "longitude": 19.525681,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673461436,
      "ems": null
    },
    {
      "latitude": 51.749374,
      "longitude": 19.523239,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461442,
      "ems": null
    },
    {
      "latitude": 51.748947,
      "longitude": 19.520998,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461448,
      "ems": null
    },
    {
      "latitude": 51.748535,
      "longitude": 19.518251,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 255,
      "squawk": "2654",
      "timestamp": 1673461454,
      "ems": null
    },
    {
      "latitude": 51.747978,
      "longitude": 19.51561,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673461460,
      "ems": null
    },
    {
      "latitude": 51.747482,
      "longitude": 19.513426,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461465,
      "ems": null
    },
    {
      "latitude": 51.746841,
      "longitude": 19.510754,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461472,
      "ems": null
    },
    {
      "latitude": 51.746521,
      "longitude": 19.509491,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461475,
      "ems": null
    },
    {
      "latitude": 51.746292,
      "longitude": 19.5086,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461477,
      "ems": null
    },
    {
      "latitude": 51.745979,
      "longitude": 19.507217,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461481,
      "ems": null
    },
    {
      "latitude": 51.745331,
      "longitude": 19.504816,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461487,
      "ems": null
    },
    {
      "latitude": 51.744629,
      "longitude": 19.502258,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461493,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 19.499693,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461499,
      "ems": null
    },
    {
      "latitude": 51.743324,
      "longitude": 19.497147,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461505,
      "ems": null
    },
    {
      "latitude": 51.742672,
      "longitude": 19.4944,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461511,
      "ems": null
    },
    {
      "latitude": 51.741898,
      "longitude": 19.491528,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461517,
      "ems": null
    },
    {
      "latitude": 51.741089,
      "longitude": 19.488907,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673461523,
      "ems": null
    },
    {
      "latitude": 51.740719,
      "longitude": 19.487686,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673461526,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.486109,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673461530,
      "ems": null
    },
    {
      "latitude": 51.73938,
      "longitude": 19.483437,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673461535,
      "ems": null
    },
    {
      "latitude": 51.738949,
      "longitude": 19.482193,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673461538,
      "ems": null
    },
    {
      "latitude": 51.738464,
      "longitude": 19.480839,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673461541,
      "ems": null
    },
    {
      "latitude": 51.737972,
      "longitude": 19.479523,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673461544,
      "ems": null
    },
    {
      "latitude": 51.737457,
      "longitude": 19.478149,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673461547,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.475784,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673461553,
      "ems": null
    },
    {
      "latitude": 51.736588,
      "longitude": 19.47349,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673461557,
      "ems": null
    },
    {
      "latitude": 51.736481,
      "longitude": 19.471817,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673461560,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.469852,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "squawk": "2654",
      "timestamp": 1673461563,
      "ems": null
    },
    {
      "latitude": 51.736435,
      "longitude": 19.468155,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 268,
      "squawk": "2654",
      "timestamp": 1673461565,
      "ems": null
    },
    {
      "latitude": 51.736389,
      "longitude": 19.4664,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "2654",
      "timestamp": 1673461568,
      "ems": null
    },
    {
      "latitude": 51.736267,
      "longitude": 19.464508,
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
      "heading": 261,
      "squawk": "2654",
      "timestamp": 1673461571,
      "ems": null
    },
    {
      "latitude": 51.736111,
      "longitude": 19.46312,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673461574,
      "ems": null
    },
    {
      "latitude": 51.735783,
      "longitude": 19.461136,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461578,
      "ems": null
    },
    {
      "latitude": 51.73555,
      "longitude": 19.459763,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461580,
      "ems": null
    },
    {
      "latitude": 51.735168,
      "longitude": 19.457827,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461584,
      "ems": null
    },
    {
      "latitude": 51.73476,
      "longitude": 19.456024,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461587,
      "ems": null
    },
    {
      "latitude": 51.73439,
      "longitude": 19.454412,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461590,
      "ems": null
    },
    {
      "latitude": 51.733978,
      "longitude": 19.452703,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461593,
      "ems": null
    },
    {
      "latitude": 51.733597,
      "longitude": 19.451141,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461595,
      "ems": null
    },
    {
      "latitude": 51.733154,
      "longitude": 19.449587,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461598,
      "ems": null
    },
    {
      "latitude": 51.732712,
      "longitude": 19.447784,
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461602,
      "ems": null
    },
    {
      "latitude": 51.732376,
      "longitude": 19.446173,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461605,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 19.444687,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461608,
      "ems": null
    },
    {
      "latitude": 51.73164,
      "longitude": 19.443283,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461611,
      "ems": null
    },
    {
      "latitude": 51.731323,
      "longitude": 19.44194,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461614,
      "ems": null
    },
    {
      "latitude": 51.730591,
      "longitude": 19.439045,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673461620,
      "ems": null
    },
    {
      "latitude": 51.729904,
      "longitude": 19.435705,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673461626,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.432142,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461632,
      "ems": null
    },
    {
      "latitude": 51.728474,
      "longitude": 19.428482,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461638,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.427032,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673461640,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.423065,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673461647,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 19.421528,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461650,
      "ems": null
    },
    {
      "latitude": 51.726563,
      "longitude": 19.420116,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461653,
      "ems": null
    },
    {
      "latitude": 51.725693,
      "longitude": 19.416777,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461659,
      "ems": null
    },
    {
      "latitude": 51.725327,
      "longitude": 19.415365,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461662,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.413757,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461665,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.412384,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673461668,
      "ems": null
    },
    {
      "latitude": 51.724182,
      "longitude": 19.410986,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673461671,
      "ems": null
    },
    {
      "latitude": 51.723358,
      "longitude": 19.408091,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673461677,
      "ems": null
    },
    {
      "latitude": 51.722534,
      "longitude": 19.404974,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673461683,
      "ems": null
    },
    {
      "latitude": 51.721756,
      "longitude": 19.401188,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461689,
      "ems": null
    },
    {
      "latitude": 51.721443,
      "longitude": 19.39949,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 253,
      "squawk": "2654",
      "timestamp": 1673461692,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.397736,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673461695,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 19.396057,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673461698,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.394302,
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
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 257,
      "squawk": "2654",
      "timestamp": 1673461701,
      "ems": null
    },
    {
      "latitude": 51.720467,
      "longitude": 19.392624,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 260,
      "squawk": "2654",
      "timestamp": 1673461704,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.391022,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 262,
      "squawk": "2654",
      "timestamp": 1673461707,
      "ems": null
    },
    {
      "latitude": 51.720188,
      "longitude": 19.389343,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 264,
      "squawk": "2654",
      "timestamp": 1673461710,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.387751,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 266,
      "squawk": "2654",
      "timestamp": 1673461713,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.386192,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 270,
      "squawk": "2654",
      "timestamp": 1673461716,
      "ems": null
    },
    {
      "latitude": 51.720234,
      "longitude": 19.384995,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 276,
      "squawk": "2654",
      "timestamp": 1673461718,
      "ems": null
    },
    {
      "latitude": 51.720291,
      "longitude": 19.384411,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 278,
      "squawk": "2654",
      "timestamp": 1673461719,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.382401,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 291,
      "squawk": "2654",
      "timestamp": 1673461723,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.380646,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 299,
      "squawk": "2654",
      "timestamp": 1673461726,
      "ems": null
    },
    {
      "latitude": 51.721939,
      "longitude": 19.378918,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 306,
      "squawk": "2654",
      "timestamp": 1673461729,
      "ems": null
    },
    {
      "latitude": 51.72298,
      "longitude": 19.377365,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 318,
      "squawk": "2654",
      "timestamp": 1673461732,
      "ems": null
    },
    {
      "latitude": 51.723999,
      "longitude": 19.376171,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673461735,
      "ems": null
    },
    {
      "latitude": 51.725235,
      "longitude": 19.375132,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 333,
      "squawk": "2654",
      "timestamp": 1673461738,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.374315,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 335,
      "squawk": "2654",
      "timestamp": 1673461741,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.373245,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673461744,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.372534,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 337,
      "squawk": "2654",
      "timestamp": 1673461747,
      "ems": null
    },
    {
      "latitude": 51.730244,
      "longitude": 19.371643,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673461750,
      "ems": null
    },
    {
      "latitude": 51.731689,
      "longitude": 19.370827,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 341,
      "squawk": "2654",
      "timestamp": 1673461753,
      "ems": null
    },
    {
      "latitude": 51.733082,
      "longitude": 19.370117,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461756,
      "ems": null
    },
    {
      "latitude": 51.734299,
      "longitude": 19.36949,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461759,
      "ems": null
    },
    {
      "latitude": 51.735691,
      "longitude": 19.368744,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461762,
      "ems": null
    },
    {
      "latitude": 51.736668,
      "longitude": 19.368286,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461765,
      "ems": null
    },
    {
      "latitude": 51.738556,
      "longitude": 19.367264,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461768,
      "ems": null
    },
    {
      "latitude": 51.73946,
      "longitude": 19.366837,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673461771,
      "ems": null
    },
    {
      "latitude": 51.741211,
      "longitude": 19.366001,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673461774,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 19.365311,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 343,
      "squawk": "2654",
      "timestamp": 1673461777,
      "ems": null
    },
    {
      "latitude": 51.743931,
      "longitude": 19.364777,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673461780,
      "ems": null
    },
    {
      "latitude": 51.746796,
      "longitude": 19.363478,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 344,
      "squawk": "2654",
      "timestamp": 1673461786,
      "ems": null
    },
    {
      "latitude": 51.749542,
      "longitude": 19.362141,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "2654",
      "timestamp": 1673461792,
      "ems": null
    },
    {
      "latitude": 51.752106,
      "longitude": 19.360582,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673461798,
      "ems": null
    },
    {
      "latitude": 51.753387,
      "longitude": 19.359617,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 334,
      "squawk": "2654",
      "timestamp": 1673461801,
      "ems": null
    },
    {
      "latitude": 51.754395,
      "longitude": 19.358875,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 333,
      "squawk": "2654",
      "timestamp": 1673461804,
      "ems": null
    },
    {
      "latitude": 51.755539,
      "longitude": 19.35791,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 332,
      "squawk": "2654",
      "timestamp": 1673461807,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 19.356842,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673461810,
      "ems": null
    },
    {
      "latitude": 51.757828,
      "longitude": 19.355682,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 327,
      "squawk": "2654",
      "timestamp": 1673461813,
      "ems": null
    },
    {
      "latitude": 51.758686,
      "longitude": 19.354706,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 325,
      "squawk": "2654",
      "timestamp": 1673461816,
      "ems": null
    },
    {
      "latitude": 51.759571,
      "longitude": 19.353714,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 323,
      "squawk": "2654",
      "timestamp": 1673461819,
      "ems": null
    },
    {
      "latitude": 51.760502,
      "longitude": 19.35257,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 321,
      "squawk": "2654",
      "timestamp": 1673461822,
      "ems": null
    },
    {
      "latitude": 51.761536,
      "longitude": 19.351229,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 323,
      "squawk": "2654",
      "timestamp": 1673461825,
      "ems": null
    },
    {
      "latitude": 51.76255,
      "longitude": 19.350052,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 323,
      "squawk": "2654",
      "timestamp": 1673461828,
      "ems": null
    },
    {
      "latitude": 51.763527,
      "longitude": 19.348907,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 322,
      "squawk": "2654",
      "timestamp": 1673461831,
      "ems": null
    },
    {
      "latitude": 51.764511,
      "longitude": 19.347666,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 323,
      "squawk": "2654",
      "timestamp": 1673461834,
      "ems": null
    },
    {
      "latitude": 51.765388,
      "longitude": 19.346695,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 324,
      "squawk": "2654",
      "timestamp": 1673461837,
      "ems": null
    },
    {
      "latitude": 51.767624,
      "longitude": 19.344177,
      "altitude": {
        "feet": 3750,
        "meters": 1143
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
      "heading": 324,
      "squawk": "2654",
      "timestamp": 1673461843,
      "ems": null
    },
    {
      "latitude": 51.769814,
      "longitude": 19.341736,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 325,
      "squawk": "2654",
      "timestamp": 1673461849,
      "ems": null
    },
    {
      "latitude": 51.772095,
      "longitude": 19.339218,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673461855,
      "ems": null
    },
    {
      "latitude": 51.774376,
      "longitude": 19.336777,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673461861,
      "ems": null
    },
    {
      "latitude": 51.776871,
      "longitude": 19.334156,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 326,
      "squawk": "2654",
      "timestamp": 1673461867,
      "ems": null
    },
    {
      "latitude": 51.779495,
      "longitude": 19.33136,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 325,
      "squawk": "2654",
      "timestamp": 1673461873,
      "ems": null
    },
    {
      "latitude": 51.782101,
      "longitude": 19.32869,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "2654",
      "timestamp": 1673461880,
      "ems": null
    },
    {
      "latitude": 51.784756,
      "longitude": 19.326172,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673461885,
      "ems": null
    },
    {
      "latitude": 51.787735,
      "longitude": 19.323349,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673461891,
      "ems": null
    },
    {
      "latitude": 51.790947,
      "longitude": 19.320374,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 330,
      "squawk": "2654",
      "timestamp": 1673461897,
      "ems": null
    },
    {
      "latitude": 51.794037,
      "longitude": 19.317528,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673461904,
      "ems": null
    },
    {
      "latitude": 51.797234,
      "longitude": 19.314423,
      "altitude": {
        "feet": 3925,
        "meters": 1196
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 329,
      "squawk": "2654",
      "timestamp": 1673461909,
      "ems": null
    },
    {
      "latitude": 51.800537,
      "longitude": 19.311523,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 333,
      "squawk": "2654",
      "timestamp": 1673461915,
      "ems": null
    },
    {
      "latitude": 51.80246,
      "longitude": 19.310104,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 336,
      "squawk": "2654",
      "timestamp": 1673461919,
      "ems": null
    },
    {
      "latitude": 51.80426,
      "longitude": 19.308929,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 339,
      "squawk": "2654",
      "timestamp": 1673461922,
      "ems": null
    },
    {
      "latitude": 51.806122,
      "longitude": 19.30809,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 346,
      "squawk": "2654",
      "timestamp": 1673461925,
      "ems": null
    },
    {
      "latitude": 51.807987,
      "longitude": 19.307632,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 352,
      "squawk": "2654",
      "timestamp": 1673461928,
      "ems": null
    },
    {
      "latitude": 51.80983,
      "longitude": 19.307432,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "2654",
      "timestamp": 1673461931,
      "ems": null
    },
    {
      "latitude": 51.811798,
      "longitude": 19.307655,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "2654",
      "timestamp": 1673461934,
      "ems": null
    },
    {
      "latitude": 51.813663,
      "longitude": 19.308243,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "2654",
      "timestamp": 1673461936,
      "ems": null
    },
    {
      "latitude": 51.815598,
      "longitude": 19.309139,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "2654",
      "timestamp": 1673461940,
      "ems": null
    },
    {
      "latitude": 51.817528,
      "longitude": 19.310532,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 26,
      "squawk": "2654",
      "timestamp": 1673461943,
      "ems": null
    },
    {
      "latitude": 51.819252,
      "longitude": 19.312286,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 33,
      "squawk": "2654",
      "timestamp": 1673461946,
      "ems": null
    },
    {
      "latitude": 51.820587,
      "longitude": 19.313965,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 39,
      "squawk": "2654",
      "timestamp": 1673461948,
      "ems": null
    },
    {
      "latitude": 51.822277,
      "longitude": 19.316711,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 46,
      "squawk": "2654",
      "timestamp": 1673461952,
      "ems": null
    },
    {
      "latitude": 51.823517,
      "longitude": 19.319235,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "2654",
      "timestamp": 1673461955,
      "ems": null
    },
    {
      "latitude": 51.82457,
      "longitude": 19.321907,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673461958,
      "ems": null
    },
    {
      "latitude": 51.825443,
      "longitude": 19.324951,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "2654",
      "timestamp": 1673461960,
      "ems": null
    },
    {
      "latitude": 51.826187,
      "longitude": 19.328232,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "2654",
      "timestamp": 1673461964,
      "ems": null
    },
    {
      "latitude": 51.826607,
      "longitude": 19.33136,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 78,
      "squawk": "2654",
      "timestamp": 1673461967,
      "ems": null
    },
    {
      "latitude": 51.826885,
      "longitude": 19.334488,
      "altitude": {
        "feet": 4075,
        "meters": 1242
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
      "heading": 83,
      "squawk": "2654",
      "timestamp": 1673461970,
      "ems": null
    },
    {
      "latitude": 51.826981,
      "longitude": 19.335556,
      "altitude": {
        "feet": 4075,
        "meters": 1242
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "2654",
      "timestamp": 1673461971,
      "ems": null
    },
    {
      "latitude": 51.827026,
      "longitude": 19.339676,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "2654",
      "timestamp": 1673461975,
      "ems": null
    },
    {
      "latitude": 51.826859,
      "longitude": 19.34284,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 97,
      "squawk": "2654",
      "timestamp": 1673461978,
      "ems": null
    },
    {
      "latitude": 51.826675,
      "longitude": 19.344252,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673461980,
      "ems": null
    },
    {
      "latitude": 51.825909,
      "longitude": 19.348602,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673461984,
      "ems": null
    },
    {
      "latitude": 51.825348,
      "longitude": 19.35108,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673461986,
      "ems": null
    },
    {
      "latitude": 51.824467,
      "longitude": 19.354401,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 112,
      "squawk": "2654",
      "timestamp": 1673461990,
      "ems": null
    },
    {
      "latitude": 51.82386,
      "longitude": 19.356766,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "2654",
      "timestamp": 1673461993,
      "ems": null
    },
    {
      "latitude": 51.823021,
      "longitude": 19.359741,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673461996,
      "ems": null
    },
    {
      "latitude": 51.822464,
      "longitude": 19.361771,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "2654",
      "timestamp": 1673461998,
      "ems": null
    },
    {
      "latitude": 51.821533,
      "longitude": 19.364777,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 115,
      "squawk": "2654",
      "timestamp": 1673462002,
      "ems": null
    },
    {
      "latitude": 51.820862,
      "longitude": 19.366892,
      "altitude": {
        "feet": 4050,
        "meters": 1234
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673462005,
      "ems": null
    },
    {
      "latitude": 51.819901,
      "longitude": 19.369936,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 117,
      "squawk": "2654",
      "timestamp": 1673462008,
      "ems": null
    },
    {
      "latitude": 51.819065,
      "longitude": 19.372406,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673462011,
      "ems": null
    },
    {
      "latitude": 51.818115,
      "longitude": 19.375132,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "2654",
      "timestamp": 1673462014,
      "ems": null
    },
    {
      "latitude": 51.817291,
      "longitude": 19.377434,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673462017,
      "ems": null
    },
    {
      "latitude": 51.816376,
      "longitude": 19.379883,
      "altitude": {
        "feet": 4025,
        "meters": 1227
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
      "heading": 120,
      "squawk": "2654",
      "timestamp": 1673462020,
      "ems": null
    },
    {
      "latitude": 51.815342,
      "longitude": 19.382553,
      "altitude": {
        "feet": 4025,
        "meters": 1227
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673462023,
      "ems": null
    },
    {
      "latitude": 51.814316,
      "longitude": 19.385004,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "2654",
      "timestamp": 1673462026,
      "ems": null
    },
    {
      "latitude": 51.813354,
      "longitude": 19.387455,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 123,
      "squawk": "2654",
      "timestamp": 1673462029,
      "ems": null
    },
    {
      "latitude": 51.8125,
      "longitude": 19.389572,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "2654",
      "timestamp": 1673462032,
      "ems": null
    },
    {
      "latitude": 51.811523,
      "longitude": 19.391834,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "2654",
      "timestamp": 1673462035,
      "ems": null
    },
    {
      "latitude": 51.810379,
      "longitude": 19.394506,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 125,
      "squawk": "2654",
      "timestamp": 1673462038,
      "ems": null
    },
    {
      "latitude": 51.809372,
      "longitude": 19.396809,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 125,
      "squawk": "2654",
      "timestamp": 1673462041,
      "ems": null
    },
    {
      "latitude": 51.807587,
      "longitude": 19.401855,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 116,
      "squawk": "2654",
      "timestamp": 1673462047,
      "ems": null
    },
    {
      "latitude": 51.806854,
      "longitude": 19.404602,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 111,
      "squawk": "2654",
      "timestamp": 1673462050,
      "ems": null
    },
    {
      "latitude": 51.806305,
      "longitude": 19.407423,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673462053,
      "ems": null
    },
    {
      "latitude": 51.805798,
      "longitude": 19.410248,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462056,
      "ems": null
    },
    {
      "latitude": 51.805298,
      "longitude": 19.413065,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673462059,
      "ems": null
    },
    {
      "latitude": 51.805145,
      "longitude": 19.413986,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673462061,
      "ems": null
    },
    {
      "latitude": 51.804214,
      "longitude": 19.419022,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "2654",
      "timestamp": 1673462065,
      "ems": null
    },
    {
      "latitude": 51.803696,
      "longitude": 19.421824,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673462068,
      "ems": null
    },
    {
      "latitude": 51.803146,
      "longitude": 19.42457,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "2654",
      "timestamp": 1673462071,
      "ems": null
    },
    {
      "latitude": 51.802505,
      "longitude": 19.42754,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 108,
      "squawk": "2654",
      "timestamp": 1673462074,
      "ems": null
    },
    {
      "latitude": 51.801315,
      "longitude": 19.433107,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673462080,
      "ems": null
    },
    {
      "latitude": 51.800034,
      "longitude": 19.438601,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 110,
      "squawk": "2654",
      "timestamp": 1673462086,
      "ems": null
    },
    {
      "latitude": 51.798908,
      "longitude": 19.444656,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 103,
      "squawk": "2654",
      "timestamp": 1673462092,
      "ems": null
    },
    {
      "latitude": 51.798534,
      "longitude": 19.447632,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673462095,
      "ems": null
    },
    {
      "latitude": 51.798203,
      "longitude": 19.450403,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673462098,
      "ems": null
    },
    {
      "latitude": 51.797882,
      "longitude": 19.453354,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673462101,
      "ems": null
    },
    {
      "latitude": 51.797604,
      "longitude": 19.456482,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673462104,
      "ems": null
    },
    {
      "latitude": 51.797287,
      "longitude": 19.460127,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "2654",
      "timestamp": 1673462108,
      "ems": null
    },
    {
      "latitude": 51.797001,
      "longitude": 19.463348,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "2654",
      "timestamp": 1673462111,
      "ems": null
    },
    {
      "latitude": 51.796783,
      "longitude": 19.466141,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673462114,
      "ems": null
    },
    {
      "latitude": 51.796509,
      "longitude": 19.469036,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673462116,
      "ems": null
    },
    {
      "latitude": 51.796207,
      "longitude": 19.472198,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673462119,
      "ems": null
    },
    {
      "latitude": 51.795601,
      "longitude": 19.47876,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 98,
      "squawk": "2654",
      "timestamp": 1673462126,
      "ems": null
    },
    {
      "latitude": 51.794998,
      "longitude": 19.484846,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673462132,
      "ems": null
    },
    {
      "latitude": 51.794346,
      "longitude": 19.491043,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 99,
      "squawk": "2654",
      "timestamp": 1673462138,
      "ems": null
    },
    {
      "latitude": 51.793671,
      "longitude": 19.497169,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673462144,
      "ems": null
    },
    {
      "latitude": 51.793041,
      "longitude": 19.503098,
      "altitude": {
        "feet": 3975,
        "meters": 1212
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673462150,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.509418,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673462156,
      "ems": null
    },
    {
      "latitude": 51.791786,
      "longitude": 19.513702,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 100,
      "squawk": "2654",
      "timestamp": 1673462160,
      "ems": null
    },
    {
      "latitude": 51.790695,
      "longitude": 19.522705,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673462169,
      "ems": null
    },
    {
      "latitude": 51.789829,
      "longitude": 19.529572,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673462177,
      "ems": null
    },
    {
      "latitude": 51.788818,
      "longitude": 19.537329,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 101,
      "squawk": "2654",
      "timestamp": 1673462184,
      "ems": null
    },
    {
      "latitude": 51.787968,
      "longitude": 19.543762,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673462190,
      "ems": null
    },
    {
      "latitude": 51.787079,
      "longitude": 19.550097,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673462196,
      "ems": null
    },
    {
      "latitude": 51.786255,
      "longitude": 19.556332,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673462202,
      "ems": null
    },
    {
      "latitude": 51.785408,
      "longitude": 19.562225,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673462208,
      "ems": null
    },
    {
      "latitude": 51.784569,
      "longitude": 19.568481,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 102,
      "squawk": "2654",
      "timestamp": 1673462214,
      "ems": null
    },
    {
      "latitude": 51.783592,
      "longitude": 19.575119,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673462220,
      "ems": null
    },
    {
      "latitude": 51.782616,
      "longitude": 19.581299,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 104,
      "squawk": "2654",
      "timestamp": 1673462226,
      "ems": null
    },
    {
      "latitude": 51.781586,
      "longitude": 19.587509,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462233,
      "ems": null
    },
    {
      "latitude": 51.780533,
      "longitude": 19.593449,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462238,
      "ems": null
    },
    {
      "latitude": 51.77948,
      "longitude": 19.599535,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462244,
      "ems": null
    },
    {
      "latitude": 51.778427,
      "longitude": 19.60577,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462250,
      "ems": null
    },
    {
      "latitude": 51.77726,
      "longitude": 19.612274,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462257,
      "ems": null
    },
    {
      "latitude": 51.776237,
      "longitude": 19.618149,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462262,
      "ems": null
    },
    {
      "latitude": 51.77512,
      "longitude": 19.624634,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462268,
      "ems": null
    },
    {
      "latitude": 51.774002,
      "longitude": 19.631119,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 105,
      "squawk": "2654",
      "timestamp": 1673462275,
      "ems": null
    },
    {
      "latitude": 51.7733,
      "longitude": 19.637096,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "2654",
      "timestamp": 1673462280,
      "ems": null
    },
    {
      "latitude": 51.773163,
      "longitude": 19.640579,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 91,
      "squawk": "2654",
      "timestamp": 1673462284,
      "ems": null
    },
    {
      "latitude": 51.773209,
      "longitude": 19.643703,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 86,
      "squawk": "2654",
      "timestamp": 1673462287,
      "ems": null
    },
    {
      "latitude": 51.773392,
      "longitude": 19.646301,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 81,
      "squawk": "2654",
      "timestamp": 1673462290,
      "ems": null
    },
    {
      "latitude": 51.773861,
      "longitude": 19.650116,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 77,
      "squawk": "2654",
      "timestamp": 1673462293,
      "ems": null
    },
    {
      "latitude": 51.774235,
      "longitude": 19.652557,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 74,
      "squawk": "2654",
      "timestamp": 1673462295,
      "ems": null
    },
    {
      "latitude": 51.774979,
      "longitude": 19.656372,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 71,
      "squawk": "2654",
      "timestamp": 1673462298,
      "ems": null
    },
    {
      "latitude": 51.775818,
      "longitude": 19.659882,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "2654",
      "timestamp": 1673462302,
      "ems": null
    },
    {
      "latitude": 51.776608,
      "longitude": 19.662933,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "2654",
      "timestamp": 1673462305,
      "ems": null
    },
    {
      "latitude": 51.777374,
      "longitude": 19.665825,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "2654",
      "timestamp": 1673462308,
      "ems": null
    },
    {
      "latitude": 51.778152,
      "longitude": 19.668571,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462310,
      "ems": null
    },
    {
      "latitude": 51.779121,
      "longitude": 19.672012,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673462314,
      "ems": null
    },
    {
      "latitude": 51.780006,
      "longitude": 19.674988,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673462317,
      "ems": null
    },
    {
      "latitude": 51.780891,
      "longitude": 19.677887,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673462320,
      "ems": null
    },
    {
      "latitude": 51.781769,
      "longitude": 19.680893,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673462323,
      "ems": null
    },
    {
      "latitude": 51.782593,
      "longitude": 19.683565,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673462326,
      "ems": null
    },
    {
      "latitude": 51.783463,
      "longitude": 19.68646,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 63,
      "squawk": "2654",
      "timestamp": 1673462329,
      "ems": null
    },
    {
      "latitude": 51.785156,
      "longitude": 19.692251,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462335,
      "ems": null
    },
    {
      "latitude": 51.78685,
      "longitude": 19.698114,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "2654",
      "timestamp": 1673462341,
      "ems": null
    },
    {
      "latitude": 51.788544,
      "longitude": 19.703905,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462347,
      "ems": null
    },
    {
      "latitude": 51.790192,
      "longitude": 19.709919,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462353,
      "ems": null
    },
    {
      "latitude": 51.791748,
      "longitude": 19.715559,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462359,
      "ems": null
    },
    {
      "latitude": 51.793415,
      "longitude": 19.721451,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "2654",
      "timestamp": 1673462365,
      "ems": null
    },
    {
      "latitude": 51.795185,
      "longitude": 19.727249,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 60,
      "squawk": "2654",
      "timestamp": 1673462371,
      "ems": null
    },
    {
      "latitude": 51.796253,
      "longitude": 19.729996,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "2654",
      "timestamp": 1673462374,
      "ems": null
    },
    {
      "latitude": 51.797241,
      "longitude": 19.732187,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "2654",
      "timestamp": 1673462376,
      "ems": null
    },
    {
      "latitude": 51.798981,
      "longitude": 19.735157,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 44,
      "squawk": "2654",
      "timestamp": 1673462380,
      "ems": null
    },
    {
      "latitude": 51.800446,
      "longitude": 19.737167,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "2654",
      "timestamp": 1673462383,
      "ems": null
    },
    {
      "latitude": 51.802166,
      "longitude": 19.738998,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "2654",
      "timestamp": 1673462386,
      "ems": null
    },
    {
      "latitude": 51.803421,
      "longitude": 19.739983,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "2654",
      "timestamp": 1673462388,
      "ems": null
    },
    {
      "latitude": 51.805424,
      "longitude": 19.741135,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 17,
      "squawk": "2654",
      "timestamp": 1673462392,
      "ems": null
    },
    {
      "latitude": 51.807449,
      "longitude": 19.741913,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "2654",
      "timestamp": 1673462395,
      "ems": null
    },
    {
      "latitude": 51.80809,
      "longitude": 19.74206,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 7,
      "squawk": "2654",
      "timestamp": 1673462396,
      "ems": null
    },
    {
      "latitude": 51.810871,
      "longitude": 19.742126,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 357,
      "squawk": "2654",
      "timestamp": 1673462401,
      "ems": null
    },
    {
      "latitude": 51.813309,
      "longitude": 19.741541,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "2654",
      "timestamp": 1673462405,
      "ems": null
    },
    {
      "latitude": 51.81469,
      "longitude": 19.740829,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 338,
      "squawk": "2654",
      "timestamp": 1673462408,
      "ems": null
    },
    {
      "latitude": 51.817158,
      "longitude": 19.738617,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 324,
      "squawk": "2654",
      "timestamp": 1673462413,
      "ems": null
    },
    {
      "latitude": 51.817978,
      "longitude": 19.737606,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 319,
      "squawk": "2654",
      "timestamp": 1673462414,
      "ems": null
    },
    {
      "latitude": 51.819122,
      "longitude": 19.735676,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 312,
      "squawk": "2654",
      "timestamp": 1673462417,
      "ems": null
    },
    {
      "latitude": 51.820042,
      "longitude": 19.733582,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 302,
      "squawk": "2654",
      "timestamp": 1673462420,
      "ems": null
    },
    {
      "latitude": 51.820602,
      "longitude": 19.731827,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 294,
      "squawk": "2654",
      "timestamp": 1673462423,
      "ems": null
    },
    {
      "latitude": 51.821114,
      "longitude": 19.729462,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 287,
      "squawk": "2654",
      "timestamp": 1673462426,
      "ems": null
    },
    {
      "latitude": 51.82132,
      "longitude": 19.727215,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 277,
      "squawk": "2654",
      "timestamp": 1673462429,
      "ems": null
    },
    {
      "latitude": 51.821365,
      "longitude": 19.725061,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "2654",
      "timestamp": 1673462432,
      "ems": null
    },
    {
      "latitude": 51.821114,
      "longitude": 19.722672,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673462435,
      "ems": null
    },
    {
      "latitude": 51.820724,
      "longitude": 19.720682,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462438,
      "ems": null
    },
    {
      "latitude": 51.820496,
      "longitude": 19.71994,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462440,
      "ems": null
    },
    {
      "latitude": 51.819534,
      "longitude": 19.717564,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 231,
      "squawk": "2654",
      "timestamp": 1673462444,
      "ems": null
    },
    {
      "latitude": 51.8186,
      "longitude": 19.716187,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 218,
      "squawk": "2654",
      "timestamp": 1673462446,
      "ems": null
    },
    {
      "latitude": 51.817482,
      "longitude": 19.715118,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 209,
      "squawk": "2654",
      "timestamp": 1673462449,
      "ems": null
    },
    {
      "latitude": 51.816319,
      "longitude": 19.714279,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 202,
      "squawk": "2654",
      "timestamp": 1673462452,
      "ems": null
    },
    {
      "latitude": 51.815002,
      "longitude": 19.713408,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673462456,
      "ems": null
    },
    {
      "latitude": 51.813946,
      "longitude": 19.712753,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673462458,
      "ems": null
    },
    {
      "latitude": 51.812759,
      "longitude": 19.711996,
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
      "heading": 202,
      "squawk": "2654",
      "timestamp": 1673462462,
      "ems": null
    },
    {
      "latitude": 51.811478,
      "longitude": 19.711105,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 201,
      "squawk": "2654",
      "timestamp": 1673462465,
      "ems": null
    },
    {
      "latitude": 51.811157,
      "longitude": 19.710957,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "2654",
      "timestamp": 1673462467,
      "ems": null
    },
    {
      "latitude": 51.809326,
      "longitude": 19.709696,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "2654",
      "timestamp": 1673462471,
      "ems": null
    },
    {
      "latitude": 51.808319,
      "longitude": 19.708954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "2654",
      "timestamp": 1673462474,
      "ems": null
    },
    {
      "latitude": 51.807358,
      "longitude": 19.708284,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 203,
      "squawk": "2654",
      "timestamp": 1673462477,
      "ems": null
    },
    {
      "latitude": 51.805481,
      "longitude": 19.7068,
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
      "heading": 206,
      "squawk": "2654",
      "timestamp": 1673462483,
      "ems": null
    },
    {
      "latitude": 51.80468,
      "longitude": 19.706116,
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
      "heading": 208,
      "squawk": "2654",
      "timestamp": 1673462485,
      "ems": null
    },
    {
      "latitude": 51.803879,
      "longitude": 19.705168,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 218,
      "squawk": "2654",
      "timestamp": 1673462489,
      "ems": null
    },
    {
      "latitude": 51.803192,
      "longitude": 19.704132,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "2654",
      "timestamp": 1673462492,
      "ems": null
    },
    {
      "latitude": 51.802677,
      "longitude": 19.703064,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 232,
      "squawk": "2654",
      "timestamp": 1673462494,
      "ems": null
    },
    {
      "latitude": 51.802166,
      "longitude": 19.701767,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673462498,
      "ems": null
    },
    {
      "latitude": 51.801746,
      "longitude": 19.70047,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462500,
      "ems": null
    },
    {
      "latitude": 51.801453,
      "longitude": 19.698784,
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
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673462504,
      "ems": null
    },
    {
      "latitude": 51.80127,
      "longitude": 19.697298,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673462507,
      "ems": null
    },
    {
      "latitude": 51.801094,
      "longitude": 19.695969,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 258,
      "squawk": "2654",
      "timestamp": 1673462509,
      "ems": null
    },
    {
      "latitude": 51.800861,
      "longitude": 19.69429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "2654",
      "timestamp": 1673462513,
      "ems": null
    },
    {
      "latitude": 51.800629,
      "longitude": 19.692993,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673462516,
      "ems": null
    },
    {
      "latitude": 51.800217,
      "longitude": 19.691286,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462519,
      "ems": null
    },
    {
      "latitude": 51.799839,
      "longitude": 19.689941,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462522,
      "ems": null
    },
    {
      "latitude": 51.799484,
      "longitude": 19.688688,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462525,
      "ems": null
    },
    {
      "latitude": 51.799118,
      "longitude": 19.687351,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462528,
      "ems": null
    },
    {
      "latitude": 51.798302,
      "longitude": 19.684677,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462534,
      "ems": null
    },
    {
      "latitude": 51.798019,
      "longitude": 19.68364,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462536,
      "ems": null
    },
    {
      "latitude": 51.797604,
      "longitude": 19.682312,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462539,
      "ems": null
    },
    {
      "latitude": 51.797092,
      "longitude": 19.680786,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462543,
      "ems": null
    },
    {
      "latitude": 51.796673,
      "longitude": 19.679565,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462546,
      "ems": null
    },
    {
      "latitude": 51.796299,
      "longitude": 19.678497,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462549,
      "ems": null
    },
    {
      "latitude": 51.795868,
      "longitude": 19.677404,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673462552,
      "ems": null
    },
    {
      "latitude": 51.795464,
      "longitude": 19.676208,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462555,
      "ems": null
    },
    {
      "latitude": 51.794678,
      "longitude": 19.673841,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673462561,
      "ems": null
    },
    {
      "latitude": 51.794254,
      "longitude": 19.672623,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673462564,
      "ems": null
    },
    {
      "latitude": 51.793808,
      "longitude": 19.671467,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673462568,
      "ems": null
    },
    {
      "latitude": 51.792984,
      "longitude": 19.669239,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673462573,
      "ems": null
    },
    {
      "latitude": 51.792297,
      "longitude": 19.666864,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462579,
      "ems": null
    },
    {
      "latitude": 51.791878,
      "longitude": 19.665451,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462583,
      "ems": null
    },
    {
      "latitude": 51.791611,
      "longitude": 19.664339,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2654",
      "timestamp": 1673462585,
      "ems": null
    },
    {
      "latitude": 51.791275,
      "longitude": 19.66301,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673462589,
      "ems": null
    },
    {
      "latitude": 51.790993,
      "longitude": 19.661713,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673462592,
      "ems": null
    },
    {
      "latitude": 51.790787,
      "longitude": 19.660553,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673462595,
      "ems": null
    },
    {
      "latitude": 51.790512,
      "longitude": 19.659441,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462598,
      "ems": null
    },
    {
      "latitude": 51.789829,
      "longitude": 19.657211,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673462604,
      "ems": null
    },
    {
      "latitude": 51.789047,
      "longitude": 19.65506,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673462610,
      "ems": null
    },
    {
      "latitude": 51.788635,
      "longitude": 19.654095,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "2654",
      "timestamp": 1673462613,
      "ems": null
    },
    {
      "latitude": 51.7882,
      "longitude": 19.652939,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 236,
      "squawk": "2654",
      "timestamp": 1673462616,
      "ems": null
    },
    {
      "latitude": 51.787811,
      "longitude": 19.652018,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673462619,
      "ems": null
    },
    {
      "latitude": 51.787399,
      "longitude": 19.650904,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 238,
      "squawk": "2654",
      "timestamp": 1673462622,
      "ems": null
    },
    {
      "latitude": 51.786991,
      "longitude": 19.649811,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462625,
      "ems": null
    },
    {
      "latitude": 51.786621,
      "longitude": 19.64875,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673462628,
      "ems": null
    },
    {
      "latitude": 51.786247,
      "longitude": 19.647751,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 239,
      "squawk": "2654",
      "timestamp": 1673462631,
      "ems": null
    },
    {
      "latitude": 51.785339,
      "longitude": 19.645559,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 235,
      "squawk": "2654",
      "timestamp": 1673462637,
      "ems": null
    },
    {
      "latitude": 51.784515,
      "longitude": 19.64348,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673462643,
      "ems": null
    },
    {
      "latitude": 51.783546,
      "longitude": 19.641113,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673462649,
      "ems": null
    },
    {
      "latitude": 51.78273,
      "longitude": 19.638952,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 237,
      "squawk": "2654",
      "timestamp": 1673462655,
      "ems": null
    },
    {
      "latitude": 51.781868,
      "longitude": 19.636765,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 241,
      "squawk": "2654",
      "timestamp": 1673462661,
      "ems": null
    },
    {
      "latitude": 51.781498,
      "longitude": 19.63562,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673462664,
      "ems": null
    },
    {
      "latitude": 51.781174,
      "longitude": 19.634647,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673462667,
      "ems": null
    },
    {
      "latitude": 51.780853,
      "longitude": 19.633533,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 242,
      "squawk": "2654",
      "timestamp": 1673462670,
      "ems": null
    },
    {
      "latitude": 51.780472,
      "longitude": 19.632416,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673462673,
      "ems": null
    },
    {
      "latitude": 51.780148,
      "longitude": 19.631271,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673462676,
      "ems": null
    },
    {
      "latitude": 51.779308,
      "longitude": 19.62883,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 240,
      "squawk": "2654",
      "timestamp": 1673462682,
      "ems": null
    },
    {
      "latitude": 51.778984,
      "longitude": 19.627762,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462685,
      "ems": null
    },
    {
      "latitude": 51.778656,
      "longitude": 19.626465,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462688,
      "ems": null
    },
    {
      "latitude": 51.778336,
      "longitude": 19.625219,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462691,
      "ems": null
    },
    {
      "latitude": 51.777725,
      "longitude": 19.622803,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462697,
      "ems": null
    },
    {
      "latitude": 51.7771,
      "longitude": 19.620617,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462703,
      "ems": null
    },
    {
      "latitude": 51.776367,
      "longitude": 19.617945,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462709,
      "ems": null
    },
    {
      "latitude": 51.775631,
      "longitude": 19.615326,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673462715,
      "ems": null
    },
    {
      "latitude": 51.774719,
      "longitude": 19.612377,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462721,
      "ems": null
    },
    {
      "latitude": 51.773861,
      "longitude": 19.609451,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462727,
      "ems": null
    },
    {
      "latitude": 51.77293,
      "longitude": 19.606247,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462733,
      "ems": null
    },
    {
      "latitude": 51.772049,
      "longitude": 19.603195,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462739,
      "ems": null
    },
    {
      "latitude": 51.77124,
      "longitude": 19.600203,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462745,
      "ems": null
    },
    {
      "latitude": 51.770233,
      "longitude": 19.596788,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462751,
      "ems": null
    },
    {
      "latitude": 51.769115,
      "longitude": 19.593124,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462757,
      "ems": null
    },
    {
      "latitude": 51.768127,
      "longitude": 19.589514,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462764,
      "ems": null
    },
    {
      "latitude": 51.767166,
      "longitude": 19.585876,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462770,
      "ems": null
    },
    {
      "latitude": 51.766159,
      "longitude": 19.582388,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462775,
      "ems": null
    },
    {
      "latitude": 51.765156,
      "longitude": 19.5784,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462782,
      "ems": null
    },
    {
      "latitude": 51.76469,
      "longitude": 19.576569,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462785,
      "ems": null
    },
    {
      "latitude": 51.763855,
      "longitude": 19.573059,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462791,
      "ems": null
    },
    {
      "latitude": 51.762875,
      "longitude": 19.569473,
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
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462797,
      "ems": null
    },
    {
      "latitude": 51.761993,
      "longitude": 19.565908,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462803,
      "ems": null
    },
    {
      "latitude": 51.761215,
      "longitude": 19.562346,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462809,
      "ems": null
    },
    {
      "latitude": 51.760391,
      "longitude": 19.558783,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462815,
      "ems": null
    },
    {
      "latitude": 51.759617,
      "longitude": 19.555511,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462821,
      "ems": null
    },
    {
      "latitude": 51.758732,
      "longitude": 19.552307,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462827,
      "ems": null
    },
    {
      "latitude": 51.757942,
      "longitude": 19.549332,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462833,
      "ems": null
    },
    {
      "latitude": 51.757198,
      "longitude": 19.546204,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462839,
      "ems": null
    },
    {
      "latitude": 51.7565,
      "longitude": 19.543076,
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462845,
      "ems": null
    },
    {
      "latitude": 51.755753,
      "longitude": 19.539719,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462851,
      "ems": null
    },
    {
      "latitude": 51.754944,
      "longitude": 19.536661,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462858,
      "ems": null
    },
    {
      "latitude": 51.754219,
      "longitude": 19.533844,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462863,
      "ems": null
    },
    {
      "latitude": 51.753521,
      "longitude": 19.530869,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673462869,
      "ems": null
    },
    {
      "latitude": 51.752884,
      "longitude": 19.527752,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462876,
      "ems": null
    },
    {
      "latitude": 51.752171,
      "longitude": 19.524994,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462882,
      "ems": null
    },
    {
      "latitude": 51.751518,
      "longitude": 19.522324,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462887,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 19.520849,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462890,
      "ems": null
    },
    {
      "latitude": 51.750687,
      "longitude": 19.518028,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 254,
      "squawk": "2654",
      "timestamp": 1673462897,
      "ems": null
    },
    {
      "latitude": 51.750137,
      "longitude": 19.515133,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "2654",
      "timestamp": 1673462902,
      "ems": null
    },
    {
      "latitude": 51.749424,
      "longitude": 19.512329,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462908,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 19.509491,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462915,
      "ems": null
    },
    {
      "latitude": 51.748028,
      "longitude": 19.506683,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673462920,
      "ems": null
    },
    {
      "latitude": 51.74728,
      "longitude": 19.503479,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462927,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 19.502142,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462930,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 19.499054,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462936,
      "ems": null
    },
    {
      "latitude": 51.74556,
      "longitude": 19.496002,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673462941,
      "ems": null
    },
    {
      "latitude": 51.744827,
      "longitude": 19.49279,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462948,
      "ems": null
    },
    {
      "latitude": 51.744049,
      "longitude": 19.489597,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462954,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 19.486618,
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462960,
      "ems": null
    },
    {
      "latitude": 51.742393,
      "longitude": 19.483643,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 244,
      "squawk": "2654",
      "timestamp": 1673462966,
      "ems": null
    },
    {
      "latitude": 51.741928,
      "longitude": 19.482117,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673462969,
      "ems": null
    },
    {
      "latitude": 51.741135,
      "longitude": 19.478989,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462975,
      "ems": null
    },
    {
      "latitude": 51.740295,
      "longitude": 19.475716,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673462981,
      "ems": null
    },
    {
      "latitude": 51.739471,
      "longitude": 19.472078,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673462987,
      "ems": null
    },
    {
      "latitude": 51.73867,
      "longitude": 19.468765,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673462993,
      "ems": null
    },
    {
      "latitude": 51.737831,
      "longitude": 19.465332,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673462999,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.461975,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673463005,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.460796,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 243,
      "squawk": "2654",
      "timestamp": 1673463008,
      "ems": null
    },
    {
      "latitude": 51.735443,
      "longitude": 19.457159,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "2654",
      "timestamp": 1673463015,
      "ems": null
    },
    {
      "latitude": 51.734619,
      "longitude": 19.454193,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 245,
      "squawk": "2654",
      "timestamp": 1673463020,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 19.450912,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673463026,
      "ems": null
    },
    {
      "latitude": 51.732895,
      "longitude": 19.447479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 247,
      "squawk": "2654",
      "timestamp": 1673463033,
      "ems": null
    },
    {
      "latitude": 51.732651,
      "longitude": 19.44632,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673463035,
      "ems": null
    },
    {
      "latitude": 51.731731,
      "longitude": 19.442673,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 248,
      "squawk": "2654",
      "timestamp": 1673463041,
      "ems": null
    },
    {
      "latitude": 51.730896,
      "longitude": 19.439087,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463048,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.435631,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463054,
      "ems": null
    },
    {
      "latitude": 51.729355,
      "longitude": 19.432291,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463059,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.429247,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463065,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.426575,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 249,
      "squawk": "2654",
      "timestamp": 1673463069,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.421082,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463078,
      "ems": null
    },
    {
      "latitude": 51.726242,
      "longitude": 19.418112,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "2654",
      "timestamp": 1673463083,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 19.415131,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463088,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.410244,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "2654",
      "timestamp": 1673463097,
      "ems": null
    },
    {
      "latitude": 51.721653,
      "longitude": 19.408302,
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
      "heading": 165,
      "squawk": "2654",
      "timestamp": 1673463309,
      "ems": null
    },
    {
      "latitude": 51.72134,
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
      "squawk": "2654",
      "timestamp": 1673463315,
      "ems": null
    },
    {
      "latitude": 51.720863,
      "longitude": 19.408443,
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
      "squawk": "2654",
      "timestamp": 1673463323,
      "ems": null
    },
    {
      "latitude": 51.720596,
      "longitude": 19.408493,
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
      "squawk": "2654",
      "timestamp": 1673463329,
      "ems": null
    }
  ],
};
