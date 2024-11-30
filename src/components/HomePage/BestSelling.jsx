import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

 function BestSelling({ bestSellingProducts, loading }) {

  const [currentIndex, setCurrentIndex] = useState(12);
  const displayedProducts = bestSellingProducts.slice(currentIndex, currentIndex + 4);

  return (
    <Row className="my-5">
      <Row className="align-items-end mb-4">
        <Col>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-danger" style={{ width: '20px', height: '40px' }}></div>
            <span className="text-danger fw-semibold">This Month</span>
          </div>
          <h2 className="display-6 fw-semibold tracking-wider mb-0">Best Selling Products</h2>
        </Col>
        <Col xs="auto">
      <Button
          variant="danger"
          className="my-5 w-auto mx-auto px-4 py-3"
          aria-label="Navigate to home page"
        >
          View All
        </Button>
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
    </Row>
  );
}
export default BestSelling