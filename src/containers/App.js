import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import NavMenu from "../components/NavMenu";
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";
import { setUserFromToken } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.setUserFromToken();
  }

  render() {
    return (
      <div className="App">
        <NavMenu />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/profile" component={ProfileContainer} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { setUserFromToken }
)(App);
