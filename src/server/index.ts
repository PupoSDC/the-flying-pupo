import { apiHandler } from "./apiHandler";
import { getFlight } from "./getFlight";
import { getFlightIndex } from "./getFlightIndex";
import { getFlightLog } from "./getFlightLog";

if (typeof window !== "undefined") {
    throw new Error("Server side code is being imported on the browser!!!");
}

export {
    apiHandler,
    getFlight,
    getFlightIndex,
    getFlightLog,
}