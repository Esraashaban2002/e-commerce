import React from "react";
import { Row, Col, Form, Image } from "react-bootstrap";

function CartItem({ name, price, quantity, image }) {
  const subtotal = price * quantity;
  
  return (   
    <Row className="bg-white p-4 rounded shadow-sm mb-4 align-items-center">
      <Col md={3} className="d-flex align-items-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={54}
            height={54}
            className="object-fit-contain me-3"
          />
        ) : (
          <div className="bg-light me-3" style={{ width: 54, height: 54 }}></div>
        )}
        <span>{name}</span>
      </Col>
      <Col md={3}>${price}</Col>
      <Col md={3}>
        <Form.Control
          type="number"
          value={quantity}
          min={1}
          aria-label="Quantity"
          className="w-75"
        />
      </Col>
      <Col md={3}>${subtotal}</Col>
    </Row>
  );
}

export default CartItem;