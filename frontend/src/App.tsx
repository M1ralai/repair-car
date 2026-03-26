import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './presentation/layouts/MainLayout';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { RequestDetailPage } from './pages/RequestDetailPage/RequestDetailPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { QualityAndComplaintsPage } from './pages/admin/QualityAndComplaintsPage';
import { RequestsManagementPage } from './pages/admin/RequestsManagementPage';
import { ServiceApplicationsPage } from './pages/admin/ServiceApplicationsPage';
import { ServiceManagementPage } from './pages/admin/ServiceManagementPage';

// Simple app-level Auth guard can fit here if we want to be strict,
// but for now, pages handle their own redirect.

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/basvuru" element={<OnboardingPage />} />

        {/* Protected Routes inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/talep-detay/:id" element={<RequestDetailPage />} />
          <Route path="/profil" element={<ProfilePage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/applications" element={<ServiceApplicationsPage />} />
        <Route path="/admin/services" element={<ServiceManagementPage />} />
        <Route path="/admin/requests" element={<RequestsManagementPage />} />
        <Route path="/admin/quality" element={<QualityAndComplaintsPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
