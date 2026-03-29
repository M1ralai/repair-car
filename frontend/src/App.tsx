import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Admin Layout
import { MainLayout } from './presentation/layouts/MainLayout';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { QualityAndComplaintsPage } from './pages/admin/QualityAndComplaintsPage';
import { RequestsManagementPage } from './pages/admin/RequestsManagementPage';
import { ServiceApplicationsPage } from './pages/admin/ServiceApplicationsPage';
import { ServiceManagementPage } from './pages/admin/ServiceManagementPage';

// Driver App (Section 1)
import { MobileAppLayout } from './presentation/layouts/MobileAppLayout';
import { UserLoginPage } from './pages/driver/UserLoginPage';
import { HomePage } from './pages/driver/HomePage';
import { CategorySelectionPage } from './pages/driver/CategorySelectionPage';
import { ServiceListPage } from './pages/driver/ServiceListPage';
import { ServiceDetailPage } from './pages/driver/ServiceDetailPage';
import { CreateRequestPage } from './pages/driver/CreateRequestPage';
import { RequestTrackingPage } from './pages/driver/RequestTrackingPage';
import { AddReviewPage } from './pages/driver/AddReviewPage';
import { GaragePage } from './pages/driver/GaragePage';
import { ServiceHistoryPage } from './pages/driver/ServiceHistoryPage';
import { FavoritesPage } from './pages/driver/FavoritesPage';
import { EmergencyGuidePage } from './pages/driver/EmergencyGuidePage';
import { PriceEstimatorPage } from './pages/driver/PriceEstimatorPage';
import { PaymentPage } from './pages/driver/PaymentPage';
// Service Provider App (Section 2/3)
import { LoginPage as ProviderLoginPage } from './pages/LoginPage/LoginPage';
import { DashboardPage as ProviderDashboardPage } from './pages/DashboardPage/DashboardPage';
import { RequestDetailPage } from './pages/RequestDetailPage/RequestDetailPage';
import { OnboardingPage } from './pages/OnboardingPage/OnboardingPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* === SECTION 1: DRIVER APP ROUTES === */}
        {/* Auth / Layout-free screens */}
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/category-selection" element={<CategorySelectionPage />} />
        <Route path="/service-list" element={<ServiceListPage />} />
        <Route path="/service-detail/:id" element={<ServiceDetailPage />} />
        <Route path="/create-request" element={<CreateRequestPage />} />
        <Route path="/request-tracking/:reqId" element={<RequestTrackingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/add-review" element={<AddReviewPage />} />

        {/* Screens with Bottom Navigation */}
        <Route element={<MobileAppLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<ServiceHistoryPage />} />
          <Route path="/garage" element={<GaragePage />} />
          <Route path="/sos-guide" element={<EmergencyGuidePage />} />
          <Route path="/price-estimator" element={<PriceEstimatorPage />} />
        </Route>

        {/* === SECTION 2/3: SERVICE PROVIDER ROUTES === */}
        <Route path="/usta" element={<Navigate to="/usta/login" replace />} />
        <Route path="/usta/login" element={<ProviderLoginPage />} />
        <Route path="/usta/dashboard" element={<ProviderDashboardPage />} />
        <Route path="/usta/talep-detay/:id" element={<RequestDetailPage />} />
        <Route path="/usta/basvuru" element={<OnboardingPage />} />
        <Route path="/usta/profil" element={<ProfilePage />} />

        {/* === SECTION 4: ADMIN ROUTES === */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/applications" element={<ServiceApplicationsPage />} />
          <Route path="/admin/services" element={<ServiceManagementPage />} />
          <Route path="/admin/requests" element={<RequestsManagementPage />} />
          <Route path="/admin/quality" element={<QualityAndComplaintsPage />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

