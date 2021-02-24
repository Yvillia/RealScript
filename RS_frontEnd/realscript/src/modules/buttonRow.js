import '../assets/main.css';
import React from 'react';
import MenuBtn from './menuBtn';

class ButtonRow extends React.Component {
    renderButton (name, href) {
        return <MenuBtn name={name} href={href} />
    }
    
    render() {
      return (
        <div className="buttonRow">
          <span className="innerRow">
            {this.renderButton("Home", "/")}
          {/* </span>
          <span> */}
            {this.renderButton("Editor", "/Editor")}
          {/* </span>
          <span> */}
            {this.renderButton("Profile", "/Profile")}
          {/* </span>
          <span> */}
            {this.renderButton("Settings", "/Settings")}
          </span>
        </div>
      );
    }
  }

  export default ButtonRow