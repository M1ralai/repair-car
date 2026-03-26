import React from 'react';
import './StatusBadge.css';

export type StatusType = 'pending' | 'approved' | 'rejected' | 'revision_requested' | 'waiting' | 'accepted' | 'on_the_way' | 'completed' | 'cancelled' | 'pending_review' | 'resolved' | 'ignored';

interface StatusBadgeProps {
  status: StatusType | string;
  label: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {label}
    </span>
  );
};
