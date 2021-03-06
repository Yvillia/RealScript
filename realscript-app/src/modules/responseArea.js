import React from 'react'
import "../assets/main.css";

export default class ResponseArea extends React.Component {
    state = {
        msgs: [],
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

    buildMessage() {
        responseCollection = "";
        for (msg in this.msgs) {
            responseCollection += msg + "\n";
        }
        return responseCollection;
    }
    
    render() {
        return (
            <div className="chat-block">
            <p className="chat-title">
                Responses:
            </p>
            <textarea
                className = "chatStyle"
                rows = "10"
                readOnly
                type = "text"
                value = { this.buildMessage() }
            >
            </textarea>
            </div>
        )
    }

}