import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function CategoryMenu() {
  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false }
  ];

  return (
    <ListGroup variant="flush" className='me-5'>
      {categories.map((category, index) => (
        <ListGroup.Item 
          key={index}
          className="d-flex justify-content-between align-items-center border-0 bg-transparent"
          action
        >
          {category.name}
          {category.hasSubmenu && (
            <i className="fa fa-chevron-right"></i>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}