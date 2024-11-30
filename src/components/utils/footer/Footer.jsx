import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterLinks from './FooterLinks';
import NewsletterForm from './NewsletterForm';
import SocialIcons from './SocialIcons';
import AppDownload from './AppDownload';
import './Footer.css';

const Footer = () => {
  const supportLinks = [
    { text: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.", href: "#" },
    { text: "exclusive@gmail.com", href: "mailto:exclusive@gmail.com" },
    { text: "+88015-88888-9999", href: "tel:+8801588889999" }
  ];

  const accountLinks = [
    { text: "My Account", href: "#" },
    { text: "Login / Register", href: "/register" },
    { text: "Cart", href: "/card" },
    { text: "Wishlist", href: "/wishlist" },
    { text: "Shop", href: "#" }
  ];

  const quickLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms Of Use", href: "#" },
    { text: "FAQ", href: "#" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content g-4">
          <Col lg={3} md={6}>
            <section className="brand-section">
              <h2 className="brand-name">Exclusive</h2>
              <h3 className="subscribe-title">Subscribe</h3>
              <p className="offer-text">Get 10% off your first order</p>
              <NewsletterForm />
            </section>
          </Col>

          <Col lg={2} md={6}>
            <FooterLinks title="Support" links={supportLinks} />
          </Col>

          <Col lg={2} md={6}>
            <FooterLinks title="Account" links={accountLinks} />
          </Col>

          <Col lg={2} md={6}>
            <FooterLinks title="Quick Link" links={quickLinks} />
          </Col>

          <Col lg={3} md={6}>
            <AppDownload />
            <SocialIcons />
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
          <div className="divider" />
          <div className="copyright">
            <p className="copyright-text">
              &copy; Copyright Rimel 2022. All right reserved
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;