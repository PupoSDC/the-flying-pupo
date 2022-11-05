import { RawFlight } from "src/types/Flight";



export const toTimeString = (minutes: number | undefined = 0) =>
  minutes
    ? `${`${Math.floor(minutes / 60) || "0"}`}:${`00${minutes % 60}`.slice(-2)}`
    : "-";

export const toHourString = (milis: number) =>
  toTimeString(new Date(milis).getHours() * 60 + new Date(milis).getMinutes())