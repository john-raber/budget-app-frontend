import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import NavMenu from "../components/NavMenu";
import LoginContainer from "./LoginContainer";
import ProfileContainer from "./ProfileContainer";
import BudgetFormContainer from "./BudgetFormContainer";
import { setUserFromToken } from "../actions/users";

class App extends Component {
  componentDidMount() {
    this.props.setUserFromToken();
  }

  render() {
    return (
      <div className="App">
        <NavMenu />
        <Switch>
          <Route path="/profile/add-budget" component={BudgetFormContainer} />
          <Route path="/profile" component={ProfileContainer} />
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

export default withRouter(
  connect(
    mapStateToProps,
    { setUserFromToken }
  )(App)
);
