import React from 'react';
import './Footer.css';

const FooterLinks = ({ title, links }) => {
  return (
    <section className="link-section">
      <h3 className="section-title">{title}</h3>
      <nav className="link-list">
        {links.map((link, index) => (
          <a 
            href={link.href} 
            key={index} 
            className="footer-link"
            rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
            target={link.href.startsWith('http') ? "_blank" : undefined}
          >
            {link.text}
          </a>
        ))}
      </nav>
    </section>
  );
};

export default FooterLinks;