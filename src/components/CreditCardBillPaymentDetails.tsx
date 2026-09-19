import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function CreditCardBillPaymentDetails() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-3/4 h-3/4 bg-teal-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col min-h-screen">
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-bn backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <button 
            onClick={() => navigate('/')}
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>হোম</span>
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white font-medium truncate">ক্রেডিট কার্ড বিল পেমেন্ট</span>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-12 flex-1 font-bn"
        >
          <header className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              ক্রেডিট কার্ড <span className="text-blue-400">বিল পেমেন্ট</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl">
              যেকোনো ব্যাংকের ক্রেডিট কার্ডের বিল পেমেন্ট করুন নিরাপদে এবং দ্রুততম সময়ে।
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col">
              <h3 className="text-xl font-bold text-white font-bn mb-5 border-b border-slate-700 pb-3">সার্ভিসটিতে যা যা থাকছে</h3>
              <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>যেকোনো ব্যাংকের ক্রেডিট কার্ড বিল পরিশোধের সুবিধা।</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>দ্রুত এবং সম্পূর্ণ সুরক্ষিত লেনদেন।</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>সফল পেমেন্টের কনফার্মেশন স্লিপ বা মেসেজ প্রদান।</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col">
              <h3 className="text-xl font-bold text-white font-bn mb-5 border-b border-slate-700 pb-3">যা যা প্রয়োজন</h3>
              <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300 flex-1 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                  <span>আপনার ক্রেডিট কার্ডের সঠিক নম্বর।</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                  <span>বিলের পরিমাণ এবং পেমেন্ট লাস্ট ডেট।</span>
                </li>
              </ul>
              
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4">
                <h4 className="text-blue-300 font-bold font-bn mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> সার্ভিস চার্জ
                </h4>
                <div className="mt-2 text-lg font-bold text-emerald-400 font-bn text-center bg-slate-900/50 py-3 rounded-lg border border-slate-700">
                  আলোচনা সাপেক্ষে
                </div>
                <div className="mt-4">
                  <a 
                    href="https://wa.me/message/L2XAYVWBE5RIJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-xl text-[15px] font-bold transition-all font-bn shadow-lg shadow-teal-500/20 hover:scale-[1.02] active:scale-95"
                  >
                    যোগাযোগ করুন
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
