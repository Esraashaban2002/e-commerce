import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Form.Group className="flex-grow-1" style={{ minWidth: '200px' }}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
              />
            </Form.Group>

            <Form.Group className="flex-grow-1" style={{ minWidth: '200px' }}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
              />
            </Form.Group>

            <Form.Group className="flex-grow-1" style={{ minWidth: '200px' }}>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Your Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-label="Your Phone"
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              name="message"
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Your Message"
              style={{resize:'none'}}
            />
          </Form.Group>

          <Button 
            type="submit"
            variant="danger"
            className="py-3 d-block ms-auto"
          >
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ContactForm;