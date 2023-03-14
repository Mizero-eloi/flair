import React from 'react';
import Navbar from './Header';
import Footer from './Footer';
import Container from './Container';
const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
};

export default Layout;
