import '../assets/main.css';
import React from 'react';

class MenuBtn extends React.Component {
    render() {
      return (
        <a href={this.props.href}>
          <button className="MenuBtn" onClick= {() =>
            alert("Clicked")
          }>
            {this.props.name}
          </button>
       </a>
      );
    }
}

export default MenuBtn;