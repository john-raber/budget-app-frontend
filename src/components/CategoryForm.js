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
import {
  createCategory,
  addCategory,
  fetchCategory
} from "../actions/categories";

import {
  createBudgetCategory,
  addBudgetCategory
} from "../actions/budgetCategories";

class CategoryForm extends Component {
  state = {
    modal: false,
    name: "",
    target: 500
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSliderChange = pos => {
    this.setState({ target: pos });
  };

  handleFormSubmit = e => {
    const category = {
      category: {
        name: this.state.name
      }
    };
    e.preventDefault();

    // First the new category needs to be created;
    // Adding the category that we get back from the first step won't work
    // because the category has not been associated with the budget yet,
    // therefore the category won't be included in our categoriesToShow prop.
    this.props.createCategory(category).then(cat => {
      console.log("category after create: ", cat);
      const budget_category = {
        budget_category: {
          budget_id: Number(this.props.match.params.budgetId), // budgetId from the URL will be a string so I will convert it to a number for the fetch
          category_id: cat.category.id,
          target: Number(this.state.target) // the target in state could be a string if input with the input field instead of slider, so I will convert it just in case
        }
      };

      console.log(budget_category);

      // Once we have the category created the budgetCategory can be created;
      this.props.createBudgetCategory(budget_category).then(bCategory => {
        // The budgetCategory can be added to the store right away
        this.props.addBudgetCategory(bCategory);

        // After creating the connection between the category and the budget, we
        // fetch the category so that it will have the budget included in the json
        // that is returned and we can add that version to our redux store;
        this.props.fetchCategory(cat.category.id);
        this.props.history.push(this.props.location.pathname);
      });
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
                <Label for="target" id="target">
                  Monthly Target
                </Label>
                {/* After updating target state with the input field the value
                  in state will be a string so I will convert the target state
                  to a number before passing it to the form slider.
                */}
                <FormSlider
                  value={Number(this.state.target)}
                  handleSliderChange={this.handleSliderChange}
                />
                <Input
                  type="number"
                  name="target"
                  id="target"
                  value={this.state.target}
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
      createBudgetCategory,
      addCategory,
      addBudgetCategory,
      fetchCategory
    }
  )(CategoryForm)
);
