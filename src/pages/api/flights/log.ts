import type { NextApiRequest, NextApiResponse } from 'next'
import { flightLog } from 'src/content/flights';
import { FlightLogCarryOver } from 'src/types/Flight';

export const getFlightLogData = () => flightLog;

const handler = (
    req: NextApiRequest, 
    res: NextApiResponse<FlightLogCarryOver>
) => {
    if (req.method !== 'GET') {
        return res.status(501);
    }
    res.status(200).json(getFlightLogData());
}

export default handler;