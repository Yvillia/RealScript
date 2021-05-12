import "../assets/main.css";
import React from "react";
import MenuBtn from "./menuBtn";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

class ButtonRow extends React.Component {
  renderButton(name, href) {
    return <MenuBtn name={name} href={href} />;
  }

  render() {
    return (
      <div className="buttonRow">
        <Navbar className="NaviBar" bg="dark" variant="dark">
          <Nav className="buttons">
            <span className="innerRow">
              {this.renderButton("Home", "/Home")}
              {this.renderButton("Editor", "/Editor")}
              {this.renderButton("Whiteboard", "/Whiteboard")}
              {this.renderButton("Settings", "/Settings")}
            </span>
          </Nav>
          <Nav className="logout">
            <span>{this.renderButton("Logout", "/")}</span>
          </Nav>
        </Navbar>
        <Navbar className="NaviBar" bg="dark" variant="dark">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{this.props.user}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ButtonRow;
