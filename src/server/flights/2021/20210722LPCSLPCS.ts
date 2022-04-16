import { Flight } from "../../../types/Flight";

export const flight: Flight = {
    identification: {
        id: "20210722LPCSLPCS",
        callsign: "SEVAIR171",
        name: "Habituation to Cascais",
        description: "",
    },
    pilotLog: {
        departure: new Date(2021, 6, 22, 13, 10).getTime(),
        arrival: new Date(2021, 6, 22, 14, 20).getTime(),
        singleEnginePistonTime: 70,
        picTime: 0,
        dualTime: 70,
        landings: {
            day: 6,
            night: 0,
        },
    },
    aircraft: {
        model: {
            code: "P208",
            text: "Tecnam P-2008JC",
          },
        identification: {
            modes: "491464",
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
            "latitude": 38.719696,
            "longitude": -9.353241,
            "altitude": {
                "feet": 0,
                "meters": 0
            },
            "speed": {
                "kmh": 64.8,
                "kts": 35,
                "mph": 40.3
            },
            "verticalSpeed": {
                "fpm": 0,
                "ms": 0
            },
            "heading": 343,
            "squawk": "0",
            "timestamp": 1626959916,
            "ems": null
        },
        {
            "latitude": 38.721546,
            "longitude": -9.354004,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 341,
            "squawk": "0",
            "timestamp": 1626959925,
            "ems": null
        },
        {
            "latitude": 38.72319,
            "longitude": -9.35462,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 107.4,
                "kts": 58,
                "mph": 66.7
            },
            "verticalSpeed": {
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 344,
            "squawk": "0",
            "timestamp": 1626959931,
            "ems": null
        },
        {
            "latitude": 38.724792,
            "longitude": -9.355157,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 343,
            "squawk": "0",
            "timestamp": 1626959937,
            "ems": null
        },
        {
            "latitude": 38.726341,
            "longitude": -9.355774,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 342,
            "squawk": "0",
            "timestamp": 1626959943,
            "ems": null
        },
        {
            "latitude": 38.727951,
            "longitude": -9.356351,
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
                "fpm": 832,
                "ms": 4.2
            },
            "heading": 342,
            "squawk": "0",
            "timestamp": 1626959949,
            "ems": null
        },
        {
            "latitude": 38.729462,
            "longitude": -9.356889,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626959955,
            "ems": null
        },
        {
            "latitude": 38.731789,
            "longitude": -9.357727,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626959964,
            "ems": null
        },
        {
            "latitude": 38.733856,
            "longitude": -9.358441,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626959972,
            "ems": null
        },
        {
            "latitude": 38.735825,
            "longitude": -9.359337,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 340,
            "squawk": "1332",
            "timestamp": 1626959979,
            "ems": null
        },
        {
            "latitude": 38.736649,
            "longitude": -9.359694,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 340,
            "squawk": "1332",
            "timestamp": 1626959982,
            "ems": null
        },
        {
            "latitude": 38.736969,
            "longitude": -9.359874,
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
            "heading": 340,
            "squawk": "1332",
            "timestamp": 1626959983,
            "ems": null
        },
        {
            "latitude": 38.73933,
            "longitude": -9.360535,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626959990,
            "ems": null
        },
        {
            "latitude": 38.740173,
            "longitude": -9.36065,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 355,
            "squawk": "1332",
            "timestamp": 1626959993,
            "ems": null
        },
        {
            "latitude": 38.740585,
            "longitude": -9.360718,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626959994,
            "ems": null
        },
        {
            "latitude": 38.741135,
            "longitude": -9.360769,
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
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626959996,
            "ems": null
        },
        {
            "latitude": 38.742077,
            "longitude": -9.360901,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626959999,
            "ems": null
        },
        {
            "latitude": 38.742588,
            "longitude": -9.360962,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626960000,
            "ems": null
        },
        {
            "latitude": 38.743378,
            "longitude": -9.361084,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626960002,
            "ems": null
        },
        {
            "latitude": 38.743927,
            "longitude": -9.361188,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626960004,
            "ems": null
        },
        {
            "latitude": 38.74498,
            "longitude": -9.361366,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626960007,
            "ems": null
        },
        {
            "latitude": 38.745438,
            "longitude": -9.361426,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626960008,
            "ems": null
        },
        {
            "latitude": 38.746265,
            "longitude": -9.361511,
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
                "fpm": 768,
                "ms": 3.9
            },
            "heading": 356,
            "squawk": "1332",
            "timestamp": 1626960011,
            "ems": null
        },
        {
            "latitude": 38.746582,
            "longitude": -9.361486,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626960012,
            "ems": null
        },
        {
            "latitude": 38.746918,
            "longitude": -9.361511,
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
                "fpm": 832,
                "ms": 4.2
            },
            "heading": 357,
            "squawk": "1332",
            "timestamp": 1626960013,
            "ems": null
        },
        {
            "latitude": 38.747223,
            "longitude": -9.361486,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 4,
            "squawk": "1332",
            "timestamp": 1626960014,
            "ems": null
        },
        {
            "latitude": 38.748184,
            "longitude": -9.361247,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 10,
            "squawk": "1332",
            "timestamp": 1626960017,
            "ems": null
        },
        {
            "latitude": 38.748501,
            "longitude": -9.361206,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 13,
            "squawk": "1332",
            "timestamp": 1626960018,
            "ems": null
        },
        {
            "latitude": 38.749012,
            "longitude": -9.360962,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 16,
            "squawk": "1332",
            "timestamp": 1626960019,
            "ems": null
        },
        {
            "latitude": 38.749466,
            "longitude": -9.360769,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 9,
            "squawk": "1332",
            "timestamp": 1626960021,
            "ems": null
        },
        {
            "latitude": 38.749802,
            "longitude": -9.360535,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 24,
            "squawk": "1332",
            "timestamp": 1626960022,
            "ems": null
        },
        {
            "latitude": 38.75013,
            "longitude": -9.360352,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 27,
            "squawk": "1332",
            "timestamp": 1626960023,
            "ems": null
        },
        {
            "latitude": 38.750969,
            "longitude": -9.359558,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 37,
            "squawk": "1332",
            "timestamp": 1626960026,
            "ems": null
        },
        {
            "latitude": 38.751801,
            "longitude": -9.35862,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 47,
            "squawk": "1332",
            "timestamp": 1626960029,
            "ems": null
        },
        {
            "latitude": 38.751991,
            "longitude": -9.358276,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 33,
            "squawk": "1332",
            "timestamp": 1626960030,
            "ems": null
        },
        {
            "latitude": 38.752213,
            "longitude": -9.357843,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 49,
            "squawk": "1332",
            "timestamp": 1626960031,
            "ems": null
        },
        {
            "latitude": 38.752598,
            "longitude": -9.357117,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 58,
            "squawk": "1332",
            "timestamp": 1626960033,
            "ems": null
        },
        {
            "latitude": 38.752781,
            "longitude": -9.356689,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 60,
            "squawk": "1332",
            "timestamp": 1626960034,
            "ems": null
        },
        {
            "latitude": 38.753063,
            "longitude": -9.356018,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 63,
            "squawk": "1332",
            "timestamp": 1626960035,
            "ems": null
        },
        {
            "latitude": 38.753448,
            "longitude": -9.354739,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960038,
            "ems": null
        },
        {
            "latitude": 38.753529,
            "longitude": -9.354492,
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
                "fpm": 768,
                "ms": 3.9
            },
            "heading": 70,
            "squawk": "1332",
            "timestamp": 1626960039,
            "ems": null
        },
        {
            "latitude": 38.753952,
            "longitude": -9.35247,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 75,
            "squawk": "1332",
            "timestamp": 1626960043,
            "ems": null
        },
        {
            "latitude": 38.75404,
            "longitude": -9.35199,
            "altitude": {
                "feet": 1000,
                "meters": 305
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
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960044,
            "ems": null
        },
        {
            "latitude": 38.754089,
            "longitude": -9.351694,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960045,
            "ems": null
        },
        {
            "latitude": 38.754318,
            "longitude": -9.35044,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960047,
            "ems": null
        },
        {
            "latitude": 38.754364,
            "longitude": -9.35022,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960048,
            "ems": null
        },
        {
            "latitude": 38.754459,
            "longitude": -9.349731,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960049,
            "ems": null
        },
        {
            "latitude": 38.754597,
            "longitude": -9.348755,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 78,
            "squawk": "1332",
            "timestamp": 1626960051,
            "ems": null
        },
        {
            "latitude": 38.754784,
            "longitude": -9.347473,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960054,
            "ems": null
        },
        {
            "latitude": 38.754879,
            "longitude": -9.34668,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960055,
            "ems": null
        },
        {
            "latitude": 38.754959,
            "longitude": -9.345902,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 82,
            "squawk": "1332",
            "timestamp": 1626960057,
            "ems": null
        },
        {
            "latitude": 38.755005,
            "longitude": -9.345185,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 82,
            "squawk": "1332",
            "timestamp": 1626960058,
            "ems": null
        },
        {
            "latitude": 38.755112,
            "longitude": -9.344238,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 83,
            "squawk": "1332",
            "timestamp": 1626960060,
            "ems": null
        },
        {
            "latitude": 38.755142,
            "longitude": -9.343693,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626960061,
            "ems": null
        },
        {
            "latitude": 38.755188,
            "longitude": -9.342977,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626960062,
            "ems": null
        },
        {
            "latitude": 38.75528,
            "longitude": -9.341424,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626960065,
            "ems": null
        },
        {
            "latitude": 38.755344,
            "longitude": -9.340454,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626960067,
            "ems": null
        },
        {
            "latitude": 38.75539,
            "longitude": -9.339722,
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
                "fpm": 768,
                "ms": 3.9
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626960069,
            "ems": null
        },
        {
            "latitude": 38.755527,
            "longitude": -9.338257,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 83,
            "squawk": "1332",
            "timestamp": 1626960072,
            "ems": null
        },
        {
            "latitude": 38.755646,
            "longitude": -9.336946,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 82,
            "squawk": "1332",
            "timestamp": 1626960074,
            "ems": null
        },
        {
            "latitude": 38.755764,
            "longitude": -9.335876,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960076,
            "ems": null
        },
        {
            "latitude": 38.75581,
            "longitude": -9.33551,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960077,
            "ems": null
        },
        {
            "latitude": 38.756229,
            "longitude": -9.332642,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 78,
            "squawk": "1332",
            "timestamp": 1626960083,
            "ems": null
        },
        {
            "latitude": 38.756413,
            "longitude": -9.331665,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 78,
            "squawk": "1332",
            "timestamp": 1626960085,
            "ems": null
        },
        {
            "latitude": 38.756516,
            "longitude": -9.330855,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960087,
            "ems": null
        },
        {
            "latitude": 38.756836,
            "longitude": -9.329124,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960090,
            "ems": null
        },
        {
            "latitude": 38.756973,
            "longitude": -9.328348,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626960091,
            "ems": null
        },
        {
            "latitude": 38.757111,
            "longitude": -9.327515,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960093,
            "ems": null
        },
        {
            "latitude": 38.757248,
            "longitude": -9.326735,
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
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960094,
            "ems": null
        },
        {
            "latitude": 38.757523,
            "longitude": -9.325005,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960097,
            "ems": null
        },
        {
            "latitude": 38.75766,
            "longitude": -9.324228,
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
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960099,
            "ems": null
        },
        {
            "latitude": 38.75798,
            "longitude": -9.322736,
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
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960102,
            "ems": null
        },
        {
            "latitude": 38.758118,
            "longitude": -9.322198,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960103,
            "ems": null
        },
        {
            "latitude": 38.758484,
            "longitude": -9.320645,
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
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960106,
            "ems": null
        },
        {
            "latitude": 38.758602,
            "longitude": -9.32019,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960107,
            "ems": null
        },
        {
            "latitude": 38.75885,
            "longitude": -9.319153,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960108,
            "ems": null
        },
        {
            "latitude": 38.759125,
            "longitude": -9.318018,
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
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960111,
            "ems": null
        },
        {
            "latitude": 38.759262,
            "longitude": -9.317481,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960112,
            "ems": null
        },
        {
            "latitude": 38.759533,
            "longitude": -9.316345,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960114,
            "ems": null
        },
        {
            "latitude": 38.760231,
            "longitude": -9.313232,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960120,
            "ems": null
        },
        {
            "latitude": 38.760696,
            "longitude": -9.311401,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960123,
            "ems": null
        },
        {
            "latitude": 38.760956,
            "longitude": -9.309421,
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
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626960127,
            "ems": null
        },
        {
            "latitude": 38.760929,
            "longitude": -9.308167,
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
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626960129,
            "ems": null
        },
        {
            "latitude": 38.76059,
            "longitude": -9.306495,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 107,
            "squawk": "1332",
            "timestamp": 1626960132,
            "ems": null
        },
        {
            "latitude": 38.760315,
            "longitude": -9.305599,
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
            "heading": 113,
            "squawk": "1332",
            "timestamp": 1626960133,
            "ems": null
        },
        {
            "latitude": 38.759399,
            "longitude": -9.303927,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 127,
            "squawk": "1332",
            "timestamp": 1626960137,
            "ems": null
        },
        {
            "latitude": 38.758556,
            "longitude": -9.302917,
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
            "heading": 139,
            "squawk": "1332",
            "timestamp": 1626960139,
            "ems": null
        },
        {
            "latitude": 38.757843,
            "longitude": -9.302256,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 147,
            "squawk": "1332",
            "timestamp": 1626960141,
            "ems": null
        },
        {
            "latitude": 38.757248,
            "longitude": -9.301897,
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
            "squawk": "1332",
            "timestamp": 1626960142,
            "ems": null
        },
        {
            "latitude": 38.756607,
            "longitude": -9.301599,
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
            "heading": 161,
            "squawk": "1332",
            "timestamp": 1626960144,
            "ems": null
        },
        {
            "latitude": 38.755783,
            "longitude": -9.301419,
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
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626960146,
            "ems": null
        },
        {
            "latitude": 38.755112,
            "longitude": -9.301331,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626960147,
            "ems": null
        },
        {
            "latitude": 38.754646,
            "longitude": -9.301331,
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960148,
            "ems": null
        },
        {
            "latitude": 38.753586,
            "longitude": -9.3013,
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
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626960150,
            "ems": null
        },
        {
            "latitude": 38.753128,
            "longitude": -9.3013,
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
            "heading": 179,
            "squawk": "1332",
            "timestamp": 1626960151,
            "ems": null
        },
        {
            "latitude": 38.751846,
            "longitude": -9.3013,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960154,
            "ems": null
        },
        {
            "latitude": 38.750885,
            "longitude": -9.3013,
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960156,
            "ems": null
        },
        {
            "latitude": 38.750427,
            "longitude": -9.3013,
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960157,
            "ems": null
        },
        {
            "latitude": 38.749153,
            "longitude": -9.301331,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960160,
            "ems": null
        },
        {
            "latitude": 38.74823,
            "longitude": -9.30136,
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626960162,
            "ems": null
        },
        {
            "latitude": 38.746872,
            "longitude": -9.301392,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626960166,
            "ems": null
        },
        {
            "latitude": 38.745892,
            "longitude": -9.301453,
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
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626960168,
            "ems": null
        },
        {
            "latitude": 38.745117,
            "longitude": -9.301479,
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626960169,
            "ems": null
        },
        {
            "latitude": 38.744263,
            "longitude": -9.301453,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960171,
            "ems": null
        },
        {
            "latitude": 38.743698,
            "longitude": -9.301479,
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626960173,
            "ems": null
        },
        {
            "latitude": 38.743195,
            "longitude": -9.301453,
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
            "heading": 179,
            "squawk": "1332",
            "timestamp": 1626960174,
            "ems": null
        },
        {
            "latitude": 38.740726,
            "longitude": -9.301392,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626960179,
            "ems": null
        },
        {
            "latitude": 38.738213,
            "longitude": -9.301208,
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960185,
            "ems": null
        },
        {
            "latitude": 38.735466,
            "longitude": -9.301147,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960191,
            "ems": null
        },
        {
            "latitude": 38.732719,
            "longitude": -9.301025,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960198,
            "ems": null
        },
        {
            "latitude": 38.729691,
            "longitude": -9.300882,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960205,
            "ems": null
        },
        {
            "latitude": 38.727127,
            "longitude": -9.300703,
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626960210,
            "ems": null
        },
        {
            "latitude": 38.724571,
            "longitude": -9.300537,
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626960216,
            "ems": null
        },
        {
            "latitude": 38.721825,
            "longitude": -9.300354,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626960222,
            "ems": null
        },
        {
            "latitude": 38.719219,
            "longitude": -9.300293,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 179,
            "squawk": "1332",
            "timestamp": 1626960229,
            "ems": null
        },
        {
            "latitude": 38.716507,
            "longitude": -9.300225,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626960235,
            "ems": null
        },
        {
            "latitude": 38.713726,
            "longitude": -9.299988,
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
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626960241,
            "ems": null
        },
        {
            "latitude": 38.711117,
            "longitude": -9.299683,
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626960246,
            "ems": null
        },
        {
            "latitude": 38.70977,
            "longitude": -9.299438,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626960250,
            "ems": null
        },
        {
            "latitude": 38.709274,
            "longitude": -9.29939,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626960251,
            "ems": null
        },
        {
            "latitude": 38.708405,
            "longitude": -9.299211,
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626960253,
            "ems": null
        },
        {
            "latitude": 38.705486,
            "longitude": -9.298157,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 155,
            "squawk": "1332",
            "timestamp": 1626960260,
            "ems": null
        },
        {
            "latitude": 38.704742,
            "longitude": -9.297539,
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
            "heading": 147,
            "squawk": "1332",
            "timestamp": 1626960262,
            "ems": null
        },
        {
            "latitude": 38.703735,
            "longitude": -9.296344,
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
            "heading": 132,
            "squawk": "1332",
            "timestamp": 1626960265,
            "ems": null
        },
        {
            "latitude": 38.703506,
            "longitude": -9.295986,
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
            "heading": 128,
            "squawk": "1332",
            "timestamp": 1626960266,
            "ems": null
        },
        {
            "latitude": 38.70311,
            "longitude": -9.295166,
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
            "heading": 120,
            "squawk": "1332",
            "timestamp": 1626960268,
            "ems": null
        },
        {
            "latitude": 38.702927,
            "longitude": -9.294739,
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
            "heading": 116,
            "squawk": "1332",
            "timestamp": 1626960269,
            "ems": null
        },
        {
            "latitude": 38.702553,
            "longitude": -9.293152,
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
            "heading": 102,
            "squawk": "1332",
            "timestamp": 1626960272,
            "ems": null
        },
        {
            "latitude": 38.702461,
            "longitude": -9.29187,
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
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626960275,
            "ems": null
        },
        {
            "latitude": 38.702507,
            "longitude": -9.291016,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626960276,
            "ems": null
        },
        {
            "latitude": 38.702553,
            "longitude": -9.29071,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626960277,
            "ems": null
        },
        {
            "latitude": 38.702599,
            "longitude": -9.290222,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626960278,
            "ems": null
        },
        {
            "latitude": 38.702785,
            "longitude": -9.289368,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626960280,
            "ems": null
        },
        {
            "latitude": 38.703323,
            "longitude": -9.287926,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960283,
            "ems": null
        },
        {
            "latitude": 38.705063,
            "longitude": -9.285238,
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
            "heading": 49,
            "squawk": "1332",
            "timestamp": 1626960290,
            "ems": null
        },
        {
            "latitude": 38.705475,
            "longitude": -9.284403,
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
            "heading": 55,
            "squawk": "1332",
            "timestamp": 1626960292,
            "ems": null
        },
        {
            "latitude": 38.706043,
            "longitude": -9.28241,
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
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960296,
            "ems": null
        },
        {
            "latitude": 38.706089,
            "longitude": -9.281372,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626960298,
            "ems": null
        },
        {
            "latitude": 38.706024,
            "longitude": -9.280521,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 96,
            "squawk": "1332",
            "timestamp": 1626960300,
            "ems": null
        },
        {
            "latitude": 38.705441,
            "longitude": -9.278503,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 116,
            "squawk": "1332",
            "timestamp": 1626960304,
            "ems": null
        },
        {
            "latitude": 38.705067,
            "longitude": -9.277649,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 123,
            "squawk": "1332",
            "timestamp": 1626960305,
            "ems": null
        },
        {
            "latitude": 38.704601,
            "longitude": -9.276978,
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
            "heading": 129,
            "squawk": "1332",
            "timestamp": 1626960307,
            "ems": null
        },
        {
            "latitude": 38.703762,
            "longitude": -9.276062,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 141,
            "squawk": "1332",
            "timestamp": 1626960310,
            "ems": null
        },
        {
            "latitude": 38.703003,
            "longitude": -9.275446,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 150,
            "squawk": "1332",
            "timestamp": 1626960312,
            "ems": null
        },
        {
            "latitude": 38.702553,
            "longitude": -9.275208,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 155,
            "squawk": "1332",
            "timestamp": 1626960313,
            "ems": null
        },
        {
            "latitude": 38.702179,
            "longitude": -9.275028,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 160,
            "squawk": "1332",
            "timestamp": 1626960314,
            "ems": null
        },
        {
            "latitude": 38.701355,
            "longitude": -9.27479,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626960316,
            "ems": null
        },
        {
            "latitude": 38.700878,
            "longitude": -9.274658,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626960317,
            "ems": null
        },
        {
            "latitude": 38.700485,
            "longitude": -9.274611,
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626960318,
            "ems": null
        },
        {
            "latitude": 38.700027,
            "longitude": -9.274611,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626960319,
            "ems": null
        },
        {
            "latitude": 38.699249,
            "longitude": -9.274611,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626960321,
            "ems": null
        },
        {
            "latitude": 38.698608,
            "longitude": -9.27473,
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
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626960322,
            "ems": null
        },
        {
            "latitude": 38.697571,
            "longitude": -9.274963,
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
            "heading": 190,
            "squawk": "1332",
            "timestamp": 1626960325,
            "ems": null
        },
        {
            "latitude": 38.696781,
            "longitude": -9.275208,
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
            "heading": 195,
            "squawk": "1332",
            "timestamp": 1626960327,
            "ems": null
        },
        {
            "latitude": 38.695618,
            "longitude": -9.275757,
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
            "heading": 201,
            "squawk": "1332",
            "timestamp": 1626960330,
            "ems": null
        },
        {
            "latitude": 38.695175,
            "longitude": -9.275984,
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
            "heading": 202,
            "squawk": "1332",
            "timestamp": 1626960331,
            "ems": null
        },
        {
            "latitude": 38.694454,
            "longitude": -9.276367,
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
            "heading": 204,
            "squawk": "1332",
            "timestamp": 1626960333,
            "ems": null
        },
        {
            "latitude": 38.692291,
            "longitude": -9.277775,
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
            "heading": 206,
            "squawk": "1332",
            "timestamp": 1626960339,
            "ems": null
        },
        {
            "latitude": 38.691799,
            "longitude": -9.278076,
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
            "heading": 205,
            "squawk": "1332",
            "timestamp": 1626960340,
            "ems": null
        },
        {
            "latitude": 38.691055,
            "longitude": -9.278503,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 205,
            "squawk": "1332",
            "timestamp": 1626960342,
            "ems": null
        },
        {
            "latitude": 38.690216,
            "longitude": -9.278992,
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
            "heading": 203,
            "squawk": "1332",
            "timestamp": 1626960344,
            "ems": null
        },
        {
            "latitude": 38.688354,
            "longitude": -9.280044,
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
            "heading": 202,
            "squawk": "1332",
            "timestamp": 1626960349,
            "ems": null
        },
        {
            "latitude": 38.687256,
            "longitude": -9.280641,
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
            "heading": 203,
            "squawk": "1332",
            "timestamp": 1626960352,
            "ems": null
        },
        {
            "latitude": 38.686119,
            "longitude": -9.281433,
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
            "heading": 211,
            "squawk": "1332",
            "timestamp": 1626960355,
            "ems": null
        },
        {
            "latitude": 38.685932,
            "longitude": -9.281677,
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
            "heading": 215,
            "squawk": "1332",
            "timestamp": 1626960356,
            "ems": null
        },
        {
            "latitude": 38.68449,
            "longitude": -9.283875,
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
            "heading": 238,
            "squawk": "1332",
            "timestamp": 1626960361,
            "ems": null
        },
        {
            "latitude": 38.68428,
            "longitude": -9.284403,
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
            "heading": 242,
            "squawk": "1332",
            "timestamp": 1626960362,
            "ems": null
        },
        {
            "latitude": 38.684006,
            "longitude": -9.285238,
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
            "heading": 247,
            "squawk": "1332",
            "timestamp": 1626960364,
            "ems": null
        },
        {
            "latitude": 38.683823,
            "longitude": -9.286015,
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
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960365,
            "ems": null
        },
        {
            "latitude": 38.683651,
            "longitude": -9.286926,
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
            "heading": 255,
            "squawk": "1332",
            "timestamp": 1626960367,
            "ems": null
        },
        {
            "latitude": 38.683605,
            "longitude": -9.287231,
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
            "heading": 256,
            "squawk": "1332",
            "timestamp": 1626960368,
            "ems": null
        },
        {
            "latitude": 38.683228,
            "longitude": -9.289179,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960371,
            "ems": null
        },
        {
            "latitude": 38.683136,
            "longitude": -9.289717,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960372,
            "ems": null
        },
        {
            "latitude": 38.683044,
            "longitude": -9.290195,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960373,
            "ems": null
        },
        {
            "latitude": 38.682861,
            "longitude": -9.291321,
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
            "heading": 256,
            "squawk": "1332",
            "timestamp": 1626960375,
            "ems": null
        },
        {
            "latitude": 38.682304,
            "longitude": -9.294373,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960381,
            "ems": null
        },
        {
            "latitude": 38.681946,
            "longitude": -9.296344,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 255,
            "squawk": "1332",
            "timestamp": 1626960385,
            "ems": null
        },
        {
            "latitude": 38.681671,
            "longitude": -9.297598,
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
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626960387,
            "ems": null
        },
        {
            "latitude": 38.681557,
            "longitude": -9.298157,
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
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960388,
            "ems": null
        },
        {
            "latitude": 38.681324,
            "longitude": -9.299072,
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
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960390,
            "ems": null
        },
        {
            "latitude": 38.681122,
            "longitude": -9.299927,
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
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626960392,
            "ems": null
        },
        {
            "latitude": 38.680481,
            "longitude": -9.302972,
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
            "heading": 255,
            "squawk": "1332",
            "timestamp": 1626960398,
            "ems": null
        },
        {
            "latitude": 38.679882,
            "longitude": -9.306091,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960404,
            "ems": null
        },
        {
            "latitude": 38.679428,
            "longitude": -9.309181,
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
            "heading": 260,
            "squawk": "1332",
            "timestamp": 1626960410,
            "ems": null
        },
        {
            "latitude": 38.679371,
            "longitude": -9.309631,
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
            "heading": 260,
            "squawk": "1332",
            "timestamp": 1626960411,
            "ems": null
        },
        {
            "latitude": 38.679016,
            "longitude": -9.311928,
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
            "heading": 258,
            "squawk": "1332",
            "timestamp": 1626960415,
            "ems": null
        },
        {
            "latitude": 38.678997,
            "longitude": -9.312195,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960416,
            "ems": null
        },
        {
            "latitude": 38.678787,
            "longitude": -9.313242,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960418,
            "ems": null
        },
        {
            "latitude": 38.67865,
            "longitude": -9.314077,
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
            "heading": 260,
            "squawk": "1332",
            "timestamp": 1626960420,
            "ems": null
        },
        {
            "latitude": 38.677872,
            "longitude": -9.317541,
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
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626960427,
            "ems": null
        },
        {
            "latitude": 38.677689,
            "longitude": -9.318197,
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
            "heading": 251,
            "squawk": "1332",
            "timestamp": 1626960428,
            "ems": null
        },
        {
            "latitude": 38.677414,
            "longitude": -9.319214,
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
            "heading": 250,
            "squawk": "1332",
            "timestamp": 1626960430,
            "ems": null
        },
        {
            "latitude": 38.676949,
            "longitude": -9.320862,
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
            "heading": 250,
            "squawk": "1332",
            "timestamp": 1626960434,
            "ems": null
        },
        {
            "latitude": 38.676682,
            "longitude": -9.321899,
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
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960436,
            "ems": null
        },
        {
            "latitude": 38.676544,
            "longitude": -9.322496,
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
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626960437,
            "ems": null
        },
        {
            "latitude": 38.675972,
            "longitude": -9.327209,
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
            "heading": 266,
            "squawk": "1332",
            "timestamp": 1626960446,
            "ems": null
        },
        {
            "latitude": 38.675926,
            "longitude": -9.328735,
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
            "heading": 267,
            "squawk": "1332",
            "timestamp": 1626960449,
            "ems": null
        },
        {
            "latitude": 38.675926,
            "longitude": -9.329285,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 267,
            "squawk": "1332",
            "timestamp": 1626960450,
            "ems": null
        },
        {
            "latitude": 38.675877,
            "longitude": -9.330444,
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
            "heading": 268,
            "squawk": "1332",
            "timestamp": 1626960452,
            "ems": null
        },
        {
            "latitude": 38.675858,
            "longitude": -9.330915,
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
            "heading": 269,
            "squawk": "1332",
            "timestamp": 1626960453,
            "ems": null
        },
        {
            "latitude": 38.675858,
            "longitude": -9.331632,
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
            "heading": 270,
            "squawk": "1332",
            "timestamp": 1626960455,
            "ems": null
        },
        {
            "latitude": 38.675903,
            "longitude": -9.333184,
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
            "heading": 271,
            "squawk": "1332",
            "timestamp": 1626960458,
            "ems": null
        },
        {
            "latitude": 38.675949,
            "longitude": -9.334497,
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
            "heading": 272,
            "squawk": "1332",
            "timestamp": 1626960460,
            "ems": null
        },
        {
            "latitude": 38.675949,
            "longitude": -9.334737,
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
            "heading": 272,
            "squawk": "1332",
            "timestamp": 1626960461,
            "ems": null
        },
        {
            "latitude": 38.676018,
            "longitude": -9.336182,
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
            "heading": 273,
            "squawk": "1332",
            "timestamp": 1626960463,
            "ems": null
        },
        {
            "latitude": 38.676041,
            "longitude": -9.336647,
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
            "heading": 273,
            "squawk": "1332",
            "timestamp": 1626960464,
            "ems": null
        },
        {
            "latitude": 38.676086,
            "longitude": -9.337423,
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
            "heading": 273,
            "squawk": "1332",
            "timestamp": 1626960466,
            "ems": null
        },
        {
            "latitude": 38.676086,
            "longitude": -9.337901,
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
            "heading": 273,
            "squawk": "1332",
            "timestamp": 1626960467,
            "ems": null
        },
        {
            "latitude": 38.676205,
            "longitude": -9.338989,
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
            "heading": 276,
            "squawk": "1332",
            "timestamp": 1626960469,
            "ems": null
        },
        {
            "latitude": 38.676205,
            "longitude": -9.339294,
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
            "heading": 277,
            "squawk": "1332",
            "timestamp": 1626960470,
            "ems": null
        },
        {
            "latitude": 38.67691,
            "longitude": -9.342797,
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
            "heading": 288,
            "squawk": "1332",
            "timestamp": 1626960476,
            "ems": null
        },
        {
            "latitude": 38.677227,
            "longitude": -9.343933,
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
            "heading": 288,
            "squawk": "1332",
            "timestamp": 1626960479,
            "ems": null
        },
        {
            "latitude": 38.677509,
            "longitude": -9.344971,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960481,
            "ems": null
        },
        {
            "latitude": 38.677692,
            "longitude": -9.345642,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960482,
            "ems": null
        },
        {
            "latitude": 38.677963,
            "longitude": -9.346559,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960484,
            "ems": null
        },
        {
            "latitude": 38.678146,
            "longitude": -9.347156,
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
            "heading": 290,
            "squawk": "1332",
            "timestamp": 1626960485,
            "ems": null
        },
        {
            "latitude": 38.678345,
            "longitude": -9.3479,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960487,
            "ems": null
        },
        {
            "latitude": 38.678532,
            "longitude": -9.348572,
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
            "heading": 290,
            "squawk": "1332",
            "timestamp": 1626960488,
            "ems": null
        },
        {
            "latitude": 38.67881,
            "longitude": -9.349487,
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
            "heading": 290,
            "squawk": "1332",
            "timestamp": 1626960490,
            "ems": null
        },
        {
            "latitude": 38.678879,
            "longitude": -9.349724,
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
            "heading": 290,
            "squawk": "1332",
            "timestamp": 1626960491,
            "ems": null
        },
        {
            "latitude": 38.679337,
            "longitude": -9.351275,
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
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960494,
            "ems": null
        },
        {
            "latitude": 38.679703,
            "longitude": -9.35241,
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
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960496,
            "ems": null
        },
        {
            "latitude": 38.680115,
            "longitude": -9.353821,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960499,
            "ems": null
        },
        {
            "latitude": 38.681213,
            "longitude": -9.358381,
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
                "fpm": -832,
                "ms": -4.2
            },
            "heading": 287,
            "squawk": "1332",
            "timestamp": 1626960508,
            "ems": null
        },
        {
            "latitude": 38.682117,
            "longitude": -9.361694,
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
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960514,
            "ems": null
        },
        {
            "latitude": 38.683044,
            "longitude": -9.36483,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960520,
            "ems": null
        },
        {
            "latitude": 38.684536,
            "longitude": -9.369507,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960529,
            "ems": null
        },
        {
            "latitude": 38.685013,
            "longitude": -9.371039,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 292,
            "squawk": "1332",
            "timestamp": 1626960532,
            "ems": null
        },
        {
            "latitude": 38.685097,
            "longitude": -9.371277,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 292,
            "squawk": "1332",
            "timestamp": 1626960533,
            "ems": null
        },
        {
            "latitude": 38.685284,
            "longitude": -9.371765,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 292,
            "squawk": "1332",
            "timestamp": 1626960534,
            "ems": null
        },
        {
            "latitude": 38.685516,
            "longitude": -9.372592,
            "altitude": {
                "feet": 1000,
                "meters": 305
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
            "heading": 293,
            "squawk": "1332",
            "timestamp": 1626960535,
            "ems": null
        },
        {
            "latitude": 38.68663,
            "longitude": -9.375977,
            "altitude": {
                "feet": 1000,
                "meters": 305
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
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960542,
            "ems": null
        },
        {
            "latitude": 38.687469,
            "longitude": -9.378845,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 289,
            "squawk": "1332",
            "timestamp": 1626960547,
            "ems": null
        },
        {
            "latitude": 38.688496,
            "longitude": -9.382813,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 288,
            "squawk": "1332",
            "timestamp": 1626960555,
            "ems": null
        },
        {
            "latitude": 38.689362,
            "longitude": -9.386086,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 288,
            "squawk": "1332",
            "timestamp": 1626960561,
            "ems": null
        },
        {
            "latitude": 38.689751,
            "longitude": -9.387573,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 287,
            "squawk": "1332",
            "timestamp": 1626960563,
            "ems": null
        },
        {
            "latitude": 38.690094,
            "longitude": -9.389011,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 285,
            "squawk": "1332",
            "timestamp": 1626960566,
            "ems": null
        },
        {
            "latitude": 38.690311,
            "longitude": -9.390259,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 283,
            "squawk": "1332",
            "timestamp": 1626960568,
            "ems": null
        },
        {
            "latitude": 38.690403,
            "longitude": -9.390808,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 281,
            "squawk": "1332",
            "timestamp": 1626960569,
            "ems": null
        },
        {
            "latitude": 38.690544,
            "longitude": -9.391907,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 278,
            "squawk": "1332",
            "timestamp": 1626960571,
            "ems": null
        },
        {
            "latitude": 38.690552,
            "longitude": -9.392176,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 276,
            "squawk": "1332",
            "timestamp": 1626960572,
            "ems": null
        },
        {
            "latitude": 38.69059,
            "longitude": -9.393921,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 269,
            "squawk": "1332",
            "timestamp": 1626960575,
            "ems": null
        },
        {
            "latitude": 38.690495,
            "longitude": -9.395325,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 264,
            "squawk": "1332",
            "timestamp": 1626960578,
            "ems": null
        },
        {
            "latitude": 38.690262,
            "longitude": -9.396912,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 260,
            "squawk": "1332",
            "timestamp": 1626960581,
            "ems": null
        },
        {
            "latitude": 38.690029,
            "longitude": -9.398499,
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960583,
            "ems": null
        },
        {
            "latitude": 38.689938,
            "longitude": -9.399048,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960585,
            "ems": null
        },
        {
            "latitude": 38.689728,
            "longitude": -9.400117,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960587,
            "ems": null
        },
        {
            "latitude": 38.689453,
            "longitude": -9.401909,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960590,
            "ems": null
        },
        {
            "latitude": 38.689407,
            "longitude": -9.402207,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960591,
            "ems": null
        },
        {
            "latitude": 38.689041,
            "longitude": -9.403879,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 254,
            "squawk": "1332",
            "timestamp": 1626960594,
            "ems": null
        },
        {
            "latitude": 38.688858,
            "longitude": -9.404715,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960596,
            "ems": null
        },
        {
            "latitude": 38.688354,
            "longitude": -9.406507,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 251,
            "squawk": "1332",
            "timestamp": 1626960599,
            "ems": null
        },
        {
            "latitude": 38.68808,
            "longitude": -9.407461,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 250,
            "squawk": "1332",
            "timestamp": 1626960601,
            "ems": null
        },
        {
            "latitude": 38.687943,
            "longitude": -9.407939,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 249,
            "squawk": "1332",
            "timestamp": 1626960602,
            "ems": null
        },
        {
            "latitude": 38.687656,
            "longitude": -9.408936,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 248,
            "squawk": "1332",
            "timestamp": 1626960604,
            "ems": null
        },
        {
            "latitude": 38.687515,
            "longitude": -9.409363,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 248,
            "squawk": "1332",
            "timestamp": 1626960605,
            "ems": null
        },
        {
            "latitude": 38.687393,
            "longitude": -9.40979,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 247,
            "squawk": "1332",
            "timestamp": 1626960606,
            "ems": null
        },
        {
            "latitude": 38.68689,
            "longitude": -9.411223,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 245,
            "squawk": "1332",
            "timestamp": 1626960609,
            "ems": null
        },
        {
            "latitude": 38.686523,
            "longitude": -9.412357,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 246,
            "squawk": "1332",
            "timestamp": 1626960611,
            "ems": null
        },
        {
            "latitude": 38.686386,
            "longitude": -9.412656,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 246,
            "squawk": "1332",
            "timestamp": 1626960612,
            "ems": null
        },
        {
            "latitude": 38.686165,
            "longitude": -9.41333,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 246,
            "squawk": "1332",
            "timestamp": 1626960614,
            "ems": null
        },
        {
            "latitude": 38.685974,
            "longitude": -9.41385,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 246,
            "squawk": "1332",
            "timestamp": 1626960615,
            "ems": null
        },
        {
            "latitude": 38.685608,
            "longitude": -9.4151,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 247,
            "squawk": "1332",
            "timestamp": 1626960617,
            "ems": null
        },
        {
            "latitude": 38.685196,
            "longitude": -9.416239,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 247,
            "squawk": "1332",
            "timestamp": 1626960620,
            "ems": null
        },
        {
            "latitude": 38.684399,
            "longitude": -9.419434,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 254,
            "squawk": "1332",
            "timestamp": 1626960626,
            "ems": null
        },
        {
            "latitude": 38.684326,
            "longitude": -9.419702,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 255,
            "squawk": "1332",
            "timestamp": 1626960627,
            "ems": null
        },
        {
            "latitude": 38.684143,
            "longitude": -9.420716,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 257,
            "squawk": "1332",
            "timestamp": 1626960629,
            "ems": null
        },
        {
            "latitude": 38.684052,
            "longitude": -9.421553,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 260,
            "squawk": "1332",
            "timestamp": 1626960630,
            "ems": null
        },
        {
            "latitude": 38.68396,
            "longitude": -9.42203,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 252,
            "squawk": "1332",
            "timestamp": 1626960631,
            "ems": null
        },
        {
            "latitude": 38.683914,
            "longitude": -9.422747,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 264,
            "squawk": "1332",
            "timestamp": 1626960633,
            "ems": null
        },
        {
            "latitude": 38.683884,
            "longitude": -9.423645,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 266,
            "squawk": "1332",
            "timestamp": 1626960634,
            "ems": null
        },
        {
            "latitude": 38.683868,
            "longitude": -9.423882,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 266,
            "squawk": "1332",
            "timestamp": 1626960635,
            "ems": null
        },
        {
            "latitude": 38.683838,
            "longitude": -9.425476,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 269,
            "squawk": "1332",
            "timestamp": 1626960638,
            "ems": null
        },
        {
            "latitude": 38.683884,
            "longitude": -9.428467,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 271,
            "squawk": "1332",
            "timestamp": 1626960644,
            "ems": null
        },
        {
            "latitude": 38.683884,
            "longitude": -9.429016,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 272,
            "squawk": "1332",
            "timestamp": 1626960645,
            "ems": null
        },
        {
            "latitude": 38.683979,
            "longitude": -9.430603,
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
            "heading": 274,
            "squawk": "1332",
            "timestamp": 1626960648,
            "ems": null
        },
        {
            "latitude": 38.684116,
            "longitude": -9.432007,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 276,
            "squawk": "1332",
            "timestamp": 1626960650,
            "ems": null
        },
        {
            "latitude": 38.684166,
            "longitude": -9.432556,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 276,
            "squawk": "1332",
            "timestamp": 1626960651,
            "ems": null
        },
        {
            "latitude": 38.684212,
            "longitude": -9.433228,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 277,
            "squawk": "1332",
            "timestamp": 1626960653,
            "ems": null
        },
        {
            "latitude": 38.684303,
            "longitude": -9.433777,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 278,
            "squawk": "1332",
            "timestamp": 1626960654,
            "ems": null
        },
        {
            "latitude": 38.684444,
            "longitude": -9.434814,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 279,
            "squawk": "1332",
            "timestamp": 1626960656,
            "ems": null
        },
        {
            "latitude": 38.684677,
            "longitude": -9.43634,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 283,
            "squawk": "1332",
            "timestamp": 1626960659,
            "ems": null
        },
        {
            "latitude": 38.685059,
            "longitude": -9.438211,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960662,
            "ems": null
        },
        {
            "latitude": 38.685097,
            "longitude": -9.438477,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960663,
            "ems": null
        },
        {
            "latitude": 38.685333,
            "longitude": -9.439704,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960665,
            "ems": null
        },
        {
            "latitude": 38.685425,
            "longitude": -9.440182,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960666,
            "ems": null
        },
        {
            "latitude": 38.685654,
            "longitude": -9.441345,
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
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960669,
            "ems": null
        },
        {
            "latitude": 38.685841,
            "longitude": -9.442322,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960671,
            "ems": null
        },
        {
            "latitude": 38.685932,
            "longitude": -9.442749,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 284,
            "squawk": "1332",
            "timestamp": 1626960672,
            "ems": null
        },
        {
            "latitude": 38.686203,
            "longitude": -9.444182,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 283,
            "squawk": "1332",
            "timestamp": 1626960674,
            "ems": null
        },
        {
            "latitude": 38.68626,
            "longitude": -9.444458,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 283,
            "squawk": "1332",
            "timestamp": 1626960675,
            "ems": null
        },
        {
            "latitude": 38.686447,
            "longitude": -9.445618,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 282,
            "squawk": "1332",
            "timestamp": 1626960677,
            "ems": null
        },
        {
            "latitude": 38.686958,
            "longitude": -9.448608,
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
                "fpm": 1152,
                "ms": 5.9
            },
            "heading": 282,
            "squawk": "1332",
            "timestamp": 1626960683,
            "ems": null
        },
        {
            "latitude": 38.687302,
            "longitude": -9.451347,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 275,
            "squawk": "1332",
            "timestamp": 1626960689,
            "ems": null
        },
        {
            "latitude": 38.687347,
            "longitude": -9.452362,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 272,
            "squawk": "1332",
            "timestamp": 1626960692,
            "ems": null
        },
        {
            "latitude": 38.687332,
            "longitude": -9.45282,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 270,
            "squawk": "1332",
            "timestamp": 1626960693,
            "ems": null
        },
        {
            "latitude": 38.687283,
            "longitude": -9.453735,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 264,
            "squawk": "1332",
            "timestamp": 1626960695,
            "ems": null
        },
        {
            "latitude": 38.68721,
            "longitude": -9.454332,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 262,
            "squawk": "1332",
            "timestamp": 1626960696,
            "ems": null
        },
        {
            "latitude": 38.687099,
            "longitude": -9.455627,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 263,
            "squawk": "1332",
            "timestamp": 1626960699,
            "ems": null
        },
        {
            "latitude": 38.687073,
            "longitude": -9.45672,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 270,
            "squawk": "1332",
            "timestamp": 1626960701,
            "ems": null
        },
        {
            "latitude": 38.687702,
            "longitude": -9.460144,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 291,
            "squawk": "1332",
            "timestamp": 1626960708,
            "ems": null
        },
        {
            "latitude": 38.688263,
            "longitude": -9.461548,
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
            "heading": 297,
            "squawk": "1332",
            "timestamp": 1626960711,
            "ems": null
        },
        {
            "latitude": 38.688728,
            "longitude": -9.462585,
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
            "heading": 302,
            "squawk": "1332",
            "timestamp": 1626960714,
            "ems": null
        },
        {
            "latitude": 38.689499,
            "longitude": -9.464005,
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
            "heading": 304,
            "squawk": "1332",
            "timestamp": 1626960717,
            "ems": null
        },
        {
            "latitude": 38.689705,
            "longitude": -9.464417,
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
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960718,
            "ems": null
        },
        {
            "latitude": 38.690002,
            "longitude": -9.464901,
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
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960719,
            "ems": null
        },
        {
            "latitude": 38.690868,
            "longitude": -9.466553,
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
            "heading": 304,
            "squawk": "1332",
            "timestamp": 1626960723,
            "ems": null
        },
        {
            "latitude": 38.691753,
            "longitude": -9.468079,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960726,
            "ems": null
        },
        {
            "latitude": 38.6922,
            "longitude": -9.468902,
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
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960728,
            "ems": null
        },
        {
            "latitude": 38.692497,
            "longitude": -9.469421,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960729,
            "ems": null
        },
        {
            "latitude": 38.692978,
            "longitude": -9.470215,
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
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960731,
            "ems": null
        },
        {
            "latitude": 38.693207,
            "longitude": -9.470693,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 305,
            "squawk": "1332",
            "timestamp": 1626960732,
            "ems": null
        },
        {
            "latitude": 38.69371,
            "longitude": -9.471588,
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
            "heading": 306,
            "squawk": "1332",
            "timestamp": 1626960734,
            "ems": null
        },
        {
            "latitude": 38.694122,
            "longitude": -9.472185,
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
            "heading": 308,
            "squawk": "1332",
            "timestamp": 1626960735,
            "ems": null
        },
        {
            "latitude": 38.694809,
            "longitude": -9.473141,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 311,
            "squawk": "1332",
            "timestamp": 1626960738,
            "ems": null
        },
        {
            "latitude": 38.69545,
            "longitude": -9.474096,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 311,
            "squawk": "1332",
            "timestamp": 1626960740,
            "ems": null
        },
        {
            "latitude": 38.695709,
            "longitude": -9.474487,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 311,
            "squawk": "1332",
            "timestamp": 1626960741,
            "ems": null
        },
        {
            "latitude": 38.695988,
            "longitude": -9.474915,
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
            "heading": 310,
            "squawk": "1332",
            "timestamp": 1626960742,
            "ems": null
        },
        {
            "latitude": 38.69627,
            "longitude": -9.475342,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 310,
            "squawk": "1332",
            "timestamp": 1626960743,
            "ems": null
        },
        {
            "latitude": 38.698105,
            "longitude": -9.478335,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 306,
            "squawk": "1332",
            "timestamp": 1626960750,
            "ems": null
        },
        {
            "latitude": 38.700027,
            "longitude": -9.48144,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 308,
            "squawk": "1332",
            "timestamp": 1626960757,
            "ems": null
        },
        {
            "latitude": 38.701668,
            "longitude": -9.48407,
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
            "heading": 309,
            "squawk": "1332",
            "timestamp": 1626960763,
            "ems": null
        },
        {
            "latitude": 38.703579,
            "longitude": -9.486694,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 316,
            "squawk": "1332",
            "timestamp": 1626960769,
            "ems": null
        },
        {
            "latitude": 38.70446,
            "longitude": -9.48761,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 320,
            "squawk": "1332",
            "timestamp": 1626960771,
            "ems": null
        },
        {
            "latitude": 38.705391,
            "longitude": -9.488464,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 325,
            "squawk": "1332",
            "timestamp": 1626960774,
            "ems": null
        },
        {
            "latitude": 38.705612,
            "longitude": -9.488605,
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
            "heading": 327,
            "squawk": "1332",
            "timestamp": 1626960775,
            "ems": null
        },
        {
            "latitude": 38.705978,
            "longitude": -9.488844,
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
            "heading": 329,
            "squawk": "1332",
            "timestamp": 1626960776,
            "ems": null
        },
        {
            "latitude": 38.706207,
            "longitude": -9.489023,
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
            "heading": 331,
            "squawk": "1332",
            "timestamp": 1626960776,
            "ems": null
        },
        {
            "latitude": 38.709091,
            "longitude": -9.490157,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626960783,
            "ems": null
        },
        {
            "latitude": 38.709305,
            "longitude": -9.490234,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626960784,
            "ems": null
        },
        {
            "latitude": 38.710373,
            "longitude": -9.490336,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 357,
            "squawk": "1332",
            "timestamp": 1626960786,
            "ems": null
        },
        {
            "latitude": 38.711746,
            "longitude": -9.490157,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 7,
            "squawk": "1332",
            "timestamp": 1626960789,
            "ems": null
        },
        {
            "latitude": 38.712795,
            "longitude": -9.489807,
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
            "heading": 16,
            "squawk": "1332",
            "timestamp": 1626960792,
            "ems": null
        },
        {
            "latitude": 38.714191,
            "longitude": -9.488953,
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
            "heading": 28,
            "squawk": "1332",
            "timestamp": 1626960796,
            "ems": null
        },
        {
            "latitude": 38.714951,
            "longitude": -9.488366,
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
            "heading": 32,
            "squawk": "1332",
            "timestamp": 1626960798,
            "ems": null
        },
        {
            "latitude": 38.715912,
            "longitude": -9.487488,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 37,
            "squawk": "1332",
            "timestamp": 1626960801,
            "ems": null
        },
        {
            "latitude": 38.716286,
            "longitude": -9.487122,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 38,
            "squawk": "1332",
            "timestamp": 1626960802,
            "ems": null
        },
        {
            "latitude": 38.716827,
            "longitude": -9.486515,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 42,
            "squawk": "1332",
            "timestamp": 1626960804,
            "ems": null
        },
        {
            "latitude": 38.717285,
            "longitude": -9.485858,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 45,
            "squawk": "1332",
            "timestamp": 1626960805,
            "ems": null
        },
        {
            "latitude": 38.717823,
            "longitude": -9.485046,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 51,
            "squawk": "1332",
            "timestamp": 1626960807,
            "ems": null
        },
        {
            "latitude": 38.717926,
            "longitude": -9.484843,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 52,
            "squawk": "1332",
            "timestamp": 1626960808,
            "ems": null
        },
        {
            "latitude": 38.718475,
            "longitude": -9.483709,
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
            "heading": 60,
            "squawk": "1332",
            "timestamp": 1626960810,
            "ems": null
        },
        {
            "latitude": 38.718987,
            "longitude": -9.482178,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960813,
            "ems": null
        },
        {
            "latitude": 38.71907,
            "longitude": -9.481917,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960814,
            "ems": null
        },
        {
            "latitude": 38.719452,
            "longitude": -9.480652,
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
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960816,
            "ems": null
        },
        {
            "latitude": 38.719574,
            "longitude": -9.480126,
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
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960817,
            "ems": null
        },
        {
            "latitude": 38.719872,
            "longitude": -9.479126,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 70,
            "squawk": "1332",
            "timestamp": 1626960819,
            "ems": null
        },
        {
            "latitude": 38.719917,
            "longitude": -9.478821,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 71,
            "squawk": "1332",
            "timestamp": 1626960820,
            "ems": null
        },
        {
            "latitude": 38.720078,
            "longitude": -9.478275,
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
            "heading": 70,
            "squawk": "1332",
            "timestamp": 1626960821,
            "ems": null
        },
        {
            "latitude": 38.720261,
            "longitude": -9.477559,
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
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626960822,
            "ems": null
        },
        {
            "latitude": 38.720707,
            "longitude": -9.475769,
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
            "heading": 70,
            "squawk": "1332",
            "timestamp": 1626960826,
            "ems": null
        },
        {
            "latitude": 38.720856,
            "longitude": -9.475349,
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
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960827,
            "ems": null
        },
        {
            "latitude": 38.721085,
            "longitude": -9.474752,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960828,
            "ems": null
        },
        {
            "latitude": 38.721222,
            "longitude": -9.474216,
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
            "heading": 66,
            "squawk": "1332",
            "timestamp": 1626960829,
            "ems": null
        },
        {
            "latitude": 38.721634,
            "longitude": -9.473081,
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
            "heading": 65,
            "squawk": "1332",
            "timestamp": 1626960831,
            "ems": null
        },
        {
            "latitude": 38.722336,
            "longitude": -9.471313,
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
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626960835,
            "ems": null
        },
        {
            "latitude": 38.72271,
            "longitude": -9.470276,
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
            "heading": 65,
            "squawk": "1332",
            "timestamp": 1626960837,
            "ems": null
        },
        {
            "latitude": 38.723316,
            "longitude": -9.468628,
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
            "heading": 63,
            "squawk": "1332",
            "timestamp": 1626960841,
            "ems": null
        },
        {
            "latitude": 38.723686,
            "longitude": -9.467712,
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
            "squawk": "1332",
            "timestamp": 1626960843,
            "ems": null
        },
        {
            "latitude": 38.723873,
            "longitude": -9.467224,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960844,
            "ems": null
        },
        {
            "latitude": 38.724339,
            "longitude": -9.466064,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960846,
            "ems": null
        },
        {
            "latitude": 38.724564,
            "longitude": -9.465558,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960847,
            "ems": null
        },
        {
            "latitude": 38.725082,
            "longitude": -9.464294,
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
            "heading": 61,
            "squawk": "1332",
            "timestamp": 1626960850,
            "ems": null
        },
        {
            "latitude": 38.725433,
            "longitude": -9.463468,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960852,
            "ems": null
        },
        {
            "latitude": 38.725597,
            "longitude": -9.463013,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 63,
            "squawk": "1332",
            "timestamp": 1626960853,
            "ems": null
        },
        {
            "latitude": 38.725967,
            "longitude": -9.462097,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960855,
            "ems": null
        },
        {
            "latitude": 38.726154,
            "longitude": -9.46167,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 61,
            "squawk": "1332",
            "timestamp": 1626960856,
            "ems": null
        },
        {
            "latitude": 38.727737,
            "longitude": -9.457825,
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
            "heading": 62,
            "squawk": "1332",
            "timestamp": 1626960865,
            "ems": null
        },
        {
            "latitude": 38.728729,
            "longitude": -9.454929,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960872,
            "ems": null
        },
        {
            "latitude": 38.729877,
            "longitude": -9.451721,
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
            "heading": 65,
            "squawk": "1332",
            "timestamp": 1626960879,
            "ems": null
        },
        {
            "latitude": 38.730995,
            "longitude": -9.448303,
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
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960886,
            "ems": null
        },
        {
            "latitude": 38.731201,
            "longitude": -9.447585,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 70,
            "squawk": "1332",
            "timestamp": 1626960888,
            "ems": null
        },
        {
            "latitude": 38.731293,
            "longitude": -9.447227,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960889,
            "ems": null
        },
        {
            "latitude": 38.731522,
            "longitude": -9.44657,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960890,
            "ems": null
        },
        {
            "latitude": 38.732765,
            "longitude": -9.442871,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960898,
            "ems": null
        },
        {
            "latitude": 38.733604,
            "longitude": -9.440552,
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
            "squawk": "1332",
            "timestamp": 1626960903,
            "ems": null
        },
        {
            "latitude": 38.735188,
            "longitude": -9.436157,
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
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626960913,
            "ems": null
        },
        {
            "latitude": 38.735371,
            "longitude": -9.43573,
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
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626960914,
            "ems": null
        },
        {
            "latitude": 38.735733,
            "longitude": -9.434689,
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
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626960916,
            "ems": null
        },
        {
            "latitude": 38.735931,
            "longitude": -9.434143,
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
            "heading": 65,
            "squawk": "1332",
            "timestamp": 1626960917,
            "ems": null
        },
        {
            "latitude": 38.736908,
            "longitude": -9.431335,
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
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960923,
            "ems": null
        },
        {
            "latitude": 38.737885,
            "longitude": -9.428467,
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
            "heading": 65,
            "squawk": "1332",
            "timestamp": 1626960929,
            "ems": null
        },
        {
            "latitude": 38.738983,
            "longitude": -9.425374,
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
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960935,
            "ems": null
        },
        {
            "latitude": 38.740166,
            "longitude": -9.42157,
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
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960943,
            "ems": null
        },
        {
            "latitude": 38.741051,
            "longitude": -9.418762,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626960948,
            "ems": null
        },
        {
            "latitude": 38.742077,
            "longitude": -9.415527,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626960954,
            "ems": null
        },
        {
            "latitude": 38.743145,
            "longitude": -9.411926,
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
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960961,
            "ems": null
        },
        {
            "latitude": 38.744064,
            "longitude": -9.408834,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960967,
            "ems": null
        },
        {
            "latitude": 38.745026,
            "longitude": -9.405491,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626960973,
            "ems": null
        },
        {
            "latitude": 38.745667,
            "longitude": -9.403103,
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
            "heading": 71,
            "squawk": "1332",
            "timestamp": 1626960978,
            "ems": null
        },
        {
            "latitude": 38.746445,
            "longitude": -9.399998,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 74,
            "squawk": "1332",
            "timestamp": 1626960983,
            "ems": null
        },
        {
            "latitude": 38.746639,
            "longitude": -9.398926,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626960985,
            "ems": null
        },
        {
            "latitude": 38.746719,
            "longitude": -9.398326,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626960986,
            "ems": null
        },
        {
            "latitude": 38.746822,
            "longitude": -9.397705,
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
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960987,
            "ems": null
        },
        {
            "latitude": 38.746822,
            "longitude": -9.3974,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626960988,
            "ems": null
        },
        {
            "latitude": 38.746902,
            "longitude": -9.396535,
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
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626960989,
            "ems": null
        },
        {
            "latitude": 38.746964,
            "longitude": -9.395691,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 87,
            "squawk": "1332",
            "timestamp": 1626960991,
            "ems": null
        },
        {
            "latitude": 38.746964,
            "longitude": -9.394653,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626960993,
            "ems": null
        },
        {
            "latitude": 38.746948,
            "longitude": -9.394027,
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
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626960994,
            "ems": null
        },
        {
            "latitude": 38.746857,
            "longitude": -9.392893,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 96,
            "squawk": "1332",
            "timestamp": 1626960996,
            "ems": null
        },
        {
            "latitude": 38.746777,
            "longitude": -9.392273,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 97,
            "squawk": "1332",
            "timestamp": 1626960997,
            "ems": null
        },
        {
            "latitude": 38.746685,
            "longitude": -9.391541,
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
            "heading": 99,
            "squawk": "1332",
            "timestamp": 1626960998,
            "ems": null
        },
        {
            "latitude": 38.746628,
            "longitude": -9.391221,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 100,
            "squawk": "1332",
            "timestamp": 1626960999,
            "ems": null
        },
        {
            "latitude": 38.746544,
            "longitude": -9.390686,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 100,
            "squawk": "1332",
            "timestamp": 1626961000,
            "ems": null
        },
        {
            "latitude": 38.746407,
            "longitude": -9.389893,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 102,
            "squawk": "1332",
            "timestamp": 1626961001,
            "ems": null
        },
        {
            "latitude": 38.746265,
            "longitude": -9.389221,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 105,
            "squawk": "1332",
            "timestamp": 1626961003,
            "ems": null
        },
        {
            "latitude": 38.745758,
            "longitude": -9.3874,
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
            "heading": 112,
            "squawk": "1332",
            "timestamp": 1626961006,
            "ems": null
        },
        {
            "latitude": 38.745575,
            "longitude": -9.386922,
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
            "heading": 114,
            "squawk": "1332",
            "timestamp": 1626961007,
            "ems": null
        },
        {
            "latitude": 38.745193,
            "longitude": -9.386047,
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
            "heading": 118,
            "squawk": "1332",
            "timestamp": 1626961009,
            "ems": null
        },
        {
            "latitude": 38.74501,
            "longitude": -9.38562,
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
            "heading": 120,
            "squawk": "1332",
            "timestamp": 1626961010,
            "ems": null
        },
        {
            "latitude": 38.744751,
            "longitude": -9.385131,
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
            "heading": 122,
            "squawk": "1332",
            "timestamp": 1626961011,
            "ems": null
        },
        {
            "latitude": 38.744495,
            "longitude": -9.384644,
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
            "heading": 122,
            "squawk": "1332",
            "timestamp": 1626961012,
            "ems": null
        },
        {
            "latitude": 38.744293,
            "longitude": -9.384234,
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
            "heading": 122,
            "squawk": "1332",
            "timestamp": 1626961013,
            "ems": null
        },
        {
            "latitude": 38.744064,
            "longitude": -9.383817,
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
            "heading": 122,
            "squawk": "1332",
            "timestamp": 1626961014,
            "ems": null
        },
        {
            "latitude": 38.743927,
            "longitude": -9.383518,
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
            "heading": 122,
            "squawk": "1332",
            "timestamp": 1626961015,
            "ems": null
        },
        {
            "latitude": 38.743423,
            "longitude": -9.382504,
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
            "heading": 123,
            "squawk": "1332",
            "timestamp": 1626961017,
            "ems": null
        },
        {
            "latitude": 38.742599,
            "longitude": -9.380951,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961021,
            "ems": null
        },
        {
            "latitude": 38.742264,
            "longitude": -9.38031,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961022,
            "ems": null
        },
        {
            "latitude": 38.741795,
            "longitude": -9.379517,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961024,
            "ems": null
        },
        {
            "latitude": 38.741562,
            "longitude": -9.379089,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961025,
            "ems": null
        },
        {
            "latitude": 38.741425,
            "longitude": -9.378845,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961026,
            "ems": null
        },
        {
            "latitude": 38.741096,
            "longitude": -9.378235,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961027,
            "ems": null
        },
        {
            "latitude": 38.740906,
            "longitude": -9.377906,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961028,
            "ems": null
        },
        {
            "latitude": 38.740681,
            "longitude": -9.377441,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 125,
            "squawk": "1332",
            "timestamp": 1626961029,
            "ems": null
        },
        {
            "latitude": 38.738911,
            "longitude": -9.374695,
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
            "heading": 135,
            "squawk": "1332",
            "timestamp": 1626961036,
            "ems": null
        },
        {
            "latitude": 38.738026,
            "longitude": -9.37384,
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
            "heading": 144,
            "squawk": "1332",
            "timestamp": 1626961039,
            "ems": null
        },
        {
            "latitude": 38.737373,
            "longitude": -9.373291,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 149,
            "squawk": "1332",
            "timestamp": 1626961041,
            "ems": null
        },
        {
            "latitude": 38.737003,
            "longitude": -9.373108,
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
            "heading": 152,
            "squawk": "1332",
            "timestamp": 1626961042,
            "ems": null
        },
        {
            "latitude": 38.736301,
            "longitude": -9.372681,
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
            "heading": 155,
            "squawk": "1332",
            "timestamp": 1626961044,
            "ems": null
        },
        {
            "latitude": 38.736069,
            "longitude": -9.372559,
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
            "heading": 156,
            "squawk": "1332",
            "timestamp": 1626961045,
            "ems": null
        },
        {
            "latitude": 38.735744,
            "longitude": -9.372375,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 149,
            "squawk": "1332",
            "timestamp": 1626961046,
            "ems": null
        },
        {
            "latitude": 38.735512,
            "longitude": -9.372253,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 159,
            "squawk": "1332",
            "timestamp": 1626961047,
            "ems": null
        },
        {
            "latitude": 38.734814,
            "longitude": -9.372009,
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
            "heading": 163,
            "squawk": "1332",
            "timestamp": 1626961048,
            "ems": null
        },
        {
            "latitude": 38.73444,
            "longitude": -9.371887,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 165,
            "squawk": "1332",
            "timestamp": 1626961049,
            "ems": null
        },
        {
            "latitude": 38.734024,
            "longitude": -9.371765,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961050,
            "ems": null
        },
        {
            "latitude": 38.733791,
            "longitude": -9.371704,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961051,
            "ems": null
        },
        {
            "latitude": 38.733231,
            "longitude": -9.371521,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961052,
            "ems": null
        },
        {
            "latitude": 38.732391,
            "longitude": -9.371338,
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
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961054,
            "ems": null
        },
        {
            "latitude": 38.731659,
            "longitude": -9.371159,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961056,
            "ems": null
        },
        {
            "latitude": 38.731182,
            "longitude": -9.371094,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961057,
            "ems": null
        },
        {
            "latitude": 38.730297,
            "longitude": -9.370972,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961060,
            "ems": null
        },
        {
            "latitude": 38.729416,
            "longitude": -9.37086,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961062,
            "ems": null
        },
        {
            "latitude": 38.729004,
            "longitude": -9.370801,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961063,
            "ems": null
        },
        {
            "latitude": 38.727505,
            "longitude": -9.370605,
            "altitude": {
                "feet": 1000,
                "meters": 305
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961066,
            "ems": null
        },
        {
            "latitude": 38.72699,
            "longitude": -9.370502,
            "altitude": {
                "feet": 1000,
                "meters": 305
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961068,
            "ems": null
        },
        {
            "latitude": 38.726578,
            "longitude": -9.370442,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961069,
            "ems": null
        },
        {
            "latitude": 38.725983,
            "longitude": -9.370323,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961070,
            "ems": null
        },
        {
            "latitude": 38.725502,
            "longitude": -9.3703,
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961072,
            "ems": null
        },
        {
            "latitude": 38.724758,
            "longitude": -9.370178,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961073,
            "ems": null
        },
        {
            "latitude": 38.724201,
            "longitude": -9.370117,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961075,
            "ems": null
        },
        {
            "latitude": 38.723694,
            "longitude": -9.370025,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961077,
            "ems": null
        },
        {
            "latitude": 38.723328,
            "longitude": -9.369965,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961078,
            "ems": null
        },
        {
            "latitude": 38.722824,
            "longitude": -9.369965,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961079,
            "ems": null
        },
        {
            "latitude": 38.722431,
            "longitude": -9.369934,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961080,
            "ems": null
        },
        {
            "latitude": 38.720196,
            "longitude": -9.369751,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961087,
            "ems": null
        },
        {
            "latitude": 38.718288,
            "longitude": -9.369629,
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
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961092,
            "ems": null
        },
        {
            "latitude": 38.715637,
            "longitude": -9.369368,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961099,
            "ems": null
        },
        {
            "latitude": 38.712433,
            "longitude": -9.369308,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626961109,
            "ems": null
        },
        {
            "latitude": 38.709953,
            "longitude": -9.369141,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961115,
            "ems": null
        },
        {
            "latitude": 38.707855,
            "longitude": -9.369128,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626961122,
            "ems": null
        },
        {
            "latitude": 38.705841,
            "longitude": -9.36883,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 165,
            "squawk": "1332",
            "timestamp": 1626961127,
            "ems": null
        },
        {
            "latitude": 38.705486,
            "longitude": -9.368652,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 161,
            "squawk": "1332",
            "timestamp": 1626961129,
            "ems": null
        },
        {
            "latitude": 38.704742,
            "longitude": -9.368164,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 148,
            "squawk": "1332",
            "timestamp": 1626961131,
            "ems": null
        },
        {
            "latitude": 38.704514,
            "longitude": -9.367934,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 148,
            "squawk": "1332",
            "timestamp": 1626961132,
            "ems": null
        },
        {
            "latitude": 38.704182,
            "longitude": -9.367432,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 133,
            "squawk": "1332",
            "timestamp": 1626961133,
            "ems": null
        },
        {
            "latitude": 38.70401,
            "longitude": -9.367158,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 128,
            "squawk": "1332",
            "timestamp": 1626961134,
            "ems": null
        },
        {
            "latitude": 38.703762,
            "longitude": -9.366638,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 119,
            "squawk": "1332",
            "timestamp": 1626961136,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.366143,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 133,
            "squawk": "1332",
            "timestamp": 1626961137,
            "ems": null
        },
        {
            "latitude": 38.703506,
            "longitude": -9.365486,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 103,
            "squawk": "1332",
            "timestamp": 1626961138,
            "ems": null
        },
        {
            "latitude": 38.703461,
            "longitude": -9.363695,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626961143,
            "ems": null
        },
        {
            "latitude": 38.703461,
            "longitude": -9.36286,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626961145,
            "ems": null
        },
        {
            "latitude": 38.703552,
            "longitude": -9.361725,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626961147,
            "ems": null
        },
        {
            "latitude": 38.703625,
            "longitude": -9.360718,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626961150,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.360053,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626961151,
            "ems": null
        },
        {
            "latitude": 38.703625,
            "longitude": -9.359558,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 89,
            "squawk": "1332",
            "timestamp": 1626961152,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.359337,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 89,
            "squawk": "1332",
            "timestamp": 1626961153,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.358918,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 89,
            "squawk": "1332",
            "timestamp": 1626961154,
            "ems": null
        },
        {
            "latitude": 38.703671,
            "longitude": -9.358276,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 89,
            "squawk": "1332",
            "timestamp": 1626961155,
            "ems": null
        },
        {
            "latitude": 38.703671,
            "longitude": -9.357727,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961157,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.356829,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961159,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.356351,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961160,
            "ems": null
        },
        {
            "latitude": 38.703625,
            "longitude": -9.355774,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961161,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.353007,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961168,
            "ems": null
        },
        {
            "latitude": 38.70369,
            "longitude": -9.350559,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626961173,
            "ems": null
        },
        {
            "latitude": 38.703857,
            "longitude": -9.349304,
            "altitude": {
                "feet": 600,
                "meters": 183
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
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626961177,
            "ems": null
        },
        {
            "latitude": 38.703949,
            "longitude": -9.348938,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 75,
            "squawk": "1332",
            "timestamp": 1626961178,
            "ems": null
        },
        {
            "latitude": 38.70409,
            "longitude": -9.348572,
            "altitude": {
                "feet": 600,
                "meters": 183
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626961179,
            "ems": null
        },
        {
            "latitude": 38.704651,
            "longitude": -9.347813,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 114.8,
                "kts": 62,
                "mph": 71.3
            },
            "verticalSpeed": {
                "fpm": -832,
                "ms": -4.2
            },
            "heading": 38,
            "squawk": "1332",
            "timestamp": 1626961182,
            "ems": null
        },
        {
            "latitude": 38.70488,
            "longitude": -9.347633,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 114.8,
                "kts": 62,
                "mph": 71.3
            },
            "verticalSpeed": {
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 29,
            "squawk": "1332",
            "timestamp": 1626961183,
            "ems": null
        },
        {
            "latitude": 38.705208,
            "longitude": -9.347473,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 114.8,
                "kts": 62,
                "mph": 71.3
            },
            "verticalSpeed": {
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 22,
            "squawk": "1332",
            "timestamp": 1626961184,
            "ems": null
        },
        {
            "latitude": 38.705997,
            "longitude": -9.347412,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 12,
            "squawk": "1332",
            "timestamp": 1626961187,
            "ems": null
        },
        {
            "latitude": 38.706573,
            "longitude": -9.347693,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 340,
            "squawk": "1332",
            "timestamp": 1626961189,
            "ems": null
        },
        {
            "latitude": 38.706894,
            "longitude": -9.347873,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 333,
            "squawk": "1332",
            "timestamp": 1626961190,
            "ems": null
        },
        {
            "latitude": 38.707115,
            "longitude": -9.348083,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 331,
            "squawk": "1332",
            "timestamp": 1626961191,
            "ems": null
        },
        {
            "latitude": 38.707764,
            "longitude": -9.348529,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 329,
            "squawk": "1332",
            "timestamp": 1626961193,
            "ems": null
        },
        {
            "latitude": 38.708138,
            "longitude": -9.348816,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 333,
            "squawk": "1332",
            "timestamp": 1626961195,
            "ems": null
        },
        {
            "latitude": 38.708679,
            "longitude": -9.349127,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 334,
            "squawk": "1332",
            "timestamp": 1626961196,
            "ems": null
        },
        {
            "latitude": 38.709396,
            "longitude": -9.349487,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 338,
            "squawk": "1332",
            "timestamp": 1626961199,
            "ems": null
        },
        {
            "latitude": 38.709641,
            "longitude": -9.349604,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 338,
            "squawk": "1332",
            "timestamp": 1626961200,
            "ems": null
        },
        {
            "latitude": 38.709915,
            "longitude": -9.349724,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 339,
            "squawk": "1332",
            "timestamp": 1626961201,
            "ems": null
        },
        {
            "latitude": 38.71019,
            "longitude": -9.349843,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 338,
            "squawk": "1332",
            "timestamp": 1626961202,
            "ems": null
        },
        {
            "latitude": 38.710419,
            "longitude": -9.349976,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961203,
            "ems": null
        },
        {
            "latitude": 38.710747,
            "longitude": -9.350037,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961204,
            "ems": null
        },
        {
            "latitude": 38.711288,
            "longitude": -9.350202,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626961206,
            "ems": null
        },
        {
            "latitude": 38.711864,
            "longitude": -9.350403,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626961208,
            "ems": null
        },
        {
            "latitude": 38.712433,
            "longitude": -9.350619,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961210,
            "ems": null
        },
        {
            "latitude": 38.713394,
            "longitude": -9.351037,
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961213,
            "ems": null
        },
        {
            "latitude": 38.714035,
            "longitude": -9.351216,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961216,
            "ems": null
        },
        {
            "latitude": 38.714355,
            "longitude": -9.351336,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961217,
            "ems": null
        },
        {
            "latitude": 38.715263,
            "longitude": -9.351685,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961220,
            "ems": null
        },
        {
            "latitude": 38.715683,
            "longitude": -9.351813,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961222,
            "ems": null
        },
        {
            "latitude": 38.71701,
            "longitude": -9.352291,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961227,
            "ems": null
        },
        {
            "latitude": 38.717636,
            "longitude": -9.352539,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961229,
            "ems": null
        },
        {
            "latitude": 38.718426,
            "longitude": -9.352844,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961232,
            "ems": null
        },
        {
            "latitude": 38.720196,
            "longitude": -9.353455,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961239,
            "ems": null
        },
        {
            "latitude": 38.721359,
            "longitude": -9.353844,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961244,
            "ems": null
        },
        {
            "latitude": 38.722805,
            "longitude": -9.35437,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 88.9,
                "kts": 48,
                "mph": 55.2
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961251,
            "ems": null
        },
        {
            "latitude": 38.723129,
            "longitude": -9.354553,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 92.6,
                "kts": 50,
                "mph": 57.5
            },
            "verticalSpeed": {
                "fpm": 192,
                "ms": 1
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961253,
            "ems": null
        },
        {
            "latitude": 38.724655,
            "longitude": -9.355038,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 105.6,
                "kts": 57,
                "mph": 65.6
            },
            "verticalSpeed": {
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961259,
            "ems": null
        },
        {
            "latitude": 38.727264,
            "longitude": -9.356052,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961268,
            "ems": null
        },
        {
            "latitude": 38.729004,
            "longitude": -9.356709,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961274,
            "ems": null
        },
        {
            "latitude": 38.730717,
            "longitude": -9.357361,
            "altitude": {
                "feet": 300,
                "meters": 91
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
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626961280,
            "ems": null
        },
        {
            "latitude": 38.732578,
            "longitude": -9.358093,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961286,
            "ems": null
        },
        {
            "latitude": 38.734257,
            "longitude": -9.358643,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626961292,
            "ems": null
        },
        {
            "latitude": 38.736256,
            "longitude": -9.359253,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961299,
            "ems": null
        },
        {
            "latitude": 38.738388,
            "longitude": -9.359993,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961307,
            "ems": null
        },
        {
            "latitude": 38.740448,
            "longitude": -9.360718,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626961314,
            "ems": null
        },
        {
            "latitude": 38.741005,
            "longitude": -9.36084,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626961315,
            "ems": null
        },
        {
            "latitude": 38.741959,
            "longitude": -9.360888,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 355,
            "squawk": "1332",
            "timestamp": 1626961318,
            "ems": null
        },
        {
            "latitude": 38.742355,
            "longitude": -9.360962,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626961319,
            "ems": null
        },
        {
            "latitude": 38.743149,
            "longitude": -9.361068,
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
                "fpm": 896,
                "ms": 4.6
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626961322,
            "ems": null
        },
        {
            "latitude": 38.743515,
            "longitude": -9.361128,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626961323,
            "ems": null
        },
        {
            "latitude": 38.743973,
            "longitude": -9.361188,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961324,
            "ems": null
        },
        {
            "latitude": 38.744961,
            "longitude": -9.361389,
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
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961327,
            "ems": null
        },
        {
            "latitude": 38.745476,
            "longitude": -9.36145,
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
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961329,
            "ems": null
        },
        {
            "latitude": 38.746078,
            "longitude": -9.361572,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626961330,
            "ems": null
        },
        {
            "latitude": 38.746582,
            "longitude": -9.361665,
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
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961332,
            "ems": null
        },
        {
            "latitude": 38.74704,
            "longitude": -9.361785,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626961333,
            "ems": null
        },
        {
            "latitude": 38.748314,
            "longitude": -9.362061,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626961337,
            "ems": null
        },
        {
            "latitude": 38.7491,
            "longitude": -9.362382,
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
                "fpm": 896,
                "ms": 4.6
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961339,
            "ems": null
        },
        {
            "latitude": 38.750271,
            "longitude": -9.363098,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 334,
            "squawk": "1332",
            "timestamp": 1626961343,
            "ems": null
        },
        {
            "latitude": 38.751022,
            "longitude": -9.363935,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 314,
            "squawk": "1332",
            "timestamp": 1626961346,
            "ems": null
        },
        {
            "latitude": 38.751434,
            "longitude": -9.364807,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 299,
            "squawk": "1332",
            "timestamp": 1626961349,
            "ems": null
        },
        {
            "latitude": 38.751713,
            "longitude": -9.365906,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 285,
            "squawk": "1332",
            "timestamp": 1626961351,
            "ems": null
        },
        {
            "latitude": 38.751755,
            "longitude": -9.366143,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 282,
            "squawk": "1332",
            "timestamp": 1626961352,
            "ems": null
        },
        {
            "latitude": 38.751755,
            "longitude": -9.367456,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 268,
            "squawk": "1332",
            "timestamp": 1626961355,
            "ems": null
        },
        {
            "latitude": 38.751709,
            "longitude": -9.367934,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 263,
            "squawk": "1332",
            "timestamp": 1626961356,
            "ems": null
        },
        {
            "latitude": 38.751572,
            "longitude": -9.368713,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 256,
            "squawk": "1332",
            "timestamp": 1626961357,
            "ems": null
        },
        {
            "latitude": 38.75148,
            "longitude": -9.369202,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626961358,
            "ems": null
        },
        {
            "latitude": 38.751251,
            "longitude": -9.370084,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 250,
            "squawk": "1332",
            "timestamp": 1626961360,
            "ems": null
        },
        {
            "latitude": 38.751022,
            "longitude": -9.370681,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 248,
            "squawk": "1332",
            "timestamp": 1626961362,
            "ems": null
        },
        {
            "latitude": 38.750595,
            "longitude": -9.371826,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 241,
            "squawk": "1332",
            "timestamp": 1626961364,
            "ems": null
        },
        {
            "latitude": 38.750504,
            "longitude": -9.37207,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 239,
            "squawk": "1332",
            "timestamp": 1626961365,
            "ems": null
        },
        {
            "latitude": 38.749969,
            "longitude": -9.37283,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 227,
            "squawk": "1332",
            "timestamp": 1626961367,
            "ems": null
        },
        {
            "latitude": 38.749104,
            "longitude": -9.373596,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 210,
            "squawk": "1332",
            "timestamp": 1626961369,
            "ems": null
        },
        {
            "latitude": 38.746639,
            "longitude": -9.374207,
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961375,
            "ems": null
        },
        {
            "latitude": 38.745987,
            "longitude": -9.374084,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961377,
            "ems": null
        },
        {
            "latitude": 38.745335,
            "longitude": -9.373962,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961378,
            "ems": null
        },
        {
            "latitude": 38.744915,
            "longitude": -9.373901,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961379,
            "ems": null
        },
        {
            "latitude": 38.74411,
            "longitude": -9.373726,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626961381,
            "ems": null
        },
        {
            "latitude": 38.74361,
            "longitude": -9.373657,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961382,
            "ems": null
        },
        {
            "latitude": 38.741501,
            "longitude": -9.373129,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961387,
            "ems": null
        },
        {
            "latitude": 38.74086,
            "longitude": -9.37289,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961388,
            "ems": null
        },
        {
            "latitude": 38.73967,
            "longitude": -9.372592,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626961391,
            "ems": null
        },
        {
            "latitude": 38.738251,
            "longitude": -9.372233,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961394,
            "ems": null
        },
        {
            "latitude": 38.737328,
            "longitude": -9.372009,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626961396,
            "ems": null
        },
        {
            "latitude": 38.736923,
            "longitude": -9.371935,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961397,
            "ems": null
        },
        {
            "latitude": 38.735825,
            "longitude": -9.371696,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626961399,
            "ems": null
        },
        {
            "latitude": 38.735184,
            "longitude": -9.371576,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961401,
            "ems": null
        },
        {
            "latitude": 38.732391,
            "longitude": -9.371155,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961407,
            "ems": null
        },
        {
            "latitude": 38.731293,
            "longitude": -9.371039,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961409,
            "ems": null
        },
        {
            "latitude": 38.731045,
            "longitude": -9.371033,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961410,
            "ems": null
        },
        {
            "latitude": 38.730625,
            "longitude": -9.370972,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961411,
            "ems": null
        },
        {
            "latitude": 38.729694,
            "longitude": -9.37085,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961413,
            "ems": null
        },
        {
            "latitude": 38.729275,
            "longitude": -9.37085,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961414,
            "ems": null
        },
        {
            "latitude": 38.728775,
            "longitude": -9.370801,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961415,
            "ems": null
        },
        {
            "latitude": 38.727264,
            "longitude": -9.370681,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961418,
            "ems": null
        },
        {
            "latitude": 38.725891,
            "longitude": -9.370622,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961421,
            "ems": null
        },
        {
            "latitude": 38.725616,
            "longitude": -9.370562,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961422,
            "ems": null
        },
        {
            "latitude": 38.723316,
            "longitude": -9.370483,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961427,
            "ems": null
        },
        {
            "latitude": 38.721359,
            "longitude": -9.370382,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626961431,
            "ems": null
        },
        {
            "latitude": 38.718102,
            "longitude": -9.370178,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961439,
            "ems": null
        },
        {
            "latitude": 38.715309,
            "longitude": -9.370056,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626961445,
            "ems": null
        },
        {
            "latitude": 38.713306,
            "longitude": -9.370178,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 184,
            "squawk": "1332",
            "timestamp": 1626961449,
            "ems": null
        },
        {
            "latitude": 38.712097,
            "longitude": -9.3703,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 185,
            "squawk": "1332",
            "timestamp": 1626961452,
            "ems": null
        },
        {
            "latitude": 38.711243,
            "longitude": -9.370442,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 185,
            "squawk": "1332",
            "timestamp": 1626961453,
            "ems": null
        },
        {
            "latitude": 38.710606,
            "longitude": -9.370544,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626961455,
            "ems": null
        },
        {
            "latitude": 38.709953,
            "longitude": -9.370605,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 185,
            "squawk": "1332",
            "timestamp": 1626961456,
            "ems": null
        },
        {
            "latitude": 38.709209,
            "longitude": -9.370667,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626961458,
            "ems": null
        },
        {
            "latitude": 38.706345,
            "longitude": -9.370622,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626961464,
            "ems": null
        },
        {
            "latitude": 38.703644,
            "longitude": -9.370562,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626961470,
            "ems": null
        },
        {
            "latitude": 38.700459,
            "longitude": -9.370544,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626961476,
            "ems": null
        },
        {
            "latitude": 38.699993,
            "longitude": -9.370544,
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961477,
            "ems": null
        },
        {
            "latitude": 38.699112,
            "longitude": -9.370442,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961479,
            "ems": null
        },
        {
            "latitude": 38.698597,
            "longitude": -9.370422,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961480,
            "ems": null
        },
        {
            "latitude": 38.69706,
            "longitude": -9.370239,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961484,
            "ems": null
        },
        {
            "latitude": 38.696457,
            "longitude": -9.370144,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961485,
            "ems": null
        },
        {
            "latitude": 38.695755,
            "longitude": -9.370056,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961486,
            "ems": null
        },
        {
            "latitude": 38.69492,
            "longitude": -9.369934,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961488,
            "ems": null
        },
        {
            "latitude": 38.693665,
            "longitude": -9.369666,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961491,
            "ems": null
        },
        {
            "latitude": 38.693069,
            "longitude": -9.369428,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 165,
            "squawk": "1332",
            "timestamp": 1626961492,
            "ems": null
        },
        {
            "latitude": 38.69231,
            "longitude": -9.369141,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 162,
            "squawk": "1332",
            "timestamp": 1626961494,
            "ems": null
        },
        {
            "latitude": 38.692078,
            "longitude": -9.369019,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 161,
            "squawk": "1332",
            "timestamp": 1626961495,
            "ems": null
        },
        {
            "latitude": 38.691242,
            "longitude": -9.368591,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 157,
            "squawk": "1332",
            "timestamp": 1626961497,
            "ems": null
        },
        {
            "latitude": 38.690636,
            "longitude": -9.368164,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 153,
            "squawk": "1332",
            "timestamp": 1626961498,
            "ems": null
        },
        {
            "latitude": 38.689983,
            "longitude": -9.367798,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 152,
            "squawk": "1332",
            "timestamp": 1626961500,
            "ems": null
        },
        {
            "latitude": 38.688812,
            "longitude": -9.366859,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 146,
            "squawk": "1332",
            "timestamp": 1626961503,
            "ems": null
        },
        {
            "latitude": 38.687759,
            "longitude": -9.365845,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 141,
            "squawk": "1332",
            "timestamp": 1626961506,
            "ems": null
        },
        {
            "latitude": 38.68668,
            "longitude": -9.364624,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 137,
            "squawk": "1332",
            "timestamp": 1626961509,
            "ems": null
        },
        {
            "latitude": 38.686249,
            "longitude": -9.364054,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 134,
            "squawk": "1332",
            "timestamp": 1626961511,
            "ems": null
        },
        {
            "latitude": 38.685654,
            "longitude": -9.363217,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 131,
            "squawk": "1332",
            "timestamp": 1626961513,
            "ems": null
        },
        {
            "latitude": 38.685059,
            "longitude": -9.362262,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 130,
            "squawk": "1332",
            "timestamp": 1626961515,
            "ems": null
        },
        {
            "latitude": 38.684555,
            "longitude": -9.361546,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626961517,
            "ems": null
        },
        {
            "latitude": 38.684143,
            "longitude": -9.360829,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 127,
            "squawk": "1332",
            "timestamp": 1626961518,
            "ems": null
        },
        {
            "latitude": 38.683838,
            "longitude": -9.360352,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 126,
            "squawk": "1332",
            "timestamp": 1626961519,
            "ems": null
        },
        {
            "latitude": 38.683548,
            "longitude": -9.359815,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 126,
            "squawk": "1332",
            "timestamp": 1626961521,
            "ems": null
        },
        {
            "latitude": 38.683044,
            "longitude": -9.358918,
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961523,
            "ems": null
        },
        {
            "latitude": 38.682442,
            "longitude": -9.357788,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961525,
            "ems": null
        },
        {
            "latitude": 38.681931,
            "longitude": -9.35675,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 121,
            "squawk": "1332",
            "timestamp": 1626961528,
            "ems": null
        },
        {
            "latitude": 38.681534,
            "longitude": -9.355873,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 119,
            "squawk": "1332",
            "timestamp": 1626961529,
            "ems": null
        },
        {
            "latitude": 38.681213,
            "longitude": -9.355038,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 115,
            "squawk": "1332",
            "timestamp": 1626961531,
            "ems": null
        },
        {
            "latitude": 38.680893,
            "longitude": -9.354142,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 114,
            "squawk": "1332",
            "timestamp": 1626961533,
            "ems": null
        },
        {
            "latitude": 38.680801,
            "longitude": -9.353844,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 114,
            "squawk": "1332",
            "timestamp": 1626961534,
            "ems": null
        },
        {
            "latitude": 38.680618,
            "longitude": -9.353366,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 114,
            "squawk": "1332",
            "timestamp": 1626961535,
            "ems": null
        },
        {
            "latitude": 38.680389,
            "longitude": -9.352649,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 112,
            "squawk": "1332",
            "timestamp": 1626961536,
            "ems": null
        },
        {
            "latitude": 38.679886,
            "longitude": -9.351097,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 111,
            "squawk": "1332",
            "timestamp": 1626961539,
            "ems": null
        },
        {
            "latitude": 38.679474,
            "longitude": -9.349545,
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
            "heading": 107,
            "squawk": "1332",
            "timestamp": 1626961542,
            "ems": null
        },
        {
            "latitude": 38.679138,
            "longitude": -9.347839,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 102,
            "squawk": "1332",
            "timestamp": 1626961546,
            "ems": null
        },
        {
            "latitude": 38.678925,
            "longitude": -9.346141,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 96,
            "squawk": "1332",
            "timestamp": 1626961549,
            "ems": null
        },
        {
            "latitude": 38.678925,
            "longitude": -9.345305,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 93,
            "squawk": "1332",
            "timestamp": 1626961551,
            "ems": null
        },
        {
            "latitude": 38.678951,
            "longitude": -9.345093,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626961552,
            "ems": null
        },
        {
            "latitude": 38.67897,
            "longitude": -9.344529,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626961553,
            "ems": null
        },
        {
            "latitude": 38.679153,
            "longitude": -9.343454,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 78,
            "squawk": "1332",
            "timestamp": 1626961555,
            "ems": null
        },
        {
            "latitude": 38.679337,
            "longitude": -9.342559,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 73,
            "squawk": "1332",
            "timestamp": 1626961557,
            "ems": null
        },
        {
            "latitude": 38.679474,
            "longitude": -9.342081,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 71,
            "squawk": "1332",
            "timestamp": 1626961558,
            "ems": null
        },
        {
            "latitude": 38.679604,
            "longitude": -9.341675,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 68,
            "squawk": "1332",
            "timestamp": 1626961559,
            "ems": null
        },
        {
            "latitude": 38.679974,
            "longitude": -9.34082,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 58,
            "squawk": "1332",
            "timestamp": 1626961561,
            "ems": null
        },
        {
            "latitude": 38.680206,
            "longitude": -9.340454,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 51,
            "squawk": "1332",
            "timestamp": 1626961562,
            "ems": null
        },
        {
            "latitude": 38.680626,
            "longitude": -9.339966,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 42,
            "squawk": "1332",
            "timestamp": 1626961563,
            "ems": null
        },
        {
            "latitude": 38.681046,
            "longitude": -9.339661,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626961565,
            "ems": null
        },
        {
            "latitude": 38.681625,
            "longitude": -9.339334,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 19,
            "squawk": "1332",
            "timestamp": 1626961566,
            "ems": null
        },
        {
            "latitude": 38.682583,
            "longitude": -9.339294,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 359,
            "squawk": "1332",
            "timestamp": 1626961569,
            "ems": null
        },
        {
            "latitude": 38.68396,
            "longitude": -9.340051,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 330,
            "squawk": "1332",
            "timestamp": 1626961573,
            "ems": null
        },
        {
            "latitude": 38.685425,
            "longitude": -9.340827,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626961578,
            "ems": null
        },
        {
            "latitude": 38.685699,
            "longitude": -9.340942,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961579,
            "ems": null
        },
        {
            "latitude": 38.687099,
            "longitude": -9.341309,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626961583,
            "ems": null
        },
        {
            "latitude": 38.687748,
            "longitude": -9.341492,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626961585,
            "ems": null
        },
        {
            "latitude": 38.688496,
            "longitude": -9.341736,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626961587,
            "ems": null
        },
        {
            "latitude": 38.689518,
            "longitude": -9.342041,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961590,
            "ems": null
        },
        {
            "latitude": 38.691242,
            "longitude": -9.342651,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961596,
            "ems": null
        },
        {
            "latitude": 38.691708,
            "longitude": -9.342834,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961597,
            "ems": null
        },
        {
            "latitude": 38.692451,
            "longitude": -9.343079,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961600,
            "ems": null
        },
        {
            "latitude": 38.693195,
            "longitude": -9.343384,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961602,
            "ems": null
        },
        {
            "latitude": 38.695385,
            "longitude": -9.344177,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 339,
            "squawk": "1332",
            "timestamp": 1626961610,
            "ems": null
        },
        {
            "latitude": 38.696091,
            "longitude": -9.344529,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 339,
            "squawk": "1332",
            "timestamp": 1626961612,
            "ems": null
        },
        {
            "latitude": 38.696686,
            "longitude": -9.344788,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 339,
            "squawk": "1332",
            "timestamp": 1626961614,
            "ems": null
        },
        {
            "latitude": 38.698734,
            "longitude": -9.345581,
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961622,
            "ems": null
        },
        {
            "latitude": 38.700485,
            "longitude": -9.34626,
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961628,
            "ems": null
        },
        {
            "latitude": 38.702591,
            "longitude": -9.346977,
            "altitude": {
                "feet": 600,
                "meters": 183
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626961635,
            "ems": null
        },
        {
            "latitude": 38.704285,
            "longitude": -9.347633,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961641,
            "ems": null
        },
        {
            "latitude": 38.705345,
            "longitude": -9.348022,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961645,
            "ems": null
        },
        {
            "latitude": 38.707901,
            "longitude": -9.349007,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961654,
            "ems": null
        },
        {
            "latitude": 38.710327,
            "longitude": -9.349843,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961663,
            "ems": null
        },
        {
            "latitude": 38.712143,
            "longitude": -9.350464,
            "altitude": {
                "feet": 300,
                "meters": 91
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961669,
            "ems": null
        },
        {
            "latitude": 38.713631,
            "longitude": -9.351074,
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
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961675,
            "ems": null
        },
        {
            "latitude": 38.714722,
            "longitude": -9.351455,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961679,
            "ems": null
        },
        {
            "latitude": 38.71703,
            "longitude": -9.352295,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961687,
            "ems": null
        },
        {
            "latitude": 38.718658,
            "longitude": -9.352888,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961693,
            "ems": null
        },
        {
            "latitude": 38.720306,
            "longitude": -9.353485,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626961699,
            "ems": null
        },
        {
            "latitude": 38.721588,
            "longitude": -9.353963,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961705,
            "ems": null
        },
        {
            "latitude": 38.722641,
            "longitude": -9.354321,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 72.2,
                "kts": 39,
                "mph": 44.9
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961711,
            "ems": null
        },
        {
            "latitude": 38.724014,
            "longitude": -9.354858,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961717,
            "ems": null
        },
        {
            "latitude": 38.725365,
            "longitude": -9.355347,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961722,
            "ems": null
        },
        {
            "latitude": 38.727226,
            "longitude": -9.356018,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961729,
            "ems": null
        },
        {
            "latitude": 38.729004,
            "longitude": -9.356709,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626961735,
            "ems": null
        },
        {
            "latitude": 38.730881,
            "longitude": -9.357306,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626961741,
            "ems": null
        },
        {
            "latitude": 38.733231,
            "longitude": -9.358032,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626961750,
            "ems": null
        },
        {
            "latitude": 38.734909,
            "longitude": -9.358441,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626961755,
            "ems": null
        },
        {
            "latitude": 38.735138,
            "longitude": -9.358521,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626961756,
            "ems": null
        },
        {
            "latitude": 38.735744,
            "longitude": -9.358643,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626961758,
            "ems": null
        },
        {
            "latitude": 38.73761,
            "longitude": -9.359158,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626961765,
            "ems": null
        },
        {
            "latitude": 38.739517,
            "longitude": -9.359741,
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626961772,
            "ems": null
        },
        {
            "latitude": 38.742233,
            "longitude": -9.360531,
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
                "fpm": 768,
                "ms": 3.9
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626961780,
            "ems": null
        },
        {
            "latitude": 38.744358,
            "longitude": -9.361023,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626961786,
            "ems": null
        },
        {
            "latitude": 38.745758,
            "longitude": -9.361247,
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
                "fpm": 768,
                "ms": 3.9
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626961790,
            "ems": null
        },
        {
            "latitude": 38.74659,
            "longitude": -9.361389,
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
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961793,
            "ems": null
        },
        {
            "latitude": 38.747196,
            "longitude": -9.361511,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626961794,
            "ems": null
        },
        {
            "latitude": 38.750084,
            "longitude": -9.362549,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 331,
            "squawk": "1332",
            "timestamp": 1626961804,
            "ems": null
        },
        {
            "latitude": 38.75116,
            "longitude": -9.363814,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 312,
            "squawk": "1332",
            "timestamp": 1626961808,
            "ems": null
        },
        {
            "latitude": 38.751526,
            "longitude": -9.364563,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 303,
            "squawk": "1332",
            "timestamp": 1626961810,
            "ems": null
        },
        {
            "latitude": 38.751801,
            "longitude": -9.365308,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 295,
            "squawk": "1332",
            "timestamp": 1626961811,
            "ems": null
        },
        {
            "latitude": 38.752083,
            "longitude": -9.366699,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 278,
            "squawk": "1332",
            "timestamp": 1626961814,
            "ems": null
        },
        {
            "latitude": 38.752083,
            "longitude": -9.367432,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 272,
            "squawk": "1332",
            "timestamp": 1626961816,
            "ems": null
        },
        {
            "latitude": 38.751801,
            "longitude": -9.369547,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626961820,
            "ems": null
        },
        {
            "latitude": 38.75148,
            "longitude": -9.370562,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 245,
            "squawk": "1332",
            "timestamp": 1626961822,
            "ems": null
        },
        {
            "latitude": 38.750702,
            "longitude": -9.372054,
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
            "heading": 235,
            "squawk": "1332",
            "timestamp": 1626961825,
            "ems": null
        },
        {
            "latitude": 38.750362,
            "longitude": -9.372559,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 230,
            "squawk": "1332",
            "timestamp": 1626961826,
            "ems": null
        },
        {
            "latitude": 38.74929,
            "longitude": -9.37384,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 219,
            "squawk": "1332",
            "timestamp": 1626961829,
            "ems": null
        },
        {
            "latitude": 38.747864,
            "longitude": -9.374921,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 207,
            "squawk": "1332",
            "timestamp": 1626961833,
            "ems": null
        },
        {
            "latitude": 38.745758,
            "longitude": -9.375696,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 190,
            "squawk": "1332",
            "timestamp": 1626961837,
            "ems": null
        },
        {
            "latitude": 38.7453,
            "longitude": -9.375756,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626961838,
            "ems": null
        },
        {
            "latitude": 38.743938,
            "longitude": -9.375793,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961841,
            "ems": null
        },
        {
            "latitude": 38.743698,
            "longitude": -9.375756,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961842,
            "ems": null
        },
        {
            "latitude": 38.742325,
            "longitude": -9.375458,
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
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961845,
            "ems": null
        },
        {
            "latitude": 38.740997,
            "longitude": -9.37504,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961848,
            "ems": null
        },
        {
            "latitude": 38.739944,
            "longitude": -9.374742,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961850,
            "ems": null
        },
        {
            "latitude": 38.738911,
            "longitude": -9.374451,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961852,
            "ems": null
        },
        {
            "latitude": 38.738491,
            "longitude": -9.374329,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961853,
            "ems": null
        },
        {
            "latitude": 38.737514,
            "longitude": -9.374023,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961856,
            "ems": null
        },
        {
            "latitude": 38.737049,
            "longitude": -9.373901,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961857,
            "ems": null
        },
        {
            "latitude": 38.736145,
            "longitude": -9.373667,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961859,
            "ems": null
        },
        {
            "latitude": 38.734859,
            "longitude": -9.373413,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961862,
            "ems": null
        },
        {
            "latitude": 38.733604,
            "longitude": -9.37323,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961864,
            "ems": null
        },
        {
            "latitude": 38.732941,
            "longitude": -9.37307,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961866,
            "ems": null
        },
        {
            "latitude": 38.732529,
            "longitude": -9.37301,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961867,
            "ems": null
        },
        {
            "latitude": 38.730995,
            "longitude": -9.372681,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626961870,
            "ems": null
        },
        {
            "latitude": 38.729187,
            "longitude": -9.372413,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961874,
            "ems": null
        },
        {
            "latitude": 38.728764,
            "longitude": -9.372375,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626961875,
            "ems": null
        },
        {
            "latitude": 38.728531,
            "longitude": -9.372314,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961876,
            "ems": null
        },
        {
            "latitude": 38.727859,
            "longitude": -9.372233,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961877,
            "ems": null
        },
        {
            "latitude": 38.727036,
            "longitude": -9.372174,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626961879,
            "ems": null
        },
        {
            "latitude": 38.726257,
            "longitude": -9.372114,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961881,
            "ems": null
        },
        {
            "latitude": 38.723877,
            "longitude": -9.371875,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626961886,
            "ems": null
        },
        {
            "latitude": 38.720009,
            "longitude": -9.371155,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626961895,
            "ems": null
        },
        {
            "latitude": 38.719357,
            "longitude": -9.370972,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961897,
            "ems": null
        },
        {
            "latitude": 38.718933,
            "longitude": -9.37086,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626961898,
            "ems": null
        },
        {
            "latitude": 38.717823,
            "longitude": -9.370483,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961901,
            "ems": null
        },
        {
            "latitude": 38.717377,
            "longitude": -9.370382,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626961902,
            "ems": null
        },
        {
            "latitude": 38.716873,
            "longitude": -9.370263,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626961903,
            "ems": null
        },
        {
            "latitude": 38.714611,
            "longitude": -9.369873,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961909,
            "ems": null
        },
        {
            "latitude": 38.711956,
            "longitude": -9.369446,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961916,
            "ems": null
        },
        {
            "latitude": 38.710003,
            "longitude": -9.369141,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626961921,
            "ems": null
        },
        {
            "latitude": 38.70932,
            "longitude": -9.369069,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961923,
            "ems": null
        },
        {
            "latitude": 38.708977,
            "longitude": -9.369019,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626961924,
            "ems": null
        },
        {
            "latitude": 38.707439,
            "longitude": -9.368896,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961928,
            "ems": null
        },
        {
            "latitude": 38.706791,
            "longitude": -9.368835,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961930,
            "ems": null
        },
        {
            "latitude": 38.706043,
            "longitude": -9.368835,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961932,
            "ems": null
        },
        {
            "latitude": 38.705345,
            "longitude": -9.368774,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626961934,
            "ems": null
        },
        {
            "latitude": 38.703812,
            "longitude": -9.368469,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626961939,
            "ems": null
        },
        {
            "latitude": 38.702831,
            "longitude": -9.367981,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 155,
            "squawk": "1332",
            "timestamp": 1626961942,
            "ems": null
        },
        {
            "latitude": 38.702461,
            "longitude": -9.367737,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 149,
            "squawk": "1332",
            "timestamp": 1626961943,
            "ems": null
        },
        {
            "latitude": 38.701855,
            "longitude": -9.367126,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 138,
            "squawk": "1332",
            "timestamp": 1626961945,
            "ems": null
        },
        {
            "latitude": 38.701668,
            "longitude": -9.36676,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 133,
            "squawk": "1332",
            "timestamp": 1626961946,
            "ems": null
        },
        {
            "latitude": 38.701355,
            "longitude": -9.366262,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 124,
            "squawk": "1332",
            "timestamp": 1626961948,
            "ems": null
        },
        {
            "latitude": 38.701126,
            "longitude": -9.365665,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 114,
            "squawk": "1332",
            "timestamp": 1626961949,
            "ems": null
        },
        {
            "latitude": 38.700989,
            "longitude": -9.365188,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 110,
            "squawk": "1332",
            "timestamp": 1626961950,
            "ems": null
        },
        {
            "latitude": 38.700878,
            "longitude": -9.364502,
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
            "heading": 103,
            "squawk": "1332",
            "timestamp": 1626961952,
            "ems": null
        },
        {
            "latitude": 38.700832,
            "longitude": -9.363708,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626961954,
            "ems": null
        },
        {
            "latitude": 38.700832,
            "longitude": -9.363159,
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
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626961955,
            "ems": null
        },
        {
            "latitude": 38.700897,
            "longitude": -9.362262,
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
            "heading": 83,
            "squawk": "1332",
            "timestamp": 1626961957,
            "ems": null
        },
        {
            "latitude": 38.700943,
            "longitude": -9.361844,
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
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626961958,
            "ems": null
        },
        {
            "latitude": 38.701015,
            "longitude": -9.361267,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961960,
            "ems": null
        },
        {
            "latitude": 38.701126,
            "longitude": -9.36065,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961961,
            "ems": null
        },
        {
            "latitude": 38.701202,
            "longitude": -9.360168,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 80,
            "squawk": "1332",
            "timestamp": 1626961963,
            "ems": null
        },
        {
            "latitude": 38.701481,
            "longitude": -9.357727,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 80,
            "squawk": "1332",
            "timestamp": 1626961969,
            "ems": null
        },
        {
            "latitude": 38.70163,
            "longitude": -9.356829,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961971,
            "ems": null
        },
        {
            "latitude": 38.701721,
            "longitude": -9.356232,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961972,
            "ems": null
        },
        {
            "latitude": 38.701763,
            "longitude": -9.356018,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961973,
            "ems": null
        },
        {
            "latitude": 38.701809,
            "longitude": -9.355591,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626961974,
            "ems": null
        },
        {
            "latitude": 38.701904,
            "longitude": -9.354798,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626961975,
            "ems": null
        },
        {
            "latitude": 38.70195,
            "longitude": -9.354261,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626961977,
            "ems": null
        },
        {
            "latitude": 38.701996,
            "longitude": -9.353821,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626961978,
            "ems": null
        },
        {
            "latitude": 38.702229,
            "longitude": -9.352478,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626961981,
            "ems": null
        },
        {
            "latitude": 38.702362,
            "longitude": -9.351753,
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
            "heading": 75,
            "squawk": "1332",
            "timestamp": 1626961983,
            "ems": null
        },
        {
            "latitude": 38.702454,
            "longitude": -9.351396,
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
            "heading": 74,
            "squawk": "1332",
            "timestamp": 1626961984,
            "ems": null
        },
        {
            "latitude": 38.702694,
            "longitude": -9.350586,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 69,
            "squawk": "1332",
            "timestamp": 1626961986,
            "ems": null
        },
        {
            "latitude": 38.702927,
            "longitude": -9.349976,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 61,
            "squawk": "1332",
            "timestamp": 1626961987,
            "ems": null
        },
        {
            "latitude": 38.703049,
            "longitude": -9.349724,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 57,
            "squawk": "1332",
            "timestamp": 1626961988,
            "ems": null
        },
        {
            "latitude": 38.703781,
            "longitude": -9.348768,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 120.4,
                "kts": 65,
                "mph": 74.8
            },
            "verticalSpeed": {
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 40,
            "squawk": "1332",
            "timestamp": 1626961992,
            "ems": null
        },
        {
            "latitude": 38.703995,
            "longitude": -9.348572,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 39,
            "squawk": "1332",
            "timestamp": 1626961993,
            "ems": null
        },
        {
            "latitude": 38.704285,
            "longitude": -9.348351,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 120.4,
                "kts": 65,
                "mph": 74.8
            },
            "verticalSpeed": {
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 31,
            "squawk": "1332",
            "timestamp": 1626961994,
            "ems": null
        },
        {
            "latitude": 38.704971,
            "longitude": -9.348052,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 17,
            "squawk": "1332",
            "timestamp": 1626961996,
            "ems": null
        },
        {
            "latitude": 38.705391,
            "longitude": -9.347961,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -384,
                "ms": -2
            },
            "heading": 6,
            "squawk": "1332",
            "timestamp": 1626961998,
            "ems": null
        },
        {
            "latitude": 38.705841,
            "longitude": -9.347992,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 357,
            "squawk": "1332",
            "timestamp": 1626961999,
            "ems": null
        },
        {
            "latitude": 38.707123,
            "longitude": -9.348529,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 336,
            "squawk": "1332",
            "timestamp": 1626962004,
            "ems": null
        },
        {
            "latitude": 38.707397,
            "longitude": -9.348708,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 336,
            "squawk": "1332",
            "timestamp": 1626962005,
            "ems": null
        },
        {
            "latitude": 38.70842,
            "longitude": -9.349121,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 336,
            "squawk": "1332",
            "timestamp": 1626962008,
            "ems": null
        },
        {
            "latitude": 38.708885,
            "longitude": -9.349304,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962010,
            "ems": null
        },
        {
            "latitude": 38.709686,
            "longitude": -9.349604,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962013,
            "ems": null
        },
        {
            "latitude": 38.71014,
            "longitude": -9.349792,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962014,
            "ems": null
        },
        {
            "latitude": 38.710884,
            "longitude": -9.350098,
            "altitude": {
                "feet": 300,
                "meters": 91
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -384,
                "ms": -2
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626962017,
            "ems": null
        },
        {
            "latitude": 38.712608,
            "longitude": -9.350708,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962023,
            "ems": null
        },
        {
            "latitude": 38.713165,
            "longitude": -9.350918,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626962025,
            "ems": null
        },
        {
            "latitude": 38.713631,
            "longitude": -9.351074,
            "altitude": {
                "feet": 300,
                "meters": 91
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962027,
            "ems": null
        },
        {
            "latitude": 38.713852,
            "longitude": -9.351156,
            "altitude": {
                "feet": 300,
                "meters": 91
            },
            "speed": {
                "kmh": 111.1,
                "kts": 60,
                "mph": 69
            },
            "verticalSpeed": {
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962028,
            "ems": null
        },
        {
            "latitude": 38.714146,
            "longitude": -9.351257,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962029,
            "ems": null
        },
        {
            "latitude": 38.715588,
            "longitude": -9.351807,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962034,
            "ems": null
        },
        {
            "latitude": 38.716518,
            "longitude": -9.352112,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962037,
            "ems": null
        },
        {
            "latitude": 38.718147,
            "longitude": -9.352661,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962043,
            "ems": null
        },
        {
            "latitude": 38.720009,
            "longitude": -9.353394,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962050,
            "ems": null
        },
        {
            "latitude": 38.721451,
            "longitude": -9.353903,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 90.7,
                "kts": 49,
                "mph": 56.4
            },
            "verticalSpeed": {
                "fpm": 0,
                "ms": 0
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962056,
            "ems": null
        },
        {
            "latitude": 38.722595,
            "longitude": -9.354321,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 77.8,
                "kts": 42,
                "mph": 48.3
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962062,
            "ems": null
        },
        {
            "latitude": 38.723877,
            "longitude": -9.354798,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962067,
            "ems": null
        },
        {
            "latitude": 38.725433,
            "longitude": -9.355336,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962073,
            "ems": null
        },
        {
            "latitude": 38.728317,
            "longitude": -9.356411,
            "altitude": {
                "feet": 200,
                "meters": 61
            },
            "speed": {
                "kmh": 122.2,
                "kts": 66,
                "mph": 76
            },
            "verticalSpeed": {
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962083,
            "ems": null
        },
        {
            "latitude": 38.731415,
            "longitude": -9.357483,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962094,
            "ems": null
        },
        {
            "latitude": 38.731934,
            "longitude": -9.357665,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962096,
            "ems": null
        },
        {
            "latitude": 38.732346,
            "longitude": -9.357788,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626962097,
            "ems": null
        },
        {
            "latitude": 38.732765,
            "longitude": -9.357849,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626962099,
            "ems": null
        },
        {
            "latitude": 38.733276,
            "longitude": -9.357971,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626962100,
            "ems": null
        },
        {
            "latitude": 38.734955,
            "longitude": -9.358441,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962106,
            "ems": null
        },
        {
            "latitude": 38.73674,
            "longitude": -9.358978,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 114.8,
                "kts": 62,
                "mph": 71.3
            },
            "verticalSpeed": {
                "fpm": 896,
                "ms": 4.6
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626962112,
            "ems": null
        },
        {
            "latitude": 38.738937,
            "longitude": -9.359694,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962120,
            "ems": null
        },
        {
            "latitude": 38.740631,
            "longitude": -9.360291,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962125,
            "ems": null
        },
        {
            "latitude": 38.742821,
            "longitude": -9.360718,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626962132,
            "ems": null
        },
        {
            "latitude": 38.74324,
            "longitude": -9.360769,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626962133,
            "ems": null
        },
        {
            "latitude": 38.744751,
            "longitude": -9.361009,
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
                "fpm": 832,
                "ms": 4.2
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626962138,
            "ems": null
        },
        {
            "latitude": 38.74649,
            "longitude": -9.361307,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626962143,
            "ems": null
        },
        {
            "latitude": 38.747131,
            "longitude": -9.361426,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626962145,
            "ems": null
        },
        {
            "latitude": 38.747524,
            "longitude": -9.36145,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626962146,
            "ems": null
        },
        {
            "latitude": 38.748035,
            "longitude": -9.361572,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 353,
            "squawk": "1332",
            "timestamp": 1626962148,
            "ems": null
        },
        {
            "latitude": 38.750549,
            "longitude": -9.362305,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 337,
            "squawk": "1332",
            "timestamp": 1626962156,
            "ems": null
        },
        {
            "latitude": 38.751434,
            "longitude": -9.363098,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 319,
            "squawk": "1332",
            "timestamp": 1626962158,
            "ems": null
        },
        {
            "latitude": 38.752213,
            "longitude": -9.364292,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 304,
            "squawk": "1332",
            "timestamp": 1626962162,
            "ems": null
        },
        {
            "latitude": 38.752781,
            "longitude": -9.36792,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 268,
            "squawk": "1332",
            "timestamp": 1626962169,
            "ems": null
        },
        {
            "latitude": 38.752579,
            "longitude": -9.369368,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 255,
            "squawk": "1332",
            "timestamp": 1626962172,
            "ems": null
        },
        {
            "latitude": 38.752365,
            "longitude": -9.370117,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 249,
            "squawk": "1332",
            "timestamp": 1626962174,
            "ems": null
        },
        {
            "latitude": 38.751385,
            "longitude": -9.372192,
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
            "heading": 234,
            "squawk": "1332",
            "timestamp": 1626962178,
            "ems": null
        },
        {
            "latitude": 38.750969,
            "longitude": -9.372742,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 226,
            "squawk": "1332",
            "timestamp": 1626962179,
            "ems": null
        },
        {
            "latitude": 38.750839,
            "longitude": -9.37295,
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
            "heading": 225,
            "squawk": "1332",
            "timestamp": 1626962180,
            "ems": null
        },
        {
            "latitude": 38.750504,
            "longitude": -9.373291,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 222,
            "squawk": "1332",
            "timestamp": 1626962181,
            "ems": null
        },
        {
            "latitude": 38.749969,
            "longitude": -9.373786,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 216,
            "squawk": "1332",
            "timestamp": 1626962182,
            "ems": null
        },
        {
            "latitude": 38.749741,
            "longitude": -9.373965,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 214,
            "squawk": "1332",
            "timestamp": 1626962183,
            "ems": null
        },
        {
            "latitude": 38.749104,
            "longitude": -9.37439,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 206,
            "squawk": "1332",
            "timestamp": 1626962184,
            "ems": null
        },
        {
            "latitude": 38.748688,
            "longitude": -9.374634,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 202,
            "squawk": "1332",
            "timestamp": 1626962185,
            "ems": null
        },
        {
            "latitude": 38.748001,
            "longitude": -9.374861,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 195,
            "squawk": "1332",
            "timestamp": 1626962187,
            "ems": null
        },
        {
            "latitude": 38.747009,
            "longitude": -9.375061,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 188,
            "squawk": "1332",
            "timestamp": 1626962189,
            "ems": null
        },
        {
            "latitude": 38.746399,
            "longitude": -9.375099,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 184,
            "squawk": "1332",
            "timestamp": 1626962190,
            "ems": null
        },
        {
            "latitude": 38.745708,
            "longitude": -9.375122,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626962192,
            "ems": null
        },
        {
            "latitude": 38.74501,
            "longitude": -9.375061,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626962193,
            "ems": null
        },
        {
            "latitude": 38.744263,
            "longitude": -9.374939,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962195,
            "ems": null
        },
        {
            "latitude": 38.743698,
            "longitude": -9.374742,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962196,
            "ems": null
        },
        {
            "latitude": 38.742233,
            "longitude": -9.374323,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962199,
            "ems": null
        },
        {
            "latitude": 38.741516,
            "longitude": -9.374146,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962201,
            "ems": null
        },
        {
            "latitude": 38.74086,
            "longitude": -9.373965,
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626962202,
            "ems": null
        },
        {
            "latitude": 38.740166,
            "longitude": -9.373779,
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962204,
            "ems": null
        },
        {
            "latitude": 38.7397,
            "longitude": -9.373657,
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962205,
            "ems": null
        },
        {
            "latitude": 38.739029,
            "longitude": -9.373487,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962206,
            "ems": null
        },
        {
            "latitude": 38.738537,
            "longitude": -9.373352,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626962207,
            "ems": null
        },
        {
            "latitude": 38.737427,
            "longitude": -9.37301,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626962210,
            "ems": null
        },
        {
            "latitude": 38.735916,
            "longitude": -9.372651,
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962213,
            "ems": null
        },
        {
            "latitude": 38.734589,
            "longitude": -9.372293,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626962216,
            "ems": null
        },
        {
            "latitude": 38.733372,
            "longitude": -9.37207,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962219,
            "ems": null
        },
        {
            "latitude": 38.732025,
            "longitude": -9.371816,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962222,
            "ems": null
        },
        {
            "latitude": 38.729321,
            "longitude": -9.371216,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962228,
            "ems": null
        },
        {
            "latitude": 38.725479,
            "longitude": -9.370263,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626962237,
            "ems": null
        },
        {
            "latitude": 38.722851,
            "longitude": -9.369751,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962243,
            "ems": null
        },
        {
            "latitude": 38.72015,
            "longitude": -9.369263,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626962250,
            "ems": null
        },
        {
            "latitude": 38.718979,
            "longitude": -9.369128,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626962252,
            "ems": null
        },
        {
            "latitude": 38.717682,
            "longitude": -9.369019,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626962255,
            "ems": null
        },
        {
            "latitude": 38.716415,
            "longitude": -9.36895,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962258,
            "ems": null
        },
        {
            "latitude": 38.715263,
            "longitude": -9.368958,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962261,
            "ems": null
        },
        {
            "latitude": 38.714798,
            "longitude": -9.368958,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626962262,
            "ems": null
        },
        {
            "latitude": 38.71368,
            "longitude": -9.36908,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626962265,
            "ems": null
        },
        {
            "latitude": 38.708725,
            "longitude": -9.369308,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626962276,
            "ems": null
        },
        {
            "latitude": 38.708511,
            "longitude": -9.369324,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626962277,
            "ems": null
        },
        {
            "latitude": 38.707115,
            "longitude": -9.369385,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962280,
            "ems": null
        },
        {
            "latitude": 38.706696,
            "longitude": -9.369385,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626962281,
            "ems": null
        },
        {
            "latitude": 38.705338,
            "longitude": -9.369547,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 184,
            "squawk": "1332",
            "timestamp": 1626962284,
            "ems": null
        },
        {
            "latitude": 38.704147,
            "longitude": -9.369666,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 184,
            "squawk": "1332",
            "timestamp": 1626962287,
            "ems": null
        },
        {
            "latitude": 38.703506,
            "longitude": -9.369666,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626962288,
            "ems": null
        },
        {
            "latitude": 38.702229,
            "longitude": -9.369568,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626962292,
            "ems": null
        },
        {
            "latitude": 38.699806,
            "longitude": -9.36792,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 138,
            "squawk": "1332",
            "timestamp": 1626962298,
            "ems": null
        },
        {
            "latitude": 38.699203,
            "longitude": -9.36692,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 125,
            "squawk": "1332",
            "timestamp": 1626962300,
            "ems": null
        },
        {
            "latitude": 38.698875,
            "longitude": -9.36615,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 117,
            "squawk": "1332",
            "timestamp": 1626962302,
            "ems": null
        },
        {
            "latitude": 38.698597,
            "longitude": -9.365112,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 106,
            "squawk": "1332",
            "timestamp": 1626962304,
            "ems": null
        },
        {
            "latitude": 38.698502,
            "longitude": -9.364563,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 102,
            "squawk": "1332",
            "timestamp": 1626962305,
            "ems": null
        },
        {
            "latitude": 38.698456,
            "longitude": -9.363708,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 96,
            "squawk": "1332",
            "timestamp": 1626962307,
            "ems": null
        },
        {
            "latitude": 38.698456,
            "longitude": -9.362061,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626962310,
            "ems": null
        },
        {
            "latitude": 38.698563,
            "longitude": -9.361247,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 82,
            "squawk": "1332",
            "timestamp": 1626962311,
            "ems": null
        },
        {
            "latitude": 38.698654,
            "longitude": -9.360471,
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
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962312,
            "ems": null
        },
        {
            "latitude": 38.698837,
            "longitude": -9.358859,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962315,
            "ems": null
        },
        {
            "latitude": 38.699066,
            "longitude": -9.357306,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 80,
            "squawk": "1332",
            "timestamp": 1626962318,
            "ems": null
        },
        {
            "latitude": 38.699108,
            "longitude": -9.356812,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962319,
            "ems": null
        },
        {
            "latitude": 38.699158,
            "longitude": -9.35653,
            "altitude": {
                "feet": 800,
                "meters": 244
            },
            "speed": {
                "kmh": 166.7,
                "kts": 90,
                "mph": 103.6
            },
            "verticalSpeed": {
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626962320,
            "ems": null
        },
        {
            "latitude": 38.699295,
            "longitude": -9.355814,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 78,
            "squawk": "1332",
            "timestamp": 1626962321,
            "ems": null
        },
        {
            "latitude": 38.699665,
            "longitude": -9.353699,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626962325,
            "ems": null
        },
        {
            "latitude": 38.699715,
            "longitude": -9.353394,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626962326,
            "ems": null
        },
        {
            "latitude": 38.699947,
            "longitude": -9.352234,
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
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626962328,
            "ems": null
        },
        {
            "latitude": 38.700073,
            "longitude": -9.351275,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626962330,
            "ems": null
        },
        {
            "latitude": 38.70013,
            "longitude": -9.350708,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962332,
            "ems": null
        },
        {
            "latitude": 38.700256,
            "longitude": -9.349724,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962334,
            "ems": null
        },
        {
            "latitude": 38.700394,
            "longitude": -9.348589,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 79,
            "squawk": "1332",
            "timestamp": 1626962336,
            "ems": null
        },
        {
            "latitude": 38.700531,
            "longitude": -9.347754,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 76,
            "squawk": "1332",
            "timestamp": 1626962338,
            "ems": null
        },
        {
            "latitude": 38.700645,
            "longitude": -9.347412,
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
            "heading": 71,
            "squawk": "1332",
            "timestamp": 1626962339,
            "ems": null
        },
        {
            "latitude": 38.700806,
            "longitude": -9.347036,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626962340,
            "ems": null
        },
        {
            "latitude": 38.700897,
            "longitude": -9.346798,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 60,
            "squawk": "1332",
            "timestamp": 1626962341,
            "ems": null
        },
        {
            "latitude": 38.701218,
            "longitude": -9.34638,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 49,
            "squawk": "1332",
            "timestamp": 1626962342,
            "ems": null
        },
        {
            "latitude": 38.702179,
            "longitude": -9.345703,
            "altitude": {
                "feet": 600,
                "meters": 183
            },
            "speed": {
                "kmh": 122.2,
                "kts": 66,
                "mph": 76
            },
            "verticalSpeed": {
                "fpm": -1152,
                "ms": -5.9
            },
            "heading": 20,
            "squawk": "1332",
            "timestamp": 1626962346,
            "ems": null
        },
        {
            "latitude": 38.702866,
            "longitude": -9.345663,
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
                "fpm": -960,
                "ms": -4.9
            },
            "heading": 2,
            "squawk": "1332",
            "timestamp": 1626962348,
            "ems": null
        },
        {
            "latitude": 38.70409,
            "longitude": -9.346252,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 329,
            "squawk": "1332",
            "timestamp": 1626962353,
            "ems": null
        },
        {
            "latitude": 38.704834,
            "longitude": -9.346917,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 324,
            "squawk": "1332",
            "timestamp": 1626962356,
            "ems": null
        },
        {
            "latitude": 38.705338,
            "longitude": -9.347335,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 324,
            "squawk": "1332",
            "timestamp": 1626962358,
            "ems": null
        },
        {
            "latitude": 38.70575,
            "longitude": -9.347693,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 120.4,
                "kts": 65,
                "mph": 74.8
            },
            "verticalSpeed": {
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 327,
            "squawk": "1332",
            "timestamp": 1626962359,
            "ems": null
        },
        {
            "latitude": 38.706436,
            "longitude": -9.348171,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 333,
            "squawk": "1332",
            "timestamp": 1626962362,
            "ems": null
        },
        {
            "latitude": 38.706802,
            "longitude": -9.348351,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "squawk": "1332",
            "timestamp": 1626962363,
            "ems": null
        },
        {
            "latitude": 38.707626,
            "longitude": -9.348768,
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
            "heading": 339,
            "squawk": "1332",
            "timestamp": 1626962366,
            "ems": null
        },
        {
            "latitude": 38.707993,
            "longitude": -9.348887,
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
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626962368,
            "ems": null
        },
        {
            "latitude": 38.708771,
            "longitude": -9.349246,
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962371,
            "ems": null
        },
        {
            "latitude": 38.709164,
            "longitude": -9.349365,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962372,
            "ems": null
        },
        {
            "latitude": 38.709915,
            "longitude": -9.349664,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962375,
            "ems": null
        },
        {
            "latitude": 38.710281,
            "longitude": -9.349792,
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962377,
            "ems": null
        },
        {
            "latitude": 38.710747,
            "longitude": -9.349976,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 103.7,
                "kts": 56,
                "mph": 64.4
            },
            "verticalSpeed": {
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962378,
            "ems": null
        },
        {
            "latitude": 38.711105,
            "longitude": -9.350081,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962380,
            "ems": null
        },
        {
            "latitude": 38.711929,
            "longitude": -9.35044,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962383,
            "ems": null
        },
        {
            "latitude": 38.712654,
            "longitude": -9.350708,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962386,
            "ems": null
        },
        {
            "latitude": 38.713028,
            "longitude": -9.350799,
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962387,
            "ems": null
        },
        {
            "latitude": 38.713352,
            "longitude": -9.350952,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962389,
            "ems": null
        },
        {
            "latitude": 38.713772,
            "longitude": -9.351074,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962390,
            "ems": null
        },
        {
            "latitude": 38.714146,
            "longitude": -9.351196,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962392,
            "ems": null
        },
        {
            "latitude": 38.715633,
            "longitude": -9.351746,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962398,
            "ems": null
        },
        {
            "latitude": 38.717125,
            "longitude": -9.352356,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962404,
            "ems": null
        },
        {
            "latitude": 38.718704,
            "longitude": -9.352888,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962410,
            "ems": null
        },
        {
            "latitude": 38.719986,
            "longitude": -9.353366,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962415,
            "ems": null
        },
        {
            "latitude": 38.721176,
            "longitude": -9.353784,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 74.1,
                "kts": 40,
                "mph": 46
            },
            "verticalSpeed": {
                "fpm": 0,
                "ms": 0
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962421,
            "ems": null
        },
        {
            "latitude": 38.722198,
            "longitude": -9.354187,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "squawk": "1332",
            "timestamp": 1626962427,
            "ems": null
        },
        {
            "latitude": 38.723549,
            "longitude": -9.354675,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962434,
            "ems": null
        },
        {
            "latitude": 38.72493,
            "longitude": -9.355157,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962439,
            "ems": null
        },
        {
            "latitude": 38.727318,
            "longitude": -9.356079,
            "altitude": {
                "feet": 200,
                "meters": 61
            },
            "speed": {
                "kmh": 113,
                "kts": 61,
                "mph": 70.2
            },
            "verticalSpeed": {
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962448,
            "ems": null
        },
        {
            "latitude": 38.729462,
            "longitude": -9.35675,
            "altitude": {
                "feet": 300,
                "meters": 91
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962455,
            "ems": null
        },
        {
            "latitude": 38.731339,
            "longitude": -9.357545,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626962462,
            "ems": null
        },
        {
            "latitude": 38.732986,
            "longitude": -9.358202,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962467,
            "ems": null
        },
        {
            "latitude": 38.73468,
            "longitude": -9.35874,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962473,
            "ems": null
        },
        {
            "latitude": 38.736923,
            "longitude": -9.359396,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626962481,
            "ems": null
        },
        {
            "latitude": 38.738445,
            "longitude": -9.359863,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962486,
            "ems": null
        },
        {
            "latitude": 38.740494,
            "longitude": -9.360352,
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
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626962493,
            "ems": null
        },
        {
            "latitude": 38.741283,
            "longitude": -9.360474,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626962495,
            "ems": null
        },
        {
            "latitude": 38.742401,
            "longitude": -9.360718,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626962499,
            "ems": null
        },
        {
            "latitude": 38.743057,
            "longitude": -9.360829,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626962500,
            "ems": null
        },
        {
            "latitude": 38.745102,
            "longitude": -9.361328,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626962507,
            "ems": null
        },
        {
            "latitude": 38.747269,
            "longitude": -9.361844,
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
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626962513,
            "ems": null
        },
        {
            "latitude": 38.749058,
            "longitude": -9.362366,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626962519,
            "ems": null
        },
        {
            "latitude": 38.749832,
            "longitude": -9.362919,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 324,
            "squawk": "1332",
            "timestamp": 1626962522,
            "ems": null
        },
        {
            "latitude": 38.750565,
            "longitude": -9.364054,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 304,
            "squawk": "1332",
            "timestamp": 1626962525,
            "ems": null
        },
        {
            "latitude": 38.750885,
            "longitude": -9.365188,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 287,
            "squawk": "1332",
            "timestamp": 1626962528,
            "ems": null
        },
        {
            "latitude": 38.750839,
            "longitude": -9.367337,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 261,
            "squawk": "1332",
            "timestamp": 1626962532,
            "ems": null
        },
        {
            "latitude": 38.750828,
            "longitude": -9.367554,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 258,
            "squawk": "1332",
            "timestamp": 1626962533,
            "ems": null
        },
        {
            "latitude": 38.750687,
            "longitude": -9.368103,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 253,
            "squawk": "1332",
            "timestamp": 1626962534,
            "ems": null
        },
        {
            "latitude": 38.750519,
            "longitude": -9.368591,
            "altitude": {
                "feet": 900,
                "meters": 274
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
            "heading": 251,
            "squawk": "1332",
            "timestamp": 1626962535,
            "ems": null
        },
        {
            "latitude": 38.750362,
            "longitude": -9.369019,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 244,
            "squawk": "1332",
            "timestamp": 1626962536,
            "ems": null
        },
        {
            "latitude": 38.75013,
            "longitude": -9.369507,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 240,
            "squawk": "1332",
            "timestamp": 1626962537,
            "ems": null
        },
        {
            "latitude": 38.749557,
            "longitude": -9.370382,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 229,
            "squawk": "1332",
            "timestamp": 1626962539,
            "ems": null
        },
        {
            "latitude": 38.74855,
            "longitude": -9.371398,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 211,
            "squawk": "1332",
            "timestamp": 1626962542,
            "ems": null
        },
        {
            "latitude": 38.748047,
            "longitude": -9.371696,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 206,
            "squawk": "1332",
            "timestamp": 1626962543,
            "ems": null
        },
        {
            "latitude": 38.743984,
            "longitude": -9.371765,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962552,
            "ems": null
        },
        {
            "latitude": 38.742588,
            "longitude": -9.37146,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962555,
            "ems": null
        },
        {
            "latitude": 38.742355,
            "longitude": -9.371399,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962556,
            "ems": null
        },
        {
            "latitude": 38.74189,
            "longitude": -9.371277,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962557,
            "ems": null
        },
        {
            "latitude": 38.740353,
            "longitude": -9.371033,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962560,
            "ems": null
        },
        {
            "latitude": 38.739258,
            "longitude": -9.37086,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962562,
            "ems": null
        },
        {
            "latitude": 38.738525,
            "longitude": -9.370681,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962564,
            "ems": null
        },
        {
            "latitude": 38.737839,
            "longitude": -9.370622,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962565,
            "ems": null
        },
        {
            "latitude": 38.736675,
            "longitude": -9.370483,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626962568,
            "ems": null
        },
        {
            "latitude": 38.735744,
            "longitude": -9.370422,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626962570,
            "ems": null
        },
        {
            "latitude": 38.734955,
            "longitude": -9.370422,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626962571,
            "ems": null
        },
        {
            "latitude": 38.734673,
            "longitude": -9.370361,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626962572,
            "ems": null
        },
        {
            "latitude": 38.734116,
            "longitude": -9.370361,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 179,
            "squawk": "1332",
            "timestamp": 1626962573,
            "ems": null
        },
        {
            "latitude": 38.732765,
            "longitude": -9.370361,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626962576,
            "ems": null
        },
        {
            "latitude": 38.732113,
            "longitude": -9.3703,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626962577,
            "ems": null
        },
        {
            "latitude": 38.731834,
            "longitude": -9.3703,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962578,
            "ems": null
        },
        {
            "latitude": 38.730904,
            "longitude": -9.370239,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962580,
            "ems": null
        },
        {
            "latitude": 38.729507,
            "longitude": -9.370178,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962583,
            "ems": null
        },
        {
            "latitude": 38.729042,
            "longitude": -9.370178,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962584,
            "ems": null
        },
        {
            "latitude": 38.728111,
            "longitude": -9.370117,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962586,
            "ems": null
        },
        {
            "latitude": 38.726807,
            "longitude": -9.370025,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962589,
            "ems": null
        },
        {
            "latitude": 38.723919,
            "longitude": -9.369812,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626962595,
            "ems": null
        },
        {
            "latitude": 38.72015,
            "longitude": -9.369629,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626962604,
            "ems": null
        },
        {
            "latitude": 38.716145,
            "longitude": -9.369202,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626962613,
            "ems": null
        },
        {
            "latitude": 38.71368,
            "longitude": -9.368835,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626962619,
            "ems": null
        },
        {
            "latitude": 38.710186,
            "longitude": -9.368347,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962628,
            "ems": null
        },
        {
            "latitude": 38.70977,
            "longitude": -9.368286,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962629,
            "ems": null
        },
        {
            "latitude": 38.708885,
            "longitude": -9.368164,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962631,
            "ems": null
        },
        {
            "latitude": 38.706089,
            "longitude": -9.367615,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 165,
            "squawk": "1332",
            "timestamp": 1626962637,
            "ems": null
        },
        {
            "latitude": 38.705658,
            "longitude": -9.367397,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 160,
            "squawk": "1332",
            "timestamp": 1626962638,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.366943,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 152,
            "squawk": "1332",
            "timestamp": 1626962640,
            "ems": null
        },
        {
            "latitude": 38.703716,
            "longitude": -9.365662,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 135,
            "squawk": "1332",
            "timestamp": 1626962644,
            "ems": null
        },
        {
            "latitude": 38.702694,
            "longitude": -9.361694,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626962653,
            "ems": null
        },
        {
            "latitude": 38.702728,
            "longitude": -9.360769,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626962655,
            "ems": null
        },
        {
            "latitude": 38.702785,
            "longitude": -9.360413,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 84,
            "squawk": "1332",
            "timestamp": 1626962656,
            "ems": null
        },
        {
            "latitude": 38.702831,
            "longitude": -9.359619,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 83,
            "squawk": "1332",
            "timestamp": 1626962658,
            "ems": null
        },
        {
            "latitude": 38.702866,
            "longitude": -9.359158,
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
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626962659,
            "ems": null
        },
        {
            "latitude": 38.702927,
            "longitude": -9.358337,
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
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626962661,
            "ems": null
        },
        {
            "latitude": 38.703064,
            "longitude": -9.355835,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626962667,
            "ems": null
        },
        {
            "latitude": 38.703049,
            "longitude": -9.355455,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626962668,
            "ems": null
        },
        {
            "latitude": 38.70311,
            "longitude": -9.354553,
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
            "heading": 87,
            "squawk": "1332",
            "timestamp": 1626962670,
            "ems": null
        },
        {
            "latitude": 38.70311,
            "longitude": -9.354187,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626962671,
            "ems": null
        },
        {
            "latitude": 38.703094,
            "longitude": -9.353247,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626962673,
            "ems": null
        },
        {
            "latitude": 38.70311,
            "longitude": -9.352844,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626962674,
            "ems": null
        },
        {
            "latitude": 38.703251,
            "longitude": -9.350159,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626962680,
            "ems": null
        },
        {
            "latitude": 38.703438,
            "longitude": -9.349609,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 67,
            "squawk": "1332",
            "timestamp": 1626962682,
            "ems": null
        },
        {
            "latitude": 38.70369,
            "longitude": -9.349127,
            "altitude": {
                "feet": 600,
                "meters": 183
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
            "heading": 55,
            "squawk": "1332",
            "timestamp": 1626962683,
            "ems": null
        },
        {
            "latitude": 38.704193,
            "longitude": -9.348649,
            "altitude": {
                "feet": 600,
                "meters": 183
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
            "heading": 34,
            "squawk": "1332",
            "timestamp": 1626962685,
            "ems": null
        },
        {
            "latitude": 38.70488,
            "longitude": -9.34829,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 19,
            "squawk": "1332",
            "timestamp": 1626962688,
            "ems": null
        },
        {
            "latitude": 38.705154,
            "longitude": -9.34823,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 19,
            "squawk": "1332",
            "timestamp": 1626962689,
            "ems": null
        },
        {
            "latitude": 38.707535,
            "longitude": -9.348755,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962697,
            "ems": null
        },
        {
            "latitude": 38.707767,
            "longitude": -9.348877,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962698,
            "ems": null
        },
        {
            "latitude": 38.70813,
            "longitude": -9.349007,
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962700,
            "ems": null
        },
        {
            "latitude": 38.708496,
            "longitude": -9.349127,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962701,
            "ems": null
        },
        {
            "latitude": 38.708908,
            "longitude": -9.349246,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962703,
            "ems": null
        },
        {
            "latitude": 38.709641,
            "longitude": -9.349545,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962706,
            "ems": null
        },
        {
            "latitude": 38.709915,
            "longitude": -9.349664,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962707,
            "ems": null
        },
        {
            "latitude": 38.711151,
            "longitude": -9.350142,
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
                "fpm": -832,
                "ms": -4.2
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962712,
            "ems": null
        },
        {
            "latitude": 38.712021,
            "longitude": -9.35044,
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
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962715,
            "ems": null
        },
        {
            "latitude": 38.712284,
            "longitude": -9.350525,
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962716,
            "ems": null
        },
        {
            "latitude": 38.714283,
            "longitude": -9.351257,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962724,
            "ems": null
        },
        {
            "latitude": 38.716331,
            "longitude": -9.352051,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962731,
            "ems": null
        },
        {
            "latitude": 38.718426,
            "longitude": -9.352783,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962739,
            "ems": null
        },
        {
            "latitude": 38.720104,
            "longitude": -9.353394,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962745,
            "ems": null
        },
        {
            "latitude": 38.721588,
            "longitude": -9.353963,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 85.2,
                "kts": 46,
                "mph": 52.9
            },
            "verticalSpeed": {
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962752,
            "ems": null
        },
        {
            "latitude": 38.722523,
            "longitude": -9.354309,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 70.4,
                "kts": 38,
                "mph": 43.7
            },
            "verticalSpeed": {
                "fpm": 0,
                "ms": 0
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962757,
            "ems": null
        },
        {
            "latitude": 38.723595,
            "longitude": -9.354675,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 75.9,
                "kts": 41,
                "mph": 47.2
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962763,
            "ems": null
        },
        {
            "latitude": 38.725224,
            "longitude": -9.355286,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 105.6,
                "kts": 57,
                "mph": 65.6
            },
            "verticalSpeed": {
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626962771,
            "ems": null
        },
        {
            "latitude": 38.728592,
            "longitude": -9.35653,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626962783,
            "ems": null
        },
        {
            "latitude": 38.730789,
            "longitude": -9.357306,
            "altitude": {
                "feet": 300,
                "meters": 91
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962790,
            "ems": null
        },
        {
            "latitude": 38.732674,
            "longitude": -9.35791,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962796,
            "ems": null
        },
        {
            "latitude": 38.735092,
            "longitude": -9.358643,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": 896,
                "ms": 4.6
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626962805,
            "ems": null
        },
        {
            "latitude": 38.736923,
            "longitude": -9.359158,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962811,
            "ems": null
        },
        {
            "latitude": 38.737976,
            "longitude": -9.359456,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962815,
            "ems": null
        },
        {
            "latitude": 38.739048,
            "longitude": -9.359741,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626962819,
            "ems": null
        },
        {
            "latitude": 38.739487,
            "longitude": -9.359755,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626962820,
            "ems": null
        },
        {
            "latitude": 38.740353,
            "longitude": -9.359924,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 352,
            "squawk": "1332",
            "timestamp": 1626962824,
            "ems": null
        },
        {
            "latitude": 38.741089,
            "longitude": -9.360053,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626962826,
            "ems": null
        },
        {
            "latitude": 38.742737,
            "longitude": -9.360412,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626962832,
            "ems": null
        },
        {
            "latitude": 38.744171,
            "longitude": -9.360718,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626962837,
            "ems": null
        },
        {
            "latitude": 38.74585,
            "longitude": -9.361188,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962843,
            "ems": null
        },
        {
            "latitude": 38.746174,
            "longitude": -9.361267,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626962844,
            "ems": null
        },
        {
            "latitude": 38.746811,
            "longitude": -9.361486,
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962846,
            "ems": null
        },
        {
            "latitude": 38.747288,
            "longitude": -9.361633,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962848,
            "ems": null
        },
        {
            "latitude": 38.748035,
            "longitude": -9.361938,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626962850,
            "ems": null
        },
        {
            "latitude": 38.748966,
            "longitude": -9.362244,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626962853,
            "ems": null
        },
        {
            "latitude": 38.750244,
            "longitude": -9.36286,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 334,
            "squawk": "1332",
            "timestamp": 1626962857,
            "ems": null
        },
        {
            "latitude": 38.750931,
            "longitude": -9.363516,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 319,
            "squawk": "1332",
            "timestamp": 1626962860,
            "ems": null
        },
        {
            "latitude": 38.751526,
            "longitude": -9.364563,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 302,
            "squawk": "1332",
            "timestamp": 1626962862,
            "ems": null
        },
        {
            "latitude": 38.751938,
            "longitude": -9.365964,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 286,
            "squawk": "1332",
            "timestamp": 1626962865,
            "ems": null
        },
        {
            "latitude": 38.751945,
            "longitude": -9.366211,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 286,
            "squawk": "1332",
            "timestamp": 1626962866,
            "ems": null
        },
        {
            "latitude": 38.752029,
            "longitude": -9.367517,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 271,
            "squawk": "1332",
            "timestamp": 1626962868,
            "ems": null
        },
        {
            "latitude": 38.751991,
            "longitude": -9.367798,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 268,
            "squawk": "1332",
            "timestamp": 1626962869,
            "ems": null
        },
        {
            "latitude": 38.751938,
            "longitude": -9.368293,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 263,
            "squawk": "1332",
            "timestamp": 1626962870,
            "ems": null
        },
        {
            "latitude": 38.751755,
            "longitude": -9.369248,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 254,
            "squawk": "1332",
            "timestamp": 1626962871,
            "ems": null
        },
        {
            "latitude": 38.751434,
            "longitude": -9.370178,
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
            "heading": 246,
            "squawk": "1332",
            "timestamp": 1626962873,
            "ems": null
        },
        {
            "latitude": 38.751293,
            "longitude": -9.370544,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 249,
            "squawk": "1332",
            "timestamp": 1626962874,
            "ems": null
        },
        {
            "latitude": 38.75106,
            "longitude": -9.371033,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 237,
            "squawk": "1332",
            "timestamp": 1626962875,
            "ems": null
        },
        {
            "latitude": 38.750641,
            "longitude": -9.371643,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 229,
            "squawk": "1332",
            "timestamp": 1626962877,
            "ems": null
        },
        {
            "latitude": 38.749695,
            "longitude": -9.372651,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626962880,
            "ems": null
        },
        {
            "latitude": 38.749146,
            "longitude": -9.37301,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626962881,
            "ems": null
        },
        {
            "latitude": 38.748505,
            "longitude": -9.373308,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 202,
            "squawk": "1332",
            "timestamp": 1626962883,
            "ems": null
        },
        {
            "latitude": 38.747818,
            "longitude": -9.373487,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 192,
            "squawk": "1332",
            "timestamp": 1626962884,
            "ems": null
        },
        {
            "latitude": 38.746452,
            "longitude": -9.373596,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626962887,
            "ems": null
        },
        {
            "latitude": 38.745804,
            "longitude": -9.373487,
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
                "fpm": 192,
                "ms": 1
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962889,
            "ems": null
        },
        {
            "latitude": 38.745148,
            "longitude": -9.373352,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962890,
            "ems": null
        },
        {
            "latitude": 38.743843,
            "longitude": -9.372986,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 166,
            "squawk": "1332",
            "timestamp": 1626962893,
            "ems": null
        },
        {
            "latitude": 38.742966,
            "longitude": -9.372771,
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
            "squawk": "1332",
            "timestamp": 1626962895,
            "ems": null
        },
        {
            "latitude": 38.742371,
            "longitude": -9.372592,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 168,
            "squawk": "1332",
            "timestamp": 1626962897,
            "ems": null
        },
        {
            "latitude": 38.741238,
            "longitude": -9.372375,
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
            "heading": 170,
            "squawk": "1332",
            "timestamp": 1626962899,
            "ems": null
        },
        {
            "latitude": 38.739887,
            "longitude": -9.372131,
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962902,
            "ems": null
        },
        {
            "latitude": 38.73967,
            "longitude": -9.372054,
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962903,
            "ems": null
        },
        {
            "latitude": 38.73848,
            "longitude": -9.371875,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962905,
            "ems": null
        },
        {
            "latitude": 38.737885,
            "longitude": -9.371756,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "squawk": "1332",
            "timestamp": 1626962907,
            "ems": null
        },
        {
            "latitude": 38.737186,
            "longitude": -9.371643,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962908,
            "ems": null
        },
        {
            "latitude": 38.736969,
            "longitude": -9.371576,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962909,
            "ems": null
        },
        {
            "latitude": 38.736328,
            "longitude": -9.371457,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962910,
            "ems": null
        },
        {
            "latitude": 38.736053,
            "longitude": -9.371457,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962911,
            "ems": null
        },
        {
            "latitude": 38.735558,
            "longitude": -9.371338,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962912,
            "ems": null
        },
        {
            "latitude": 38.733604,
            "longitude": -9.371033,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962916,
            "ems": null
        },
        {
            "latitude": 38.732208,
            "longitude": -9.37086,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962919,
            "ems": null
        },
        {
            "latitude": 38.731556,
            "longitude": -9.370728,
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
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626962921,
            "ems": null
        },
        {
            "latitude": 38.728809,
            "longitude": -9.370361,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962927,
            "ems": null
        },
        {
            "latitude": 38.726303,
            "longitude": -9.369905,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626962932,
            "ems": null
        },
        {
            "latitude": 38.723557,
            "longitude": -9.369606,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626962939,
            "ems": null
        },
        {
            "latitude": 38.721313,
            "longitude": -9.369308,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626962944,
            "ems": null
        },
        {
            "latitude": 38.718521,
            "longitude": -9.368958,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626962950,
            "ems": null
        },
        {
            "latitude": 38.717194,
            "longitude": -9.36895,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626962953,
            "ems": null
        },
        {
            "latitude": 38.716278,
            "longitude": -9.369009,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962956,
            "ems": null
        },
        {
            "latitude": 38.715866,
            "longitude": -9.369019,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962957,
            "ems": null
        },
        {
            "latitude": 38.715088,
            "longitude": -9.369069,
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962958,
            "ems": null
        },
        {
            "latitude": 38.713398,
            "longitude": -9.369141,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962962,
            "ems": null
        },
        {
            "latitude": 38.712563,
            "longitude": -9.369141,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 181,
            "squawk": "1332",
            "timestamp": 1626962964,
            "ems": null
        },
        {
            "latitude": 38.711975,
            "longitude": -9.369188,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626962966,
            "ems": null
        },
        {
            "latitude": 38.711258,
            "longitude": -9.369263,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626962968,
            "ems": null
        },
        {
            "latitude": 38.710049,
            "longitude": -9.369385,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 185,
            "squawk": "1332",
            "timestamp": 1626962971,
            "ems": null
        },
        {
            "latitude": 38.709732,
            "longitude": -9.369487,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626962972,
            "ems": null
        },
        {
            "latitude": 38.707901,
            "longitude": -9.369726,
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
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626962977,
            "ems": null
        },
        {
            "latitude": 38.707489,
            "longitude": -9.369785,
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
                "fpm": 320,
                "ms": 1.6
            },
            "heading": 184,
            "squawk": "1332",
            "timestamp": 1626962978,
            "ems": null
        },
        {
            "latitude": 38.704788,
            "longitude": -9.368713,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 141,
            "squawk": "1332",
            "timestamp": 1626962986,
            "ems": null
        },
        {
            "latitude": 38.704147,
            "longitude": -9.367815,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 127,
            "squawk": "1332",
            "timestamp": 1626962989,
            "ems": null
        },
        {
            "latitude": 38.703949,
            "longitude": -9.367371,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 119,
            "squawk": "1332",
            "timestamp": 1626962990,
            "ems": null
        },
        {
            "latitude": 38.703762,
            "longitude": -9.366577,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 105,
            "squawk": "1332",
            "timestamp": 1626962992,
            "ems": null
        },
        {
            "latitude": 38.703716,
            "longitude": -9.366333,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 104,
            "squawk": "1332",
            "timestamp": 1626962993,
            "ems": null
        },
        {
            "latitude": 38.703598,
            "longitude": -9.365248,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 97,
            "squawk": "1332",
            "timestamp": 1626962995,
            "ems": null
        },
        {
            "latitude": 38.703671,
            "longitude": -9.364075,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 83,
            "squawk": "1332",
            "timestamp": 1626962998,
            "ems": null
        },
        {
            "latitude": 38.703671,
            "longitude": -9.363831,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 82,
            "squawk": "1332",
            "timestamp": 1626962999,
            "ems": null
        },
        {
            "latitude": 38.703735,
            "longitude": -9.362979,
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
            "heading": 85,
            "squawk": "1332",
            "timestamp": 1626963001,
            "ems": null
        },
        {
            "latitude": 38.703735,
            "longitude": -9.362561,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626963002,
            "ems": null
        },
        {
            "latitude": 38.703781,
            "longitude": -9.361546,
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
            "heading": 87,
            "squawk": "1332",
            "timestamp": 1626963004,
            "ems": null
        },
        {
            "latitude": 38.703812,
            "longitude": -9.361328,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 87,
            "squawk": "1332",
            "timestamp": 1626963005,
            "ems": null
        },
        {
            "latitude": 38.703781,
            "longitude": -9.360471,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 89,
            "squawk": "1332",
            "timestamp": 1626963007,
            "ems": null
        },
        {
            "latitude": 38.703781,
            "longitude": -9.360053,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626963008,
            "ems": null
        },
        {
            "latitude": 38.703762,
            "longitude": -9.357849,
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
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963013,
            "ems": null
        },
        {
            "latitude": 38.703716,
            "longitude": -9.357422,
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
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626963014,
            "ems": null
        },
        {
            "latitude": 38.70369,
            "longitude": -9.356709,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626963015,
            "ems": null
        },
        {
            "latitude": 38.70369,
            "longitude": -9.35647,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626963016,
            "ems": null
        },
        {
            "latitude": 38.703671,
            "longitude": -9.356262,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626963017,
            "ems": null
        },
        {
            "latitude": 38.703598,
            "longitude": -9.355217,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626963019,
            "ems": null
        },
        {
            "latitude": 38.703484,
            "longitude": -9.352661,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963025,
            "ems": null
        },
        {
            "latitude": 38.703625,
            "longitude": -9.351563,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 77,
            "squawk": "1332",
            "timestamp": 1626963028,
            "ems": null
        },
        {
            "latitude": 38.704102,
            "longitude": -9.35038,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 56,
            "squawk": "1332",
            "timestamp": 1626963031,
            "ems": null
        },
        {
            "latitude": 38.704834,
            "longitude": -9.349548,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 37,
            "squawk": "1332",
            "timestamp": 1626963034,
            "ems": null
        },
        {
            "latitude": 38.706528,
            "longitude": -9.348887,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 4,
            "squawk": "1332",
            "timestamp": 1626963040,
            "ems": null
        },
        {
            "latitude": 38.707397,
            "longitude": -9.349007,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626963043,
            "ems": null
        },
        {
            "latitude": 38.708496,
            "longitude": -9.349246,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963047,
            "ems": null
        },
        {
            "latitude": 38.709118,
            "longitude": -9.349487,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963049,
            "ems": null
        },
        {
            "latitude": 38.709915,
            "longitude": -9.349724,
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
                "fpm": -1024,
                "ms": -5.2
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963052,
            "ems": null
        },
        {
            "latitude": 38.710327,
            "longitude": -9.349843,
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
                "fpm": -1024,
                "ms": -5.2
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963053,
            "ems": null
        },
        {
            "latitude": 38.710884,
            "longitude": -9.350037,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626963055,
            "ems": null
        },
        {
            "latitude": 38.711491,
            "longitude": -9.350281,
            "altitude": {
                "feet": 300,
                "meters": 91
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963057,
            "ems": null
        },
        {
            "latitude": 38.711864,
            "longitude": -9.350403,
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
                "fpm": -768,
                "ms": -3.9
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626963059,
            "ems": null
        },
        {
            "latitude": 38.712795,
            "longitude": -9.350769,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963062,
            "ems": null
        },
        {
            "latitude": 38.713303,
            "longitude": -9.350977,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963064,
            "ems": null
        },
        {
            "latitude": 38.713631,
            "longitude": -9.351074,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963065,
            "ems": null
        },
        {
            "latitude": 38.714127,
            "longitude": -9.351216,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963067,
            "ems": null
        },
        {
            "latitude": 38.714378,
            "longitude": -9.351318,
            "altitude": {
                "feet": 300,
                "meters": 91
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963068,
            "ems": null
        },
        {
            "latitude": 38.714981,
            "longitude": -9.351563,
            "altitude": {
                "feet": 200,
                "meters": 61
            },
            "speed": {
                "kmh": 113,
                "kts": 61,
                "mph": 70.2
            },
            "verticalSpeed": {
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963070,
            "ems": null
        },
        {
            "latitude": 38.715729,
            "longitude": -9.351807,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963073,
            "ems": null
        },
        {
            "latitude": 38.717403,
            "longitude": -9.352417,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626963079,
            "ems": null
        },
        {
            "latitude": 38.719025,
            "longitude": -9.353007,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963085,
            "ems": null
        },
        {
            "latitude": 38.720535,
            "longitude": -9.353545,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 92.6,
                "kts": 50,
                "mph": 57.5
            },
            "verticalSpeed": {
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963092,
            "ems": null
        },
        {
            "latitude": 38.721725,
            "longitude": -9.353963,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963098,
            "ems": null
        },
        {
            "latitude": 38.722664,
            "longitude": -9.354309,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 63,
                "kts": 34,
                "mph": 39.1
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963104,
            "ems": null
        },
        {
            "latitude": 38.723827,
            "longitude": -9.354736,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "squawk": "1332",
            "timestamp": 1626963110,
            "ems": null
        },
        {
            "latitude": 38.725342,
            "longitude": -9.355336,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963116,
            "ems": null
        },
        {
            "latitude": 38.72718,
            "longitude": -9.356018,
            "altitude": {
                "feet": 200,
                "meters": 61
            },
            "speed": {
                "kmh": 116.7,
                "kts": 63,
                "mph": 72.5
            },
            "verticalSpeed": {
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963123,
            "ems": null
        },
        {
            "latitude": 38.729736,
            "longitude": -9.356889,
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963131,
            "ems": null
        },
        {
            "latitude": 38.73151,
            "longitude": -9.357483,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963138,
            "ems": null
        },
        {
            "latitude": 38.732803,
            "longitude": -9.357843,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626963142,
            "ems": null
        },
        {
            "latitude": 38.73349,
            "longitude": -9.358023,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 348,
            "squawk": "1332",
            "timestamp": 1626963145,
            "ems": null
        },
        {
            "latitude": 38.734039,
            "longitude": -9.358142,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 350,
            "squawk": "1332",
            "timestamp": 1626963147,
            "ems": null
        },
        {
            "latitude": 38.734348,
            "longitude": -9.358215,
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
                "fpm": 704,
                "ms": 3.6
            },
            "heading": 351,
            "squawk": "1332",
            "timestamp": 1626963148,
            "ems": null
        },
        {
            "latitude": 38.734859,
            "longitude": -9.358337,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626963150,
            "ems": null
        },
        {
            "latitude": 38.736877,
            "longitude": -9.358918,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626963157,
            "ems": null
        },
        {
            "latitude": 38.738678,
            "longitude": -9.359375,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626963163,
            "ems": null
        },
        {
            "latitude": 38.740631,
            "longitude": -9.359802,
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
                "fpm": 448,
                "ms": 2.3
            },
            "heading": 349,
            "squawk": "1332",
            "timestamp": 1626963170,
            "ems": null
        },
        {
            "latitude": 38.741982,
            "longitude": -9.360168,
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
                "fpm": 576,
                "ms": 2.9
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963175,
            "ems": null
        },
        {
            "latitude": 38.744659,
            "longitude": -9.360949,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963183,
            "ems": null
        },
        {
            "latitude": 38.746639,
            "longitude": -9.36145,
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
                "fpm": 512,
                "ms": 2.6
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963190,
            "ems": null
        },
        {
            "latitude": 38.748825,
            "longitude": -9.362203,
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
                "fpm": 640,
                "ms": 3.3
            },
            "heading": 338,
            "squawk": "1332",
            "timestamp": 1626963197,
            "ems": null
        },
        {
            "latitude": 38.749104,
            "longitude": -9.362427,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 334,
            "squawk": "1332",
            "timestamp": 1626963198,
            "ems": null
        },
        {
            "latitude": 38.749386,
            "longitude": -9.362671,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 326,
            "squawk": "1332",
            "timestamp": 1626963199,
            "ems": null
        },
        {
            "latitude": 38.749649,
            "longitude": -9.362919,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 322,
            "squawk": "1332",
            "timestamp": 1626963200,
            "ems": null
        },
        {
            "latitude": 38.750687,
            "longitude": -9.364807,
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
                "fpm": 0,
                "ms": 0
            },
            "heading": 294,
            "squawk": "1332",
            "timestamp": 1626963205,
            "ems": null
        },
        {
            "latitude": 38.750782,
            "longitude": -9.365295,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 286,
            "squawk": "1332",
            "timestamp": 1626963206,
            "ems": null
        },
        {
            "latitude": 38.750874,
            "longitude": -9.366028,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 276,
            "squawk": "1332",
            "timestamp": 1626963207,
            "ems": null
        },
        {
            "latitude": 38.750427,
            "longitude": -9.368412,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 248,
            "squawk": "1332",
            "timestamp": 1626963212,
            "ems": null
        },
        {
            "latitude": 38.749786,
            "longitude": -9.369666,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 234,
            "squawk": "1332",
            "timestamp": 1626963215,
            "ems": null
        },
        {
            "latitude": 38.749012,
            "longitude": -9.370667,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 221,
            "squawk": "1332",
            "timestamp": 1626963217,
            "ems": null
        },
        {
            "latitude": 38.748638,
            "longitude": -9.371033,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 217,
            "squawk": "1332",
            "timestamp": 1626963218,
            "ems": null
        },
        {
            "latitude": 38.747849,
            "longitude": -9.371582,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 210,
            "squawk": "1332",
            "timestamp": 1626963220,
            "ems": null
        },
        {
            "latitude": 38.746536,
            "longitude": -9.372054,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 192,
            "squawk": "1332",
            "timestamp": 1626963223,
            "ems": null
        },
        {
            "latitude": 38.746311,
            "longitude": -9.37207,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 189,
            "squawk": "1332",
            "timestamp": 1626963224,
            "ems": null
        },
        {
            "latitude": 38.743843,
            "longitude": -9.371948,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626963229,
            "ems": null
        },
        {
            "latitude": 38.743332,
            "longitude": -9.371816,
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
            "heading": 171,
            "squawk": "1332",
            "timestamp": 1626963230,
            "ems": null
        },
        {
            "latitude": 38.741547,
            "longitude": -9.371398,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 169,
            "squawk": "1332",
            "timestamp": 1626963234,
            "ems": null
        },
        {
            "latitude": 38.7397,
            "longitude": -9.371094,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 172,
            "squawk": "1332",
            "timestamp": 1626963238,
            "ems": null
        },
        {
            "latitude": 38.739487,
            "longitude": -9.371039,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626963239,
            "ems": null
        },
        {
            "latitude": 38.736923,
            "longitude": -9.370741,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626963245,
            "ems": null
        },
        {
            "latitude": 38.735413,
            "longitude": -9.370562,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626963248,
            "ems": null
        },
        {
            "latitude": 38.734394,
            "longitude": -9.370422,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626963250,
            "ems": null
        },
        {
            "latitude": 38.733044,
            "longitude": -9.3703,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626963253,
            "ems": null
        },
        {
            "latitude": 38.732811,
            "longitude": -9.3703,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626963254,
            "ems": null
        },
        {
            "latitude": 38.732117,
            "longitude": -9.370263,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626963255,
            "ems": null
        },
        {
            "latitude": 38.731705,
            "longitude": -9.370263,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 177,
            "squawk": "1332",
            "timestamp": 1626963256,
            "ems": null
        },
        {
            "latitude": 38.731323,
            "longitude": -9.370239,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626963257,
            "ems": null
        },
        {
            "latitude": 38.728317,
            "longitude": -9.369845,
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
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626963264,
            "ems": null
        },
        {
            "latitude": 38.725597,
            "longitude": -9.369446,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 174,
            "squawk": "1332",
            "timestamp": 1626963271,
            "ems": null
        },
        {
            "latitude": 38.723145,
            "longitude": -9.369188,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 175,
            "squawk": "1332",
            "timestamp": 1626963278,
            "ems": null
        },
        {
            "latitude": 38.720535,
            "longitude": -9.36895,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 176,
            "squawk": "1332",
            "timestamp": 1626963284,
            "ems": null
        },
        {
            "latitude": 38.718288,
            "longitude": -9.368835,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626963290,
            "ems": null
        },
        {
            "latitude": 38.717728,
            "longitude": -9.368835,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626963291,
            "ems": null
        },
        {
            "latitude": 38.714935,
            "longitude": -9.368713,
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
                "fpm": 384,
                "ms": 2
            },
            "heading": 178,
            "squawk": "1332",
            "timestamp": 1626963298,
            "ems": null
        },
        {
            "latitude": 38.713715,
            "longitude": -9.368711,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 179,
            "squawk": "1332",
            "timestamp": 1626963301,
            "ems": null
        },
        {
            "latitude": 38.712608,
            "longitude": -9.368713,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 180,
            "squawk": "1332",
            "timestamp": 1626963304,
            "ems": null
        },
        {
            "latitude": 38.711723,
            "longitude": -9.368774,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 182,
            "squawk": "1332",
            "timestamp": 1626963307,
            "ems": null
        },
        {
            "latitude": 38.710701,
            "longitude": -9.368835,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626963310,
            "ems": null
        },
        {
            "latitude": 38.710007,
            "longitude": -9.36895,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 186,
            "squawk": "1332",
            "timestamp": 1626963312,
            "ems": null
        },
        {
            "latitude": 38.709,
            "longitude": -9.369069,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 183,
            "squawk": "1332",
            "timestamp": 1626963314,
            "ems": null
        },
        {
            "latitude": 38.707813,
            "longitude": -9.368958,
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
                "fpm": 256,
                "ms": 1.3
            },
            "heading": 173,
            "squawk": "1332",
            "timestamp": 1626963318,
            "ems": null
        },
        {
            "latitude": 38.707024,
            "longitude": -9.368652,
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
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 159,
            "squawk": "1332",
            "timestamp": 1626963320,
            "ems": null
        },
        {
            "latitude": 38.706371,
            "longitude": -9.368164,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 145,
            "squawk": "1332",
            "timestamp": 1626963322,
            "ems": null
        },
        {
            "latitude": 38.706116,
            "longitude": -9.367815,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 139,
            "squawk": "1332",
            "timestamp": 1626963323,
            "ems": null
        },
        {
            "latitude": 38.705811,
            "longitude": -9.367493,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 133,
            "squawk": "1332",
            "timestamp": 1626963325,
            "ems": null
        },
        {
            "latitude": 38.705067,
            "longitude": -9.36554,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 106,
            "squawk": "1332",
            "timestamp": 1626963330,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.364292,
            "altitude": {
                "feet": 800,
                "meters": 244
            },
            "speed": {
                "kmh": 127.8,
                "kts": 69,
                "mph": 79.4
            },
            "verticalSpeed": {
                "fpm": -384,
                "ms": -2
            },
            "heading": 94,
            "squawk": "1332",
            "timestamp": 1626963333,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.363159,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626963335,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.362549,
            "altitude": {
                "feet": 800,
                "meters": 244
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
            "heading": 87,
            "squawk": "1332",
            "timestamp": 1626963337,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.362305,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 88,
            "squawk": "1332",
            "timestamp": 1626963338,
            "ems": null
        },
        {
            "latitude": 38.704971,
            "longitude": -9.361904,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626963339,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.361366,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 90,
            "squawk": "1332",
            "timestamp": 1626963340,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.36084,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626963341,
            "ems": null
        },
        {
            "latitude": 38.704926,
            "longitude": -9.360229,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626963343,
            "ems": null
        },
        {
            "latitude": 38.70488,
            "longitude": -9.359038,
            "altitude": {
                "feet": 700,
                "meters": 213
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
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963346,
            "ems": null
        },
        {
            "latitude": 38.70488,
            "longitude": -9.358826,
            "altitude": {
                "feet": 700,
                "meters": 213
            },
            "speed": {
                "kmh": 122.2,
                "kts": 66,
                "mph": 76
            },
            "verticalSpeed": {
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963347,
            "ems": null
        },
        {
            "latitude": 38.704834,
            "longitude": -9.357843,
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
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963349,
            "ems": null
        },
        {
            "latitude": 38.704834,
            "longitude": -9.357246,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626963351,
            "ems": null
        },
        {
            "latitude": 38.704788,
            "longitude": -9.356812,
            "altitude": {
                "feet": 600,
                "meters": 183
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
            "heading": 93,
            "squawk": "1332",
            "timestamp": 1626963352,
            "ems": null
        },
        {
            "latitude": 38.704742,
            "longitude": -9.355515,
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
                "fpm": -192,
                "ms": -1
            },
            "heading": 92,
            "squawk": "1332",
            "timestamp": 1626963355,
            "ems": null
        },
        {
            "latitude": 38.704742,
            "longitude": -9.355286,
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
                "fpm": -256,
                "ms": -1.3
            },
            "heading": 91,
            "squawk": "1332",
            "timestamp": 1626963356,
            "ems": null
        },
        {
            "latitude": 38.704788,
            "longitude": -9.352231,
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
                "fpm": -384,
                "ms": -2
            },
            "heading": 86,
            "squawk": "1332",
            "timestamp": 1626963364,
            "ems": null
        },
        {
            "latitude": 38.704834,
            "longitude": -9.351515,
            "altitude": {
                "feet": 600,
                "meters": 183
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -384,
                "ms": -2
            },
            "heading": 81,
            "squawk": "1332",
            "timestamp": 1626963365,
            "ems": null
        },
        {
            "latitude": 38.705017,
            "longitude": -9.350799,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 72,
            "squawk": "1332",
            "timestamp": 1626963367,
            "ems": null
        },
        {
            "latitude": 38.7052,
            "longitude": -9.35038,
            "altitude": {
                "feet": 500,
                "meters": 152
            },
            "speed": {
                "kmh": 118.5,
                "kts": 64,
                "mph": 73.6
            },
            "verticalSpeed": {
                "fpm": -384,
                "ms": -2
            },
            "heading": 64,
            "squawk": "1332",
            "timestamp": 1626963369,
            "ems": null
        },
        {
            "latitude": 38.705475,
            "longitude": -9.349902,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 54,
            "squawk": "1332",
            "timestamp": 1626963370,
            "ems": null
        },
        {
            "latitude": 38.705658,
            "longitude": -9.349664,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 45,
            "squawk": "1332",
            "timestamp": 1626963371,
            "ems": null
        },
        {
            "latitude": 38.705887,
            "longitude": -9.349425,
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
                "fpm": -576,
                "ms": -2.9
            },
            "heading": 35,
            "squawk": "1332",
            "timestamp": 1626963372,
            "ems": null
        },
        {
            "latitude": 38.706184,
            "longitude": -9.349243,
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
            "heading": 29,
            "squawk": "1332",
            "timestamp": 1626963373,
            "ems": null
        },
        {
            "latitude": 38.70639,
            "longitude": -9.349127,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 21,
            "squawk": "1332",
            "timestamp": 1626963374,
            "ems": null
        },
        {
            "latitude": 38.706711,
            "longitude": -9.349007,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 16,
            "squawk": "1332",
            "timestamp": 1626963375,
            "ems": null
        },
        {
            "latitude": 38.706985,
            "longitude": -9.348948,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 11,
            "squawk": "1332",
            "timestamp": 1626963376,
            "ems": null
        },
        {
            "latitude": 38.707302,
            "longitude": -9.348938,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 4,
            "squawk": "1332",
            "timestamp": 1626963377,
            "ems": null
        },
        {
            "latitude": 38.707947,
            "longitude": -9.349007,
            "altitude": {
                "feet": 500,
                "meters": 152
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
            "heading": 354,
            "squawk": "1332",
            "timestamp": 1626963380,
            "ems": null
        },
        {
            "latitude": 38.70879,
            "longitude": -9.349304,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626963383,
            "ems": null
        },
        {
            "latitude": 38.709255,
            "longitude": -9.349487,
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
                "fpm": -128,
                "ms": -0.7
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626963384,
            "ems": null
        },
        {
            "latitude": 38.709503,
            "longitude": -9.349604,
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
                "fpm": -320,
                "ms": -1.6
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626963385,
            "ems": null
        },
        {
            "latitude": 38.710052,
            "longitude": -9.349783,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963387,
            "ems": null
        },
        {
            "latitude": 38.710373,
            "longitude": -9.349915,
            "altitude": {
                "feet": 400,
                "meters": 122
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963388,
            "ems": null
        },
        {
            "latitude": 38.711517,
            "longitude": -9.350202,
            "altitude": {
                "feet": 400,
                "meters": 122
            },
            "speed": {
                "kmh": 114.8,
                "kts": 62,
                "mph": 71.3
            },
            "verticalSpeed": {
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 347,
            "squawk": "1332",
            "timestamp": 1626963392,
            "ems": null
        },
        {
            "latitude": 38.712051,
            "longitude": -9.350403,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963394,
            "ems": null
        },
        {
            "latitude": 38.712891,
            "longitude": -9.350739,
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
                "fpm": -448,
                "ms": -2.3
            },
            "heading": 340,
            "squawk": "1332",
            "timestamp": 1626963397,
            "ems": null
        },
        {
            "latitude": 38.713306,
            "longitude": -9.350952,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626963399,
            "ems": null
        },
        {
            "latitude": 38.713577,
            "longitude": -9.351037,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 341,
            "squawk": "1332",
            "timestamp": 1626963400,
            "ems": null
        },
        {
            "latitude": 38.713989,
            "longitude": -9.351216,
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
                "fpm": -512,
                "ms": -2.6
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963401,
            "ems": null
        },
        {
            "latitude": 38.714584,
            "longitude": -9.351396,
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
                "fpm": -704,
                "ms": -3.6
            },
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626963403,
            "ems": null
        },
        {
            "latitude": 38.714859,
            "longitude": -9.351455,
            "altitude": {
                "feet": 200,
                "meters": 61
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
            "heading": 346,
            "squawk": "1332",
            "timestamp": 1626963404,
            "ems": null
        },
        {
            "latitude": 38.71666,
            "longitude": -9.352173,
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
                "fpm": -640,
                "ms": -3.3
            },
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626963411,
            "ems": null
        },
        {
            "latitude": 38.718426,
            "longitude": -9.352783,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963417,
            "ems": null
        },
        {
            "latitude": 38.720535,
            "longitude": -9.353545,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 100,
                "kts": 54,
                "mph": 62.1
            },
            "verticalSpeed": {
                "fpm": 128,
                "ms": 0.7
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963425,
            "ems": null
        },
        {
            "latitude": 38.721733,
            "longitude": -9.354004,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 85.2,
                "kts": 46,
                "mph": 52.9
            },
            "verticalSpeed": {
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963430,
            "ems": null
        },
        {
            "latitude": 38.72287,
            "longitude": -9.354441,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 70.4,
                "kts": 38,
                "mph": 43.7
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963436,
            "ems": null
        },
        {
            "latitude": 38.723873,
            "longitude": -9.354797,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 63,
                "kts": 34,
                "mph": 39.1
            },
            "verticalSpeed": {
                "fpm": 64,
                "ms": 0.3
            },
            "heading": 343,
            "squawk": "1332",
            "timestamp": 1626963443,
            "ems": null
        },
        {
            "latitude": 38.724655,
            "longitude": -9.355038,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 53.7,
                "kts": 29,
                "mph": 33.4
            },
            "verticalSpeed": {
                "fpm": 0,
                "ms": 0
            },
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963448,
            "ems": null
        },
        {
            "latitude": 38.725433,
            "longitude": -9.355336,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 342,
            "squawk": "1332",
            "timestamp": 1626963455,
            "ems": null
        },
        {
            "latitude": 38.726166,
            "longitude": -9.355575,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 345,
            "squawk": "1332",
            "timestamp": 1626963461,
            "ems": null
        },
        {
            "latitude": 38.72662,
            "longitude": -9.355713,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 344,
            "squawk": "1332",
            "timestamp": 1626963468,
            "ems": null
        },
        {
            "latitude": 38.726807,
            "longitude": -9.355469,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 110,
            "squawk": "1332",
            "timestamp": 1626963477,
            "ems": null
        },
        {
            "latitude": 38.726578,
            "longitude": -9.355217,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 150,
            "squawk": "1332",
            "timestamp": 1626963484,
            "ems": null
        },
        {
            "latitude": 38.726295,
            "longitude": -9.355103,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 161,
            "squawk": "1332",
            "timestamp": 1626963489,
            "ems": null
        },
        {
            "latitude": 38.726074,
            "longitude": -9.355038,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 167,
            "squawk": "1332",
            "timestamp": 1626963493,
            "ems": null
        },
        {
            "latitude": 38.725845,
            "longitude": -9.354918,
            "altitude": {
                "feet": 100,
                "meters": 30
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
            "heading": 164,
            "squawk": "1332",
            "timestamp": 1626963496,
            "ems": null
        },
        {
            "latitude": 38.725342,
            "longitude": -9.354798,
            "altitude": {
                "feet": 100,
                "meters": 30
            },
            "speed": {
                "kmh": 33.3,
                "kts": 18,
                "mph": 20.7
            },
            "verticalSpeed": {
                "fpm": -64,
                "ms": -0.3
            },
            "heading": 164,
            "squawk": "1332",
            "timestamp": 1626963503,
            "ems": null
        }
    ],
};