import React from 'react'
import PropTypes from 'prop-types'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "../assets/main.css";

export default class ChatArea extends React.Component {
    state = {
        sender: '',
        messageContent: '',
    }
    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
            <p className="chat-title">
                Chat Below: 
            </p>
            <form
                action = "."
                onKeyDown = {
                    key => {
                        if (!key.shiftKey && (key.code === 'Enter' || key.code === "NumpadEnter")) {
                            key.preventDefault();
                            this.props.sendMessage(this.state.messageContent);
                            this.setState({ message: '' });
                        }
                    }
                }>
                <textarea
                    className = "chatStyle"
                    type = "text"
                    rows = "7"
                    placeholder = "Start Typing Here..."
                    value = { this.state.message }
                    onChange = {
                        event => {
                            this.setState({ messageContent: event.target.value });
                        }
                    }
                >
                </textarea>
            </form>
            </div>
        )
    }

}