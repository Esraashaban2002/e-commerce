import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

function CartSummary({ subtotal, shipping, total }) {
  return (
    <Row className="my-4">
      <Col md={7}>
        <Form className="d-flex gap-3">
          <Form.Control
            type="text"
            placeholder="Coupon Code"
            aria-label="Coupon Code"
            className="w-50"
          />
          <Button variant="danger">
            Apply Coupon
          </Button>
        </Form>
      </Col>
      <Col md={5}>
        <Card className="border-2">
          <Card.Body>
            <Card.Title className="mb-4">Cart Total</Card.Title>
            <Row className="mb-3">
              <Col>Subtotal:</Col>
              <Col className="text-end">${subtotal}</Col>
            </Row>
            <Row className="mb-3">
              <Col>Shipping:</Col>
              <Col className="text-end">{shipping}</Col>
            </Row>
            <hr />
            <Row className="mb-4">
              <Col>Total:</Col>
              <Col className="text-end">${total}</Col>
            </Row>
            <Button variant="danger" className="w-100">
              Proceed to checkout
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CartSummary;