import React from "react";
import PropTypes from "prop-types";
import "../assets/main.css";
import "../pages/login.js";

export default class ChatArea extends React.Component {
  state = {
    sender: this.props.user,
    messageContent: ""
  };
  static propTypes = {
    sendMessage: PropTypes.func.isRequired
  };

  render() {
    const darkMode = localStorage.getItem("darkMode");
    const darkMode_text = localStorage.getItem("darkMode_text");
    return (
      <div className="chat-block">
        <p className="chat-title">Chat Below:</p>
        <form
          action="."
          onKeyDown={(key) => {
            if (!key.shiftKey && (key.code === "Enter" || key.code === "NumpadEnter")) {
              key.preventDefault();
              this.props.sendMessage(`${this.props.user}: ${this.state.messageContent}`);
              this.setState({ messageContent: "" });
            }
          }}
        >
          <textarea
            style={{ backgroundColor: darkMode, color: darkMode_text }}
            className="chatStyle"
            type="text"
            rows="7"
            placeholder="Start Typing Here..."
            value={this.state.messageContent}
            onChange={(event) => {
              this.setState({ messageContent: event.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}
