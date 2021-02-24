import '../assets/main.css';
import React from 'react';

class TextEditor extends React.Component {
  render () {
    return (
      <div className="Editor">
          <textarea rows="20" cols="80"
          placeholder="Type Here..."
          ></textarea>
      </div>
    );
  }
}

export default TextEditor;
