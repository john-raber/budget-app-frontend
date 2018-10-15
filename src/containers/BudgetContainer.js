import React from "react";
import { Container, Row, Col } from "reactstrap";

const BudgetContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs="3">Sidebar for bank accounts</Col>
        <Col xs="9">Container for displaying 2 months</Col>
      </Row>
    </Container>
  );
};

export default BudgetContainer;
