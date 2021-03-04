import React, { Component } from 'react';
import 'websocket';
import { w3cwebsocket } from 'websocket';

// const client = new w3cwebsocket('ws://127.0.0.1:8000');

export default class Socket extends Component {

    componentDidMount() {
        this.props.ws.onopen = () => {
            console.log("WebSocket Client Successfully Connected");
        };
    }
    render() {
        return (
            <p>
                {console.log("Websocket is Functioning")}
            </p>
        );
    };
}