import React from "react";
import { withRouter } from "react-router-dom";
import { Card, CardTitle, Button } from "reactstrap";

const BudgetCard = ({ budget, history }) => {
  return (
    <Card body className="text-center">
      <CardTitle>{budget.name}</CardTitle>
      <Button
        outline
        color="primary"
        onClick={() => history.push(`/profile/${budget.id}`)}
      >
        Continue
      </Button>
    </Card>
  );
};

export default withRouter(BudgetCard);
