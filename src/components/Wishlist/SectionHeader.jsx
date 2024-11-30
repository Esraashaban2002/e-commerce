import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export function SectionHeader({ title, buttonText, showIndicator }) {
  return (
    <Row className="align-items-center mb-4">
      <Col className="d-flex align-items-center gap-3">
        {showIndicator && (
          <div className="bg-danger" style={{ width: '5px', height: '40px' }} />
        )}
        <h2 className="h4 mb-0">{title}</h2>
      </Col>
      <Col xs="auto">
        <Button 
          variant="outline-dark" 
          className="px-4 py-2"
        >
          {buttonText}
        </Button>
      </Col>
    </Row>
  );
}