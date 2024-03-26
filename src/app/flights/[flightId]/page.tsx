import {
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaExternalLinkAlt,
  FaHome,
  FaListAlt,
  FaPlane,
} from "react-icons/fa";
import { default as Link } from "next/link";
import { notFound } from "next/navigation";
import { FlightMap } from "src/components/flight-map";
import { Header } from "src/components/header";
import { toTimeString } from "src/utils/flightProcessing";
import { default as styles } from "./styles.module.css";
import { getYamlData } from "src/server/get-yaml-data";
import { FunctionComponent } from "react";
import { getFlightLog } from "src/server/get-flight-log";
import { Duration } from "luxon";
import { cn } from "src/utils/cn";

type Params = {
  flightId: string;
};

const FlightPage : FunctionComponent<{ params: Params }> = async ({ 
  params 
}) => {
  const { flights, aircrafts, airports } = await getFlightLog();

  const flight = flights.find((f) => f.id === params.flightId);
  if (!flight) notFound();

  const aircraft = aircrafts[flight.aircraft];
  const origin = airports[flight.origin];
  const destination = airports[flight.destination];
  const date = flight.pilotLog.departure.toFormat("yyyy-MM-dd");
  
  return (
    <div className={styles.pageWrapper}>
      <Header title={`${date}  - ${flight.aircraft}`} />
      <main className={styles.mainContainer}>
        <section className={styles.mapSection}>
          {flight.track.length ? (
            <FlightMap 
              speedMultiplier={10}
              flights={[{
                origin: origin,
                track: flight.track,
                id: flight.id,
              }]} 
            />
          ) : (
            <h1>Flight data not available :(</h1>
          )}
        </section>
        <section className={cn(styles.dataSection, "text-slate-200")}>
          <Header 
            title={`${date}  - ${flight.aircraft}`} 
            className={cn(
              "relative top-0 [&_h1]:text-2xl pb-4 border-b",
              "hidden lg:flex",
            )}
          />
          <div className={styles.dataChapter}>
            <div className={styles.chapterTitle}>
              <FaPlane />
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Type</span>
              <span className={styles.sectionValue}>
                {aircraft.code}
              </span>
              <span className={styles.sectionTitle}>Registration</span>
              <span className={styles.sectionValue}>
                {aircraft.registration}
              </span>
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Call sign</span>
              <span className={styles.sectionValue}>
                {flight.callsign}
              </span>
              <span className={styles.sectionTitle}>External Links</span>
              <span className={styles.sectionValue}>
                <Link
                  href={`https://www.flightradar24.com/data/aircraft/${aircraft.registration?.toLocaleLowerCase()}`}
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
                {origin.code}
              </span>
              <span className={styles.sectionTitle}>Departure time</span>
              <span className={styles.sectionValue}>
                {flight.pilotLog.departure.toFormat("HH:mm")}
              </span>
            </div>
            <div className={styles.chapterContent}>
              <span className={styles.sectionTitle}>Destination</span>
              <span className={styles.sectionValue}>
                {destination.code}
              </span>
              <span className={styles.sectionTitle}>Arrival time</span>
              <span className={styles.sectionValue}>
                {flight.pilotLog.arrival.toFormat("HH:mm")}
              </span>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>SEP Time</div>
              <div>
                {Duration.fromMillis(flight.pilotLog.singleEnginePistonTimeMinutes * 60 * 1000).toFormat("hh:mm")}
                <small>
                  (
                  {toTimeString(flight.carryOver.singleEnginePistonTimeMinutes)}
                  )
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>MEP Time</div>
              <div>{toTimeString(flight.pilotLog.multiEnginePistonTimeMinutes)}
                <small>
                  ({toTimeString(flight.carryOver.multiEnginePistonTimeMinutes)}
                  )
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>MultiPilot Time</div>
              <div>
                {toTimeString(flight.pilotLog.multiEnginePistonTimeMinutes)}
                <small>
                  ({toTimeString(flight.carryOver.multiEnginePistonTimeMinutes)})
                </small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>PIC Time</div>
              <div>{toTimeString(flight.pilotLog.picTimeMinutes)}
                <small>({toTimeString(flight.carryOver.picTimeMinutes)})</small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Dual Time</div>
              <div>{toTimeString(flight.pilotLog.dualTimeMinutes)}
                <small>
                  ({toTimeString(flight.carryOver.dualTimeMinutes)})
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>FI Time</div>
              <div>{toTimeString(flight.pilotLog.instructorTimeMinutes)}
                <small>({toTimeString(flight.carryOver.instructorTimeMinutes)})</small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Night Time</div>
              <div>
                {toTimeString(flight.pilotLog.nightTimeMinutes)}{" "}
                <small>
                  ({toTimeString(flight.carryOver.nightTimeMinutes)})
                </small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>IFR Time</div>
              <div>
                {toTimeString(flight.pilotLog.ifrTimeMinutes)}{" "}
                <small>
                  ({toTimeString(flight.carryOver.ifrTimeMinutes)})
                </small>
              </div>
            </div>
          </div>
          <div className={styles.totalsTable}>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Day Landings</div>
              <div>
                {flight.pilotLog.landings.day}{" "}
                <small>({flight.carryOver.landings.day})</small>
              </div>
            </div>
            <div className={styles.chapterContent}>
              <div className={styles.sectionTitle}>Night Landings</div>
              <div>
                {flight.pilotLog.landings.night}{" "}
                <small>({flight.carryOver.landings.night})</small>
              </div>
            </div>
          </div>
          <div className={styles.descriptionContent}>
            <div className={styles.sectionTitle}>
              {flight.name}
            </div>
            <div>{flight.description}</div>
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
  const { flights } = await getYamlData();
  return flights.map((flight) => ({ flightId: flight.id }));
};

export default FlightPage;
