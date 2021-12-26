import { NoSsr, styled } from "@mui/material";
import { Flight } from "src/types/Flight";
import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import { flights, flightsAsMap } from "src/content/flights";
import { default as dynamic } from 'next/dynamic'
import { default as Head } from "next/head";

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
  flight: Flight,
}

const FlightPage: NextPage<FlightPageProps> = ({
  flight,
}) => {
  const Map = dynamic(
    () => import('src/components/Map'),
    { ssr: false }
  );

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
      </Head>
      <StyledContainer>
        <NoSsr>
          <Map flight={flight} />
        </NoSsr>
      </StyledContainer>
    </>
  );
}

export const getStaticProps: GetServerSideProps<FlightPageProps> = async (context) => {
  const flightId = context.params?.["flightId"];
  if (typeof flightId !== "string") {
    throw new Error(`missing flight id: ${flightId}`);
  }

  const flight = flightsAsMap[flightId];

  return {
    props: {
      flight,
    },
  }
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