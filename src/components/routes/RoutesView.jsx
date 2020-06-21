import React from "react";
import { Switch, Route } from "react-router-dom";
import { 
  ResultsContainer, 
  WelcomeContainer,
  Login, 
  Signup,
  LogoutContainer,
  ProfileContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={WelcomeContainer} />
      <Route exact path="/results" component={ResultsContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/logout" component={LogoutContainer} />
      <Route exact path="/userInfo" component={ProfileContainer} />
    </Switch>
  );
};

export default RoutesView;
