import React from 'react';
import { Form } from 'react-bootstrap';

export function FormInput({ label, value, type }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <Form.Group controlId={inputId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={value}
        className="bg-light"
        aria-label={label}
      />
    </Form.Group>
  );
}