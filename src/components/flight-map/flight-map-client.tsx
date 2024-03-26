
import { MapContainer, TileLayer } from "react-leaflet";
import { FlightMapPlaneIcon, TrackPoint } from "./flight-map-plane-icon";
import type { FunctionComponent } from "react";
import type { LatLngLiteral } from "leaflet";

import "leaflet/dist/leaflet.css";

export type FlightMapProps = {
  speedMultiplier?: number;  
  flights: Array<{
    id: string;
    origin: LatLngLiteral;
    track: TrackPoint[];
  }>;
};

export const FlightMapClient: FunctionComponent<FlightMapProps> = ({
  flights,
  speedMultiplier
}) => {
  return (
    <MapContainer 
      center={flights[0].origin} 
      zoom={11} 
      key={new Date().getTime()}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <FlightMapPlaneIcon
          key={flight.id}
          track={flight.track}
          speedMultiplier={speedMultiplier}
        />
      ))}
    </MapContainer>
  );
};
