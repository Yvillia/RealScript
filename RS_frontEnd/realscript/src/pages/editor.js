import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";

export default class Editor extends Component {
  render() {
    return (
      <html>
        <div className="Home">
          <div className="navbar">
              <ButtonRow />
          </div>
          <TextEditor />
        </div>
        <div className="Footer">

        </div>
      </html>
    );
  }
}