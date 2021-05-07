import { FunctionComponent, useRef } from "react";
import { FieldProps } from "@camberi/firecms";
import { Position } from "@the-flying-pupo/schema";
import { MapContainer, TileLayer, Marker, useMapEvent } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { default as axios } from "axios";
import { Feature } from "geojson";

const REVERSE_LOCATION_SEARCH_API = "https://nominatim.openstreetmap.org/reverse";

type AirportMarkerProps = {
    position: LatLngTuple,
    setPosition: (newPosition: LatLngTuple) => void;
    setCountry: (countryCode: string) => void,
}

const AirportMarker : FunctionComponent<AirportMarkerProps> = ({ 
    position, 
    setPosition,
    setCountry
}) => {
    const map = useMapEvent('click', async (e) => {
        map.setView(e.latlng);
        setPosition([e.latlng.lat, e.latlng.lng]);
        const {
            data: { features },
        } = await axios.get<{ features: Feature[] }>(REVERSE_LOCATION_SEARCH_API, {
            params: {
                format: "geojson",
                lat: e.latlng.lat,
                lon: e.latlng.lng,
            },
        });
        setCountry(features[0].properties?.address.country_code ?? "NA");
    })
    return <Marker position={position} />;
}

export const AirportField: FunctionComponent<FieldProps<Position>> = ({
    property,
    value,
    setValue,
    customProps,
    touched,
    error,
    isSubmitting,
    context, // the rest of the entity values here
}) => {
    const valueRef = useRef(value);
    const center : LatLngTuple = [value.latitude ?? 51.505, value.longitude ?? 0];
    const setPosition = (newPosition: LatLngTuple) => {
        setValue({
            ...valueRef.current,
            latitude: newPosition[0],
            longitude: newPosition[1],
        });
    }
    const setCountry = (newCountry: string) => {
        setValue({
            ...valueRef.current,
            country: newCountry
        });
    }

    valueRef.current = value;

    return (
        <>
            <MapContainer 
                center={center} 
                zoom={10} 
                scrollWheelZoom={true} 
                style={{ height: 500 }}
                
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AirportMarker position={center} setPosition={setPosition} setCountry={setCountry} />
            </MapContainer>

        </>

    );

}