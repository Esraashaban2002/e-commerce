import React from "react";
import { Row, Col } from "react-bootstrap";

function CartHeader() {
  return (
    <Row className="bg-white p-4 rounded shadow-sm mb-4">
      <Col className="fw-bold">Product</Col>
      <Col className="fw-bold">Price</Col>
      <Col className="fw-bold">Quantity</Col>
      <Col className="fw-bold">Subtotal</Col>
    </Row>
  );
}

export default CartHeader;