import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import FormSlider from "./FormSlider";

import { createAccount } from "../actions/accounts";

class AccountForm extends Component {
  state = {
    nickname: "",
    acctBalance: 0
  };

  handleFormSubmit = e => {
    const account = {
      account: {
        ...this.state,
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

  handleSliderChange = pos => {
    this.setState({ acctBalance: pos });
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
        <FormGroup>
          <Label for="acctBalance">Account Balance: </Label>
          <FormSlider
            value={this.state.acctBalance}
            handleSliderChange={this.handleSliderChange}
          />
          <Input
            name="acctBalance"
            id="acctBalance"
            value={this.state.acctBalance}
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
