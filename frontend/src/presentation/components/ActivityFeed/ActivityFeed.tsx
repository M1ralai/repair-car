import React from 'react';
import type { ActivityFeedItem } from '../../../core/domain/types/dashboard';
import './ActivityFeed.css';

interface ActivityFeedProps {
  items: ActivityFeedItem[];
  onItemClick?: (item: ActivityFeedItem) => void;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ items, onItemClick }) => {
  return (
    <div className="activity-feed">
      {items.map((item, index) => (
        <div key={item.id} className="feed-item" onClick={() => onItemClick && onItemClick(item)}>
          <div className="feed-marker">
            <div className={`feed-dot feed-dot--${item.type}`}></div>
            {index !== items.length - 1 && <div className="feed-line"></div>}
          </div>
          <div className="feed-content">
            <p className="feed-desc">{item.description}</p>
            <span className="feed-time">{new Date(item.timestamp).toLocaleString('tr-TR')}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
