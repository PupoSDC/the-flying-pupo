import { Flight } from "src/types/Flight";

export const calculateDistance = (a: {
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

export const calculateTripDistance = (flight: Flight) => {
    const origin = flight.airport.origin.position;
    const destination = flight.airport.destination.position;
    return calculateDistance(origin, destination)
}

export const calculateTripDistanceCovered = (flight: Flight) => {
    if (!flight.track) {
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

export const toTimeString = (minutes: number | undefined = 0) =>
  minutes
    ? `${`${Math.floor(minutes / 60) || "0"}`}:${`00${minutes % 60}`.slice(-2)}`
    : "-";