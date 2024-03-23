import fs from "fs";
import type { RawFlight } from "../../src/types/Flight";

const flightTime = (departureTime: Date, arrivalTime: Date) => {
  const diff = (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60;
  return Math.round(Math.round(diff));
};

const operationTime = (flight: RawFlight) => {
  return (
    (flight.pilotLog.singleEnginePistonTime ?? 0) +
    (flight.pilotLog.multiEnginePistonTime ?? 0) +
    (flight.pilotLog.multiPilotTime ?? 0)
  );
};

const filesToTest = fs
  .readdirSync("./records/flights", { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .flatMap((e) =>
    fs
      .readdirSync(`./records/flights/${e.name}`)
      .map((f) => `./${e.name}/${f}`),
  )
  .filter((e) => e.includes(".ts"));

describe("Flight records", () => {
  let flights: RawFlight[] = [];

  beforeAll(async () => {
    const promises = filesToTest.map((e) => import(`${e}`));
    flights = (await Promise.all(promises)).map((e): RawFlight => e.flight);
    console.log("done!");
  });

  describe.each(filesToTest.map((s, i) => [s, i]))("flight %s", (s, i) => {
    it("has matching flight time and operation time", () => {
      const flight = flights[i];
      expect(operationTime(flight)).toBe(
        (flight.pilotLog.dualTime ?? 0) + (flight.pilotLog.picTime ?? 0),
      );
    });

    it("has coherent departure and arrival times", () => {
      const flight = flights[i];
      expect(operationTime(flight)).toBe(
        flightTime(
          new Date(flight.pilotLog.departure),
          new Date(flight.pilotLog.arrival),
        ),
      );
    });

    it("has plausible registration", () => {
      const flight = flights[i];
      expect(flight.aircraft.identification.registration).toHaveLength(6);
    });

    it("has an unique ID based on flight time, origin, and destination", () => {
      const flight = flights[i];
      const date = new Date(flight.pilotLog.departure);
      const year = date.getFullYear();
      const month = `0${date.getMonth() + 1}`.slice(-2);
      const day = `0${date.getDate()}`.slice(-2);
      const departureCode = flight.airport.origin.code;
      const arrivalCode = flight.airport.destination.code;
      const expectedId = `${year}${month}${day}${departureCode}${arrivalCode}`;
      expect(flight.identification.id).toContain(expectedId);
    });
  });
});
