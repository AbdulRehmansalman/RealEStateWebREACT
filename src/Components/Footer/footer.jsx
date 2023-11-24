import React from 'react';
import './footer.css';
import logo from '../../assets/logo2.png';
const footer = () => {
  return (
    <div className="foo-wraper">
      <div className="footer-container">
        <div className="left-footer">
          <img src={logo} alt="logo" />
          <p>Our Vision is to make all people </p>
          <p> the best place for live for them </p>
        </div>
        <div className="right-footer">
          <h2>Information</h2>
          <p>145N Samnabad, Pakistan</p>
          <div className="our-services">
            <h3>Property</h3>
            <h3>Services</h3>
            <h3>Product</h3>
            <h3>About Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
