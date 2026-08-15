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

          <div className="flex flex-col gap-6">
            {/* রেজাল্ট দেখার নিয়ম */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-bn">SSC রেজাল্ট দেখার নিয়ম</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-700/30">
                  <h4 className="text-lg font-bold text-blue-300 font-bn mb-4">১) অনলাইন/ওয়েবসাইট থেকে:</h4>
                  <ul className="space-y-3 font-bn text-[15px] md:text-base text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span><a href="https://eduboardresults.gov.bd/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline break-all">https://eduboardresults.gov.bd/</a> ওয়েবসাইটে যান।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span><strong>Board:</strong> আপনার নিজ নিজ শিক্ষা বোর্ড নির্বাচন করুন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span><strong>Roll:</strong> আপনার ৬ ডিজিটের রোল নাম্বার দিন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span><strong>Reg: No:</strong> রেজিস্ট্রেশন নম্বর সঠিকভাবে লিখুন।</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span>স্ক্রিনে Captcha টি বসিয়ে Submit বাটনে ক্লিক করুন।</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/40 p-5 rounded-xl border border-slate-700/30">
                  <h4 className="text-lg font-bold text-emerald-300 font-bn mb-4">২) মোবাইল SMS-এর মাধ্যমে:</h4>
                  <p className="font-bn text-[15px] md:text-base text-slate-300 mb-3">যেকোনো মোবাইল অপারেটরের মেসেজ অপশনে গিয়ে টাইপ করুন:</p>
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 font-en text-sm text-emerald-400 mb-3 overflow-x-auto whitespace-nowrap">
                    SSC &lt;Space&gt; [1st 3 letters of Board] &lt;Space&gt; [Roll] &lt;Space&gt; [Year]
                  </div>
                  <p className="font-bn text-[15px] md:text-base text-slate-300 mb-2">এবং পাঠিয়ে দিন <strong className="text-white">16222</strong> নম্বরে।</p>
                  <p className="font-bn text-sm text-slate-400 mt-3 pt-3 border-t border-slate-700/50">উদাহরণ: SSC DHA 123456 2026</p>
                </div>
              </div>
            </div>

            {/* বোর্ড চ্যালেঞ্জ */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white font-bn">বোর্ড চ্যালেঞ্জ</h3>
              </div>
              
              <p className="font-bn text-[15px] md:text-base text-slate-300 leading-relaxed mb-6">
                বোর্ড চ্যালেঞ্জ করার ক্ষেত্রে ঢালাওভাবে সব বিষয়ে আবেদন না করে নির্দিষ্ট কিছু বিষয় বেছে নেওয়া উচিত। কারণ বোর্ড চ্যালেঞ্জে মূলত নম্বর সঠিকভাবে যোগ করা হয়েছে কি না, কভার পেজে নম্বর তুলতে ভুল হয়েছে কি না এবং কোনো উত্তরের নম্বর বাদ পড়েছে কি না—এগুলো চেক করা হয়। নিচে বিষয় নির্বাচন করার প্রধান মূলনীতিগুলো তুলে ধরা হলো:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-300 font-bn mb-4">১. যেসব বিষয় সিলেক্ট করা সবচেয়ে বুদ্ধিমানের কাজ</h4>
                  <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">১-২ নম্বরের জন্য গ্রেড মিস হওয়া বিষয় (Borderline Marks):</strong> আপনার মার্কশিট দেখার পর যদি দেখেন কোনো বিষয়ে ৭৮ বা ৭৯ পেয়ে A পেয়েছেন (১-২ নম্বরের জন্য A+ হাতছাড়া হয়েছে), কিংবা ৫৮-৫৯ পেয়ে B পেয়েছেন—এসব বিষয়ে অবশ্যই আবেদন করবেন। যোগফলে সামান্য ২-১ নম্বরের ভুল থাকলেই আপনার গ্রেড পয়েন্ট সরাসরি বেড়ে যাবে।</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">প্রত্যাশার চেয়ে অপ্রত্যাশিতভাবে কম নম্বর পাওয়া বিষয়:</strong> যে বিষয়ে পরীক্ষা খুব ভালো হয়েছিল এবং আপনি নিশ্চিত ছিলেন ৮০+ বা খুব ভালো নম্বর পাবেন, কিন্তু রেজাল্টে B, C বা D এসেছে—এমন বিষয়ে খাতা পুনঃনিরীক্ষণের আবেদন করা উচিত। অনেক সময় শিক্ষক ভেতরের পাতায় নম্বর দিলেও কভার পেজে তুলতে ভুলে যান।</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">অপ্রত্যাশিত ফেল (Fail) আসা বিষয়:</strong> আপনি যদি নিশ্চিত থাকেন যে অন্তত পাস করার মতো উত্তর লিখে এসেছেন, কিন্তু রেজাল্টে 'F' এসেছে, তবে সেই বিষয়ে অবশ্যই বোর্ড চ্যালেঞ্জ করবেন। কভার পেজে নম্বর ভুল উঠলে বা কোনো পৃষ্ঠা মিস হলে এটি হতে পারে।</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">সৃজনশীল ও বর্ণনাভিত্তিক বিষয় (CQ Heavy Subjects):</strong> যেমন: বাংলা, ইংরেজি, বাংলাদেশ ও বিশ্বপরিচয়, ইসলাম শিক্ষা/ধর্ম শিক্ষা ইত্যাদি। এসব বিষয়গুলোতে প্রচুর পাতার লিখিত উত্তর থাকে, তাই নম্বর গণনায় বা পৃষ্ঠা উল্টানোর সময় শিক্ষকের ভুল হওয়ার সম্ভাবনা অন্যান্য বিষয়ের চেয়ে একটু বেশি থাকে।</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-slate-700/50 pt-6">
                  <h4 className="text-lg font-bold text-orange-300 font-bn mb-4">২. যেসব বিষয়ে আবেদন করার আগে ভাববেন</h4>
                  <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                      <span><strong className="text-white">শুধু এমসিকিউ (MCQ) কেন্দ্রিক বা প্র্যাকটিক্যাল নির্ভর বিষয়:</strong> এমসিকিউ খাতা যেহেতু ওএমআর (OMR) কম্পিউটারে স্ক্যান করে দেখা হয়, তাই এখানে নম্বর গণনায় ভুল হওয়ার সম্ভাবনা প্রায় শূন্য। তবে কভার পেজে মোট নম্বর তোলার ক্ষেত্রে ভুল হয়ে থাকলে আলাদা কথা।</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                      <span><strong className="text-white">যে বিষয়ের পরীক্ষা আসলেই খারাপ হয়েছে:</strong> "আবেদন করে দেখি, যদি ভাগ্যক্রমে কিছু বাড়ে"—এই ভেবে আবেদন করলে সাধারণত টাকা নষ্ট হয়। কারণ রি-চেকিং মানে পুরো খাতা নতুন করে আবার মূল্যায়ন বা রি-রিডিং করা নয়, কেবল নম্বর গণনা করা।</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 p-5 rounded-xl border border-blue-500/20 mt-6">
                  <p className="font-bn text-[15px] md:text-base text-slate-200 leading-relaxed">
                    <strong className="text-blue-300 text-lg">আমার পরামর্শ:</strong> আপনার মার্কশিট পর্যবেক্ষণ করে যেসব বিষয়ে ১-৩ নম্বর বাড়লেই গ্রেড পরিবর্তন সম্ভব এবং যেসব বিষয়ে পরীক্ষার ফলাফলে বড় ধরনের অসংগতি মনে হচ্ছে—শুধুমাত্র সেই বিষয়গুলো সিলেক্ট করুন।
                  </p>
                </div>
              </div>
            </div>

            {/* যা যা লাগবে */}
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white font-bn mb-5">বোর্ড চ্যালেঞ্জ করতে যা যা লাগবে</h3>
              <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold font-bn text-sm">১</div>
                  <span>রোল নাম্বার এবং রেজিষ্টেশন নাম্বার।</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold font-bn text-sm">২</div>
                  <span>সচল একটা মোবাইল নাম্বার।</span>
                </li>
              </ul>
            </div>

            {/* ফি ও ফলাফল */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white font-bn mb-3">বোর্ড চ্যালেঞ্জ করার ফি</h3>
                <p className="font-bn text-[15px] md:text-base text-slate-300 mb-4">প্রতি সাবজেক্ট জন্য: ১৫০ টাকা + MFS সার্ভিস চার্জ + আমার সার্ভিস চার্জ</p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-center">
                  <span className="font-bn text-xl md:text-2xl font-bold text-emerald-400">১৫০ + ১.৫ + ৫০ = ২০০ টাকা মাত্র</span>
                </div>
              </div>
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-xl flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white font-bn mb-3">বোর্ড চ্যালেঞ্জ ফলাফল</h3>
                <p className="font-bn text-[15px] md:text-base text-slate-300 leading-relaxed mb-5">
                  SSC ফলাফল প্রকাশের পরবর্তী <strong className="text-white">৭ দিন</strong> ফল পুনঃনিরীক্ষণের আবেদন চলবে এবং SSC ফলাফল প্রকাশের <strong className="text-white">৩০ দিন</strong> পর পুনঃনিরীক্ষণের ফল প্রকাশিত হবে।
                </p>
                <div className="mt-auto">
                  <a 
                    href="https://wa.me/message/L2XAYVWBE5RIJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 px-6 py-2.5 rounded-xl text-[15px] md:text-base font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                  >
                    যোগাযোগ
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
