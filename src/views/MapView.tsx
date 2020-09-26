import React, { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LatLngLiteral } from "leaflet";
import { Map, Polyline, TileLayer, Marker } from "react-leaflet";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import flights from "../assets/flights";
import FlyingIcon from "../components/leaflet/FlyingIcon";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  menu: {
    width: 250,
    height: "100%",
  },
  map: {
    height: "100%",
    flex: 1,
  },
});

const MapView: FunctionComponent<{}> = () => {
  const styles = useStyles();
  const [selected, setSelected] = useState<string>();

  const { latitude, longitude } = flights[
    flights.length - 1
  ].airport.destination.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };

  const flight = flights.find(({ identification: { id } }) => selected === id)
    ?.track;

  return (
    <div className={styles.container}>
      <List className={styles.menu}>
        {flights.map(({ identification: { name, description, id } }) => (
          <ListItem
            button
            key={id}
            onClick={() => setSelected(id)}
            selected={selected === id}
          >
            <ListItemText primary={name} secondary={description} />
          </ListItem>
        ))}
      </List>
      <Map center={position} zoom={11} className={styles.map}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {flights.map((flight) => {
          const { id } = flight.identification;
          const path = flight.track.map((point) => ({
            lat: point.latitude,
            lng: point.longitude,
          }));
          return (
            <Polyline
              positions={path}
              color={selected === id ? red[500] : blue[500]}
              onclick={() => setSelected(id)}
            />
          );
        })}
        {flight && <FlyingIcon track={flight} />}
      </Map>
    </div>
  );
};

export default MapView;
