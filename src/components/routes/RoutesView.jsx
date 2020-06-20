import React from "react";
import { Switch, Route } from "react-router-dom";
import { WelcomeContainer, ResultContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/results" component={ResultContainer} />
    </Switch>
  );
};

export default RoutesView;
