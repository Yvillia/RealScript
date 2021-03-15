import "../assets/main.css";
import React from "react";
import Card from "react-bootstrap/Card";

class InformationBody extends React.Component {
  render() {
    return (
      <div className="InformationBody">
        {/* <body className="head"> */}
        <Card>
          <Card.Body>
            <Card.Title>Home Page Section</Card.Title>
            <Card.Text>Placeholder</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Announcements/Progress Section</Card.Title>
            <Card.Text>Placeholder</Card.Text>
          </Card.Body>
        </Card>
        {/* </body> */}
      </div>
    );
  }
}

export default InformationBody;
