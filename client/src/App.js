import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import UserProfile from "./pages/UserProfile";
import PhotogProfile from "./pages/PhotogProfile";
import Results from "./pages/Results"

import ChatApp from "./components/ChatApp/ChatApp"

import LandingPage from "./pages/LandingPage";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/photogProfile" component={PhotogProfile} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/chat" component={ChatApp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
