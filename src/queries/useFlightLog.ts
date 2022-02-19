import { useQuery, QueryClient } from 'react-query'
import { apiClient } from 'src/config/axios';
import { QUERY_KEY_FLIGHT_LOG, ROUTE_FLIGHT_LOG } from 'src/constants/routes'
import { FlightLogCarryOver } from 'src/types/Flight';

const getFlightLog = async () =>
    (await apiClient.get<FlightLogCarryOver>(ROUTE_FLIGHT_LOG)).data;

const initialData: FlightLogCarryOver = {
    singleEnginePistonTime: 0,
    nightTime: 0,
    ifrTime: 0,
    picTime: 0,
    dualTime: 0,
    fiTime: 0,
    landings: {
        day: 0,
        night: 0,
    },
};

export const useFlightLog = (): FlightLogCarryOver => {
    const { data } = useQuery<FlightLogCarryOver>(QUERY_KEY_FLIGHT_LOG, getFlightLog);
    return data ?? initialData;
}

export const prefetchUseFlightLog = async (queryClient: QueryClient) => {
    const { getFlightLog } = await import("src/server");
    return await queryClient.prefetchQuery(QUERY_KEY_FLIGHT_LOG, getFlightLog);
}
