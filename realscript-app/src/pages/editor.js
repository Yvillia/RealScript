import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import TextEditor from "../modules/textEditor";
import "../pages/login.js";
import { SocialBar } from "../modules/socialBar";
import { Redirect } from "react-router-dom";

export default class Editor extends Component {
  render() {
    console.log("this is the current user: " + global.name);
    console.log("length???: " + global.name.length);
    if (global.name === "null") {
      console.log("detect name is null");
    }
    return (
      <html>
        <body>
          <div className="Home">
            {global.name === "null" ? (
              <Redirect to={"/"}></Redirect>
            ) : (
              console.log("user logged in sucessfully")
            )}
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
