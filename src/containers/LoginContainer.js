import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";

import NavMenu from "../components/NavMenu";
import LoginForm from "../components/LoginForm";
import NewUserForm from "../components/NewUserForm";

const LoginContainer = props => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: 2, offset: 4 }}>
          <Jumbotron>
            <h3>Sign In</h3>
            <LoginForm />
          </Jumbotron>
        </Col>
        <Col md={{ size: 2 }}>
          <Jumbotron>
            <h3>Register</h3>
            <NewUserForm />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginContainer;
