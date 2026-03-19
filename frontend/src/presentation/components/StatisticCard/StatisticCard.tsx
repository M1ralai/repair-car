import React from 'react';
import './StatisticCard.css';

interface StatisticCardProps {
  label: string;
  value: string | number;
  trend?: number; // Pozitif artış, negatif düşüş
  icon?: React.ReactNode;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ label, value, trend, icon }) => {
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <div className="stat-card fade-in-up">
      <div className="stat-card-header">
        <span className="stat-label">{label}</span>
        {icon && <span className="stat-icon">{icon}</span>}
      </div>
      <div className="stat-card-body">
        <span className="stat-value">{value}</span>
        {trend !== undefined && (
          <span className={`stat-trend${isPositive ? ' is-up' : isNegative ? ' is-down' : ''}`}>
            {isPositive ? '↑' : isNegative ? '↓' : ''} {Math.abs(trend)}%
          </span>
        )}
      </div>
    </div>
  );
};
