import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockServiceList } from '../../infrastructure/mockData/mockServiceList';

export const ServiceListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <div className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
          <span className="text-xl">←</span>
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-900">Yakındaki Servisler</h1>
          <p className="text-xs text-slate-500">Mevcut konumunuza göre sıralandı</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {mockServiceList.map(service => (
          <div 
            key={service.id} 
            onClick={() => navigate(`/service-detail/${service.id}`)}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4 items-start">
              {service.imageUrl ? (
                <img src={service.imageUrl} alt={service.name} className="w-20 h-20 rounded-lg object-cover bg-slate-100" />
              ) : (
                <div className="w-20 h-20 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-2xl">🏪</div>
              )}
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-slate-900">{service.name}</h3>
                  <span className="text-xs font-bold bg-sky-50 text-sky-600 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                    {service.distance} km
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-slate-500 mt-1">
                  ⭐ {service.rating} ({service.reviewCount} Yorum)
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {service.specialties.map(spec => (
                    <span key={spec} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {service.isVerified && (
              <div className="bg-green-50 text-green-700 text-xs py-1.5 px-3 rounded-md flex items-center gap-1">
                <span className="font-bold">✓</span> Onaylı RepairCar Noktası
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
