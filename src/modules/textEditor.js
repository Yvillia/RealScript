import '../assets/main.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

class TextEditor extends React.Component {
  render () {
    return (
      <div className="editorArea">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={30} />
        </Form.Group>
      </div>
    );
  }
}

export default TextEditor;
