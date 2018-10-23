import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import AccountsSidebar from "../components/AccountsSidebar";
import AccountTransactionTable from "../components/AccountTransactionTable";
import { setCurrentAccount } from "../actions/currentAccount";
import { fetchAccounts, fetchedAccounts } from "../actions/accounts";

class TransactionContainer extends Component {
  render() {
    const { accounts, currentAccount, transactions } = this.props;
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Row>
              <AccountsSidebar accounts={accounts} />
            </Row>
          </Col>
          <Col xs="9">
            <Jumbotron>
              <AccountTransactionTable
                currentAccount={currentAccount}
                transactions={transactions}
              />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    currentAccount: state.currentAccount,
    transactions: state.transactions
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchAccounts, fetchedAccounts, setCurrentAccount }
  )(TransactionContainer)
);
