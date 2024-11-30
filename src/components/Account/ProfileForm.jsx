import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { FormInput } from './FormInput';
import { PasswordInput } from './PasswordInput';

const profileInputs = [
  [
    { label: "First Name", value: "Md", type: "text" },
    { label: "Last Name", value: "Rimel", type: "text" }
  ],
  [
    { label: "Email", value: "rimel1111@gmail.com", type: "email" },
    { label: "Address", value: "Kingston, 5236, United State", type: "text" }
  ]
];

export function ProfileForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="shadow-sm">
      <Card.Body className="p-4">
        <h2 className="text-danger mb-4">Edit Your Profile</h2>
        <Form onSubmit={handleSubmit}>
          {profileInputs.map((row, rowIndex) => (
            <Row key={rowIndex} className="mb-3">
              {row.map((input, index) => (
                <Col md={6} key={index}>
                  <FormInput
                    label={input.label}
                    value={input.value}
                    type={input.type}
                  />
                </Col>
              ))}
            </Row>
          ))}
          
          <PasswordInput />

          <div className="d-flex justify-content-end gap-3 mt-4">
            <Button variant="link" className="text-dark text-decoration-none">
              Cancel
            </Button>
            <Button variant="danger" type="submit">
              Save Changes
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}