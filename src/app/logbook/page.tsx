import { FaPlane } from "react-icons/fa";
import { default as Link } from "next/link";
import { getFlightLog } from "src/server/get-flight-log";
import { notFound } from "next/navigation";
import { minutesToHourString } from "src/utils/minutes-to-hour-string";
import { cn } from "src/utils/cn";
import { Header } from "src/components/header/header";

const LogbookPage = async () => {
  const { flights, aircrafts, airports } = await getFlightLog();

  const flightLog = flights.at(-1)?.carryOver;
  if (!flightLog) return notFound();
  
  return (
    <>
      <Header title="My Logbook" />
      <main className="max-w-screen-2xl mx-auto mt-16">
        <table 
          className={cn(
            "table-auto",
            "w-full",
            "h-full",
            "border-separate",
            "border-spacing-0",
            "text-slate-200",
            "[&_thead]:bg-slate-600",
            "[&_thead_th]:border-slate-300",
            "[&_thead_div]:border-slate-300",
            "[&_tbody_td]:border-slate-600",
            "[&_tbody_td_div]:border-slate-600",
            "[&_tbody_tr]:bg-slate-800",
            "[&_tbody_tr:nth-last-child(3n)]:bg-slate-700",
            "[&_th]:box-content",
            "[&_th]:bg-slate-600",
            "[&_th]:sticky",
            "[&_th]:top-0",
            "[&_th]:p-0",
            "[&_th]:shadow-lg",
            "[&_th]:border-l-0",
            "[&_th]:border-b",
            "[&_th]:border-t",
            "[&_th]:border-r",
            "[&_th]:text-nowrap",
            "[&_th:nth-child(1)]:border-l",
            "[&_th_div:nth-child(2)]:border-t",
            "[&_th>*]:p-1",
            "[&_td]:border-l-0",
            "[&_td:first-child]:border-l",
            "[&_td]:border-t",
            "[&_td]:border-r",
            "[&_td>*]:p-1",
            "[&_tr_div:nth-child(2)]:border-t",
          )}
        >
          <thead>
            <tr>
              <th align="left">
                <div>Date</div>
              </th>
              <th align="left" className="hidden sm:table-cell">
                <div>Type</div>
                <div>Registration</div>
              </th>
              <th align="left">
                <div>From</div>
                <div>To</div>
              </th>
              <th align="left" className="hidden sm:table-cell">
                <div>Departure</div>
                <div>Arrival</div>
              </th>
              <th align="center">
                <div>Total Time</div>
                <div>({minutesToHourString(flightLog.totalTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden lg:table-cell">
                <div>SEP</div>
                <div>({minutesToHourString(flightLog.singleEnginePistonTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden lg:table-cell">
                <div>MEP</div>
                <div>({minutesToHourString(flightLog.multiEnginePistonTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden lg:table-cell">
                <div>Multi Pilot</div>
                <div>({minutesToHourString(flightLog.multiPilotTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden md:table-cell">
                <div>PIC</div>
                <div>({minutesToHourString(flightLog.picTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden md:table-cell">
                <div>Dual</div>
                <div>({minutesToHourString(flightLog.dualTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden xl:table-cell">
                <div>Night</div>
                <div>({minutesToHourString(flightLog.nightTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden xl:table-cell">
                <div>IFR</div>
                <div>({minutesToHourString(flightLog.ifrTimeMinutes)})</div>
              </th>
              <th align="center" className="hidden xl:table-cell">
                <div className="w-20">Landings</div>
                <div>
                  ({flightLog.landings.day} | {flightLog.landings.night})
                </div>
              </th>
              <th />
            </tr>
          </thead>
          <tbody>
            {flights.map(({ id, pilotLog, origin, destination, aircraft }) => (
              <tr key={id}>
                <td align="left">
                  <div>
                    {pilotLog.departure.toFormat("yyyy-MM-dd")}
                  </div>
                </td>
                <td align="left" className="hidden sm:table-cell">
                  <div>{aircrafts[aircraft].code}</div>
                  <div>{aircrafts[aircraft].registration}</div>
                </td>
                <td align="left">
                  <div>{airports[origin].code}</div>
                  <div>{airports[destination].code}</div>
                </td>
                <td align="left" className="hidden sm:table-cell">
                  <div>{pilotLog.departure.toFormat("HH:mm")}</div>
                  <div>{pilotLog.arrival.toFormat("HH:mm")}</div>
                </td>
                <td align="center">
                  <div>
                    {minutesToHourString(
                      (pilotLog.singleEnginePistonTimeMinutes) +
                      (pilotLog.multiEnginePistonTimeMinutes) +
                      (pilotLog.multiPilotTimeMinutes)
                    )}
                  </div>
                </td> 
                <td align="center" className="hidden lg:table-cell" >
                  <div>{minutesToHourString(pilotLog.singleEnginePistonTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden lg:table-cell" >
                  <div>{minutesToHourString(pilotLog.multiEnginePistonTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden lg:table-cell" >
                  <div>{minutesToHourString(pilotLog.multiPilotTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden md:table-cell" >
                  <div>{minutesToHourString(pilotLog.picTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden md:table-cell" >
                  <div>{minutesToHourString(pilotLog.dualTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden xl:table-cell" >
                  <div>{minutesToHourString(pilotLog.nightTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden xl:table-cell" >
                  <div>{minutesToHourString(pilotLog.ifrTimeMinutes)}</div>
                </td>
                <td align="center" className="hidden xl:table-cell" >
                  <div>
                    {pilotLog.landings.day} | {pilotLog.landings.night}
                  </div>
                </td>
                <td align="center">
                  <Link href={`flights/${id}`} className="m-4">
                    <FaPlane />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default LogbookPage;
