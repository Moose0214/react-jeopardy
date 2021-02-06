import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Chris" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} name={props.match.path} />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jeopardy" component={Jeopardy} />
      </Switch>
    </div>
  );
}

export default App;
