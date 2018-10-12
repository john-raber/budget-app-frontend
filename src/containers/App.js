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
    console.log(this.props);
    return (
      <div className="App">
        <NavMenu />
        <Switch>
          <Route exact path="/profile" component={ProfileContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { setUserFromToken }
)(App);
