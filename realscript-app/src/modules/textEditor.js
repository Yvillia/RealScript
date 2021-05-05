import "../assets/main.css";
import React from "react";
import Form from "react-bootstrap/Form";
import { w3cwebsocket } from "websocket";
const URL = "ws://127.0.0.1:8080";
class TextEditor extends React.Component {
  state = {
    sender: this.props.user,
    messageContent: "",
    msgState: 0
  };

  ws = new w3cwebsocket(URL, "chatting");
  componentDidMount() {
    this._isMounted = true;
    this.ws.onmessage = (res) => {
      try {
        const JSONmsg = JSON.parse(res.data);
        if (JSONmsg.type !== "persist") {
          const responseMsg = JSON.parse(JSONmsg.utf8Data);

          if (responseMsg.update != undefined) {
            if (responseMsg.messageState == -1) {
              this.setState({ messageContent: responseMsg.update });
              this.setState({ msgState: responseMsg.currMessageState });
            } else {
              if (responseMsg.name !== this.state.sender) {
                this.setState({ messageContent: responseMsg.update });
              }
              this.setState({ msgState: responseMsg.messageState });
            }
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

  updateText = (txt) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const serverTxt = { name: this.state.sender, update: txt, messageState: this.state.msgState };
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.send(JSON.stringify(serverTxt));
    } else {
      console.log("Still Connecting");
    }
  };

  render() {
    return (
      <div className="editorArea">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Live Collaborative Text Editor</Form.Label>
          <Form.Control
            as="textarea"
            rows={30}
            className="chatStyle"
            type="text"
            placeholder="Start Typing Here..."
            value={this.state.messageContent}
            onChange={(event) => {
              this.setState({ messageContent: event.target.value });
              this.updateText(event.target.value);
            }}
          />
        </Form.Group>
      </div>
    );
  }
}

export default TextEditor;
