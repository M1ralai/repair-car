import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToggleSwitch, RequestCard, TabBar } from '../../presentation/components';
import { mockRequests } from '../../infrastructure/mockData/mockRequests';
import type { SessionResponseState } from '../../core/domain/types/auth';
import type { TalepListesiItem } from '../../core/domain/types/request';
import './DashboardPage.css';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('yeni');
  const [requests, setRequests] = useState<TalepListesiItem[]>([]);
  const [session, setSession] = useState<SessionResponseState | null>(null);

  useEffect(() => {
    // Session check
    const saved = localStorage.getItem('session');
    if (!saved) {
      navigate('/login');
      return;
    }
    const parsed = JSON.parse(saved) as SessionResponseState;
    setSession(parsed);

    // Rol'e göre filtreleme (Mock)
    const filtered = mockRequests.filter(req => req.tip === parsed.role && req.durum === 'beklemede');
    setRequests(filtered);
  }, [navigate]);

  if (!session) return null;

  const handleKabul = (id: string) => {
    navigate(`/talep-detay/${id}`);
  };

  const handleReddet = (id: string) => {
    setRequests(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="dashboard-page fade-in-up">
      <div className="dashboard-top">
        <div className="user-greeting">
          <h2>Merhaba, {session.serviceName}</h2>
          <p>Yeni iş almaya hazır mısınız?</p>
        </div>
        <ToggleSwitch checked={isOnline} onChange={setIsOnline} />
      </div>

      <TabBar 
        tabs={[
          {id: 'yeni', label: 'Yeni Talepler'},
          {id: 'aktif', label: 'Aktif İşler'},
          {id: 'gecmis', label: 'Tamamlananlar'}
        ]}
        activeTabId={activeTab}
        onChange={setActiveTab}
      />

      {isOnline ? (
        <div className="request-list">
          {requests.length > 0 ? (
            requests.map(req => (
              <RequestCard 
                key={req.id}
                id={req.id}
                surucu={req.surucu}
                arizaKategorisi={req.arizaKategorisi}
                mesafe={req.mesafe}
                mesafeBirim={req.mesafeBirim}
                aciklama={req.aciklama}
                acil={req.acil}
                onKabulEt={handleKabul}
                onReddet={handleReddet}
              />
            ))
          ) : (
            <div className="empty-state">
              <span className="empty-state-icon">📭</span>
              <h3>Şu an için yeni talep bulunmuyor</h3>
              <p>Bulunduğunuz bölgeden sinyal geldiğinde anında haber vereceğiz.</p>
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
