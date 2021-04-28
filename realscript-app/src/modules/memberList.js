import React from "react";
import "../assets/main.css";
import { client } from "../modules/socketClient";

export default class MemberList extends React.Component {
  state = {
    // user_list: [],
    user_activity: []
  };

  componentDidMount() {
    this._isMounted = true;
    client.onmessage = (event) => {
      // on receiving a message, add it to the list of messages
      const data = JSON.parse(event.data).data;
      const type = JSON.parse(event.data).type;
      console.log(data.userActivity);
      // const usr = JSON.parse(data).name;
      console.log("This is updating memberList!!!!");
      console.log(type);
      // console.log(usr);
      // this.addUser(usr);
      if (type === "userevent") {
        console.log("reach the user activtiy???");
        this.setState({ user_activity: data.userActivity });
      }
      console.log(this.state.user_activity);
    };

    client.onclose = () => {
      console.log("Disconnected From WebSocket");
      // this.setState({ ws: new w3cwebsocket(URL, "chatting") });
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  // addUser = (usr) => {
  //   if (!this.state.user_list.includes(usr)) {
  //     this.setState((state) => ({ user_list: [...state.user_list, usr] }));
  //   }
  // };

  buildUsersStatus() {
    let responseCollection = "";
    for (const usr_act of this.state.user_activity) {
      responseCollection += usr_act + "\n";
    }
    console.log("this is responseCollection");
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
            value={this.buildUsersStatus()}
          ></textarea>
        </form>
      </div>
    );
  }
}
