import { styled } from "@mui/material";
import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import { default as Head } from "next/head";
import { AppContainer } from "src/containers/AppContainer";
import { prefetchUseFlight, useFlight } from "src/queries/useFlight";
import { dehydrate, QueryClient } from "react-query";
import { FlightMap } from "src/containers/FlightMap";

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

const FlightPage: NextPage<{ flightId: string }> = ({
  flightId
}) => {
  const flight = useFlight(flightId);
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
        <FlightMap flightId={flightId} />
      </StyledContainer>
    </AppContainer>
  );
}

export const getStaticProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  const flightId = context.params?.["flightId"] as string;

  await Promise.all([
    prefetchUseFlight(queryClient, flightId)
  ]);

  return {
    props: {
      flightId,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getFlightIndex } = await import("src/server");
  const paths = getFlightIndex().map((flight) => ({
    params: { flightId: flight.identification.id },
  }));

  return {
    paths,
    fallback: false
  }
}

export default FlightPage;