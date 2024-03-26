"use client";

import { useState } from "react";
import { Input } from "src/components/input";
import { z } from "zod";

const FlighRadarData = z.object({
  result: z.object({
    response: z.object({
      data: z.object({
        flight: z.object({
          identification: z.object({
            callsign: z.string(),
          }),
          aircraft: z.object({
            model: z.object({
              code: z.string(),
              text: z.string(),
            }),
            identification: z.object({
              modes: z.string(),
              registration: z.string(),
            }),
          }),
          airport: z.object({
            origin: z.object({
              code: z.object({
                icao: z.string(),
              }),
              position: z.object({
                latitude: z.number(),
                longitude: z.number(),
              }),
            }),
            destination: z.object({
              code: z.object({
                icao: z.string(),
              }),
              position: z.object({
                latitude: z.number(),
                longitude: z.number(),
              }),
            }),
          }),
          track: z.array(
            z.object({
              latitude: z.number(),
              longitude: z.number(),
              altitude: z.object({
                feet: z.number(),
              }),
              speed: z.object({
                kts: z.number(),
              }),
              verticalSpeed: z.object({
                fpm: z.number(),
              }),
              heading: z.number(),
              squawk: z.string(),
              timestamp: z.number(),
            }),
          ),
        }),
      }),
    }),
  }),
});

const EditPage = () => {
  const [frData, setFrData] = useState("");

  const loadFrData = () => {
    console.log(FlighRadarData.parse(JSON.parse(frData)));
  };

  return (
    <>
      <div>
        <label className="form-control w-full max-w-sm">
          <span className="label label-text">FR data</span>
          <textarea
            value={frData}
            onChange={(e) => setFrData(e.target.value)}
            placeholder="FR Data"
            className="textarea textarea-bordered overflow-hidden"
          />
          <button className="btn btn-secondary" onClick={loadFrData}>
            Load
          </button>
        </label>

        <form className="w-full max-w-sm p-4">
          <label className="form-control w-full max-w-sm">
            <span className="label label-text">Flight ID</span>
            <input
              type="text"
              placeholder="Flight ID"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full max-w-sm">
            <span className="label label-text">Name</span>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full max-w-sm">
            <span className="label label-text">Description</span>
            <textarea
              placeholder="Flight Description"
              className="textarea textarea-bordered"
            />
          </label>
          <label className="form-control w-full max-w-sm">
            <span className="label label-text">Callsign</span>
            <input
              type="text"
              placeholder="Callsign"
              className="input input-bordered w-full"
            />
          </label>

          <div className="divider" />

          <label className="form-control w-full max-w-sm">
            <span className="label label-text">Aircraft</span>
            <input
              type="text"
              placeholder="Aircraft"
              className="input input-bordered w-full"
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default EditPage;
