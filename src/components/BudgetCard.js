import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, CardTitle, Button } from "reactstrap";

import { setCurrentBudget } from "../actions/currentBudget";

const BudgetCard = ({ budget, history, setCurrentBudget }) => {
  return (
    <Card body className="text-center">
      <CardTitle>{budget.name}</CardTitle>
      <Button
        outline
        color="primary"
        onClick={() => {
          setCurrentBudget(budget);
          history.push(`/profile/${budget.id}`);
        }}
      >
        Continue
      </Button>
    </Card>
  );
};

export default withRouter(
  connect(
    null,
    { setCurrentBudget }
  )(BudgetCard)
);
