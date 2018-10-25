import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  CardDeck,
  Card,
  CardTitle,
  Button
} from "reactstrap";

import BudgetCard from "../components/BudgetCard";

import { fetchBudgets } from "../actions/budgets";

class ProfileContainer extends Component {
  componentDidMount() {
    const { currentUser } = this.props;

    this.props.fetchBudgets();
  }

  render() {
    const { budgets } = this.props;

    return (
      <Container fluid className="budget-card-list">
        {budgets.length > 0 ? (
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <CardDeck>
                {budgets.map(b => (
                  <BudgetCard key={b.id} budget={b} />
                ))}
                <Card body className="text-center">
                  <CardTitle>Add Budget</CardTitle>
                  <NavLink to="/profile/add-budget">
                    <Button outline color="success">
                      Get Started
                    </Button>
                  </NavLink>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col md={{ size: 3, offset: 4 }}>
              <Card body className="text-center">
                <CardTitle>Add Budget</CardTitle>
                <NavLink to="/profile/add-budget">
                  <Button outline color="success">
                    Get Started
                  </Button>
                </NavLink>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    budgets: state.budgets.filter(b => b.user.id === state.currentUser.id)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBudgets }
  )(ProfileContainer)
);
