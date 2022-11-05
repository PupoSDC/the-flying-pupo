import { styled } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { default as Head } from "next/head";
import { AppContainer } from "src/containers/AppContainer";
import { FlightMap } from "src/containers/FlightMap";
import { RawFlight } from "src/types/Flight";
import { flights } from "records/flights";
import { NotFoundError } from "src/types/errors";

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

type FlightPageProps = {
  flight: RawFlight,
}

const FlightPage: NextPage<FlightPageProps> = ({
  flight
}) => {

  return (
    <AppContainer
      title={flight.identification.name}
      linkTitle={flight.identification.name}
      description={flight.identification.description}
      imageUrl={""}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
      </Head>
      <StyledContainer>
        <FlightMap flight={flight} />
      </StyledContainer>
    </AppContainer>
  );
}

export const getStaticProps: GetStaticProps<FlightPageProps> = async (context) => {
  const flightId = context.params?.["flightId"] as string;
  const flight = flights.find(({ identification }) =>  identification.id === flightId);

  if(!flight) {
    throw new NotFoundError();
  }

  return {
    props: {
      flight,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = flights.map((flight) => ({
    params: { flightId: flight.identification.id },
  }));

  return {
    paths,
    fallback: false
  }
}

export default FlightPage;