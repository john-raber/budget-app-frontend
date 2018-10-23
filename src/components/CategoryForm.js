import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import FormSlider from "./FormSlider";
import { createCategory, addCategory } from "../actions/categories";

class CategoryForm extends Component {
  state = {
    modal: false,
    name: "",
    balance: 500
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSliderChange = pos => {
    this.setState({ balance: pos });
  };

  handleFormSubmit = e => {
    const { name, balance } = this.state;
    const { currentBudget } = this.props;

    const category = {
      category: {
        budget_id: currentBudget.id,
        name,
        balance
      }
    };
    e.preventDefault();

    // First the new category needs to be created;
    // Adding the category that we get back from the first step won't work
    // because the category has not been associated with the budget yet,
    // therefore the category won't be included in our categoriesToShow prop.
    this.props.createCategory(category).then(cat => {
      // After creating the connection between the category and the budget, we
      // fetch the category so that it will have the budget included in the json
      // that is returned and we can add that version to our redux store;

      // ------  just add the new category instead of fetching it -----
      this.props.addCategory(cat.category);
      this.props.history.push(this.props.location.pathname);
    });
    this.setState({ name: "" });
    this.toggle();
  };

  render() {
    return (
      <Fragment>
        <FaPlusCircle color="blue" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>New Category</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="balance" id="balance">
                  Starting Balance
                </Label>
                {/* After updating target state with the input field the value
                  in state will be a string so I will convert the target state
                  to a number before passing it to the form slider.
                */}
                <FormSlider
                  value={Number(this.state.balance)}
                  handleSliderChange={this.handleSliderChange}
                />
                <Input
                  type="number"
                  name="balance"
                  id="balance"
                  value={this.state.balance}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <Button>Create</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    {
      createCategory,
      addCategory
    }
  )(CategoryForm)
);
