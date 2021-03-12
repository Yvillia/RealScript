import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";
// import Footer from "../modules/footer";
import "../pages/login.js";
import { SocialBar } from "../modules/socialBar";

export default class Editor extends Component {
  render() {
    return (
      <html>
        <body>
          <div className="Home">
            <div className="navbar">
              <ButtonRow user={global.name} />
            </div>
            <span className="editorSplit">
              <TextEditor />
              <div className="chatSplit">
                <SocialBar user={global.name} input_width="325" />
              </div>
            </span>
            {/* <Footer /> */}
          </div>
        </body>
      </html>
    );
  }
}
