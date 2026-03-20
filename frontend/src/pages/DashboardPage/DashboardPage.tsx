import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleSwitch, RequestCard, TabBar } from '../../presentation/components';
import { mockRequests } from '../../infrastructure/mockData/mockRequests';
import {
  getAllOverrides,
  acceptRequest,
  rejectRequest,
} from '../../infrastructure/mockData/mockRequestDb';
import type { SessionResponseState } from '../../core/domain/types/auth';
import type { TalepListesiItem, TalepDurumu } from '../../core/domain/types/request';
import './DashboardPage.css';

// Sekme → hangi durum(lar) gösterilsin
const TAB_DURUM_MAP: Record<string, TalepDurumu[]> = {
  yeni:   ['beklemede'],
  aktif:  ['kabul_edildi', 'yola_cikti', 'ulasıldı', 'yuklendi'],
  gecmis: ['tamamlandi', 'reddedildi'],
};

const DURUM_LABEL: Partial<Record<TalepDurumu, string>> = {
  tamamlandi:   '✅ Tamamlandı',
  reddedildi:   '❌ Reddedildi',
  kabul_edildi: '🟡 Kabul Edildi',
  yola_cikti:   '🚗 Yola Çıkıldı',
  ulasıldı:     '📍 Araçta',
  yuklendi:     '⛓️ Yüklendi',
};

const EMPTY: Record<string, { icon: string; title: string; sub: string }> = {
  yeni:   { icon: '📭', title: 'Şu an için yeni talep bulunmuyor', sub: 'Bölgenden sinyal geldiğinde anında haber vereceğiz.' },
  aktif:  { icon: '🔧', title: 'Şu an aktif işin yok',            sub: 'Yeni talepler sekmesinden iş kabul edebilirsin.' },
  gecmis: { icon: '📋', title: 'Henüz tamamlanan iş yok',         sub: 'Kabul ettiğin işler bittikten sonra burada görünecek.' },
};

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('yeni');
  const [allRequests, setAllRequests] = useState<TalepListesiItem[]>([]);
  const [session, setSession] = useState<SessionResponseState | null>(null);

  // Mock data ile localStorage DB'yi birleştirerek yükle
  const loadRequests = (role: 'servis' | 'cekici') => {
    const overrides = getAllOverrides();
    const merged = mockRequests
      .filter(req => req.tip === role)
      .map(req => {
        const override = overrides[req.id];
        return override ? { ...req, durum: override.durum } : req;
      });
    setAllRequests(merged);
  };

  useEffect(() => {
    const saved = localStorage.getItem('session');
    if (!saved) { navigate('/login'); return; }
    const parsed = JSON.parse(saved) as SessionResponseState;
    setSession(parsed);
    loadRequests(parsed.role);
  }, [navigate]);

  // Dashboard'a her odaklanışta (başka sayfadan dönünce) listeyi yenile
  useEffect(() => {
    const onFocus = () => {
      const saved = localStorage.getItem('session');
      if (!saved) return;
      const parsed = JSON.parse(saved) as SessionResponseState;
      loadRequests(parsed.role);
    };
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, []);

  if (!session) return null;

  // Sekme filtresi
  const visibleRequests = allRequests.filter(req =>
    TAB_DURUM_MAP[activeTab]?.includes(req.durum)
  );

  // Sekme sayaçları
  const counts = {
    yeni:   allRequests.filter(r => TAB_DURUM_MAP.yeni.includes(r.durum)).length,
    aktif:  allRequests.filter(r => TAB_DURUM_MAP.aktif.includes(r.durum)).length,
    gecmis: allRequests.filter(r => TAB_DURUM_MAP.gecmis.includes(r.durum)).length,
  };

  // Yeni sekmesi: kabul et → DB'ye yaz → detaya git
  const handleKabul = (id: string) => {
    acceptRequest(id);
    navigate(`/talep-detay/${id}`);
  };

  // Yeni sekmesi: reddet → DB'ye yaz → listeden çıkar
  const handleReddet = (id: string) => {
    rejectRequest(id);
    setAllRequests(prev =>
      prev.map(r => r.id === id ? { ...r, durum: 'reddedildi' } : r)
    );
  };

  // Aktif / Geçmiş kart tıklama → detay sayfasına git
  const handleCardClick = (id: string) => {
    navigate(`/talep-detay/${id}`);
  };

  return (
    <div className="dashboard-page fade-in-up">
      <div className="dashboard-top">
        <div className="user-greeting">
          <h2>Merhaba, {session.serviceName}</h2>
          <p>{session.role === 'cekici' ? 'Çekici Paneli' : 'Servis Paneli'}</p>
        </div>
        <ToggleSwitch checked={isOnline} onChange={setIsOnline} />
      </div>

      <TabBar
        tabs={[
          { id: 'yeni',   label: counts.yeni   > 0 ? `Yeni (${counts.yeni})`     : 'Yeni Talepler' },
          { id: 'aktif',  label: counts.aktif  > 0 ? `Aktif (${counts.aktif})`   : 'Aktif İşler' },
          { id: 'gecmis', label: counts.gecmis > 0 ? `Geçmiş (${counts.gecmis})` : 'Tamamlananlar' },
        ]}
        activeTabId={activeTab}
        onChange={setActiveTab}
      />

      {isOnline ? (
        <div className="request-list">
          {visibleRequests.length > 0 ? (
            visibleRequests.map(req => (
              <RequestCard
                key={req.id}
                id={req.id}
                surucu={req.surucu}
                arizaKategorisi={req.arizaKategorisi}
                mesafe={req.mesafe}
                mesafeBirim={req.mesafeBirim}
                aciklama={req.aciklama}
                acil={req.acil}
                // Yeni sekmesi: butonlar aktif
                onKabulEt={activeTab === 'yeni' ? handleKabul : undefined}
                onReddet={activeTab === 'yeni' ? handleReddet : undefined}
                // Aktif / Geçmiş: etiket + tıklanabilir kart
                durumLabel={activeTab !== 'yeni' ? DURUM_LABEL[req.durum] : undefined}
                onCardClick={activeTab !== 'yeni' ? handleCardClick : undefined}
              />
            ))
          ) : (
            <div className="empty-state">
              <span className="empty-state-icon">{EMPTY[activeTab].icon}</span>
              <h3>{EMPTY[activeTab].title}</h3>
              <p>{EMPTY[activeTab].sub}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="empty-state is-offline">
          <span className="empty-state-icon">😴</span>
          <h3>Çevrimdışı Mod</h3>
          <p>Şu anda kapalı konumdasınız ve yeni iş talebi almayacaksınız.</p>
        </div>
      )}
    </div>
  );
};
