import { FlightLogCarryOver } from "../../types/Flight";
import flight20200915EDKBEDKB from "./20200915EDKBEDKB";
import flight20200920EDKBEDKB from "./20200920EDKBEDKB";
import flight20200923EDKBEDKB from "./20200923EDKBEDKB";
import flight20200924EDKBEDKB from "./20200924EDKBEDKB";
import flight20200927EDKBEDKB from "./20200927EDKBEDKB";
import flight20201001EDKBEDKB from "./20201001EDKBEDKB";
import flight20201007EDKBEDKB from "./20201007EDKBEDKB";
import flight20201011EDKBEDKB from "./20201011EDKBEDKB";
import flight20201014EDKBEDKB from "./20201014EDKBEDKB";
import flight20201017EDKBEDKB from "./20201017EDKBEDKB";
import flight20201018EDKBEDKB from "./20201018EDKBEDKB";
import flight20201021EDKBEDKB from "./20201021EDKBEDKB";
import flight20201027EDKBEDKB from "./20201027EDKBEDKB";
import flight20201029EDKBEDKB from "./20201029EDKBEDKB";
import flight20201029EDKBEDKB2 from "./20201029EDKBEDKB2";
import flight20201101EDKBEDKB from "./20201101EDKBEDKB";
import flight20201101EDKBEDKB2 from "./20201101EDKBEDKB2";

const flights = [
  flight20200915EDKBEDKB,
  flight20200920EDKBEDKB,
  flight20200923EDKBEDKB,
  flight20200924EDKBEDKB,
  flight20200927EDKBEDKB,
  flight20201001EDKBEDKB,
  flight20201007EDKBEDKB,
  flight20201011EDKBEDKB,
  flight20201014EDKBEDKB,
  flight20201017EDKBEDKB,
  flight20201018EDKBEDKB,
  flight20201021EDKBEDKB,
  flight20201027EDKBEDKB,
  flight20201029EDKBEDKB,
  flight20201029EDKBEDKB2,
  flight20201101EDKBEDKB,
  flight20201101EDKBEDKB2,
];

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
