import MapView from "./views/MapView";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LogView from "./views/LogView";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/log" component={LogView} />
      <Route path="/" component={MapView} />
    </Switch>
  </BrowserRouter>
);

export default App;
