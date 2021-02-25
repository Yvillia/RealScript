import React, { Component } from "react";
import ButtonRow from "../modules/buttonRow";
import "../assets/main.css";
import Footer from "../modules/footer"

export default class Profile extends Component {
  render() {
    return (
      <html>
        <div className="Home">
          <div className="navbar">
            <ButtonRow />
          </div>
        </div>
        {/* <Footer /> */}
      </html>
    );
  }
}