import React, { useState } from 'react';
import { AdminLayout } from '../../presentation/layouts/AdminLayout/AdminLayout';
import { DataTable } from '../../presentation/components/DataTable/DataTable';
import type { Column } from '../../presentation/components/DataTable/DataTable';
import { StatusBadge } from '../../presentation/components/StatusBadge/StatusBadge';
import { Button } from '../../presentation/components/Button/Button';
import { Modal } from '../../presentation/components/Modal/Modal';
import { TextInput } from '../../presentation/components/TextInput/TextInput';
import { mockAllRequests } from '../../infrastructure/mockData/mockAllRequests';
import type { RequestRecord } from '../../core/domain/types/requestsLog';
import './AdminPages.css';

export const RequestsManagementPage: React.FC = () => {
  const [selectedReq, setSelectedReq] = useState<RequestRecord | null>(null);
  const [interventionNote, setInterventionNote] = useState('');

  const columns: Column<RequestRecord>[] = [
    { header: 'Talep No', accessor: 'requestId' },
    { header: 'Sürücü', accessor: 'driverSummary', render: (r) => `${r.driverSummary.name} (${r.driverSummary.phone})` },
    { header: 'Atanan Servis', accessor: 'assignedServiceSummary', render: (r) => r.assignedServiceSummary ? r.assignedServiceSummary.name : 'Atanmamış' },
    { header: 'Süre (Dk)', accessor: 'timeElapsedInMins' },
    { header: 'Durum', accessor: 'status', render: (r) => <StatusBadge status={r.status} label={r.status} /> },
    {
      header: 'Aksiyon',
      accessor: 'id',
      render: (r) => (
        <Button size="sm" onClick={() => setSelectedReq(r)}>Müdahale Et</Button>
      )
    }
  ];

  const handleIntervention = (action: string) => {
    alert(`Talep ${selectedReq?.requestId} için müdahale: ${action}. Not: ${interventionNote}`);
    setSelectedReq(null);
    setInterventionNote('');
  };

  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Talepler Yönetimi</h1>
        <p>Sistemde dönen çağrıları izleyin, uzayan işlemlere müdahale edin.</p>
      </div>

      <DataTable
        data={mockAllRequests}
        columns={columns}
        rowClassName={(row) => row.isProblematic ? 'row-problematic' : ''}
      />

      <Modal
        title="Talep Müdahale Ekranı"
        isOpen={!!selectedReq}
        onClose={() => setSelectedReq(null)}
      >
        {selectedReq && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px' }}>
              <strong>Sorun Özeti:</strong> {selectedReq.issueDescription}
              <br />
              <strong>Lokasyon:</strong> {typeof selectedReq.locationInfo === 'string' ? selectedReq.locationInfo : selectedReq.locationInfo.address}
            </div>

            <TextInput
              label="Müdahale Notu"
              value={interventionNote}
              onChange={setInterventionNote}
              placeholder="Sürücü ile görüşüldü..."
            />

            <div style={{ display: 'flex', gap: '12px', marginTop: '16px', justifyContent: 'flex-end' }}>
              <Button variant="destructive" onClick={() => handleIntervention('İptal Et')}>Talebi İptal Et</Button>
              <Button variant="primary" onClick={() => handleIntervention('Tamamlandı Kabul Et')}>Manuel Tamamla</Button>
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
};
