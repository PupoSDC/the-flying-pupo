import { LatLngLiteral } from "leaflet";
import { FunctionComponent } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Flight } from "src/types/Flight";
import { FlyingIcon } from "./leaflet/FlyingIcon";

export type MapProps = {
  flight: Flight
}

export const Map : FunctionComponent<MapProps> = ({
  flight
}) => {
  const { latitude, longitude } = flight.airport.origin.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };
  
  return(
    <MapContainer center={position} zoom={11} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <FlyingIcon key={flight.identification.id} track={flight.track} />
    </MapContainer>
  );
}

export default Map;