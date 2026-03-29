import React from 'react';
import { mockVehicles } from '../../infrastructure/mockData/mockPremiumData';

export const GaragePage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-6 pt-4">
        <h1 className="text-2xl font-bold text-slate-900">Garajım</h1>
        <p className="text-slate-500 text-sm mt-1">Sistemde kayıtlı araçlarınız</p>
      </header>

      <div className="space-y-4">
        {mockVehicles.map(vehicle => (
          <div key={vehicle.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-bold text-slate-800">{vehicle.make} {vehicle.model}</h2>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-mono font-bold border border-slate-200">
                {vehicle.plate}
              </span>
            </div>
            <p className="text-slate-500 text-sm">Yıl: {vehicle.year}</p>
            {vehicle.chassisNumber && (
              <p className="text-slate-400 text-xs mt-2 uppercase">Şasi: {vehicle.chassisNumber}</p>
            )}
            
            <div className="absolute top-0 right-0 w-2 h-full bg-sky-400"></div>
          </div>
        ))}

        <button className="w-full border-2 border-dashed border-sky-300 bg-sky-50 text-sky-600 p-5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-sky-100 transition-colors">
          <span className="text-xl">+</span> Yeni Araç Ekle
        </button>
      </div>
    </div>
  );
};
