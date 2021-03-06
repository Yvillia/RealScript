import React from 'react'
import PropTypes from 'prop-types'
import "../assets/main.css";
import "../pages/login.js";


export default class ChatArea extends React.Component {
    state = {
        sender: global.user,
        messageContent: '',
    }
    static propTypes = {
        sendMessage: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="chat-block">
            <p className="chat-title">
                Chat Below: 
            </p>
            <form
                action = "."
                // onSubmit = {
                //     event => {
                //         event.preventDefault();
                //         this.props.sendMessage(this.state.message);
                //         this.setState({ message: '' });
                //     }
                // }
                onKeyDown = {
                    key => {
                        if (!key.shiftKey && (key.code === 'Enter' || key.code === "NumpadEnter")) {
                            key.preventDefault();
                            this.props.sendMessage(`${this.state.sender}: ${this.state.messageContent}`);
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
                            //console.log(event.target.value);
                            this.setState({ messageContent: event.target.value });
                        }
                    }
                />
                {/* <input type="submit" value={'Send'}/> */}
            </form>
            </div>
        )
    }

}