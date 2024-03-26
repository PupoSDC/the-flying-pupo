import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { default as Image } from "next/image";
import { default as Link } from "next/link";
import { getFlightLog } from "src/server/get-flight-log";
import { toTimeString } from "src/utils/flightProcessing";
import { cn } from "src/utils/cn";

const StatsPage = async () => {
  const { flights, aircrafts, airports } = await getFlightLog();

  const tripDistance = Math.floor(
    flights.reduce((s, r) => s + r.tripDistance, 0),
  );

  const flightTime = Math.floor(
    flights.at(-1)?.carryOver.totalTimeMinutes ?? 0
  );

  const tripDistanceCovered = Math.floor(
    flights.reduce((s, r) => s + r.tripDistanceCovered, 0),
  );

  const maxDistanceInOneFlight = Math.floor(
    flights.reduce((s, r) => Math.max(s, r.tripDistanceCovered), 0),
  );

  const longestFlightTime = Math.floor(
    flights.reduce((s, r) => Math.max(
      s, 
      r.pilotLog.singleEnginePistonTimeMinutes ?? 0,
      r.pilotLog.multiEnginePistonTimeMinutes ?? 0,
      r.pilotLog.multiPilotTimeMinutes ?? 0,
    ), 0),
  );

  const longestDailyFlightTime = Math.floor(
    Object.values(
      flights.reduce<Record<string, number>>((s, r) => {
        const key = r.pilotLog.departure.toFormat("yyyy-MM-dd");
        return {
          ...s,
          [key]: (s[key] ?? 0) + 
            r.pilotLog.singleEnginePistonTimeMinutes + 
            r.pilotLog.multiEnginePistonTimeMinutes +
            r.pilotLog.multiPilotTimeMinutes,
        };
      }, {}),
    ).reduce((s, r) => Math.max(s, r), 0),
  );

  const maxDistanceInOneDay = Math.floor(
    Object.values(
      flights.reduce<Record<string, number>>((s, r) => {
        const key = r.pilotLog.departure.toFormat("yyyy-MM-dd");
        return {
          ...s,
          [key]: (s[key] ?? 0) + r.tripDistanceCovered,
        };
      }, {}),
    ).reduce((s, r) => Math.max(s, r), 0),
  );

  const airportCount = Object.keys(airports).length;

  const countryCount = [... new Set(
    Object.values(airports).map((v) => v.country)
  )].length;

  const mostFrequentType = Object.entries(
    Object.values(aircrafts).reduce<Record<string, number>>((s, r) => {
      const key = r.code;
      return {
        ...s,
        [key]: (s[key] ?? 0) + r.flights.length,
      };
    }, {}),
  ).sort((a, b) => b[1] - a[1])[0][0];

  const landings = flights.reduce((s, r) => {
    return s + r.pilotLog.landings.day + r.pilotLog.landings.night;
  }, 0);

  const aircraftCount = Object.values(aircrafts).length;

  const aircraftTypeCount = [... new Set(
    Object.values(aircrafts).map((v) => v.model)
  )].length;

  const tripsAroundTheWorld = Math.floor(
    (tripDistanceCovered / (360 * 60)) * 100
  ) / 100;

  return (
    <>
      <div className="overflow-hidden fixed top-0 left-0 w-full h-full z-[-1] select-none">
        <Image
          fill
          className="object-cover max-w-lg select-none"
          style={{
            WebkitMask: "linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0)) top right / cover",
            mask: "linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0)) top right / cover",
          }}
          src="/images/me.jpg"
          alt="Me looking professional on an aircraft"
        />
      </div>
      <main 
        className={cn(
          "relative flex flex-col justify-end m-auto px-4 py-4 md:py-16",
          "max-w-screen-md w-full",
          "prose dark:!prose-invert",
        )}
      >
        <h1 className="mb-2">About me</h1>
        <p>
          I was born in Lisbon, Portugal, and later graduated with a degree in
          Mechanical Engineering from the Lisbon University of Technology. My
          main field of interest was Computational Fluid Dynamics, which I
          pursued in my first job in Germany. After that, I spent two years
          working as a software engineer at CERN before moving on to work for
          startups.
        </p>
        <p>
          After 5 years as  a Software Engineer I've transitioned to being a 
          full time pilot flying the Boeing 737 as of November 2023.
        </p>
        <p>
          I&apos;ve done <b>{flights.length} flights</b> so far, which took me{" "}
          <b>{toTimeString(flightTime)}</b> hours. During that time I covered
          (at least) <b>{tripDistanceCovered} NM</b>, which is enough to go
          around the equator <b>{tripsAroundTheWorld}</b> times.
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
      <footer 
        className={cn(
          "w-full flex justify-center align-center pb-8 mx-auto z-10",
          "prose dark:!prose-invert",
        )}
      >
        <Link href="/" className="text-4xl m-2">
          <FaHome />
        </Link>
        <Link href="https://www.instagram.com/puposdc/" className="text-4xl m-2">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://www.linkedin.com/in/puposdc/" className="text-4xl m-2">
          <AiOutlineLinkedin />
        </Link>
        <Link href="https://github.com/PupoSDC" className="text-4xl m-2">
          <AiOutlineGithub />
        </Link>
      </footer>
    </>
  );
};

export default StatsPage;
