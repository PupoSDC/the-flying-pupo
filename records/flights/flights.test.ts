import { Flight } from "../../src/types/Flight";
import { flights } from "./index";

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
  const operationTime = 
  (flight.pilotLog.singleEnginePistonTime ?? 0) + 
  (flight.pilotLog.multiEnginePistonTime ?? 0);

  it("has matching flight time and operation time", () => {
    console.log(flight.pilotLog)
    expect(operationTime).toBe(
      (flight.pilotLog.dualTime ?? 0) + (flight.pilotLog.picTime ?? 0)
    );
  });

  it("has coherent departure and arrival times", () => {
    expect(operationTime).toBe(
      flightTime(new Date(flight.pilotLog.departure), new Date(flight.pilotLog.arrival))
    );
  });

  it("has an unique ID based on flight time, origin, and destination", () => {
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
