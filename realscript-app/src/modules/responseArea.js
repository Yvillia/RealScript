import React from "react";
import "../assets/main.css";
// import { client } from "./socketClient";
// import LocalContext from "./localContext";
// import MemberList from "./memberList";

export default class ResponseArea extends React.Component {
  buildMessage() {
    let responseCollection = "";
    console.log(global.msg);
    for (const msg of global.msg) {
      responseCollection += msg + "\n";
    }
    return responseCollection;
  }

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
