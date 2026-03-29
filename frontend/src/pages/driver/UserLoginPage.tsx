import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench } from 'lucide-react';

export const UserLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">RepairCar</h1>
          <p className="text-slate-500 text-sm">Sürücü Uygulaması Girişi</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Telefon Numarası</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="05XX XXX XX XX"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-4">
          <button onClick={() => navigate('/home')} className="text-sm text-sky-500 hover:underline">
            Misafir Olarak Devam Et
          </button>
          
          <div className="w-full h-px bg-slate-100 my-1"></div>
          
          <button 
            onClick={() => navigate('/usta/login')} 
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition-all active:scale-[0.98]"
          >
            <Wrench className="w-4 h-4 text-slate-500" /> Servis / Usta Girişi
          </button>
        </div>
      </div>
    </div>
  );
};
