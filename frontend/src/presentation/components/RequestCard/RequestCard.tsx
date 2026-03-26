import React from 'react';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import './RequestCard.css';

interface RequestCardProps {
  id: string;
  surucu: string;
  arizaKategorisi: string;
  mesafe: number;
  mesafeBirim?: string;
  aciklama: string;
  acil?: boolean;
  // Sadece "Yeni Talepler" sekmesinde iletilir
  onKabulEt?: (id: string) => void;
  onReddet?: (id: string) => void;
  // Aktif / Geçmiş sekmelerde durum etiketi
  durumLabel?: string;
  // Aktif / Geçmiş sekmesinde kart tıklanınca detay sayfasına gitmek için
  onCardClick?: (id: string) => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({
  id,
  surucu,
  arizaKategorisi,
  mesafe,
  mesafeBirim = 'km',
  aciklama,
  acil,
  onKabulEt,
  onReddet,
  durumLabel,
  onCardClick,
}) => {
  const showActions = Boolean(onKabulEt || onReddet);
  const isClickable = Boolean(onCardClick);

  return (
    <div
      className={`request-card fade-in-up${acil ? ' is-urgent' : ''}${isClickable ? ' is-clickable' : ''}`}
      onClick={isClickable ? () => onCardClick!(id) : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={isClickable ? (e) => e.key === 'Enter' && onCardClick!(id) : undefined}
    >
      <div className="request-card-header">
        <div className="request-card-title-group">
          <h3 className="request-card-title">{surucu}</h3>
          <span className="request-card-category">{arizaKategorisi}</span>
        </div>
        <div className="request-card-badges">
          <Badge label={`${mesafe} ${mesafeBirim}`} variant="distance" acil={acil} />
          {durumLabel && (
            <span className="request-card-status-badge">{durumLabel}</span>
          )}
          {isClickable && (
            <span className="request-card-chevron">›</span>
          )}
        </div>
      </div>

      <p className="request-card-desc">{aciklama}</p>

      {showActions && (
        <div
          className="request-card-actions"
          onClick={(e) => e.stopPropagation()} // kart click'ini durdur
        >
          {onReddet && (
            <Button variant="secondary" onClick={() => onReddet(id)}>Reddet</Button>
          )}
          {onKabulEt && (
            <Button variant="primary" fullWidth onClick={() => onKabulEt(id)}>İşi Kabul Et</Button>
          )}
        </div>
      )}
    </div>
  );
};
