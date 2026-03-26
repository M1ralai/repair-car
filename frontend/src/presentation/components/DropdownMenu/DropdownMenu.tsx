import React, { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';

interface DropdownItem {
  id: string;
  label: string;
  variant?: 'default' | 'danger';
  onClick: () => void;
}

interface DropdownMenuProps {
  items: DropdownItem[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="dropdown-menu-container" ref={menuRef}>
      <button className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)} aria-label="Seçenekler">
        &#8942;
      </button>
      {isOpen && (
        <div className="dropdown-panel">
          {items.map((item) => (
            <button
              key={item.id}
              className={`dropdown-item ${item.variant === 'danger' ? 'danger' : ''}`}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
