import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export function ProductItem({
  image,
  name,
  price,
  quantity = 1
}) {
  return (
    <Row className="align-items-center mb-3">
      <Col xs="auto">
        <Image
          src={image}
          alt={`Product image of ${name}`}
          width={54}
          height={54}
          className="object-fit-contain"
        />
      </Col>
      <Col>
        <div className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="fw-bold">{price}</span>
        </div>
        {quantity > 1 && (
          <small className="text-muted">Quantity: {quantity}</small>
        )}
      </Col>
    </Row>
  );
}