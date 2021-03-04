import React from 'react'
import PropTypes from 'prop-types'
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "../assets/main.css";

export default class ResponseArea extends React.Component {
    state = {
        sender: '',
        messageContent: '',
    }
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
            <p className="chat-title">
                Responses:
            </p>
            <form
                action = "."
                onKeyPress = {
                    key => {
                        if (!key.shiftKey && (key.code === 'Enter' || key.code === "NumpadEnter")) {
                            key.preventDefault();
                            this.props.onSubmitMessage(this.state.messageContent);
                            this.setState({ message: '' });
                        }
                    }
                }>
                <textarea
                    className = "chatStyle"
                    rows = "20"
                    readOnly
                    type = "text"
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