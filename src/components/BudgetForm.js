import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class BudgetForm extends Component {
  state = {
    name: ""
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form>
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

export default withRouter(BudgetForm);
