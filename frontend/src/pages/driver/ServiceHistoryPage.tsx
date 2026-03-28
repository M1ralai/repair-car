import React from 'react';
import { mockServiceHistory } from '../../infrastructure/mockData/mockPremiumData';

export const ServiceHistoryPage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-6 pt-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-slate-900">Servis Geçmişim</h1>
        <p className="text-slate-500 text-sm">Fatura ve dökümler</p>
      </header>

      <div className="space-y-4">
        {mockServiceHistory.length === 0 && (
          <p className="text-center text-slate-500 py-10">Henüz geçmiş bir işleminiz bulunmuyor.</p>
        )}
        
        {mockServiceHistory.map(history => (
          <div key={history.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-sky-300 transition-colors">
            <div className="flex justify-between items-start mb-3 border-b border-slate-100 pb-3">
              <span className="text-xs text-slate-400 font-medium">
                {new Date(history.date).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
              <span className="font-bold text-slate-800 text-sm bg-slate-50 px-2 py-1 rounded">
                {history.cost} {history.currency}
              </span>
            </div>
            
            <h2 className="font-bold text-slate-800 mb-1">{history.serviceName}</h2>
            <p className="text-slate-600 text-sm mb-3 line-clamp-2">{history.problemSummary}</p>
            
            {history.ratingGiven && (
              <div className="text-yellow-400 text-xs">
                {'⭐'.repeat(history.ratingGiven)} <span className="text-slate-400 ml-1">Puanınız</span>
              </div>
            )}
            
            <div className="absolute top-0 right-0 w-1.5 h-full bg-slate-300 group-hover:bg-sky-400 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
