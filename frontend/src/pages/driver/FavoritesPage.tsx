import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockFavorites } from '../../infrastructure/mockData/mockPremiumData';
import { mockServiceList } from '../../infrastructure/mockData/mockServiceList';

export const FavoritesPage: React.FC = () => {
  const navigate = useNavigate();
  // Filter mockServiceList by mockFavorites ids
  const favoriteServices = mockServiceList.filter(service => mockFavorites.includes(service.id));

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <header className="mb-6 pt-4 flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-slate-900">Favori Servislerim</h1>
        <p className="text-slate-500 text-sm">Beğendiğiniz veya kaydettiğiniz servisler</p>
      </header>

      <div className="space-y-4">
        {favoriteServices.length === 0 && (
          <p className="text-center text-slate-500 py-10">Henüz favori servisiniz bulunmuyor.</p>
        )}
        
        {favoriteServices.map(service => (
          <div 
            key={service.id} 
            onClick={() => navigate(`/service-detail/${service.id}`)}
            className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Red Heart Indicator */}
            <div className="absolute top-3 right-3 text-red-500 text-xl drop-shadow-sm">
              ❤️
            </div>

            {service.imageUrl ? (
              <img src={service.imageUrl} alt={service.name} className="w-16 h-16 rounded-lg object-cover bg-slate-100" />
            ) : (
              <div className="w-16 h-16 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xl">🏩</div>
            )}
            
            <div className="flex-1 pr-6">
              <h3 className="font-semibold text-slate-900 line-clamp-1">{service.name}</h3>
              <p className="text-xs text-slate-500 line-clamp-1 mt-1">{service.address}</p>
              
              <div className="flex items-center text-sm text-slate-500 mt-2 gap-2">
                <span className="font-bold text-slate-700">⭐ {service.rating}</span>
                <span className="text-slate-300">•</span>
                <span className="bg-sky-50 text-sky-600 px-2 rounded-full text-xs font-semibold">{service.distance} km</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
