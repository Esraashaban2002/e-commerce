import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Row className="g-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Col key={unit} xs="auto">
          <div className="d-flex flex-column align-items-center">
            <small className="text-muted text-uppercase">{unit}</small>
            <div className="fw-bold fs-3">{String(value).padStart(2, '0')}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
export default Timer