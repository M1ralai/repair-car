import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center max-w-sm mx-auto">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h1 className="text-xl font-bold text-slate-900 mb-2">Hizmet Tamamlandı</h1>
        <p className="text-slate-500 text-sm mb-8">
          Aldığınız hizmeti değerlendirerek kaliteyi artırmamıza yardımcı olun.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-4xl transition-transform hover:scale-110 ${star <= rating ? 'text-yellow-400' : 'text-slate-200'}`}
              >
                ★
              </button>
            ))}
          </div>

          <textarea
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none resize-none mb-6"
            rows={3}
            placeholder="Ustamızın hizmetinden memnun kaldınız mı? Neler iyiydi veya eksikti?"
          />

          <button 
            type="submit"
            disabled={rating === 0}
            className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white font-semibold py-3.5 rounded-xl shadow-md transition-colors text-base"
          >
            Değerlendirmeyi Gönder
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/home')}
            className="w-full mt-4 text-slate-500 hover:text-slate-700 text-sm py-2"
          >
            Şimdi Değil
          </button>
        </form>
      </div>
    </div>
  );
};
