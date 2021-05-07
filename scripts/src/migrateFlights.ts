import { Firestore } from '@google-cloud/firestore';
import { flights } from "./flights";
import {
  Flight,
  Aircraft,
  Airport,
} from "./flights/Flight";
import {
  Flight as NewFlight,
  Aircraft as NewAircraft,
  Airport as NewAirport,
} from "@the-flying-pupo/schema";

process.env.GOOGLE_APPLICATION_CREDENTIALS = "./secret.json";
const fireStore = new Firestore();

const aircraftCollection = fireStore.collection('aircraft');
const flightsCollection = fireStore.collection('flights');
const airportsCollection = fireStore.collection('airport');

const addNewAircraftIfNotExists = async (aircraft: Aircraft) => {
  const currentAircraft = await aircraftCollection
    .where("registration", "==", aircraft.identification.registration)
    .get()
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (currentAircraft?.docs[0]?.data()) {
    return "/" + currentAircraft.docs[0].ref.path;
  } else {
    if (!aircraft.identification.registration) {
      throw new Error("MISSING AIRCRAFT REGISTRATION!");
    }
    const newAircraft: NewAircraft = {
      code: aircraft.model.code,
      modelName: aircraft.model.text,
      registration: aircraft.identification.registration,
      serialNo: aircraft.identification.serialNo
    }
    const newAircraftOnDb = await aircraftCollection.add(newAircraft);
    console.log(aircraft.identification.registration, "added!")
    return "/" + newAircraftOnDb.path;
  }
}

const addNewAirportIfNotExists = async (airport: Airport) => {
  const currentAircraft = await airportsCollection
    .where("code", "==", airport.code)
    .get()
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (currentAircraft?.docs[0]?.data()) {
    return "/" + currentAircraft.docs[0].ref.path;
  } else {
    const newAirport: NewAirport = {
      name: airport.name,
      code: airport.code,
      position: {
        latitude: airport.position.latitude,
        longitude: airport.position.longitude,
        country: airport.position.country?.code ?? "DE",
      }
    }
    const newAirportOnDb = await airportsCollection.add(newAirport);
    console.log(newAirport.code, "added!")
    return "/" + newAirportOnDb.path;
  }
}

type NewAircraftWithRefs = Omit<NewFlight, "aircraft" | "origin" |"destination"> & {
  aircraft: string,
  origin: string,
  destination: string,
}

(async () => {
  for (const flight of flights) {
    const aircraft = await addNewAircraftIfNotExists(flight.aircraft);
    const destination = await addNewAirportIfNotExists(flight.airport.destination);
    const origin = await addNewAirportIfNotExists(flight.airport.origin);
    const newFlight: NewAircraftWithRefs  = {
      identification: {
        id: flight.identification.id,
        name: flight.identification.name,
        description: flight.identification.description,
        callsign: flight.identification.callsign
      },
      aircraft,
      origin,
      destination,
      track: flight.track,
      pilotLog: {
        departure: flight.pilotLog.departure ?? 0,
        arrival: flight.pilotLog.arrival ?? 0,
        singleEnginePistonTime: flight.pilotLog.singleEnginePistonTime ?? 0,
        nightTime: flight.pilotLog.nightTime ?? 0,
        ifrTime: flight.pilotLog.ifrTime ?? 0,
        picTime: flight.pilotLog.picTime ?? 0,
        dualTime: flight.pilotLog.dualTime ?? 0,
        fiTime: flight.pilotLog.fiTime ?? 0,
        dayLandings: flight.pilotLog.landings.day ?? 0,
        nightLandings: flight.pilotLog.landings.night ?? 0,
      }
    }
    await flightsCollection.add(newFlight);
    console.log("Added flight: ",  newFlight.identification.name);
  }
})();



