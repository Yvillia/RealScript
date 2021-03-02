import React, { Component } from "react";
import "../assets/main.css";
import Footer from "../modules/footer"
import Identicon from 'react-identicons';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Redirect } from "react-router-dom";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUsers: [],
      userActivity: [],
      username: null,
      text: ''
    };
  }

  logInUser = () => {
    const username = this.username.value;
    if (username.trim()) {
      const data = {
        username
      };
      this.setState({
        ...data
      }, () => {
        client.send(JSON.stringify({
          ...data,
          type: "userevent"
        }));
      });
    }
  }

  showLoginSection = () => (
    <div className="login">
      <div className="account">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__profile">
            <Identicon className="account__avatar" size={64} string="randomness" />
            <p className="account__name">Hello, user!</p>
            <p className="account__sub">Join to edit the document</p>
          </div>
          <input name="username" ref={(input) => { this.username = input; }} className="form-control" />
          <button type="button" onClick={() => this.logInUser()} className="btn btn-primary account__btn">Join</button>
        </div>
      </div>
    </div>
    </div>
  )
  
  render() {
    const {
      username
    } = this.state;
    return (
      <React.Fragment>
        <div className="container-fluid">
          {this.showLoginSection()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}