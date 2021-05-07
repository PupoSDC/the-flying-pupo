import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import flights, { carryOver } from "../assets/flights";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 1000,
    margin: "auto",
  },
  timeCell: {
    width: "6rem",
  },
  fromToCell: {
    width: "10rem",
  },
  dateCell: {
    width: "12rem",
  },
});

const toTimeString = (minutes: number | undefined = 0) =>
  minutes
    ? `${`${Math.floor(minutes / 60) || "0"}`}:${`00${minutes % 60}`.slice(-2)}`
    : "-";

const LogView: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Table stickyHeader className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left" className={classes.dateCell}>
            Date
          </TableCell>
          <TableCell align="left">Type / Registration</TableCell>
          <TableCell align="center" className={classes.fromToCell}>
            From / To
          </TableCell>
          <TableCell align="center" className={classes.timeCell}>
            <div>SEP</div>
            <div>({toTimeString(carryOver.singleEnginePistonTime)})</div>
          </TableCell>
          <TableCell align="center" className={classes.timeCell}>
            <div>PIC</div>
            <div>({toTimeString(carryOver.picTime)})</div>
          </TableCell>
          <TableCell align="center" className={classes.timeCell}>
            <div>Dual</div>
            <div>({toTimeString(carryOver.dualTime)})</div>
          </TableCell>
          <TableCell align="center" className={classes.timeCell}>
            <div>Landings</div>
            <div>({carryOver.landings.day})</div>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {flights
          .slice()
          .reverse()
          .map(({ identification, pilotLog, airport, aircraft }) => (
            <TableRow key={identification.id}>
              <TableCell align="left">
                {pilotLog.departure
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
          ))}
      </TableBody>
    </Table>
  );
};

export default LogView;
