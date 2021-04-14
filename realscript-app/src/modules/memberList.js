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
      try {
        // on receiving a message, add it to the list of messages
        const JSONmsg = JSON.parse(event.data);
        const receivedInfo = JSON.parse(JSONmsg.utf8Data);
        if (receivedInfo.message !== undefined && receivedInfo.name !== "server") {
          const usr = receivedInfo.name;
          if (usr && usr.trim()) this.addUser(usr);
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
