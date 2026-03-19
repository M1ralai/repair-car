import React from 'react';
import { RatingStars } from '../RatingStars/RatingStars';
import './ReviewCard.css';

interface ReviewCardProps {
  initials: string;
  name: string;
  date: string;
  rating: number;
  comment?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ initials, name, date, rating, comment }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="review-avatar">{initials}</div>
        <div className="review-meta">
          <h4 className="review-name">{name}</h4>
          <span className="review-date">{new Date(date).toLocaleDateString('tr-TR')}</span>
        </div>
        <div className="review-rating-wrap">
          <RatingStars score={rating} />
        </div>
      </div>
      {comment && <p className="review-comment">{comment}</p>}
    </div>
  );
};
