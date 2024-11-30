import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StatCard from './StatCard';
import TeamMember from './TeamMember';
import ServiceCard from './ServiceCard';
import { statsData, teamData, servicesData } from '../../Data/AboutData';
import BreadcrumbNav from '../BreadcrummbNav';
import {BreadcrumbItems} from '../../App';
import CustomCarousel from '../CustomCarousel';
import Image from '../../assets/images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'

export default function AboutPage() {
      const [activeIndexStat, setActiveIndexStat] = useState(null);
      // Toggle the active card on click
      const handleCardClick = (index) => {
        setActiveIndexStat(index === activeIndexStat ? null : index); // Toggle the active state
      };

   const groupedData = [];
  for (let i = 0; i < teamData.length; i += 3) {
    groupedData.push(teamData.slice(i, i + 3));
  }

    // State to track the active carousel slide
    const [activeIndexTeam, setActiveIndexTeam] = useState(0);

  return (
    <Container className="mt-5 mb-5">
         <BreadcrumbNav routes={BreadcrumbItems} />
      <Row className="mt-5 align-items-center">
        <Col md={5}>
          <h1 className="display-4 fw-semibold mb-4">Our Story</h1>
          <p className="lead mb-4">
            Launced in 2015, Exclusive is South Asia's premier online shopping makterplace 
            with an active presense in Bangladesh. Supported by wide range of tailored 
            marketing, data and service solutions, Exclusive has 10,500 sallers and 300 
            brands and serves 3 millioons customers across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very fast. 
            Exclusive offers a diverse assotment in categories ranging from consumer.
          </p>
        </Col>
        <Col md={7}>
          <div className="bg-pink rounded overflow-hidden">
            <img
              src={Image}
              alt="About us featured"
              className="w-100"
              style={{ aspectRatio: '1.16' }}
            />
          </div>
        </Col>
      </Row>


<Row className="my-5 g-4 justify-content-center">
      {statsData.map((stat, index) => (
        <Col key={index} xs={12} sm={6} lg={3}>
          <StatCard
            {...stat}
            isActive={activeIndexStat === index}
            onClick={() => handleCardClick(index)} 
          />
        </Col>
      ))}
    </Row>

 {/* Carousel */}
       <CustomCarousel
        activeIndex={activeIndexTeam}
        setActiveIndex={setActiveIndexTeam}
        groupedData={groupedData}
        renderItem={(member) => <TeamMember {...member} />}
      />


      <Row className="my-5 g-4 justify-content-center">
        {servicesData.map((service, index) => (
          <Col key={index} xs={12} sm={6} lg={4}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}