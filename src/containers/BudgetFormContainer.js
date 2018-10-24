import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import BudgetForm from "../components/BudgetForm";

const BudgetFormContainer = props => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: 3, offset: 5 }}>
          <Jumbotron>
            <h3>New Budget</h3>
            <BudgetForm />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(BudgetFormContainer);
