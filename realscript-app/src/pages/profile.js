import React, { Component } from "react";
import ButtonRow from "../modules/buttonRow";
import "../assets/main.css";
import Footer from "../modules/footer"
import "../pages/login.js";

export default class Profile extends Component {
  render() {
    return (
      <html>
        <div className="Home">
          <div className="navbar">
            <ButtonRow user={global.name}/>
          </div>
        </div>
        {/* <Footer /> */}
      </html>
    );
  }
}