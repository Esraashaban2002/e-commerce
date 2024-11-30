import React from 'react';
import { Form, Row, Col, Image } from 'react-bootstrap';

export function PaymentMethod({
  type,
  icons,
  selected,
  onChange
}) {
  return (
    <Row className="align-items-end mb-4">
      
  <Col>
  <Form.Check
        type="radio"
        id={`payment-${type.toLowerCase()}`}
        label={type}
        checked={selected}
        onChange={onChange}
        className="d-flex align-items-center gap-2"
      />
  </Col>

      <Col xs="auto">
      {icons && (
        <Row className="mt-2 ms-4">
          {icons.map((icon, index) => (
            <Col key={index} xs="auto">
              <Image
                src={icon}
                alt={`Payment method ${type} icon`}
                width={42}
                height={28}
                className="object-fit-contain"
              />
            </Col>
          ))}
        </Row>
      )}
      </Col>
    </Row>
  );
}