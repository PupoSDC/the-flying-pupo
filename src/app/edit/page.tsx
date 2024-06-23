"use client";

import { useState } from "react";
import { z } from "zod";
import { default as Editor } from '@monaco-editor/react';
import { flighRadarData } from "src/schemas/flight-radar-data";
import { YamlFlight, yamlFlight } from "src/schemas/yaml-flight";

const EditPage = () => {
  const [frData, setFrData] = useState("");
  const [flightData, setFlightData] = useState("");

  const loadFrData = () => {
    const parsedFrData = flighRadarData.parse(JSON.parse(frData));

    const yamlFlight : YamlFlight = {
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
        departure: "2020-09-15T14:09:00.000+01:00",
        arrival:  "2020-09-15T14:09:00.000+01:00",
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
  };

  return (
    <main className="flex h-screen">
      <div className="flex-1 h-full p-2">
        <div className="h-[200px]">
          <Editor 
            theme="vs-dark" 
            value={frData} 
            
            onChange={(v) => v && setFrData(v)} 
            options={ { wordWrap: "on" }}
          />
        </div>
        <button className="btn" onClick={loadFrData}>Parse</button>
      </div>
      <div className="flex-1 h-full p-2">
        <Editor 
          theme="vs-dark" 
          value={flightData}
          language="yaml"
          onChange={(v) => v && setFlightData(v)}
          options={ { wordWrap: "on" }}
        />
      </div>
      <div className="flex-1 h-full p-2">
        <Editor theme="vs-dark" />
      </div>      
    </main>
  );
};

export default EditPage;
