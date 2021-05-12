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
            <Card.Title style={{ color: darkMode_text }}>Implemented Features</Card.Title>
            <Card.Text style={{ color: darkMode_text }}>
              <ul>
                <li>Multi-Client Server Connection</li>
                <li>Live Chat Between Connected Clients</li>
                <li>Live Text Editing Between Connected Clients</li>
                <li>Cognito Security Application</li>
                <li>Basic Whiteboard that Writes on User End Only</li>
                <li>Some User Personalization (At least with naming)</li>
                <li>Login/Logout for User Identification</li>
                <li>Ability to Change Name After Login</li>
                <li>A Somewhat Pretty Website</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card style={{ backgroundColor: darkMode }}>
          <Card.Body>
            <Card.Title style={{ color: darkMode_text }}>About</Card.Title>
            <Card.Text style={{ color: darkMode_text }}>
              This is the final project for the University of Illinois at Urbana-Champaign's
              CS296-41 course. The overall goal for the project was to focus on topics that were
              gone over in CS241, the class that CS296-41 is an honors course for.
              <br />
              <br />
              In the case for this project, the main focus was in networking, as most of the work
              put into this project was in concepts dealing with client and server communication
              through the utilization of websockets. This networking feature was implemented in the
              form of a live chat system as well as a live-update text editor. The goal for the
              project should there be time left is to implement a Whiteboard that allows multiple
              people to write on the whiteboard at once, we thought a live-update text editor would
              be a good first step in case the whiteboard feature was too difficult.
              <br />
              <br />
              Another focus that ended up getting covered in the span of the project was security,
              through the usage of the Cognito service by amazon for logins, as well as to a lesser
              extent website cookies.
              <br />
              <br />
              For more information on this project, feel free to look at our team's github{" "}
              <a href="https://github.com/nnrogers515/RealScript">Here</a>. The README will provide
              a much more thorough explanation of our goals, and for a list of the features we
              thought of to implement, you can check out our issueboard as well!
              <br />
              <br />
              Contributors:
              <ul>
                <li>noahrr2</li>
                <li>fanxue2</li>
                <li>bayus2</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        {/* </body> */}
      </div>
    );
  }
}

export default InformationBody;
