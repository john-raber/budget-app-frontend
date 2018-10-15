import React from "react";
import { Container, Row, Col } from "reactstrap";

import BudgetMonthsContainer from "./BudgetMonthsContainer";

const BudgetContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs="2">Sidebar for bank accounts</Col>
        <Col xs="5">
          <BudgetMonthsContainer />
        </Col>
        <Col xs="5">
          <BudgetMonthsContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetContainer;
