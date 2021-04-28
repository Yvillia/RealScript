import React from "react";
import "../assets/main.css";
// import LocalContext from "./localContext";
import { client } from "./socketClient";

export default class MemberList extends React.Component {
  state = {
    msgs: [],
    userActivity: []
  };

  componentDidMount() {
    this._isMounted = true;
    client.onmessage = (event) => {
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
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  buildUsersStatus() {
    let responseCollection = "";
    console.log(this.state.userActivity);
    for (const usr_act of this.state.userActivity) {
      responseCollection += usr_act + "\n";
    }
    console.log("this is responseCollection");
    return responseCollection;
  }

  addHistory = (msg) => this.setState((state) => ({ msgs: [...state.msgs, msg] }));

  render() {
    global.msg = this.state.msgs;
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
              global.forceUpdate = true;
            }
          }}
        >
          <textarea
            className="chatStyle"
            rows="8"
            readOnly
            type="text"
            value={this.buildUsersStatus()}
          ></textarea>
        </form>
      </div>
    );
  }
}
