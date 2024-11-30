import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function ErrorContent() {
  return (
    <Container className="text-center mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-1 fw-bold">404 Not Found</h1>
          <p className="lead mt-4">
            Your visited page not found. You may go home page.
          </p>
        </Col>
      </Row>
    </Container>
  );
}