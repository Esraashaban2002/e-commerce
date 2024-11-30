import React from "react";
import { Button, Row, Col } from "react-bootstrap";

function CartActions() {
  return (
    <Row className="mb-4">
      <Col className="d-flex justify-content-between">
        <Button variant="outline-dark" className="me-3">
          Return To Shop
        </Button>
        <Button variant="outline-dark">
          Update Cart
        </Button>
      </Col>
    </Row>
  );
}

export default CartActions;