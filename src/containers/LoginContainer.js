import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import LoginForm from "../components/LoginForm";
import NewUserForm from "../components/NewUserForm";

const LoginContainer = props => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: 3, offset: 3 }}>
          <Jumbotron>
            <h3>Sign In</h3>
            <LoginForm />
          </Jumbotron>
        </Col>
        <Col md={{ size: 3 }}>
          <Jumbotron>
            <h3>Register</h3>
            <NewUserForm />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(LoginContainer);
