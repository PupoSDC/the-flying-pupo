import { GetStaticProps, NextPage } from "next";
import { AppContainer } from "src/containers/AppContainer";
import { flights as rawFlights } from "records/flights";
import { calculateTripDistance, calculateTripDistanceCovered, toTimeString } from "src/utils/flightProcessing";

type StatsPageProps = {
  tripDistance: number,
  flightTime: number,
  tripDistanceCovered: number,
  flightsCount: number,
  countryCount: number,
  mostFrequentType: string
  airportCount: number,
  aircraftCount: number,
  aircraftTypeCount: number,
  tripsAroundTheWorld: number
  maxDistanceInOneFlight: number,
  maxDistanceInOneDay: number,
  landings: number
  longestFlightTime: number
  longestDailyFlightTime: number
}

const StatsPage: NextPage<StatsPageProps> = ({
  tripDistance,
  tripDistanceCovered,
  flightsCount,
  countryCount,
  flightTime,
  mostFrequentType,
  airportCount,
  aircraftCount,
  aircraftTypeCount,
  tripsAroundTheWorld,
  landings,
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
      <h1>A Summary of my flying so far...</h1>
      <p>
        I've done <b>{flightsCount} flights</b> so far, which took 
        me <b>{toTimeString(flightTime)}</b> hours. 
      </p>
      <p>
        During that time I covered (At least) <b>{tripDistanceCovered} NM</b>,
        which is enough to go around the equator <b>{tripsAroundTheWorld}</b> times.
      </p>
      <p>
        I did all of this in <b>{aircraftCount} different aircraft</b> of <b>{aircraftTypeCount}</b> types. 
        My most often flown aircraft type being the <b>{mostFrequentType}</b>.
      </p>
      <p>
        I've performed <b>{landings} landings</b> in <b>{airportCount} airports</b> in <b>{countryCount} countries</b>
      </p>

      <p>
        My longest flight leg has covered <b>{maxDistanceInOneFlight}NM</b> taking 
        me <b>{toTimeString(longestFlightTime)}</b> hours to complete.
        My busiest day saw me covering <b>{maxDistanceInOneDay}NM</b> taking
        me <b>{toTimeString(longestDailyFlightTime)}</b> hours to complete.
      </p>

    </AppContainer>
  );
}

export const getStaticProps: GetStaticProps<StatsPageProps> = async () => {
  const tripDistance = Math.floor(
    rawFlights.reduce((s, r) => s + calculateTripDistance(r), 0)
  )

  const flightTime = Math.floor(rawFlights.reduce((s, r) => {
    return s 
      + (r.pilotLog.singleEnginePistonTime  ?? 0)
      + (r.pilotLog.multiEnginePistonTime ?? 0)
  }, 0 ))

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
        const key = new Date(r.pilotLog.departure).toISOString().slice(0, 10);
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
        const key = new Date(r.pilotLog.departure).toISOString().slice(0, 10);
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

  const countryCount =  [...new Set(rawFlights.flatMap((r) => [
    r.airport.destination.code.slice(0, 2),
    r.airport.origin.code.slice(0, 2),
  ]))].length

  const mostFrequentType = Object.entries(
    rawFlights
      .reduce<Record<string, number>>((s, r) => {
        const key =r.aircraft.model.text
        return {
          ...s,
          [key]: (s[key] ?? 0) + 1,
        }
      }, {}))
    .sort((a, b) => b[1] - a[1])[0][0]

  const landings = rawFlights.reduce((s, r) => {
    return s + r.pilotLog.landings.day + r.pilotLog.landings.night
  }, 0)

  const aircraftCount = [...new Set(rawFlights.map(r => r.aircraft.identification.registration))].length
  const aircraftTypeCount = [...new Set(rawFlights.map(r => r.aircraft.model.code))].length
  const tripsAroundTheWorld = Math.floor(tripDistanceCovered / (360 * 60) * 100) / 100

  return {
    props: {
      flightsCount: rawFlights.length,
      airportCount,
      mostFrequentType,
      countryCount,
      tripDistance,
      flightTime,
      landings,
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