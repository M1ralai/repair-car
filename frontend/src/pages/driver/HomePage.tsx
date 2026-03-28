import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUser } from '../../infrastructure/mockData/mockUserAuth';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 pt-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Merhaba, {mockUser.fullName.split(' ')[0]} 👋</h1>
          <p className="text-slate-500 text-sm">Nasıl yardımcı olabiliriz?</p>
        </div>
        <img src={mockUser.avatarUrl} alt="Profil" className="w-12 h-12 rounded-full border-2 border-slate-200 shadow-sm" />
      </header>

      <section className="mb-8 p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-center shadow-sm">
        <div className="flex-1">
          <h2 className="text-sky-900 font-semibold mb-1">Haritadasınız</h2>
          <p className="text-sky-700 text-sm">Mevcut konumunuz: Beşiktaş, İstanbul</p>
        </div>
        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-xl shadow-sm border border-sky-200">
          📍
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <button
          onClick={() => navigate('/category-selection')}
          className="bg-sky-500 hover:bg-sky-600 text-white p-6 rounded-xl flex flex-col items-center justify-center shadow-sm transition-transform active:scale-95"
        >
          <span className="text-3xl mb-2">🛠️</span>
          <span className="font-semibold text-center">Arıza & Bakım</span>
        </button>
        
        <button
          onClick={() => navigate('/sos-guide')}
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 p-6 rounded-xl flex flex-col items-center justify-center shadow-sm transition-transform active:scale-95"
        >
          <span className="text-3xl mb-2">🆘</span>
          <span className="font-semibold text-center">Acil Durum</span>
        </button>

        <button
          onClick={() => navigate('/price-estimator')}
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 p-6 rounded-xl flex flex-col items-center justify-center shadow-sm transition-transform active:scale-95"
        >
          <span className="text-3xl mb-2">💰</span>
          <span className="font-semibold text-center mt-2">Fiyat Hesapla</span>
        </button>
      </section>
    </div>
  );
};
