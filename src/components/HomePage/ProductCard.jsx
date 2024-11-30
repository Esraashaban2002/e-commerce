import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function ProductCard({
  image,
  discount,
  title,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  showCart = false
}) {
  return (
    <Card className="border-0  h-auto" >
      <div className="position-relative">
        {discount && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-3">
            -{discount}%
          </Badge>
        )}
        <Card.Img variant="top" src={image} alt={title} className="p-3 bg-light"  style={{height:'400px'}} />
        <div className="position-absolute top-0 end-0 m-3 d-grid">
          <button className="btn btn-light rounded-circle mb-2" aria-label="Add to wishlist">
            <i className="fa-regular fa-heart text-dark"></i>
          </button>
          {showCart && (
            <button className="btn btn-light rounded-circle" aria-label="Add to cart">
              <i className="fa-regular fa-eye text-dark"></i>
            </button>
          )}
        </div>
      
      <Card.Body className="p-3">
        <Card.Title className="h6">{title}</Card.Title>
        <div className="d-flex align-items-center gap-2">
          <span className="text-danger">${currentPrice}</span>
          {originalPrice && (
            <span className="text-muted text-decoration-line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <div className="d-flex align-items-center gap-2 mt-2">
          <div className="text-warning">
            {Array(5).fill().map((_, i) => (
              <i key={i} className={`fa fa-star text-secondary${i < rating ? '-fill' : ''}`}></i>
            ))}
          </div>
          <span className="text-muted">({reviews})</span>
        </div>
      </Card.Body>
      </div>
    </Card>
  );
}