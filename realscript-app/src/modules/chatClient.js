import React from "react";
import "../assets/main.css";
import ChatArea from "./chatComp";
import { client } from "../modules/socketClient";
import "../pages/login.js";

export default class ChatClient extends React.Component {
  state = {
    name: this.props.user
  };

  componentDidMount() {
    client.onopen = () => {
      console.log("Chat client connected to WebSocket");
    };

    client.onclose = () => {
      console.log("Disconnected From WebSocket");
      // client = new w3cwebsocket(URL, "chatting");
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sendMessage = (msg) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const messg = { name: this.state.name, message: msg, type: "contentchange" };
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(messg));
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
