import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Stepper, ImageGallery, MapView, StickyBottomBar } from '../../presentation/components';
import { mockRequestDetails } from '../../infrastructure/mockData/mockRequestDetails';
import type { SessionResponseState } from '../../core/domain/types/auth';
import './RequestDetailPage.css';

export const RequestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionResponseState | null>(null);
  
  // Real app: fetch with ID. Mock app: direct access
  const detail = id ? mockRequestDetails[id] : null;

  useEffect(() => {
    const saved = localStorage.getItem('session');
    if (!saved) {
      navigate('/login');
      return;
    }
    setSession(JSON.parse(saved));
  }, [navigate]);

  if (!detail || !session) return <div className="p-4">Yükleniyor...</div>;

  // Servis veya Çekici rolüne göre akış (3.0 farkı)
  const isCekici = session.role === 'cekici';
  
  const servisSteps = [
    { label: 'Talep Alındı', isCompleted: true, isCurrent: false },
    { label: 'Yola Çıkıldı', isCompleted: false, isCurrent: true },
    { label: 'Araca Ulaşıldı', isCompleted: false, isCurrent: false },
    { label: 'İşlem Tamamlandı', isCompleted: false, isCurrent: false }
  ];

  const cekiciSteps = [
    { label: 'Talep Alındı', isCompleted: true, isCurrent: false },
    { label: 'Yola Çıkıldı', isCompleted: false, isCurrent: true },
    { label: 'Araca Ulaşıldı', isCompleted: false, isCurrent: false },
    { label: 'Araç Yüklendi', isCompleted: false, isCurrent: false },
    { label: 'Servise Bırakıldı', isCompleted: false, isCurrent: false }
  ];

  const currentSteps = isCekici ? cekiciSteps : servisSteps;
  const [stepIndex, setStepIndex] = useState(1);

  const activeStepConfig = currentSteps.map((s, idx) => ({
    ...s,
    isCompleted: idx < stepIndex,
    isCurrent: idx === stepIndex
  }));

  const isFinished = stepIndex >= currentSteps.length - 1;
  const nextStepLabel = isFinished 
    ? 'İşi Bitir & Kapat' 
    : currentSteps[stepIndex + 1]?.label || 'İleri';

  const handleNextStatus = () => {
    if (isFinished) {
      alert('İş başarıyla tamamlandı! Ana ekrana yönlendiriliyorsunuz.');
      navigate('/dashboard');
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <div className="request-detail has-bottom-bar fade-in-up app-container">
      <header className="detail-header">
        <button onClick={() => navigate('/dashboard')} className="back-btn" aria-label="Geri Dön">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="detail-title">Talep #{detail.id.replace('talep_', '')}</h1>
      </header>

      <MapView 
        koordinat={detail.koordinat} 
        hedefKoordinat={detail.hedefKoordinat} 
        height="180px" 
      />

      <div className="detail-section">
        <div className="info-panel">
          <h2 className="panel-heading">Müşteri Bilgileri</h2>
          <div className="info-row">
            <span className="info-label">Ad Soyad</span>
            <span className="info-value">{detail.musteri.isim}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Araç</span>
            <span className="info-value">{detail.arac.marka} {detail.arac.model} ({detail.arac.yil})</span>
          </div>
          <div className="info-row">
            <span className="info-label">Plaka</span>
            <span className="info-value plaka-badge">{detail.arac.plaka}</span>
          </div>
          {isCekici && detail.hedefAdres && (
            <div className="info-row col">
              <span className="info-label">Hedef Servis Adresi</span>
              <span className="info-value address-value">{detail.hedefAdres}</span>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <Button variant="ghost" fullWidth>
            WhatsApp'tan Yaz
          </Button>
          <Button variant="secondary" fullWidth>
            Hemen Ara
          </Button>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="panel-heading">Arıza Bildirimi</h2>
        <p className="ariza-notu">{detail.arizaNotu}</p>
        
        {detail.medyaUrls.length > 0 && (
          <div className="media-section">
            <h3 className="media-heading">Yüklenen Görseller</h3>
            <ImageGallery images={detail.medyaUrls} />
          </div>
        )}
      </div>

      <div className="detail-section">
        <h2 className="panel-heading">İşlem Durumu</h2>
        <div className="timeline-container">
          <Stepper steps={activeStepConfig} />
        </div>
      </div>

      <StickyBottomBar>
        {isFinished && <p className="success-hint">Tüm işlemler tamamlandı. İşi kapatabilirsiniz.</p>}
        <Button 
           size="lg" 
           fullWidth 
           variant={isFinished ? 'primary' : 'primary'} 
           onClick={handleNextStatus}
        >
          {nextStepLabel}
        </Button>
      </StickyBottomBar>
    </div>
  );
};
