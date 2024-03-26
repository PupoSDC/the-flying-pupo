import { YamlFlight } from "src/schemas/yaml-flight";
import { getYamlData } from "./get-yaml-data";
import { YamlAirport } from "src/schemas/yaml-airport";
import { YamlAircraft } from "src/schemas/yaml-aircraft";

type FlightLogFlight = YamlFlight & {
    nextId: string | undefined,
    previousId: string | undefined,
    tripDistance: number,
    tripDistanceCovered: number,
    carryOver: {
        totalTimeMinutes: number,
        singleEnginePistonTimeMinutes: number,
        multiEnginePistonTimeMinutes: number,
        multiPilotTimeMinutes: number,
        picTimeMinutes: number,
        dualTimeMinutes: number,
        copilotTimeMinutes: number,
        instructorTimeMinutes: number,
        nightTimeMinutes: number,
        ifrTimeMinutes: number,
        landings: {
          day: number,
          night: number,
        },
        takeoffs: {
          day: number,
          night: number,
        },
    }
}

type FlightLogAircraft =  YamlAircraft  & {
    flights: string[];
}

const calculateDistance = (
  a: {
    latitude: number;
    longitude: number;
  },
  b: {
    latitude: number;
    longitude: number;
  },
) => {
  const deltaLat = a.latitude - b.latitude;
  const deltaLng = a.longitude - b.longitude;
  const avgLat = (a.latitude + b.latitude) / 2;
  const nmLat = Math.abs(deltaLat) * 60;
  const nmLng = Math.abs(deltaLng) * Math.cos((avgLat / 180) * Math.PI) * 60;
  return Math.sqrt(nmLat * nmLat + nmLng * nmLng);
};

const calculateTripDistance = (
    flight: YamlFlight, 
    airports: Record<string, YamlAirport>
) => {
  const origin = airports[flight.origin];
  const destination = airports[flight.destination];
  return calculateDistance(origin, destination);
};

const calculateTripDistanceCovered = (
    flight: YamlFlight,
    airports: Record<string, YamlAirport>
) => {
  if (!flight.track.length) {
    return calculateTripDistance(flight, airports);
  }
  return flight.track.reduce((ss, rr, i, arr) => {
    if (i === 0) return ss;
    const origin = arr[i - 1];
    const destination = rr;
    const nm = calculateDistance(origin, destination);
    return ss + nm;
  }, 0);
};

const getSetPointsFromArray = <T>(array: T[], count: number): T[] => {
  const values: T[] = new Array(count);
  values[0] = array[0];
  values[count - 1] = array.at(-1) as T;
  for (let i = 1; i < count - 2; i++) {
    values[i] = array[Math.floor((i * array.length) / (count - 1))];
  }
  return values;
};

let CACHE : { 
    flights: FlightLogFlight[] 
    airports: Record<string, YamlAirport>,
    aircrafts: Record<string, FlightLogAircraft>
};

export const getFlightLog = async () => {
  if (CACHE) return CACHE;

  const { 
    flights: rawFlights, 
    airports,
    aircrafts: rawAircrafts, 
} = await getYamlData();

  const carryOver = {
    totalTimeMinutes: 0,
    singleEnginePistonTimeMinutes: 0,
    multiEnginePistonTimeMinutes: 0,
    multiPilotTimeMinutes: 0,
    picTimeMinutes: 0,
    dualTimeMinutes: 0,
    copilotTimeMinutes: 0,
    instructorTimeMinutes: 0,
    nightTimeMinutes: 0,
    ifrTimeMinutes: 0,
    landings: {
      day: 0,
      night: 0,
    },
    takeoffs: {
      day: 0,
      night: 0,
    },
  };

  const aircrafts = Object
    .values(rawAircrafts)
    .reduce<Record<string, FlightLogAircraft>>((s, r) => {
        s[r.registration] = { ...r, flights: [] };
        return s;
    }, {});

  const flights = rawFlights.map<FlightLogFlight>((flight, index, arr)  => {
    carryOver.totalTimeMinutes +=
      flight.pilotLog.singleEnginePistonTimeMinutes +
      flight.pilotLog.multiEnginePistonTimeMinutes +
      flight.pilotLog.multiPilotTimeMinutes;
    carryOver.singleEnginePistonTimeMinutes +=
      flight.pilotLog.singleEnginePistonTimeMinutes;
    carryOver.multiEnginePistonTimeMinutes +=
      flight.pilotLog.multiEnginePistonTimeMinutes;

    carryOver.multiPilotTimeMinutes += flight.pilotLog.multiPilotTimeMinutes;
    carryOver.picTimeMinutes += flight.pilotLog.picTimeMinutes;
    carryOver.dualTimeMinutes += flight.pilotLog.dualTimeMinutes;
    carryOver.copilotTimeMinutes += flight.pilotLog.copilotTimeMinutes;
    carryOver.instructorTimeMinutes += flight.pilotLog.instructorTimeMinutes;
    carryOver.nightTimeMinutes += flight.pilotLog.nightTimeMinutes;
    carryOver.ifrTimeMinutes += flight.pilotLog.ifrTimeMinutes;
    carryOver.landings.day += flight.pilotLog.landings.day;
    carryOver.landings.night += flight.pilotLog.landings.night;
    carryOver.takeoffs.day += flight.pilotLog.takeoffs.day;
    carryOver.takeoffs.night += flight.pilotLog.takeoffs.night;

    aircrafts[flight.aircraft].flights.push(flight.id);

    return {
      ...flight,
      nextId: arr[index + 1]?.id ?? undefined,
      previousId: arr[index - 1]?.id ?? undefined,
      tripDistance: Math.floor(calculateTripDistance(flight, airports)),
      tripDistanceCovered: Math.floor(calculateTripDistanceCovered(flight, airports)),
      carryOver: JSON.parse(JSON.stringify(carryOver)),
      track: flight.track,
    };
  });

  flights.sort((a, b) => {
    return b.pilotLog.departure.toMillis() - a.pilotLog.departure.toMillis();
  });

  CACHE =  { flights, airports, aircrafts };
  return CACHE;
};
