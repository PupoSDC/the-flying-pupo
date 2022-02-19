import { LightFlight } from 'src/types/Flight';
import { flights } from './flights';

export const getFlightIndex = () : LightFlight[] => flights
    .map(({ track, ...flight }) => flight)
    .reverse();