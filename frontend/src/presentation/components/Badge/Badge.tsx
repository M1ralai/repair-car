import React from 'react';
import './Badge.css';

interface BadgeProps {
  label: string;
  variant?: 'distance' | 'time' | 'urgent' | 'status';
  acil?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'distance', acil = false }) => {
  return (
    <span className={`badge badge--${variant}${acil ? ' badge--acil' : ''}`}>
      {acil && <span className="badge-pulse" aria-hidden="true" />}
      {variant === 'distance' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )}
      {variant === 'time' && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )}
      {label}
    </span>
  );
};
