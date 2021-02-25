import '../assets/main.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class MenuBtn extends React.Component {
  handleClick = () => {
    document.location.href = this.props.href;
  }
  render() {
    return (
        <Button className="MenuBtn" variant="primary" onClick={this.handleClick}>
          {this.props.name}
        </Button>
    );
  }
}

export default MenuBtn;