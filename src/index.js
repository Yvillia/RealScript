import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Routes from './routes';
import Socket from './modules/socketClient.js';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import reportWebVitals from './tests/reportWebVitals';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

ReactDOM.render(
  <React.StrictMode>
    {/* <Socket ws = {client}/> */}
    <Routes ws = {client}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
