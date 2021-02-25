import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";
import Footer from "../modules/footer"

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
        <Footer />
      </html>
    );
  }
}