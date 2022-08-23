import { GetStaticProps, NextPage } from "next";
import { default as Link } from "next/link";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { AppContainer } from "src/containers/AppContainer";
import { flights as rawFlights } from "records/flights";
import { FlightLogCarryOver, FlightWithoutTrack } from "src/types/Flight";
import { calculateTripDistance, calculateTripDistanceCovered, toTimeString } from "src/utils/flightProcessing";


type IndexPageProps = {
  flightLog: FlightLogCarryOver,
  flights: Array<FlightWithoutTrack & {
    tripDistance: number,
    tripDistanceCovered: number,
  }> ,
}

const IndexPage: NextPage<IndexPageProps> = ({
  flightLog,
  flights,
}) => {
  return (
    <AppContainer
      title={"The Flying Pupo"}
      linkTitle={"The Flying Pupo"}
      description={"My own adventures through the sky"}
      imageUrl={""}
    >
      <table aria-label="simple table" className="table-auto">
        <thead className="bg-gray-300">
          <tr>
            <th align="left">
              Date
            </th>
            <th align="center">Type<br/>Registration</th>
            <th align="center">
              From<br/>To
            </th>
            <th align="center">
              <div>SEP</div>
              <div>({toTimeString(flightLog.singleEnginePistonTime)})</div>
            </th>
            <th align="center">
              <div>PIC</div>
              <div>({toTimeString(flightLog.picTime)})</div>
            </th>
            <th align="center">
              <div>Dual</div>
              <div>({toTimeString(flightLog.dualTime)})</div>
            </th>
            <th align="center">
              <div>Landings</div>
              <div>({flightLog.landings.day} | {flightLog.landings.night})</div>
            </th>
            <th align="center">
              NGM<br/>
              ({flights.reduce((s, r) => s + r.tripDistanceCovered, 0)})
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {flights.map(({ identification, pilotLog, airport, aircraft, tripDistance, tripDistanceCovered }) => (
            <tr key={identification.id}>
              <td align="left">
                {new Date(pilotLog.departure)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, ".")}
              </td>
              <td align="center">{aircraft.model.code}<br />{aircraft.identification.registration}</td>
              <td align="center">
                {airport.origin.code}<br />{airport.destination.code}
              </td>
              <td align="center">
                {toTimeString(pilotLog.singleEnginePistonTime)}
              </td>
              <td align="center">
                {toTimeString(pilotLog.picTime)}
              </td>
              <td align="center">
                {toTimeString(pilotLog.dualTime)}
              </td>
              <td align="center">{pilotLog.landings.day} | {pilotLog.landings.night}</td>
              <td align="center">{tripDistanceCovered}</td>
              <td align="center">
                <Link href={`/flights/${identification.id.toUpperCase()}`} >
                  <ArrowForwardIcon />
                </Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </AppContainer>
  );
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const flightLog = rawFlights.reduce<FlightLogCarryOver>(
    (sum, { pilotLog }) => ({
      singleEnginePistonTime:
        sum.singleEnginePistonTime + (pilotLog.singleEnginePistonTime || 0),
      nightTime: sum.nightTime + (pilotLog.nightTime || 0),
      ifrTime: sum.ifrTime + (pilotLog.ifrTime || 0),
      picTime: sum.picTime + (pilotLog.picTime || 0),
      dualTime: sum.dualTime + (pilotLog.dualTime || 0),
      fiTime: sum.fiTime + (pilotLog.fiTime || 0),
      landings: {
        day: sum.landings.day + pilotLog.landings.day,
        night: sum.landings.night + pilotLog.landings.night,
      },
    }),
    {
      singleEnginePistonTime: 0,
      nightTime: 0,
      ifrTime: 0,
      picTime: 0,
      dualTime: 0,
      fiTime: 0,
      landings: {
        day: 0,
        night: 0,
      },
    }
  );

  const flights = rawFlights.map((flight) => ({
    identification: flight.identification, 
    pilotLog: flight.pilotLog, 
    airport: flight.airport, 
    aircraft: flight.aircraft,
    tripDistance: Math.floor(calculateTripDistance(flight)),
    tripDistanceCovered: Math.floor(calculateTripDistanceCovered(flight)),
  })).sort((a, b) => b.pilotLog.departure - a.pilotLog.departure)
  

  return {
    props: {
      flights,
      flightLog,
    },
  };
};

export default IndexPage;