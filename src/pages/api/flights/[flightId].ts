import type { NextApiRequest, NextApiResponse } from 'next'
import { flightsAsMap } from 'src/content/flights';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(501);
    }
    const flightId = req.query.flightId as string;
    const flight = flightsAsMap[flightId];

    if (!flight) {
        return res.status(404);
    }

    res.status(200).json(flight);
}