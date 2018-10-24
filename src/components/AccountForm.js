import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import FormSlider from "./FormSlider";

import { createAccount, addAccount } from "../actions/accounts";
import { createCategory, addCategory } from "../actions/categories";
import { createTransaction, addTransaction } from "../actions/transactions";

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
    const savingCategory = this.props.categories.find(
      c =>
        c.name.includes("saving") &&
        Number(this.props.match.params.budgetId) === c.budget.id
    );
    this.props.createAccount(account).then(acct => {
      this.props.addAccount(acct);

      let newAccount = acct.account;

      if (!!savingCategory && this.state.acctBalance > 0) {
        // if there is already a saving category, then I will add the balance of the new account to that category.
        // I will add the balance to this account through a transaction
        const transaction = {
          transaction: {
            name: "account creation",
            description: `account creation: ${newAccount.nickname}`,
            amount: this.state.acctBalance,
            date: moment()._d,
            transaction_type: "income",
            account_id: newAccount.id,
            category_id: savingCategory.id
          }
        };
        this.props.createTransaction(transaction);
      } else {
        // if there is no saving category already in place, then I will create a generic saving category and put the new balance there
        const category = {
          category: {
            name: "saving",
            budget_id: this.props.currentBudget.id,
            balance: this.state.acctBalance
          }
        };
        this.props
          .createCategory(category)
          .then(cat => this.props.addCategory(cat.category));
      }
    });
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

const mapStateToProps = state => {
  return {
    categories: state.categories,
    currentBudget: state.currentBudget
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      createAccount,
      addAccount,
      createTransaction,
      addTransaction,
      createCategory,
      addCategory
    }
  )(AccountForm)
);
