import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Manage My Account",
    subItems: [
      { label: "My Profile", active: true },
      { label: "Address Book", active: false },
      { label: "My Payment Options", active: false }
    ]
  },
  {
    title: "My Orders",
    subItems: [
      { label: "My Returns", active: false },
      { label: "My Cancellations", active: false }
    ]
  },
  {
    title: "My WishList",
    subItems: [
      {Link:'/wishlist' , label:'Wishlist '}
    ]
  }
];

export function SidebarMenu() {
  return (
    <Nav className="flex-column">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-3">
          <Nav.Item>
            <Nav.Link className="text-dark fw-medium">{item.title}</Nav.Link>
          </Nav.Item>
          {item.subItems.length > 0 && (
            <Nav className="flex-column ms-3">
              {item.subItems.map((subItem, subIndex) => (
                <Nav.Item key={subIndex}>
                  <Link to={subItem.Link}
                    className={` text-decoration-none ${subItem.active ? 'text-danger' : 'text-muted'}`}
                  >
                    {subItem.label}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          )}
        </div>
      ))}
    </Nav>
  );
}