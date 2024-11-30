import React from 'react';
import { Card } from 'react-bootstrap';

// StatCard Component
export default function StatCard({ icon, number, description, isActive, onClick }) {
  return (
    <Card
      onClick={onClick} // Handle click to toggle active state
      className={`text-center p-4 h-100 ${isActive ? 'bg-danger text-white' : 'border-secondary'}`}
      style={{
        minWidth: '240px',
        width: '270px',
        cursor: 'pointer', // Make it clear the card is clickable
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center">
        <i
          className={`mb-4 ${icon}`}
          style={{
            fontSize: '80px',
          }}
        />
        <h3 className="fw-bold tracking-wider mb-2">{number}</h3>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

