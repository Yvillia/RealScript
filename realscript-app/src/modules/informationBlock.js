import "../assets/main.css";
import React from "react";
import Card from "react-bootstrap/Card";

class InformationBody extends React.Component {
  render() {
    const darkMode = localStorage.getItem("darkMode");
    const darkMode_text = localStorage.getItem("darkMode_text");
    return (
      <div className="InformationBody">
        {/* <body className="head"> */}
        <Card style={{ backgroundColor: darkMode }}>
          <Card.Body>
            <Card.Title style={{ color: darkMode_text }}>Home Page Section</Card.Title>
            <Card.Text style={{ color: darkMode_text }}>Placeholder</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ backgroundColor: darkMode }}>
          <Card.Body>
            <Card.Title style={{ color: darkMode_text }}>Announcements/Progress Section</Card.Title>
            <Card.Text style={{ color: darkMode_text }}>Placeholder</Card.Text>
          </Card.Body>
        </Card>
        {/* </body> */}
      </div>
    );
  }
}

export default InformationBody;
