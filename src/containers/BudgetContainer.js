import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "reactstrap";

import BudgetMonthsContainer from "./BudgetMonthsContainer";

const BudgetContainer = () => {
  return (
    <Container>
      <Row>
        <Col xs="2">
          <ButtonGroup vertical>
            <Button>Bank Account 1</Button>
            <Button>Bank Account 2</Button>
          </ButtonGroup>
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
};

export default BudgetContainer;
