import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactSidebar from './ContactSidebar';
import ContactForm from './ContactForm';
import BreadcrumbNav from '../BreadcrummbNav';
import { BreadcrumbItems } from '../../App';

function ContactPage() {   
  return (
    <Container className="my-5">
      <BreadcrumbNav routes={BreadcrumbItems} />
      <Row className="mt-5">
        <Col md={4}>
          <ContactSidebar />
        </Col>
        <Col md={8}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;