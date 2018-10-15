import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { loginUser } from "../actions/users";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let p = this.props
      .loginUser({ user: this.state })
      // loginUser returns a promise so after we have set our user we can then
      // push '/profile' to our history.  When profile container mounts, we will
      // have the currentUser set and our budgets fetch will have a userId to
      // use to find the right budgets in the redux store
      .then(() => this.props.history.push("/profile"));
  };

  handleFormChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              name="username"
              id="username"
              value={this.state.username}
              onChange={e =>
                this.handleFormChange(e.target.name, e.target.value)
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={e =>
                this.handleFormChange(e.target.name, e.target.value)
              }
            />
          </FormGroup>
          <Button color="primary">Login</Button>
        </Form>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { loginUser }
  )(LoginForm)
);
