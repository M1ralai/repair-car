import React from 'react';
import './RatingStars.css';

interface RatingStarsProps {
  score: number; // 0-5
  max?: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ score, max = 5 }) => {
  return (
    <div className="rating-stars" aria-label={`${max} üzerinden ${score} yıldız`} title={`${score}/${max}`}>
      {Array.from({ length: max }).map((_, i) => {
        const fillPercent = Math.max(0, Math.min(100, (score - i) * 100));
        return (
          <div key={i} className="star-wrapper">
            {/* Boş yıldız arka planı */}
            <svg viewBox="0 0 24 24" className="star-svg star-empty">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {/* Dolu yıldız üst katmanı */}
            <div className="star-fill" style={{ width: `${fillPercent}%` }}>
              <svg viewBox="0 0 24 24" className="star-svg star-filled">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
