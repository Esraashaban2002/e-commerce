import React, { useState } from 'react';
import './css/ProductGallery.css';
import image1 from '../../assets/images/image 57.png'
import image2 from '../../assets/images/image 58.png'
import image3 from '../../assets/images/image 59.png'
import image4 from '../../assets/images/image 61.png'
import image5 from '../../assets/images/image 63.png'

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    { id: 0, src: image5 , alt: "Main product view" },
    { id: 1, src: image1 , alt: "Product view 1" },
    { id: 2, src: image3 , alt: "Product view 2" },
    { id: 3, src: image4 , alt: "Product view 3" },
    { id: 4, src: image2 , alt: "Product view 4" }
  ];

  return (
    <div className="product-gallery">
      <div className="thumbnail-list">
        {images.slice(1).map((image) => (
          <button
            key={image.id}
            className={`thumbnail-btn ${selectedImage === image.id ? 'active' : ''}`}
            onClick={() => setSelectedImage(image.id)}
            aria-label={`View ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
      
      <div className="main-image">
        <img 
          src={images[selectedImage].src} 
          alt={images[selectedImage].alt}
        />
      </div>
    </div>
  );
}