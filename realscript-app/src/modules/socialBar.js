import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Form from "react-bootstrap/Form";
import "../assets/main.css";
import React from "react";
import "../pages/login.js";
import { client } from "./socketClient";
import ChatArea from "./chatComp";

export default class SocialBar extends React.Component {
  state = {
    msgs: [],
    userActivity: [],
    pos: 0,
    name: global.name,
    sender: this.props.user,
    messageContent: "",
    msgState: 0
  };

  componentDidMount() {
    this._isMounted = true;
    client.onmessage = (event) => {
      const data = JSON.parse(event.data).data;
      const type = JSON.parse(event.data).type;
      if (type === "contentchange") {
        const msg = JSON.parse(data).message;
        this.addHistory(msg);
      } else if (type === "userevent") {
        this.setState({ userActivity: data.userActivity });
      } else {
        try {
          const JSONmsg = JSON.parse(event.data);
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
        } catch (error) {
          console.log(error);
        }
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
    for (const usr_act of this.state.userActivity) {
      responseCollection += usr_act;
    }
    console.log("this is responseCollection");
    return responseCollection;
  }

  buildMessage() {
    let responseCollection = "";
    for (const msg of this.state.msgs) {
      responseCollection += msg + "\n";
    }
    return responseCollection;
  }

  addHistory = (msg) => this.setState((state) => ({ msgs: [...state.msgs, msg] }));

  chatButton = () => {
    if (this.state.pos === 0) this.setState({ pos: this.props.input_width });
    else this.setState({ pos: 0 });
  };

  sendMessage = (msg) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const messg = { name: this.props.user, message: msg, type: "contentchange" };
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(messg));
    } else {
      console.log("Still Connecting");
    }
  };

  updateText = (txt) => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const serverTxt = { name: this.state.sender, update: txt, messageState: this.state.msgState };
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(serverTxt));
    } else {
      console.log("Still Connecting");
    }
  };

  render() {
    const darkMode = localStorage.getItem("darkMode");
    const darkMode_text = localStorage.getItem("darkMode_text");
    return (
      <div>
        <span className="editorSplit">
          <div className="editorArea">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Live Collaborative Text Editor</Form.Label>
              <Form.Control
                style={{ backgroundColor: darkMode, color: darkMode_text }}
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
          <div className="chatSplit">
            <div
              className="chat-list"
              style={{
                width: `${this.props.input_width}px`,
                minHeight: `200px`,
                transform: `translatex(${this.state.pos}px)`,
                transition: `1s ease`
              }}
            >
              <button
                className="chatButton"
                onClick={() => this.chatButton()}
                style={{
                  transform: `translatex(${this.state.pos}px 5vh)`
                }}
              />
              <div className="chat-sep">
                <List disablePadding dense>
                  <ListItem button>
                    {/* <div> */}
                    <div className="chat-block">
                      <p className="chat-title">Active Member List:</p>
                      <form
                        action="."
                        onKeyPress={(key) => {
                          if (
                            !key.shiftKey &&
                            (key.code === "Enter" || key.code === "NumpadEnter")
                          ) {
                            key.preventDefault();
                            console.log("this is message content: ");
                            console.log(this.state.messageContent);
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
                    {/* </div> */}
                  </ListItem>
                  <ListItem button>
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
                  </ListItem>
                  <ListItem button>
                    {/* <div> */}
                    <ChatArea
                      user={global.name}
                      sendMessage={(messageString) => this.sendMessage(messageString)}
                    />
                    {/* </div> */}
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
