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
  onKabulEt: (id: string) => void;
  onReddet: (id: string) => void;
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
  onReddet
}) => {
  return (
    <div className={`request-card fade-in-up${acil ? ' is-urgent' : ''}`}>
      <div className="request-card-header">
        <div className="request-card-title-group">
          <h3 className="request-card-title">{surucu}</h3>
          <span className="request-card-category">{arizaKategorisi}</span>
        </div>
        <Badge label={`${mesafe} ${mesafeBirim}`} variant="distance" acil={acil} />
      </div>
      
      <p className="request-card-desc">{aciklama}</p>
      
      <div className="request-card-actions">
        <Button variant="secondary" onClick={() => onReddet(id)}>Reddet</Button>
        <Button variant="primary" fullWidth onClick={() => onKabulEt(id)}>İşi Kabul Et</Button>
      </div>
    </div>
  );
};
