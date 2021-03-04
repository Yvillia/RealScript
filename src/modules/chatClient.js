import React from 'react'
import PropTypes from 'prop-types'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "../assets/main.css";
import ChatArea from './chatComp';
import { client } from "websocket";


export default class ChatClient extends React.Component {
  state = {
    name: 'Placeholder',
    msgs: [],
  }

  componentDidMount() {
    this.props.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const msg = JSON.parse(evt.data)
      this.addHistory(msg)
    }
  }

  // Records History
  addHistory = msg =>
    this.setState(state => ({ msgs: [msg, ...state.msgs] }))

  sendMessage = msg => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: msg }
    this.props.ws.send(JSON.stringify(message))
    this.addHistory(message)
  }

  render() {
    return (
      <div>
        <ChatArea
          ws={client}
          sendMessage = {messageString => this.sendMessage(messageString)}
        />
        {/* {this.state.messages.map((message, index) =>
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )} */}
      </div>
    )
  }
}
