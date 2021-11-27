import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { FunctionComponent } from "react";
import { PageProps, useStaticQuery, graphql, Link } from "gatsby";
import { GetPilotLogPageDataQuery } from "../graphql";

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

const PilotLogPage: FunctionComponent<PageProps<GetPilotLogPageDataQuery>> = ({
  data: {
    flightLog,
    allFlight: {
      nodes: flights
    },
  }
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
      </TableRow>
    </TableHead>
    <TableBody>
      {flights.map(({ id, pilotLog, airport, aircraft }) => (
        <Link to={`/flights/${id.toLowerCase()}`} >
          <TableRow key={id}>
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
          </TableRow>
        </Link>
      ))}
    </TableBody>
  </StyledTable>
);

export const query = graphql`
  query GetPilotLogPageData {
    flightLog {
      id
      dualTime
      fiTime
      ifrTime
      nightTime
      picTime
      singleEnginePistonTime
      landings {
        day
        night
      }
    }
    allFlight(sort: {fields: pilotLog___departure, order: DESC}) {
      nodes {
        id
        aircraft {
          identification {
            registration
          }
          model {
            code
          }
        }
        airport {
          destination {
            code
          }
          origin {
            code
          }
        }
        pilotLog {
          arrival
          departure
          landings {
            day
          }
          dualTime
          picTime
          singleEnginePistonTime
        }
      }
    }
  }
`;

export default PilotLogPage;