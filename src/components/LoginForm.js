import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { loginUser } from "../actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.loginUser({ user: this.state });
    this.props.history.push("/profile");
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

export default connect(
  null,
  { loginUser }
)(withRouter(LoginForm));
