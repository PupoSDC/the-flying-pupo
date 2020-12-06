import { FunctionComponent, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LatLngLiteral } from "leaflet";
import { Map, TileLayer } from "react-leaflet";
import {
  Fab,
  Fade,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import flights, { carryOver } from "../assets/flights";
import FlyingIcon from "../components/leaflet/FlyingIcon";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    position: "relative",
  },
  menu: {
    width: 250,
    height: "100%",
    overflow: "scroll",
  },
  map: {
    height: "100%",
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(1),
    zIndex: 1000,
  },
}));

console.log(carryOver);

const MapView: FunctionComponent<{}> = () => {
  const styles = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const { latitude, longitude } = flights[
    flights.length - 1
  ].airport.destination.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <>
      <div className={styles.container}>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onOpen={() => setDrawerOpen(true)}
          onClose={() => setDrawerOpen(false)}
        >
          <List className={styles.menu}>
            {flights
              .slice()
              .reverse()
              .map(({ identification: { name, description, id } }) => (
                <ListItem
                  button
                  key={id}
                  selected={selected.includes(id)}
                  onClick={() =>
                    setSelected((selected) =>
                      selected.includes(id)
                        ? selected.filter((s) => s !== id)
                        : [...selected, id]
                    )
                  }
                >
                  <ListItemText primary={name} secondary={description} />
                </ListItem>
              ))}
          </List>
        </SwipeableDrawer>
        <Map center={position} zoom={11} className={styles.map}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {flights
            .filter(({ identification: { id } }) => selected.includes(id))
            .map((flight) => (
              <FlyingIcon key={flight.identification.id} track={flight.track} />
            ))}
        </Map>
        <Fade in={!drawerOpen}>
          <Fab
            onClick={() => setDrawerOpen(true)}
            className={styles.fab}
            aria-label="edit"
            size="small"
          >
            <MenuIcon />
          </Fab>
        </Fade>
      </div>
    </>
  );
};

export default MapView;
