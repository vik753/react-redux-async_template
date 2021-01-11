import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import store from "./redux/store";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
