import { GetStaticProps, NextPage } from "next";
import { default as Link } from "next/link";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import {
  ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";
import { AppContainer } from "src/containers/AppContainer";
import { flights as rawFlights } from "records/flights";
import { FlightLogCarryOver, FlightWithoutTrack } from "src/types/Flight";
import { calculateTripDistance, calculateTripDistanceCovered } from "src/utils/flightProcessing";

const StyledTable = styled(Table)(() => ({
  minWidth: 650,
  maxWidth: 1000,
  margin: "auto",
}));

const StyledDateCell = styled(TableCell)(() => ({
  width: "6rem",
}));

const StyledFromToCell = styled(TableCell)(() => ({
  width: "10rem",
}));

const StyledTimeCell = styled(TableCell)(() => ({
  width: "12rem",
}));

const toTimeString = (minutes: number | undefined = 0) =>
  minutes
    ? `${`${Math.floor(minutes / 60) || "0"}`}:${`00${minutes % 60}`.slice(-2)}`
    : "-";

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
      <StyledTable stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledDateCell align="left">
              Date
            </StyledDateCell>
            <TableCell align="left">Type / Registration</TableCell>
            <StyledFromToCell align="center">
              From / To
            </StyledFromToCell>
            <StyledTimeCell align="center">
              <div>SEP</div>
              <div>({toTimeString(flightLog.singleEnginePistonTime)})</div>
            </StyledTimeCell>
            <StyledTimeCell align="center">
              <div>PIC</div>
              <div>({toTimeString(flightLog.picTime)})</div>
            </StyledTimeCell>
            <StyledTimeCell align="center">
              <div>Dual</div>
              <div>({toTimeString(flightLog.dualTime)})</div>
            </StyledTimeCell>
            <StyledTimeCell align="center">
              <div>Landings</div>
              <div>({flightLog.landings.day + flightLog.landings.night})</div>
            </StyledTimeCell>
            <TableCell align="center">tripDistance</TableCell>
            <TableCell align="center">tripDistanceCovered</TableCell>
            <StyledTimeCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map(({ identification, pilotLog, airport, aircraft, tripDistance, tripDistanceCovered }) => (
            <TableRow key={identification.id}>
              <TableCell align="left">
                {new Date(pilotLog.departure)
                  .toISOString()
                  .slice(0, 10)
                  .replace(/-/g, "/")}
              </TableCell>
              <TableCell align="left">{aircraft.model.code}</TableCell>
              <TableCell align="center">
                {airport.origin.code} / {airport.destination.code}
              </TableCell>
              <TableCell align="center">
                {toTimeString(pilotLog.singleEnginePistonTime)}
              </TableCell>
              <TableCell align="center">
                {toTimeString(pilotLog.picTime)}
              </TableCell>
              <TableCell align="center">
                {toTimeString(pilotLog.dualTime)}
              </TableCell>
              <TableCell align="center">{pilotLog.landings.day + pilotLog.landings.night}</TableCell>
              <TableCell align="center">{tripDistance}</TableCell>
              <TableCell align="center">{tripDistanceCovered}</TableCell>

              

              <TableCell align="center">
                <Link href={`/flights/${identification.id.toUpperCase()}`} >
                  <ArrowForwardIcon />
                </Link>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
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
  }))
  

  return {
    props: {
      flights,
      flightLog,
    },
  };
};

export default IndexPage;