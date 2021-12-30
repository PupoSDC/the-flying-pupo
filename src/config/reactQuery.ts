export const reactQueryConfig = {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
}

export const QUERY_KEY_FLIGHTS = "QUERY_KEY_FLIGHTS";
export const QUERY_KEY_FLIGHT_LOG = "QUERY_KEY_FLIGHT_LOG";

export const ROUTE_FLIGHTS = "/flights";
export const ROUTE_FLIGHT_LOG = "/flights/log";