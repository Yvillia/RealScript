import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import InformationBody from "../modules/informationBlock";
import Footer from "../modules/footer";
import user from "../modules/user";

export default class Home extends Component {
  render() {
    var username = user.name;
    return (
      <html>
        <div className="Home">
          <div className="navbar">
            <ButtonRow user={username}/>
          </div>
            <InformationBody />
        </div>
        <Footer />
      </html>
    );
  }
}