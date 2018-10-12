import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { createUser } from "../actions/users";

class NewUserForm extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.createUser({ user: this.state });
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
              id="newUsername"
              value={this.state.username}
              onChange={e =>
                this.handleFormChange(e.target.name, e.target.value)
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="newEmail"
              value={this.state.email}
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
              id="newPassword"
              value={this.state.password}
              onChange={e =>
                this.handleFormChange(e.target.name, e.target.value)
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" />
          </FormGroup>
          <Button color="primary">Register</Button>
        </Form>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createUser }
  )(NewUserForm)
);
