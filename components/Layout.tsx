import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import Navbar from './Navbar';
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default Layout;
