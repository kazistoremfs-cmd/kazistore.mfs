import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2, GraduationCap, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export default function CollegeAdmissionDetails() {
  const navigate = useNavigate();
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
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">কলেজ ভর্তি আবেদন (XI Class)</span>
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
              একাদশ শ্রেণিতে ভর্তি আবেদন
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-bn leading-relaxed max-w-2xl whitespace-pre-line drop-shadow">
              সরকারি ও বেসরকারি কলেজে একাদশ শ্রেণিতে ভর্তির (XI Class Admission) অনলাইন আবেদন, ফলাফল দেখা এবং ভর্তি নিশ্চায়ন সংক্রান্ত সকল সেবা আমাদের কাজী স্টোর থেকে প্রদান করা হয়।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-bn mb-3">অনলাইন আবেদন</h3>
              <ul className="space-y-3 font-bn text-slate-300 text-[15px] md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>আবেদনের ফি প্রদান (বিকাশ/নগদ এর মাধ্যমে)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>সর্বনিম্ন ৫টি এবং সর্বোচ্চ ১০টি কলেজ পছন্দক্রম নির্বাচন</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>আবেদনের প্রিন্ট কপি প্রদান</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-bn mb-3">ফলাফল ও নিশ্চায়ন</h3>
              <ul className="space-y-3 font-bn text-slate-300 text-[15px] md:text-base">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ভর্তির ফলাফল (মেরিট লিস্ট) চেক করা</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ভর্তি নিশ্চায়ন ফি প্রদান (নির্ধারিত সময়ের মধ্যে)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>মাইগ্রেশন সংক্রান্ত তথ্য ও সেবা</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-lg md:text-xl font-bold text-white font-bn mb-3">আবেদনের জন্য কী কী প্রয়োজন?</h3>
            <p className="font-bn text-slate-300 text-[15px] md:text-base leading-relaxed">
              আবেদন করার জন্য শিক্ষার্থীর <strong>SSC রোল নম্বর, রেজিস্ট্রেশন নম্বর, পাসের সন, বোর্ডের নাম</strong> এবং একটি সচল <strong>মোবাইল নম্বর</strong> প্রয়োজন হবে। কলেজ পছন্দের তালিকা আগে থেকেই ঠিক করে আনলে আবেদন প্রক্রিয়া দ্রুত সম্পন্ন করা সম্ভব।
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
