import {
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaExternalLinkAlt,
  FaHome,
  FaListAlt,
  FaPlane,
} from "react-icons/fa";
import Link from "next/link";
import { notFound } from "next/navigation";
import { default as fs } from "fs";
import { default as path } from "path";
import { flight } from "records/flights/2023/20230106EPLLEPLL";
import { FlightMap } from "src/components/FlightMap";
import { Header } from "src/components/Header";
import type { Flight } from "src/types/Flight";
import { toHourString, toTimeString } from "src/utils/flightProcessing";
import { default as styles } from "./styles.module.css";

const getData = (id: string) => {
  const file = path.join(process.cwd(), "public", "records", `${id}.json`);
  const flight: Flight = JSON.parse(fs.readFileSync(file, "utf8"));
  return { flight };
};

const FlightPage = async ({
  params: { flightId },
}: {
  params: { flightId: string };
}) => {
  const { flight } = await getData(flightId);

  if (!flight) {
    notFound();
  }

  const date = new Date(flight.pilotLog.departure)
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, ".");

  return (
    <div className={styles.pageWrapper}>
      <Header>{`${date}  - ${flight.aircraft.identification.registration}`}</Header>
      <main className={styles.mainContainer}>
        <section className={styles.mapSection}>
          {flight.track.length ? (
            <FlightMap flights={[flight]} />
          ) : (
            <h1>Flight data not available :(</h1>
          )}
        </section>
        <section className={styles.dataSection}>
          <h1>{`${date}  - ${flight.aircraft.identification.registration}`}</h1>
          <div className={styles.dataChapter}>
            <div className={styles.chapterTitle}>
              <FaPlane />
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Type</span>
              <span className={styles.sectionValue}>
                {flight.aircraft.model.code}
              </span>
              <span className={styles.sectionTitle}>Registration</span>
              <span className={styles.sectionValue}>
                {flight.aircraft.identification.registration}
              </span>
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Call sign</span>
              <span className={styles.sectionValue}>
                {flight.identification.callsign}
              </span>
              <span className={styles.sectionTitle}>External Links</span>
              <span className={styles.sectionValue}>
                <Link
                  href={`https://www.flightradar24.com/data/aircraft/${flight.aircraft.identification.registration?.toLocaleLowerCase()}`}
                >
                  Flight Radar <FaExternalLinkAlt />
                </Link>
              </span>
            </div>
          </div>

          <div className={styles.dataChapter}>
            <div className={styles.chapterTitle}>
              <FaClock />
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Origin</span>
              <span className={styles.sectionValue}>
                {flight.airport.origin.code}
              </span>
              <span className={styles.sectionTitle}>Departure time</span>
              <span className={styles.sectionValue}>
                {toHourString(flight.pilotLog.departure)}
              </span>
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Destination</span>
              <span className={styles.sectionValue}>
                {flight.airport.destination.code}
              </span>
              <span className={styles.sectionTitle}>Arrival time</span>
              <span className={styles.sectionValue}>
                {toHourString(flight.pilotLog.arrival)}
              </span>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>SEP Time</div>
              <div>{toTimeString(flight.pilotLog.singleEnginePistonTime)}
                <small>
                  (
                  {toTimeString(flight.flightLogCarryOver.singleEnginePistonTime)}
                  )
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>MEP Time</div>
              <div>{toTimeString(flight.pilotLog.multiEnginePistonTime)}
                <small>
                  ({toTimeString(flight.flightLogCarryOver.multiEnginePistonTime)}
                  )
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>MultiPilot Time</div>
              <div>
                {toTimeString(flight.pilotLog.multiPilotTime)}
                <small>
                  ({toTimeString(flight.flightLogCarryOver.multiPilotTime)})
                </small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>PIC Time</div>
              <div>{toTimeString(flight.pilotLog.picTime)}
                <small>({toTimeString(flight.flightLogCarryOver.picTime)})</small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Dual Time</div>
              <div>{toTimeString(flight.pilotLog.dualTime)}
                <small>
                  ({toTimeString(flight.flightLogCarryOver.dualTime)})
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>FI Time</div>
              <div>{toTimeString(flight.pilotLog.fiTime)}
                <small>({toTimeString(flight.flightLogCarryOver.fiTime)})</small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Night Time</div>
              <div>
                {toTimeString(flight.pilotLog.nightTime)}{" "}
                <small>
                  ({toTimeString(flight.flightLogCarryOver.nightTime)})
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>IFR Time</div>
              <div>
                {toTimeString(flight.pilotLog.ifrTime)}{" "}
                <small>
                  ({toTimeString(flight.flightLogCarryOver.ifrTime)})
                </small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Day Landings</div>
              <div>
                {flight.pilotLog.landings.day}{" "}
                <small>({flight.flightLogCarryOver.landings.day})</small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Night Landings</div>
              <div>
                {flight.pilotLog.landings.night}{" "}
                <small>({flight.flightLogCarryOver.landings.night})</small>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContent}>
            <div className={styles.sectionTitle}>
              {flight.identification.name}
            </div>
            <div>{flight.identification.description}</div>
          </div>
          <div className={styles.flex} />
          <div className={styles.controlsContainer}>
            <Link
              href={
                flight.previousId ? `/flights/${flight.previousId}` : "/logbook"
              }
            >
              <FaChevronLeft />
            </Link>
            <Link href="/logbook">
              <FaListAlt />
            </Link>
            <Link href="/">
              <FaHome />
            </Link>
            <Link
              href={flight.nextId ? `/flights/${flight.nextId}` : "/logbook"}
            >
              <FaChevronRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export const generateStaticParams = async () => {
  const file = path.join(process.cwd(), "public", "records", `flightLog.json`);
  const flights: Flight[] = JSON.parse(fs.readFileSync(file, "utf8"));

  return flights.map((flight) => ({
    flightId: flight.identification.id,
  }));
};

export default FlightPage;
