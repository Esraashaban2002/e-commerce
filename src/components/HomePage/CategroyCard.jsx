import React from "react";
import { Card } from "react-bootstrap";

export function CategoryCard({ name, icon, isActive, onClick}) {
  return (
    <Card 
    onClick={onClick} // Handle click to toggle active state
    className={`border rounded p-4 text-center
        ${isActive ? 'bg-danger text-white' : 'border-secondary'} `}
      style={{ width: '180px' }}
    >
      <i
        variant="top"
        className={`mx-auto ${icon}`}
        style={{ fontSize:'56px' }}
      />
      <Card.Body className="p-0 mt-3">
        <Card.Text className="m-0">{name}</Card.Text>
      </Card.Body>
    </Card>
  );
}