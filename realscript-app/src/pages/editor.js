import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";
import Footer from "../modules/footer"
import { client } from "websocket";
import "../pages/login.js";
export default class Editor extends Component {

  render() {
    return (
      <html>
        <div className="Home">
          <div className="navbar">
              <ButtonRow user={global.name}/>
          </div>
          <TextEditor />
        </div>
        <Footer />
      </html>
    );
  }
}