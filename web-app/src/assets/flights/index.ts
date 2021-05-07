import { FlightLogCarryOver } from "../../types/Flight";

import { flights2020 } from "./2020";
import { flights2021 } from "./2021";

const flights = [...flights2020, ...flights2021];

export const carryOver = flights.reduce<FlightLogCarryOver>(
  (sum, { pilotLog }) => {
    return {
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
    };
  },
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

export default flights;
