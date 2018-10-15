import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import BudgetMonthsContainer from "./BudgetMonthsContainer";
import AccountForm from "../components/AccountForm";
import AccountsSidebar from "../components/AccountsSidebar";

import { fetchAccounts } from "../actions/accounts";

class BudgetContainer extends Component {
  componentDidMount() {
    const { budgetId } = this.props.match.params;

    this.props.fetchAccounts(budgetId);
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col xs="2">
            <Row>
              <AccountsSidebar />
            </Row>
            <Row>
              <h5>Add Account</h5>
              <AccountForm />
            </Row>
          </Col>
          <Col xs="5">
            <BudgetMonthsContainer />
          </Col>
          <Col xs="5">
            <BudgetMonthsContainer />
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
    { fetchAccounts }
  )(BudgetContainer)
);
