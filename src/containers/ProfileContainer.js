import React from "react";
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
              <Button outline color="success">
                Get Started
              </Button>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileContainer;
