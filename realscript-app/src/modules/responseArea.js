import React from "react";
import "../assets/main.css";
import { client } from "./socketClient";
// import { w3cwebsocket } from "websocket";
// const URL = "ws://127.0.0.1:8080";

export default class ResponseArea extends React.Component {
  state = {
    msgs: [],
    userActivity: []
  };

  // ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this._isMounted = true;
    client.onmessage = (event) => {
      // on receiving a message, add it to the list of messages
      // console.log("this is the message received!!!!!!");
      // console.log(event);
      const data = JSON.parse(event.data).data;
      const type = JSON.parse(event.data).type;
      if (type === "contentchange") {
        const msg = JSON.parse(data).message;
        console.log("content change!!!");
        console.log(msg);
        this.addHistory(msg);
      } else if (type === "userevent") {
        this.setState({ userActivity: data.userActivity });
        console.log("user activity change!!");
        console.log(this.state.userActivity);
      }
    };

    client.onclose = () => {
      console.log("Disconnected From WebSocket");
      // this.setState({ ws: new w3cwebsocket(URL, "chatting") });
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

  buildUsersStatus() {
    let responseCollection = "";
    for (const usr_act of this.state.userActivity) {
      responseCollection += usr_act + "\n";
    }
    console.log("this is responseCollection");
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
