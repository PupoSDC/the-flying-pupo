import { apiHandler, getFlightLog } from "src/server";

export default apiHandler({
    get: getFlightLog,
});