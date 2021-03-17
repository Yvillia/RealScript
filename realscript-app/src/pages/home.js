import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import InformationBody from "../modules/informationBlock";
import "../pages/login.js";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    console.log("this is current user: " + global.name);
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
            <InformationBody />
          </div>
          {/* <Footer /> */}
        </body>
      </html>
    );
  }
}
