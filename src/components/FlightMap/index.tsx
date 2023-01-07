import { FunctionComponent, useEffect, useState } from "react";
import { FlightMapProps } from "./FlightMapClient";

("use client");

export const FlightMap: FunctionComponent<FlightMapProps> = (props) => {
  const [Client, setClient] = useState<FunctionComponent<FlightMapProps>>();

  useEffect(() => {
    (async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import("./FlightMapClient")).FlightMapClient;
        setClient(() => newClient);
      }
    })();
  }, []);

  if (typeof global.window === "undefined" || !Client) {
    return null;
  }

  return Client ? <Client {...props} /> : null;
};
