import { notFound } from "next/navigation";
import { default as path } from "path";
import { default as fs } from "fs";
import { FlightMap } from "src/components/FlightMap";
import { Flight } from "src/types/Flight";

const getData = async () => {
    const file = path.join(process.cwd(), 'public', 'records', `flightLog.json`);
    const flights: Flight[] = JSON.parse(fs.readFileSync(file, 'utf8'));
    return { flights }
  }

const FlightsIndexPage = async () => {
  const { flights } = await getData();

  return (
    <FlightMap flights={flights.filter(f => f.track.length)} />
  )
}

export default FlightsIndexPage;
