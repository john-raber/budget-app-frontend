import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
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
import { createTransaction, addTransaction } from "../actions/transactions";

class TransactionForm extends Component {
  state = {
    modal: false,
    name: "",
    description: "",
    amount: 0,
    date: moment(),
    account_id: 0,
    transaction_type: "expense"
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleFormChange = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSliderChange = pos => {
    this.setState({ amount: pos });
  };

  handleDateChange = newDate => {
    this.setState({ date: newDate });
  };

  handleFormSubmit = e => {
    const {
      name,
      description,
      amount,
      date,
      account_id,
      transaction_type
    } = this.state;
    const { category, createTransaction } = this.props;
    const transaction = {
      transaction: {
        category_id: category.id,
        date: date._d,
        account_id: Number(account_id),
        name,
        description,
        amount,
        transaction_type
      }
    };

    e.preventDefault();
    createTransaction(transaction);

    this.setState({
      ...this.state,
      name: "",
      description: "",
      amount: 0,
      date: moment(),
      account_id: 0,
      transaction_type: "expense"
    });
    this.toggle();
  };

  render() {
    const { accounts } = this.props;

    return (
      <Fragment>
        <FaPlusCircle color="green" onClick={this.toggle} />
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>New Transaction</ModalHeader>
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
                <Label for="description">Description</Label>
                <Input
                  name="description"
                  id="description"
                  value={this.state.description}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="transaction_type"
                      value="income"
                      onChange={e =>
                        this.handleFormChange(e.target.name, e.target.value)
                      }
                      checked={this.state.transaction_type === "income"}
                    />{" "}
                    Income
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="transaction_type"
                      value="expense"
                      onChange={e =>
                        this.handleFormChange(e.target.name, e.target.value)
                      }
                      checked={this.state.transaction_type === "expense"}
                    />{" "}
                    Expense
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount</Label>
                <FormSlider
                  value={Number(this.state.amount)}
                  handleSliderChange={this.handleSliderChange}
                />
                <Input
                  type="number"
                  name="amount"
                  id="amount"
                  value={this.state.amount}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <DatePicker
                  onChange={this.handleDateChange}
                  selected={this.state.date}
                />
              </FormGroup>
              <FormGroup>
                <Label for="account_id">Account</Label>
                <Input
                  type="select"
                  name="account_id"
                  id="account_id"
                  value={this.state["account_id"]}
                  onChange={e =>
                    this.handleFormChange(e.target.name, e.target.value)
                  }
                >
                  <option value={0}>Select an account</option>
                  {accounts.map(a => (
                    <option key={a.id} value={a.id}>
                      {a.nickname}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <Button>Create</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createTransaction, addTransaction }
  )(TransactionForm)
);
