import { default as fs } from "fs";
import { default as path } from "path";
import { FlightMap } from "src/components/FlightMap";
import type { Flight } from "src/types/Flight";
import { notFound } from "next/navigation";

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

  return <FlightMap flights={[flight]} />;
};

export default FlightPage;
