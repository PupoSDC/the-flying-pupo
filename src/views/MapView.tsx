import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { LatLngLiteral } from 'leaflet'
import { Map, Polyline, TileLayer } from 'react-leaflet'

import flights from "../assets/flights";

const useStyles = makeStyles({
  map: {
    height: "100%",
    width: "100%",
  },
});

const MapView : FunctionComponent<{}> = () =>{
  const styles = useStyles();

  const {latitude, longitude} = flights[flights.length -1].airport.destination.position;
  const position : LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  }
    
  return (
    <Map center={position} zoom={13} className={styles.map} >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {flights.map((flight) => {
        const path = flight.track.map(point => ({
          lat: point.latitude,
          lng: point.longitude,
        }));
        return (<Polyline positions={path} />);
      })}
      
    </Map>
  )
}

export default MapView;