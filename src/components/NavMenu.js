import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { logoutUser } from "../actions/users";

class NavMenu extends Component {
  state = {
    isOpen: true
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar>
        <NavbarBrand href="/">Budgetr</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={this.state.isOpen}>
          <Nav className="ml-auto">
            <Switch>
              <Route path="/profile">
                <NavItem>
                  <NavLink href="/login" onClick={this.props.logoutUser}>
                    Logout
                  </NavLink>
                </NavItem>
              </Route>
            </Switch>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(
  connect(
    null,
    { logoutUser }
  )(NavMenu)
);
