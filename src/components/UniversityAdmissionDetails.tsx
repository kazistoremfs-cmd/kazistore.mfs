import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronRight, GraduationCap, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const admissionMap: Record<string, string> = {
  'du': 'DU Admission (ঢাকা বিশ্ববিদ্যালয়)',
  'ru': 'RU Admission (রাজশাহী বিশ্ববিদ্যালয়)',
  'cu': 'CU Admission (চট্টগ্রাম বিশ্ববিদ্যালয়)',
  'ju': 'JU Admission (জাহাঙ্গীরনগর বিশ্ববিদ্যালয়)',
  'bup': 'BUP Admission (BUP)',
  'buet': 'BUET Admission (বুয়েট)',
  'eng-guccho': 'ইঞ্জিনিয়ারিং গুচ্ছ (রুয়েট, চুয়েট, কুয়েট)',
  'mist': 'MIST Admission',
  'butex': 'BUTEX Admission',
  'iut': 'IUT Admission',
  'gst': 'জিএসটি গুচ্ছ এডমিশন (GST)',
  'agri-guccho': 'কৃষি গুচ্ছ এডমিশন',
  'medical': 'মেডিকেল এডমিশন (MBBS)',
  'dental': 'ডেন্টাল এডমিশন (BDS)',
  'nursing': 'নার্সিং ও মিডওয়াইফারি',
};

export default function UniversityAdmissionDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const title = id && admissionMap[id] ? admissionMap[id] : 'বিশ্ববিদ্যালয় ভর্তি';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 to-[#0F172A] opacity-90"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-en backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">{title}</span>
        </nav>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10 flex-1"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-slate-700/50 pb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                {title} -এর অনলাইনে আবেদন ও ভর্তি সংক্রান্ত সকল কাজ অত্যন্ত সতর্কতার সাথে আমাদের এখান থেকে সম্পন্ন করতে পারবেন।
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-slate-600/50 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700/50 pb-4">
                যেসব সেবা আমরা প্রদান করি
              </h3>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <span>নির্ভুলভাবে অনলাইনে প্রাথমিক আবেদন ফরম পূরণ।</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <span>সঠিক মাপে ছবি ও স্বাক্ষর (Signature) রিসাইজ করে আপলোড।</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <span>বিকাশ, নগদ বা রকেটের মাধ্যমে আবেদন ফি পেমেন্ট।</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <span>প্রবেশপত্র (Admit Card) ডাউনলোড এবং প্রিন্ট।</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl hover:border-slate-600/50 transition-colors flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700/50 pb-4">
                  আবেদনের জন্য প্রয়োজনীয় তথ্য
                </h3>
                <ul className="space-y-4 text-slate-300 text-lg mb-8">
                  <li className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">১</span>
                    <span>এসএসসি ও এইচএসসি পরীক্ষার রোল ও রেজিস্ট্রেশন নম্বর।</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">২</span>
                    <span>সদ্য তোলা পাসপোর্ট সাইজ ছবি (সফটকপি বা হার্ডকপি)।</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">৩</span>
                    <span>একটি সচল মোবাইল নম্বর।</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-teal-500/10 border border-teal-500/20 p-5 rounded-xl text-center">
                <p className="text-teal-200 mb-4">বিস্তারিত তথ্য জানতে বা ঘরে বসেই আবেদন সম্পন্ন করতে আমাদের হোয়াটস্যাপে যোগাযোগ করুন।</p>
                <a 
                  href="https://wa.me/message/L2XAYVWBE5RIJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3.5 rounded-xl text-lg font-bold transition-all shadow-lg hover:scale-105 active:scale-95 w-full"
                >
                  <MessageCircle className="w-5 h-5" />
                  হোয়াটসঅ্যাপে মেসেজ দিন
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
