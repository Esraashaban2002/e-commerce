import React from 'react';
import { Card } from 'react-bootstrap';

export default function TeamMember({ image, name, role, socialIcons }) {
  return (
    <div style={{ minWidth: '240px', width: '370px' }}>
      <Card className="border-0">
        <div className="bg-light p-4 ">
          <Card.Img 
            variant="top" 
            src={image} 
            alt={name}
            style={{ objectFit: 'contain', width: '100%' , height: '50vh' }}
          />
        </div>
        <Card.Body className="px-0 pt-4">
          <h3 className="h4 fw-medium tracking-wider mb-2">{name}</h3>
          <p className="text-muted">{role}</p>
          <div className="d-flex gap-3 mt-3">
            {socialIcons.map((icon, index) => (
              <i
                key={index}
                className={icon}
                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

