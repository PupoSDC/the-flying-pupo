"use client";

import { FunctionComponent, useEffect, useState } from "react";
import type { FlightMapProps } from "./flight-map-client";

export const FlightMap: FunctionComponent<FlightMapProps> = (props) => {
  const [Client, setClient] = useState<FunctionComponent<FlightMapProps>>();

  useEffect(() => {
    (async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import("./flight-map-client")).FlightMapClient;
        setClient(() => newClient);
      }
    })();
  }, []);

  if (typeof global.window === "undefined" || !Client) {
    return null;
  }

  return Client ? <Client {...props} /> : null;
};
