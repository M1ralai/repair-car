import React from 'react';
import './StickyBottomBar.css';

interface StickyBottomBarProps {
  children: React.ReactNode;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ children }) => {
  return (
    <div className="sticky-bottom-bar">
      <div className="sticky-bottom-bar-inner">
        {children}
      </div>
    </div>
  );
};
