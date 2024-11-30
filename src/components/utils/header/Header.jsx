import React from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Use NavLink for route-based styling
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="top-banner bg-dark text-white py-2">
        <Container className="d-flex justify-content-between align-items-center">
          <p className="mb-0 mx-auto">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <button className="btn btn-link text-white text-decoration-underline ms-2 p-0">
              ShopNow
            </button>
          </p>
          <div className="language-selector">
            <span>English</span>
            <i className="fas fa-chevron-down ms-2" />
          </div>
        </Container>
      </div>

      <Navbar bg="white" expand="lg" className="py-4">
        <Container>
          <Navbar.Brand href="/" className="fw-bold fs-4">Exclusive</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto">
              {/* NavLink with dynamic class */}
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Home
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                About
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
              >
                Sign Up
              </NavLink>
            </Nav>

            <Form className="d-flex me-3 position-relative">
              <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="search-input"
                aria-label="Search"
              />
              <Button variant="outline-0" type="submit" className="position-absolute end-0">
                <i className="fas fa-search" />
              </Button>
            </Form>

            <div className="header-actions d-flex gap-3">
              <button className="btn btn-link p-0">
                <i className="fa-regular fa-heart text-dark"></i>
              </button>
              <button className="btn btn-link p-0">
                <i className="fa fa-shopping-cart text-dark"></i>
              </button>
              <button className="btn btn-link p-0">
                <NavLink
                to="/account"
                className={({ isActive }) => (isActive ? 'nav-link active-icon' : 'nav-link')}
                ><i className="fa-regular fa-user"></i></NavLink>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
