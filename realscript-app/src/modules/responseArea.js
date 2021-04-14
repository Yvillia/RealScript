import React from "react";
import "../assets/main.css";
import { w3cwebsocket } from "websocket";
// import { client } from "./socketClient";
const URL = "ws://127.0.0.1:8080";

export default class ResponseArea extends React.Component {
  state = {
    msgs: []
  };

  ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this._isMounted = true;
    this.ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    this.ws.onmessage = (event) => {
      let responseInfo, JSONmsg;
      try {
        // on receiving a message, add it to the list of messages
        console.log(event.data);
        JSONmsg = JSON.parse(event.data);
        console.log(JSONmsg.utf8Data.name);
        responseInfo = JSON.parse(JSONmsg.utf8Data);
        if (responseInfo.message != undefined && responseInfo.message.trim()) {
          this.addHistory(responseInfo.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    this.ws.onclose = () => {
      console.log("Disconnected From WebSocket");
      this.setState({ ws: new w3cwebsocket(URL, "chatting") });
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  buildMessage() {
    let responseCollection = "";
    for (const msg of this.state.msgs) {
      responseCollection += msg + "\n";
    }
    return responseCollection;
  }

  // Records History
  addHistory = (msg) => this.setState((state) => ({ msgs: [...state.msgs, msg] }));

  render() {
    return (
      <div className="chat-block">
        <p className="chat-title">Responses:</p>
        <textarea
          className="chatStyle"
          rows="10"
          readOnly
          type="text"
          value={this.buildMessage()}
        ></textarea>
      </div>
    );
  }
}
