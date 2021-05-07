import ReactDOM from 'react-dom';
import { CMSApp, EntityCollectionView } from '@camberi/firecms';
import { aircraftSchema } from './schemas/aircraftSchema';
import { airportSchema } from './schemas/airportSchema';
import { flightSchema } from './schemas/flightSchema';

const navigation: EntityCollectionView[] = [
  {
    relativePath: 'aircraft',
    schema: aircraftSchema,
    name: 'Aircrafts',
  },
  {
    relativePath: 'airport',
    schema: airportSchema,
    name: "Airports",
  },
  {
    relativePath: 'flight',
    schema: flightSchema,
    name: "Flights",
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyA5n7KLVIZKD3hgxLqp5OPh73yh9E_oCSc",
  authDomain: "the-flying-pupo.firebaseapp.com",
  databaseURL: "https://the-flying-pupo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "the-flying-pupo",
  storageBucket: "the-flying-pupo.appspot.com",
  messagingSenderId: "1038328000688",
  appId: "1:1038328000688:web:6622dc3dabd8e126888b75"
};

ReactDOM.render(
  <CMSApp
    name={"The Flying Pupo CMS"}
    authentication={(user) => {
      console.log(user?.uid)
      return true
    }}
    navigation={navigation}
    firebaseConfig={firebaseConfig}
  />,
  document.getElementById('root')
);
