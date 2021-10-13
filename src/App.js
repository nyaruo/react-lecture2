import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageA" component={PageA} />
        <Route path="/pageB" component={PageB} />
      </Switch>
    </Router>
  );
}

export default App;
