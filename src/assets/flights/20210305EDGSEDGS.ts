import { Flight } from "../../types/Flight";

const flight: Flight = {
  identification: {
    id: "20210305EDGSEDGS",
    callsign: "DEFCZ",
    name: "PPL Mission 21",
    description: "Solo traffic pattern siegerland",
  },
  pilotLog: {
    departure: new Date(2021, 2, 5, 13, 26),
    arrival: new Date(2021, 2, 5, 13, 55),
    singleEnginePistonTime: 29,
    picTime: 29,
    dualTime: 0,
    landings: {
      day: 3,
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
      name: "Siegen Siegerland Airport",
      code: "EDGS",
      position: {
        latitude: 50.707699,
        longitude: 8.08297,
      },
    },
  },
  track: [
    {
      latitude: 50.713531,
      longitude: 8.070127,
      altitude: {
        feet: 2100,
        meters: 640,
      },
      speed: {
        kmh: 144.5,
        kts: 78,
        mph: 89.8,
      },
      verticalSpeed: {
        fpm: 640,
        ms: 3.3,
      },
      heading: 298,
      squawk: "0",
      timestamp: 1614951034,
      ems: null,
    },
    {
      latitude: 50.72168,
      longitude: 8.053275,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 151.9,
        kts: 82,
        mph: 94.4,
      },
      verticalSpeed: {
        fpm: 704,
        ms: 3.6,
      },
      heading: 307,
      squawk: "0",
      timestamp: 1614951071,
      ems: null,
    },
    {
      latitude: 50.721504,
      longitude: 8.044281,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 166.7,
        kts: 90,
        mph: 103.6,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 234,
      squawk: "7000",
      timestamp: 1614951086,
      ems: null,
    },
    {
      latitude: 50.715225,
      longitude: 8.035089,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 220,
      squawk: "7000",
      timestamp: 1614951105,
      ems: null,
    },
    {
      latitude: 50.712799,
      longitude: 8.033218,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 206,
      squawk: "7000",
      timestamp: 1614951111,
      ems: null,
    },
    {
      latitude: 50.708096,
      longitude: 8.036346,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 175.9,
        kts: 95,
        mph: 109.3,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 135,
      squawk: "7000",
      timestamp: 1614951123,
      ems: null,
    },
    {
      latitude: 50.705162,
      longitude: 8.042603,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 174.1,
        kts: 94,
        mph: 108.2,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951134,
      ems: null,
    },
    {
      latitude: 50.702324,
      longitude: 8.048172,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 174.1,
        kts: 94,
        mph: 108.2,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 129,
      squawk: "7000",
      timestamp: 1614951145,
      ems: null,
    },
    {
      latitude: 50.696411,
      longitude: 8.059692,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 126,
      squawk: "7000",
      timestamp: 1614951165,
      ems: null,
    },
    {
      latitude: 50.695038,
      longitude: 8.062778,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951170,
      ems: null,
    },
    {
      latitude: 50.694084,
      longitude: 8.065033,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 123,
      squawk: "7000",
      timestamp: 1614951174,
      ems: null,
    },
    {
      latitude: 50.692612,
      longitude: 8.068493,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: 128,
        ms: 0.7,
      },
      heading: 122,
      squawk: "7000",
      timestamp: 1614951180,
      ems: null,
    },
    {
      latitude: 50.690594,
      longitude: 8.072891,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951187,
      ems: null,
    },
    {
      latitude: 50.688721,
      longitude: 8.077104,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951194,
      ems: null,
    },
    {
      latitude: 50.684914,
      longitude: 8.085556,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 146.3,
        kts: 79,
        mph: 90.9,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 130,
      squawk: "7000",
      timestamp: 1614951210,
      ems: null,
    },
    {
      latitude: 50.679703,
      longitude: 8.093881,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 135,
      squawk: "7000",
      timestamp: 1614951234,
      ems: null,
    },
    {
      latitude: 50.676346,
      longitude: 8.100586,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 124.1,
        kts: 67,
        mph: 77.1,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951252,
      ems: null,
    },
    {
      latitude: 50.67865,
      longitude: 8.116892,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 24,
      squawk: "7000",
      timestamp: 1614951297,
      ems: null,
    },
    {
      latitude: 50.684074,
      longitude: 8.121414,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 13,
      squawk: "7000",
      timestamp: 1614951319,
      ems: null,
    },
    {
      latitude: 50.686249,
      longitude: 8.121346,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 129.6,
        kts: 70,
        mph: 80.6,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 352,
      squawk: "7000",
      timestamp: 1614951326,
      ems: null,
    },
    {
      latitude: 50.688313,
      longitude: 8.119888,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 122.2,
        kts: 66,
        mph: 76,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 327,
      squawk: "7000",
      timestamp: 1614951333,
      ems: null,
    },
    {
      latitude: 50.696915,
      longitude: 8.104644,
      altitude: {
        feet: 2000,
        meters: 610,
      },
      speed: {
        kmh: 116.7,
        kts: 63,
        mph: 72.5,
      },
      verticalSpeed: {
        fpm: -960,
        ms: -4.9,
      },
      heading: 309,
      squawk: "7000",
      timestamp: 1614951375,
      ems: null,
    },
    {
      latitude: 50.70982,
      longitude: 8.078461,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 124.1,
        kts: 67,
        mph: 77.1,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 306,
      squawk: "7000",
      timestamp: 1614951451,
      ems: null,
    },
    {
      latitude: 50.718571,
      longitude: 8.061676,
      altitude: {
        feet: 2300,
        meters: 701,
      },
      speed: {
        kmh: 144.5,
        kts: 78,
        mph: 89.8,
      },
      verticalSpeed: {
        fpm: 896,
        ms: 4.6,
      },
      heading: 310,
      squawk: "7000",
      timestamp: 1614951494,
      ems: null,
    },
    {
      latitude: 50.722183,
      longitude: 8.055205,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 127.8,
        kts: 69,
        mph: 79.4,
      },
      verticalSpeed: {
        fpm: 1152,
        ms: 5.9,
      },
      heading: 308,
      squawk: "7000",
      timestamp: 1614951510,
      ems: null,
    },
    {
      latitude: 50.723465,
      longitude: 8.050306,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 146.3,
        kts: 79,
        mph: 90.9,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 271,
      squawk: "7000",
      timestamp: 1614951520,
      ems: null,
    },
    {
      latitude: 50.721222,
      longitude: 8.044888,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 177.8,
        kts: 96,
        mph: 110.5,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 219,
      squawk: "7000",
      timestamp: 1614951530,
      ems: null,
    },
    {
      latitude: 50.719162,
      longitude: 8.042512,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 215,
      squawk: "7000",
      timestamp: 1614951536,
      ems: null,
    },
    {
      latitude: 50.713264,
      longitude: 8.036118,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 187.1,
        kts: 101,
        mph: 116.2,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 214,
      squawk: "7000",
      timestamp: 1614951551,
      ems: null,
    },
    {
      latitude: 50.708515,
      longitude: 8.035812,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 159,
      squawk: "7000",
      timestamp: 1614951561,
      ems: null,
    },
    {
      latitude: 50.705208,
      longitude: 8.041,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 177.8,
        kts: 96,
        mph: 110.5,
      },
      verticalSpeed: {
        fpm: 128,
        ms: 0.7,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951572,
      ems: null,
    },
    {
      latitude: 50.702091,
      longitude: 8.048096,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951584,
      ems: null,
    },
    {
      latitude: 50.701584,
      longitude: 8.049192,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951586,
      ems: null,
    },
    {
      latitude: 50.699249,
      longitude: 8.054166,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 126,
      squawk: "7000",
      timestamp: 1614951595,
      ems: null,
    },
    {
      latitude: 50.697109,
      longitude: 8.058777,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 126,
      squawk: "7000",
      timestamp: 1614951602,
      ems: null,
    },
    {
      latitude: 50.694763,
      longitude: 8.063816,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 179.6,
        kts: 97,
        mph: 111.6,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951611,
      ems: null,
    },
    {
      latitude: 50.693527,
      longitude: 8.066415,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 174.1,
        kts: 94,
        mph: 108.2,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 127,
      squawk: "7000",
      timestamp: 1614951616,
      ems: null,
    },
    {
      latitude: 50.691662,
      longitude: 8.070297,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 172.2,
        kts: 93,
        mph: 107,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 125,
      squawk: "7000",
      timestamp: 1614951623,
      ems: null,
    },
    {
      latitude: 50.690277,
      longitude: 8.073466,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 174.1,
        kts: 94,
        mph: 108.2,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951629,
      ems: null,
    },
    {
      latitude: 50.688309,
      longitude: 8.077772,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 174.1,
        kts: 94,
        mph: 108.2,
      },
      verticalSpeed: {
        fpm: 128,
        ms: 0.7,
      },
      heading: 124,
      squawk: "7000",
      timestamp: 1614951637,
      ems: null,
    },
    {
      latitude: 50.684261,
      longitude: 8.085022,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 131.5,
        kts: 71,
        mph: 81.7,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 134,
      squawk: "7000",
      timestamp: 1614951653,
      ems: null,
    },
    {
      latitude: 50.67659,
      longitude: 8.100412,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 125.9,
        kts: 68,
        mph: 78.3,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 127,
      squawk: "7000",
      timestamp: 1614951692,
      ems: null,
    },
    {
      latitude: 50.672791,
      longitude: 8.110137,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 125.9,
        kts: 68,
        mph: 78.3,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 84,
      squawk: "7000",
      timestamp: 1614951716,
      ems: null,
    },
    {
      latitude: 50.677418,
      longitude: 8.120422,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 101.9,
        kts: 55,
        mph: 63.3,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 49,
      squawk: "7000",
      timestamp: 1614951746,
      ems: null,
    },
    {
      latitude: 50.677696,
      longitude: 8.120804,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1614951748,
      ems: null,
    },
    {
      latitude: 50.67865,
      longitude: 8.12194,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 105.6,
        kts: 57,
        mph: 65.6,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 35,
      squawk: "7000",
      timestamp: 1614951752,
      ems: null,
    },
    {
      latitude: 50.681488,
      longitude: 8.124538,
      altitude: {
        feet: 2800,
        meters: 853,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 26,
      squawk: "7000",
      timestamp: 1614951765,
      ems: null,
    },
    {
      latitude: 50.687714,
      longitude: 8.121792,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 116.7,
        kts: 63,
        mph: 72.5,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 327,
      squawk: "7000",
      timestamp: 1614951788,
      ems: null,
    },
    {
      latitude: 50.689087,
      longitude: 8.12001,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 111.1,
        kts: 60,
        mph: 69,
      },
      verticalSpeed: {
        fpm: -1024,
        ms: -5.2,
      },
      heading: 318,
      squawk: "7000",
      timestamp: 1614951795,
      ems: null,
    },
    {
      latitude: 50.690277,
      longitude: 8.117709,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 118.5,
        kts: 64,
        mph: 73.6,
      },
      verticalSpeed: {
        fpm: -1024,
        ms: -5.2,
      },
      heading: 308,
      squawk: "7000",
      timestamp: 1614951801,
      ems: null,
    },
    {
      latitude: 50.714722,
      longitude: 8.068716,
      altitude: {
        feet: 2100,
        meters: 640,
      },
      speed: {
        kmh: 118.5,
        kts: 64,
        mph: 73.6,
      },
      verticalSpeed: {
        fpm: 896,
        ms: 4.6,
      },
      heading: 314,
      squawk: "7000",
      timestamp: 1614951940,
      ems: null,
    },
    {
      latitude: 50.71582,
      longitude: 8.067082,
      altitude: {
        feet: 2100,
        meters: 640,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: 896,
        ms: 4.6,
      },
      heading: 315,
      squawk: "7000",
      timestamp: 1614951945,
      ems: null,
    },
    {
      latitude: 50.718018,
      longitude: 8.063594,
      altitude: {
        feet: 2300,
        meters: 701,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: 1088,
        ms: 5.5,
      },
      heading: 313,
      squawk: "7000",
      timestamp: 1614951956,
      ems: null,
    },
    {
      latitude: 50.722458,
      longitude: 8.055205,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 122.2,
        kts: 66,
        mph: 76,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 310,
      squawk: "7000",
      timestamp: 1614951979,
      ems: null,
    },
    {
      latitude: 50.721085,
      longitude: 8.042512,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 207,
      squawk: "7000",
      timestamp: 1614952004,
      ems: null,
    },
    {
      latitude: 50.719036,
      longitude: 8.040924,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 185.2,
        kts: 100,
        mph: 115.1,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 206,
      squawk: "7000",
      timestamp: 1614952010,
      ems: null,
    },
    {
      latitude: 50.718105,
      longitude: 8.040237,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 187.1,
        kts: 101,
        mph: 116.2,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 206,
      squawk: "7000",
      timestamp: 1614952012,
      ems: null,
    },
    {
      latitude: 50.707993,
      longitude: 8.03739,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 194.5,
        kts: 105,
        mph: 120.8,
      },
      verticalSpeed: {
        fpm: -320,
        ms: -1.6,
      },
      heading: 148,
      squawk: "7000",
      timestamp: 1614952034,
      ems: null,
    },
    {
      latitude: 50.689911,
      longitude: 8.073912,
      altitude: {
        feet: 2700,
        meters: 823,
      },
      speed: {
        kmh: 181.5,
        kts: 98,
        mph: 112.8,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 132,
      squawk: "7000",
      timestamp: 1614952098,
      ems: null,
    },
    {
      latitude: 50.67979,
      longitude: 8.091125,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 127.8,
        kts: 69,
        mph: 79.4,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 127,
      squawk: "7000",
      timestamp: 1614952137,
      ems: null,
    },
    {
      latitude: 50.678116,
      longitude: 8.095093,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 129.6,
        kts: 70,
        mph: 80.6,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 122,
      squawk: "7000",
      timestamp: 1614952146,
      ems: null,
    },
    {
      latitude: 50.675629,
      longitude: 8.101748,
      altitude: {
        feet: 2600,
        meters: 792,
      },
      speed: {
        kmh: 124.1,
        kts: 67,
        mph: 77.1,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 117,
      squawk: "7000",
      timestamp: 1614952162,
      ems: null,
    },
    {
      latitude: 50.674118,
      longitude: 8.106723,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 125.9,
        kts: 68,
        mph: 78.3,
      },
      verticalSpeed: {
        fpm: -320,
        ms: -1.6,
      },
      heading: 107,
      squawk: "7000",
      timestamp: 1614952173,
      ems: null,
    },
    {
      latitude: 50.67421,
      longitude: 8.111028,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 73,
      squawk: "7000",
      timestamp: 1614952182,
      ems: null,
    },
    {
      latitude: 50.674763,
      longitude: 8.112793,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 69,
      squawk: "7000",
      timestamp: 1614952187,
      ems: null,
    },
    {
      latitude: 50.676487,
      longitude: 8.115463,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 36,
      squawk: "7000",
      timestamp: 1614952196,
      ems: null,
    },
    {
      latitude: 50.677231,
      longitude: 8.116302,
      altitude: {
        feet: 2500,
        meters: 762,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 34,
      squawk: "7000",
      timestamp: 1614952199,
      ems: null,
    },
    {
      latitude: 50.68277,
      longitude: 8.121717,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 25,
      squawk: "7000",
      timestamp: 1614952221,
      ems: null,
    },
    {
      latitude: 50.683701,
      longitude: 8.12233,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 22,
      squawk: "7000",
      timestamp: 1614952225,
      ems: null,
    },
    {
      latitude: 50.684418,
      longitude: 8.122608,
      altitude: {
        feet: 2400,
        meters: 732,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 14,
      squawk: "7000",
      timestamp: 1614952227,
      ems: null,
    },
    {
      latitude: 50.688728,
      longitude: 8.120499,
      altitude: {
        feet: 2300,
        meters: 701,
      },
      speed: {
        kmh: 129.6,
        kts: 70,
        mph: 80.6,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 319,
      squawk: "7000",
      timestamp: 1614952243,
      ems: null,
    },
  ],
};

export default flight;
