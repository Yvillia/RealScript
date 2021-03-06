import React, { Component } from 'react';
import 'websocket';
import { client } from "../index";

export default class Socket extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        client.onopen = () => {
            console.log("WebSocket Client Successfully Connected");
        };
    }
    render() {
        return (
            <p>
                { console.log("Waiting for Connection... ") }
            </p>
        );
    };
}