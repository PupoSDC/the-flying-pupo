import type { LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Flight } from "src/types/Flight";
import type { FunctionComponent } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { FlyingIcon } from "./FlyingIcon";

export type FlightMapProps = {
  flights: Flight[];
  speed?: number;
};

export const FlightMapClient: FunctionComponent<FlightMapProps> = ({
  flights,
}) => {
  const { latitude, longitude } = flights[0].airport.origin.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <MapContainer
      center={position}
      zoom={11}
      style={{ height: "100%", width: "100%", position: "absolute" }}
      key={new Date().getTime()}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => (
        <FlyingIcon
          key={flight.identification.id}
          track={flight.track}
          speedMultiplier={900}
        />
      ))}
    </MapContainer>
  );
};
