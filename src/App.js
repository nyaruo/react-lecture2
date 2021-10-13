import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageA" component={PageA} />
        <Route path="/pageB" component={PageB} />
      </Switch>
    </Router>
  );
}

export default App;
