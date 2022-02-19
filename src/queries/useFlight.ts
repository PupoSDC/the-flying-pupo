import { useQuery, QueryClient } from 'react-query'
import { apiClient } from 'src/config/axios';
import { ROUTE_FLIGHT, SLUG_FLIGHT } from 'src/constants/routes'
import { prepareRoute } from './helpers';
import { Flight } from 'src/types/Flight';

const getFlightFromApi = async (flightId: string) => 
    (await apiClient.get<Flight>(prepareRoute(ROUTE_FLIGHT, {
        [SLUG_FLIGHT]: flightId,
    }))).data;

export const useFlight = (flightId: string) : Flight => {    
    const { data } = useQuery<Flight>(
        [ROUTE_FLIGHT, flightId], 
        () => getFlightFromApi(flightId),
        {
            suspense: true,
        }
    );
    return data as Flight;
}

export const prefetchUseFlight = async (queryClient: QueryClient, flightId: string) => {
    const { getFlight } = await import("src/server");
    await queryClient.prefetchQuery([ROUTE_FLIGHT, flightId], () => getFlight(flightId));
}
    