import React from 'react';
import './Footer.css';
import Feedback from '../../../assets/images/Vector.png';
import Twitter from '../../../assets/images/twitter.png';
import Instagram from '../../../assets/images/icon-instagram.png';
import LinkedIn from '../../../assets/images/linkedin.png';
const SocialIcons = () => {
  const socialLinks = [
    { src:Feedback, alt: "Facebook", href: "https://www.facebook.com/" },
    { src:Twitter , alt: "Twitter", href: "https://x.com/" },
    { src:Instagram , alt: "Instagram", href: "https://www.instagram.com/" },
    { src:LinkedIn , alt: "LinkedIn", href: "https://www.linkedin.com/" }
  ];

  return (
    <nav className="social-icons" aria-label="Social media links">
      {socialLinks.map((social, index) => (
        <a 
          href={social.href}
          key={index}
          className="social-link"
          aria-label={`Visit our ${social.alt} page`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src={social.src}
            alt={social.alt}
            className="social-icon"
          />
        </a>
      ))}
    </nav>
  );
};

export default SocialIcons;