import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import BudgetMonthContainer from "./BudgetMonthContainer";
import AccountForm from "../components/AccountForm";
import AccountsSidebar from "../components/AccountsSidebar";

import { fetchAccounts, fetchedAccounts } from "../actions/accounts";
import { fetchCategories } from "../actions/categories";
import { fetchCurrentBudget } from "../actions/currentBudget";
import { fetchTransactions } from "../actions/transactions";

class BudgetContainer extends Component {
  componentDidMount() {
    const { budgetId } = this.props.match.params;

    this.props.fetchAccounts().then(accounts => {
      this.props.fetchedAccounts(
        accounts.filter(
          a => a.budget_id === Number(this.props.match.params.budgetId)
        )
      );
    });
    this.props.fetchCategories();
    this.props.fetchCurrentBudget(budgetId);
    this.props.fetchTransactions();
  }

  render() {
    const { accounts, currentBudget } = this.props;

    return (
      <Container>
        <Row>
          <Col xs="3">
            <Row>
              <AccountsSidebar accounts={accounts} />
            </Row>
            <Row>
              <Jumbotron>
                <h5>Add Account</h5>
                <AccountForm />
              </Jumbotron>
            </Row>
          </Col>
          <Col xs="9">
            <BudgetMonthContainer currentBudget={currentBudget} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    currentBudget: state.currentBudget
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchAccounts,
      fetchedAccounts,
      fetchCategories,
      fetchCurrentBudget,
      fetchTransactions
    }
  )(BudgetContainer)
);
