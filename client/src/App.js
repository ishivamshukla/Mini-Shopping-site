import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ProductGalleryPage from './pages/ProductGalleryPage';
import ViewCartPage from './pages/ViewCartPage';
import ThankYouPage from './pages/ThankYouPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/product-gallery" element={<ProductGalleryPage />} />
        <Route path="/view-cart" element={<ViewCartPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="//register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

