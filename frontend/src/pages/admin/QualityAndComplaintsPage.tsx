import React, { useState } from 'react';
import { AdminLayout } from '../../presentation/layouts/AdminLayout/AdminLayout';
import { TabBar } from '../../presentation/components/TabBar/TabBar';
import { AccordionRow } from '../../presentation/components/AccordionRow/AccordionRow';
import { DataTable } from '../../presentation/components/DataTable/DataTable';
import type { Column } from '../../presentation/components/DataTable/DataTable';
import { StatusBadge } from '../../presentation/components/StatusBadge/StatusBadge';
import { Button } from '../../presentation/components/Button/Button';
import { DropdownMenu } from '../../presentation/components/DropdownMenu/DropdownMenu';
import { mockComplaints, mockQualityMetrics } from '../../infrastructure/mockData/mockQualityandComplaints';
import type { QualityMetricsReport } from '../../core/domain/types/qualityPlatform';
import './AdminPages.css';

export const QualityAndComplaintsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('complaints');

  const tabs = [
    { id: 'complaints', label: 'Şikayet Biletleri' },
    { id: 'quality', label: 'Kalite Panosu' }
  ];

  const qualityColumns: Column<QualityMetricsReport>[] = [
    { header: 'Servis Adı', accessor: 'serviceName' },
    { header: 'Puan', accessor: 'averageRating' },
    { header: 'Tamamlanan İş', accessor: 'totalCompletedJobs' },
    { header: 'Son Şikayetler', accessor: 'recentComplaintsCount' },
    { header: 'Durum', accessor: 'accountStatus', render: (r) => <StatusBadge status={r.accountStatus === 'warned' ? 'waiting' : 'approved'} label={r.accountStatus} /> },
    {
      header: 'Aksiyon',
      accessor: 'id',
      render: () => (
        <DropdownMenu items={[
          { id: 'warn', label: 'İhtar Gönder', onClick: () => alert('İhtar gönderildi') },
          { id: 'ban', label: 'Askıya Al', variant: 'danger', onClick: () => alert('Banlandı') }
        ]} />
      )
    }
  ];

  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Denetim, Kalite & Şikayetler</h1>
        <p>Sürücü şikayetlerini inceleyin ve platform kalitesini koruyun.</p>
      </div>

      <div className="tabs-container">
        <TabBar tabs={tabs} activeTabId={activeTab} onChange={setActiveTab} />
      </div>

      <div className="card-box" style={{ padding: '0', overflow: 'hidden' }}>
        {activeTab === 'complaints' && (
          <div>
            {mockComplaints.map(comp => (
              <AccordionRow
                key={comp.id}
                titleContent={
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong>{comp.serviceName} - {comp.reason}</strong>
                    <StatusBadge status={comp.status} label={comp.status} />
                  </div>
                }
                expandedContent={
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ margin: 0 }}><strong>Sürücü: </strong> {comp.driverName}</p>
                    <p style={{ margin: 0, padding: '12px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                      {comp.description}
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                      <Button variant="ghost" size="sm">Yoksay</Button>
                      <Button variant="secondary" size="sm" onClick={() => alert('Uyarı Gidiyor')}>Uyarı Gönder</Button>
                      <Button variant="primary" size="sm" onClick={() => alert('Şikayet Çözüldü Olarak İşaretlendi')}>Çözüldü İşaretle</Button>
                    </div>
                  </div>
                }
              />
            ))}
          </div>
        )}

        {activeTab === 'quality' && (
          <DataTable
            data={mockQualityMetrics}
            columns={qualityColumns}
          />
        )}
      </div>
    </AdminLayout>
  );
};
