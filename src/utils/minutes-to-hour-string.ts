import { Duration } from "luxon";

export const minutesToHourString = (minutes: number) =>
  Duration.fromObject({ minutes }).toFormat("hh:mm");