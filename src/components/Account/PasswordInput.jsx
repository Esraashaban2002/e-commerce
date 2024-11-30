import React from 'react';
import { Form } from 'react-bootstrap';

const passwordFields = [
  { label: "Current Password", id: "current-password" },
  { label: "New Password", id: "new-password" },
  { label: "Confirm New Password", id: "confirm-password" }
];

export function PasswordInput() {
  return (
    <div className="mt-4">
      <h3 className="h5 mb-3">Password Changes</h3>
      {passwordFields.map((field) => (
        <Form.Group key={field.id} controlId={field.id} className="mb-3">
          <Form.Control
            type="password"
            placeholder={field.label}
            className="bg-light"
            aria-label={field.label}
          />
        </Form.Group>
      ))}
    </div>
  );
}