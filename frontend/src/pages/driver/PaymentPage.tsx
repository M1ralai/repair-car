import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { CreditCard, ShieldCheck, CheckCircle } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast.success('Ödeme başarıyla alındı!');
      
      // Redirect to review after success
      setTimeout(() => {
        navigate('/add-review');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Ödeme Tamamlandı</h1>
        <p className="text-slate-500 mb-8 max-w-xs">
          Hizmet bedeli başarıyla tahsil edildi. Faturanız e-posta adresinize gönderilecektir.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-6">
      <header className="bg-white p-6 shadow-sm border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-slate-500 hover:text-slate-800 p-1 -ml-2">
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-lg font-bold text-slate-900">Güvenli Ödeme</h1>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Hizmet Bedeli</span>
            <span className="text-slate-900 font-semibold">2.500,00 ₺</span>
          </div>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
            <span className="text-slate-500 font-medium">Hizmet Bedeli KDV (%20)</span>
            <span className="text-slate-900 font-semibold">500,00 ₺</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-slate-800 font-bold text-lg">Toplam</span>
            <span className="text-sky-600 font-bold text-2xl">3.000,00 ₺</span>
          </div>
        </div>

        <form onSubmit={handlePayment} className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-sky-500" />
              Kart Bilgileri
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Kart Üzerindeki İsim</label>
                <input 
                  type="text" 
                  placeholder="İsim Soyisim" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  required
                  defaultValue=""
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Kart Numarası</label>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  maxLength={19}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                  required
                />
              </div>
              
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Son Kul. (AA/YY)</label>
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    maxLength={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
                <div className="w-24">
                  <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">CVV</label>
                  <input 
                    type="text" 
                    placeholder="123" 
                    maxLength={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs py-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            256-bit SSL sertifikası ile korunmaktadır
          </div>

          <button 
            type="submit" 
            disabled={isProcessing}
            className={`w-full text-white font-bold py-4 rounded-xl shadow-md transition-all text-lg flex items-center justify-center gap-2 ${
              isProcessing ? 'bg-slate-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 active:scale-[0.98]'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                İşleniyor...
              </span>
            ) : (
              'Ödemeyi Tamamla ve İşi Bitir'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
