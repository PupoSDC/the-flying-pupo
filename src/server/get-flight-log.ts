import { RawFlight, Flight, FlightLogCarryOver } from "../types/Flight"
import { getRawFlights } from "./get-raw-flights";

const calculateDistance = (a: {
    latitude: number,
    longitude: number,
}, b: {
    latitude: number,
    longitude: number,
}) => {
    const deltaLat = a.latitude - b.latitude;
    const deltaLng = a.longitude - b.longitude;
    const avgLat = (a.latitude + b.latitude) / 2
    const nmLat = (Math.abs(deltaLat) * 60)
    const nmLng = (Math.abs(deltaLng) * Math.cos(avgLat / 180 * Math.PI) * 60)
    return Math.sqrt(nmLat * nmLat + nmLng * nmLng)

}

const calculateTripDistance = (flight: RawFlight) => {
    const origin = flight.airport.origin.position;
    const destination = flight.airport.destination.position;
    return calculateDistance(origin, destination)
}

const calculateTripDistanceCovered = (flight: RawFlight) => {
    if (!flight.track.length) {
        return calculateTripDistance(flight)
    }
    return flight
        .track
        .reduce((ss, rr, i, arr) => {
            if (i === 0) return ss;
            const origin = arr[i - 1];
            const destination = rr
            const nm = calculateDistance(origin, destination)
            return ss + nm;
        }, 0)
}

const getSetPointsFromArray = <T>(array: T[], count: number): T[] => {
    const values: T[] = new Array(count);
    values[0] = array[0];
    values[count - 1] = array.at(-1) as T
    for (let i = 1; i < count - 2; i++) {
        values[i] = array[Math.floor(i * array.length / (count - 1))];
    }
    return values;
}

export const getFlightLog = async () => {
    const carryOver : FlightLogCarryOver = {
        totalTime: 0,
        singleEnginePistonTime: 0,
        multiEnginePistonTime: 0,
        multiPilotTime: 0,
        nightTime: 0,
        ifrTime: 0,
        picTime: 0,
        dualTime: 0,
        fiTime: 0,
        landings: {
            day: 0,
            night: 0,
        },
    }

    const rawFlights = await getRawFlights();

    const processedFlights = rawFlights.map(({ flight }, index, arr): Flight => {
        carryOver.totalTime += flight.pilotLog.singleEnginePistonTime ?? 0;
        carryOver.totalTime += flight.pilotLog.multiEnginePistonTime ?? 0;
        carryOver.singleEnginePistonTime += flight.pilotLog.singleEnginePistonTime ?? 0;
        carryOver.multiEnginePistonTime += flight.pilotLog.multiEnginePistonTime ?? 0;
        carryOver.multiPilotTime += flight.pilotLog.multiPilotTime ?? 0;
        carryOver.nightTime += flight.pilotLog.nightTime ?? 0;
        carryOver.ifrTime += flight.pilotLog.ifrTime ?? 0;
        carryOver.picTime += flight.pilotLog.picTime ?? 0;
        carryOver.dualTime += flight.pilotLog.dualTime ?? 0;
        carryOver.fiTime += flight.pilotLog.fiTime ?? 0;
        carryOver.landings.day += flight.pilotLog.landings.day ?? 0;
        carryOver.landings.night += flight.pilotLog.landings.night ?? 0;

        return {
            ...flight,
            nextId: arr[index + 1]?.flight.identification.id ?? undefined,
            previousId:  arr[index - 1]?.flight.identification.id ?? undefined,
            tripDistance: Math.floor(calculateTripDistance(flight)),
            tripDistanceCovered: Math.floor(calculateTripDistanceCovered(flight)),
            flightLogCarryOver: JSON.parse(JSON.stringify(carryOver)),
        };
    })

    const flightLog: Flight[] = processedFlights.map(({ ...flight }) => ({
        ...flight,
        track: getSetPointsFromArray(flight.track, 50).filter(e => !!e)
    })).sort((a, b) => b.pilotLog.departure - a.pilotLog.departure)

    return {
        flightLog,
        flightLogCarryOver: carryOver
    }
}
