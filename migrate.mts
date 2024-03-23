import * as fs from "node:fs/promises";

const path = "./records/flights";
const years = (await fs.readdir(path, { withFileTypes: true }))
    .filter((f) => f.isDirectory())
    .map((e) => `${path}/${e.name}`);

const readPromises = years.map((f) => fs.readdir(f, { withFileTypes: true }));
const flightPromises = (await Promise.all(readPromises))
    .flat()
    .filter((e) => e.isFile() && e.name.includes(".ts"))
    .map((e) => `${e.path}/${e.name}`)
    .map((e) => import(e).then((mod) => mod.flight));

const flights =  await Promise.all(flightPromises);

console.log(flights);