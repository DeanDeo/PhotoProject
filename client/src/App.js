import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import UserProfile from "./pages/UserProfile";
import PhotogProfile from "./pages/PhotogProfile";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/userProfile" component={UserProfile} />
        <Route exact path="/photogProfile" component={PhotogProfile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
