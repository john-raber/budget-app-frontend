import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import { createBudget } from "../actions/budgets";

class BudgetForm extends Component {
  state = {
    name: ""
  };

  handleFormSubmit = e => {
    const budget = {
      budget: {
        ...this.state, // if you add more to this form's state this will have to become ``` name: this.state.name ```
        user_id: this.props.currentUser.id
      }
    };

    e.preventDefault();
    this.props.createBudget(budget);
    this.setState({ name: "" });
    this.props.history.push("/profile");
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            id="name"
            value={this.state.name}
            onChange={e => this.handleFormChange(e.target.name, e.target.value)}
          />
        </FormGroup>
        <Button color="primary">Create</Button>
      </Form>
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
    { createBudget }
  )(BudgetForm)
);
