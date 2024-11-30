import React from 'react';
import { Card } from 'react-bootstrap';
import Phone from '../../assets/images/icons-phone.png'
import Email from '../../assets/images/icons-mail.png'
const contactInfo = [
  {
    icon: Phone,
    title: "Call To Us",
    description: "We are available 24/7, 7 days a week.",
    details: ["Phone: +8801611112222"]
  },
  {
    icon:Email,
    title: "Write To US",
    description: "Fill out our form and we will contact you within 24 hours.",
    details: [
      "Emails: customer@exclusive.com",
      "Emails: support@exclusive.com"
    ]
  }
];

function ContactInfoBlock({ icon, title, description, details }) {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-3">
        <img
          src={icon}
          alt=""
          className="me-3"
          style={{ width: '40px', height: '40px' }}
        />
        <h5 className="mb-0">{title}</h5>
      </div>
      <p className="small mb-2">{description}</p>
      {details.map((detail, index) => (
        <p key={index} className="small mb-1">{detail}</p>
      ))}
    </div>
  );
}

function ContactSidebar() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        {contactInfo.map((info, index) => (
          <React.Fragment key={index}>
            <ContactInfoBlock {...info} />
            {index < contactInfo.length - 1 && <hr className="my-4" />}
          </React.Fragment>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ContactSidebar;