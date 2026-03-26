import React from 'react';
import { AdminLayout } from '../../presentation/layouts/AdminLayout/AdminLayout';
import { StatisticCard } from '../../presentation/components/StatisticCard/StatisticCard';
import { ActivityFeed } from '../../presentation/components/ActivityFeed/ActivityFeed';
import { mockDashboardStats, mockActivityFeed } from '../../infrastructure/mockData/mockDashboard';
import './AdminPages.css';

export const AdminDashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <div className="page-header">
        <h1>Genel Bakış</h1>
        <p>RepairCar platformunun anlık durumu ve özet verileri.</p>
      </div>
      
      <div className="stats-grid">
        <StatisticCard label="Toplam Kullanıcı" value={mockDashboardStats.totalUsers} trend={5} />
        <StatisticCard label="Onaylı Servisler" value={mockDashboardStats.totalApprovedServices} trend={2} />
        <StatisticCard label="Aktif Talepler" value={mockDashboardStats.activeRequests} />
        <StatisticCard label="Tamamlanan İşler" value={mockDashboardStats.completedJobs} trend={12} />
        <StatisticCard label="Bekleyen Şikayetler" value={mockDashboardStats.pendingComplaints} trend={-1} />
      </div>

      <div className="dashboard-content">
        <div className="activity-feed-section card-box">
          <h3>Son Aktiviteler</h3>
          <ActivityFeed items={mockActivityFeed} onItemClick={(item) => console.log('Clicked', item)} />
        </div>
      </div>
    </AdminLayout>
  );
};
