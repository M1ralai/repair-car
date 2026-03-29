import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Truck, Wrench, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { Button, Stepper, ImageGallery, MapView, StickyBottomBar } from '../../presentation/components';
import { mockRequestDetails } from '../../infrastructure/mockData/mockRequestDetails';
import {
  getRequestRecord,
  advanceRequestStep,
  completeRequest,
} from '../../infrastructure/mockData/mockRequestDb';
import type { SessionResponseState } from '../../core/domain/types/auth';
import type { TalepDurumu } from '../../core/domain/types/request';
import './RequestDetailPage.css';

// Adım dizinini TalepDurumu'na çeviren map'ler
const SERVIS_STEP_DURUM: TalepDurumu[] = [
  'kabul_edildi',
  'yola_cikti',
  'ulasıldı',
  'tamamlandi',
];

const CEKICI_STEP_DURUM: TalepDurumu[] = [
  'kabul_edildi',
  'yola_cikti',
  'ulasıldı',
  'yuklendi',
  'tamamlandi',
];

// Adım etiketleri
const SERVIS_STEP_LABELS = [
  'Talep Alındı',
  'Yola Çıkıldı',
  'Araca Ulaşıldı',
  'İşlem Tamamlandı',
];

const CEKICI_STEP_LABELS = [
  'Talep Alındı',
  'Yola Çıkıldı',
  'Araca Ulaşıldı',
  'Araç Yüklendi',
  'Servise Bırakıldı',
];

// Buton metinleri (bir sonraki adıma ilerlemek için)
const SERVIS_BTN_LABELS = [
  'Yola Çık',
  'Araca Ulaştım',
  'İşlemi Tamamla',
  'İşi Bitir & Kapat',
];

const CEKICI_BTN_LABELS = [
  'Yola Çık',
  'Araca Ulaştım',
  'Aracı Yükledim',
  'Servise Bıraktım',
  'İşi Bitir & Kapat',
];

export const RequestDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [session, setSession] = useState<SessionResponseState | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const detail = id ? mockRequestDetails[id] : null;

  useEffect(() => {
    const saved = localStorage.getItem('session');
    if (!saved) { navigate('/usta/login'); return; }
    const parsed = JSON.parse(saved) as SessionResponseState;
    setSession(parsed);

    // localStorage'dan kayıtlı adımı yükle
    if (id) {
      const record = getRequestRecord(id);
      if (record) setStepIndex(record.stepIndex);
    }
  }, [navigate, id]);

  if (!detail || !session) {
    return <div className="loading-screen">Yükleniyor...</div>;
  }

  const isCekici = session.role === 'cekici';
  const stepLabels = isCekici ? CEKICI_STEP_LABELS : SERVIS_STEP_LABELS;
  const stepDurumMap = isCekici ? CEKICI_STEP_DURUM : SERVIS_STEP_DURUM;
  const btnLabels = isCekici ? CEKICI_BTN_LABELS : SERVIS_BTN_LABELS;
  const totalSteps = stepLabels.length;

  const isFinished = stepIndex >= totalSteps - 1;

  // Stepper için adım konfigürasyonu
  const activeStepConfig = stepLabels.map((label, idx) => ({
    label,
    isCompleted: idx < stepIndex,
    isCurrent: idx === stepIndex,
  }));

  const handleNextStatus = () => {
    if (!id) return;

    if (isFinished) {
      completeRequest(id, totalSteps);
      navigate('/usta/dashboard');
    } else {
      const nextIndex = stepIndex + 1;
      const nextDurum = stepDurumMap[nextIndex];
      advanceRequestStep(id, nextIndex, nextDurum);
      setStepIndex(nextIndex);
    }
  };

  const currentBtnLabel = isFinished
    ? btnLabels[btnLabels.length - 1]
    : btnLabels[stepIndex];

  // Tel ve WhatsApp linkleri
  const telLink = `tel:${detail.musteri.telefon.replace(/\s/g, '')}`;
  const waLink  = `https://wa.me/${detail.musteri.telefon.replace(/[^0-9]/g, '')}`;

  return (
    <div className="request-detail has-bottom-bar fade-in-up app-container">
      <header className="detail-header">
        <button onClick={() => navigate('/usta/dashboard')} className="back-btn" aria-label="Geri Dön">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="detail-title">Talep #{detail.id.replace('talep_', '')}</h1>
        <span className="detail-role-badge flex items-center">
          {isCekici ? <><Truck className="w-4 h-4 mr-1" /> Çekici</> : <><Wrench className="w-4 h-4 mr-1" /> Servis</>}
        </span>
      </header>

      <MapView
        koordinat={detail.koordinat}
        hedefKoordinat={detail.hedefKoordinat}
        height="180px"
      />

      {/* Müşteri & Araç Bilgileri */}
      <div className="detail-section">
        <div className="info-panel">
          <h2 className="panel-heading">Müşteri Bilgileri</h2>
          <div className="info-row">
            <span className="info-label">Ad Soyad</span>
            <span className="info-value">{detail.musteri.isim}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Telefon</span>
            <span className="info-value">
              <a href={telLink} className="info-link">{detail.musteri.telefon}</a>
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Araç</span>
            <span className="info-value">{detail.arac.marka} {detail.arac.model} ({detail.arac.yil})</span>
          </div>
          <div className="info-row">
            <span className="info-label">Plaka</span>
            <span className="info-value plaka-badge">{detail.arac.plaka}</span>
          </div>
          <div className="info-row col">
            <span className="info-label">Konum</span>
            <span className="info-value address-value">{detail.acikAdres}</span>
          </div>
          {isCekici && detail.hedefAdres && (
            <div className="info-row col">
              <span className="info-label">Hedef Servis</span>
              <span className="info-value address-value">{detail.hedefAdres}</span>
            </div>
          )}
        </div>

        {/* İletişim butonları — gerçek tel/wa linkleri */}
        <div className="action-buttons">
          <Button
            variant="ghost"
            fullWidth
            onClick={() => window.open(waLink, '_blank')}
          >
            <span className="flex items-center justify-center"><MessageCircle className="w-5 h-5 mr-2" /> WhatsApp'tan Yaz</span>
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => window.location.href = telLink}
          >
            <span className="flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Hemen Ara</span>
          </Button>
        </div>
      </div>

      {/* Arıza Bildirimi */}
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

      {/* İşlem Durumu — Stepper */}
      <div className="detail-section">
        <h2 className="panel-heading">İşlem Durumu</h2>
        <div className="timeline-container">
          <Stepper steps={activeStepConfig} />
        </div>
      </div>

      {/* Sabit alt bar */}
      <StickyBottomBar>
        {isFinished && (
          <p className="success-hint flex items-center justify-center"><CheckCircle2 className="w-5 h-5 mr-2 text-emerald-500" /> Tüm işlemler tamamlandı. İşi kapatabilirsiniz.</p>
        )}
        <Button
          size="lg"
          fullWidth
          variant="primary"
          onClick={handleNextStatus}
        >
          {currentBtnLabel}
        </Button>
      </StickyBottomBar>
    </div>
  );
};
