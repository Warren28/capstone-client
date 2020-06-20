import React from "react";
import { Switch, Route } from "react-router-dom";
import { 
  ResultsContainer, 
  WelcomeContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/results" component={ResultsContainer} />
    </Switch>
  );
};

export default RoutesView;
