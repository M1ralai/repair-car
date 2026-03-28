import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateRequestPage: React.FC = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to create request, then redirect to tracking
    navigate('/request-tracking/req_1001');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <header className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-lg font-bold text-slate-900">Talep Oluştur</h1>
      </header>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Sorunu Açıklayın</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none resize-none"
            rows={4}
            placeholder="Aracınızdaki arızayı veya ihtiyacınızı kısaca belirtin..."
            required
          />
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
          <label className="block text-sm font-semibold text-slate-800 mb-2">Fotoğraf Ekle</label>
          <button type="button" className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 bg-slate-50 hover:bg-slate-100">
            <span className="text-2xl mb-2">📸</span>
            <span className="text-sm">Tıkla veya Fotoğraf Çek</span>
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <span className="font-semibold text-slate-800 block text-sm">Çekici İhtiyacı</span>
            <span className="text-xs text-slate-500">Araç yürür durumda değil mi?</span>
          </div>
          <input type="checkbox" className="w-5 h-5 accent-sky-500 rounded border-slate-300 focus:ring-sky-500" />
        </div>

        <button 
          type="submit" 
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] text-lg mt-4"
        >
          Talebi Gönder
        </button>
      </form>
    </div>
  );
};
