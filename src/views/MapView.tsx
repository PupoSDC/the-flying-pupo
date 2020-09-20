import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { LatLngLiteral } from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

const useStyles = makeStyles({
  map: {
    height: "100%",
    width: "100%",
  },
});

const MapView : FunctionComponent<{}> = () =>{
  const styles = useStyles();

  const position : LatLngLiteral = {
    lat: 51.505,
    lng: -0.09
  }
    
  return (
    <Map center={position} zoom={13} className={styles.map} >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
    </Map>
  )
}

export default MapView;