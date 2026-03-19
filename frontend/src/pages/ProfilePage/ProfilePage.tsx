import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  TabBar, 
  StatisticCard, 
  ReviewCard, 
  CompactFormRow,
  Button
} from '../../presentation/components';
import { mockServisProfil, mockCekiciProfil } from '../../infrastructure/mockData/mockProfile';
import type { SessionResponseState } from '../../core/domain/types/auth';
import type { ProfilVerisi } from '../../core/domain/types/profile';
import './ProfilePage.css';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('bilgilerim');
  const [session, setSession] = useState<SessionResponseState | null>(null);
  const [profilVerisi, setProfilVerisi] = useState<ProfilVerisi | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('session');
    if (!saved) {
      navigate('/login');
      return;
    }
    const parsed = JSON.parse(saved) as SessionResponseState;
    setSession(parsed);
    setProfilVerisi(parsed.role === 'cekici' ? mockCekiciProfil : mockServisProfil);
  }, [navigate]);

  if (!session || !profilVerisi) return null;

  const handleSaveContact = async (_val: string) => {
    return new Promise<void>(resolve => setTimeout(resolve, 800));
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    navigate('/login');
  };

  return (
    <div className="profile-page fade-in-up">
      <div className="profile-header">
        <img 
          src={profilVerisi.organizasyon.gorselUrl} 
          alt="Organization Logo" 
          className="profile-logo"
        />
        <h2 className="profile-title">{profilVerisi.organizasyon.isletmeAdi}</h2>
        <p className="profile-subtitle">Sistem Onaylı {session.role === 'cekici' ? 'Çekici Firması' : 'Oto Servisi'}</p>
      </div>

      <div className="profile-tabs-wrapper">
        <TabBar 
          tabs={[
            {id: 'bilgilerim', label: 'Bilgilerim'},
            {id: 'performans', label: 'Performans'},
            {id: 'yorumlar', label: 'Değerlendirmeler'}
          ]}
          activeTabId={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <div className="profile-content">
        {activeTab === 'bilgilerim' && (
          <div className="profile-section">
            <h3 className="section-title">İletişim & Adres</h3>
            <div className="compact-list">
               <CompactFormRow 
                 label="Telefon Numarası" 
                 value={profilVerisi.organizasyon.telefon} 
                 onSave={handleSaveContact} 
               />
               <CompactFormRow 
                 label="Açık Adres" 
                 value={profilVerisi.organizasyon.adres} 
                 onSave={handleSaveContact} 
               />
               <CompactFormRow 
                 label="Mesai Saatleri" 
                 value={`${profilVerisi.organizasyon.servisSaatleri.baslangic} - ${profilVerisi.organizasyon.servisSaatleri.bitis}`} 
                 onSave={handleSaveContact} 
               />
            </div>

            <div className="profile-actions">
              <Button variant="destructive" fullWidth onClick={handleLogout}>
                Oturumu Kapat / Çıkış Yap
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'performans' && (
          <div className="profile-section">
            <h3 className="section-title">Aylık İstatistikler</h3>
            <div className="metrics-grid">
              <StatisticCard 
                label="Tamamlanan İş" 
                value={profilVerisi.performans.toplamTamamlananIs} 
                trend={profilVerisi.performans.oncekiAyaDegisim} 
              />
              <StatisticCard 
                label="Memnuniyet Skoru" 
                value={profilVerisi.performans.ortalamaMemnuniyetPuani.toFixed(1)} 
                icon={<span>⭐</span>}
              />
              <StatisticCard 
                label="Reddetme Oranı" 
                value={`%${profilVerisi.performans.reddedilmisOrani * 100}`} 
                trend={-(Math.random() * 2)} // Dummy trend
              />
            </div>
          </div>
        )}

        {activeTab === 'yorumlar' && (
          <div className="profile-section">
            <h3 className="section-title">Son Müşteri Yorumları</h3>
            <div className="reviews-list">
              {profilVerisi.yorumlar.length > 0 ? (
                profilVerisi.yorumlar.map(y => (
                  <ReviewCard 
                    key={y.id}
                    initials={y.musteriAdi.substring(0,2).toUpperCase()}
                    name={y.musteriAdi}
                    date={y.tamamlanmaTarihi}
                    rating={y.yildizPuani}
                    comment={y.yorumMetni}
                  />
                ))
              ) : (
                <p className="no-data">Henüz değerlendirme almadınız.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
