import { Flight } from "../../types/Flight";
import flights from "./index";

const flightsForTesting = flights.map((flight): [
  string,
  string,
  string,
  Flight
] => [
  flight.identification.id,
  flight.airport.origin.code,
  flight.airport.destination.code,
  flight,
]);

const flightTime = (departureTime: Date, arrivalTime: Date) => {
  const diff = (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60;
  return Math.round(Math.round(diff));
};

describe.each(flightsForTesting)("flight %s from %s to %s", (...params) => {
  const [, , , flight] = params;

  it("has matching flight time and operation time", () => {
    expect(flight.pilotLog.singleEnginePistonTime).toBe(
      (flight.pilotLog.dualTime ?? 0) + (flight.pilotLog.picTime ?? 0)
    );
  });

  it("has coherent departure and arrival times", () => {
    expect(flight.pilotLog.singleEnginePistonTime).toBe(
      flightTime(flight.pilotLog.departure, flight.pilotLog.arrival)
    );
  });
});
