import React from 'react';
import { Form } from 'react-bootstrap';

export function FormField({
  label,
  required = false,
  type = "text",
  placeholder,
  value,
  onChange
}) {
  const inputId = `checkout-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Form.Group className="mb-3" controlId={inputId}>
      <Form.Label className="text-opacity-40">
        {label}{required && <span className="text-danger">*</span>}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="bg-light rounded p-3"
        aria-required={required}
      />
    </Form.Group>
  );
}