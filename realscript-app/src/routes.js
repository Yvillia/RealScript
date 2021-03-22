import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Editor from "./pages/editor.js";
import Profile from "./pages/profile.js";
import Settings from "./pages/settings.js";
import Login from "./pages/login.js";
import NotFoundPage from "./pages/404.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Editor" exact component={Editor} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Settings" exact component={Settings} />
          <Route path="/Home" exact component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
