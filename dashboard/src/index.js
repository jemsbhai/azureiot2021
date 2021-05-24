import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Home from "./home/home";
import Dash from "./dash/dash";
import Door from "./door/door";
import Light from "./light/light";
import Audio from "./audio/audio";
import Power from "./power/power";


ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Dash} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/door" component={Door} />
      <Route exact path="/light" component={Light} />
      <Route exact path="/audio" component={Audio} />
      <Route exact path="/power" component={Power} />
    </div>
  </Router>,
  document.getElementById("root")
);