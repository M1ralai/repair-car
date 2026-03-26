import React from 'react';
import './SidebarNavigation.css';

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path: string;
}

interface SidebarNavigationProps {
  items: NavItem[];
  activePath: string;
  onNavigate: (path: string) => void;
  brandName?: string;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ 
  items, 
  activePath, 
  onNavigate,
  brandName = 'RepairCar Admin'
}) => {
  return (
    <nav className="sidebar-container">
      <div className="sidebar-brand">
        <h2>{brandName}</h2>
      </div>
      <div className="sidebar-menu">
        {items.map(item => (
          <button
            key={item.id}
            className={`sidebar-menu-item ${activePath === item.path ? 'active' : ''}`}
            onClick={() => onNavigate(item.path)}
          >
            {item.icon && <span className="sidebar-icon">{item.icon}</span>}
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
