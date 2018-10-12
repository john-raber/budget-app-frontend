import React from "react";
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

import NavMenu from "../components/NavMenu";

const ProfileContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ size: "auto", offset: 4 }}>
          <CardDeck>
            <Card body className="text-center">
              <CardTitle>Old Budget</CardTitle>
              <Button outline color="primary">
                Continue
              </Button>
            </Card>
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
    </Container>
  );
};

export default withRouter(ProfileContainer);
