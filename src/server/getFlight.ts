import { NotFoundError } from 'src/types/errors';
import { flightsAsMap } from './flights';

export const getFlight = (flightId: string) => {
    const flight = flightsAsMap[flightId];
    if (!flight) {
        throw new NotFoundError();
    }
    else return flight;
}