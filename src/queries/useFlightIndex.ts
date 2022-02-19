import { useQuery, QueryClient } from 'react-query'
import { apiClient } from 'src/config/axios';
import { QUERY_KEY_FLIGHTS, ROUTE_FLIGHTS } from 'src/constants/routes'
import { LightFlight } from 'src/types/Flight';

const getFlightIndexFromApi
 = async () => 
    (await apiClient.get<LightFlight[]>(ROUTE_FLIGHTS)).data;

export const useFlightIndex = () => {    
    const { data } = useQuery<LightFlight[]>(QUERY_KEY_FLIGHTS, getFlightIndexFromApi);
    return data ?? [];
}

export const prefetchUseFlights = async (queryClient: QueryClient) => {
    const { getFlightIndex } = await import("src/server");
    await queryClient.prefetchQuery(QUERY_KEY_FLIGHTS, getFlightIndex);
}
