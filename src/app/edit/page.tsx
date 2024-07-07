"use client";

import { useState } from "react";
import * as YAML from "yaml";
import { default as Editor } from '@monaco-editor/react';
import { flightRadarData } from "src/schemas/flight-radar-data";
import { YamlFlight, yamlFlight } from "src/schemas/yaml-flight";
import { DateTime } from "luxon";

const EditPage = () => {
  const [frData, setFrData] = useState("");
  const [flightData, setFlightData] = useState("");
  const [yamlFlight, setYamlFlight] = useState("");

  const loadFrData = () => {
    let data = JSON.parse(frData);
    if (data.identification) {
      data = {
        result: { response: { data: { flight: data } } }
      }
    };

    const parsedFrData = flightRadarData.parse(data);

    const yamlFlight: YamlFlight = {
      id: "1",
      name: "Flight 1",
      description: "Flight 1 description",
      callsign: parsedFrData.result.response.data.flight.identification.callsign,
      aircraft: parsedFrData.result.response.data.flight.aircraft.identification.registration,
      origin: parsedFrData.result.response.data.flight.airport.origin.code.icao,
      destination: parsedFrData.result.response.data.flight.airport.destination.code.icao,
      track: parsedFrData.result.response.data.flight.track.map((track) => ({
        lat: track.latitude,
        lng: track.longitude,
        altitude: track.altitude.feet,
        speed: track.speed.kts,
        verticalSpeed: track.verticalSpeed.fpm,
        heading: track.heading,
        squawk: track.squawk,
        timestamp: track.timestamp,
      })),
      pilotLog: {
        departure: DateTime.now().startOf('day').toUTC(),
        arrival: DateTime.now().startOf('day').toUTC(),
        singleEnginePistonTimeMinutes: 0,
        multiEnginePistonTimeMinutes: 0,
        multiPilotTimeMinutes: 0,
        picTimeMinutes: 0,
        dualTimeMinutes: 0,
        copilotTimeMinutes: 0,
        instructorTimeMinutes: 0,
        nightTimeMinutes: 0,
        ifrTimeMinutes: 0,
        landings: {
          day: 0,
          night: 0,
        },
        takeoffs: {
          day: 0,
          night: 0,
        }
      }
    };

    setYamlFlight(YAML.stringify(yamlFlight, null, 2));
  };

  return (
    <main className="flex h-screen">
      <div className="flex flex-1 h-full p-2 flex-col">
        <div className="pb-2">
          <button className="btn" onClick={loadFrData}>Parse</button>
        </div>
        <div className="v-full h-full">
        <Editor
          theme="vs-dark"
          value={frData}

          onChange={(v) => v && setFrData(v)}
          options={{ wordWrap: "on" }}
        />
        </div>

      </div>
      <div className="flex-1 h-full p-2">
        <Editor
          theme="vs-dark"
          value={yamlFlight}
          onChange={(v) => v && setFlightData(v)}
          language="yaml"
          options={{ wordWrap: "on" }}
        />
      </div>
    </main>
  );
};

export default EditPage;
