import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import InformationBody from "../modules/informationBlock";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="navbar">
          <ButtonRow />
          <InformationBody />
        </div>
      </div>
    );
  }
}