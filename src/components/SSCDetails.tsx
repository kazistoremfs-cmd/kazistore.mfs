import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Download, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function SSCDetails() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 to-[#0F172A] opacity-90"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-en backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <Link to="/service/edu-admission" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Admission
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">SSC রেজাল্ট ও বোর্ড চ্যালেঞ্জ</span>
        </nav>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-12 flex-1"
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-bn text-white mb-3 md:mb-4 tracking-tight drop-shadow-md">
              SSC রেজাল্ট ও বোর্ড চ্যালেঞ্জ
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-bn leading-relaxed max-w-2xl whitespace-pre-line drop-shadow">
              SSC পরীক্ষার রেজাল্ট দেখা, মার্কশিট ডাউনলোড এবং বোর্ড চ্যালেঞ্জ সংক্রান্ত সকল সেবা আমাদের কাজী স্টোর থেকে প্রদান করা হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-bn mb-3">রেজাল্ট ও মার্কশিট</h3>
              <ul className="space-y-3 font-bn text-slate-300 text-[15px] md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>এসএমএস ও ওয়েবসাইটের মাধ্যমে দ্রুত রেজাল্ট চেক</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>বিস্তারিত মার্কশিট (নম্বরপত্র) ডাউনলোড ও প্রিন্ট</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>প্রতিষ্ঠানের রেজাল্ট শিট সংগ্রহ</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 text-orange-400">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-bn mb-3">বোর্ড চ্যালেঞ্জ (খাতা পুনঃনিরীক্ষণ)</h3>
              <ul className="space-y-3 font-bn text-slate-300 text-[15px] md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>সকল বোর্ডের খাতা পুনঃনিরীক্ষণের আবেদন ফি জমা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>আবেদনের কনফার্মেশন স্লিপ প্রদান</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>বোর্ড চ্যালেঞ্জের রেজাল্ট সংগ্রহ</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-lg md:text-xl font-bold text-white font-bn mb-3">কী কী প্রয়োজন?</h3>
            <p className="font-bn text-slate-300 text-[15px] md:text-base leading-relaxed">
              রেজাল্ট দেখার জন্য পরীক্ষার্থীর <strong>রোল নম্বর, রেজিস্ট্রেশন নম্বর এবং বোর্ডের নাম</strong> প্রয়োজন। বোর্ড চ্যালেঞ্জের জন্য পরীক্ষার্থীর একটি সচল <strong>মোবাইল নম্বর</strong> লাগবে। বিস্তারিত জানতে আমাদের দোকানে আসুন অথবা WhatsApp-এ যোগাযোগ করুন।
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
