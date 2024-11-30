import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../HomePage/ProductCard";
import { SectionHeader } from "./SectionHeader";

export function WishlistPage() {
    const [flashSaleProducts, setFlashSaleProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
  
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
    const [currentIndex, setCurrentIndex] = useState(4);
  
    const displayedProducts = flashSaleProducts.slice(currentIndex, currentIndex + 4);
    
  return (
    <Container className="py-5">
      <section className="mb-5">
        <SectionHeader 
          title="Wishlist (4)" 
          buttonText="Move All To Bag" 
          showIndicator={false}
        />
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
      </section>

      <section>
        <SectionHeader 
          title="Just For You" 
          buttonText="See All" 
          showIndicator={true}
        />
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
      </section>
    </Container>
  );
}