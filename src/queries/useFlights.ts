import { useQuery, QueryClient } from 'react-query'
import { apiClient } from 'src/config/axios';
import { QUERY_KEY_FLIGHTS, ROUTE_FLIGHTS } from 'src/config/reactQuery'
import { getFlightsData, LightFlightList } from 'src/pages/api/flights'

const getFlights = async () => 
    (await apiClient.get<LightFlightList>(ROUTE_FLIGHTS)).data;

export const useFlights = () => {    
    const { data } = useQuery<LightFlightList>(QUERY_KEY_FLIGHTS, getFlights);
    return data ?? [];
}

export const prefetchUseFlights = async (queryClient: QueryClient) => 
    await queryClient.prefetchQuery(QUERY_KEY_FLIGHTS, getFlightsData);