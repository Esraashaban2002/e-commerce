import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartActions from "./CartActions";
import CartSummary from "./CartSummary";
import LCD from '../../assets/images/g27cq4-500x500 1.png'
import H1 from '../../assets/images/g92-2-500x500 1.png'
const cartItems = [
  {
    id: 1,
    name: "LCD Monitor",
    price: 650,
    quantity: 1,
    image: LCD
  },
  {
    id: 2,
    name: "H1 Gamepad",
    price: 550,
    quantity: 2,
    image: H1
  }
];


function CartPage() {
  return (
    <Container className="py-5">
      <Nav aria-label="breadcrumb">
        <Nav.Item>
          <Nav.Link href="/" className="text-muted">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active>Cart</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <Row className="mt-4">
        <Col>
          <CartHeader />
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <CartActions />
          <CartSummary subtotal={1750} shipping="Free" total={1750} />
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;