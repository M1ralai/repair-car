import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockServiceDetails, mockServiceReviews } from '../../infrastructure/mockData/mockServiceDetails';

export const ServiceDetailPage: React.FC = () => {
  useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = mockServiceDetails; // in real app, fetch based on id

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Image */}
      <div className="relative h-64 bg-slate-300">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm z-10"
        >
          <span className="text-xl">←</span>
        </button>
        {service.imageUrl && (
          <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="relative -mt-6 bg-slate-50 rounded-t-3xl px-6 pt-8">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold text-slate-900">{service.name}</h1>
          <button className="text-2xl hover:text-red-500 scale-110 shadow-sm bg-white p-2 rounded-full leading-none mt-2">
            🤍
          </button>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <span className="bg-yellow-100 text-yellow-700 font-bold px-2 py-1 rounded text-sm flex items-center gap-1">
            ⭐ {service.rating}
          </span>
          <span className="text-slate-500 text-sm">({service.reviewCount} Değerlendirme)</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 text-sm">{service.distance} km uzaklıkta</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6">
          <h2 className="font-semibold text-slate-800 mb-2">Hakkında</h2>
          <p className="text-slate-600 text-sm leading-relaxed">{service.about}</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6">
          <h2 className="font-semibold text-slate-800 mb-3">Uzmanlık Alanları</h2>
          <div className="flex flex-wrap gap-2">
            {service.specialties.map(spec => (
              <span key={spec} className="bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full font-medium">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-6">
          <h2 className="font-semibold text-slate-800 mb-3 px-1">Müşteri Yorumları</h2>
          <div className="space-y-3">
            {mockServiceReviews.map(review => (
              <div key={review.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-800 text-sm">{review.userName}</span>
                  <span className="text-xs text-slate-400">{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="text-yellow-500 text-xs mb-2">
                  {'⭐'.repeat(review.rating)}
                </div>
                <p className="text-slate-600 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <button 
          onClick={() => navigate('/create-request')} 
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 rounded-xl shadow-md transition-colors text-lg"
        >
          Yardım İste
        </button>
      </div>
    </div>
  );
};
