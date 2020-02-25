import React from "react";

import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import ItemStore from "./components/ItemStore";
import "semantic-ui-css/semantic.min.css";
import "./resources/app.css";

import App from "./App";

render(
  <BrowserRouter>
    <Provider itemStore={new ItemStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
