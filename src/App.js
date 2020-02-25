import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ModelerPage from "./pages/ModelerPage";
import FrameworksPage from "./pages/FrameworksPage";

export default () => (
  <Container>
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/modeler" component={ModelerPage} />
      <Route path="/frameworks" component={FrameworksPage} />
    </Switch>
  </Container>
);
