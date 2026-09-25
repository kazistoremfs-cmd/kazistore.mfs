import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, FileCheck, DollarSign, CheckCircle2, AlertCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

export default function BMETRegistrationDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const requirementsList = [
    {
      title: 'মূল পাসপোর্ট (Original Passport)',
      desc: 'পাসপোর্টের মেয়াদ অন্তত ৬ মাস থাকতে হবে। মূল পাসপোর্ট স্ক্যান বা স্পষ্ট ছবি লাগবে।',
      mandatory: true,
      badge: 'অবশ্যই আবশ্যক'
    },
    {
      title: 'জাতীয় পরিচয়পত্র (NID) বা ডিজিটাল জন্ম নিবন্ধন',
      desc: 'অনলাইন ভেরিফাইড জাতীয় পরিচয়পত্র (NID Card) অথবা ১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ।',
      mandatory: true,
      badge: 'অবশ্যই আবশ্যক'
    },
    {
      title: 'পাসপোর্ট সাইজ রঙিন ছবি',
      desc: 'ল্যাব কোয়ালিটির স্পষ্ট রঙিন ছবি (সাদা ব্যাকগ্রাউন্ড)। আমরা দোকানেই তাৎক্ষণিক ছবি তুলে রিসাইজ করে দিতে পারব।',
      mandatory: true,
      badge: 'অবশ্যই আবশ্যক'
    },
    {
      title: 'সচল ব্যক্তিগত মোবাইল নম্বর',
      desc: 'ওটিপি (OTP) ও ভেরিফিকেশন কোড রিসিভ করার জন্য আবেদনকারীর কাছে থাকা সচল মোবাইল নম্বর।',
      mandatory: true,
      badge: 'অবশ্যই আবশ্যক'
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn selection:bg-blue-500/30">
      {/* Subtle Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-blue-900/15 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-3/4 h-3/4 bg-emerald-900/15 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6 md:mb-8 font-en backdrop-blur-md bg-[#0F172A]/60 py-2.5 px-4 rounded-xl border border-slate-800">
          <button 
            onClick={() => navigate('/')} 
            className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <Link to="/#services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate font-bn">BMET রেজিস্ট্রেশন</span>
        </nav>

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            BMET রেজিস্ট্রেশন
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            বিদেশগামী কর্মী ও প্রবাসীদের জন্য বাধ্যতামূলক সরকারি <strong className="text-white">BMET রেজিস্ট্রেশন</strong> (আমি প্রবাসী পোর্টাল) কাজী স্টোর থেকে অতি দ্রুত ও শতভাগ নির্ভুলভাবে সম্পন্ন করা হয়। তাৎক্ষণিক অনলাইন ভেরিফিকেশন, ফি প্রদান ও প্রিমিয়াম কার্ড প্রিন্ট সুবিধা।
          </p>
        </motion.div>

        {/* Section 1: BMET কার্ড করতে যা যা লাগবে (Requirements Chart) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                BMET কার্ড করতে যা যা লাগবে
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {requirementsList.map((req, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/40 rounded-2xl p-4 sm:p-5 backdrop-blur-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${req.mandatory ? 'text-emerald-400' : 'text-blue-400'}`} />
                      <h3 className="text-base sm:text-lg font-bold text-white">{req.title}</h3>
                    </div>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold shrink-0 ${
                      req.mandatory 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {req.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-normal pl-7">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              <strong>বিশেষ টিপস:</strong> পাসপোর্টের তথ্য ও জাতীয় পরিচয়পত্রের তথ্যের মধ্যে বড় গরমিল থাকলে আগেই কাজী স্টোরে এসে পরামর্শ নিন। আমাদের অভিজ্ঞ টিম নির্ভুলভাবে আবেদন প্রসেস করে দেবে।
            </p>
          </div>
        </motion.div>

        {/* Minimal Customer-Friendly Fee Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <DollarSign className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                সার্ভিস ফি
              </h2>
            </div>
            <span className="text-xs text-emerald-400 font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              ফিক্সড ও স্বচ্ছ রেট
            </span>
          </div>

          {/* একক মিনিমাল ফি বক্স (Single unified minimal fee container) */}
          <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/50">
              <div className="pb-3 sm:pb-0 sm:pr-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">সরকারি ফি</span>
                <span className="text-base font-bold text-white">২১০ ৳</span>
              </div>
              <div className="py-3 sm:py-0 sm:px-4 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">আবেদন ও প্রিন্ট</span>
                <span className="text-base font-bold text-white">৪০ ৳</span>
              </div>
              <div className="pt-3 sm:pt-0 sm:pl-4 flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-400">মোট প্যাকেজ</span>
                <span className="text-lg font-black text-emerald-400">২৫০ ৳</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section: Call to action / Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              BMET রেজিস্ট্রেশন করতে চান?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 whitespace-nowrap">
              দোকানে চলে আসুন বা বিস্তারিত জানতে হোয়াটসঅ্যাপে মেসেজ দিন।
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <a 
              href="https://wa.me/message/L2XAYVWBE5RIJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-md shadow-emerald-500/10 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" /> হোয়াটসঅ্যাপে যোগাযোগ
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
