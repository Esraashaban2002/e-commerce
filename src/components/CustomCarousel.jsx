import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

function CustomCarousel({ activeIndex, setActiveIndex, groupedData, renderItem, rowProps = {}, colProps = {} }) {
    // Function to handle indicator clicks
    const handleIndicatorClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <>
    <Carousel
      activeIndex={activeIndex}
      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
      indicators={false} // Disable default indicators
      controls={false}   // Disable default controls
    >
      {groupedData.map((group, groupIndex) => (
        <Carousel.Item key={groupIndex}>
          <Row className="g-4 justify-content-center" {...rowProps}>
            {group.map((item, index) => (
              <Col key={index} {...colProps}>
                {renderItem(item)}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
     {/* Custom Rounded Indicators */}
     <div className="d-flex justify-content-center gap-2 mt-4">
        {groupedData.map((_, indicatorIndex) => (
          <div
            key={indicatorIndex}
            className={`rounded-circle ${
              activeIndex === indicatorIndex ? 'bg-danger' : 'bg-secondary'
            }`}
            style={{
              width: '12px',
              height: '12px',
              cursor: 'pointer',
            }}
            onClick={() => handleIndicatorClick(indicatorIndex)}
          />
        ))}
      </div>
    </>
  );
}

export default CustomCarousel;
