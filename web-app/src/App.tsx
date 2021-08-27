import MapView from "./views/MapView";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogView from "./views/LogView";
import { FlightCreatorView } from "./views/FlightCreatorView";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/log" component={LogView} />
      <Route path="/create" component={FlightCreatorView} />
      <Route path="/" component={MapView} />
    </Switch>
  </BrowserRouter>
);

export default App;
