import { apiHandler } from "src/server";
import { getFlightIndex } from "src/server";

export default apiHandler({
    get: getFlightIndex,
});