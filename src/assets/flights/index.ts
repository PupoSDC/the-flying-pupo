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
import flight20201107EDKBEDKB from "./20201107EDKBEDKB";
import flight20201108EDKBEDKB from "./20201108EDKBEDKB";
import flight20201108EDKBEDKB2 from "./20201108EDKBEDKB2";
import flight20201109EDKBEDKB from "./20201109EDKBEDKB";
import flight20201109EDKBEDKB2 from "./20201109EDKBEDKB2";
import flight20201111EDKBEDKB from "./20201111EDKBEDKB";
import flight20201111EDKBEDKB2 from "./20201111EDKBEDKB2";
import flight20201112EDKBEDGS from "./20201112EDKBEDGS";
import flight20201112EDGSEDKB from "./20201112EDGSEDKB";
import flight20201113EDKBEDKB from "./20201113EDKBEDKB";
import flight20201115EDKBEDGS from "./20201115EDKBEDGS";
import flight20201115EDGSEDKB from "./20201115EDGSEDKB";
import flight20201122EDKBEDRK from "./20201122EDKBEDRK";
import flight20201122EDRKEDKB from "./20201122EDRKEDKB";
import flight20201128EDKBEDKB from "./20201128EDKBEDKB";
import flight20201129EDKBEDGS from "./20201129EDKBEDGS";
import flight20201129EDGSEDKB from "./20201129EDGSEDKB";
import flight20201130EDKBEDRK from "./20201130EDKBEDRK";
import flight20201130EDRKEDKB from "./20201130EDRKEDKB";
import flight20201205EDKBEDRK from "./20201205EDKBEDRK";
import flight20201205EDRKEDRK from "./20201205EDRKEDRK";
import flight20201205EDRKEDKB from "./20201205EDRKEDKB";
import flight20201206EDKBEDKB from "./20201206EDKBEDKB";
import flight20210116EDKBEDKB from "./20210116EDKBEDKB";
import flight20210221EDKBEDGS from "./20210221EDKBEDGS";
import flight20210221EDGSEDKB from "./20210221EDGSEDKB";
import flight20210305EDKBEDGS from "./20210305EDKBEDGS";
import flight20210305EDGSEDGS from "./20210305EDGSEDGS";
import flight20210305EDGSEDKB from "./20210305EDGSEDKB";
import flight20210306EDKBEDRT from "./20210306EDKBEDRT";
import flight20210306EDRTEDRT from "./20210306EDRTEDRT";
import flight20210306EDRTEDKB from "./20210306EDRTEDKB";
import flight20210307EDKBEDKB from "./20210307EDKBEDKB";

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
  flight20201107EDKBEDKB,
  flight20201108EDKBEDKB,
  flight20201108EDKBEDKB2,
  flight20201109EDKBEDKB,
  flight20201109EDKBEDKB2,
  flight20201111EDKBEDKB,
  flight20201111EDKBEDKB2,
  flight20201112EDKBEDGS,
  flight20201112EDGSEDKB,
  flight20201113EDKBEDKB,
  flight20201115EDKBEDGS,
  flight20201115EDGSEDKB,
  flight20201122EDKBEDRK,
  flight20201122EDRKEDKB,
  flight20201128EDKBEDKB,
  flight20201129EDKBEDGS,
  flight20201129EDGSEDKB,
  flight20201130EDKBEDRK,
  flight20201130EDRKEDKB,
  flight20201205EDKBEDRK,
  flight20201205EDRKEDRK,
  flight20201205EDRKEDKB,
  flight20201206EDKBEDKB,
  flight20210116EDKBEDKB,
  flight20210221EDKBEDGS,
  flight20210221EDGSEDKB,
  flight20210305EDKBEDGS,
  flight20210305EDGSEDGS,
  flight20210305EDGSEDKB,
  flight20210306EDKBEDRT,
  flight20210306EDRTEDRT,
  flight20210306EDRTEDKB,
  flight20210307EDKBEDKB,
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
