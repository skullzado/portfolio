import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import './Layout.css';
import React from 'react';

export const Layout = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
