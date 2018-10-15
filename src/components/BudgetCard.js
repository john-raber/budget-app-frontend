import React from "react";
import { Card, CardTitle, Button } from "reactstrap";

const BudgetCard = ({ budget }) => {
  return (
    <Card body className="text-center">
      <CardTitle>{budget.name}</CardTitle>
      <Button outline color="primary">
        Continue
      </Button>
    </Card>
  );
};

export default BudgetCard;
