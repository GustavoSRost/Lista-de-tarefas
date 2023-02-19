import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./css/index.css";
import "./css/style.css";

import Header from "./Header";
import { List } from "./List";
import App from "./App";

import store from "./store/configureStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
