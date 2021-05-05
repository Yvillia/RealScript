import "../assets/main.css";
import React from "react";
import Card from "react-bootstrap/Card";

global.darkMode;

export default class SettingsBody extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      value: ""
    };
  }
  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  getCookie(cname) {
    const name = cname + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  handleUser = (e) => {
    const { name, value } = e.target;
    global.name = e.target[0].value;
    this.setState({
      [name]: value
    });
    window.location.replace("/settings");
  };
  handleDark = (e) => {
    const { name, value } = e.target;
    if (e.target.value == "dark") {
      localStorage.setItem("darkMode", "#343a40");
      localStorage.setItem("darkMode_text", "#e7e7e7");
    } else {
      localStorage.setItem("darkMode", "white");
      localStorage.setItem("darkMode_text", "#181818");
    }
    this.setState({
      [name]: value
    });
  };
  render() {
    const darkMode = localStorage.getItem("darkMode");
    const darkMode_text = localStorage.getItem("darkMode_text");
    return (
      <div className="SettingsBody">
        <Card style={{ backgroundColor: darkMode }}>
          <Card.Body>
            <Card.Title style={{ color: darkMode_text }}>Change Name</Card.Title>
            <form onSubmit={this.handleUser}>
              <input type="text" ref={this.textInput} />
              <button>Change</button>
            </form>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ backgroundColor: darkMode }}>
          <Card.Body>
            <Card.Title style={{ color: darkMode_text }}>Viewing Mode</Card.Title>
            <div className="radio-buttons">
              <input
                id="light select"
                value="light"
                name="platform"
                type="radio"
                onChange={this.handleDark}
              />
              <p style={{ color: darkMode_text }}> Light Mode</p>
              <br></br>
              <input
                id="dark select"
                value="dark"
                name="platform"
                type="radio"
                onChange={this.handleDark}
                style={{ color: darkMode_text }}
              />
              <p style={{ color: darkMode_text }}> Dark Mode</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
