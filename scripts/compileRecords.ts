import { readdirSync, mkdirSync, rmSync } from "fs"
import { writeFile } from "fs/promises"
import { RawFlight, FlightWithoutTrack, Flight, PilotLog } from "../src/types/Flight"


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

const compileRecords = async () => {
    const flights = (await Promise.all(readdirSync("./records/flights", { withFileTypes: true })
        .filter(e => e.isDirectory())
        .flatMap(e => readdirSync(`./records/flights/${e.name}`).map(f => `../records/flights/${e.name}/${f}`))
        .filter(e => e.includes(".ts"))
        .map(e => e.replace(".ts", ""))
        .map(e => import(`${e}`)))
    ).map(({ flight }: { flight: RawFlight }): Flight => ({
        ...flight,
        tripDistance: Math.floor(calculateTripDistance(flight)),
        tripDistanceCovered: Math.floor(calculateTripDistanceCovered(flight)),
    }))

    const flightLog: FlightWithoutTrack[] = flights.map(({ track, ...flight }) => ({
        ...flight
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