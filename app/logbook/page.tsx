import { default as fs } from "fs";
import { default as path } from "path";
import { Header } from "src/components/Header";
import { Flight } from "src/types/Flight";
import { toHourString, toTimeString } from "src/utils/flightProcessing";
import { FaPlane } from "react-icons/fa";
import { default as Link } from "next/link";
import { default as styles } from "./styles.module.css";

const getData = async () => {
  const file = path.join(process.cwd(), "public", "records", "flightLog.json");
  const flights: Flight[] = JSON.parse(fs.readFileSync(file, "utf8"));
  const flightLog = flights[0].flightLogCarryOver;

  return {
    flights,
    flightLog,
  };
};

const IndexPage = async () => {
  const { flights, flightLog } = await getData();
  return (
    <>
      <Header>My Logbook</Header>
      <main className={styles.logbookTable}>
        <table aria-label="simple table">
          <thead className="bg-gray-300">
            <tr>
              <th align="left" className={styles.priority0}>
                <div>Date</div>
              </th>
              <th align="left" className={styles.priority0}>
                <div>Type</div>
                <div>Registration</div>
              </th>
              <th align="left" className={styles.priority0}>
                <div>From</div>
                <div>To</div>
              </th>
              <th align="left" className={styles.priority1}>
                <div>Departure</div>
                <div>Arrival</div>
              </th>
              <th align="center" className={styles.priority2}>
                <div>Total Time</div>
                <div>({toTimeString(flightLog.totalTime)})</div>
              </th>
              <th align="center" className={styles.priority4}>
                <div>SEP</div>
                <div>({toTimeString(flightLog.singleEnginePistonTime)})</div>
              </th>
              <th align="center" className={styles.priority4}>
                <div>MEP</div>
                <div>({toTimeString(flightLog.multiEnginePistonTime)})</div>
              </th>
              <th align="center" className={styles.priority4}>
                <div>Multi Pilot</div>
                <div>({toTimeString(flightLog.multiPilotTime)})</div>
              </th>
              <th align="center" className={styles.priority3}>
                <div>PIC</div>
                <div>({toTimeString(flightLog.picTime)})</div>
              </th>
              <th align="center" className={styles.priority3}>
                <div>Dual</div>
                <div>({toTimeString(flightLog.dualTime)})</div>
              </th>
              <th align="center" className={styles.priority5}>
                <div>Night</div>
                <div>({toTimeString(flightLog.nightTime)})</div>
              </th>
              <th align="center" className={styles.priority5}>
                <div>IFR</div>
                <div>({toTimeString(flightLog.ifrTime)})</div>
              </th>
              <th align="center" className={styles.priority6}>
                <div className="w-20">Landings</div>
                <div>
                  ({flightLog.landings.day} | {flightLog.landings.night})
                </div>
              </th>
              <th className={styles.priority0} />
            </tr>
          </thead>
          <tbody>
            {flights.map(
              ({
                identification,
                pilotLog,
                airport,
                aircraft,
              }) => (
                <tr key={identification.id}>
                  <td align="left" className={styles.priority0}>
                    <div>
                      {new Date(pilotLog.departure)
                        .toISOString()
                        .slice(0, 10)
                        .replace(/-/g, ".")}
                    </div>
                  </td>
                  <td align="left" className={styles.priority0}>
                    <div>{aircraft.model.code}</div>
                    <div>{aircraft.identification.registration}</div>
                  </td>
                  <td align="left" className={styles.priority0}>
                    <div>{airport.origin.code}</div>
                    <div>{airport.destination.code}</div>
                  </td>
                  <td align="left" className={styles.priority1}>
                    <div>{toHourString(pilotLog.departure)}</div>
                    <div>{toHourString(pilotLog.arrival)}</div>
                  </td>
                  <td align="center" className={styles.priority2}>
                    <div>
                      {toTimeString(
                        (pilotLog.singleEnginePistonTime ?? 0) +
                          (pilotLog.multiEnginePistonTime ?? 0)
                      )}
                    </div>
                  </td>
                  <td align="center" className={styles.priority4}>
                    <div>{toTimeString(pilotLog.singleEnginePistonTime)}</div>
                  </td>
                  <td align="center" className={styles.priority4}>
                    <div>{toTimeString(pilotLog.multiEnginePistonTime)}</div>
                  </td>
                  <td align="center" className={styles.priority4}>
                    <div>{toTimeString(pilotLog.multiPilotTime)}</div>
                  </td>
                  <td align="center" className={styles.priority3}>
                    <div>{toTimeString(pilotLog.picTime)}</div>
                  </td>
                  <td align="center" className={styles.priority3}>
                    <div>{toTimeString(pilotLog.dualTime)}</div>
                  </td>
                  <td align="center" className={styles.priority5}>
                    <div>{toTimeString(pilotLog.nightTime)}</div>
                  </td>
                  <td align="center" className={styles.priority5}>
                    <div>{toTimeString(pilotLog.ifrTime)}</div>
                  </td>
                  <td align="center" className={styles.priority6}>
                    <div>
                      {pilotLog.landings.day} | {pilotLog.landings.night}
                    </div>
                  </td>
                  <td align="center" className={styles.priority0}>
                    <Link href={`flights/${identification.id}`}>
                      <FaPlane />
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </main>
      <footer className={styles.logbookFooter}></footer>
    </>
  );
};

export default IndexPage;
