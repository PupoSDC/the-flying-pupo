import { default as fs } from "fs";
import { default as path } from "path";
import { Header } from "src/components/Header";
import { Flight } from "src/types/Flight";
import { toTimeString } from "src/utils/flightProcessing";
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
                <div>Month / Year</div>
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
            </tr>
          </thead>
          <tbody>
            {Object.entries(flights.reduce<Record<string, {
              singleEnginePistonTime: number,
              multiEnginePistonTime: number,
              picTime: number,
              dualTime: number,
              nightTime: number,
              ifrTime: number,
              ladingsDay: number,
              landingsNight: number,
            }>>((sum, entry) => ({
              ...sum,
              [entry.identification.id.slice(0, 6)]: {
                singleEnginePistonTime: (sum[entry.identification.id.slice(0, 6)]?.singleEnginePistonTime ?? 0) + (entry.pilotLog.singleEnginePistonTime ?? 0),
                multiEnginePistonTime: (sum[entry.identification.id.slice(0, 6)]?.multiEnginePistonTime ?? 0) + (entry.pilotLog.multiEnginePistonTime ?? 0),
                picTime: (sum[entry.identification.id.slice(0, 6)]?.picTime ?? 0) + (entry.pilotLog.picTime ?? 0),
                dualTime: (sum[entry.identification.id.slice(0, 6)]?.dualTime ?? 0) + (entry.pilotLog.dualTime ?? 0),
                nightTime: (sum[entry.identification.id.slice(0, 6)]?.nightTime ?? 0) + (entry.pilotLog.nightTime ?? 0),
                ifrTime: (sum[entry.identification.id.slice(0, 6)]?.ifrTime ?? 0) + (entry.pilotLog.ifrTime ?? 0),
                ladingsDay: (sum[entry.identification.id.slice(0, 6)]?.ladingsDay ?? 0) + (entry.pilotLog.landings.day ?? 0),
                landingsNight: (sum[entry.identification.id.slice(0, 6)]?.landingsNight ?? 0) + (entry.pilotLog.landings.night ?? 0),
              }
            }), {})).map(
              ([identification, {
                singleEnginePistonTime,
                multiEnginePistonTime,
                picTime,
                dualTime,
                nightTime,
                ifrTime,
                ladingsDay,
                landingsNight,
              }]) => (
                <tr key={identification}>
                  <td align="center" className={styles.priority2}>
                    {identification.slice(0, 4)}.{identification.slice(4, 6)}
                  </td>
                  <td align="center" className={styles.priority2}>
                    <div>
                      {toTimeString(singleEnginePistonTime + multiEnginePistonTime)}
                    </div>
                  </td>
                  <td align="center" className={styles.priority4}>
                    <div>{toTimeString(singleEnginePistonTime)}</div>
                  </td>
                  <td align="center" className={styles.priority4}>
                    <div>{toTimeString(multiEnginePistonTime)}</div>
                  </td>
                  <td align="center" className={styles.priority3}>
                    <div>{toTimeString(picTime)}</div>
                  </td>
                  <td align="center" className={styles.priority3}>
                    <div>{toTimeString(dualTime)}</div>
                  </td>
                  <td align="center" className={styles.priority5}>
                    <div>{toTimeString(nightTime)}</div>
                  </td>
                  <td align="center" className={styles.priority5}>
                    <div>{toTimeString(ifrTime)}</div>
                  </td>
                  <td align="center" className={styles.priority6}>
                    <div>
                      {ladingsDay} | {landingsNight}
                    </div>
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
