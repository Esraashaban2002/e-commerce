import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FormField } from './FormField';
import { ProductItem } from './ProductItem';
import { PaymentMethod } from './PaymentMethod';
import LCD from '../../assets/images/g27cq4-500x500 1.png'
import H1 from '../../assets/images/g92-2-500x500 1.png'
import Bkash from '../../assets/images/image 32.png'
import Visa from '../../assets/images/image 30.png'
import Mastercard from '../../assets/images/image 31.png'
import Nagad from '../../assets/images/image 33.png'

export function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
    saveInfo: false
  });

  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [couponCode, setCouponCode] = useState('');

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const products = [
    { image: LCD , name: "LCD Monitor", price: "$650" },
    { image: H1 , name: "H1 Gamepad", price: "$1100" }
  ];

  const paymentIcons = [Bkash , Visa, Mastercard , Nagad];

  return (
    <Container className="py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-black-50">Account</li>
          <li className="breadcrumb-item text-black-50">My Account</li>
          <li className="breadcrumb-item text-black-50">Product</li>
          <li className="breadcrumb-item text-black-50">View Cart</li>
          <li className="breadcrumb-item active">Checkout</li>
        </ol>
      </nav>

      <h1 className="display-4 mb-5">Billing Details</h1>

      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <FormField
              label="First Name"
              required
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
            />
            <FormField
              label="Company Name"
              value={formData.companyName}
              onChange={handleInputChange('companyName')}
            />
            <FormField
              label="Street Address"
              required
              value={formData.streetAddress}
              onChange={handleInputChange('streetAddress')}
            />
            <FormField
              label="Apartment, floor, etc."
              placeholder="optional"
              value={formData.apartment}
              onChange={handleInputChange('apartment')}
            />
            <FormField
              label="Town/City"
              required
              value={formData.townCity}
              onChange={handleInputChange('townCity')}
            />
            <FormField
              label="Phone Number"
              required
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange('phoneNumber')}
            />
            <FormField
              label="Email Address"
              required
              type="email"
              value={formData.emailAddress}
              onChange={handleInputChange('emailAddress')}
            />

            <Form.Check
              type="checkbox"
              id="save-info"
              label="Save this information for faster check-out next time"
              checked={formData.saveInfo}
              onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
              className="mb-4 "
            />
          </Form>
        </Col>

        <Col md={6}>
          <div className="bg-light p-4 rounded">
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}

            <hr />

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Total:</span>
              <span className="fw-bold">$1750</span>
            </div>

            <PaymentMethod
              type="Bank"
              icons={paymentIcons}
              selected={paymentMethod === 'bank'}
              onChange={() => setPaymentMethod('bank')}
            />
            <PaymentMethod
              type="Cash on delivery"
              selected={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />

            <Row className="g-2 mb-4">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button variant="danger">Apply Coupon</Button>
              </Col>
            </Row>

            <Button variant="danger" size="lg" className="">
              Place Order
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}