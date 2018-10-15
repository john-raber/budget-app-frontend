import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { createAccount } from "../actions/accounts";

class AccountForm extends Component {
  state = {
    nickname: ""
  };

  handleFormSubmit = e => {
    const account = {
      account: {
        ...this.state, // if you add more to this form's state this will have to become ``` nickname: this.state.nickname ```
        budget_id: Number(this.props.match.params.budgetId)
      }
    };

    e.preventDefault();
    this.props.createAccount(account);
    this.setState({ nickname: "" });
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="nickname">Nickname: </Label>
          <Input
            name="nickname"
            id="nickname"
            value={this.state.nickname}
            onChange={e => this.handleFormChange(e.target.name, e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Create</Button>
      </Form>
    );
  }
}

export default withRouter(
  connect(
    null,
    { createAccount }
  )(AccountForm)
);
