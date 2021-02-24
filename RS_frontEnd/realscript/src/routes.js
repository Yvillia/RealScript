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

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Editor" exact component={Editor} />
                    <Route path="/Profile" exact component={Profile} />
                    <Route path="/Settings" exact component={Settings} />
                </Switch>
            </Router>
        )
    }
}

export default Routes