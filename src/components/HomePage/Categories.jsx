import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CategoryCard } from './CategroyCard';

 function Categories() {
    const categoryItems = [
        {
          name: "Phones",
          icon: "fa-solid fa-mobile-screen-button",
        },
        {
          name: "Computers",
          icon: "fa-solid fa-desktop",
        },
        {
          name: "SmartWatch",
          icon: "fas fa-clock",
        },
        {
          name: "Camera",
          icon: "fa-solid fa-camera",
        },
        {
          name: "HeadPhones",
          icon: "fa-solid fa-headphones",
        },
        {
          name: "Gaming",
          icon: "fa-solid fa-gamepad",
        }
      ];

      const [activeIndexStat, setActiveIndexStat] = useState(null);
      // Toggle the active card on click
      const handleCardClick = (index) => {
        setActiveIndexStat(index === activeIndexStat ? null : index); // Toggle the active state
      };

      const [currentIndex, setCurrentIndex] = useState(0);
      const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? categoryItems.length - 1 : prevIndex - 1
        );
      };
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === categoryItems.length - 1 ? 0 : prevIndex + 1
        );
      };
      const displayecategory = categoryItems.slice(currentIndex, currentIndex + 6);

  return (
    <Row className="my-5">
      <Row className="align-items-end mb-4">
        <Col>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-danger" style={{ width: '20px', height: '40px' }}></div>
            <span className="text-danger fw-semibold">Categories</span>
          </div>
          <h2 className="display-6 fw-semibold tracking-wider mb-0">Browse By Category</h2>
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
        <Row className="g-4">
        {displayecategory.map((category, index) => (
          <Col key={index} xs="auto">
            <CategoryCard
              {...category}
              isActive={activeIndexStat === index}
              onClick={() => handleCardClick(index)} 
            />
          </Col>
        ))}
      </Row>

    </Row>
  );
}
export default Categories
