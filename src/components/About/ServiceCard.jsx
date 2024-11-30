import React from 'react';
import { Card } from 'react-bootstrap';

export default function ServiceCard({ icon, title, description }) {
  return (
    <Card className="border-0 text-center" style={{ minWidth: '240px' }}>
      <Card.Body className="d-flex flex-column align-items-center">
        <i 
          className={`mb-4 ${icon} `}
          style={{ fontSize: '80px'}}
        />
        <h3 className="h5 fw-semibold mb-2">{title}</h3>
        <Card.Text className="small">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}