import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextInput, Button } from '../../presentation/components';
import { mockValidCredentials, mockServisSession, mockCekiciSession } from '../../infrastructure/mockData/mockAuth';
import './LoginPage.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('ahmet@servis.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      // Mock validation
      if (
        emailOrPhone === mockValidCredentials.servis.emailOrPhone &&
        password === mockValidCredentials.servis.password
      ) {
        localStorage.setItem('session', JSON.stringify(mockServisSession));
        navigate('/dashboard');
      } else if (
        emailOrPhone === mockValidCredentials.cekici.emailOrPhone &&
        password === mockValidCredentials.cekici.password
      ) {
        localStorage.setItem('session', JSON.stringify(mockCekiciSession));
        navigate('/dashboard');
      } else {
        setError('E-posta veya şifre hatalı!');
      }
    }, 1000);
  };

  return (
    <div className="login-page app-container">
      <div className="login-card fade-in-up">
        <div className="login-header">
          <h1 className="login-logo">RepairCar</h1>
          <h2 className="login-title">Hizmet Sağlayıcı Girişi</h2>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <TextInput
            label="E-posta veya Telefon"
            value={emailOrPhone}
            onChange={setEmailOrPhone}
            type="email"
            required
            error={error ? ' ' : undefined}
          />
          <TextInput
            label="Şifre"
            value={password}
            onChange={setPassword}
            type="password"
            required
            error={error}
          />

          <div className="login-forgot">
            <a href="#">Şifremi Unuttum</a>
          </div>

          <Button type="submit" fullWidth size="lg" loading={isLoading}>
            Giriş Yap
          </Button>
        </form>

        <div className="login-footer">
          <p>Sistemde henüz kaydınız yok mu?</p>
          <Link to="/basvuru" className="login-link">Hemen Başvuru Yapın</Link>
        </div>
        
        {/* Helper for demo */}
        <div className="demo-credentials">
          <p>Demo Giriş (Servis): ahmet@servis.com / 123456</p>
          <p>Demo Giriş (Çekici): hizli@cekici.com / 123456</p>
        </div>
      </div>
    </div>
  );
};
