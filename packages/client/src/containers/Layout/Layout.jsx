import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
