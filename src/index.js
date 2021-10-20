import "./common/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "@sky0014/easystore";

import App from "./app";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
