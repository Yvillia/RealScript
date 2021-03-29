import React from "react";
import "../assets/main.css";
import { w3cwebsocket } from "websocket";
const URL = "ws://127.0.0.1:8080";

export default class MemberList extends React.Component {
  state = {
    user_list: []
  };

  ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this._isMounted = true;
    this.ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    this.ws.onmessage = (event) => {
      // on receiving a message, add it to the list of messages
      if (JSON.parse(event.data).message) {
        const usr = JSON.parse(event.data).name;
        if (usr && usr.trim()) this.addUser(usr);
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

  addUser = (usr) => {
    if (!this.state.user_list.includes(usr))
      this.setState((state) => ({ user_list: [...state.user_list, usr] }));
  };

  buildUsers() {
    let responseCollection = "";
    for (const usr of this.state.user_list) {
      responseCollection += usr + "\n";
    }
    return responseCollection;
  }

  render() {
    return (
      <div className="chat-block">
        <p className="chat-title">Active Member List:</p>
        <form
          action="."
          onKeyPress={(key) => {
            if (!key.shiftKey && (key.code === "Enter" || key.code === "NumpadEnter")) {
              key.preventDefault();
              this.props.sendMessage(this.state.messageContent);
              this.setState({ message: "" });
            }
          }}
        >
          <textarea
            className="chatStyle"
            rows="8"
            readOnly
            type="text"
            value={this.buildUsers()}
          ></textarea>
        </form>
      </div>
    );
  }
}
