import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ProductDetails.css';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import BreadcrumbNav from '../BreadcrummbNav';
import ProductCard from '../HomePage/ProductCard';
import { Col, Row } from 'react-bootstrap';

function ProductDetailsPage() {
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
  const [currentIndex, setCurrentIndex] = useState(12);

  const displayedProducts = flashSaleProducts.slice(currentIndex, currentIndex + 4);
  return (
    <main className="product-details-page">
      <div className="container py-5">
        <BreadcrumbNav
          items={[
            { label: 'Account', path: '/account' },
            { label: 'Gaming', path: '/gaming' },
            { label: 'Havic HV G-92 Gamepad', path: '/gaming/havic-gamepad' }
          ]} 
        />
        <div className="row mt-4">
          <div className="col-md-6">
            <ProductGallery />
          </div>
          <div className="col-md-6">
            <ProductInfo />
          </div>
        </div>
        <Row>
        <section className="my-5">
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
      </div>
    </main>
  );
}
export default ProductDetailsPage