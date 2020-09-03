import React from "react";

import { Route, Switch } from "react-router-dom";
import WelcomePage from "../components/page/WelcomePage";
import HomePage from "../components/home_page";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
