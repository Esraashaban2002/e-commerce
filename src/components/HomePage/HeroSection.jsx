import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import iPhone from '../../assets/images/1200px-Apple_gray_logo 1.png'
import HeroImge from '../../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png'
function HeroSection() {
 
  return (
    <div className="card bg-black text-white">
      <div className="row g-0">
        <div className="col-md-5">
          <div className="card-body d-flex flex-column justify-content-center h-100">
            <div className="d-flex align-items-center mb-3">
             <img
                loading="lazy"
                src={iPhone}
                className="img-fluid me-3"
                style={{ width: "40px" }}
                alt="Apple logo"
              />
              <span>Featured Products</span>
            </div>
            <h1 className="display-5 fw-bold mb-4">Discover Our Top Deals</h1>
            <div className="d-flex align-items-center">
              <div className="position-relative">
                <span className="me-2">Shop Now</span>
                <div
                  className="border-bottom border-white"
                  style={{ width: "81px" }}
                ></div>
              </div>
             <i className="fas fa-arrow-right" />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="position-relative h-100">
            <img
              loading="lazy"
              src={HeroImge}
              className="img-fluid h-100 w-100 object-fit-cover"
              alt="iPhone 14 promotional image"
            />
            <div className="position-absolute bottom-0 w-100">
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default HeroSection