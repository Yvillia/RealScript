import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import Routes from "./routes";
import reportWebVitals from "./tests/reportWebVitals";
import { Socket } from "./modules/socketClient";

ReactDOM.render(
  <React.StrictMode>
    <Socket />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
