import React from 'react'
import "../assets/main.css";


export default class MemberList extends React.Component {
    state = {
        sender: '',
        messageContent: '',
    }

    render() {
        return (
            <div className="chat-block">
            <p className="chat-title">
                Active Member List: 
            </p>
            <form
                action = "."
                onKeyPress = {
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
                    rows = "8"
                    readOnly
                    type = "text"
                    value = { this.state.messageContent }
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