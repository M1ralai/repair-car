import React from 'react';
import './MapView.css';
import type { Koordinat } from '../../../core/domain/types/request';

interface MapViewProps {
  koordinat: Koordinat;
  hedefKoordinat?: Koordinat;
  height?: string;
}

export const MapView: React.FC<MapViewProps> = ({ koordinat, hedefKoordinat, height = '200px' }) => {
  // Gerçek harita (Google Maps, Mapbox vb) olmadığı için MVP'de dummy/statik bir iframe ya da placeholder kullanılır.
  // Burada görsel bir placeholder oluşturuyoruz.
  const hasRoute = !!hedefKoordinat;

  return (
    <div className="map-view-container" style={{ height }}>
      <div className="map-placeholder">
        <svg className="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span className="map-text">
          {hasRoute ? 'A noktasından B noktasına Rota Haritası' : 'Konum Haritası (Statik Görüntü)'}
          <br/>
          <small>{koordinat.lat}, {koordinat.lng}</small>
        </span>

        {/* Dummy Pıns for Visual */}
        <div className="dummy-pin a-pin">A</div>
        {hasRoute && <div className="dummy-pin b-pin">B</div>}
      </div>
    </div>
  );
};
