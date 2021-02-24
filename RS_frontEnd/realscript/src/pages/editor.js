import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";

export default class Editor extends Component {
  render() {
    return (
      <div className="Home">
        <div className="navbar">
            <ButtonRow />
            <TextEditor />
        </div>
      </div>
    );
  }
}