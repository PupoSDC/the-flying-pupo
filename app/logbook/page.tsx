import { FlightLogCarryOver, Flight } from "src/types/Flight";
import { default as Link } from 'next/link'
import { default as path } from 'path';
import { default as fs } from 'fs';
import { toHourString, toTimeString } from "src/utils/flightProcessing";
import { LinkIcon } from "@heroicons/react/24/outline"
import style from "./styles.module.css";

const getData = async () => {
  const file = path.join(process.cwd(), 'public', 'records', 'flightLog.json');
  const flights: Flight[] = JSON.parse(fs.readFileSync(file, 'utf8'));

  const flightLog = flights.reduce<FlightLogCarryOver>(
    (sum, { pilotLog }) => ({
      singleEnginePistonTime:
        sum.singleEnginePistonTime + (pilotLog.singleEnginePistonTime || 0),
      multiEnginePistonTime:
        sum.multiEnginePistonTime + (pilotLog.multiEnginePistonTime || 0),
      nightTime: sum.nightTime + (pilotLog.nightTime || 0),
      ifrTime: sum.ifrTime + (pilotLog.ifrTime || 0),
      picTime: sum.picTime + (pilotLog.picTime || 0),
      dualTime: sum.dualTime + (pilotLog.dualTime || 0),
      fiTime: sum.fiTime + (pilotLog.fiTime || 0),
      landings: {
        day: sum.landings.day + pilotLog.landings.day,
        night: sum.landings.night + pilotLog.landings.night,
      },
    }),
    {
      singleEnginePistonTime: 0,
      multiEnginePistonTime: 0,
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

  return {
    flights,
    flightLog
  };
}

const IndexPage = async () => {
  const { flights, flightLog } = await getData();

  return (
    <table aria-label="simple table" className={style.logbookTable}>
      <thead className="bg-gray-300">
        <tr>
          <th align="left">
            <div>Date</div>
          </th>
          <th align="center">
            <div>Type</div>
            <div>Registration</div>
          </th>
          <th align="center">
            <div>From</div>
            <div>To</div>
          </th>
          <th align="center">
            <div>Departure</div>
            <div>Arrival</div>
          </th>
          <th align="center">
            <div>SEP</div>
            <div>({toTimeString(flightLog.singleEnginePistonTime)})</div>
          </th>
          <th align="center">
            <div>MEP</div>
            <div>({toTimeString(flightLog.multiEnginePistonTime)})</div>
          </th>
          <th align="center">
            <div>PIC</div>
            <div>({toTimeString(flightLog.picTime)})</div>
          </th>
          <th align="center">
            <div>Dual</div>
            <div>({toTimeString(flightLog.dualTime)})</div>
          </th>
          <th align="center">
            <div className="w-20">Landings</div>
            <div>({flightLog.landings.day} | {flightLog.landings.night})</div>
          </th>
          <th align="center">
            <div>
              NGM<br />
              ({flights.reduce((s, r) => s + r.tripDistanceCovered, 0)})
            </div>
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {flights.map(({ identification, pilotLog, airport, aircraft, tripDistanceCovered }) => (
          <tr key={identification.id}>
            <td align="left">
              <div>
              {new Date(pilotLog.departure)
                .toISOString()
                .slice(0, 10)
                .replace(/-/g, ".")}
              </div>
            </td>
            <td align="center">
              <div>{aircraft.model.code}</div>
              <div>{aircraft.identification.registration}</div>
            </td>
            <td align="center">
              <div>{airport.origin.code}</div>
              <div>{airport.destination.code}</div>
            </td>
            <td align="center">
              <div>{toHourString(pilotLog.departure)}</div>
              <div>{toHourString(pilotLog.arrival)}</div>
            </td>
            <td align="center">
              <div>{toTimeString(pilotLog.singleEnginePistonTime)}</div>
            </td>
            <td align="center">
              <div>{toTimeString(pilotLog.multiEnginePistonTime)}</div>
            </td>
            <td align="center">
              <div>{toTimeString(pilotLog.picTime)}</div>
            </td>
            <td align="center">
              <div>{toTimeString(pilotLog.dualTime)}</div>
            </td>
            <td align="center">{pilotLog.landings.day} | {pilotLog.landings.night}</td>
            <td align="center">{tripDistanceCovered}</td>
            <td align="center">
              <Link href={`flights/${identification.id}`}>
                <LinkIcon  className="h-6 w-6 text-blue-500 m-2" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default IndexPage;