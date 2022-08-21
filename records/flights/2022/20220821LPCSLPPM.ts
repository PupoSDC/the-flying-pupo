import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220821LPCSLPPM",
    callsign: "RVP020",
    name: "Cross Country With Adriana",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 21, 7, 10).getTime(),
    arrival: new Date(2022, 7, 21, 8, 50).getTime(),
    singleEnginePistonTime: 100,
    picTime: 100,
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
      registration: "CS-ECD",
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
      name: "Portimao Airport",
      code: "LPPM",
      position: {
        latitude: 37.1493,
        longitude: -8.58396,
      },
    },
  },
  track: [
    {
      "latitude": 38.719311,
      "longitude": -9.352724,
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
      "heading": 248,
      "squawk": "0",
      "timestamp": 1661066570,
      "ems": null
    },
    {
      "latitude": 38.719265,
      "longitude": -9.352978,
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
      "heading": 279,
      "squawk": "0",
      "timestamp": 1661066577,
      "ems": null
    },
    {
      "latitude": 38.719521,
      "longitude": -9.353165,
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
      "heading": 343,
      "squawk": "3276",
      "timestamp": 1661066644,
      "ems": null
    },
    {
      "latitude": 38.720184,
      "longitude": -9.353409,
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
      "squawk": "3276",
      "timestamp": 1661066650,
      "ems": null
    },
    {
      "latitude": 38.721233,
      "longitude": -9.353806,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3276",
      "timestamp": 1661066656,
      "ems": null
    },
    {
      "latitude": 38.723038,
      "longitude": -9.354492,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 343,
      "squawk": "3276",
      "timestamp": 1661066663,
      "ems": null
    },
    {
      "latitude": 38.724792,
      "longitude": -9.355157,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 344,
      "squawk": "3276",
      "timestamp": 1661066669,
      "ems": null
    },
    {
      "latitude": 38.726715,
      "longitude": -9.355873,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3276",
      "timestamp": 1661066675,
      "ems": null
    },
    {
      "latitude": 38.728821,
      "longitude": -9.356649,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 344,
      "squawk": "3276",
      "timestamp": 1661066682,
      "ems": null
    },
    {
      "latitude": 38.730438,
      "longitude": -9.357178,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 347,
      "squawk": "3276",
      "timestamp": 1661066688,
      "ems": null
    },
    {
      "latitude": 38.731339,
      "longitude": -9.357367,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 350,
      "squawk": "3276",
      "timestamp": 1661066691,
      "ems": null
    },
    {
      "latitude": 38.732906,
      "longitude": -9.357788,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 348,
      "squawk": "3276",
      "timestamp": 1661066697,
      "ems": null
    },
    {
      "latitude": 38.733719,
      "longitude": -9.357964,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 351,
      "squawk": "3276",
      "timestamp": 1661066700,
      "ems": null
    },
    {
      "latitude": 38.734497,
      "longitude": -9.358083,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 351,
      "squawk": "3276",
      "timestamp": 1661066703,
      "ems": null
    },
    {
      "latitude": 38.735916,
      "longitude": -9.3585,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 344,
      "squawk": "3276",
      "timestamp": 1661066709,
      "ems": null
    },
    {
      "latitude": 38.737373,
      "longitude": -9.35907,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 344,
      "squawk": "3276",
      "timestamp": 1661066716,
      "ems": null
    },
    {
      "latitude": 38.737976,
      "longitude": -9.359217,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "3276",
      "timestamp": 1661066720,
      "ems": null
    },
    {
      "latitude": 38.739002,
      "longitude": -9.359619,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3276",
      "timestamp": 1661066724,
      "ems": null
    },
    {
      "latitude": 38.7397,
      "longitude": -9.359863,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "3276",
      "timestamp": 1661066727,
      "ems": null
    },
    {
      "latitude": 38.740398,
      "longitude": -9.360107,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3276",
      "timestamp": 1661066730,
      "ems": null
    },
    {
      "latitude": 38.741867,
      "longitude": -9.360471,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 349,
      "squawk": "3276",
      "timestamp": 1661066737,
      "ems": null
    },
    {
      "latitude": 38.742554,
      "longitude": -9.36065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3276",
      "timestamp": 1661066740,
      "ems": null
    },
    {
      "latitude": 38.743286,
      "longitude": -9.360769,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3276",
      "timestamp": 1661066742,
      "ems": null
    },
    {
      "latitude": 38.744156,
      "longitude": -9.360949,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "3276",
      "timestamp": 1661066746,
      "ems": null
    },
    {
      "latitude": 38.744869,
      "longitude": -9.361023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "3276",
      "timestamp": 1661066749,
      "ems": null
    },
    {
      "latitude": 38.745613,
      "longitude": -9.361084,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "3276",
      "timestamp": 1661066751,
      "ems": null
    },
    {
      "latitude": 38.746357,
      "longitude": -9.361206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3276",
      "timestamp": 1661066755,
      "ems": null
    },
    {
      "latitude": 38.747177,
      "longitude": -9.361247,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 2,
      "squawk": "3276",
      "timestamp": 1661066758,
      "ems": null
    },
    {
      "latitude": 38.74791,
      "longitude": -9.360829,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "3276",
      "timestamp": 1661066761,
      "ems": null
    },
    {
      "latitude": 38.748547,
      "longitude": -9.359924,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "3276",
      "timestamp": 1661066764,
      "ems": null
    },
    {
      "latitude": 38.748917,
      "longitude": -9.35862,
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
      "heading": 78,
      "squawk": "3276",
      "timestamp": 1661066767,
      "ems": null
    },
    {
      "latitude": 38.749054,
      "longitude": -9.357127,
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
      "heading": 83,
      "squawk": "3276",
      "timestamp": 1661066770,
      "ems": null
    },
    {
      "latitude": 38.749191,
      "longitude": -9.355635,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "3276",
      "timestamp": 1661066773,
      "ems": null
    },
    {
      "latitude": 38.74929,
      "longitude": -9.354309,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661066776,
      "ems": null
    },
    {
      "latitude": 38.749374,
      "longitude": -9.352709,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661066779,
      "ems": null
    },
    {
      "latitude": 38.749237,
      "longitude": -9.351037,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 100,
      "squawk": "3276",
      "timestamp": 1661066782,
      "ems": null
    },
    {
      "latitude": 38.748779,
      "longitude": -9.349425,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 115,
      "squawk": "3276",
      "timestamp": 1661066785,
      "ems": null
    },
    {
      "latitude": 38.74794,
      "longitude": -9.347778,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 127,
      "squawk": "3276",
      "timestamp": 1661066788,
      "ems": null
    },
    {
      "latitude": 38.746857,
      "longitude": -9.34626,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 134,
      "squawk": "3276",
      "timestamp": 1661066791,
      "ems": null
    },
    {
      "latitude": 38.745659,
      "longitude": -9.34491,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 141,
      "squawk": "3276",
      "timestamp": 1661066794,
      "ems": null
    },
    {
      "latitude": 38.744308,
      "longitude": -9.343567,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066797,
      "ems": null
    },
    {
      "latitude": 38.742867,
      "longitude": -9.342224,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066800,
      "ems": null
    },
    {
      "latitude": 38.741283,
      "longitude": -9.340759,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661066803,
      "ems": null
    },
    {
      "latitude": 38.73975,
      "longitude": -9.339417,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 145,
      "squawk": "3276",
      "timestamp": 1661066806,
      "ems": null
    },
    {
      "latitude": 38.738445,
      "longitude": -9.338257,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661066809,
      "ems": null
    },
    {
      "latitude": 38.736694,
      "longitude": -9.336588,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066812,
      "ems": null
    },
    {
      "latitude": 38.735279,
      "longitude": -9.335266,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066815,
      "ems": null
    },
    {
      "latitude": 38.733902,
      "longitude": -9.333961,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066818,
      "ems": null
    },
    {
      "latitude": 38.732441,
      "longitude": -9.332581,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 141,
      "squawk": "3276",
      "timestamp": 1661066821,
      "ems": null
    },
    {
      "latitude": 38.729828,
      "longitude": -9.329901,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 141,
      "squawk": "3276",
      "timestamp": 1661066827,
      "ems": null
    },
    {
      "latitude": 38.727081,
      "longitude": -9.327213,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066833,
      "ems": null
    },
    {
      "latitude": 38.724426,
      "longitude": -9.324765,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066839,
      "ems": null
    },
    {
      "latitude": 38.721966,
      "longitude": -9.322327,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066845,
      "ems": null
    },
    {
      "latitude": 38.719162,
      "longitude": -9.31969,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066851,
      "ems": null
    },
    {
      "latitude": 38.71669,
      "longitude": -9.317302,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066857,
      "ems": null
    },
    {
      "latitude": 38.713989,
      "longitude": -9.314734,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661066863,
      "ems": null
    },
    {
      "latitude": 38.711426,
      "longitude": -9.312346,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066869,
      "ems": null
    },
    {
      "latitude": 38.708496,
      "longitude": -9.309778,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "3276",
      "timestamp": 1661066875,
      "ems": null
    },
    {
      "latitude": 38.705795,
      "longitude": -9.30733,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661066881,
      "ems": null
    },
    {
      "latitude": 38.703278,
      "longitude": -9.304883,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066887,
      "ems": null
    },
    {
      "latitude": 38.700691,
      "longitude": -9.302368,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066893,
      "ems": null
    },
    {
      "latitude": 38.698105,
      "longitude": -9.299927,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066899,
      "ems": null
    },
    {
      "latitude": 38.695724,
      "longitude": -9.297658,
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
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661066905,
      "ems": null
    },
    {
      "latitude": 38.693382,
      "longitude": -9.295349,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "3276",
      "timestamp": 1661066911,
      "ems": null
    },
    {
      "latitude": 38.690964,
      "longitude": -9.292702,
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
      "heading": 140,
      "squawk": "3276",
      "timestamp": 1661066917,
      "ems": null
    },
    {
      "latitude": 38.688496,
      "longitude": -9.2901,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "3276",
      "timestamp": 1661066923,
      "ems": null
    },
    {
      "latitude": 38.687332,
      "longitude": -9.288818,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "3276",
      "timestamp": 1661066926,
      "ems": null
    },
    {
      "latitude": 38.686398,
      "longitude": -9.287659,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "3276",
      "timestamp": 1661066929,
      "ems": null
    },
    {
      "latitude": 38.684071,
      "longitude": -9.285034,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 138,
      "squawk": "3276",
      "timestamp": 1661066935,
      "ems": null
    },
    {
      "latitude": 38.681625,
      "longitude": -9.282312,
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
      "heading": 139,
      "squawk": "3276",
      "timestamp": 1661066941,
      "ems": null
    },
    {
      "latitude": 38.679062,
      "longitude": -9.279566,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "3276",
      "timestamp": 1661066948,
      "ems": null
    },
    {
      "latitude": 38.67659,
      "longitude": -9.277059,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661066954,
      "ems": null
    },
    {
      "latitude": 38.674347,
      "longitude": -9.274371,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "3276",
      "timestamp": 1661066960,
      "ems": null
    },
    {
      "latitude": 38.673412,
      "longitude": -9.273071,
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
      "heading": 130,
      "squawk": "3276",
      "timestamp": 1661066963,
      "ems": null
    },
    {
      "latitude": 38.672333,
      "longitude": -9.271446,
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
      "heading": 130,
      "squawk": "3276",
      "timestamp": 1661066966,
      "ems": null
    },
    {
      "latitude": 38.67141,
      "longitude": -9.270081,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 131,
      "squawk": "3276",
      "timestamp": 1661066968,
      "ems": null
    },
    {
      "latitude": 38.670292,
      "longitude": -9.268494,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 131,
      "squawk": "3276",
      "timestamp": 1661066972,
      "ems": null
    },
    {
      "latitude": 38.669403,
      "longitude": -9.267147,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 130,
      "squawk": "3276",
      "timestamp": 1661066975,
      "ems": null
    },
    {
      "latitude": 38.668522,
      "longitude": -9.265869,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 130,
      "squawk": "3276",
      "timestamp": 1661066978,
      "ems": null
    },
    {
      "latitude": 38.667358,
      "longitude": -9.26416,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 130,
      "squawk": "3276",
      "timestamp": 1661066981,
      "ems": null
    },
    {
      "latitude": 38.666336,
      "longitude": -9.262695,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 132,
      "squawk": "3276",
      "timestamp": 1661066984,
      "ems": null
    },
    {
      "latitude": 38.664139,
      "longitude": -9.259922,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 136,
      "squawk": "3276",
      "timestamp": 1661066990,
      "ems": null
    },
    {
      "latitude": 38.663078,
      "longitude": -9.258545,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "3276",
      "timestamp": 1661066993,
      "ems": null
    },
    {
      "latitude": 38.661942,
      "longitude": -9.257175,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "3276",
      "timestamp": 1661066996,
      "ems": null
    },
    {
      "latitude": 38.660843,
      "longitude": -9.255921,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "3276",
      "timestamp": 1661066999,
      "ems": null
    },
    {
      "latitude": 38.659634,
      "longitude": -9.2547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661067002,
      "ems": null
    },
    {
      "latitude": 38.658329,
      "longitude": -9.253479,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661067005,
      "ems": null
    },
    {
      "latitude": 38.656952,
      "longitude": -9.252279,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "3276",
      "timestamp": 1661067008,
      "ems": null
    },
    {
      "latitude": 38.655582,
      "longitude": -9.251221,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 149,
      "squawk": "3276",
      "timestamp": 1661067011,
      "ems": null
    },
    {
      "latitude": 38.653954,
      "longitude": -9.250061,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067014,
      "ems": null
    },
    {
      "latitude": 38.65274,
      "longitude": -9.249234,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067017,
      "ems": null
    },
    {
      "latitude": 38.651276,
      "longitude": -9.248339,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067019,
      "ems": null
    },
    {
      "latitude": 38.649761,
      "longitude": -9.247375,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067023,
      "ems": null
    },
    {
      "latitude": 38.648273,
      "longitude": -9.246521,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067025,
      "ems": null
    },
    {
      "latitude": 38.646832,
      "longitude": -9.245605,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067028,
      "ems": null
    },
    {
      "latitude": 38.64534,
      "longitude": -9.244751,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067032,
      "ems": null
    },
    {
      "latitude": 38.643944,
      "longitude": -9.243835,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067035,
      "ems": null
    },
    {
      "latitude": 38.642406,
      "longitude": -9.242859,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067037,
      "ems": null
    },
    {
      "latitude": 38.639557,
      "longitude": -9.240875,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067043,
      "ems": null
    },
    {
      "latitude": 38.636776,
      "longitude": -9.239014,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067049,
      "ems": null
    },
    {
      "latitude": 38.633701,
      "longitude": -9.237122,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067056,
      "ems": null
    },
    {
      "latitude": 38.630722,
      "longitude": -9.235501,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067061,
      "ems": null
    },
    {
      "latitude": 38.627792,
      "longitude": -9.23389,
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067068,
      "ems": null
    },
    {
      "latitude": 38.624996,
      "longitude": -9.232178,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067073,
      "ems": null
    },
    {
      "latitude": 38.622208,
      "longitude": -9.230426,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067079,
      "ems": null
    },
    {
      "latitude": 38.619316,
      "longitude": -9.228638,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067086,
      "ems": null
    },
    {
      "latitude": 38.615936,
      "longitude": -9.226784,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661067093,
      "ems": null
    },
    {
      "latitude": 38.612846,
      "longitude": -9.225281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "3276",
      "timestamp": 1661067099,
      "ems": null
    },
    {
      "latitude": 38.609913,
      "longitude": -9.223694,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 157,
      "squawk": "3276",
      "timestamp": 1661067105,
      "ems": null
    },
    {
      "latitude": 38.608425,
      "longitude": -9.222961,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067108,
      "ems": null
    },
    {
      "latitude": 38.606918,
      "longitude": -9.222365,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661067111,
      "ems": null
    },
    {
      "latitude": 38.604328,
      "longitude": -9.221191,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067116,
      "ems": null
    },
    {
      "latitude": 38.602654,
      "longitude": -9.220459,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661067120,
      "ems": null
    },
    {
      "latitude": 38.599766,
      "longitude": -9.219238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067126,
      "ems": null
    },
    {
      "latitude": 38.59671,
      "longitude": -9.217768,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661067132,
      "ems": null
    },
    {
      "latitude": 38.594055,
      "longitude": -9.216394,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067138,
      "ems": null
    },
    {
      "latitude": 38.591152,
      "longitude": -9.214844,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661067144,
      "ems": null
    },
    {
      "latitude": 38.588379,
      "longitude": -9.213349,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067150,
      "ems": null
    },
    {
      "latitude": 38.586918,
      "longitude": -9.212524,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067153,
      "ems": null
    },
    {
      "latitude": 38.583984,
      "longitude": -9.210842,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067159,
      "ems": null
    },
    {
      "latitude": 38.581421,
      "longitude": -9.209229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067164,
      "ems": null
    },
    {
      "latitude": 38.578583,
      "longitude": -9.207458,
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067170,
      "ems": null
    },
    {
      "latitude": 38.575836,
      "longitude": -9.205811,
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067177,
      "ems": null
    },
    {
      "latitude": 38.57309,
      "longitude": -9.204285,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067182,
      "ems": null
    },
    {
      "latitude": 38.570114,
      "longitude": -9.202662,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661067189,
      "ems": null
    },
    {
      "latitude": 38.568947,
      "longitude": -9.202148,
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
      "heading": 159,
      "squawk": "3276",
      "timestamp": 1661067192,
      "ems": null
    },
    {
      "latitude": 38.567551,
      "longitude": -9.201477,
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
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067194,
      "ems": null
    },
    {
      "latitude": 38.565922,
      "longitude": -9.200745,
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
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067198,
      "ems": null
    },
    {
      "latitude": 38.564571,
      "longitude": -9.200195,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661067201,
      "ems": null
    },
    {
      "latitude": 38.56311,
      "longitude": -9.199557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067204,
      "ems": null
    },
    {
      "latitude": 38.560287,
      "longitude": -9.198303,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067210,
      "ems": null
    },
    {
      "latitude": 38.557526,
      "longitude": -9.197109,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661067216,
      "ems": null
    },
    {
      "latitude": 38.554779,
      "longitude": -9.195855,
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
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661067222,
      "ems": null
    },
    {
      "latitude": 38.551895,
      "longitude": -9.194482,
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
      "heading": 159,
      "squawk": "3276",
      "timestamp": 1661067228,
      "ems": null
    },
    {
      "latitude": 38.54921,
      "longitude": -9.193298,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661067234,
      "ems": null
    },
    {
      "latitude": 38.546185,
      "longitude": -9.192078,
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
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661067240,
      "ems": null
    },
    {
      "latitude": 38.543392,
      "longitude": -9.19104,
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
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661067246,
      "ems": null
    },
    {
      "latitude": 38.540359,
      "longitude": -9.189884,
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
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661067252,
      "ems": null
    },
    {
      "latitude": 38.538967,
      "longitude": -9.189331,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661067255,
      "ems": null
    },
    {
      "latitude": 38.537476,
      "longitude": -9.188869,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661067258,
      "ems": null
    },
    {
      "latitude": 38.536083,
      "longitude": -9.188416,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661067261,
      "ems": null
    },
    {
      "latitude": 38.533241,
      "longitude": -9.1875,
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661067267,
      "ems": null
    },
    {
      "latitude": 38.531799,
      "longitude": -9.187134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 168,
      "squawk": "3276",
      "timestamp": 1661067270,
      "ems": null
    },
    {
      "latitude": 38.530449,
      "longitude": -9.186768,
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
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661067273,
      "ems": null
    },
    {
      "latitude": 38.52887,
      "longitude": -9.186421,
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661067276,
      "ems": null
    },
    {
      "latitude": 38.527424,
      "longitude": -9.186157,
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661067279,
      "ems": null
    },
    {
      "latitude": 38.526031,
      "longitude": -9.185884,
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
      "heading": 172,
      "squawk": "3276",
      "timestamp": 1661067282,
      "ems": null
    },
    {
      "latitude": 38.524399,
      "longitude": -9.185608,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661067285,
      "ems": null
    },
    {
      "latitude": 38.523094,
      "longitude": -9.185486,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661067288,
      "ems": null
    },
    {
      "latitude": 38.52137,
      "longitude": -9.185364,
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661067291,
      "ems": null
    },
    {
      "latitude": 38.519806,
      "longitude": -9.185287,
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661067294,
      "ems": null
    },
    {
      "latitude": 38.518387,
      "longitude": -9.185227,
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661067297,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -9.18463,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661067303,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -9.184033,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 159,
      "squawk": "3276",
      "timestamp": 1661067306,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -9.183137,
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
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661067309,
      "ems": null
    },
    {
      "latitude": 38.511337,
      "longitude": -9.182003,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "3276",
      "timestamp": 1661067312,
      "ems": null
    },
    {
      "latitude": 38.510284,
      "longitude": -9.180689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "3276",
      "timestamp": 1661067315,
      "ems": null
    },
    {
      "latitude": 38.509369,
      "longitude": -9.179256,
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
      "heading": 123,
      "squawk": "3276",
      "timestamp": 1661067318,
      "ems": null
    },
    {
      "latitude": 38.508709,
      "longitude": -9.177673,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "3276",
      "timestamp": 1661067321,
      "ems": null
    },
    {
      "latitude": 38.508316,
      "longitude": -9.176032,
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
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661067324,
      "ems": null
    },
    {
      "latitude": 38.508133,
      "longitude": -9.174479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "3276",
      "timestamp": 1661067327,
      "ems": null
    },
    {
      "latitude": 38.508011,
      "longitude": -9.172668,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067330,
      "ems": null
    },
    {
      "latitude": 38.508011,
      "longitude": -9.171204,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067333,
      "ems": null
    },
    {
      "latitude": 38.507996,
      "longitude": -9.169345,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067336,
      "ems": null
    },
    {
      "latitude": 38.508011,
      "longitude": -9.168274,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067339,
      "ems": null
    },
    {
      "latitude": 38.508057,
      "longitude": -9.166382,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067342,
      "ems": null
    },
    {
      "latitude": 38.508087,
      "longitude": -9.164986,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067345,
      "ems": null
    },
    {
      "latitude": 38.508133,
      "longitude": -9.164031,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067347,
      "ems": null
    },
    {
      "latitude": 38.508179,
      "longitude": -9.16218,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067351,
      "ems": null
    },
    {
      "latitude": 38.508198,
      "longitude": -9.160889,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067354,
      "ems": null
    },
    {
      "latitude": 38.508316,
      "longitude": -9.157224,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067363,
      "ems": null
    },
    {
      "latitude": 38.508408,
      "longitude": -9.154537,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067369,
      "ems": null
    },
    {
      "latitude": 38.508636,
      "longitude": -9.15197,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 83,
      "squawk": "3276",
      "timestamp": 1661067376,
      "ems": null
    },
    {
      "latitude": 38.50885,
      "longitude": -9.148438,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067383,
      "ems": null
    },
    {
      "latitude": 38.509003,
      "longitude": -9.14576,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067389,
      "ems": null
    },
    {
      "latitude": 38.509186,
      "longitude": -9.142954,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067395,
      "ems": null
    },
    {
      "latitude": 38.509315,
      "longitude": -9.140076,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067401,
      "ems": null
    },
    {
      "latitude": 38.509407,
      "longitude": -9.137146,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067407,
      "ems": null
    },
    {
      "latitude": 38.509453,
      "longitude": -9.133972,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067413,
      "ems": null
    },
    {
      "latitude": 38.509552,
      "longitude": -9.131371,
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
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067419,
      "ems": null
    },
    {
      "latitude": 38.509644,
      "longitude": -9.127907,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067425,
      "ems": null
    },
    {
      "latitude": 38.509735,
      "longitude": -9.124803,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067431,
      "ems": null
    },
    {
      "latitude": 38.50964,
      "longitude": -9.12323,
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
      "heading": 95,
      "squawk": "3276",
      "timestamp": 1661067434,
      "ems": null
    },
    {
      "latitude": 38.509548,
      "longitude": -9.120178,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067440,
      "ems": null
    },
    {
      "latitude": 38.509552,
      "longitude": -9.117041,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067446,
      "ems": null
    },
    {
      "latitude": 38.50964,
      "longitude": -9.114258,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067452,
      "ems": null
    },
    {
      "latitude": 38.509827,
      "longitude": -9.11083,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661067458,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -9.109457,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067461,
      "ems": null
    },
    {
      "latitude": 38.51001,
      "longitude": -9.107904,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067464,
      "ems": null
    },
    {
      "latitude": 38.510056,
      "longitude": -9.106054,
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
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067467,
      "ems": null
    },
    {
      "latitude": 38.510101,
      "longitude": -9.10277,
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
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067473,
      "ems": null
    },
    {
      "latitude": 38.510056,
      "longitude": -9.101636,
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
      "heading": 92,
      "squawk": "3276",
      "timestamp": 1661067476,
      "ems": null
    },
    {
      "latitude": 38.509968,
      "longitude": -9.09967,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 92,
      "squawk": "3276",
      "timestamp": 1661067479,
      "ems": null
    },
    {
      "latitude": 38.509964,
      "longitude": -9.098531,
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
      "heading": 92,
      "squawk": "3276",
      "timestamp": 1661067482,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -9.096619,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067485,
      "ems": null
    },
    {
      "latitude": 38.509872,
      "longitude": -9.095032,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067488,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -9.092321,
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067494,
      "ems": null
    },
    {
      "latitude": 38.509964,
      "longitude": -9.089455,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067500,
      "ems": null
    },
    {
      "latitude": 38.509964,
      "longitude": -9.085574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067506,
      "ems": null
    },
    {
      "latitude": 38.51001,
      "longitude": -9.08241,
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
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067512,
      "ems": null
    },
    {
      "latitude": 38.510101,
      "longitude": -9.079543,
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
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067518,
      "ems": null
    },
    {
      "latitude": 38.510201,
      "longitude": -9.078125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661067521,
      "ems": null
    },
    {
      "latitude": 38.510479,
      "longitude": -9.075012,
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
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661067528,
      "ems": null
    },
    {
      "latitude": 38.510559,
      "longitude": -9.073632,
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
      "heading": 83,
      "squawk": "3276",
      "timestamp": 1661067531,
      "ems": null
    },
    {
      "latitude": 38.510712,
      "longitude": -9.072144,
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
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661067533,
      "ems": null
    },
    {
      "latitude": 38.510899,
      "longitude": -9.069275,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067539,
      "ems": null
    },
    {
      "latitude": 38.511036,
      "longitude": -9.066101,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067546,
      "ems": null
    },
    {
      "latitude": 38.511154,
      "longitude": -9.063541,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067552,
      "ems": null
    },
    {
      "latitude": 38.511318,
      "longitude": -9.060303,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067558,
      "ems": null
    },
    {
      "latitude": 38.511551,
      "longitude": -9.056641,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067564,
      "ems": null
    },
    {
      "latitude": 38.511795,
      "longitude": -9.053212,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661067570,
      "ems": null
    },
    {
      "latitude": 38.511978,
      "longitude": -9.049869,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067576,
      "ems": null
    },
    {
      "latitude": 38.512161,
      "longitude": -9.046644,
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
      "heading": 85,
      "squawk": "3276",
      "timestamp": 1661067582,
      "ems": null
    },
    {
      "latitude": 38.512341,
      "longitude": -9.042908,
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
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661067587,
      "ems": null
    },
    {
      "latitude": 38.512527,
      "longitude": -9.039185,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067594,
      "ems": null
    },
    {
      "latitude": 38.512573,
      "longitude": -9.035777,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067600,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -9.031982,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067606,
      "ems": null
    },
    {
      "latitude": 38.51276,
      "longitude": -9.028137,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067613,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.023438,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067621,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -9.019835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067627,
      "ems": null
    },
    {
      "latitude": 38.513031,
      "longitude": -9.016372,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067633,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.012849,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067639,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.009338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067645,
      "ems": null
    },
    {
      "latitude": 38.513317,
      "longitude": -9.005981,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067650,
      "ems": null
    },
    {
      "latitude": 38.513317,
      "longitude": -9.002197,
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067657,
      "ems": null
    },
    {
      "latitude": 38.513363,
      "longitude": -8.99884,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067663,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -8.995593,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067669,
      "ems": null
    },
    {
      "latitude": 38.513504,
      "longitude": -8.99231,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067675,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -8.988708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067681,
      "ems": null
    },
    {
      "latitude": 38.513596,
      "longitude": -8.985229,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067687,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -8.98175,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067693,
      "ems": null
    },
    {
      "latitude": 38.513737,
      "longitude": -8.978394,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067699,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -8.974815,
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067705,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -8.971436,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067711,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -8.966814,
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
      "heading": 87,
      "squawk": "3276",
      "timestamp": 1661067719,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.962634,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661067726,
      "ems": null
    },
    {
      "latitude": 38.514038,
      "longitude": -8.958754,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067733,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.955017,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067739,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.951721,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067745,
      "ems": null
    },
    {
      "latitude": 38.514065,
      "longitude": -8.948608,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067751,
      "ems": null
    },
    {
      "latitude": 38.513992,
      "longitude": -8.944184,
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
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067757,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.939707,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067765,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.936157,
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661067770,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.932434,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067777,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -8.928894,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067782,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -8.92478,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067789,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.920959,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067795,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.917358,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067801,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -8.913574,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661067807,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -8.909973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067813,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -8.90627,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067819,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -8.902628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661067825,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -8.899048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "3276",
      "timestamp": 1661067831,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -8.895325,
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
      "heading": 97,
      "squawk": "3276",
      "timestamp": 1661067837,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -8.893372,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 102,
      "squawk": "3276",
      "timestamp": 1661067840,
      "ems": null
    },
    {
      "latitude": 38.512619,
      "longitude": -8.891582,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661067843,
      "ems": null
    },
    {
      "latitude": 38.511932,
      "longitude": -8.88985,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 119,
      "squawk": "3276",
      "timestamp": 1661067846,
      "ems": null
    },
    {
      "latitude": 38.511063,
      "longitude": -8.888298,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 128,
      "squawk": "3276",
      "timestamp": 1661067849,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -8.88678,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "3276",
      "timestamp": 1661067852,
      "ems": null
    },
    {
      "latitude": 38.508663,
      "longitude": -8.885498,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661067855,
      "ems": null
    },
    {
      "latitude": 38.507172,
      "longitude": -8.884297,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "3276",
      "timestamp": 1661067858,
      "ems": null
    },
    {
      "latitude": 38.505798,
      "longitude": -8.883342,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067861,
      "ems": null
    },
    {
      "latitude": 38.504192,
      "longitude": -8.882385,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067864,
      "ems": null
    },
    {
      "latitude": 38.502518,
      "longitude": -8.881348,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067867,
      "ems": null
    },
    {
      "latitude": 38.500992,
      "longitude": -8.880536,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067870,
      "ems": null
    },
    {
      "latitude": 38.499538,
      "longitude": -8.8797,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661067873,
      "ems": null
    },
    {
      "latitude": 38.497696,
      "longitude": -8.878685,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661067876,
      "ems": null
    },
    {
      "latitude": 38.496277,
      "longitude": -8.877849,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067879,
      "ems": null
    },
    {
      "latitude": 38.494698,
      "longitude": -8.876892,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067882,
      "ems": null
    },
    {
      "latitude": 38.49316,
      "longitude": -8.875916,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067885,
      "ems": null
    },
    {
      "latitude": 38.491673,
      "longitude": -8.874939,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067888,
      "ems": null
    },
    {
      "latitude": 38.488598,
      "longitude": -8.873108,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067894,
      "ems": null
    },
    {
      "latitude": 38.485611,
      "longitude": -8.871281,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067900,
      "ems": null
    },
    {
      "latitude": 38.484177,
      "longitude": -8.8703,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067903,
      "ems": null
    },
    {
      "latitude": 38.481033,
      "longitude": -8.868176,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067909,
      "ems": null
    },
    {
      "latitude": 38.478077,
      "longitude": -8.86615,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067915,
      "ems": null
    },
    {
      "latitude": 38.474945,
      "longitude": -8.863877,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661067921,
      "ems": null
    },
    {
      "latitude": 38.471981,
      "longitude": -8.861755,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661067927,
      "ems": null
    },
    {
      "latitude": 38.468903,
      "longitude": -8.859578,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661067933,
      "ems": null
    },
    {
      "latitude": 38.465973,
      "longitude": -8.857548,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067939,
      "ems": null
    },
    {
      "latitude": 38.462906,
      "longitude": -8.855458,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067945,
      "ems": null
    },
    {
      "latitude": 38.459831,
      "longitude": -8.853333,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661067951,
      "ems": null
    },
    {
      "latitude": 38.456757,
      "longitude": -8.851318,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067957,
      "ems": null
    },
    {
      "latitude": 38.453613,
      "longitude": -8.849249,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067963,
      "ems": null
    },
    {
      "latitude": 38.45052,
      "longitude": -8.847351,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067969,
      "ems": null
    },
    {
      "latitude": 38.447399,
      "longitude": -8.845398,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067975,
      "ems": null
    },
    {
      "latitude": 38.444283,
      "longitude": -8.843323,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067981,
      "ems": null
    },
    {
      "latitude": 38.441116,
      "longitude": -8.841308,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661067987,
      "ems": null
    },
    {
      "latitude": 38.437904,
      "longitude": -8.839294,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661067993,
      "ems": null
    },
    {
      "latitude": 38.434937,
      "longitude": -8.837366,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661067999,
      "ems": null
    },
    {
      "latitude": 38.430222,
      "longitude": -8.834045,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 149,
      "squawk": "3276",
      "timestamp": 1661068008,
      "ems": null
    },
    {
      "latitude": 38.4272,
      "longitude": -8.831754,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661068014,
      "ems": null
    },
    {
      "latitude": 38.423126,
      "longitude": -8.828948,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661068022,
      "ems": null
    },
    {
      "latitude": 38.419468,
      "longitude": -8.826599,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661068029,
      "ems": null
    },
    {
      "latitude": 38.417908,
      "longitude": -8.825724,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068032,
      "ems": null
    },
    {
      "latitude": 38.416306,
      "longitude": -8.824768,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068035,
      "ems": null
    },
    {
      "latitude": 38.414536,
      "longitude": -8.82373,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661068038,
      "ems": null
    },
    {
      "latitude": 38.411556,
      "longitude": -8.821783,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661068044,
      "ems": null
    },
    {
      "latitude": 38.408527,
      "longitude": -8.819812,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661068050,
      "ems": null
    },
    {
      "latitude": 38.405457,
      "longitude": -8.817842,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661068057,
      "ems": null
    },
    {
      "latitude": 38.402435,
      "longitude": -8.815944,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661068063,
      "ems": null
    },
    {
      "latitude": 38.399311,
      "longitude": -8.813961,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661068069,
      "ems": null
    },
    {
      "latitude": 38.396072,
      "longitude": -8.811795,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661068075,
      "ems": null
    },
    {
      "latitude": 38.393051,
      "longitude": -8.809632,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661068081,
      "ems": null
    },
    {
      "latitude": 38.389999,
      "longitude": -8.807692,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661068087,
      "ems": null
    },
    {
      "latitude": 38.386826,
      "longitude": -8.805776,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068093,
      "ems": null
    },
    {
      "latitude": 38.383858,
      "longitude": -8.804049,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068099,
      "ems": null
    },
    {
      "latitude": 38.380692,
      "longitude": -8.802198,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661068105,
      "ems": null
    },
    {
      "latitude": 38.377666,
      "longitude": -8.800347,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068111,
      "ems": null
    },
    {
      "latitude": 38.374592,
      "longitude": -8.798556,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068116,
      "ems": null
    },
    {
      "latitude": 38.371445,
      "longitude": -8.796777,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661068123,
      "ems": null
    },
    {
      "latitude": 38.368259,
      "longitude": -8.795033,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 156,
      "squawk": "3276",
      "timestamp": 1661068129,
      "ems": null
    },
    {
      "latitude": 38.365173,
      "longitude": -8.793328,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 157,
      "squawk": "3276",
      "timestamp": 1661068135,
      "ems": null
    },
    {
      "latitude": 38.363605,
      "longitude": -8.792525,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661068138,
      "ems": null
    },
    {
      "latitude": 38.360256,
      "longitude": -8.790973,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661068144,
      "ems": null
    },
    {
      "latitude": 38.358627,
      "longitude": -8.79029,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661068147,
      "ems": null
    },
    {
      "latitude": 38.356949,
      "longitude": -8.78954,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661068150,
      "ems": null
    },
    {
      "latitude": 38.355274,
      "longitude": -8.788883,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661068153,
      "ems": null
    },
    {
      "latitude": 38.353683,
      "longitude": -8.788244,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661068156,
      "ems": null
    },
    {
      "latitude": 38.35199,
      "longitude": -8.787601,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661068159,
      "ems": null
    },
    {
      "latitude": 38.35025,
      "longitude": -8.787017,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661068162,
      "ems": null
    },
    {
      "latitude": 38.348785,
      "longitude": -8.78655,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661068165,
      "ems": null
    },
    {
      "latitude": 38.347,
      "longitude": -8.786024,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 167,
      "squawk": "3276",
      "timestamp": 1661068168,
      "ems": null
    },
    {
      "latitude": 38.345264,
      "longitude": -8.7856,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "3276",
      "timestamp": 1661068171,
      "ems": null
    },
    {
      "latitude": 38.34359,
      "longitude": -8.785181,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661068174,
      "ems": null
    },
    {
      "latitude": 38.341782,
      "longitude": -8.784797,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661068177,
      "ems": null
    },
    {
      "latitude": 38.340179,
      "longitude": -8.784504,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 172,
      "squawk": "3276",
      "timestamp": 1661068180,
      "ems": null
    },
    {
      "latitude": 38.338421,
      "longitude": -8.784226,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661068183,
      "ems": null
    },
    {
      "latitude": 38.336651,
      "longitude": -8.784047,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661068186,
      "ems": null
    },
    {
      "latitude": 38.334976,
      "longitude": -8.783868,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661068189,
      "ems": null
    },
    {
      "latitude": 38.332973,
      "longitude": -8.783689,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068192,
      "ems": null
    },
    {
      "latitude": 38.33139,
      "longitude": -8.783569,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661068195,
      "ems": null
    },
    {
      "latitude": 38.329575,
      "longitude": -8.783509,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661068198,
      "ems": null
    },
    {
      "latitude": 38.327866,
      "longitude": -8.783394,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661068201,
      "ems": null
    },
    {
      "latitude": 38.325989,
      "longitude": -8.783278,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068204,
      "ems": null
    },
    {
      "latitude": 38.324131,
      "longitude": -8.783152,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068207,
      "ems": null
    },
    {
      "latitude": 38.320637,
      "longitude": -8.782853,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068213,
      "ems": null
    },
    {
      "latitude": 38.317245,
      "longitude": -8.782635,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068219,
      "ems": null
    },
    {
      "latitude": 38.313515,
      "longitude": -8.782315,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661068225,
      "ems": null
    },
    {
      "latitude": 38.310013,
      "longitude": -8.781992,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661068231,
      "ems": null
    },
    {
      "latitude": 38.306438,
      "longitude": -8.781718,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068237,
      "ems": null
    },
    {
      "latitude": 38.303009,
      "longitude": -8.781466,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068243,
      "ems": null
    },
    {
      "latitude": 38.299759,
      "longitude": -8.781232,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661068249,
      "ems": null
    },
    {
      "latitude": 38.296051,
      "longitude": -8.781115,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068255,
      "ems": null
    },
    {
      "latitude": 38.294312,
      "longitude": -8.781115,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661068258,
      "ems": null
    },
    {
      "latitude": 38.290657,
      "longitude": -8.781121,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068264,
      "ems": null
    },
    {
      "latitude": 38.287445,
      "longitude": -8.781002,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661068270,
      "ems": null
    },
    {
      "latitude": 38.283737,
      "longitude": -8.780823,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661068276,
      "ems": null
    },
    {
      "latitude": 38.280231,
      "longitude": -8.780584,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068282,
      "ems": null
    },
    {
      "latitude": 38.276917,
      "longitude": -8.780297,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068288,
      "ems": null
    },
    {
      "latitude": 38.275017,
      "longitude": -8.780166,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661068291,
      "ems": null
    },
    {
      "latitude": 38.271927,
      "longitude": -8.779888,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661068297,
      "ems": null
    },
    {
      "latitude": 38.268036,
      "longitude": -8.779713,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661068303,
      "ems": null
    },
    {
      "latitude": 38.264637,
      "longitude": -8.779569,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661068309,
      "ems": null
    },
    {
      "latitude": 38.261143,
      "longitude": -8.77951,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068315,
      "ems": null
    },
    {
      "latitude": 38.257645,
      "longitude": -8.77942,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068321,
      "ems": null
    },
    {
      "latitude": 38.254162,
      "longitude": -8.77933,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068327,
      "ems": null
    },
    {
      "latitude": 38.249741,
      "longitude": -8.77927,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068335,
      "ems": null
    },
    {
      "latitude": 38.247711,
      "longitude": -8.779245,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661068339,
      "ems": null
    },
    {
      "latitude": 38.242218,
      "longitude": -8.779186,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661068349,
      "ems": null
    },
    {
      "latitude": 38.238235,
      "longitude": -8.779304,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661068355,
      "ems": null
    },
    {
      "latitude": 38.233959,
      "longitude": -8.779449,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661068361,
      "ems": null
    },
    {
      "latitude": 38.229309,
      "longitude": -8.779713,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661068368,
      "ems": null
    },
    {
      "latitude": 38.225021,
      "longitude": -8.779927,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661068375,
      "ems": null
    },
    {
      "latitude": 38.221848,
      "longitude": -8.780063,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661068380,
      "ems": null
    },
    {
      "latitude": 38.218456,
      "longitude": -8.780166,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661068386,
      "ems": null
    },
    {
      "latitude": 38.213474,
      "longitude": -8.780345,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661068393,
      "ems": null
    },
    {
      "latitude": 38.208725,
      "longitude": -8.780643,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661068401,
      "ems": null
    },
    {
      "latitude": 38.2057,
      "longitude": -8.781002,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661068406,
      "ems": null
    },
    {
      "latitude": 38.202118,
      "longitude": -8.781348,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661068412,
      "ems": null
    },
    {
      "latitude": 38.198532,
      "longitude": -8.781718,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661068418,
      "ems": null
    },
    {
      "latitude": 38.195114,
      "longitude": -8.78205,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661068424,
      "ems": null
    },
    {
      "latitude": 38.191734,
      "longitude": -8.782434,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 186,
      "squawk": "3276",
      "timestamp": 1661068430,
      "ems": null
    },
    {
      "latitude": 38.188889,
      "longitude": -8.782868,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661068436,
      "ems": null
    },
    {
      "latitude": 38.183716,
      "longitude": -8.783861,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661068444,
      "ems": null
    },
    {
      "latitude": 38.180328,
      "longitude": -8.784525,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661068451,
      "ems": null
    },
    {
      "latitude": 38.177166,
      "longitude": -8.785122,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661068456,
      "ems": null
    },
    {
      "latitude": 38.173721,
      "longitude": -8.785898,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661068463,
      "ems": null
    },
    {
      "latitude": 38.170506,
      "longitude": -8.786614,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661068469,
      "ems": null
    },
    {
      "latitude": 38.167374,
      "longitude": -8.78731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661068475,
      "ems": null
    },
    {
      "latitude": 38.164177,
      "longitude": -8.787988,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068481,
      "ems": null
    },
    {
      "latitude": 38.161194,
      "longitude": -8.788653,
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068487,
      "ems": null
    },
    {
      "latitude": 38.158031,
      "longitude": -8.789421,
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068493,
      "ems": null
    },
    {
      "latitude": 38.154877,
      "longitude": -8.790114,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068499,
      "ems": null
    },
    {
      "latitude": 38.15181,
      "longitude": -8.790874,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661068505,
      "ems": null
    },
    {
      "latitude": 38.148743,
      "longitude": -8.791692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661068511,
      "ems": null
    },
    {
      "latitude": 38.146301,
      "longitude": -8.792406,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661068516,
      "ems": null
    },
    {
      "latitude": 38.143879,
      "longitude": -8.793122,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661068520,
      "ems": null
    },
    {
      "latitude": 38.139225,
      "longitude": -8.794675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661068530,
      "ems": null
    },
    {
      "latitude": 38.136292,
      "longitude": -8.795608,
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661068536,
      "ems": null
    },
    {
      "latitude": 38.13327,
      "longitude": -8.796718,
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661068542,
      "ems": null
    },
    {
      "latitude": 38.130566,
      "longitude": -8.79772,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661068548,
      "ems": null
    },
    {
      "latitude": 38.128841,
      "longitude": -8.798317,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661068553,
      "ems": null
    },
    {
      "latitude": 38.124374,
      "longitude": -8.800049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661068559,
      "ems": null
    },
    {
      "latitude": 38.121441,
      "longitude": -8.801184,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661068565,
      "ems": null
    },
    {
      "latitude": 38.118507,
      "longitude": -8.802138,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661068571,
      "ems": null
    },
    {
      "latitude": 38.115669,
      "longitude": -8.802975,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661068578,
      "ems": null
    },
    {
      "latitude": 38.113495,
      "longitude": -8.803496,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068581,
      "ems": null
    },
    {
      "latitude": 38.111713,
      "longitude": -8.80393,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068584,
      "ems": null
    },
    {
      "latitude": 38.110657,
      "longitude": -8.804198,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068586,
      "ems": null
    },
    {
      "latitude": 38.109375,
      "longitude": -8.80449,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068588,
      "ems": null
    },
    {
      "latitude": 38.107086,
      "longitude": -8.805017,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661068592,
      "ems": null
    },
    {
      "latitude": 38.105522,
      "longitude": -8.805304,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661068596,
      "ems": null
    },
    {
      "latitude": 38.103844,
      "longitude": -8.805542,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661068599,
      "ems": null
    },
    {
      "latitude": 38.10228,
      "longitude": -8.805834,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661068601,
      "ems": null
    },
    {
      "latitude": 38.100399,
      "longitude": -8.806139,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661068605,
      "ems": null
    },
    {
      "latitude": 38.097427,
      "longitude": -8.806652,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661068611,
      "ems": null
    },
    {
      "latitude": 38.093903,
      "longitude": -8.807412,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661068617,
      "ems": null
    },
    {
      "latitude": 38.090763,
      "longitude": -8.808228,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661068623,
      "ems": null
    },
    {
      "latitude": 38.089005,
      "longitude": -8.808756,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661068626,
      "ems": null
    },
    {
      "latitude": 38.087597,
      "longitude": -8.809184,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661068629,
      "ems": null
    },
    {
      "latitude": 38.086246,
      "longitude": -8.809662,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661068631,
      "ems": null
    },
    {
      "latitude": 38.08461,
      "longitude": -8.810217,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661068634,
      "ems": null
    },
    {
      "latitude": 38.083603,
      "longitude": -8.810626,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661068637,
      "ems": null
    },
    {
      "latitude": 38.081219,
      "longitude": -8.811751,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 200,
      "squawk": "3276",
      "timestamp": 1661068641,
      "ems": null
    },
    {
      "latitude": 38.079941,
      "longitude": -8.812379,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661068644,
      "ems": null
    },
    {
      "latitude": 38.078426,
      "longitude": -8.813185,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068647,
      "ems": null
    },
    {
      "latitude": 38.077972,
      "longitude": -8.813373,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068650,
      "ems": null
    },
    {
      "latitude": 38.075447,
      "longitude": -8.814737,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068653,
      "ems": null
    },
    {
      "latitude": 38.073959,
      "longitude": -8.815514,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068656,
      "ems": null
    },
    {
      "latitude": 38.072296,
      "longitude": -8.816353,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661068659,
      "ems": null
    },
    {
      "latitude": 38.070839,
      "longitude": -8.817065,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661068662,
      "ems": null
    },
    {
      "latitude": 38.069275,
      "longitude": -8.817872,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661068665,
      "ems": null
    },
    {
      "latitude": 38.066418,
      "longitude": -8.819215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "3276",
      "timestamp": 1661068670,
      "ems": null
    },
    {
      "latitude": 38.063297,
      "longitude": -8.820708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3276",
      "timestamp": 1661068677,
      "ems": null
    },
    {
      "latitude": 38.059063,
      "longitude": -8.822798,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068685,
      "ems": null
    },
    {
      "latitude": 38.056129,
      "longitude": -8.82447,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661068691,
      "ems": null
    },
    {
      "latitude": 38.055149,
      "longitude": -8.825067,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068694,
      "ems": null
    },
    {
      "latitude": 38.053207,
      "longitude": -8.826345,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068697,
      "ems": null
    },
    {
      "latitude": 38.052219,
      "longitude": -8.826978,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068700,
      "ems": null
    },
    {
      "latitude": 38.050369,
      "longitude": -8.828157,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068703,
      "ems": null
    },
    {
      "latitude": 38.048958,
      "longitude": -8.829007,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068706,
      "ems": null
    },
    {
      "latitude": 38.045883,
      "longitude": -8.830904,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661068712,
      "ems": null
    },
    {
      "latitude": 38.042999,
      "longitude": -8.832649,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661068718,
      "ems": null
    },
    {
      "latitude": 38.04007,
      "longitude": -8.834585,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661068724,
      "ems": null
    },
    {
      "latitude": 38.037277,
      "longitude": -8.836397,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661068730,
      "ems": null
    },
    {
      "latitude": 38.034344,
      "longitude": -8.838322,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068736,
      "ems": null
    },
    {
      "latitude": 38.03141,
      "longitude": -8.840173,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068742,
      "ems": null
    },
    {
      "latitude": 38.028522,
      "longitude": -8.841964,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661068748,
      "ems": null
    },
    {
      "latitude": 38.025513,
      "longitude": -8.843702,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661068754,
      "ems": null
    },
    {
      "latitude": 38.022518,
      "longitude": -8.845367,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661068760,
      "ems": null
    },
    {
      "latitude": 38.019424,
      "longitude": -8.847033,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661068766,
      "ems": null
    },
    {
      "latitude": 38.016327,
      "longitude": -8.848651,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661068772,
      "ems": null
    },
    {
      "latitude": 38.013336,
      "longitude": -8.850188,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068778,
      "ems": null
    },
    {
      "latitude": 38.010223,
      "longitude": -8.851942,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661068785,
      "ems": null
    },
    {
      "latitude": 38.007481,
      "longitude": -8.853607,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661068791,
      "ems": null
    },
    {
      "latitude": 38.005852,
      "longitude": -8.854682,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661068794,
      "ems": null
    },
    {
      "latitude": 38.004501,
      "longitude": -8.855623,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661068797,
      "ems": null
    },
    {
      "latitude": 38.003128,
      "longitude": -8.856617,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661068800,
      "ems": null
    },
    {
      "latitude": 38.001755,
      "longitude": -8.857552,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661068803,
      "ems": null
    },
    {
      "latitude": 38.000359,
      "longitude": -8.858563,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661068806,
      "ems": null
    },
    {
      "latitude": 37.999008,
      "longitude": -8.859518,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 210,
      "squawk": "3276",
      "timestamp": 1661068809,
      "ems": null
    },
    {
      "latitude": 37.99794,
      "longitude": -8.860354,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 210,
      "squawk": "3276",
      "timestamp": 1661068811,
      "ems": null
    },
    {
      "latitude": 37.996357,
      "longitude": -8.861548,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661068815,
      "ems": null
    },
    {
      "latitude": 37.995071,
      "longitude": -8.862577,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661068818,
      "ems": null
    },
    {
      "latitude": 37.992508,
      "longitude": -8.864623,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661068824,
      "ems": null
    },
    {
      "latitude": 37.991089,
      "longitude": -8.865791,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661068827,
      "ems": null
    },
    {
      "latitude": 37.988205,
      "longitude": -8.868246,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661068833,
      "ems": null
    },
    {
      "latitude": 37.984577,
      "longitude": -8.871639,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 217,
      "squawk": "3276",
      "timestamp": 1661068842,
      "ems": null
    },
    {
      "latitude": 37.983414,
      "longitude": -8.872714,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 217,
      "squawk": "3276",
      "timestamp": 1661068845,
      "ems": null
    },
    {
      "latitude": 37.981934,
      "longitude": -8.874207,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 217,
      "squawk": "3276",
      "timestamp": 1661068848,
      "ems": null
    },
    {
      "latitude": 37.981659,
      "longitude": -8.87444,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 217,
      "squawk": "3276",
      "timestamp": 1661068851,
      "ems": null
    },
    {
      "latitude": 37.979458,
      "longitude": -8.876595,
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
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 218,
      "squawk": "3276",
      "timestamp": 1661068854,
      "ems": null
    },
    {
      "latitude": 37.977402,
      "longitude": -8.878531,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 216,
      "squawk": "3276",
      "timestamp": 1661068860,
      "ems": null
    },
    {
      "latitude": 37.97525,
      "longitude": -8.880518,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 215,
      "squawk": "3276",
      "timestamp": 1661068866,
      "ems": null
    },
    {
      "latitude": 37.972458,
      "longitude": -8.882855,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661068873,
      "ems": null
    },
    {
      "latitude": 37.969803,
      "longitude": -8.885076,
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661068881,
      "ems": null
    },
    {
      "latitude": 37.967308,
      "longitude": -8.887163,
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
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661068887,
      "ems": null
    },
    {
      "latitude": 37.965492,
      "longitude": -8.888536,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 210,
      "squawk": "3276",
      "timestamp": 1661068891,
      "ems": null
    },
    {
      "latitude": 37.964218,
      "longitude": -8.889459,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 210,
      "squawk": "3276",
      "timestamp": 1661068894,
      "ems": null
    },
    {
      "latitude": 37.963722,
      "longitude": -8.889791,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661068897,
      "ems": null
    },
    {
      "latitude": 37.961563,
      "longitude": -8.891329,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661068900,
      "ems": null
    },
    {
      "latitude": 37.960278,
      "longitude": -8.892119,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661068903,
      "ems": null
    },
    {
      "latitude": 37.959114,
      "longitude": -8.892776,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661068906,
      "ems": null
    },
    {
      "latitude": 37.957485,
      "longitude": -8.893493,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661068909,
      "ems": null
    },
    {
      "latitude": 37.956207,
      "longitude": -8.893958,
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661068912,
      "ems": null
    },
    {
      "latitude": 37.954468,
      "longitude": -8.894193,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661068915,
      "ems": null
    },
    {
      "latitude": 37.952877,
      "longitude": -8.89397,
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661068918,
      "ems": null
    },
    {
      "latitude": 37.95134,
      "longitude": -8.893493,
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
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661068921,
      "ems": null
    },
    {
      "latitude": 37.949982,
      "longitude": -8.892848,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661068925,
      "ems": null
    },
    {
      "latitude": 37.948826,
      "longitude": -8.892119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "3276",
      "timestamp": 1661068927,
      "ems": null
    },
    {
      "latitude": 37.947693,
      "longitude": -8.891329,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "3276",
      "timestamp": 1661068931,
      "ems": null
    },
    {
      "latitude": 37.946274,
      "longitude": -8.890161,
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
      "heading": 145,
      "squawk": "3276",
      "timestamp": 1661068933,
      "ems": null
    },
    {
      "latitude": 37.944809,
      "longitude": -8.888758,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 140,
      "squawk": "3276",
      "timestamp": 1661068937,
      "ems": null
    },
    {
      "latitude": 37.94371,
      "longitude": -8.88753,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 138,
      "squawk": "3276",
      "timestamp": 1661068939,
      "ems": null
    },
    {
      "latitude": 37.942589,
      "longitude": -8.886148,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "3276",
      "timestamp": 1661068943,
      "ems": null
    },
    {
      "latitude": 37.941605,
      "longitude": -8.884842,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 134,
      "squawk": "3276",
      "timestamp": 1661068945,
      "ems": null
    },
    {
      "latitude": 37.940598,
      "longitude": -8.88344,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "squawk": "3276",
      "timestamp": 1661068948,
      "ems": null
    },
    {
      "latitude": 37.939636,
      "longitude": -8.882037,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 129,
      "squawk": "3276",
      "timestamp": 1661068952,
      "ems": null
    },
    {
      "latitude": 37.938629,
      "longitude": -8.880476,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 128,
      "squawk": "3276",
      "timestamp": 1661068955,
      "ems": null
    },
    {
      "latitude": 37.937897,
      "longitude": -8.879232,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 126,
      "squawk": "3276",
      "timestamp": 1661068957,
      "ems": null
    },
    {
      "latitude": 37.937027,
      "longitude": -8.877538,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 123,
      "squawk": "3276",
      "timestamp": 1661068961,
      "ems": null
    },
    {
      "latitude": 37.936752,
      "longitude": -8.877011,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "3276",
      "timestamp": 1661068963,
      "ems": null
    },
    {
      "latitude": 37.935467,
      "longitude": -8.874267,
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
      "heading": 118,
      "squawk": "3276",
      "timestamp": 1661068967,
      "ems": null
    },
    {
      "latitude": 37.934738,
      "longitude": -8.87257,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "3276",
      "timestamp": 1661068970,
      "ems": null
    },
    {
      "latitude": 37.934628,
      "longitude": -8.872296,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 115,
      "squawk": "3276",
      "timestamp": 1661068972,
      "ems": null
    },
    {
      "latitude": 37.933319,
      "longitude": -8.868362,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661068977,
      "ems": null
    },
    {
      "latitude": 37.932999,
      "longitude": -8.867019,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661068979,
      "ems": null
    },
    {
      "latitude": 37.932579,
      "longitude": -8.86513,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661068983,
      "ems": null
    },
    {
      "latitude": 37.932159,
      "longitude": -8.863041,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661068986,
      "ems": null
    },
    {
      "latitude": 37.931763,
      "longitude": -8.861467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661068989,
      "ems": null
    },
    {
      "latitude": 37.931274,
      "longitude": -8.859578,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 108,
      "squawk": "3276",
      "timestamp": 1661068992,
      "ems": null
    },
    {
      "latitude": 37.930855,
      "longitude": -8.858026,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661068995,
      "ems": null
    },
    {
      "latitude": 37.930531,
      "longitude": -8.856832,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661068998,
      "ems": null
    },
    {
      "latitude": 37.930065,
      "longitude": -8.855339,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661069001,
      "ems": null
    },
    {
      "latitude": 37.928715,
      "longitude": -8.850861,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661069007,
      "ems": null
    },
    {
      "latitude": 37.928204,
      "longitude": -8.849129,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 111,
      "squawk": "3276",
      "timestamp": 1661069010,
      "ems": null
    },
    {
      "latitude": 37.927551,
      "longitude": -8.847219,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661069013,
      "ems": null
    },
    {
      "latitude": 37.926865,
      "longitude": -8.845513,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 116,
      "squawk": "3276",
      "timestamp": 1661069016,
      "ems": null
    },
    {
      "latitude": 37.926132,
      "longitude": -8.84376,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 118,
      "squawk": "3276",
      "timestamp": 1661069019,
      "ems": null
    },
    {
      "latitude": 37.9254,
      "longitude": -8.842066,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 119,
      "squawk": "3276",
      "timestamp": 1661069022,
      "ems": null
    },
    {
      "latitude": 37.924526,
      "longitude": -8.840233,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 120,
      "squawk": "3276",
      "timestamp": 1661069025,
      "ems": null
    },
    {
      "latitude": 37.923569,
      "longitude": -8.838267,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 121,
      "squawk": "3276",
      "timestamp": 1661069028,
      "ems": null
    },
    {
      "latitude": 37.92271,
      "longitude": -8.836531,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 122,
      "squawk": "3276",
      "timestamp": 1661069031,
      "ems": null
    },
    {
      "latitude": 37.921829,
      "longitude": -8.83482,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 122,
      "squawk": "3276",
      "timestamp": 1661069034,
      "ems": null
    },
    {
      "latitude": 37.920959,
      "longitude": -8.833125,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 124,
      "squawk": "3276",
      "timestamp": 1661069037,
      "ems": null
    },
    {
      "latitude": 37.919907,
      "longitude": -8.831255,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 126,
      "squawk": "3276",
      "timestamp": 1661069040,
      "ems": null
    },
    {
      "latitude": 37.918938,
      "longitude": -8.829604,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 126,
      "squawk": "3276",
      "timestamp": 1661069043,
      "ems": null
    },
    {
      "latitude": 37.917774,
      "longitude": -8.827694,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 127,
      "squawk": "3276",
      "timestamp": 1661069046,
      "ems": null
    },
    {
      "latitude": 37.917114,
      "longitude": -8.82658,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 127,
      "squawk": "3276",
      "timestamp": 1661069049,
      "ems": null
    },
    {
      "latitude": 37.915878,
      "longitude": -8.824593,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 129,
      "squawk": "3276",
      "timestamp": 1661069052,
      "ems": null
    },
    {
      "latitude": 37.914425,
      "longitude": -8.822499,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 131,
      "squawk": "3276",
      "timestamp": 1661069055,
      "ems": null
    },
    {
      "latitude": 37.913223,
      "longitude": -8.82097,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "3276",
      "timestamp": 1661069058,
      "ems": null
    },
    {
      "latitude": 37.911987,
      "longitude": -8.819567,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 139,
      "squawk": "3276",
      "timestamp": 1661069061,
      "ems": null
    },
    {
      "latitude": 37.910431,
      "longitude": -8.817989,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "3276",
      "timestamp": 1661069064,
      "ems": null
    },
    {
      "latitude": 37.909149,
      "longitude": -8.816704,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661069067,
      "ems": null
    },
    {
      "latitude": 37.907639,
      "longitude": -8.815359,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 144,
      "squawk": "3276",
      "timestamp": 1661069070,
      "ems": null
    },
    {
      "latitude": 37.906174,
      "longitude": -8.814133,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 146,
      "squawk": "3276",
      "timestamp": 1661069073,
      "ems": null
    },
    {
      "latitude": 37.904709,
      "longitude": -8.812963,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 148,
      "squawk": "3276",
      "timestamp": 1661069076,
      "ems": null
    },
    {
      "latitude": 37.903427,
      "longitude": -8.812029,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 150,
      "squawk": "3276",
      "timestamp": 1661069079,
      "ems": null
    },
    {
      "latitude": 37.902878,
      "longitude": -8.811632,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 151,
      "squawk": "3276",
      "timestamp": 1661069081,
      "ems": null
    },
    {
      "latitude": 37.900269,
      "longitude": -8.809866,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 153,
      "squawk": "3276",
      "timestamp": 1661069085,
      "ems": null
    },
    {
      "latitude": 37.898712,
      "longitude": -8.808931,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661069088,
      "ems": null
    },
    {
      "latitude": 37.898457,
      "longitude": -8.808825,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 155,
      "squawk": "3276",
      "timestamp": 1661069090,
      "ems": null
    },
    {
      "latitude": 37.895966,
      "longitude": -8.80747,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 158,
      "squawk": "3276",
      "timestamp": 1661069094,
      "ems": null
    },
    {
      "latitude": 37.894547,
      "longitude": -8.806796,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 160,
      "squawk": "3276",
      "timestamp": 1661069097,
      "ems": null
    },
    {
      "latitude": 37.892498,
      "longitude": -8.805901,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661069100,
      "ems": null
    },
    {
      "latitude": 37.890564,
      "longitude": -8.805133,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661069103,
      "ems": null
    },
    {
      "latitude": 37.889565,
      "longitude": -8.804826,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661069105,
      "ems": null
    },
    {
      "latitude": 37.888123,
      "longitude": -8.804348,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661069109,
      "ems": null
    },
    {
      "latitude": 37.885796,
      "longitude": -8.803691,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661069112,
      "ems": null
    },
    {
      "latitude": 37.884201,
      "longitude": -8.803263,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 167,
      "squawk": "3276",
      "timestamp": 1661069115,
      "ems": null
    },
    {
      "latitude": 37.882233,
      "longitude": -8.802737,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 168,
      "squawk": "3276",
      "timestamp": 1661069119,
      "ems": null
    },
    {
      "latitude": 37.880768,
      "longitude": -8.802386,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661069121,
      "ems": null
    },
    {
      "latitude": 37.879028,
      "longitude": -8.801977,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069124,
      "ems": null
    },
    {
      "latitude": 37.877335,
      "longitude": -8.801626,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069127,
      "ems": null
    },
    {
      "latitude": 37.87569,
      "longitude": -8.801303,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069130,
      "ems": null
    },
    {
      "latitude": 37.874249,
      "longitude": -8.801004,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 172,
      "squawk": "3276",
      "timestamp": 1661069133,
      "ems": null
    },
    {
      "latitude": 37.872482,
      "longitude": -8.80075,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 172,
      "squawk": "3276",
      "timestamp": 1661069136,
      "ems": null
    },
    {
      "latitude": 37.871109,
      "longitude": -8.800516,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661069138,
      "ems": null
    },
    {
      "latitude": 37.868683,
      "longitude": -8.800224,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069143,
      "ems": null
    },
    {
      "latitude": 37.866985,
      "longitude": -8.800109,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069146,
      "ems": null
    },
    {
      "latitude": 37.865498,
      "longitude": -8.799989,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069148,
      "ems": null
    },
    {
      "latitude": 37.863728,
      "longitude": -8.79981,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069152,
      "ems": null
    },
    {
      "latitude": 37.861908,
      "longitude": -8.799698,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069154,
      "ems": null
    },
    {
      "latitude": 37.860214,
      "longitude": -8.799582,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069157,
      "ems": null
    },
    {
      "latitude": 37.858143,
      "longitude": -8.799452,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069161,
      "ems": null
    },
    {
      "latitude": 37.856323,
      "longitude": -8.799406,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069164,
      "ems": null
    },
    {
      "latitude": 37.854836,
      "longitude": -8.799392,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661069166,
      "ems": null
    },
    {
      "latitude": 37.852787,
      "longitude": -8.799452,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661069170,
      "ems": null
    },
    {
      "latitude": 37.850922,
      "longitude": -8.799523,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069173,
      "ems": null
    },
    {
      "latitude": 37.849438,
      "longitude": -8.799631,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069175,
      "ems": null
    },
    {
      "latitude": 37.847435,
      "longitude": -8.79975,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069178,
      "ems": null
    },
    {
      "latitude": 37.845795,
      "longitude": -8.799932,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069181,
      "ems": null
    },
    {
      "latitude": 37.843872,
      "longitude": -8.800049,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069185,
      "ems": null
    },
    {
      "latitude": 37.842033,
      "longitude": -8.800228,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069187,
      "ems": null
    },
    {
      "latitude": 37.840302,
      "longitude": -8.800458,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069191,
      "ems": null
    },
    {
      "latitude": 37.836773,
      "longitude": -8.800467,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661069196,
      "ems": null
    },
    {
      "latitude": 37.834724,
      "longitude": -8.800347,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069200,
      "ems": null
    },
    {
      "latitude": 37.833237,
      "longitude": -8.800168,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069203,
      "ems": null
    },
    {
      "latitude": 37.831741,
      "longitude": -8.800049,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069206,
      "ems": null
    },
    {
      "latitude": 37.829544,
      "longitude": -8.799815,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069209,
      "ems": null
    },
    {
      "latitude": 37.828262,
      "longitude": -8.799698,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069212,
      "ems": null
    },
    {
      "latitude": 37.826294,
      "longitude": -8.799464,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069214,
      "ems": null
    },
    {
      "latitude": 37.824253,
      "longitude": -8.799212,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069218,
      "ems": null
    },
    {
      "latitude": 37.822586,
      "longitude": -8.799055,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069221,
      "ems": null
    },
    {
      "latitude": 37.820759,
      "longitude": -8.798914,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069224,
      "ems": null
    },
    {
      "latitude": 37.817501,
      "longitude": -8.798676,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069230,
      "ems": null
    },
    {
      "latitude": 37.813778,
      "longitude": -8.798615,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661069236,
      "ems": null
    },
    {
      "latitude": 37.812054,
      "longitude": -8.798736,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069239,
      "ems": null
    },
    {
      "latitude": 37.810379,
      "longitude": -8.798855,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069242,
      "ems": null
    },
    {
      "latitude": 37.808659,
      "longitude": -8.799034,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069245,
      "ems": null
    },
    {
      "latitude": 37.806934,
      "longitude": -8.799153,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069248,
      "ems": null
    },
    {
      "latitude": 37.805328,
      "longitude": -8.799348,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069251,
      "ems": null
    },
    {
      "latitude": 37.802094,
      "longitude": -8.79981,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069256,
      "ems": null
    },
    {
      "latitude": 37.800186,
      "longitude": -8.800168,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069260,
      "ems": null
    },
    {
      "latitude": 37.798603,
      "longitude": -8.800527,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069263,
      "ems": null
    },
    {
      "latitude": 37.797577,
      "longitude": -8.800706,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069264,
      "ems": null
    },
    {
      "latitude": 37.795212,
      "longitude": -8.801218,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069268,
      "ems": null
    },
    {
      "latitude": 37.793427,
      "longitude": -8.801626,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069271,
      "ems": null
    },
    {
      "latitude": 37.791687,
      "longitude": -8.802035,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069275,
      "ems": null
    },
    {
      "latitude": 37.789711,
      "longitude": -8.802437,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069278,
      "ems": null
    },
    {
      "latitude": 37.786125,
      "longitude": -8.803154,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069284,
      "ems": null
    },
    {
      "latitude": 37.782394,
      "longitude": -8.803847,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069290,
      "ems": null
    },
    {
      "latitude": 37.779144,
      "longitude": -8.804467,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069295,
      "ems": null
    },
    {
      "latitude": 37.775234,
      "longitude": -8.805183,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 186,
      "squawk": "3276",
      "timestamp": 1661069301,
      "ems": null
    },
    {
      "latitude": 37.773788,
      "longitude": -8.805367,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069304,
      "ems": null
    },
    {
      "latitude": 37.771317,
      "longitude": -8.8056,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069308,
      "ems": null
    },
    {
      "latitude": 37.769577,
      "longitude": -8.805717,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069311,
      "ems": null
    },
    {
      "latitude": 37.7677,
      "longitude": -8.805776,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661069314,
      "ems": null
    },
    {
      "latitude": 37.765823,
      "longitude": -8.805717,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069317,
      "ems": null
    },
    {
      "latitude": 37.763874,
      "longitude": -8.805661,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069320,
      "ems": null
    },
    {
      "latitude": 37.76215,
      "longitude": -8.805542,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069323,
      "ems": null
    },
    {
      "latitude": 37.760242,
      "longitude": -8.805363,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069326,
      "ems": null
    },
    {
      "latitude": 37.758453,
      "longitude": -8.805133,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661069328,
      "ems": null
    },
    {
      "latitude": 37.756485,
      "longitude": -8.804782,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069332,
      "ems": null
    },
    {
      "latitude": 37.754654,
      "longitude": -8.804432,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069335,
      "ems": null
    },
    {
      "latitude": 37.752823,
      "longitude": -8.804081,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069338,
      "ems": null
    },
    {
      "latitude": 37.751038,
      "longitude": -8.803789,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069341,
      "ems": null
    },
    {
      "latitude": 37.749207,
      "longitude": -8.80338,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069344,
      "ems": null
    },
    {
      "latitude": 37.747421,
      "longitude": -8.803029,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069347,
      "ems": null
    },
    {
      "latitude": 37.745533,
      "longitude": -8.802616,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661069350,
      "ems": null
    },
    {
      "latitude": 37.743576,
      "longitude": -8.802198,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069353,
      "ems": null
    },
    {
      "latitude": 37.740143,
      "longitude": -8.80151,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069359,
      "ems": null
    },
    {
      "latitude": 37.736389,
      "longitude": -8.800925,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661069365,
      "ems": null
    },
    {
      "latitude": 37.732822,
      "longitude": -8.800467,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069371,
      "ems": null
    },
    {
      "latitude": 37.729202,
      "longitude": -8.799991,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069377,
      "ems": null
    },
    {
      "latitude": 37.72728,
      "longitude": -8.799815,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069380,
      "ems": null
    },
    {
      "latitude": 37.725609,
      "longitude": -8.79969,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069383,
      "ems": null
    },
    {
      "latitude": 37.723747,
      "longitude": -8.799571,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069386,
      "ems": null
    },
    {
      "latitude": 37.722256,
      "longitude": -8.799512,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069389,
      "ems": null
    },
    {
      "latitude": 37.719883,
      "longitude": -8.799392,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069392,
      "ems": null
    },
    {
      "latitude": 37.717941,
      "longitude": -8.799289,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661069395,
      "ems": null
    },
    {
      "latitude": 37.716019,
      "longitude": -8.799231,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "3276",
      "timestamp": 1661069398,
      "ems": null
    },
    {
      "latitude": 37.714062,
      "longitude": -8.799212,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069401,
      "ems": null
    },
    {
      "latitude": 37.712265,
      "longitude": -8.799231,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661069404,
      "ems": null
    },
    {
      "latitude": 37.708477,
      "longitude": -8.799212,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069410,
      "ems": null
    },
    {
      "latitude": 37.704849,
      "longitude": -8.799172,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069416,
      "ems": null
    },
    {
      "latitude": 37.701214,
      "longitude": -8.799153,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069422,
      "ems": null
    },
    {
      "latitude": 37.697395,
      "longitude": -8.799153,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661069428,
      "ems": null
    },
    {
      "latitude": 37.693859,
      "longitude": -8.799333,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069434,
      "ems": null
    },
    {
      "latitude": 37.690182,
      "longitude": -8.799512,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069440,
      "ems": null
    },
    {
      "latitude": 37.686504,
      "longitude": -8.79975,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069446,
      "ems": null
    },
    {
      "latitude": 37.68264,
      "longitude": -8.800049,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069452,
      "ems": null
    },
    {
      "latitude": 37.679615,
      "longitude": -8.800347,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069458,
      "ems": null
    },
    {
      "latitude": 37.675564,
      "longitude": -8.800706,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069464,
      "ems": null
    },
    {
      "latitude": 37.671978,
      "longitude": -8.801124,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069470,
      "ems": null
    },
    {
      "latitude": 37.668503,
      "longitude": -8.801452,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069476,
      "ems": null
    },
    {
      "latitude": 37.664932,
      "longitude": -8.801861,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069482,
      "ems": null
    },
    {
      "latitude": 37.661739,
      "longitude": -8.802318,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069488,
      "ems": null
    },
    {
      "latitude": 37.659576,
      "longitude": -8.802795,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069491,
      "ems": null
    },
    {
      "latitude": 37.657837,
      "longitude": -8.803205,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661069494,
      "ems": null
    },
    {
      "latitude": 37.656097,
      "longitude": -8.803672,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069497,
      "ems": null
    },
    {
      "latitude": 37.654335,
      "longitude": -8.804229,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069500,
      "ems": null
    },
    {
      "latitude": 37.652618,
      "longitude": -8.804724,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069503,
      "ems": null
    },
    {
      "latitude": 37.651382,
      "longitude": -8.805191,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661069506,
      "ems": null
    },
    {
      "latitude": 37.649124,
      "longitude": -8.80596,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661069509,
      "ems": null
    },
    {
      "latitude": 37.647633,
      "longitude": -8.806498,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661069512,
      "ems": null
    },
    {
      "latitude": 37.645908,
      "longitude": -8.807095,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661069515,
      "ems": null
    },
    {
      "latitude": 37.644104,
      "longitude": -8.807704,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069518,
      "ems": null
    },
    {
      "latitude": 37.642185,
      "longitude": -8.808349,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069521,
      "ems": null
    },
    {
      "latitude": 37.638794,
      "longitude": -8.809458,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069527,
      "ems": null
    },
    {
      "latitude": 37.63525,
      "longitude": -8.810438,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661069533,
      "ems": null
    },
    {
      "latitude": 37.631699,
      "longitude": -8.811386,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069539,
      "ems": null
    },
    {
      "latitude": 37.628498,
      "longitude": -8.812289,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069545,
      "ems": null
    },
    {
      "latitude": 37.624878,
      "longitude": -8.813431,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069551,
      "ems": null
    },
    {
      "latitude": 37.621307,
      "longitude": -8.8146,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069557,
      "ems": null
    },
    {
      "latitude": 37.618057,
      "longitude": -8.815594,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069563,
      "ems": null
    },
    {
      "latitude": 37.614258,
      "longitude": -8.816411,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069569,
      "ems": null
    },
    {
      "latitude": 37.612473,
      "longitude": -8.816704,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069572,
      "ems": null
    },
    {
      "latitude": 37.610764,
      "longitude": -8.816827,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069575,
      "ems": null
    },
    {
      "latitude": 37.609459,
      "longitude": -8.816946,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661069578,
      "ems": null
    },
    {
      "latitude": 37.607224,
      "longitude": -8.817006,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661069581,
      "ems": null
    },
    {
      "latitude": 37.605423,
      "longitude": -8.816996,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069584,
      "ems": null
    },
    {
      "latitude": 37.603687,
      "longitude": -8.816946,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661069587,
      "ems": null
    },
    {
      "latitude": 37.602127,
      "longitude": -8.816879,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661069590,
      "ems": null
    },
    {
      "latitude": 37.600288,
      "longitude": -8.816708,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069593,
      "ems": null
    },
    {
      "latitude": 37.598557,
      "longitude": -8.816528,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069596,
      "ems": null
    },
    {
      "latitude": 37.59668,
      "longitude": -8.816295,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 173,
      "squawk": "3276",
      "timestamp": 1661069599,
      "ems": null
    },
    {
      "latitude": 37.594982,
      "longitude": -8.815991,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069602,
      "ems": null
    },
    {
      "latitude": 37.593166,
      "longitude": -8.815573,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661069605,
      "ems": null
    },
    {
      "latitude": 37.591507,
      "longitude": -8.815185,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 167,
      "squawk": "3276",
      "timestamp": 1661069608,
      "ems": null
    },
    {
      "latitude": 37.589863,
      "longitude": -8.814677,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661069611,
      "ems": null
    },
    {
      "latitude": 37.587952,
      "longitude": -8.81402,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661069614,
      "ems": null
    },
    {
      "latitude": 37.586563,
      "longitude": -8.813606,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661069617,
      "ems": null
    },
    {
      "latitude": 37.584915,
      "longitude": -8.813022,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661069620,
      "ems": null
    },
    {
      "latitude": 37.583111,
      "longitude": -8.812469,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661069623,
      "ems": null
    },
    {
      "latitude": 37.581573,
      "longitude": -8.811931,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661069626,
      "ems": null
    },
    {
      "latitude": 37.579651,
      "longitude": -8.811327,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 165,
      "squawk": "3276",
      "timestamp": 1661069629,
      "ems": null
    },
    {
      "latitude": 37.576401,
      "longitude": -8.810275,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661069635,
      "ems": null
    },
    {
      "latitude": 37.573101,
      "longitude": -8.809303,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 167,
      "squawk": "3276",
      "timestamp": 1661069641,
      "ems": null
    },
    {
      "latitude": 37.569706,
      "longitude": -8.808408,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 168,
      "squawk": "3276",
      "timestamp": 1661069647,
      "ems": null
    },
    {
      "latitude": 37.566772,
      "longitude": -8.807752,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069653,
      "ems": null
    },
    {
      "latitude": 37.564396,
      "longitude": -8.807214,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069657,
      "ems": null
    },
    {
      "latitude": 37.562759,
      "longitude": -8.806886,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069660,
      "ems": null
    },
    {
      "latitude": 37.561386,
      "longitude": -8.806652,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661069662,
      "ems": null
    },
    {
      "latitude": 37.558777,
      "longitude": -8.806127,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 171,
      "squawk": "3276",
      "timestamp": 1661069667,
      "ems": null
    },
    {
      "latitude": 37.555271,
      "longitude": -8.805304,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 167,
      "squawk": "3276",
      "timestamp": 1661069673,
      "ems": null
    },
    {
      "latitude": 37.551968,
      "longitude": -8.804288,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661069679,
      "ems": null
    },
    {
      "latitude": 37.550106,
      "longitude": -8.803572,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661069682,
      "ems": null
    },
    {
      "latitude": 37.548386,
      "longitude": -8.802913,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661069685,
      "ems": null
    },
    {
      "latitude": 37.547012,
      "longitude": -8.802328,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661069688,
      "ems": null
    },
    {
      "latitude": 37.545227,
      "longitude": -8.801568,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661069691,
      "ems": null
    },
    {
      "latitude": 37.543716,
      "longitude": -8.800983,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "3276",
      "timestamp": 1661069694,
      "ems": null
    },
    {
      "latitude": 37.541794,
      "longitude": -8.800282,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661069697,
      "ems": null
    },
    {
      "latitude": 37.5401,
      "longitude": -8.79964,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "3276",
      "timestamp": 1661069700,
      "ems": null
    },
    {
      "latitude": 37.536697,
      "longitude": -8.798496,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 164,
      "squawk": "3276",
      "timestamp": 1661069706,
      "ems": null
    },
    {
      "latitude": 37.533253,
      "longitude": -8.797362,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 166,
      "squawk": "3276",
      "timestamp": 1661069712,
      "ems": null
    },
    {
      "latitude": 37.531586,
      "longitude": -8.796893,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 169,
      "squawk": "3276",
      "timestamp": 1661069715,
      "ems": null
    },
    {
      "latitude": 37.529621,
      "longitude": -8.796526,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 172,
      "squawk": "3276",
      "timestamp": 1661069718,
      "ems": null
    },
    {
      "latitude": 37.527855,
      "longitude": -8.796288,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 174,
      "squawk": "3276",
      "timestamp": 1661069721,
      "ems": null
    },
    {
      "latitude": 37.526085,
      "longitude": -8.796108,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661069724,
      "ems": null
    },
    {
      "latitude": 37.524261,
      "longitude": -8.796017,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661069727,
      "ems": null
    },
    {
      "latitude": 37.522781,
      "longitude": -8.795929,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661069730,
      "ems": null
    },
    {
      "latitude": 37.520691,
      "longitude": -8.795899,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "3276",
      "timestamp": 1661069733,
      "ems": null
    },
    {
      "latitude": 37.519089,
      "longitude": -8.795959,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661069736,
      "ems": null
    },
    {
      "latitude": 37.517075,
      "longitude": -8.796017,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069739,
      "ems": null
    },
    {
      "latitude": 37.515472,
      "longitude": -8.796133,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069742,
      "ems": null
    },
    {
      "latitude": 37.513702,
      "longitude": -8.796288,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661069745,
      "ems": null
    },
    {
      "latitude": 37.511745,
      "longitude": -8.796526,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069748,
      "ems": null
    },
    {
      "latitude": 37.509705,
      "longitude": -8.796777,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 186,
      "squawk": "3276",
      "timestamp": 1661069751,
      "ems": null
    },
    {
      "latitude": 37.507874,
      "longitude": -8.797069,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069754,
      "ems": null
    },
    {
      "latitude": 37.506042,
      "longitude": -8.79736,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069757,
      "ems": null
    },
    {
      "latitude": 37.50444,
      "longitude": -8.797653,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069760,
      "ems": null
    },
    {
      "latitude": 37.502575,
      "longitude": -8.798018,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069763,
      "ems": null
    },
    {
      "latitude": 37.500481,
      "longitude": -8.798377,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069766,
      "ems": null
    },
    {
      "latitude": 37.496895,
      "longitude": -8.798974,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069772,
      "ems": null
    },
    {
      "latitude": 37.493317,
      "longitude": -8.79964,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069778,
      "ems": null
    },
    {
      "latitude": 37.48959,
      "longitude": -8.800347,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661069784,
      "ems": null
    },
    {
      "latitude": 37.486038,
      "longitude": -8.801101,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069790,
      "ems": null
    },
    {
      "latitude": 37.482327,
      "longitude": -8.802019,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661069796,
      "ems": null
    },
    {
      "latitude": 37.478531,
      "longitude": -8.803087,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069802,
      "ems": null
    },
    {
      "latitude": 37.474831,
      "longitude": -8.803989,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069808,
      "ems": null
    },
    {
      "latitude": 37.471245,
      "longitude": -8.804586,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661069814,
      "ems": null
    },
    {
      "latitude": 37.469376,
      "longitude": -8.804782,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069818,
      "ems": null
    },
    {
      "latitude": 37.467754,
      "longitude": -8.804945,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661069820,
      "ems": null
    },
    {
      "latitude": 37.465939,
      "longitude": -8.805243,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 186,
      "squawk": "3276",
      "timestamp": 1661069823,
      "ems": null
    },
    {
      "latitude": 37.46389,
      "longitude": -8.805542,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069827,
      "ems": null
    },
    {
      "latitude": 37.462215,
      "longitude": -8.80578,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069830,
      "ems": null
    },
    {
      "latitude": 37.460258,
      "longitude": -8.806139,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069832,
      "ems": null
    },
    {
      "latitude": 37.458527,
      "longitude": -8.806418,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661069835,
      "ems": null
    },
    {
      "latitude": 37.454865,
      "longitude": -8.807061,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "3276",
      "timestamp": 1661069842,
      "ems": null
    },
    {
      "latitude": 37.451202,
      "longitude": -8.807879,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069848,
      "ems": null
    },
    {
      "latitude": 37.449459,
      "longitude": -8.808289,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "3276",
      "timestamp": 1661069851,
      "ems": null
    },
    {
      "latitude": 37.447784,
      "longitude": -8.808766,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "3276",
      "timestamp": 1661069854,
      "ems": null
    },
    {
      "latitude": 37.446075,
      "longitude": -8.809223,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069856,
      "ems": null
    },
    {
      "latitude": 37.444153,
      "longitude": -8.809781,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069860,
      "ems": null
    },
    {
      "latitude": 37.442245,
      "longitude": -8.810259,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069863,
      "ems": null
    },
    {
      "latitude": 37.440521,
      "longitude": -8.810797,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069866,
      "ems": null
    },
    {
      "latitude": 37.438751,
      "longitude": -8.811274,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069869,
      "ems": null
    },
    {
      "latitude": 37.435318,
      "longitude": -8.812321,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069875,
      "ems": null
    },
    {
      "latitude": 37.431862,
      "longitude": -8.813423,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069881,
      "ems": null
    },
    {
      "latitude": 37.428371,
      "longitude": -8.814618,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661069887,
      "ems": null
    },
    {
      "latitude": 37.424973,
      "longitude": -8.815752,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661069893,
      "ems": null
    },
    {
      "latitude": 37.421585,
      "longitude": -8.816646,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069899,
      "ems": null
    },
    {
      "latitude": 37.418015,
      "longitude": -8.817522,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661069905,
      "ems": null
    },
    {
      "latitude": 37.414497,
      "longitude": -8.818379,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661069911,
      "ems": null
    },
    {
      "latitude": 37.41124,
      "longitude": -8.819335,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661069917,
      "ems": null
    },
    {
      "latitude": 37.407852,
      "longitude": -8.820327,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661069923,
      "ems": null
    },
    {
      "latitude": 37.404327,
      "longitude": -8.821554,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661069929,
      "ems": null
    },
    {
      "latitude": 37.402908,
      "longitude": -8.822021,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661069931,
      "ems": null
    },
    {
      "latitude": 37.40123,
      "longitude": -8.822679,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661069934,
      "ems": null
    },
    {
      "latitude": 37.399509,
      "longitude": -8.823276,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661069937,
      "ems": null
    },
    {
      "latitude": 37.396408,
      "longitude": -8.824476,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661069944,
      "ems": null
    },
    {
      "latitude": 37.394341,
      "longitude": -8.825305,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661069947,
      "ems": null
    },
    {
      "latitude": 37.393131,
      "longitude": -8.825843,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661069950,
      "ems": null
    },
    {
      "latitude": 37.389454,
      "longitude": -8.827515,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661069955,
      "ems": null
    },
    {
      "latitude": 37.388569,
      "longitude": -8.827932,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661069957,
      "ems": null
    },
    {
      "latitude": 37.387436,
      "longitude": -8.828625,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661069959,
      "ems": null
    },
    {
      "latitude": 37.386383,
      "longitude": -8.829186,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661069961,
      "ems": null
    },
    {
      "latitude": 37.385635,
      "longitude": -8.829604,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661069962,
      "ems": null
    },
    {
      "latitude": 37.384506,
      "longitude": -8.830319,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661069964,
      "ems": null
    },
    {
      "latitude": 37.384239,
      "longitude": -8.830441,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661069965,
      "ems": null
    },
    {
      "latitude": 37.383171,
      "longitude": -8.831098,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661069967,
      "ems": null
    },
    {
      "latitude": 37.382423,
      "longitude": -8.831574,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "3276",
      "timestamp": 1661069968,
      "ems": null
    },
    {
      "latitude": 37.382099,
      "longitude": -8.831754,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "3276",
      "timestamp": 1661069970,
      "ems": null
    },
    {
      "latitude": 37.380562,
      "longitude": -8.832709,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "3276",
      "timestamp": 1661069972,
      "ems": null
    },
    {
      "latitude": 37.377911,
      "longitude": -8.83456,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 210,
      "squawk": "3276",
      "timestamp": 1661069977,
      "ems": null
    },
    {
      "latitude": 37.376266,
      "longitude": -8.835813,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661069980,
      "ems": null
    },
    {
      "latitude": 37.374744,
      "longitude": -8.837008,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661069983,
      "ems": null
    },
    {
      "latitude": 37.373066,
      "longitude": -8.838322,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661069986,
      "ems": null
    },
    {
      "latitude": 37.37146,
      "longitude": -8.839553,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661069989,
      "ems": null
    },
    {
      "latitude": 37.369904,
      "longitude": -8.840722,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661069992,
      "ems": null
    },
    {
      "latitude": 37.368622,
      "longitude": -8.841773,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661069995,
      "ems": null
    },
    {
      "latitude": 37.367615,
      "longitude": -8.842591,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661069997,
      "ems": null
    },
    {
      "latitude": 37.366364,
      "longitude": -8.843696,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661069999,
      "ems": null
    },
    {
      "latitude": 37.365005,
      "longitude": -8.844812,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 214,
      "squawk": "3276",
      "timestamp": 1661070002,
      "ems": null
    },
    {
      "latitude": 37.362686,
      "longitude": -8.84686,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 214,
      "squawk": "3276",
      "timestamp": 1661070007,
      "ems": null
    },
    {
      "latitude": 37.358963,
      "longitude": -8.850024,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 214,
      "squawk": "3276",
      "timestamp": 1661070014,
      "ems": null
    },
    {
      "latitude": 37.355804,
      "longitude": -8.852701,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070020,
      "ems": null
    },
    {
      "latitude": 37.354111,
      "longitude": -8.854104,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661070026,
      "ems": null
    },
    {
      "latitude": 37.349697,
      "longitude": -8.857548,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661070032,
      "ems": null
    },
    {
      "latitude": 37.347382,
      "longitude": -8.859246,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070038,
      "ems": null
    },
    {
      "latitude": 37.344452,
      "longitude": -8.861116,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661070042,
      "ems": null
    },
    {
      "latitude": 37.342854,
      "longitude": -8.862085,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070045,
      "ems": null
    },
    {
      "latitude": 37.341366,
      "longitude": -8.862982,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070048,
      "ems": null
    },
    {
      "latitude": 37.339596,
      "longitude": -8.863936,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070051,
      "ems": null
    },
    {
      "latitude": 37.338245,
      "longitude": -8.864654,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070053,
      "ems": null
    },
    {
      "latitude": 37.337448,
      "longitude": -8.86509,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070055,
      "ems": null
    },
    {
      "latitude": 37.335312,
      "longitude": -8.866205,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070059,
      "ems": null
    },
    {
      "latitude": 37.333603,
      "longitude": -8.867136,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070062,
      "ems": null
    },
    {
      "latitude": 37.33287,
      "longitude": -8.867603,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070064,
      "ems": null
    },
    {
      "latitude": 37.329849,
      "longitude": -8.869298,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070069,
      "ems": null
    },
    {
      "latitude": 37.326187,
      "longitude": -8.87146,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661070076,
      "ems": null
    },
    {
      "latitude": 37.32312,
      "longitude": -8.873272,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070082,
      "ems": null
    },
    {
      "latitude": 37.319687,
      "longitude": -8.874907,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661070088,
      "ems": null
    },
    {
      "latitude": 37.317719,
      "longitude": -8.875668,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070091,
      "ems": null
    },
    {
      "latitude": 37.315979,
      "longitude": -8.87631,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661070094,
      "ems": null
    },
    {
      "latitude": 37.31432,
      "longitude": -8.876893,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070097,
      "ems": null
    },
    {
      "latitude": 37.312641,
      "longitude": -8.877431,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661070099,
      "ems": null
    },
    {
      "latitude": 37.310642,
      "longitude": -8.877909,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070103,
      "ems": null
    },
    {
      "latitude": 37.308826,
      "longitude": -8.878266,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661070106,
      "ems": null
    },
    {
      "latitude": 37.307011,
      "longitude": -8.878386,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661070109,
      "ems": null
    },
    {
      "latitude": 37.30513,
      "longitude": -8.878414,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661070112,
      "ems": null
    },
    {
      "latitude": 37.303436,
      "longitude": -8.878356,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661070115,
      "ems": null
    },
    {
      "latitude": 37.301651,
      "longitude": -8.878239,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661070118,
      "ems": null
    },
    {
      "latitude": 37.29998,
      "longitude": -8.878028,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661070121,
      "ems": null
    },
    {
      "latitude": 37.298443,
      "longitude": -8.877909,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 175,
      "squawk": "3276",
      "timestamp": 1661070124,
      "ems": null
    },
    {
      "latitude": 37.296349,
      "longitude": -8.877729,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070127,
      "ems": null
    },
    {
      "latitude": 37.294582,
      "longitude": -8.87761,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070130,
      "ems": null
    },
    {
      "latitude": 37.293091,
      "longitude": -8.877479,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070133,
      "ems": null
    },
    {
      "latitude": 37.291042,
      "longitude": -8.877312,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070136,
      "ems": null
    },
    {
      "latitude": 37.289272,
      "longitude": -8.877192,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070139,
      "ems": null
    },
    {
      "latitude": 37.285492,
      "longitude": -8.876895,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "3276",
      "timestamp": 1661070145,
      "ems": null
    },
    {
      "latitude": 37.282104,
      "longitude": -8.876655,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 177,
      "squawk": "3276",
      "timestamp": 1661070151,
      "ems": null
    },
    {
      "latitude": 37.278427,
      "longitude": -8.876595,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 180,
      "squawk": "3276",
      "timestamp": 1661070157,
      "ems": null
    },
    {
      "latitude": 37.275009,
      "longitude": -8.876661,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661070163,
      "ems": null
    },
    {
      "latitude": 37.27327,
      "longitude": -8.876719,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661070166,
      "ems": null
    },
    {
      "latitude": 37.271584,
      "longitude": -8.876774,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3276",
      "timestamp": 1661070169,
      "ems": null
    },
    {
      "latitude": 37.269768,
      "longitude": -8.876834,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661070172,
      "ems": null
    },
    {
      "latitude": 37.268188,
      "longitude": -8.876895,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661070175,
      "ems": null
    },
    {
      "latitude": 37.266678,
      "longitude": -8.877011,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661070177,
      "ems": null
    },
    {
      "latitude": 37.266449,
      "longitude": -8.877011,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "3276",
      "timestamp": 1661070178,
      "ems": null
    },
    {
      "latitude": 37.26339,
      "longitude": -8.877252,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661070184,
      "ems": null
    },
    {
      "latitude": 37.260223,
      "longitude": -8.877538,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 184,
      "squawk": "3276",
      "timestamp": 1661070190,
      "ems": null
    },
    {
      "latitude": 37.256081,
      "longitude": -8.877968,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 185,
      "squawk": "3276",
      "timestamp": 1661070196,
      "ems": null
    },
    {
      "latitude": 37.254219,
      "longitude": -8.878207,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 186,
      "squawk": "3276",
      "timestamp": 1661070199,
      "ems": null
    },
    {
      "latitude": 37.252945,
      "longitude": -8.878414,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 187,
      "squawk": "3276",
      "timestamp": 1661070201,
      "ems": null
    },
    {
      "latitude": 37.251335,
      "longitude": -8.878804,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070204,
      "ems": null
    },
    {
      "latitude": 37.249889,
      "longitude": -8.879163,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661070207,
      "ems": null
    },
    {
      "latitude": 37.248093,
      "longitude": -8.8797,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070210,
      "ems": null
    },
    {
      "latitude": 37.247223,
      "longitude": -8.879992,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070212,
      "ems": null
    },
    {
      "latitude": 37.245575,
      "longitude": -8.880576,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070215,
      "ems": null
    },
    {
      "latitude": 37.242863,
      "longitude": -8.881551,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070220,
      "ems": null
    },
    {
      "latitude": 37.24128,
      "longitude": -8.882267,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070223,
      "ems": null
    },
    {
      "latitude": 37.239532,
      "longitude": -8.883031,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070226,
      "ems": null
    },
    {
      "latitude": 37.238766,
      "longitude": -8.883461,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070228,
      "ems": null
    },
    {
      "latitude": 37.238205,
      "longitude": -8.883732,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070230,
      "ems": null
    },
    {
      "latitude": 37.235641,
      "longitude": -8.885017,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070234,
      "ems": null
    },
    {
      "latitude": 37.234131,
      "longitude": -8.885836,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070237,
      "ems": null
    },
    {
      "latitude": 37.23262,
      "longitude": -8.886685,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070240,
      "ems": null
    },
    {
      "latitude": 37.231083,
      "longitude": -8.887581,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661070243,
      "ems": null
    },
    {
      "latitude": 37.229416,
      "longitude": -8.888582,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661070246,
      "ems": null
    },
    {
      "latitude": 37.228043,
      "longitude": -8.8894,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661070248,
      "ems": null
    },
    {
      "latitude": 37.226532,
      "longitude": -8.890394,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070251,
      "ems": null
    },
    {
      "latitude": 37.224846,
      "longitude": -8.891522,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070255,
      "ems": null
    },
    {
      "latitude": 37.22319,
      "longitude": -8.892614,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070258,
      "ems": null
    },
    {
      "latitude": 37.221634,
      "longitude": -8.893608,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070261,
      "ems": null
    },
    {
      "latitude": 37.220306,
      "longitude": -8.894543,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070264,
      "ems": null
    },
    {
      "latitude": 37.216976,
      "longitude": -8.896657,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070270,
      "ems": null
    },
    {
      "latitude": 37.213814,
      "longitude": -8.898687,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070276,
      "ems": null
    },
    {
      "latitude": 37.210831,
      "longitude": -8.90062,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661070282,
      "ems": null
    },
    {
      "latitude": 37.207527,
      "longitude": -8.902628,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661070288,
      "ems": null
    },
    {
      "latitude": 37.204285,
      "longitude": -8.904477,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070294,
      "ems": null
    },
    {
      "latitude": 37.201309,
      "longitude": -8.906055,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070300,
      "ems": null
    },
    {
      "latitude": 37.199242,
      "longitude": -8.907105,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070303,
      "ems": null
    },
    {
      "latitude": 37.197517,
      "longitude": -8.908002,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070306,
      "ems": null
    },
    {
      "latitude": 37.195953,
      "longitude": -8.908802,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070309,
      "ems": null
    },
    {
      "latitude": 37.192818,
      "longitude": -8.910569,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070314,
      "ems": null
    },
    {
      "latitude": 37.189327,
      "longitude": -8.912599,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "3276",
      "timestamp": 1661070321,
      "ems": null
    },
    {
      "latitude": 37.187164,
      "longitude": -8.913828,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070326,
      "ems": null
    },
    {
      "latitude": 37.182995,
      "longitude": -8.916121,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070333,
      "ems": null
    },
    {
      "latitude": 37.180023,
      "longitude": -8.917626,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070338,
      "ems": null
    },
    {
      "latitude": 37.177315,
      "longitude": -8.918809,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070343,
      "ems": null
    },
    {
      "latitude": 37.175873,
      "longitude": -8.919406,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661070346,
      "ems": null
    },
    {
      "latitude": 37.17387,
      "longitude": -8.920241,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070350,
      "ems": null
    },
    {
      "latitude": 37.17215,
      "longitude": -8.920898,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070353,
      "ems": null
    },
    {
      "latitude": 37.170502,
      "longitude": -8.921541,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661070356,
      "ems": null
    },
    {
      "latitude": 37.168888,
      "longitude": -8.922092,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070358,
      "ems": null
    },
    {
      "latitude": 37.167259,
      "longitude": -8.92263,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661070362,
      "ems": null
    },
    {
      "latitude": 37.16563,
      "longitude": -8.923108,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661070365,
      "ems": null
    },
    {
      "latitude": 37.163818,
      "longitude": -8.923528,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070368,
      "ems": null
    },
    {
      "latitude": 37.162231,
      "longitude": -8.923883,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070371,
      "ems": null
    },
    {
      "latitude": 37.160751,
      "longitude": -8.92423,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070374,
      "ems": null
    },
    {
      "latitude": 37.159065,
      "longitude": -8.924601,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070377,
      "ems": null
    },
    {
      "latitude": 37.157318,
      "longitude": -8.925048,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070380,
      "ems": null
    },
    {
      "latitude": 37.155807,
      "longitude": -8.925398,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070383,
      "ems": null
    },
    {
      "latitude": 37.154068,
      "longitude": -8.925807,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 190,
      "squawk": "3276",
      "timestamp": 1661070386,
      "ems": null
    },
    {
      "latitude": 37.150875,
      "longitude": -8.926571,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 191,
      "squawk": "3276",
      "timestamp": 1661070392,
      "ems": null
    },
    {
      "latitude": 37.147476,
      "longitude": -8.927466,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "3276",
      "timestamp": 1661070398,
      "ems": null
    },
    {
      "latitude": 37.144356,
      "longitude": -8.928422,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070404,
      "ems": null
    },
    {
      "latitude": 37.140911,
      "longitude": -8.929497,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070410,
      "ems": null
    },
    {
      "latitude": 37.139515,
      "longitude": -8.929975,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070413,
      "ems": null
    },
    {
      "latitude": 37.137817,
      "longitude": -8.930541,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070416,
      "ems": null
    },
    {
      "latitude": 37.136215,
      "longitude": -8.931125,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661070419,
      "ems": null
    },
    {
      "latitude": 37.13475,
      "longitude": -8.931709,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661070422,
      "ems": null
    },
    {
      "latitude": 37.133102,
      "longitude": -8.932352,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070425,
      "ems": null
    },
    {
      "latitude": 37.131416,
      "longitude": -8.93302,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070428,
      "ems": null
    },
    {
      "latitude": 37.129738,
      "longitude": -8.933795,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "3276",
      "timestamp": 1661070431,
      "ems": null
    },
    {
      "latitude": 37.127876,
      "longitude": -8.934691,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070434,
      "ems": null
    },
    {
      "latitude": 37.126282,
      "longitude": -8.935508,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070437,
      "ems": null
    },
    {
      "latitude": 37.124573,
      "longitude": -8.936363,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070440,
      "ems": null
    },
    {
      "latitude": 37.123035,
      "longitude": -8.93714,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070443,
      "ems": null
    },
    {
      "latitude": 37.121338,
      "longitude": -8.938079,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 203,
      "squawk": "3276",
      "timestamp": 1661070446,
      "ems": null
    },
    {
      "latitude": 37.11969,
      "longitude": -8.939014,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070449,
      "ems": null
    },
    {
      "latitude": 37.117916,
      "longitude": -8.940064,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661070452,
      "ems": null
    },
    {
      "latitude": 37.116577,
      "longitude": -8.940943,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070455,
      "ems": null
    },
    {
      "latitude": 37.114937,
      "longitude": -8.942035,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070458,
      "ems": null
    },
    {
      "latitude": 37.113308,
      "longitude": -8.94311,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070462,
      "ems": null
    },
    {
      "latitude": 37.11113,
      "longitude": -8.944566,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070465,
      "ems": null
    },
    {
      "latitude": 37.109722,
      "longitude": -8.945558,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070468,
      "ems": null
    },
    {
      "latitude": 37.108513,
      "longitude": -8.946394,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070471,
      "ems": null
    },
    {
      "latitude": 37.106415,
      "longitude": -8.947827,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661070474,
      "ems": null
    },
    {
      "latitude": 37.104694,
      "longitude": -8.94908,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661070477,
      "ems": null
    },
    {
      "latitude": 37.101425,
      "longitude": -8.95152,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661070483,
      "ems": null
    },
    {
      "latitude": 37.099899,
      "longitude": -8.952723,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 212,
      "squawk": "3276",
      "timestamp": 1661070486,
      "ems": null
    },
    {
      "latitude": 37.098587,
      "longitude": -8.95374,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070489,
      "ems": null
    },
    {
      "latitude": 37.096546,
      "longitude": -8.955469,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070492,
      "ems": null
    },
    {
      "latitude": 37.095428,
      "longitude": -8.956425,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070494,
      "ems": null
    },
    {
      "latitude": 37.094009,
      "longitude": -8.957598,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070498,
      "ems": null
    },
    {
      "latitude": 37.093323,
      "longitude": -8.958181,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070500,
      "ems": null
    },
    {
      "latitude": 37.089191,
      "longitude": -8.96156,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 213,
      "squawk": "3276",
      "timestamp": 1661070507,
      "ems": null
    },
    {
      "latitude": 37.08609,
      "longitude": -8.964025,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 211,
      "squawk": "3276",
      "timestamp": 1661070512,
      "ems": null
    },
    {
      "latitude": 37.083187,
      "longitude": -8.966157,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "3276",
      "timestamp": 1661070518,
      "ems": null
    },
    {
      "latitude": 37.08128,
      "longitude": -8.967411,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070522,
      "ems": null
    },
    {
      "latitude": 37.079647,
      "longitude": -8.968427,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 207,
      "squawk": "3276",
      "timestamp": 1661070525,
      "ems": null
    },
    {
      "latitude": 37.078033,
      "longitude": -8.96946,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070528,
      "ems": null
    },
    {
      "latitude": 37.076706,
      "longitude": -8.970161,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 204,
      "squawk": "3276",
      "timestamp": 1661070530,
      "ems": null
    },
    {
      "latitude": 37.074738,
      "longitude": -8.971213,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "3276",
      "timestamp": 1661070534,
      "ems": null
    },
    {
      "latitude": 37.073132,
      "longitude": -8.972009,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070536,
      "ems": null
    },
    {
      "latitude": 37.07222,
      "longitude": -8.972441,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070539,
      "ems": null
    },
    {
      "latitude": 37.070526,
      "longitude": -8.973203,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070542,
      "ems": null
    },
    {
      "latitude": 37.06815,
      "longitude": -8.974158,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070546,
      "ems": null
    },
    {
      "latitude": 37.066406,
      "longitude": -8.974778,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070549,
      "ems": null
    },
    {
      "latitude": 37.064667,
      "longitude": -8.975363,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070552,
      "ems": null
    },
    {
      "latitude": 37.062889,
      "longitude": -8.975949,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070555,
      "ems": null
    },
    {
      "latitude": 37.061142,
      "longitude": -8.976531,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070558,
      "ems": null
    },
    {
      "latitude": 37.059399,
      "longitude": -8.977024,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "3276",
      "timestamp": 1661070561,
      "ems": null
    },
    {
      "latitude": 37.057629,
      "longitude": -8.977621,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 195,
      "squawk": "3276",
      "timestamp": 1661070564,
      "ems": null
    },
    {
      "latitude": 37.056232,
      "longitude": -8.978159,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 196,
      "squawk": "3276",
      "timestamp": 1661070567,
      "ems": null
    },
    {
      "latitude": 37.052414,
      "longitude": -8.979651,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070573,
      "ems": null
    },
    {
      "latitude": 37.048828,
      "longitude": -8.981148,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 198,
      "squawk": "3276",
      "timestamp": 1661070579,
      "ems": null
    },
    {
      "latitude": 37.045433,
      "longitude": -8.982577,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 199,
      "squawk": "3276",
      "timestamp": 1661070585,
      "ems": null
    },
    {
      "latitude": 37.043884,
      "longitude": -8.98331,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 200,
      "squawk": "3276",
      "timestamp": 1661070588,
      "ems": null
    },
    {
      "latitude": 37.042282,
      "longitude": -8.98407,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070591,
      "ems": null
    },
    {
      "latitude": 37.040546,
      "longitude": -8.984906,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070593,
      "ems": null
    },
    {
      "latitude": 37.038544,
      "longitude": -8.985921,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 201,
      "squawk": "3276",
      "timestamp": 1661070597,
      "ems": null
    },
    {
      "latitude": 37.035233,
      "longitude": -8.987459,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 197,
      "squawk": "3276",
      "timestamp": 1661070603,
      "ems": null
    },
    {
      "latitude": 37.033703,
      "longitude": -8.987951,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "3276",
      "timestamp": 1661070606,
      "ems": null
    },
    {
      "latitude": 37.031841,
      "longitude": -8.988369,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 189,
      "squawk": "3276",
      "timestamp": 1661070609,
      "ems": null
    },
    {
      "latitude": 37.030014,
      "longitude": -8.988569,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 183,
      "squawk": "3276",
      "timestamp": 1661070612,
      "ems": null
    },
    {
      "latitude": 37.028503,
      "longitude": -8.988569,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 178,
      "squawk": "3276",
      "timestamp": 1661070614,
      "ems": null
    },
    {
      "latitude": 37.026581,
      "longitude": -8.988219,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 170,
      "squawk": "3276",
      "timestamp": 1661070618,
      "ems": null
    },
    {
      "latitude": 37.024704,
      "longitude": -8.987517,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "3276",
      "timestamp": 1661070621,
      "ems": null
    },
    {
      "latitude": 37.023468,
      "longitude": -8.986875,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 154,
      "squawk": "3276",
      "timestamp": 1661070624,
      "ems": null
    },
    {
      "latitude": 37.021637,
      "longitude": -8.985589,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 148,
      "squawk": "3276",
      "timestamp": 1661070627,
      "ems": null
    },
    {
      "latitude": 37.020355,
      "longitude": -8.984537,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 147,
      "squawk": "3276",
      "timestamp": 1661070630,
      "ems": null
    },
    {
      "latitude": 37.018707,
      "longitude": -8.983193,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 145,
      "squawk": "3276",
      "timestamp": 1661070633,
      "ems": null
    },
    {
      "latitude": 37.017242,
      "longitude": -8.981908,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 143,
      "squawk": "3276",
      "timestamp": 1661070636,
      "ems": null
    },
    {
      "latitude": 37.015919,
      "longitude": -8.980547,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 139,
      "squawk": "3276",
      "timestamp": 1661070639,
      "ems": null
    },
    {
      "latitude": 37.014679,
      "longitude": -8.979102,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "3276",
      "timestamp": 1661070642,
      "ems": null
    },
    {
      "latitude": 37.013397,
      "longitude": -8.977467,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 133,
      "squawk": "3276",
      "timestamp": 1661070645,
      "ems": null
    },
    {
      "latitude": 37.012344,
      "longitude": -8.975947,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 128,
      "squawk": "3276",
      "timestamp": 1661070648,
      "ems": null
    },
    {
      "latitude": 37.011337,
      "longitude": -8.974135,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 122,
      "squawk": "3276",
      "timestamp": 1661070651,
      "ems": null
    },
    {
      "latitude": 37.010658,
      "longitude": -8.972547,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 117,
      "squawk": "3276",
      "timestamp": 1661070654,
      "ems": null
    },
    {
      "latitude": 37.010006,
      "longitude": -8.970815,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661070657,
      "ems": null
    },
    {
      "latitude": 37.009308,
      "longitude": -8.969024,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661070660,
      "ems": null
    },
    {
      "latitude": 37.00882,
      "longitude": -8.96759,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661070663,
      "ems": null
    },
    {
      "latitude": 37.008133,
      "longitude": -8.965487,
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
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661070666,
      "ems": null
    },
    {
      "latitude": 37.007721,
      "longitude": -8.963792,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661070669,
      "ems": null
    },
    {
      "latitude": 37.007401,
      "longitude": -8.962157,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "3276",
      "timestamp": 1661070672,
      "ems": null
    },
    {
      "latitude": 37.007214,
      "longitude": -8.960724,
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
      "heading": 98,
      "squawk": "3276",
      "timestamp": 1661070675,
      "ems": null
    },
    {
      "latitude": 37.007034,
      "longitude": -8.959059,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "3276",
      "timestamp": 1661070678,
      "ems": null
    },
    {
      "latitude": 37.006897,
      "longitude": -8.957129,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "3276",
      "timestamp": 1661070682,
      "ems": null
    },
    {
      "latitude": 37.006889,
      "longitude": -8.955589,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661070684,
      "ems": null
    },
    {
      "latitude": 37.006897,
      "longitude": -8.954033,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661070688,
      "ems": null
    },
    {
      "latitude": 37.00684,
      "longitude": -8.952484,
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
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661070690,
      "ems": null
    },
    {
      "latitude": 37.00684,
      "longitude": -8.950752,
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
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661070694,
      "ems": null
    },
    {
      "latitude": 37.006889,
      "longitude": -8.94932,
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
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661070697,
      "ems": null
    },
    {
      "latitude": 37.006943,
      "longitude": -8.947604,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "3276",
      "timestamp": 1661070700,
      "ems": null
    },
    {
      "latitude": 37.006981,
      "longitude": -8.945976,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "3276",
      "timestamp": 1661070703,
      "ems": null
    },
    {
      "latitude": 37.007122,
      "longitude": -8.944424,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "3276",
      "timestamp": 1661070706,
      "ems": null
    },
    {
      "latitude": 37.007214,
      "longitude": -8.943528,
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
      "heading": 80,
      "squawk": "3276",
      "timestamp": 1661070708,
      "ems": null
    },
    {
      "latitude": 37.007858,
      "longitude": -8.940825,
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
      "heading": 69,
      "squawk": "3276",
      "timestamp": 1661070713,
      "ems": null
    },
    {
      "latitude": 37.008362,
      "longitude": -8.939482,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070716,
      "ems": null
    },
    {
      "latitude": 37.00882,
      "longitude": -8.938254,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070719,
      "ems": null
    },
    {
      "latitude": 37.009323,
      "longitude": -8.936852,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070722,
      "ems": null
    },
    {
      "latitude": 37.009819,
      "longitude": -8.935408,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070725,
      "ems": null
    },
    {
      "latitude": 37.010334,
      "longitude": -8.933974,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070728,
      "ems": null
    },
    {
      "latitude": 37.010799,
      "longitude": -8.932661,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070731,
      "ems": null
    },
    {
      "latitude": 37.011356,
      "longitude": -8.930929,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070734,
      "ems": null
    },
    {
      "latitude": 37.011795,
      "longitude": -8.929664,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070737,
      "ems": null
    },
    {
      "latitude": 37.012287,
      "longitude": -8.928183,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070740,
      "ems": null
    },
    {
      "latitude": 37.013264,
      "longitude": -8.925257,
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
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070746,
      "ems": null
    },
    {
      "latitude": 37.01413,
      "longitude": -8.922593,
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
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070752,
      "ems": null
    },
    {
      "latitude": 37.015079,
      "longitude": -8.919764,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070758,
      "ems": null
    },
    {
      "latitude": 37.01601,
      "longitude": -8.917077,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661070764,
      "ems": null
    },
    {
      "latitude": 37.017197,
      "longitude": -8.914062,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661070770,
      "ems": null
    },
    {
      "latitude": 37.018341,
      "longitude": -8.911139,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661070776,
      "ems": null
    },
    {
      "latitude": 37.018898,
      "longitude": -8.909852,
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
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661070779,
      "ems": null
    },
    {
      "latitude": 37.019485,
      "longitude": -8.908509,
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
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661070783,
      "ems": null
    },
    {
      "latitude": 37.020035,
      "longitude": -8.907166,
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
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661070785,
      "ems": null
    },
    {
      "latitude": 37.021133,
      "longitude": -8.904536,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661070791,
      "ems": null
    },
    {
      "latitude": 37.022156,
      "longitude": -8.901852,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070797,
      "ems": null
    },
    {
      "latitude": 37.023193,
      "longitude": -8.898868,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070804,
      "ems": null
    },
    {
      "latitude": 37.024113,
      "longitude": -8.896239,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070809,
      "ems": null
    },
    {
      "latitude": 37.025181,
      "longitude": -8.893433,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661070816,
      "ems": null
    },
    {
      "latitude": 37.026253,
      "longitude": -8.890686,
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
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661070822,
      "ems": null
    },
    {
      "latitude": 37.027405,
      "longitude": -8.888057,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661070828,
      "ems": null
    },
    {
      "latitude": 37.027977,
      "longitude": -8.886745,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661070831,
      "ems": null
    },
    {
      "latitude": 37.028534,
      "longitude": -8.885551,
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
      "heading": 60,
      "squawk": "3276",
      "timestamp": 1661070834,
      "ems": null
    },
    {
      "latitude": 37.029095,
      "longitude": -8.884297,
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
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661070837,
      "ems": null
    },
    {
      "latitude": 37.030209,
      "longitude": -8.88173,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661070843,
      "ems": null
    },
    {
      "latitude": 37.031281,
      "longitude": -8.879043,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661070849,
      "ems": null
    },
    {
      "latitude": 37.032349,
      "longitude": -8.876369,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661070855,
      "ems": null
    },
    {
      "latitude": 37.033329,
      "longitude": -8.873789,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070861,
      "ems": null
    },
    {
      "latitude": 37.03384,
      "longitude": -8.872296,
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
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070865,
      "ems": null
    },
    {
      "latitude": 37.034401,
      "longitude": -8.870624,
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
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070867,
      "ems": null
    },
    {
      "latitude": 37.035378,
      "longitude": -8.867579,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070874,
      "ems": null
    },
    {
      "latitude": 37.036217,
      "longitude": -8.864832,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070880,
      "ems": null
    },
    {
      "latitude": 37.037102,
      "longitude": -8.862085,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070886,
      "ems": null
    },
    {
      "latitude": 37.038071,
      "longitude": -8.85913,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070892,
      "ems": null
    },
    {
      "latitude": 37.038963,
      "longitude": -8.856294,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070898,
      "ems": null
    },
    {
      "latitude": 37.039856,
      "longitude": -8.853403,
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
      "heading": 69,
      "squawk": "3276",
      "timestamp": 1661070904,
      "ems": null
    },
    {
      "latitude": 37.040638,
      "longitude": -8.850681,
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
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661070910,
      "ems": null
    },
    {
      "latitude": 37.041458,
      "longitude": -8.847793,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "3276",
      "timestamp": 1661070916,
      "ems": null
    },
    {
      "latitude": 37.042328,
      "longitude": -8.844988,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070922,
      "ems": null
    },
    {
      "latitude": 37.043243,
      "longitude": -8.842182,
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
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070928,
      "ems": null
    },
    {
      "latitude": 37.044159,
      "longitude": -8.839261,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070934,
      "ems": null
    },
    {
      "latitude": 37.045109,
      "longitude": -8.836471,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661070940,
      "ems": null
    },
    {
      "latitude": 37.04604,
      "longitude": -8.833426,
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
      "heading": 71,
      "squawk": "3276",
      "timestamp": 1661070946,
      "ems": null
    },
    {
      "latitude": 37.046448,
      "longitude": -8.83178,
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
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661070949,
      "ems": null
    },
    {
      "latitude": 37.046738,
      "longitude": -8.830441,
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
      "heading": 74,
      "squawk": "3276",
      "timestamp": 1661070952,
      "ems": null
    },
    {
      "latitude": 37.047089,
      "longitude": -8.828858,
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
      "heading": 74,
      "squawk": "3276",
      "timestamp": 1661070955,
      "ems": null
    },
    {
      "latitude": 37.047482,
      "longitude": -8.827216,
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
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661070958,
      "ems": null
    },
    {
      "latitude": 37.048325,
      "longitude": -8.824067,
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
      "heading": 69,
      "squawk": "3276",
      "timestamp": 1661070964,
      "ems": null
    },
    {
      "latitude": 37.049389,
      "longitude": -8.820708,
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
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661070970,
      "ems": null
    },
    {
      "latitude": 37.050369,
      "longitude": -8.817962,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070976,
      "ems": null
    },
    {
      "latitude": 37.050934,
      "longitude": -8.816528,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070979,
      "ems": null
    },
    {
      "latitude": 37.051392,
      "longitude": -8.815155,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070982,
      "ems": null
    },
    {
      "latitude": 37.051857,
      "longitude": -8.813961,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661070985,
      "ems": null
    },
    {
      "latitude": 37.052444,
      "longitude": -8.812379,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661070988,
      "ems": null
    },
    {
      "latitude": 37.053406,
      "longitude": -8.809574,
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661070994,
      "ems": null
    },
    {
      "latitude": 37.054279,
      "longitude": -8.806796,
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
      "heading": 69,
      "squawk": "3276",
      "timestamp": 1661071000,
      "ems": null
    },
    {
      "latitude": 37.055115,
      "longitude": -8.803751,
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
      "heading": 71,
      "squawk": "3276",
      "timestamp": 1661071006,
      "ems": null
    },
    {
      "latitude": 37.055489,
      "longitude": -8.802378,
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
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661071009,
      "ems": null
    },
    {
      "latitude": 37.055832,
      "longitude": -8.800983,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661071012,
      "ems": null
    },
    {
      "latitude": 37.056141,
      "longitude": -8.799512,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661071015,
      "ems": null
    },
    {
      "latitude": 37.056561,
      "longitude": -8.79778,
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
      "heading": 74,
      "squawk": "3276",
      "timestamp": 1661071018,
      "ems": null
    },
    {
      "latitude": 37.056839,
      "longitude": -8.796466,
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
      "heading": 74,
      "squawk": "3276",
      "timestamp": 1661071021,
      "ems": null
    },
    {
      "latitude": 37.057163,
      "longitude": -8.794735,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "3276",
      "timestamp": 1661071024,
      "ems": null
    },
    {
      "latitude": 37.05748,
      "longitude": -8.793328,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "3276",
      "timestamp": 1661071027,
      "ems": null
    },
    {
      "latitude": 37.05777,
      "longitude": -8.79163,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "3276",
      "timestamp": 1661071030,
      "ems": null
    },
    {
      "latitude": 37.058376,
      "longitude": -8.788645,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "3276",
      "timestamp": 1661071036,
      "ems": null
    },
    {
      "latitude": 37.059025,
      "longitude": -8.78548,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "3276",
      "timestamp": 1661071042,
      "ems": null
    },
    {
      "latitude": 37.059631,
      "longitude": -8.782635,
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
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661071048,
      "ems": null
    },
    {
      "latitude": 37.060421,
      "longitude": -8.779629,
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
      "heading": 70,
      "squawk": "3276",
      "timestamp": 1661071054,
      "ems": null
    },
    {
      "latitude": 37.060886,
      "longitude": -8.778195,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661071058,
      "ems": null
    },
    {
      "latitude": 37.061371,
      "longitude": -8.776673,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661071060,
      "ems": null
    },
    {
      "latitude": 37.061771,
      "longitude": -8.775509,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071063,
      "ems": null
    },
    {
      "latitude": 37.062286,
      "longitude": -8.774044,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071067,
      "ems": null
    },
    {
      "latitude": 37.06279,
      "longitude": -8.772758,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071069,
      "ems": null
    },
    {
      "latitude": 37.063309,
      "longitude": -8.771448,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071073,
      "ems": null
    },
    {
      "latitude": 37.063728,
      "longitude": -8.770314,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071075,
      "ems": null
    },
    {
      "latitude": 37.064255,
      "longitude": -8.769018,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071079,
      "ems": null
    },
    {
      "latitude": 37.064804,
      "longitude": -8.767557,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071082,
      "ems": null
    },
    {
      "latitude": 37.06572,
      "longitude": -8.764986,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071088,
      "ems": null
    },
    {
      "latitude": 37.066223,
      "longitude": -8.763818,
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
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661071091,
      "ems": null
    },
    {
      "latitude": 37.067314,
      "longitude": -8.761358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661071096,
      "ems": null
    },
    {
      "latitude": 37.068375,
      "longitude": -8.758675,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071102,
      "ems": null
    },
    {
      "latitude": 37.069427,
      "longitude": -8.755928,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071109,
      "ems": null
    },
    {
      "latitude": 37.070389,
      "longitude": -8.753415,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071114,
      "ems": null
    },
    {
      "latitude": 37.071362,
      "longitude": -8.75067,
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
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661071121,
      "ems": null
    },
    {
      "latitude": 37.071945,
      "longitude": -8.749033,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661071124,
      "ems": null
    },
    {
      "latitude": 37.072899,
      "longitude": -8.746311,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071130,
      "ems": null
    },
    {
      "latitude": 37.073959,
      "longitude": -8.743598,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071136,
      "ems": null
    },
    {
      "latitude": 37.0746,
      "longitude": -8.741961,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071140,
      "ems": null
    },
    {
      "latitude": 37.075836,
      "longitude": -8.738806,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071146,
      "ems": null
    },
    {
      "latitude": 37.077347,
      "longitude": -8.734949,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071154,
      "ems": null
    },
    {
      "latitude": 37.078533,
      "longitude": -8.7321,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071160,
      "ems": null
    },
    {
      "latitude": 37.079742,
      "longitude": -8.729175,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661071166,
      "ems": null
    },
    {
      "latitude": 37.080997,
      "longitude": -8.72619,
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
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661071172,
      "ems": null
    },
    {
      "latitude": 37.082211,
      "longitude": -8.723324,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071178,
      "ems": null
    },
    {
      "latitude": 37.083435,
      "longitude": -8.720222,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071184,
      "ems": null
    },
    {
      "latitude": 37.084629,
      "longitude": -8.717114,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071190,
      "ems": null
    },
    {
      "latitude": 37.085907,
      "longitude": -8.713911,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071196,
      "ems": null
    },
    {
      "latitude": 37.087051,
      "longitude": -8.710964,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071202,
      "ems": null
    },
    {
      "latitude": 37.088306,
      "longitude": -8.707859,
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071208,
      "ems": null
    },
    {
      "latitude": 37.089424,
      "longitude": -8.704933,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071214,
      "ems": null
    },
    {
      "latitude": 37.090576,
      "longitude": -8.701756,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071220,
      "ems": null
    },
    {
      "latitude": 37.091705,
      "longitude": -8.698664,
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
      "heading": 64,
      "squawk": "3276",
      "timestamp": 1661071226,
      "ems": null
    },
    {
      "latitude": 37.092869,
      "longitude": -8.69544,
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071232,
      "ems": null
    },
    {
      "latitude": 37.094032,
      "longitude": -8.692096,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 67,
      "squawk": "3276",
      "timestamp": 1661071238,
      "ems": null
    },
    {
      "latitude": 37.094559,
      "longitude": -8.690477,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661071241,
      "ems": null
    },
    {
      "latitude": 37.095615,
      "longitude": -8.686902,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "3276",
      "timestamp": 1661071247,
      "ems": null
    },
    {
      "latitude": 37.096115,
      "longitude": -8.685102,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 71,
      "squawk": "3276",
      "timestamp": 1661071250,
      "ems": null
    },
    {
      "latitude": 37.096573,
      "longitude": -8.683349,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661071253,
      "ems": null
    },
    {
      "latitude": 37.097012,
      "longitude": -8.681528,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661071256,
      "ems": null
    },
    {
      "latitude": 37.09734,
      "longitude": -8.680274,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661071259,
      "ems": null
    },
    {
      "latitude": 37.097855,
      "longitude": -8.678089,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "3276",
      "timestamp": 1661071262,
      "ems": null
    },
    {
      "latitude": 37.09864,
      "longitude": -8.67496,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 72,
      "squawk": "3276",
      "timestamp": 1661071268,
      "ems": null
    },
    {
      "latitude": 37.099712,
      "longitude": -8.671318,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661071274,
      "ems": null
    },
    {
      "latitude": 37.100464,
      "longitude": -8.669323,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071277,
      "ems": null
    },
    {
      "latitude": 37.101151,
      "longitude": -8.667687,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661071280,
      "ems": null
    },
    {
      "latitude": 37.101883,
      "longitude": -8.666109,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "3276",
      "timestamp": 1661071283,
      "ems": null
    },
    {
      "latitude": 37.102661,
      "longitude": -8.664532,
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
      "heading": 57,
      "squawk": "3276",
      "timestamp": 1661071286,
      "ems": null
    },
    {
      "latitude": 37.103344,
      "longitude": -8.663198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 56,
      "squawk": "3276",
      "timestamp": 1661071289,
      "ems": null
    },
    {
      "latitude": 37.104275,
      "longitude": -8.661526,
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
      "heading": 55,
      "squawk": "3276",
      "timestamp": 1661071292,
      "ems": null
    },
    {
      "latitude": 37.105133,
      "longitude": -8.660031,
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
      "heading": 53,
      "squawk": "3276",
      "timestamp": 1661071295,
      "ems": null
    },
    {
      "latitude": 37.106003,
      "longitude": -8.658629,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "3276",
      "timestamp": 1661071298,
      "ems": null
    },
    {
      "latitude": 37.106834,
      "longitude": -8.657287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 50,
      "squawk": "3276",
      "timestamp": 1661071301,
      "ems": null
    },
    {
      "latitude": 37.107742,
      "longitude": -8.655999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "3276",
      "timestamp": 1661071304,
      "ems": null
    },
    {
      "latitude": 37.108513,
      "longitude": -8.654898,
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
      "heading": 48,
      "squawk": "3276",
      "timestamp": 1661071307,
      "ems": null
    },
    {
      "latitude": 37.109665,
      "longitude": -8.653311,
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
      "heading": 47,
      "squawk": "3276",
      "timestamp": 1661071310,
      "ems": null
    },
    {
      "latitude": 37.110653,
      "longitude": -8.651972,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "3276",
      "timestamp": 1661071313,
      "ems": null
    },
    {
      "latitude": 37.111629,
      "longitude": -8.650659,
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
      "heading": 47,
      "squawk": "3276",
      "timestamp": 1661071316,
      "ems": null
    },
    {
      "latitude": 37.112595,
      "longitude": -8.649279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 49,
      "squawk": "3276",
      "timestamp": 1661071319,
      "ems": null
    },
    {
      "latitude": 37.114376,
      "longitude": -8.646479,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 53,
      "squawk": "3276",
      "timestamp": 1661071326,
      "ems": null
    },
    {
      "latitude": 37.115936,
      "longitude": -8.643611,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 57,
      "squawk": "3276",
      "timestamp": 1661071331,
      "ems": null
    },
    {
      "latitude": 37.116703,
      "longitude": -8.641941,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661071334,
      "ems": null
    },
    {
      "latitude": 37.117401,
      "longitude": -8.64015,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661071337,
      "ems": null
    },
    {
      "latitude": 37.117962,
      "longitude": -8.638418,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "3276",
      "timestamp": 1661071340,
      "ems": null
    },
    {
      "latitude": 37.118637,
      "longitude": -8.636657,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071344,
      "ems": null
    },
    {
      "latitude": 37.119358,
      "longitude": -8.634895,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 60,
      "squawk": "3276",
      "timestamp": 1661071347,
      "ems": null
    },
    {
      "latitude": 37.120102,
      "longitude": -8.633326,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 59,
      "squawk": "3276",
      "timestamp": 1661071349,
      "ems": null
    },
    {
      "latitude": 37.120926,
      "longitude": -8.631631,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 57,
      "squawk": "3276",
      "timestamp": 1661071353,
      "ems": null
    },
    {
      "latitude": 37.122757,
      "longitude": -8.628242,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 54,
      "squawk": "3276",
      "timestamp": 1661071359,
      "ems": null
    },
    {
      "latitude": 37.123718,
      "longitude": -8.626663,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 54,
      "squawk": "3276",
      "timestamp": 1661071362,
      "ems": null
    },
    {
      "latitude": 37.124527,
      "longitude": -8.625163,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 53,
      "squawk": "3276",
      "timestamp": 1661071365,
      "ems": null
    },
    {
      "latitude": 37.125595,
      "longitude": -8.623372,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 54,
      "squawk": "3276",
      "timestamp": 1661071368,
      "ems": null
    },
    {
      "latitude": 37.126511,
      "longitude": -8.621813,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 53,
      "squawk": "3276",
      "timestamp": 1661071371,
      "ems": null
    },
    {
      "latitude": 37.127457,
      "longitude": -8.620267,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 52,
      "squawk": "3276",
      "timestamp": 1661071374,
      "ems": null
    },
    {
      "latitude": 37.128387,
      "longitude": -8.618716,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 54,
      "squawk": "3276",
      "timestamp": 1661071377,
      "ems": null
    },
    {
      "latitude": 37.129272,
      "longitude": -8.617163,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 54,
      "squawk": "3276",
      "timestamp": 1661071380,
      "ems": null
    },
    {
      "latitude": 37.130951,
      "longitude": -8.614158,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 56,
      "squawk": "3276",
      "timestamp": 1661071386,
      "ems": null
    },
    {
      "latitude": 37.132439,
      "longitude": -8.611132,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 59,
      "squawk": "3276",
      "timestamp": 1661071392,
      "ems": null
    },
    {
      "latitude": 37.133183,
      "longitude": -8.60952,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 60,
      "squawk": "3276",
      "timestamp": 1661071395,
      "ems": null
    },
    {
      "latitude": 37.133881,
      "longitude": -8.607964,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 61,
      "squawk": "3276",
      "timestamp": 1661071398,
      "ems": null
    },
    {
      "latitude": 37.13443,
      "longitude": -8.606736,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 62,
      "squawk": "3276",
      "timestamp": 1661071401,
      "ems": null
    },
    {
      "latitude": 37.135071,
      "longitude": -8.605159,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 63,
      "squawk": "3276",
      "timestamp": 1661071404,
      "ems": null
    },
    {
      "latitude": 37.135651,
      "longitude": -8.603608,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 65,
      "squawk": "3276",
      "timestamp": 1661071407,
      "ems": null
    },
    {
      "latitude": 37.13607,
      "longitude": -8.602116,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 71,
      "squawk": "3276",
      "timestamp": 1661071410,
      "ems": null
    },
    {
      "latitude": 37.136395,
      "longitude": -8.600623,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "3276",
      "timestamp": 1661071413,
      "ems": null
    },
    {
      "latitude": 37.136536,
      "longitude": -8.599131,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "squawk": "3276",
      "timestamp": 1661071416,
      "ems": null
    },
    {
      "latitude": 37.136536,
      "longitude": -8.597518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "3276",
      "timestamp": 1661071419,
      "ems": null
    },
    {
      "latitude": 37.136398,
      "longitude": -8.596101,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "3276",
      "timestamp": 1661071422,
      "ems": null
    },
    {
      "latitude": 37.136257,
      "longitude": -8.594712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 99,
      "squawk": "3276",
      "timestamp": 1661071425,
      "ems": null
    },
    {
      "latitude": 37.135986,
      "longitude": -8.593121,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "3276",
      "timestamp": 1661071428,
      "ems": null
    },
    {
      "latitude": 37.135696,
      "longitude": -8.591786,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071431,
      "ems": null
    },
    {
      "latitude": 37.1353,
      "longitude": -8.59049,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661071434,
      "ems": null
    },
    {
      "latitude": 37.134907,
      "longitude": -8.589099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661071437,
      "ems": null
    },
    {
      "latitude": 37.134533,
      "longitude": -8.587726,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661071440,
      "ems": null
    },
    {
      "latitude": 37.134113,
      "longitude": -8.586532,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "3276",
      "timestamp": 1661071443,
      "ems": null
    },
    {
      "latitude": 37.133698,
      "longitude": -8.585218,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 112,
      "squawk": "3276",
      "timestamp": 1661071446,
      "ems": null
    },
    {
      "latitude": 37.133194,
      "longitude": -8.583829,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661071449,
      "ems": null
    },
    {
      "latitude": 37.132736,
      "longitude": -8.582484,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661071452,
      "ems": null
    },
    {
      "latitude": 37.132393,
      "longitude": -8.581457,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661071454,
      "ems": null
    },
    {
      "latitude": 37.132065,
      "longitude": -8.580502,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "3276",
      "timestamp": 1661071457,
      "ems": null
    },
    {
      "latitude": 37.131741,
      "longitude": -8.579665,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661071460,
      "ems": null
    },
    {
      "latitude": 37.131042,
      "longitude": -8.577751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661071464,
      "ems": null
    },
    {
      "latitude": 37.130669,
      "longitude": -8.576799,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661071466,
      "ems": null
    },
    {
      "latitude": 37.129852,
      "longitude": -8.574537,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 114,
      "squawk": "3276",
      "timestamp": 1661071472,
      "ems": null
    },
    {
      "latitude": 37.129181,
      "longitude": -8.572441,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 110,
      "squawk": "3276",
      "timestamp": 1661071478,
      "ems": null
    },
    {
      "latitude": 37.128902,
      "longitude": -8.571306,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071482,
      "ems": null
    },
    {
      "latitude": 37.128716,
      "longitude": -8.570411,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 102,
      "squawk": "3276",
      "timestamp": 1661071484,
      "ems": null
    },
    {
      "latitude": 37.128616,
      "longitude": -8.569979,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 101,
      "squawk": "3276",
      "timestamp": 1661071485,
      "ems": null
    },
    {
      "latitude": 37.128433,
      "longitude": -8.56805,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 89,
      "squawk": "3276",
      "timestamp": 1661071490,
      "ems": null
    },
    {
      "latitude": 37.128708,
      "longitude": -8.566881,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 68,
      "squawk": "3276",
      "timestamp": 1661071493,
      "ems": null
    },
    {
      "latitude": 37.129303,
      "longitude": -8.565947,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 44,
      "squawk": "3276",
      "timestamp": 1661071496,
      "ems": null
    },
    {
      "latitude": 37.130081,
      "longitude": -8.565187,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "3276",
      "timestamp": 1661071499,
      "ems": null
    },
    {
      "latitude": 37.130951,
      "longitude": -8.564679,
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
      "heading": 20,
      "squawk": "3276",
      "timestamp": 1661071502,
      "ems": null
    },
    {
      "latitude": 37.132019,
      "longitude": -8.564321,
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
      "heading": 14,
      "squawk": "3276",
      "timestamp": 1661071505,
      "ems": null
    },
    {
      "latitude": 37.132919,
      "longitude": -8.564018,
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
      "heading": 13,
      "squawk": "3276",
      "timestamp": 1661071508,
      "ems": null
    },
    {
      "latitude": 37.133789,
      "longitude": -8.563783,
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
      "heading": 12,
      "squawk": "3276",
      "timestamp": 1661071511,
      "ems": null
    },
    {
      "latitude": 37.13472,
      "longitude": -8.563484,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "3276",
      "timestamp": 1661071514,
      "ems": null
    },
    {
      "latitude": 37.135712,
      "longitude": -8.5632,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "3276",
      "timestamp": 1661071517,
      "ems": null
    },
    {
      "latitude": 37.13681,
      "longitude": -8.562908,
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
      "heading": 12,
      "squawk": "3276",
      "timestamp": 1661071520,
      "ems": null
    },
    {
      "latitude": 37.137726,
      "longitude": -8.562674,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661071523,
      "ems": null
    },
    {
      "latitude": 37.138687,
      "longitude": -8.56244,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661071526,
      "ems": null
    },
    {
      "latitude": 37.139515,
      "longitude": -8.56229,
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
      "heading": 10,
      "squawk": "3276",
      "timestamp": 1661071529,
      "ems": null
    },
    {
      "latitude": 37.140518,
      "longitude": -8.56209,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 3,
      "squawk": "3276",
      "timestamp": 1661071532,
      "ems": null
    },
    {
      "latitude": 37.141571,
      "longitude": -8.562206,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 351,
      "squawk": "3276",
      "timestamp": 1661071535,
      "ems": null
    },
    {
      "latitude": 37.142487,
      "longitude": -8.562499,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 340,
      "squawk": "3276",
      "timestamp": 1661071538,
      "ems": null
    },
    {
      "latitude": 37.143379,
      "longitude": -8.563186,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 320,
      "squawk": "3276",
      "timestamp": 1661071542,
      "ems": null
    },
    {
      "latitude": 37.143906,
      "longitude": -8.56396,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 308,
      "squawk": "3276",
      "timestamp": 1661071544,
      "ems": null
    },
    {
      "latitude": 37.144501,
      "longitude": -8.565187,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 296,
      "squawk": "3276",
      "timestamp": 1661071548,
      "ems": null
    },
    {
      "latitude": 37.144913,
      "longitude": -8.566298,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 291,
      "squawk": "3276",
      "timestamp": 1661071550,
      "ems": null
    },
    {
      "latitude": 37.145241,
      "longitude": -8.567485,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 288,
      "squawk": "3276",
      "timestamp": 1661071553,
      "ems": null
    },
    {
      "latitude": 37.145519,
      "longitude": -8.56856,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 288,
      "squawk": "3276",
      "timestamp": 1661071557,
      "ems": null
    },
    {
      "latitude": 37.145798,
      "longitude": -8.569695,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "3276",
      "timestamp": 1661071559,
      "ems": null
    },
    {
      "latitude": 37.146126,
      "longitude": -8.570889,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071562,
      "ems": null
    },
    {
      "latitude": 37.146378,
      "longitude": -8.572141,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 285,
      "squawk": "3276",
      "timestamp": 1661071565,
      "ems": null
    },
    {
      "latitude": 37.146683,
      "longitude": -8.573217,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071568,
      "ems": null
    },
    {
      "latitude": 37.147018,
      "longitude": -8.574478,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 288,
      "squawk": "3276",
      "timestamp": 1661071572,
      "ems": null
    },
    {
      "latitude": 37.147247,
      "longitude": -8.57553,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071574,
      "ems": null
    },
    {
      "latitude": 37.147522,
      "longitude": -8.57662,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 286,
      "squawk": "3276",
      "timestamp": 1661071577,
      "ems": null
    },
    {
      "latitude": 37.148174,
      "longitude": -8.579128,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 286,
      "squawk": "3276",
      "timestamp": 1661071584,
      "ems": null
    },
    {
      "latitude": 37.148666,
      "longitude": -8.581199,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071590,
      "ems": null
    },
    {
      "latitude": 37.149105,
      "longitude": -8.58295,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071596,
      "ems": null
    },
    {
      "latitude": 37.14949,
      "longitude": -8.584472,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 287,
      "squawk": "3276",
      "timestamp": 1661071602,
      "ems": null
    },
    {
      "latitude": 37.149719,
      "longitude": -8.585464,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 292,
      "squawk": "3276",
      "timestamp": 1661071608,
      "ems": null
    },
    {
      "latitude": 37.149857,
      "longitude": -8.585757,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 299,
      "squawk": "3276",
      "timestamp": 1661071611,
      "ems": null
    },
    {
      "latitude": 37.149944,
      "longitude": -8.586054,
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
      "heading": 279,
      "squawk": "3276",
      "timestamp": 1661071617,
      "ems": null
    },
    {
      "latitude": 37.149757,
      "longitude": -8.585815,
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
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661071632,
      "ems": null
    },
    {
      "latitude": 37.149662,
      "longitude": -8.585457,
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
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661071638,
      "ems": null
    },
    {
      "latitude": 37.149628,
      "longitude": -8.585231,
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
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071641,
      "ems": null
    },
    {
      "latitude": 37.149582,
      "longitude": -8.584997,
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
      "heading": 104,
      "squawk": "3276",
      "timestamp": 1661071644,
      "ems": null
    },
    {
      "latitude": 37.14949,
      "longitude": -8.584705,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071647,
      "ems": null
    },
    {
      "latitude": 37.149429,
      "longitude": -8.584442,
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
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661071650,
      "ems": null
    },
    {
      "latitude": 37.149261,
      "longitude": -8.583829,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 35.2,
        "kts": 19,
        "mph": 21.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071656,
      "ems": null
    },
    {
      "latitude": 37.149105,
      "longitude": -8.583129,
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
      "heading": 105,
      "squawk": "3276",
      "timestamp": 1661071662,
      "ems": null
    },
    {
      "latitude": 37.148849,
      "longitude": -8.582251,
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
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661071671,
      "ems": null
    },
    {
      "latitude": 37.148712,
      "longitude": -8.581666,
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
      "heading": 109,
      "squawk": "3276",
      "timestamp": 1661071677,
      "ems": null
    },
    {
      "latitude": 37.148594,
      "longitude": -8.581038,
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
      "heading": 106,
      "squawk": "3276",
      "timestamp": 1661071683,
      "ems": null
    },
    {
      "latitude": 37.148453,
      "longitude": -8.580561,
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
      "heading": 107,
      "squawk": "3276",
      "timestamp": 1661071689,
      "ems": null
    },
    {
      "latitude": 37.148361,
      "longitude": -8.580262,
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
      "heading": 123,
      "squawk": "3276",
      "timestamp": 1661071695,
      "ems": null
    },
    {
      "latitude": 37.148117,
      "longitude": -8.580322,
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
      "heading": 206,
      "squawk": "3276",
      "timestamp": 1661071704,
      "ems": null
    },
    {
      "latitude": 37.147797,
      "longitude": -8.58044,
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
      "heading": 209,
      "squawk": "3276",
      "timestamp": 1661071713,
      "ems": null
    },
    {
      "latitude": 37.147663,
      "longitude": -8.58074,
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
      "heading": 278,
      "squawk": "3276",
      "timestamp": 1661071723,
      "ems": null
    },
    {
      "latitude": 37.147751,
      "longitude": -8.581023,
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
      "heading": 293,
      "squawk": "3276",
      "timestamp": 1661071728,
      "ems": null
    },
    {
      "latitude": 37.147888,
      "longitude": -8.581316,
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
      "heading": 300,
      "squawk": "3276",
      "timestamp": 1661071737,
      "ems": null
    },
    {
      "latitude": 37.147934,
      "longitude": -8.581608,
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
      "heading": 278,
      "squawk": "3276",
      "timestamp": 1661071746,
      "ems": null
    },
    {
      "latitude": 37.14798,
      "longitude": -8.5819,
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
      "heading": 284,
      "squawk": "3276",
      "timestamp": 1661071752,
      "ems": null
    },
    {
      "latitude": 37.14806,
      "longitude": -8.582105,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 1.9,
        "kts": 1,
        "mph": 1.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661071773,
      "ems": null
    },
    {
      "latitude": 37.148071,
      "longitude": -8.582309,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 1.9,
        "kts": 1,
        "mph": 1.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "3276",
      "timestamp": 1661071794,
      "ems": null
    }
  ],
};
