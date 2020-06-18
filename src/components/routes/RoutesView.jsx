import React from "react";
import { Switch, Route } from "react-router-dom";
import { WelcomeContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
    </Switch>
  );
};

export default RoutesView;
