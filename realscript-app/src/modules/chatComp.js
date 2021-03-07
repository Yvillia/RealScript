import React from 'react'
import PropTypes from 'prop-types'
import "../assets/main.css";
import "../pages/login.js";
// import { client } from "./socketClient";
import { w3cwebsocket } from "websocket";
const URL = 'ws://127.0.0.1:8080';

export default class ChatArea extends React.Component {
    state = {
        sender: this.props.user,
        messageContent: '',
    }
    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
    }

    ws = new w3cwebsocket(URL, 'chatting');

    componentDidMount() {
        this.ws.onopen = () => {
            console.log('Connected to WebSocket');
        }

        this.ws.onclose = () => {
            console.log('Disconnected From WebSocket');
            this.setState({ ws: new w3cwebsocket(URL, 'chatting')})
        }
    }

    render() {
        return (
            <div className="chat-block">
            <p className="chat-title">
                Chat Below: 
            </p>
            <form
                action = "."
                onKeyDown = {
                    key => {
                        if (!key.shiftKey && (key.code === 'Enter' || key.code === "NumpadEnter")) {
                            key.preventDefault();
                            this.props.sendMessage(`${this.props.user}: ${this.state.messageContent}`);
                            // console.log(this.state.messageContent);
                            this.setState({ messageContent: '' });
                        }// else console.log(key.code);
                    }
                }>
                <textarea
                    className = "chatStyle"
                    type = "text"
                    rows = "7"
                    placeholder = "Start Typing Here..."
                    value = { this.state.messageContent }
                    onChange = {
                        event => {
                            this.setState({ messageContent: event.target.value });
                        }
                    }
                />
            </form>
            </div>
        )
    }

}