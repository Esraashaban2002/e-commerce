import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Music from '../../assets/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'
 function MusicEnhancer() {
    const timerData = [
        { value: "23", label: "Hours" },
        { value: "05", label: "Days" },
        { value: "59", label: "Minutes" },
        { value: "35", label: "Seconds" }
      ];
  return (
    <Container fluid className="bg-dark text-white py-5">
      <Row className="justify-content-center align-items-center g-4">
        <Col lg={5}>
          <div>
            <p className="fw-semibold mb-2" style={{color:"#00FF66"}} >Categories</p>
            <h1 className="display-4 fw-semibold tracking-wider mb-4">
              Enhance Your Music Experience
            </h1>
            <Row className="g-3 mt-4">
      {timerData.map((item, index) => (
        <Col key={index} className="d-flex justify-content-center">
          <Card className="bg-white rounded-circle text-center p-2" style={{ width: '62px', height: '62px' }}>
      <Card.Body className="d-flex flex-column justify-content-center p-0">
        <div className="fw-semibold">{item.value}</div>
        <small>{item.label}</small>
      </Card.Body>
    </Card>
        </Col>
      ))}
    </Row>
            <Button 
              style={{backgroundColor:"#00FF66"}}  
              size="lg" 
              className="mt-4"
              aria-label="Buy Now"
            >
              Buy Now!
            </Button>
          </div>
        </Col>
        <Col lg={7}>
          <img
            src= {Music}
            alt="Music enhancement product showcase"
            className="img-fluid"
            loading="lazy"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default MusicEnhancer