import { FunctionComponent } from "react";
import { default as dynamic } from "next/dynamic";
import { ClientSideOnly } from "src/components/ClientSideOnly";

import type { MapProps  } from "src/components/Map"
import { RawFlight } from "src/types/Flight";

const Map = dynamic<MapProps>(() => import("src/components/Map").then(mod => mod.Map), {
    ssr: false,
});

const FlightMapClient: FunctionComponent<FlightMapProps> = ({
    flight,
}) => {
    return (
        <Map flight={flight} />
    )
}

export type FlightMapProps = {
    flight: RawFlight,
}

export const FlightMap: FunctionComponent<FlightMapProps> = (props) => (
    <ClientSideOnly loadingFallback={"loading..."}>
        <FlightMapClient {...props} />
    </ClientSideOnly>
)