import React from 'react';
import './Footer.css';
import QRcode from'../../../assets/images/Qrcode 1.png'
import GooglePlay from '../../../assets/images/Google play.png'
import AppStor from '../../../assets/images/download-appstore.png'
const AppDownload = () => {
  return (
    <section className="app-download">
      <h3 className="download-title">Download App</h3>
      <p className="download-promo">Save $3 with App New User Only</p>
      <div className="download-options">
        <img
          loading="lazy"
          src={QRcode}
          alt="QR Code to download app"
          className="qr-code"
        />
        <div className="store-buttons">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Download on App Store"
          >
            <img
              loading="lazy"
              src={GooglePlay}
              alt="Download on App Store"
              className="store-button"
            />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <img
              loading="lazy"
              src={AppStor}
               alt="Get it on Google Play"
              className="store-button"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;