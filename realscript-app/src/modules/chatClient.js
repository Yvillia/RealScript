import React from "react";
import "../assets/main.css";
import ChatArea from "./chatComp";
import { client } from "../modules/socketClient";
import { w3cwebsocket } from "websocket";
import "../pages/login.js";
const URL = "ws://127.0.0.1:8080";

export default class ChatClient extends React.Component {
  state = {
    name: this.props.user
  };
  ws = client;

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    this.ws.onclose = () => {
      console.log("Disconnected From WebSocket");
      this.ws = new w3cwebsocket(URL, "chatting");
    };
  }

  sendMessage = (msg) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const messg = { name: this.state.name, message: msg };
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.send(JSON.stringify(messg));
    } else {
      console.log("Still Connecting");
    }
  };

  render() {
    return (
      <ChatArea
        user={this.props.user}
        sendMessage={(messageString) => this.sendMessage(messageString)}
      />
    );
  }
}
