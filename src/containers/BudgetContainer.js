import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import BudgetMonthContainer from "./BudgetMonthContainer";
import AccountForm from "../components/AccountForm";
import AccountsSidebar from "../components/AccountsSidebar";

import { fetchAccounts } from "../actions/accounts";
import { fetchCategories } from "../actions/categories";
import { fetchBudgetCategories } from "../actions/budgetCategories";

class BudgetContainer extends Component {
  componentDidMount() {
    const { budgetId } = this.props.match.params;

    this.props.fetchAccounts(budgetId);
    this.props.fetchCategories();
    this.props.fetchBudgetCategories(budgetId);
  }

  render() {
    const { accounts } = this.props;

    return (
      <Container>
        <Row>
          <Col xs="3">
            <Row>
              <AccountsSidebar accounts={accounts} />
            </Row>
            <Row>
              <h5>Add Account</h5>
              <AccountForm />
            </Row>
          </Col>
          <Col xs="9">
            <BudgetMonthContainer />
          </Col>
        </Row>
      </Container>
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
    { fetchAccounts, fetchCategories, fetchBudgetCategories }
  )(BudgetContainer)
);
