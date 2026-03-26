import React from 'react';
import { SidebarNavigation } from '../../components/SidebarNavigation/SidebarNavigation';
import type { NavItem } from '../../components/SidebarNavigation/SidebarNavigation';

import './AdminLayout.css';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const path = window.location.pathname;

  const navItems: NavItem[] = [
    { id: 'dash', label: 'Genel Bakış', path: '/admin/dashboard' },
    { id: 'app', label: 'Servis Başvuruları', path: '/admin/applications' },
    { id: 'srv', label: 'Servis Yönetimi', path: '/admin/services' },
    { id: 'req', label: 'Talepler Yönetimi', path: '/admin/requests' },
    { id: 'qual', label: 'Denetim & Şikayetler', path: '/admin/quality' },
  ];

  const handleNavigate = (p: string) => {
    window.location.href = p; // Native navigation since we don't have react-router-dom configured yet
  };

  return (
    <div className="admin-layout">
      <SidebarNavigation
        items={navItems}
        activePath={path}
        onNavigate={handleNavigate}
      />
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-search"></div>
          <div className="topbar-profile">
            <span className="profile-name">Sistem Yöneticisi</span>
            <div className="profile-avatar">S</div>
          </div>
        </header>
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
};
