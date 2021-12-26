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
import { Flight, FlightLogCarryOver, PilotLog } from "src/types/Flight";
import { flightLog, flights } from "src/content/flights";

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
  flights: Omit<Flight, "track">[],
}    

const IndexPage: NextPage<IndexPageProps> = ({
  flightLog,
  flights
}) => (
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
          <div>({flightLog.landings.day})</div>
        </StyledTimeCell>
        <StyledTimeCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {flights.map(({ identification, pilotLog, airport, aircraft }) => (
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
          <TableCell align="center">{pilotLog.landings.day}</TableCell>
          <TableCell align="center">
            <Link href={`/flights/${identification.id.toUpperCase()}`} >
              <ArrowForwardIcon />
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </StyledTable>
);

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  return {
    props: {
      flightLog,
      flights: flights.map(({ track, ...flight}) => flight),
    },
  };
};

export default IndexPage;