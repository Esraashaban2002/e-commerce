import React from 'react';
import { Card, Button } from 'react-bootstrap';

function PromotionCard({ title, description, image, height }) {
  return (
    <Card className="bg-dark text-white border-0 rounded overflow-hidden" style={{ minWidth: '240px', width: '570px' }}>
        <div className="position-relative" style={{ minHeight: height }}>
       <Card.Img 
          src={image} 
          alt={title}
          className="position-absolute w-100 h-100 object-fit-cover"
          style={{ top: 0, left: 0 }}
        />
        <div className="position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} />
        <Card.Body className="p-4 mt-5">
          <div className="max-w-[242px] mb-5" style={{ position: "absolute" , bottom: "0"}}>
            <Card.Title className="fs-2 fw-semibold tracking-wider mb-3">
              {title}
            </Card.Title>
            <Card.Text className="fs-6 mb-4">
              {description}
            </Card.Text>
            <div className="d-flex flex-column" style={{ width: '81px' }}>
              <Button
                variant="link"
                className="text-white p-0 text-decoration-none fw-medium text-start text-decoration-underline"
                aria-label={`Shop Now for ${title}`}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default PromotionCard;