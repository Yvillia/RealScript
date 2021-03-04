import React from "react";
import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
} from "react-router-dom";

import Home from "./pages/home.js";
import Editor from "./pages/editor.js";
import Profile from "./pages/profile.js";
import Settings from "./pages/settings.js"
import Login from "./pages/login.js"

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={(props) => <Login ws = {this.props.ws} />} />
                    <Route path="/Editor" exact render={(props) => <Editor ws = {this.props.ws} />} />
                    <Route path="/Profile" exact render={(props) => <Profile ws = {this.props.ws} />} />
                    <Route path="/Settings" exact render={(props) => <Settings ws = {this.props.ws} />} />
                    <Route path="/Home" exact render={(props) => <Home ws = {this.props.ws} />} />
                </Switch>
            </Router>
        )
    }
}

export default Routes