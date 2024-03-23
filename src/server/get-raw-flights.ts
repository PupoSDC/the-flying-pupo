import * as fs from "node:fs/promises";
import { RawFlight } from "src/types/Flight";
import * as test from "src/records/flights/2020/20200915EDKBEDKB";

let CACHE : { flight: RawFlight }[];

export const getRawFlights = async () => {
  if (CACHE) return CACHE;

  const path = "./src/records/flights";

  const years = (await fs.readdir(path, { withFileTypes: true }))
    .filter((f) => f.isDirectory())
    .map((e) => `${path}/${e.name}`);

  const readPromises = years.map((f) => fs.readdir(f, { withFileTypes: true }));
  const flightPromises = (await Promise.all(readPromises))
    .flat()
    .filter((e) => e.isFile() && e.name.includes(".ts"))
    .map((e) => `${e.path.replace("./", "")}/${e.name.replace(".ts", "")}`)
    .map((e) => import(e).then((mod) => mod.flight));

  const flights =  await Promise.all(flightPromises);

  flights.sort((a, b) => a.flight.pilotLog.departure - b.flight.pilotLog.departure);


  CACHE = flights;
  return flights as { flight: RawFlight }[];
}
