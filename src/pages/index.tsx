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
import { prefetchUseFlights, useFlights } from "src/queries/useFlights";
import { prefetchUseFlightLog, useFlightLog } from "src/queries/useFlightLog";
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { ReactQueryPageProps } from "src/types/Next";

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

const IndexPage: NextPage = () => {
 const flights = useFlights();
 const flightLog = useFlightLog();

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
    </AppContainer>
  );
}

export const getServerSideProps: GetStaticProps<ReactQueryPageProps> = async () => {
  const queryClient = new QueryClient()

  await Promise.all([
    prefetchUseFlightLog(queryClient),
    prefetchUseFlights(queryClient)
  ]);
 
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;