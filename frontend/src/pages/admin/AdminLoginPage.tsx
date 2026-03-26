import React, { useState } from 'react';
import { TextInput } from '../../presentation/components/TextInput/TextInput';
import { Button } from '../../presentation/components/Button/Button';
import { mockAdminAuthResponse } from '../../infrastructure/mockData/mockAdminAuth';
import './AdminPages.css';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Basic validation based on 4.1 rule example
    if (email === 'admin@repaircar.com' && password === 'password123') {
      localStorage.setItem('adminToken', mockAdminAuthResponse.token);
      window.location.href = '/admin/dashboard';
    } else {
      setError('Geçersiz e-posta veya şifre.');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <h2>RepairCar Platformu</h2>
        <p className="login-subtitle">Yönetici Paneli Girişi</p>
        <div className="login-form">
          <TextInput label="E-Posta" value={email} onChange={setEmail} placeholder="admin@repaircar.com" type="email" />
          <TextInput label="Şifre" value={password} onChange={setPassword} placeholder="******" type="password" />
          {error && <div className="login-error">{error}</div>}
          <div style={{ marginTop: '16px' }}>
            <Button onClick={handleLogin} fullWidth>Giriş Yap</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
