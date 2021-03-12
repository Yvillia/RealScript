import "../assets/main.css";
import React from "react";
import Form from "react-bootstrap/Form";
import { w3cwebsocket } from "websocket";
const URL = "ws://127.0.0.1:8080";
class TextEditor extends React.Component {
  state = {
    sender: this.props.user,
    messageContent: "",
    receivedContent: ""
  };

  ws = new w3cwebsocket(URL, "chatting");

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("Connected to WebSocket");
    };

    this.ws.onmessage = (res) => {
      const txt = JSON.parse(res.data).update;
      if (txt) {
        this.setState({ receivedContent: txt });
        this.setState({ messageContent: txt });
      }
    };

    this.ws.onclose = () => {
      console.log("Disconnected From WebSocket");
      this.setState({ ws: new w3cwebsocket(URL, "chatting") });
    };
  }

  updateText = (txt) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const serverTxt = { name: this.state.name, update: txt };
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
            defaultValue={this.state.receivedContent}
            onChange={(event) => {
              this.setState({ messageContent: event.target.value });
              this.updateText(this.state.messageContent);
              // console.log(`RC: ${this.state.receivedContent}`);
              // console.log(`MC: ${this.state.messageContent}`);
            }}
          />
        </Form.Group>
      </div>
    );
  }
}

export default TextEditor;
