import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SidebarMenu } from './SidebarMenu';
import { ProfileForm } from './ProfileForm';
import BreadcrumbNav from '../BreadcrummbNav';
import { BreadcrumbItems } from '../../App';

export function ProfileLayout() {
  return (
    <Container className="my-5">
       <BreadcrumbNav routes={BreadcrumbItems} />
      <Row className='mt-5'>
        <Col md={3}>
          <SidebarMenu />
        </Col>
        <Col md={9}>
          <ProfileForm />
        </Col>
      </Row>
    </Container>
  );
}