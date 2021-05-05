import React from "react";
import "../assets/main.css";
import { w3cwebsocket } from "websocket";
const URL = "ws://127.0.0.1:8080";

function arrEquivalence(a, b) {
  if (a == b) return true;
  if (a == null || b == null || a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
export default class MemberList extends React.Component {
  state = {
    user_list: []
  };

  ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this._isMounted = true;
    this.ws.onmessage = (event) => {
      try {
        const JSONmsg = JSON.parse(event.data);
        if (JSONmsg.type === "persist") {
          if (!arrEquivalence(JSONmsg.persistentUser, this.state.user_list)) {
            this.setState({ user_list: JSONmsg.persistentUser });
          }
        } else {
          // on receiving a message, add it to the list of messages
          const receivedInfo = JSON.parse(JSONmsg.utf8Data);

          if (receivedInfo.persistentUser != undefined) {
            if (!arrEquivalence(receivedInfo.persistentUser, this.state.user_list)) {
              this.setState({ user_list: receivedInfo.persistentUser });
            }
          }

          if (
            receivedInfo.name !== undefined &&
            receivedInfo.message !== undefined &&
            receivedInfo.name !== "server"
          ) {
            const usr = receivedInfo.name;
            if (usr && usr.trim()) this.addUser(usr);
          }
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
