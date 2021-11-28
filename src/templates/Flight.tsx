import { FunctionComponent, useState } from "react";
import { LatLngLiteral } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { styled } from "@mui/material";
import FlyingIcon from "../components/leaflet/FlyingIcon";
import { graphql, PageProps } from "gatsby";
import { GetFlightPageDataQuery } from "../graphql";

const StyledContainer = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  position: "relative",

  "& > *": {
    height: "100%",
    flex: 1,
  },
}));

const FlightPage : FunctionComponent<PageProps<GetFlightPageDataQuery>> = ({
  data: {
    flight,
  }
}) => {
  const { latitude, longitude } = flight.airport.origin.position;
  const position: LatLngLiteral = {
    lat: latitude,
    lng: longitude,
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <StyledContainer>
      <MapContainer center={position} zoom={11}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <FlyingIcon key={flight.id} track={flight.track} />
      </MapContainer>
    </StyledContainer>
  );
}

export const query = graphql`
  query GetFlightPageData ($id: String!) {
    flight(id: {eq: $id}) {
      id
      airport {
        origin {
          position {
            latitude,
            longitude
          }
        }
      }
      track {
        heading
        latitude
        longitude
        speed {
          kts
          kmh
          mph
        }
        squawk
        timestamp
        verticalSpeed {
          fpm
          ms
        }
        altitude {
          feet
          meters
        }
      }
    }
  }
`;

export default FlightPage;