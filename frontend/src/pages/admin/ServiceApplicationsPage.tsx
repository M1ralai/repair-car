import React, { useState } from 'react';
import { AdminLayout } from '../../presentation/layouts/AdminLayout/AdminLayout';
import { DataTable } from '../../presentation/components/DataTable/DataTable';
import type { Column } from '../../presentation/components/DataTable/DataTable';
import { StatusBadge } from '../../presentation/components/StatusBadge/StatusBadge';
import { Button } from '../../presentation/components/Button/Button';
import { Modal } from '../../presentation/components/Modal/Modal';
import { mockServiceApplications } from '../../infrastructure/mockData/mockServiceApplications';
import type { ServiceApplication } from '../../core/domain/types/applications';
import './AdminPages.css';

export const ServiceApplicationsPage: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<ServiceApplication | null>(null);

  const columns: Column<ServiceApplication>[] = [
    { header: 'Servis Adı', accessor: 'shopName' },
    { header: 'Kategori', accessor: 'expertiseCategory' },
    { header: 'Şehir/İlçe', accessor: 'id', render: (row) => `${row.addressDetails.city} / ${row.addressDetails.district}` },
    { header: 'Başvuru Tarihi', accessor: 'appliedAt', render: (row) => new Date(row.appliedAt).toLocaleDateString('tr-TR') },
    { header: 'Durum', accessor: 'status', render: (row) => <StatusBadge status={row.status} label={row.status} /> },
    {
      header: 'İşlemler',
      accessor: 'id',
      render: (row) => (
        <Button size="sm" onClick={(e) => { e.stopPropagation(); setSelectedApp(row); }}>
          İncele
        </Button>
      )
    }
  ];

  const handleAction = (action: string) => {
    alert(`${selectedApp?.shopName} için işlem: ${action}`);
    setSelectedApp(null);
  };

  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Servis Başvuruları</h1>
        <p>Ağa katılmak isteyen yeni servis ve kurtarıcıların başvurularını yönetin.</p>
      </div>

      <DataTable
        data={mockServiceApplications}
        columns={columns}
      />

      <Modal
        title="Başvuru İnceleme"
        isOpen={!!selectedApp}
        onClose={() => setSelectedApp(null)}
        width="600px"
      >
        {selectedApp && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div><strong>Firma Adı:</strong> {selectedApp.shopName}</div>
            <div><strong>İletişim:</strong> {selectedApp.contactNumber}</div>
            <div><strong>Kayıtlı Adres:</strong> {selectedApp.addressDetails.fullAddress}</div>
            <div><strong>Ustalık:</strong> {selectedApp.expertiseCategory}</div>
            <div>
              <strong>Yüklenen Evraklar:</strong>
              <ul>
                {selectedApp.uploadedDocuments.map(doc => (
                  <li key={doc.name}><a href="#" onClick={(e) => e.preventDefault()}>{doc.name}</a></li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
              <Button variant="destructive" onClick={() => handleAction('Reddet')}>Reddet</Button>
              <Button variant="secondary" onClick={() => handleAction('Revize İste')}>Revize İste</Button>
              <Button variant="primary" onClick={() => handleAction('Onayla')}>Onayla</Button>
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
};
