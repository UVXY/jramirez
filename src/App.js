import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/jramirez" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
