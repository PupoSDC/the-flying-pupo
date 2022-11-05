import type { LatLngLiteral } from "leaflet";
import type { FunctionComponent } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import type { Flight } from "src/types/Flight";
import { FlyingIcon } from "./FlyingIcon";

import 'leaflet/dist/leaflet.css';

export type FlightMapProps = {
  flight: Flight
}

export const FlightMapClient : FunctionComponent<FlightMapProps> = ({
  flight
}) => {
  const { latitude, longitude } = flight.airport.origin.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };

  return(
    <MapContainer center={position} zoom={11} style={{ height: "100%", width: "100%", position: "absolute" }}key={new Date().getTime()}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <FlyingIcon key={flight.identification.id} track={flight.track} /> 
    </MapContainer>
  );
}
