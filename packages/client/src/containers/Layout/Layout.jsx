import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';

export const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};