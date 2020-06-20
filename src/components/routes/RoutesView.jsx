import React from "react";
import { Switch, Route } from "react-router-dom";
import { 
  ResultsContainer, 
  WelcomeContainer,
  Login, 
  Signup,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/results" component={ResultsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default RoutesView;
