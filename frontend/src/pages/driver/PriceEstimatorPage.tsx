import React from 'react';
import { mockPriceCatalog } from '../../infrastructure/mockData/mockPremiumData';

export const PriceEstimatorPage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-8 pt-4">
        <h1 className="text-2xl font-bold text-slate-900">Fiyat Hesaplayıcı</h1>
        <p className="text-slate-500 text-sm mt-1">Öngörülen ortalama onarım masrafları</p>
      </header>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6 text-sm text-blue-800">
        <strong>Not:</strong> Bu fiyatlar piyasa ortalamasıdır. Gerçek tutar araç marka, model ve servis durumuna göre değişiklik gösterebilir.
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-4 font-semibold text-slate-600 border-b border-slate-200 w-full">Hizmet / Parça</th>
              <th className="p-4 font-semibold text-slate-600 border-b border-slate-200 text-right">Tahmini (Min - Max)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockPriceCatalog.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4 text-slate-800 font-medium">{item.category}</td>
                <td className="p-4 text-slate-600 text-right">
                  {item.minPrice} - {item.maxPrice} <span className="text-xs text-slate-400">{item.currency}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8">
        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2">
          <span>🧾</span> Özel Teklif Al
        </button>
      </div>
    </div>
  );
};
