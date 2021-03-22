import "../assets/main.css";
import React from "react";
import Card from "react-bootstrap/Card";

export default class SettingsBody extends React.Component {
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
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      value: ""
    };
  }
  handleUser = (e) => {
    e.preventDefault();
    if (this.textInput.current.value.length > 0) {
      global.name = this.textInput.current.value;
    }
    window.location.replace("/settings");
  };
  handleDark = (e) => {
    e.preventDefault();
    global.name = this.textInput.current.value;
    //this.selectedOption = $("input:radio[name=option]:checked").val();
    let inputs = document.getElementsByName("lightMode");
    if (inputs[0].checked) {
      global.name = "tester";
      global.darkMode = "light";
    }
    inputs = document.getElementsByName("darkMode");
    if (inputs[0].checked) {
      global.darkMode = "dark";
    }
    window.location.replace("/settings");
  };
  render() {
    global.darkMode = "dark";
    return (
      <div className="SettingsBody">
        <Card bg={global.darkMode}>
          <Card.Body>
            <Card.Title className="text">Change Name</Card.Title>
            <form onSubmit={this.handleUser}>
              <input type="text" ref={this.textInput} />
              <button>Change</button>
            </form>
          </Card.Body>
        </Card>
        <br />
        <Card bg={global.darkMode}>
          <Card.Body>
            <Card.Title className="text">Viewing Mode</Card.Title>
            <form onSubmit={this.handleDark}>
              <input type="radio" name="lightMode" value="Light Mode" />
              <p className="text">Light Mode</p>
              <input type="radio" name="darkMode" value="Dark Mode" />
              <p className="text">Dark Mode</p>
              <button>Change</button>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
