import React from 'react'
import "../assets/main.css";
import ChatArea from './chatComp';
import { client } from "websocket";
import "../pages/login.js";
const URL = 'ws://127.0.0.1:8000'

export default class ChatClient extends React.Component {
  state = {
    name: global.user,
  }

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('Connected to WebSocket');
    }

    this.ws.onmessage = event => {
      // on receiving a message, add it to the list of messages
      const msg = JSON.parse(event.data)
      this.addHistory(msg)
    }

    this.ws.onclose = () => {
      console.log('Disconnected From WebSocket');
      this.setState({ ws: new WebSocket(URL)})
    }
  }

  // Records History
  addHistory = msg =>
    this.setState(state => ({ msgs: [msg, ...state.msgs] }))

  sendMessage = msg => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: msg }
    this.ws.send(JSON.stringify(message))
    this.addHistory(message)
  }

  render() {
    return (
      // <div>
        <ChatArea
          sendMessage = {messageString => this.sendMessage(messageString)}
        />
        /*{ {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )} }*/
      // </div>
    )
  }
}
