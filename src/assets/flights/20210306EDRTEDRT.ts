import { Flight } from "../../types/Flight";

const flight: Flight = {
  identification: {
    id: "20210306ERTBEDRT",
    callsign: "DEFCZ",
    name: "PPL Mission 23",
    description: "Cross country to Trier",
  },
  pilotLog: {
    departure: new Date(2021, 2, 6, 14, 39),
    arrival: new Date(2021, 2, 6, 15, 8),
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
      name: "Trier Fohren Airport",
      code: "EDRT",
      position: {
        latitude: 49.863335,
        longitude: 6.788056,
      },
    },
    destination: {
      name: "Trier Fohren Airport",
      code: "EDRT",
      position: {
        latitude: 49.863335,
        longitude: 6.788056,
      },
    },
  },
  track: [
    {
      latitude: 49.864243,
      longitude: 6.788033,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 118.5,
        kts: 64,
        mph: 73.6,
      },
      verticalSpeed: {
        fpm: 576,
        ms: 2.9,
      },
      heading: 43,
      squawk: "0",
      timestamp: 1615041834,
      ems: null,
    },
    {
      latitude: 49.866478,
      longitude: 6.790961,
      altitude: {
        feet: 500,
        meters: 152,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: 1152,
        ms: 5.9,
      },
      heading: 40,
      squawk: "0",
      timestamp: 1615041844,
      ems: null,
    },
    {
      latitude: 49.868946,
      longitude: 6.795712,
      altitude: {
        feet: 800,
        meters: 244,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: 1024,
        ms: 5.2,
      },
      heading: 72,
      squawk: "0",
      timestamp: 1615041859,
      ems: null,
    },
    {
      latitude: 49.869186,
      longitude: 6.797935,
      altitude: {
        feet: 900,
        meters: 274,
      },
      speed: {
        kmh: 105.6,
        kts: 57,
        mph: 65.6,
      },
      verticalSpeed: {
        fpm: 1024,
        ms: 5.2,
      },
      heading: 82,
      squawk: "0",
      timestamp: 1615041864,
      ems: null,
    },
    {
      latitude: 49.869316,
      longitude: 6.811301,
      altitude: {
        feet: 1200,
        meters: 366,
      },
      speed: {
        kmh: 116.7,
        kts: 63,
        mph: 72.5,
      },
      verticalSpeed: {
        fpm: 832,
        ms: 4.2,
      },
      heading: 91,
      squawk: "0",
      timestamp: 1615041894,
      ems: null,
    },
    {
      latitude: 49.869049,
      longitude: 6.820631,
      altitude: {
        feet: 1500,
        meters: 457,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: 576,
        ms: 2.9,
      },
      heading: 90,
      squawk: "7000",
      timestamp: 1615041915,
      ems: null,
    },
    {
      latitude: 49.869038,
      longitude: 6.825182,
      altitude: {
        feet: 1500,
        meters: 457,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: 384,
        ms: 2,
      },
      heading: 90,
      squawk: "7000",
      timestamp: 1615041926,
      ems: null,
    },
    {
      latitude: 49.868637,
      longitude: 6.834219,
      altitude: {
        feet: 1700,
        meters: 518,
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
      heading: 107,
      squawk: "7000",
      timestamp: 1615041947,
      ems: null,
    },
    {
      latitude: 49.866802,
      longitude: 6.83847,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 138.9,
        kts: 75,
        mph: 86.3,
      },
      verticalSpeed: {
        fpm: 448,
        ms: 2.3,
      },
      heading: 130,
      squawk: "7000",
      timestamp: 1615041957,
      ems: null,
    },
    {
      latitude: 49.86364,
      longitude: 6.841439,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 164.8,
        kts: 89,
        mph: 102.4,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 173,
      squawk: "7000",
      timestamp: 1615041967,
      ems: null,
    },
    {
      latitude: 49.859028,
      longitude: 6.837208,
      altitude: {
        feet: 1700,
        meters: 518,
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
      heading: 222,
      squawk: "7000",
      timestamp: 1615041979,
      ems: null,
    },
    {
      latitude: 49.854702,
      longitude: 6.830304,
      altitude: {
        feet: 1800,
        meters: 549,
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
      heading: 226,
      squawk: "7000",
      timestamp: 1615041992,
      ems: null,
    },
    {
      latitude: 49.853535,
      longitude: 6.8283,
      altitude: {
        feet: 1800,
        meters: 549,
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
      heading: 227,
      squawk: "7000",
      timestamp: 1615041997,
      ems: null,
    },
    {
      latitude: 49.848038,
      longitude: 6.819474,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 187.1,
        kts: 101,
        mph: 116.2,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 226,
      squawk: "7000",
      timestamp: 1615042013,
      ems: null,
    },
    {
      latitude: 49.842457,
      longitude: 6.810336,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 187.1,
        kts: 101,
        mph: 116.2,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 222,
      squawk: "7000",
      timestamp: 1615042031,
      ems: null,
    },
    {
      latitude: 49.835892,
      longitude: 6.801651,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 183.3,
        kts: 99,
        mph: 113.9,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 221,
      squawk: "7000",
      timestamp: 1615042049,
      ems: null,
    },
    {
      latitude: 49.832867,
      longitude: 6.796677,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 161.1,
        kts: 87,
        mph: 100.1,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 231,
      squawk: "7000",
      timestamp: 1615042060,
      ems: null,
    },
    {
      latitude: 49.829514,
      longitude: 6.789254,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 140.8,
        kts: 76,
        mph: 87.5,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 236,
      squawk: "7000",
      timestamp: 1615042075,
      ems: null,
    },
    {
      latitude: 49.828537,
      longitude: 6.786879,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 144.5,
        kts: 78,
        mph: 89.8,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 241,
      squawk: "7000",
      timestamp: 1615042081,
      ems: null,
    },
    {
      latitude: 49.8284,
      longitude: 6.78094,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 155.6,
        kts: 84,
        mph: 96.7,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 286,
      squawk: "7000",
      timestamp: 1615042091,
      ems: null,
    },
    {
      latitude: 49.830307,
      longitude: 6.775818,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 142.6,
        kts: 77,
        mph: 88.6,
      },
      verticalSpeed: {
        fpm: -320,
        ms: -1.6,
      },
      heading: 302,
      squawk: "7000",
      timestamp: 1615042101,
      ems: null,
    },
    {
      latitude: 49.832382,
      longitude: 6.771265,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 137,
        kts: 74,
        mph: 85.2,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 305,
      squawk: "7000",
      timestamp: 1615042111,
      ems: null,
    },
    {
      latitude: 49.834534,
      longitude: 6.766928,
      altitude: {
        feet: 1500,
        meters: 457,
      },
      speed: {
        kmh: 137,
        kts: 74,
        mph: 85.2,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 309,
      squawk: "7000",
      timestamp: 1615042122,
      ems: null,
    },
    {
      latitude: 49.84404,
      longitude: 6.760081,
      altitude: {
        feet: 1100,
        meters: 335,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: -640,
        ms: -3.3,
      },
      heading: 24,
      squawk: "7000",
      timestamp: 1615042158,
      ems: null,
    },
    {
      latitude: 49.846207,
      longitude: 6.762735,
      altitude: {
        feet: 1000,
        meters: 305,
      },
      speed: {
        kmh: 103.7,
        kts: 56,
        mph: 64.4,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042168,
      ems: null,
    },
    {
      latitude: 49.848228,
      longitude: 6.7655,
      altitude: {
        feet: 900,
        meters: 274,
      },
      speed: {
        kmh: 105.6,
        kts: 57,
        mph: 65.6,
      },
      verticalSpeed: {
        fpm: -832,
        ms: -4.2,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042178,
      ems: null,
    },
    {
      latitude: 49.849274,
      longitude: 6.766928,
      altitude: {
        feet: 800,
        meters: 244,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042184,
      ems: null,
    },
    {
      latitude: 49.852325,
      longitude: 6.77129,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 39,
      squawk: "7000",
      timestamp: 1615042199,
      ems: null,
    },
    {
      latitude: 49.854515,
      longitude: 6.774185,
      altitude: {
        feet: 500,
        meters: 152,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -832,
        ms: -4.2,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042209,
      ems: null,
    },
    {
      latitude: 49.855453,
      longitude: 6.775601,
      altitude: {
        feet: 500,
        meters: 152,
      },
      speed: {
        kmh: 111.1,
        kts: 60,
        mph: 69,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615042215,
      ems: null,
    },
    {
      latitude: 49.857651,
      longitude: 6.778709,
      altitude: {
        feet: 400,
        meters: 122,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042225,
      ems: null,
    },
    {
      latitude: 49.859894,
      longitude: 6.781889,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 103.7,
        kts: 56,
        mph: 64.4,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042237,
      ems: null,
    },
    {
      latitude: 49.865067,
      longitude: 6.789045,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: 384,
        ms: 2,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042266,
      ems: null,
    },
    {
      latitude: 49.866245,
      longitude: 6.790664,
      altitude: {
        feet: 400,
        meters: 122,
      },
      speed: {
        kmh: 116.7,
        kts: 63,
        mph: 72.5,
      },
      verticalSpeed: {
        fpm: 1152,
        ms: 5.9,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615042271,
      ems: null,
    },
    {
      latitude: 49.868385,
      longitude: 6.793559,
      altitude: {
        feet: 500,
        meters: 152,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: 832,
        ms: 4.2,
      },
      heading: 39,
      squawk: "7000",
      timestamp: 1615042281,
      ems: null,
    },
    {
      latitude: 49.870899,
      longitude: 6.798681,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: 512,
        ms: 2.6,
      },
      heading: 84,
      squawk: "7000",
      timestamp: 1615042297,
      ems: null,
    },
    {
      latitude: 49.870514,
      longitude: 6.805163,
      altitude: {
        feet: 1000,
        meters: 305,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: 960,
        ms: 4.9,
      },
      heading: 93,
      squawk: "7000",
      timestamp: 1615042313,
      ems: null,
    },
    {
      latitude: 49.870342,
      longitude: 6.812489,
      altitude: {
        feet: 1100,
        meters: 335,
      },
      speed: {
        kmh: 133.3,
        kts: 72,
        mph: 82.9,
      },
      verticalSpeed: {
        fpm: 640,
        ms: 3.3,
      },
      heading: 89,
      squawk: "7000",
      timestamp: 1615042328,
      ems: null,
    },
    {
      latitude: 49.870762,
      longitude: 6.829339,
      altitude: {
        feet: 1500,
        meters: 457,
      },
      speed: {
        kmh: 122.2,
        kts: 66,
        mph: 76,
      },
      verticalSpeed: {
        fpm: 896,
        ms: 4.6,
      },
      heading: 86,
      squawk: "7000",
      timestamp: 1615042359,
      ems: null,
    },
    {
      latitude: 49.870995,
      longitude: 6.833941,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: 320,
        ms: 1.6,
      },
      heading: 88,
      squawk: "7000",
      timestamp: 1615042370,
      ems: null,
    },
    {
      latitude: 49.863647,
      longitude: 6.843832,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 179.6,
        kts: 97,
        mph: 111.6,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 197,
      squawk: "7000",
      timestamp: 1615042401,
      ems: null,
    },
    {
      latitude: 49.852066,
      longitude: 6.825184,
      altitude: {
        feet: 1800,
        meters: 549,
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
      heading: 228,
      squawk: "7000",
      timestamp: 1615042437,
      ems: null,
    },
    {
      latitude: 49.84874,
      longitude: 6.819911,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 179.6,
        kts: 97,
        mph: 111.6,
      },
      verticalSpeed: {
        fpm: 128,
        ms: 0.7,
      },
      heading: 225,
      squawk: "7000",
      timestamp: 1615042447,
      ems: null,
    },
    {
      latitude: 49.845474,
      longitude: 6.815137,
      altitude: {
        feet: 1800,
        meters: 549,
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
      heading: 222,
      squawk: "7000",
      timestamp: 1615042457,
      ems: null,
    },
    {
      latitude: 49.842037,
      longitude: 6.810113,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 177.8,
        kts: 96,
        mph: 110.5,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 225,
      squawk: "7000",
      timestamp: 1615042468,
      ems: null,
    },
    {
      latitude: 49.834915,
      longitude: 6.798013,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 142.6,
        kts: 77,
        mph: 88.6,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 228,
      squawk: "7000",
      timestamp: 1615042494,
      ems: null,
    },
    {
      latitude: 49.832748,
      longitude: 6.794104,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 137,
        kts: 74,
        mph: 85.2,
      },
      verticalSpeed: {
        fpm: -256,
        ms: -1.3,
      },
      heading: 230,
      squawk: "7000",
      timestamp: 1615042503,
      ems: null,
    },
    {
      latitude: 49.830261,
      longitude: 6.789402,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 138.9,
        kts: 75,
        mph: 86.3,
      },
      verticalSpeed: {
        fpm: -128,
        ms: -0.7,
      },
      heading: 232,
      squawk: "7000",
      timestamp: 1615042515,
      ems: null,
    },
    {
      latitude: 49.829422,
      longitude: 6.786952,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 146.3,
        kts: 79,
        mph: 90.9,
      },
      verticalSpeed: {
        fpm: -448,
        ms: -2.3,
      },
      heading: 250,
      squawk: "7000",
      timestamp: 1615042520,
      ems: null,
    },
    {
      latitude: 49.829269,
      longitude: 6.783841,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 148.2,
        kts: 80,
        mph: 92.1,
      },
      verticalSpeed: {
        fpm: -512,
        ms: -2.6,
      },
      heading: 272,
      squawk: "7000",
      timestamp: 1615042525,
      ems: null,
    },
    {
      latitude: 49.829746,
      longitude: 6.78094,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 148.2,
        kts: 80,
        mph: 92.1,
      },
      verticalSpeed: {
        fpm: 128,
        ms: 0.7,
      },
      heading: 289,
      squawk: "7000",
      timestamp: 1615042530,
      ems: null,
    },
    {
      latitude: 49.830494,
      longitude: 6.778342,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 140.8,
        kts: 76,
        mph: 87.5,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 295,
      squawk: "7000",
      timestamp: 1615042536,
      ems: null,
    },
    {
      latitude: 49.834126,
      longitude: 6.768394,
      altitude: {
        feet: 1500,
        meters: 457,
      },
      speed: {
        kmh: 137,
        kts: 74,
        mph: 85.2,
      },
      verticalSpeed: {
        fpm: -448,
        ms: -2.3,
      },
      heading: 304,
      squawk: "7000",
      timestamp: 1615042556,
      ems: null,
    },
    {
      latitude: 49.835148,
      longitude: 6.766168,
      altitude: {
        feet: 1400,
        meters: 427,
      },
      speed: {
        kmh: 137,
        kts: 74,
        mph: 85.2,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 308,
      squawk: "7000",
      timestamp: 1615042562,
      ems: null,
    },
    {
      latitude: 49.838928,
      longitude: 6.760929,
      altitude: {
        feet: 1300,
        meters: 396,
      },
      speed: {
        kmh: 138.9,
        kts: 75,
        mph: 86.3,
      },
      verticalSpeed: {
        fpm: -768,
        ms: -3.9,
      },
      heading: 326,
      squawk: "7000",
      timestamp: 1615042577,
      ems: null,
    },
    {
      latitude: 49.84227,
      longitude: 6.759413,
      altitude: {
        feet: 1100,
        meters: 335,
      },
      speed: {
        kmh: 127.8,
        kts: 69,
        mph: 79.4,
      },
      verticalSpeed: {
        fpm: -640,
        ms: -3.3,
      },
      heading: 353,
      squawk: "7000",
      timestamp: 1615042587,
      ems: null,
    },
    {
      latitude: 49.844879,
      longitude: 6.761073,
      altitude: {
        feet: 1000,
        meters: 305,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -512,
        ms: -2.6,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042597,
      ems: null,
    },
    {
      latitude: 49.848972,
      longitude: 6.766687,
      altitude: {
        feet: 800,
        meters: 244,
      },
      speed: {
        kmh: 101.9,
        kts: 55,
        mph: 63.3,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042618,
      ems: null,
    },
    {
      latitude: 49.850967,
      longitude: 6.769313,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 98.2,
        kts: 53,
        mph: 61,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615042628,
      ems: null,
    },
    {
      latitude: 49.851883,
      longitude: 6.770614,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 98.2,
        kts: 53,
        mph: 61,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615042634,
      ems: null,
    },
    {
      latitude: 49.854748,
      longitude: 6.77463,
      altitude: {
        feet: 500,
        meters: 152,
      },
      speed: {
        kmh: 101.9,
        kts: 55,
        mph: 63.3,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 43,
      squawk: "7000",
      timestamp: 1615042649,
      ems: null,
    },
    {
      latitude: 49.856655,
      longitude: 6.777303,
      altitude: {
        feet: 400,
        meters: 122,
      },
      speed: {
        kmh: 98.2,
        kts: 53,
        mph: 61,
      },
      verticalSpeed: {
        fpm: -640,
        ms: -3.3,
      },
      heading: 38,
      squawk: "7000",
      timestamp: 1615042659,
      ems: null,
    },
    {
      latitude: 49.858795,
      longitude: 6.780299,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 111.1,
        kts: 60,
        mph: 69,
      },
      verticalSpeed: {
        fpm: -512,
        ms: -2.6,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042669,
      ems: null,
    },
    {
      latitude: 49.861084,
      longitude: 6.783479,
      altitude: {
        feet: 200,
        meters: 61,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -448,
        ms: -2.3,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615042682,
      ems: null,
    },
    {
      latitude: 49.864563,
      longitude: 6.788322,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 114.8,
        kts: 62,
        mph: 71.3,
      },
      verticalSpeed: {
        fpm: 1024,
        ms: 5.2,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615042701,
      ems: null,
    },
    {
      latitude: 49.869781,
      longitude: 6.795341,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 111.1,
        kts: 60,
        mph: 69,
      },
      verticalSpeed: {
        fpm: 832,
        ms: 4.2,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615042726,
      ems: null,
    },
    {
      latitude: 49.870239,
      longitude: 6.800176,
      altitude: {
        feet: 800,
        meters: 244,
      },
      speed: {
        kmh: 118.5,
        kts: 64,
        mph: 73.6,
      },
      verticalSpeed: {
        fpm: 1152,
        ms: 5.9,
      },
      heading: 93,
      squawk: "7000",
      timestamp: 1615042736,
      ems: null,
    },
    {
      latitude: 49.870342,
      longitude: 6.806698,
      altitude: {
        feet: 1100,
        meters: 335,
      },
      speed: {
        kmh: 111.1,
        kts: 60,
        mph: 69,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 86,
      squawk: "7000",
      timestamp: 1615042752,
      ems: null,
    },
    {
      latitude: 49.870239,
      longitude: 6.811451,
      altitude: {
        feet: 1200,
        meters: 366,
      },
      speed: {
        kmh: 122.2,
        kts: 66,
        mph: 76,
      },
      verticalSpeed: {
        fpm: 1088,
        ms: 5.5,
      },
      heading: 91,
      squawk: "7000",
      timestamp: 1615042763,
      ems: null,
    },
    {
      latitude: 49.869965,
      longitude: 6.816583,
      altitude: {
        feet: 1300,
        meters: 396,
      },
      speed: {
        kmh: 120.4,
        kts: 65,
        mph: 74.8,
      },
      verticalSpeed: {
        fpm: 832,
        ms: 4.2,
      },
      heading: 95,
      squawk: "7000",
      timestamp: 1615042773,
      ems: null,
    },
    {
      latitude: 49.870193,
      longitude: 6.828075,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 113,
        kts: 61,
        mph: 70.2,
      },
      verticalSpeed: {
        fpm: 832,
        ms: 4.2,
      },
      heading: 82,
      squawk: "7000",
      timestamp: 1615042798,
      ems: null,
    },
    {
      latitude: 49.869095,
      longitude: 6.834797,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 133.3,
        kts: 72,
        mph: 82.9,
      },
      verticalSpeed: {
        fpm: 768,
        ms: 3.9,
      },
      heading: 132,
      squawk: "7000",
      timestamp: 1615042814,
      ems: null,
    },
    {
      latitude: 49.864151,
      longitude: 6.838772,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 179.6,
        kts: 97,
        mph: 111.6,
      },
      verticalSpeed: {
        fpm: -768,
        ms: -3.9,
      },
      heading: 191,
      squawk: "7000",
      timestamp: 1615042830,
      ems: null,
    },
    {
      latitude: 49.857101,
      longitude: 6.830316,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 177.8,
        kts: 96,
        mph: 110.5,
      },
      verticalSpeed: {
        fpm: 256,
        ms: 1.3,
      },
      heading: 221,
      squawk: "7000",
      timestamp: 1615042850,
      ems: null,
    },
    {
      latitude: 49.848835,
      longitude: 6.81813,
      altitude: {
        feet: 1700,
        meters: 518,
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
      heading: 226,
      squawk: "7000",
      timestamp: 1615042876,
      ems: null,
    },
    {
      latitude: 49.845154,
      longitude: 6.812463,
      altitude: {
        feet: 1800,
        meters: 549,
      },
      speed: {
        kmh: 177.8,
        kts: 96,
        mph: 110.5,
      },
      verticalSpeed: {
        fpm: 192,
        ms: 1,
      },
      heading: 222,
      squawk: "7000",
      timestamp: 1615042887,
      ems: null,
    },
    {
      latitude: 49.832336,
      longitude: 6.793454,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 161.1,
        kts: 87,
        mph: 100.1,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 235,
      squawk: "7000",
      timestamp: 1615042928,
      ems: null,
    },
    {
      latitude: 49.83012,
      longitude: 6.788512,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 151.9,
        kts: 82,
        mph: 94.4,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 236,
      squawk: "7000",
      timestamp: 1615042938,
      ems: null,
    },
    {
      latitude: 49.829315,
      longitude: 6.785648,
      altitude: {
        feet: 1700,
        meters: 518,
      },
      speed: {
        kmh: 157.4,
        kts: 85,
        mph: 97.8,
      },
      verticalSpeed: {
        fpm: -64,
        ms: -0.3,
      },
      heading: 252,
      squawk: "7000",
      timestamp: 1615042944,
      ems: null,
    },
    {
      latitude: 49.82933,
      longitude: 6.779381,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 159.3,
        kts: 86,
        mph: 99,
      },
      verticalSpeed: {
        fpm: -320,
        ms: -1.6,
      },
      heading: 281,
      squawk: "7000",
      timestamp: 1615042954,
      ems: null,
    },
    {
      latitude: 49.829933,
      longitude: 6.776931,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 155.6,
        kts: 84,
        mph: 96.7,
      },
      verticalSpeed: {
        fpm: 64,
        ms: 0.3,
      },
      heading: 295,
      squawk: "7000",
      timestamp: 1615042958,
      ems: null,
    },
    {
      latitude: 49.832153,
      longitude: 6.771987,
      altitude: {
        feet: 1600,
        meters: 488,
      },
      speed: {
        kmh: 133.3,
        kts: 72,
        mph: 82.9,
      },
      verticalSpeed: {
        fpm: -192,
        ms: -1,
      },
      heading: 308,
      squawk: "7000",
      timestamp: 1615042969,
      ems: null,
    },
    {
      latitude: 49.836823,
      longitude: 6.76305,
      altitude: {
        feet: 1400,
        meters: 427,
      },
      speed: {
        kmh: 140.8,
        kts: 76,
        mph: 87.5,
      },
      verticalSpeed: {
        fpm: -1088,
        ms: -5.5,
      },
      heading: 308,
      squawk: "7000",
      timestamp: 1615042990,
      ems: null,
    },
    {
      latitude: 49.845203,
      longitude: 6.761343,
      altitude: {
        feet: 1000,
        meters: 305,
      },
      speed: {
        kmh: 105.6,
        kts: 57,
        mph: 65.6,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 37,
      squawk: "7000",
      timestamp: 1615043021,
      ems: null,
    },
    {
      latitude: 49.847298,
      longitude: 6.764238,
      altitude: {
        feet: 900,
        meters: 274,
      },
      speed: {
        kmh: 103.7,
        kts: 56,
        mph: 64.4,
      },
      verticalSpeed: {
        fpm: -576,
        ms: -2.9,
      },
      heading: 40,
      squawk: "7000",
      timestamp: 1615043031,
      ems: null,
    },
    {
      latitude: 49.849255,
      longitude: 6.766836,
      altitude: {
        feet: 800,
        meters: 244,
      },
      speed: {
        kmh: 101.9,
        kts: 55,
        mph: 63.3,
      },
      verticalSpeed: {
        fpm: -704,
        ms: -3.6,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615043041,
      ems: null,
    },
    {
      latitude: 49.851334,
      longitude: 6.769891,
      altitude: {
        feet: 700,
        meters: 213,
      },
      speed: {
        kmh: 109.3,
        kts: 59,
        mph: 67.9,
      },
      verticalSpeed: {
        fpm: -832,
        ms: -4.2,
      },
      heading: 39,
      squawk: "7000",
      timestamp: 1615043052,
      ems: null,
    },
    {
      latitude: 49.853439,
      longitude: 6.77271,
      altitude: {
        feet: 600,
        meters: 183,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -512,
        ms: -2.6,
      },
      heading: 42,
      squawk: "7000",
      timestamp: 1615043062,
      ems: null,
    },
    {
      latitude: 49.857285,
      longitude: 6.778203,
      altitude: {
        feet: 400,
        meters: 122,
      },
      speed: {
        kmh: 98.2,
        kts: 53,
        mph: 61,
      },
      verticalSpeed: {
        fpm: -384,
        ms: -2,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615043083,
      ems: null,
    },
    {
      latitude: 49.859959,
      longitude: 6.781905,
      altitude: {
        feet: 300,
        meters: 91,
      },
      speed: {
        kmh: 107.4,
        kts: 58,
        mph: 66.7,
      },
      verticalSpeed: {
        fpm: -512,
        ms: -2.6,
      },
      heading: 41,
      squawk: "7000",
      timestamp: 1615043096,
      ems: null,
    },
    {
      latitude: 49.861729,
      longitude: 6.784429,
      altitude: {
        feet: 200,
        meters: 61,
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
      heading: 42,
      squawk: "7000",
      timestamp: 1615043106,
      ems: null,
    },
    {
      latitude: 49.862137,
      longitude: 6.784997,
      altitude: {
        feet: 200,
        meters: 61,
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
      heading: 42,
      squawk: "7000",
      timestamp: 1615043109,
      ems: null,
    },
    {
      latitude: 49.864288,
      longitude: 6.787398,
      altitude: {
        feet: 200,
        meters: 61,
      },
      speed: {
        kmh: 20.4,
        kts: 11,
        mph: 12.7,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 322,
      squawk: "7000",
      timestamp: 1615043133,
      ems: null,
    },
    {
      latitude: 49.864563,
      longitude: 6.786949,
      altitude: {
        feet: 200,
        meters: 61,
      },
      speed: {
        kmh: 18.5,
        kts: 10,
        mph: 11.5,
      },
      verticalSpeed: {
        fpm: 0,
        ms: 0,
      },
      heading: 311,
      squawk: "7000",
      timestamp: 1615043145,
      ems: null,
    },
  ],
};

export default flight;
