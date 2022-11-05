import { FlightMap } from "src/components/FlightMap";
import { notFound } from 'next/navigation';
import type { Flight } from "src/types/Flight";
import { default as path } from 'path';
import { default as fs } from 'fs';

const getData = (id: string) => {
  const file = path.join(process.cwd(), 'public', 'records', `${id}.json`);
  const flight: Flight = JSON.parse(fs.readFileSync(file, 'utf8'));
  return { flight }
}

const FlightPage = async ({ params: { flightId }} : { params: { flightId: string }}) => {
  const { flight } = await getData(flightId);

  if (!flight) {
    notFound();
  }

  return (
    <FlightMap flight={flight} />
  )
}

export default FlightPage;