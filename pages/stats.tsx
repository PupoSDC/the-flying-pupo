import { GetStaticProps, NextPage } from "next";
import { Typography } from "@mui/material";
import { AppContainer } from "src/containers/AppContainer";
import { flights as rawFlights } from "records/flights";
import { calculateTripDistance, calculateTripDistanceCovered, toTimeString } from "src/utils/flightProcessing";

type StatsPageProps = {
  tripDistance: number,
  tripDistanceCovered: number,
  flightsCount: number,
  airportCount: number,
  aircraftCount: number,
  aircraftTypeCount: number,
  tripsAroundTheWorld: number
  maxDistanceInOneFlight: number,
  maxDistanceInOneDay: number,
  longestFlightTime: number
  longestDailyFlightTime: number
}

const StatsPage: NextPage<StatsPageProps> = ({
  tripDistance,
  tripDistanceCovered,
  flightsCount,
  airportCount,
  aircraftCount,
  aircraftTypeCount,
  tripsAroundTheWorld,
  maxDistanceInOneFlight,
  longestFlightTime,
  longestDailyFlightTime,
  maxDistanceInOneDay
}) => {
  return (
    <AppContainer
      title={"The Flying Pupo"}
      linkTitle={"The Flying Pupo"}
      description={"My own adventures through the sky"}
      imageUrl={""}
    >
      <Typography>Nº flights: <b>{flightsCount}</b></Typography>
      <Typography>Nº Airports: <b>{airportCount}</b></Typography>
      <Typography>Nº Aircraft: <b>{aircraftCount}</b></Typography>
      <Typography>Nº Aircraft Type: <b>{aircraftTypeCount}</b></Typography>
      <Typography>Trip Distance: <b>{tripDistance} NM</b></Typography>
      <Typography>Trip Distance Covered: <b>{tripDistanceCovered} NM</b></Typography>
      <Typography>Trips around the world: <b>{tripsAroundTheWorld}%</b></Typography>
      <Typography>Max distance In One Flight: <b>{maxDistanceInOneFlight}NM</b></Typography>
      <Typography>Max distance In One Day: <b>{maxDistanceInOneDay}NM</b></Typography>
      <Typography>Max Continuos Flight Time: <b>{toTimeString(longestFlightTime)}</b></Typography>
      <Typography>Max Daily Flight Time: <b>{toTimeString(longestDailyFlightTime)}</b></Typography>
    </AppContainer>
  );
}

export const getStaticProps: GetStaticProps<StatsPageProps> = async () => {
  const tripDistance = Math.floor(
    rawFlights.reduce((s, r) => s + calculateTripDistance(r), 0)
  )
  const tripDistanceCovered = Math.floor(
    rawFlights.reduce((s, r) => s + calculateTripDistanceCovered(r), 0)
  )

  const maxDistanceInOneFlight = Math.floor(
    rawFlights.reduce((s, r) => Math.max(s, calculateTripDistanceCovered(r)), 0)
  )

  const longestFlightTime = Math.floor(
    rawFlights.reduce((s, r) => Math.max(s, r.pilotLog.singleEnginePistonTime ?? 0), 0)
  )

  const longestDailyFlightTime = Math.floor(Object.values(
    rawFlights
      .reduce<Record<string, number>>((s, r) => {
        const key =  new Date(r.pilotLog.departure).toISOString().slice(0, 10);
        return {
          ...s,
          [key]: (s[key] ?? 0) + (r.pilotLog.singleEnginePistonTime ?? 0),
        }
      }, {}))
      .reduce((s, r) => Math.max(s, r), 0)
  )

  const maxDistanceInOneDay = Math.floor(Object.values(
    rawFlights
      .reduce<Record<string, number>>((s, r) => {
        const key =  new Date(r.pilotLog.departure).toISOString().slice(0, 10);
        return {
          ...s,
          [key]: (s[key] ?? 0) + calculateTripDistanceCovered(r),
        }
      }, {}))
      .reduce((s, r) => Math.max(s, r), 0)
  )

  const airportCount = [...new Set(rawFlights.flatMap((r) => [
    r.airport.destination.code,
    r.airport.origin.code
  ]))].length

  const aircraftCount = [...new Set(rawFlights.map(r => r.aircraft.identification.registration))].length
  const aircraftTypeCount = [...new Set(rawFlights.map(r => r.aircraft.model.code))].length
  const tripsAroundTheWorld = Math.floor(tripDistanceCovered / (360 * 60) * 100)

  return {
    props: {
      flightsCount: rawFlights.length,
      airportCount,
      tripDistance,
      tripDistanceCovered,
      aircraftCount,
      aircraftTypeCount,
      tripsAroundTheWorld,
      maxDistanceInOneFlight,
      longestFlightTime,
      longestDailyFlightTime,
      maxDistanceInOneDay
    },
  };
};

export default StatsPage;