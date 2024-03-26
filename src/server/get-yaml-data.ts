import * as fs from "node:fs/promises";
import { YamlAircraft, yamlAircraft } from "src/schemas/yaml-aircraft";
import { YamlAirport, yamlAirport } from "src/schemas/yaml-airport";
import { YamlFlight, yamlFlight } from "src/schemas/yaml-flight";
import * as YAML from "yaml";
import { z } from "zod";

let CACHE: {
  flights: YamlFlight[];
  aircrafts: Record<string, YamlAircraft>;
  airports: Record<string, YamlAirport>;
};

const FLIGHTS_DIR = "./records/flights";
const AIRCRAFTS_FILE = "./records/aircraft/aircraft.yaml";
const AIRPORTS_FILE = "./records/airports/airports.yaml";

export const getYamlData = async () => {
  if (CACHE) return CACHE;

  const airportsYaml = await fs.readFile(AIRPORTS_FILE, "utf-8");
  const aircraftYaml = await fs.readFile(AIRCRAFTS_FILE, "utf-8");
  const aircrafts = z.record(yamlAircraft).parse(YAML.parse(aircraftYaml));
  const airports = z.record(yamlAirport).parse(YAML.parse(airportsYaml));

  const years = (await fs.readdir(FLIGHTS_DIR, { withFileTypes: true }))
    .filter((f) => f.isDirectory())
    .map((f) => `${f.path}/${f.name}`);

  const flights = await Promise.all(
    (
      await Promise.all(
        years.map((f) => fs.readdir(f, { withFileTypes: true })),
      )
    )
      .flat()
      .filter((f) => f.name.includes(".yaml"))
      .map(async (f) => {
        const yaml = await fs.readFile(`${f.path}/${f.name}`, "utf-8");
        const json = YAML.parse(yaml);
        return yamlFlight.parse(json);
      }),
  );

  //flights.sort((a, b) => a.pilotLog.departure - b.flight.pilotLog.departure);

  CACHE = {
    flights,
    aircrafts,
    airports,
  };

  return CACHE;
};
