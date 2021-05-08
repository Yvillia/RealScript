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
export default class ResponseArea extends React.Component {
  state = {
    msgs: []
  };

  ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this._isMounted = true;
    this.ws.onmessage = (event) => {
      let responseInfo, JSONmsg;
      try {
        JSONmsg = JSON.parse(event.data);
        if (JSONmsg.type === "persist") {
          if (!arrEquivalence(JSONmsg.persistentChat, this.state.msgs)) {
            this.setState({ msgs: JSONmsg.persistentChat });
          }
        } else {
          // on receiving a message, add it to the list of messages
          responseInfo = JSON.parse(JSONmsg.utf8Data);

          if (responseInfo.persistentChat != undefined) {
            if (!arrEquivalence(responseInfo.persistentChat, this.state.msgs)) {
              this.setState({ msgs: responseInfo.persistentChat });
            }
          }

          // if (responseInfo.message != undefined && responseInfo.message.trim()) {
          //   this.addHistory(responseInfo.message);
          // }
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
    const darkMode = localStorage.getItem("darkMode");
    const darkMode_text = localStorage.getItem("darkMode_text");
    return (
      <div className="chat-block">
        <p className="chat-title">Responses:</p>
        <textarea
          style={{ backgroundColor: darkMode, color: darkMode_text }}
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
