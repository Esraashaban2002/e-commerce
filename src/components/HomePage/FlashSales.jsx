import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Timer from './Timer'; 
import ProductCard from './ProductCard'; 

 function FlashSales({ flashSaleProducts, loading }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? flashSaleProducts.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === flashSaleProducts.length - 1 ? 0 : prevIndex + 1
    );
  };
  const displayedProducts = flashSaleProducts.slice(currentIndex, currentIndex + 4);

  return (
    <Row className="my-5">
      <Row className="align-items-end mb-4">
        <Col>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-danger" style={{ width: '20px', height: '40px' }}></div>
            <span className="text-danger fw-semibold">Today's</span>
          </div>
          <h2 className="display-6 fw-semibold tracking-wider mb-0">Flash Sales</h2>
        </Col>
        <Col>
          <Timer />
        </Col>
        <Col xs="auto">
          <div className="d-flex gap-2">
            <i
              className="fas fa-arrow-left p-3 bg-light rounded-5"
              onClick={handlePrevClick}
              style={{ cursor: 'pointer' }}
            ></i>
            <i
              className="fas fa-arrow-right p-3 bg-light rounded-5"
              onClick={handleNextClick}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        </Col>
      </Row>
      <Row>
        <section className="mb-5">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <Row className="g-4">
              {displayedProducts.map((product, index) => (
                <Col key={index} sm={6} lg={3}>
                  <ProductCard {...product} showCart={true} />
                </Col>
              ))}
            </Row>
          )}
        </section>
      </Row>
      <Button
          variant="danger"
          className="my-5 w-auto mx-auto px-4 py-3"
          aria-label="Navigate to home page"
        >
          View All Products
        </Button>
    </Row>
  );
}
export default FlashSales