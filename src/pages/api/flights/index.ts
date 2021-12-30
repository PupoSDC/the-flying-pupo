import type { NextApiRequest, NextApiResponse } from 'next'
import { flights } from 'src/content/flights';
import { Flight } from 'src/types/Flight';

export type LightFlightList = Array<Omit<Flight, "track">>;

export const getFlightsData = () => flights
    .map(({ track, ...flight }) => flight)
    .reverse();

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<LightFlightList>
) => {
    if (req.method !== 'GET') {
        return res.status(501);
    }
    res.status(200).json(getFlightsData());
}

export default handler;