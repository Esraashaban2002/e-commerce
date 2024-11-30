import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import PromotionCard from './PromotionCard';
import PlayStationv from '../../assets/images/ps5-slim-goedkope-playstation_large 1.png'
import Women from '../../assets/images/attractive-woman-wearing-hat-posing-black-background 1.png'
import showcase1 from '../../assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import showcase2 from '../../assets/images/652e82cd70aa6522dd785109a455904c.png'

export const promotionItems = [
    {
      id: 1,
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: PlayStationv,
      height: "581px",
    },
    {
      id: 2,
      title: "Women's Collections",
      description: "Featured woman collections that give you another vibe.",
      image: Women,
      height: "284px",
    }
  ];
  
  export const bottomImages = [
    {
      id: 1,
      src: showcase1,
      alt: "Product showcase image"
    },
    {
      id: 2,
      src: showcase2,
      alt: "Product showcase image"
    }
  ];

function NewArrival() {
  return (
    <Container fluid className="mt-5">
        <Row className="align-items-end mb-4">
        <Col>
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="bg-danger" style={{ width: '20px', height: '40px' }}></div>
            <span className="text-danger fw-semibold">Featured</span>
          </div>
          <h2 className="display-6 fw-semibold tracking-wider mb-0">New Arrival</h2>
        </Col>
      </Row>

      <Row className="g-4">
        <Col xs={12} lg={6}>
          <PromotionCard {...promotionItems[0]} />
        </Col>
        <Col xs={12} lg={6}>
        <Row>
          <div className="d-flex flex-column">
            <div className="bg-dark rounded overflow-hidden mb-4">
              <PromotionCard {...promotionItems[1]} />
            </div>
            <Row className="g-4">
              {bottomImages.map((image) => (
                <Col xs={12} sm={6} key={image.id}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fluid
                    className="w-100"
                    style={{ 
                      minWidth: '240px', 
                      width: '270px', 
                      aspectRatio: '0.95',
                      objectFit: 'contain'
                    }}
                  />
                </Col>
              ))}
            </Row>
          </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default NewArrival