import { Flight, FlightLogCarryOver } from "../../src/types/Flight";

import { flights2020 } from "./2020";
import { flights2021 } from "./2021";
import { flights2022 } from "./2022";

export const flights = [
  ...flights2020, 
  ...flights2021, 
  ...flights2022
];

export const flightsAsMap = flights.reduce<Record<string, Flight>>((sum, flight) => ({
  ...sum,
  [flight.identification.id.toUpperCase()]: flight,
}), {});

