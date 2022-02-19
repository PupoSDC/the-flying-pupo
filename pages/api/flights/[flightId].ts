import { apiHandler, getFlight } from 'src/server';

export default apiHandler({
    get: (req) => getFlight(req.query.flightId as string),
})
