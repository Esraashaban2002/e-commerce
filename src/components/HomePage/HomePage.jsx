import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryMenu from './CategoryMenu';
import HeroSection from './HeroSection';
import CustomCarousel from '../CustomCarousel';
import { servicesData, teamData } from '../../Data/AboutData';
import FlashSales from './FlashSales';
import Categories from './Categories';
import BestSelling from './BestSelling';
import MusicEnhancer from './MusicEnhancer';
import Explore from './Explore';
import ServiceCard from '../About/ServiceCard'
import NewArrival from './NewArrival';

export default function HomePage() {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

const groupedData = [];
for (let i = 0; i < teamData.length; i+=2 ) {
groupedData.push(teamData.slice(i, i + 1));
}

// State to track the active carousel slide
const [activeIndexTeam, setActiveIndexTeam] = useState(0);

  // Fetch products from a public API or mock data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Example API
        const data = await response.json();
        
        // Transform API data to match the expected product card format
        const transformedData = data.slice(0, 20).map((product) => ({
          image: product.image,
          discount: Math.floor(Math.random() * 50) + 10, // Random discount
          title: product.title,
          currentPrice: product.price.toFixed(2),
          originalPrice: (product.price * 1.2).toFixed(2), // Mock original price
          rating: product.rating.rate,
          reviews: product.rating.count
        }));
        setFlashSaleProducts(transformedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex-grow-1 py-5 my-5">
      <Container>
        
            {/* <HeroSection /> */}
        <Row>
          <Col lg={3} sm={4}>
            <CategoryMenu />
          </Col>
          <Col lg={9} sm={8} className='bg-black pb-5' >
          {/* Carousel */}

       <CustomCarousel
        activeIndex={activeIndexTeam}
        setActiveIndex={setActiveIndexTeam}
        groupedData={groupedData}
        renderItem={(member) => <HeroSection {...member} />}
      />
          </Col>
        </Row>

        {/* Flash Sales */}
        <FlashSales flashSaleProducts={flashSaleProducts}  loading={loading} />
<hr/>
          <Categories />
          <hr/>
        <BestSelling bestSellingProducts={flashSaleProducts}  loading={loading} />

        <MusicEnhancer  />
        <Explore flashSaleProducts={flashSaleProducts}  loading={loading} />

        <NewArrival/>
        <Row className="my-5 g-4 justify-content-center">
        {servicesData.map((service, index) => (
          <Col key={index} xs={12} sm={6} lg={4}>
            <ServiceCard {...service} />
          </Col>
        ))}
      </Row>


      </Container>
    </main>
  );
}
