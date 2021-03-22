import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../assets/images/error404.jpeg";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img className="pageNotFound" src={PageNotFound} />
        <p className="goToHome" style={{ textAlign: "right", fontSize: 80 }}>
          <Link to="/"> Wanna rejoin? </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
