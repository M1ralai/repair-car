import React, { useState, useMemo } from 'react';
import { AdminLayout } from '../../presentation/layouts/AdminLayout/AdminLayout';
import { AdvancedFilterBar } from '../../presentation/components/AdvancedFilterBar/AdvancedFilterBar';
import type { FilterOptions } from '../../presentation/components/AdvancedFilterBar/AdvancedFilterBar';
import { DataTable } from '../../presentation/components/DataTable/DataTable';
import type { Column } from '../../presentation/components/DataTable/DataTable';
import { DropdownMenu } from '../../presentation/components/DropdownMenu/DropdownMenu';
import { mockServicePoints } from '../../infrastructure/mockData/mockServicePoints';
import type { ServicePoint } from '../../core/domain/types/services';
import './AdminPages.css';

export const ServiceManagementPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    city: '',
    district: '',
    category: '',
    status: ''
  });

  const [data] = useState<ServicePoint[]>(mockServicePoints);

  const filteredData = useMemo(() => {
    return data.filter(item => {
      if (filters.searchTerm && !item.shopName.toLowerCase().includes(filters.searchTerm.toLowerCase()) && !item.contactNumber?.includes(filters.searchTerm)) return false;
      if (filters.city && item.city !== filters.city) return false;
      if (filters.district && !item.district.toLowerCase().includes(filters.district.toLowerCase())) return false;
      if (filters.category && !item.categories.includes(filters.category)) return false;
      if (filters.status === 'active' && !item.isActive) return false;
      if (filters.status === 'passive' && item.isActive) return false;
      if (filters.status === 'approved' && !item.isRepairCarApproved) return false;
      return true;
    });
  }, [data, filters]);

  const columns: Column<ServicePoint>[] = [
    {
      header: 'Firma Adı',
      accessor: 'shopName',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {row.shopName}
          {row.isRepairCarApproved && <span title="RepairCar Onaylı" style={{ color: '#10b981', fontSize: '16px' }}>★</span>}
        </div>
      )
    },
    { header: 'Şehir/İlçe', accessor: 'city', render: (row) => `${row.city} / ${row.district}` },
    { header: 'Kategori', accessor: 'categories', render: (row) => row.categories.join(', ') },
    { header: 'Puan', accessor: 'rating', render: (row) => `${row.rating} / 5.0` },
    { header: 'Telefon', accessor: 'contactNumber' },
    {
      header: 'İşlemler',
      accessor: 'id',
      render: (row) => (
        <DropdownMenu items={[
          { id: 'edit', label: 'Düzenle', onClick: () => alert(`Düzenle: ${row.shopName}`) },
          { id: 'toggle', label: row.isActive ? 'Pasife Al' : 'Aktifleştir', onClick: () => alert(`Durum Değişti`) },
          { id: 'delete', label: 'Sil', variant: 'danger', onClick: () => alert(`Silinecek: ${row.shopName}`) }
        ]} />
      )
    }
  ];

  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Servis ve Kurtarıcı Yönetimi</h1>
        <p>Ağdaki aktif ve pasif tüm noktaları yönetin, filtreleyin.</p>
      </div>

      <AdvancedFilterBar
        filters={filters}
        onChange={setFilters}
        onSearch={() => console.log('Arama tetiklendi')}
      />

      <DataTable
        data={filteredData}
        columns={columns}
      />
    </AdminLayout>
  );
};
