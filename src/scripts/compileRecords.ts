import { readdirSync, mkdirSync, rmSync } from "fs"
import { writeFile } from "fs/promises"
import { RawFlight, Flight, FlightLogCarryOver } from "../types/Flight"

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

const compileRecords = async () => {
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
    const flights = (await Promise.all<{ flight: RawFlight }>(readdirSync("./records/flights", { withFileTypes: true })
        .filter(e => e.isDirectory())
        .flatMap(e => readdirSync(`./records/flights/${e.name}`).map(f => `../records/flights/${e.name}/${f}`))
        .filter(e => e.includes(".ts"))
        .map(e => e.replace(".ts", ""))
        .map(e => import(`${e}`)))
    )
    .sort((a, b) => a.flight.pilotLog.departure - b.flight.pilotLog.departure)
    .map(({ flight }, index, arr): Flight => {
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

    const flightLog: Flight[] = flights.map(({ ...flight }) => ({
        ...flight,
        track: getSetPointsFromArray(flight.track, 50).filter(e => !!e)
    })).sort((a, b) => b.pilotLog.departure - a.pilotLog.departure)

    rmSync('./public/records', { recursive: true, force: true });
    mkdirSync('./public/records');
    await Promise.all(flights.map(flight => writeFile(
        `./public/records/${flight.identification.id}.json`,
        JSON.stringify(flight, null, 2)
    )))
    await writeFile(
        `./public/records/flightLog.json`,
        JSON.stringify(flightLog, null, 2)
    );
}

compileRecords();