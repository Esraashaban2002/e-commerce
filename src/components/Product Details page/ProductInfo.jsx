import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './css/ProductInfo.css';

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  const colors = [
    { id: 'blue', label: 'Blue', value: '#A0BCE0' },
    { id: 'red', label: 'Red', value: '#E07575' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="product-info">
      <h1 className="product-title">Havic HV G-92 Gamepad</h1>
      
      <div className="product-meta">
        <div className="ratings">
        <div className="text-warning">
            {Array(5).fill().map((_, i) => (
              <i key={i} className={`fa fa-star text-secondary${i < 4 ? '-fill' : ''}`}></i>
            ))}
          </div>
           <span className="review-count">(150 Reviews)</span>
        </div>
        <div className="stock-status">
          <span>In Stock</span>
        </div>
      </div>
      
      <div className="price">$192.00</div>
      
      <p className="description">
        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive 
        for easy bubble free install & mess free removal Pressure sensitive.
      </p>
      
      <div className="color-selector">
        <div className="selector-label">Colors:</div>
        <div className="color-options">
          {colors.map(color => (
            <button
              key={color.id}
              className={`color-btn ${selectedColor === color.id ? 'active' : ''}`}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Select ${color.label} color`}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
      
      <div className="size-selector">
        <div className="selector-label">Size:</div>
        <div className="size-options">
          {sizes.map(size => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      
      <div className="actions">
        <div className="quantity-selector">
          <button 
            className="quantity-btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            aria-label="Quantity"
          />
          <button 
            className="quantity-btn"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        
        <Button variant="danger" className="buy-now-btn">
          Buy Now
        </Button>
        
        <button className="wishlist-btn" aria-label="Add to wishlist">
        <i className="fa fa-heart fa-2xl text-danger"></i>
        </button>
      </div>
      
      <div className="delivery-info">
        <div className="delivery-item align-items-center">
          <i className='fa-solid fa-truck-fast fa-2xl' />
          <div className="delivery-content">
            <h3>Free Delivery</h3>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        
        <div className="delivery-item align-items-center">
        <i className="fa-solid fa-repeat fa-2xl" />
          <div className="delivery-content">
            <h3>Return Delivery</h3>
            <p>
              Free 30 Days Delivery Returns.{" "}
              <a href="#details">Details</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}