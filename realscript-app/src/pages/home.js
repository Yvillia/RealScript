import React, { Component } from "react";
import "../assets/main.css";
import ButtonRow from "../modules/buttonRow";
import InformationBody from "../modules/informationBlock";
// import Footer from "../modules/footer";
import "../pages/login.js";

export default class Home extends Component {
  render() {
    return (
      <html>
        <body>
        <div className="Home">
          <div className="navbar">
            <ButtonRow user={global.name}/>
          </div>
            <InformationBody />
        </div>
        {/* <Footer /> */}
        </body>
      </html>
    );
  }
}