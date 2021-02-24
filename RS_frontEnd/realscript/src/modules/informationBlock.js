import '../assets/main.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

class InformationBody extends React.Component {
  render () {
    return (
      <div className="InformationBody">
        <header className="head">
          <Card>
            <Card.Body>
              <Card.Title>Home Page Section</Card.Title>
              <Card.Text>
                Placeholder
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Card>
            <Card.Body>
              <Card.Title>Announcements/Progress Section</Card.Title>
              <Card.Text>
                Placeholder
              </Card.Text>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default InformationBody;
