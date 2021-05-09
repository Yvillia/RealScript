import React, { Component } from "react";
import "../assets/main.css";
import Identicon from "react-identicons";
import { Redirect } from "react-router-dom";
import { client } from "../modules/socketClient";
import { Alert } from "@material-ui/lab";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsers: [],
      userActivity: [],
      username: null,
      text: ""
    };
    this.authenticated = false;
  }

  logInUser = () => {
    const username = this.username.value;
    if (username.trim()) {
      const data = {
        username
      };
      this.setState(
        {
          ...data
        },
        () => {
          client.send(
            JSON.stringify({
              ...data,
              type: "userevent"
            })
          );
        }
      );
    }
  };

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
            <input
              name="username"
              ref={(input) => {
                this.username = input;
              }}
              className="form-control"
            />
            <button
              type="button"
              onClick={() => this.logInUser()}
              className="btn btn-primary account__btn"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    const { username } = this.state;
    global.name = username;
    return (
      <React.Fragment>
        <div className="container-fluid">
          {this.props.alert ? (
            <Alert severity="error">This is an error alert — check it out!</Alert>
          ) : (
            console.log("works fine")
          )}
          {username ? <Redirect to={"/Editor"} /> : this.showLoginSection()}
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
