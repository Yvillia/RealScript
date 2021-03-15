import React from "react";
import { w3cwebsocket } from "websocket";
const URL = "ws://0.0.0.0:8080";
const client = new w3cwebsocket(URL, "chatting");
class Socket extends React.Component {
  componentDidMount() {
    client.onopen = () => {
      console.log("WebSocket Client Successfully Connected");
    };
  }
  render() {
    return <p>{console.log("Waiting for Connection... ")}</p>;
  }
}

export { client, Socket };
