import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './MainLayout.css';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="main-layout app-container">
      <header className="main-header">
        <Link to="/dashboard" className="header-logo">RepairCar</Link>
        <nav className="header-nav">
          <Link to="/dashboard" className={`nav-link${location.pathname === '/dashboard' ? ' active' : ''}`}>Ana Ekran</Link>
          <Link to="/profil" className={`nav-link${location.pathname === '/profil' ? ' active' : ''}`}>Profil</Link>
        </nav>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
