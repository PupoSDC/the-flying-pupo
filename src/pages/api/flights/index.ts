import type { NextApiRequest, NextApiResponse } from 'next'
import { flights } from 'src/content/flights';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(501);
    }

    const lightFlights = flights
        .map(({ track, ...flight }) => flight)
        .reverse();

    res.status(200).json(lightFlights);
}