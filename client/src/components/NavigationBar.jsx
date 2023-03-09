import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar">
        {/* <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div> */}
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/product-gallery">Product Gallery</Link></li>
        <li><Link to="/view-cart">View Cart</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;

