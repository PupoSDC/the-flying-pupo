import React, { FunctionComponent, useRef, useState } from "react";
import { AppBar, FormLabel, Input, makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import { FieldProps } from "@camberi/firecms";
import { TrackEntry } from "@the-flying-pupo/schema";
import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import { DragEndEventHandlerFn, LatLngTuple, LeafletEventHandlerFn } from "leaflet";

const useStyles = makeStyles({
    container: {
        width: "100%",
        padding: 10,
    },
    child: {
        width: "100%",
        height: 500,
        maxHeight: 500,
    }
});

function looseJsonParse(obj: string){
    return Function('"use strict";return (' + obj + ')')();
}

export const FlightTrackField: FunctionComponent<FieldProps<Array<TrackEntry>>> = ({
    property,
    value,
    setValue,
    customProps,
    touched,
    error,
    isSubmitting,
    context, 
}) => {
    const [invalidJson, setInvalidJson] = useState(false);
    const [tab, setTab] = useState(0);
    const classes = useStyles();

    const handleRawInputChange : React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
        try {
            setValue(looseJsonParse(event.target.value));
            setInvalidJson(false);
        } catch (error) {
            setValue(event.target.value as unknown as TrackEntry[]);
            setInvalidJson(true);
            console.error("invalid json input");
        }
    }

    const positions : [number, number, number][] = value?.length ?
        value.map(({latitude, longitude}, index) => [latitude, longitude, index]) : 
        [];
    
    
    const positionsWithoutIndex : [number, number][] = value?.length ?
        value.map(({latitude, longitude}, index) => [latitude, longitude]) : 
        [];

    const center : LatLngTuple = positionsWithoutIndex?.length ? 
        positionsWithoutIndex[0] : 
        [0, 0];
    
    const handleDragEndFactory : (key: number) => DragEndEventHandlerFn = (key) =>  (e) => {
        const newValue = [...value];
        newValue[key] = {
            ...newValue[key],
            latitude: e.target._latlng.lat,
            longitude: e.target._latlng.lng,
        }
        setValue(newValue);
    } 
    
    return (
        <>
            <FormLabel component="legend" >{property.title ?? ""}</FormLabel>

            <Paper variant="outlined" className={classes.container}>
                <AppBar position="static">
                    <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth">
                        <Tab label="Map widget"  />
                        <Tab label="JSON" />
                    </Tabs>
                </AppBar>
                {tab ? 
                    <Input 
                        multiline 
                        rows={24}
                        error={error || invalidJson}
                        className={classes.child}
                        value={(typeof value === "string") ? value : JSON.stringify(value, null, 2)} 
                        onChange={handleRawInputChange}
                    /> :
                    <MapContainer
                        center={center}
                        zoom={10}
                        scrollWheelZoom={true}
                        className={classes.child}
                    >
                        <Polyline 
                            positions={positionsWithoutIndex}
                        />
                        {positions.map(([lat, lng, key]) => <Marker 
                            draggable 
                            key={key}
                            position={[lat, lng]} 
                            eventHandlers={{ dragend: handleDragEndFactory(key) }} 
                        />)}
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                }
            </Paper>
        </>

    );

}
