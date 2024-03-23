import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { default as fs } from "fs";
import { default as path } from "path";
import { Flight } from "src/types/Flight";
import { toTimeString } from "src/utils/flightProcessing";
import { default as styles } from "./styles.module.css";
import { getFlightLog } from "src/server/get-flight-log";



const StatsPage = async () => {
  const { flightLog } = await getFlightLog();

  const tripDistance = Math.floor(
    flightLog.reduce((s, r) => s + r.tripDistance, 0),
  );

  const flightTime = Math.floor(
    flightLog.reduce((s, r) => {
      return (
        s +
        (r.pilotLog.singleEnginePistonTime ?? 0) +
        (r.pilotLog.multiEnginePistonTime ?? 0)
      );
    }, 0),
  );

  const tripDistanceCovered = Math.floor(
    flightLog.reduce((s, r) => s + r.tripDistanceCovered, 0),
  );

  const maxDistanceInOneFlight = Math.floor(
    flightLog.reduce((s, r) => Math.max(s, r.tripDistanceCovered), 0),
  );

  const longestFlightTime = Math.floor(
    flightLog.reduce(
      (s, r) => Math.max(s, r.pilotLog.singleEnginePistonTime ?? 0),
      0,
    ),
  );

  const longestDailyFlightTime = Math.floor(
    Object.values(
      flightLog.reduce<Record<string, number>>((s, r) => {
        const key = new Date(r.pilotLog.departure).toISOString().slice(0, 10);
        return {
          ...s,
          [key]: (s[key] ?? 0) + (r.pilotLog.singleEnginePistonTime ?? 0),
        };
      }, {}),
    ).reduce((s, r) => Math.max(s, r), 0),
  );

  const maxDistanceInOneDay = Math.floor(
    Object.values(
      flightLog.reduce<Record<string, number>>((s, r) => {
        const key = new Date(r.pilotLog.departure).toISOString().slice(0, 10);
        return {
          ...s,
          [key]: (s[key] ?? 0) + r.tripDistanceCovered,
        };
      }, {}),
    ).reduce((s, r) => Math.max(s, r), 0),
  );

  const airportCount = [
    ...new Set(
      flightLog.flatMap((r) => [
        r.airport.destination.code,
        r.airport.origin.code,
      ]),
    ),
  ].length;

  const countryCount = [
    ...new Set(
      flightLog.flatMap((r) => [
        r.airport.destination.code.slice(0, 2),
        r.airport.origin.code.slice(0, 2),
      ]),
    ),
  ].length;

  const mostFrequentType = Object.entries(
    flightLog.reduce<Record<string, number>>((s, r) => {
      const key = r.aircraft.model.text;
      return {
        ...s,
        [key]: (s[key] ?? 0) + 1,
      };
    }, {}),
  ).sort((a, b) => b[1] - a[1])[0][0];

  const landings = flightLog.reduce((s, r) => {
    return s + r.pilotLog.landings.day + r.pilotLog.landings.night;
  }, 0);

  const aircraftCount = [
    ...new Set(flightLog.map((r) => r.aircraft.identification.registration)),
  ].length;

  const aircraftTypeCount = [
    ...new Set(flightLog.map((r) => r.aircraft.model.code)),
  ].length;

  const tripsAroundTheWorld =
    Math.floor((tripDistanceCovered / (360 * 60)) * 100) / 100;


  return (
    <>
      <div className={styles.backgroundImage}>
        <Image
          fill
          src="/images/me.jpg"
          alt="Me looking professional on an aircraft"
        />
      </div>
      <main className={styles.main}>
        <h1>About me</h1>
        <p>
          I was born in Lisbon, Portugal, and later graduated with a degree in
          Mechanical Engineering from the Lisbon University of Technology. My
          main field of interest was Computational Fluid Dynamics, which I
          pursued in my first job in Germany. After that, I spent two years
          working as a software engineer at CERN before moving on to work for
          startups.
        </p>
        <p>
          To this day I am a Software Engineer with the very expensive hobby of
          flying around the skies on a steel machine weighting at least 650kg. I
          started flying in September 2020 and have been enjoying it ever since.
        </p>
        <p>
          I&apos;ve done <b>{flightLog.length} flights</b> so far, which took me
          {" "}<b>{toTimeString(flightTime)}</b> hours. During that time I 
          covered (at least) <b>{tripDistanceCovered} NM</b>, which is enough to 
          go around the equator <b>{tripsAroundTheWorld}</b> times.
        </p>
        <p>
          I did all of this in <b>{aircraftCount} different aircraft</b> of{" "}
          <b>{aircraftTypeCount}</b> types. My most often flown aircraft type is
          the <b>{mostFrequentType}</b>.
        </p>
        <p>
          I&apos;ve performed <b>{landings} landings</b> in{" "}
          <b>{airportCount} airports</b> in <b>{countryCount} countries</b>
        </p>
        <p>
          My longest flight leg has covered <b>{maxDistanceInOneFlight}NM</b>{" "}
          taking me <b>{toTimeString(longestFlightTime)}</b> hours to complete.
          My busiest day saw me covering <b>{maxDistanceInOneDay}NM</b> taking
          me <b>{toTimeString(longestDailyFlightTime)}</b> hours to complete.
        </p>
        <p>
          If you would like to know more about where I&apos;ve been flying, you
          can explore <Link href={"logbook"}>my Logbook</Link>.
        </p>
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <FaHome />
        </Link>
        <Link href="https://www.instagram.com/puposdc/">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/puposdc/">
          <AiOutlineLinkedin />
        </Link>
        <Link href="https://github.com/PupoSDC">
          <AiOutlineGithub />
        </Link>
      </footer>
    </>
  );
};

export default StatsPage;
