import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './presentation/layouts/MainLayout';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { RequestDetailPage } from './pages/RequestDetailPage/RequestDetailPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

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
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
