import { FunctionComponent } from "react";
import { default as dynamic } from "next/dynamic";
import { ClientSideOnly } from "src/components/ClientSideOnly";
import { useFlight } from "src/queries/useFlight";
import type { MapProps  } from "src/components/Map"

const Map = dynamic<MapProps>(() => import("src/components/Map").then(mod => mod.Map), {
    ssr: false,
});

const FlightMapClient: FunctionComponent<FlightMapProps> = ({
    flightId
}) => {
    const flight = useFlight(flightId)
    return (
        <Map flight={flight} />
    )
}

export type FlightMapProps = {
    flightId: string,
}

export const FlightMap: FunctionComponent<FlightMapProps> = (props) => (
    <ClientSideOnly loadingFallback={"loading..."}>
        <FlightMapClient {...props} />
    </ClientSideOnly>
)