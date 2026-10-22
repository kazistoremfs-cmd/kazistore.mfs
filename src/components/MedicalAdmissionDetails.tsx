import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ChevronDown, Calculator,
  ExternalLink, Building2, Phone, Globe, 
  FileText, BookOpen, Clock, Sparkles, MessageCircle,
  Stethoscope, Award, HeartPulse, AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MedicalAdmissionDetails() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Fee Calculator State
  const [fees, setFees] = useState({
    officialFee: true,
    teletalkCharge: true,
    kaziServiceFee: true,
    colorAdmitPrint: true,
    lamination: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fee calculation
  const calculateTotalFees = () => {
    let total = 0;
    if (fees.officialFee) total += 1000;
    if (fees.teletalkCharge) total += 20;
    if (fees.kaziServiceFee) total += 100;
    if (fees.colorAdmitPrint) total += 30;
    if (fees.lamination) total += 20;
    return total;
  };

  // Required documents
  const requiredDocs = [
    "এসএসসি (SSC) পরীক্ষার রোল, রেজিস্ট্রেশন নম্বর, বোর্ড ও পাসের সন",
    "এইচএসসি (HSC) পরীক্ষার রোল, রেজিস্ট্রেশন নম্বর, বোর্ড ও পাসের সন",
    "সদ্য তোলা পাসপোর্ট সাইজ রঙিন ছবি (৩০০ × ৩০০ পিক্সেল, জেপিজি ফরম্যাট, সর্বোচ্চ ১০০ KB)",
    "শিক্ষার্থীর পরিষ্কার ডিজিটাল স্বাক্ষর (৩০০ × ৮০ পিক্সেল, জেপিজি ফরম্যাট, সর্বোচ্চ ৬০ KB)",
    "সচল ব্যক্তিগত মোবাইল নম্বর (টেলিটক বা যেকোনো অপারেটর)",
    "স্থায়ী ও বর্তমান ঠিকানা এবং নির্ভুল পোস্টাল কোড",
    "কোটা সনদপত্র (প্রযোজ্য ক্ষেত্রে - মুক্তিযোদ্ধা, উপজাতি, জেলা বা অন্যান্য কোটা)"
  ];

  // Subject Marks Distribution
  const subjectMarks = [
    { subject: 'জীববিজ্ঞান (Biology)', marks: '৩০', color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-300' },
    { subject: 'রসায়ন (Chemistry)', marks: '২৫', color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300' },
    { subject: 'পদার্থবিজ্ঞান (Physics)', marks: '২০', color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300' },
    { subject: 'ইংরেজি (English)', marks: '১৫', color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-300' },
    { subject: 'সাধারণ জ্ঞান (GK - বাংলাদেশ ও আন্তর্জাতিক)', marks: '১০', color: 'from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-300' },
  ];

  const faqs = [
    {
      q: "মেডিকেল (MBBS) ভর্তি পরীক্ষায় আবেদনের নূন্যতম যোগ্যতা কী?",
      a: "এসএসসি ও এইচএসসি উভয় পরীক্ষায় বিজ্ঞান বিভাগ থেকে উত্তীর্ণ হতে হবে। এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ (GPA) ন্যূনতম ৯.০০ হতে হবে (উপজাতি শিক্ষার্থীদের ক্ষেত্রে ন্যূনতম ৮.০০)। কোনো পরীক্ষায় জিপিএ ৩.৫০ এর নিচে আবেদন গ্রহণযোগ্য নয়। এছাড়া এইচএসসি জীববিজ্ঞানে (Biology) নূন্যতম জিপিএ ৪.০০ (GPA 4.00) থাকতে হবে।"
    },
    {
      q: "সেকেন্ড টাইম পরীক্ষার্থীদের ক্ষেত্রে কি কোনো নম্বর কাটা যাবে?",
      a: "হ্যাঁ, সরকারি নিয়ম অনুযায়ী দ্বিতীয়বার অংশগ্রহণকারী (Second Timer) শিক্ষার্থীদের ক্ষেত্রে মোট প্রাপ্ত নম্বর থেকে ৫.০০ নম্বর কেটে মেধা তালিকা তৈরি করা হবে। আর যদি কোনো শিক্ষার্থী পূর্বের বছর কোনো সরকারি মেডিকেল বা ডেন্টালে ভর্তি থাকে, তবে তার ক্ষেত্রে ৭.৫০ বা ৮.০০ নম্বর কাটা যাবে।"
    },
    {
      q: "পরীক্ষার মানবণ্টন এবং পাস নম্বর কত?",
      a: "লিখিত পরীক্ষা মোট ১০০ নম্বরের MCQ পদ্ধতিতে ১ ঘণ্টায় অনুষ্ঠিত হয়। বিষয়ভিত্তিক বণ্টন: জীববিজ্ঞান ৩০, রসায়ন ২৫, পদার্থবিজ্ঞান ২০, ইংরেজি ১৫ এবং সাধারণ জ্ঞান ১০। প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে। পাস নম্বর হচ্ছে ৪০ নম্বর।"
    },
    {
      q: "জিপিএ-এর ওপর কত নম্বর থাকে এবং মেধা তালিকা কীভাবে প্রস্তুত হয়?",
      a: "মোট ৩০০ নম্বরের ওপর মেধা তালিকা হয়। এর মধ্যে ১০০ নম্বর লিখিত পরীক্ষার, আর ২০০ নম্বর জিপিএ-এর ভিত্তিতে: এসএসসি জিপিএ-কে ১৫ দিয়ে গুণ (সর্বোচ্চ ৭৫) এবং এইচএসসি জিপিএ-কে ২৫ দিয়ে গুণ (সর্বোচ্চ ১২৫)।"
    },
    {
      q: "আবেদন ফি কত এবং কীভাবে পরিশোধ করতে হয়?",
      a: "স্বাস্থ্য শিক্ষা অধিদপ্তরের নির্ধারিত অফিশিয়াল আবেদন ফি 1,000/- (এক হাজার) টাকা। এটি টেলিটক প্রিপেইড মোবাইলের এসএমএস বা অনলাইনের মাধ্যমে পরিশোধ করতে হয়।"
    },
    {
      q: "কাজী স্টোর থেকে ঘরে বসেই কি হোয়াটসঅ্যাপে আবেদন সম্পন্ন করা যায়?",
      a: "অবশ্যই! আপনার এসএসসি ও এইচএসসি পরীক্ষার তথ্য, ছবি ও স্বাক্ষরের স্পষ্ট ছবি আমাদের হোয়াটসঅ্যাপ নম্বরে পাঠিয়ে দিলেই অভিজ্ঞ অপারেটরের মাধ্যমে সম্পূর্ণ নির্ভুলভাবে অনলাইনে আবেদন ফরম পূরণ, সঠিক নিয়মে চয়েস লিস্ট প্রদান এবং টেলিটক ফি জমা দিয়ে রসিদ ও কনফার্মেশন পাঠিয়ে দেওয়া হবে।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn selection:bg-teal-500/30">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-teal-600/15 via-blue-900/10 to-[#0F172A] opacity-90"></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 py-3 mb-4 backdrop-blur-md bg-[#0F172A]/70 sticky top-0 z-20 border-b border-slate-800 rounded-xl px-4">
          <button onClick={() => navigate(-1)} className="hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> <span>ফিরে যান</span>
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">মেডিকেল ভর্তি পরীক্ষা ২৬-২৭</span>
        </nav>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8 pb-16"
        >
          {/* Official Notice Banner Card */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700/70 pb-6 mb-6">
              <div className="text-center sm:text-left flex items-start gap-4">
                <div className="p-3.5 bg-teal-500/15 border border-teal-400/30 rounded-2xl text-teal-300 shrink-0 hidden sm:block">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-2 border border-teal-500/30">
                    <HeartPulse className="w-3.5 h-3.5" />
                    <span>স্বাস্থ্য শিক্ষা অধিদপ্তর (DGME) ও স্বাস্থ্য মন্ত্রণালয়</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    মেডিকেল ভর্তি পরীক্ষা ২৬-২৭
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-teal-400 font-en mt-1">
                    Bachelor of Medicine and Bachelor of Surgery (MBBS) Admission
                  </p>
                  <p className="text-sm text-slate-300 mt-1">
                    সরকারি ও বেসরকারি মেডিকেল কলেজসমূহে এমবিবিএস কোর্সে ভর্তি সংক্রান্ত পূর্ণাঙ্গ নির্দেশিকা
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-2 w-full sm:w-auto shrink-0 shadow-inner">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>কর্তৃপক্ষ: <strong className="text-white">স্বাস্থ্য শিক্ষা অধিদপ্তর</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                  <a href="http://dgme.teletalk.com.bd" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 underline font-en font-medium">
                    dgme.teletalk.com.bd
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>টেলিটক হেল্পলাইন: <span className="font-en">121 / 01500-121121</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>পরীক্ষার সময়: <strong className="text-white">১ ঘণ্টা (সকাল ১০টা - ১১টা)</strong></span>
                </div>
              </div>
            </div>

            {/* Highlighted Notice Description */}
            <div className="bg-teal-950/40 border border-teal-500/40 rounded-2xl p-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-teal-300 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  আবেদন ও ভর্তির নির্দেশিকা
                </h2>
                <span className="text-xs font-semibold px-3 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full">
                  পাস নম্বর: ৪০ | নেগেটিভ মার্কিং: ০.২৫
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                স্বাস্থ্য শিক্ষা অধিদপ্তরের অধীনে দেশের সকল সরকারি ও বেসরকারি মেডিকেল কলেজে ২৬-২৭ শিক্ষাবর্ষে এমবিবিএস (MBBS) কোর্সে ভর্তিচ্ছু শিক্ষার্থীদের অনলাইনে আবেদন সম্পন্ন করতে হবে। 
                <strong className="text-teal-300"> কাজী স্টোর</strong> থেকে অভিজ্ঞ অপারেটরের মাধ্যমে অত্যন্ত সতর্কতার সাথে সঠিক মেডিকেল কলেজ পছন্দক্রম (Choice List), ছবি ও ডিজিটাল স্বাক্ষর রিসাইজ এবং টেলিটক ফি পরিশোধ সহ পূর্ণাঙ্গ আবেদন নিশ্চিত করা হয়।
              </p>
            </div>

            {/* Quick Action CTA */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-teal-500/25 active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>কাজী স্টোরে ঘরে বসেই আবেদন করুন</span>
              </a>
              <a 
                href="http://dgme.teletalk.com.bd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-5 py-3.5 rounded-xl font-medium text-sm sm:text-base transition-colors text-center"
              >
                <ExternalLink className="w-4 h-4 text-teal-400" />
                <span>DGME অফিসিয়াল পোর্টাল</span>
              </a>
            </div>
          </div>

          {/* Section 1: আবেদনের যোগ্যতা ও শর্তাবলী (Eligibility Checklist) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2 border-b border-slate-700 pb-4">
              <Award className="w-6 h-6 text-teal-400" />
              যোগ্যতা ও শর্তাবলী
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              সরকারি নিয়ম অনুযায়ী এমবিবিএস ভর্তি পরীক্ষায় অংশ নিতে প্রার্থীকে নিচের শর্তগুলো অবশ্যই পূরণ করতে হবে:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-700/50 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ১
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">বিজ্ঞান বিভাগে উত্তীর্ণ</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    এসএসসি বা সমমান এবং এইচএসসি বা সমমান উভয় পরীক্ষায় বিজ্ঞান বিভাগ থেকে উত্তীর্ণ হতে হবে।
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/50 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ২
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">মোট ন্যূনতম জিপিএ ৯.০০ (GPA 9.00)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    এসএসসি ও এইচএসসি মিলিয়ে মোট জিপিএ নূন্যতম <strong className="text-teal-300">৯.০০</strong> হতে হবে। তবে সকল উপজাতি ও পার্বত্য জেলা শিক্ষার্থীদের ক্ষেত্রে মোট জিপিএ নূন্যতম <strong className="text-teal-300">৮.০০</strong> হতে হবে।
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/50 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ৩
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">প্রতিটি পরীক্ষায় ন্যূনতম জিপিএ ৩.৫০</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    এসএসসি বা এইচএসসি কোনো একক পরীক্ষাতেই জিপিএ <strong className="text-amber-300">৩.৫০ এর নিচে</strong> থাকা যাবে না।
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-700/50 p-4 sm:p-5 rounded-2xl flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-sm mt-0.5">
                  ৪
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">জীববিজ্ঞানে জিপিএ ৪.০০ (Biology GPA 4.00)</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    এইচএসসি বা সমমান পরীক্ষায় জীববিজ্ঞানে (Biology) নূন্যতম গ্রেড পয়েন্ট <strong className="text-teal-300">৪.০০</strong> থাকা বাধ্যতামূলক।
                  </p>
                </div>
              </div>
            </div>

            {/* Note on second timers */}
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm text-slate-200 leading-relaxed">
                <strong className="text-amber-300 font-bold">সেকেন্ড টাইম পরীক্ষার্থীদের নম্বর কর্তন: </strong>
                পূর্ববর্তী শিক্ষাবর্ষের শিক্ষার্থীদের ক্ষেত্রে মোট প্রাপ্ত নম্বর থেকে <strong className="text-white">৫.০০ নম্বর</strong> কেটে মেধা তালিকা নির্ধারণ করা হবে। আর যদি কোনো শিক্ষার্থী সরকারি মেডিকেল কলেজে পূর্বেই ভর্তি থাকে তবে তার ক্ষেত্রে <strong className="text-white">৭.৫০ নম্বর</strong> কাটা যাবে।
              </div>
            </div>
          </div>

          {/* Section 2: মানবণ্টন ও পরীক্ষার গঠন (১০০ নম্বর MCQ + ২০০ নম্বর GPA) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-6 h-6 text-teal-400" />
                  মানবণ্টন
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  মোট ১০০ টি বহুনির্বাচনী প্রশ্ন (MCQ), সময়: ১ ঘণ্টা (৬০ মিনিট)
                </p>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-700 text-xs text-slate-300">
                <span>ভুল উত্তরের জন্য কাটা:</span>
                <strong className="text-rose-400 font-bn font-bold text-sm">-০.২৫</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
              {subjectMarks.map((sub, idx) => (
                <div 
                  key={idx}
                  className={`bg-gradient-to-b ${sub.color} p-4 rounded-2xl border text-center flex flex-col justify-between`}
                >
                  <span className="text-slate-200 text-xs sm:text-sm font-medium font-bn">{sub.subject}</span>
                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-white font-bn tracking-normal">{sub.marks}</span>
                    <span className="text-xs text-slate-300 font-bn font-medium">নম্বর</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-en">MCQ Marks</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: আবেদনের জন্য প্রয়োজনীয় কাগজপত্র (Checklist) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2 border-b border-slate-700 pb-4">
              <CheckCircle2 className="w-6 h-6 text-teal-400" />
              প্রয়োজনীয় কাগজপত্র
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              কাজী স্টোরে আসার সময় অথবা হোয়াটসঅ্যাপে পাঠানোর জন্য নিচের তথ্য ও ডকুমেন্টস প্রস্তুত রাখুন:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {requiredDocs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl hover:border-teal-500/30 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base leading-snug">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: আবেদন ফি ও সার্ভিস চার্জ ক্যালকুলেটর (Fee Calculator) */}
          <div className="bg-slate-800/80 border border-slate-600/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-6 h-6 text-teal-400" />
                  <h3 className="text-2xl font-bold text-white">আবেদন ফি ও সার্ভিস চার্জ</h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  অফিসিয়াল টেলিটক ফি ও প্রয়োজনীয় সেবা নির্বাচন করে মোট খরচ দেখে নিন:
                </p>

                <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.officialFee}
                      onChange={(e) => setFees({...fees, officialFee: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      স্বাস্থ্য শিক্ষা অধিদপ্তর অফিসিয়াল আবেদন ফি
                    </span>
                    <span className="text-teal-400 font-bold text-sm sm:text-base font-bn">১,০০০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.teletalkCharge}
                      onChange={(e) => setFees({...fees, teletalkCharge: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      টেলিটক ট্রানজেকশন ও এসএমএস চার্জ
                    </span>
                    <span className="text-teal-400 font-bold text-sm sm:text-base font-bn">২০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.kaziServiceFee}
                      onChange={(e) => setFees({...fees, kaziServiceFee: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      কাজী স্টোর ১০০% নির্ভুল ফরম পূরণ ও চয়েস লিস্ট প্রদান
                    </span>
                    <span className="text-teal-400 font-bold text-sm sm:text-base font-bn">১০০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.colorAdmitPrint}
                      onChange={(e) => setFees({...fees, colorAdmitPrint: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      প্রবেশপত্র (Admit Card) কালার ফটো প্রিন্ট
                    </span>
                    <span className="text-teal-400 font-bold text-sm sm:text-base font-bn">৩০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.lamination}
                      onChange={(e) => setFees({...fees, lamination: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      ওয়াটারপ্রুফ হার্ড প্লাস্টিক লেমিনেশন
                    </span>
                    <span className="text-teal-400 font-bold text-sm sm:text-base font-bn">২০ টাকা</span>
                  </label>
                </div>
              </div>

              {/* Total Calculation Display */}
              <div className="w-full lg:w-72 bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-teal-500/30 text-center flex flex-col justify-center items-center shadow-inner">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">মোট আনুমানিক খরচ</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-teal-300 font-bn mb-2">
                  {calculateTotalFees()} <span className="text-xl text-slate-400">টাকা</span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  নির্ভুল অনলাইন আবেদন কপি, চয়েস লিস্ট, ফি পেমেন্ট স্লিপ ও প্রিন্ট সহ
                </p>

                <a 
                  href="https://wa.me/message/L2XAYVWBE5RIJ1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>এখনই আবেদন করুন</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 7: গুরুত্বপূর্ণ প্রশ্নোত্তর (FAQ Accordion) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2 border-b border-slate-700 pb-4">
              <BookOpen className="w-6 h-6 text-teal-400" />
              মেডিকেল ভর্তি সংক্রান্ত সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              মেডিকেল ভর্তি পরীক্ষা সম্পর্কিত সর্বাধিক জিজ্ঞাসিত প্রশ্ন ও সঠিক উত্তর:
            </p>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-slate-700/80 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-slate-200 text-sm sm:text-base flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-teal-500/10 text-teal-400 text-xs flex items-center justify-center shrink-0 font-bold">
                          ?
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 text-teal-400' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-4 sm:p-5 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 bg-slate-900/80">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 8: কাজী স্টোর হেল্প ও সার্ভিস অঙ্গীকার */}
          <div className="bg-gradient-to-r from-teal-900/30 via-slate-850 to-blue-900/30 border border-teal-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              কাজী স্টোরেই কেন মেডিকেল ভর্তি আবেদন করবেন?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              মেডিকেল ভর্তি আবেদন একটি অত্যন্ত সংবেদনশীল প্রক্রিয়া। সামান্য ভুলের কারণে প্রবেশপত্র বা মেধা তালিকা বাতিল হতে পারে। কাজী স্টোর বিগত বহু বছর ধরে শত শত শিক্ষার্থীর মেডিকেল ভর্তি আবেদন শতভাগ নির্ভরযোগ্যতা ও দায়িত্বের সাথে সম্পন্ন করে আসছে।
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>হোয়াটসঅ্যাপে যোগাযোগ করুন</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
