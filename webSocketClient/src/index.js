import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import 'websocket';
import { w3cwebsocket } from 'websocket';

const client = new w3cwebsocket('ws://127.0.0.1:8000');

export default class App extends Component {

    componentDidMount() {
        client.onopen = () => {
            console.log("WebSocket Client Successfully Connected");
        };
    }

    render() {
        return(
            <div>
                Testing the app if works!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));