import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2, ChevronDown, Calculator, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

export default function CollegeAdmissionDetails() {
  const navigate = useNavigate();
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [fees, setFees] = useState({
    college: false,
    application: false,
    colorPrint: false,
    bwPrint: false,
  });

  const calculateTotal = () => {
    let total = 0;
    if (fees.college) total += 220;
    if (fees.application) total += 70;
    if (fees.colorPrint) total += 10;
    if (fees.bwPrint) total += 5;
    return total;
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const groups = [
    {
      title: "১. বিজ্ঞান শাখা (Science Group)",
      desc: "বিজ্ঞান নিয়ে পড়ার স্বপ্ন যাদের, তাদের জন্য প্রতিযোগিতা তুলনামূলক বেশি থাকে।",
      eligible: "শুধুমাত্র এসএসসি-তে বিজ্ঞান শাখা থেকে উত্তীর্ণ শিক্ষার্থীরাই একাদশ শ্রেণিতে বিজ্ঞান শাখার জন্য আবেদন করতে পারবে।",
      tips: "প্রথম সারির কলেজগুলোতে বিজ্ঞান শাখায় ভর্তির জন্য সাধারণত জিপিএ ৫.০০ (GPA 5.00) প্রয়োজন হয়। তাই নিজের প্রাপ্ত জিপিএ-র সাথে সামঞ্জস্য রেখে বাস্তবসম্মত কলেজ লিস্ট তৈরি করতে হবে।",
      career: "ইঞ্জিনিয়ারিং, মেডিকেল, আইটি বা গবেষণায় ক্যারিয়ার গড়তে চাইলে বিজ্ঞান শাখাই একমাত্র পথ।"
    },
    {
      title: "২. ব্যবসায় শিক্ষা শাখা (Business Studies Group)",
      desc: "বাণিজ্যিক বা কর্পোরেট খাতে যারা নিজেদের প্রতিষ্ঠিত করতে চায়, তাদের জন্য এটি উপযুক্ত।",
      eligible: "এসএসসি-তে ব্যবসায় শিক্ষা শাখা থেকে উত্তীর্ণ শিক্ষার্থীরা তো বটেই, বিজ্ঞান শাখা থেকে উত্তীর্ণ শিক্ষার্থীরাও চাইলে গ্রুপ পরিবর্তন করে ব্যবসায় শিক্ষা শাখায় আবেদন করতে পারবে।",
      tips: "কমার্সের জন্য বিশেষায়িত বা স্বনামধন্য কলেজগুলোকে পছন্দক্রমের শুরুতে রাখা উচিত। বিজ্ঞান বিভাগের তুলনায় এখানে কিছুটা কম জিপিএ-তেও ভালো কলেজে চান্স পাওয়ার সুযোগ থাকে।",
      career: "চার্টার্ড একাউন্ট্যান্ট (CA), ব্যাংকিং, ফিন্যান্স, মার্কেটিং বা উদ্যোক্তা হওয়ার জন্য এই গ্রুপটি সেরা।"
    },
    {
      title: "৩. মানবিক শাখা (Humanities Group)",
      desc: "সমাজ, রাষ্ট্র ও আইন নিয়ে যাদের আগ্রহ, মানবিক শাখা তাদের জন্য চমৎকার একটি ক্ষেত্র।",
      eligible: "বিজ্ঞান, ব্যবসায় শিক্ষা এবং মানবিক—এই তিন শাখার যেকোনো শিক্ষার্থীই একাদশ শ্রেণিতে মানবিক শাখায় আবেদন করতে পারবে।",
      tips: "তুলনামূলক কম জিপিএ প্রাপ্ত শিক্ষার্থীদের জন্য মানবিকের মাধ্যমে ভালো ও নামকরা কলেজে ভর্তি হওয়ার দারুণ সুযোগ থাকে। তবে ভালো কলেজগুলোতে আসন সংখ্যা দ্রুত পূরণ হয়ে যায়, তাই ভেবেচিন্তে চয়েস লিস্ট করতে হবে।",
      career: "আইন (Law), সিভিল সার্ভিস (BCS), সাংবাদিকতা, অর্থনীতি, সমাজবিজ্ঞান বা শিক্ষকতায় যুক্ত হওয়ার জন্য এই শাখা অত্যন্ত সহায়ক।"
    }
  ];

  const faqs = [
    {
      q: "আমি কি বিজ্ঞান বিভাগ (Science) থেকে মানবিক (Humanities) বা ব্যবসায় শিক্ষায় (Business Studies) ভর্তি হতে পারব?",
      a: "হ্যাঁ, পারবেন। বিজ্ঞান বিভাগের শিক্ষার্থীরা চাইলে গ্রুপ পরিবর্তন করে মানবিক বা ব্যবসায় শিক্ষা শাখায় আবেদন করতে পারবে। একইভাবে, ব্যবসায় শিক্ষা শাখার শিক্ষার্থীরা মানবিকে যেতে পারবে। তবে মানবিক শাখার শিক্ষার্থীরা বিজ্ঞান বা ব্যবসায় শিক্ষা শাখায় এবং ব্যবসায় শিক্ষার শিক্ষার্থীরা বিজ্ঞান শাখায় আবেদন করতে পারবে না।"
    },
    {
      q: "অনলাইনে আবেদনের ফি কীভাবে জমা দেওয়া যায়?",
      a: "আবেদন ফি ২২০ টাকা। বিকাশ, নগদ, রকেট, উপায় মাধ্যমে ফি জমা দেয়া যাবে।"
    },
    {
      q: "অনলাইনে আবেদন করার পর কি কলেজ পছন্দক্রম (Choice List) পরিবর্তন করা যায়?",
      a: "হ্যাঁ, যায়। প্রথম পর্যায়ে আবেদনের নির্দিষ্ট সময়সীমা শেষ হওয়ার আগ পর্যন্ত আপনি সর্বোচ্চ ৫ বার আপনার আবেদনের পছন্দক্রম (Choice List) পরিবর্তন বা সংশোধন করতে পারবেন।"
    },
    {
      q: "প্রথম ধাপে কোনো কলেজে ভর্তির জন্য নির্বাচিত না হলে কী করণীয়?",
      a: "চিন্তার কোনো কারণ নেই। প্রথম মেধাতালিকায় কোনো কলেজ না পেলে, দ্বিতীয় ও তৃতীয় ধাপে পুনরায় নতুন করে কলেজ পছন্দক্রম দিয়ে আবেদন করার সুযোগ থাকে। এর জন্য নতুন করে কোনো আবেদন ফি দিতে হয় না।"
    },
    {
      q: "অটো-মাইগ্রেশন (Auto-Migration) প্রক্রিয়াটি কীভাবে কাজ করে?",
      a: "আপনি যদি আপনার ২য় বা ৩য় পছন্দের কলেজে চান্স পান এবং ভর্তি নিশ্চয়ন (Confirmation) করেন, তবে আপনার অটো-মাইগ্রেশন চালু হয়ে যাবে। এরপর আসন ফাঁকা থাকা সাপেক্ষে মেধাক্রম অনুযায়ী আপনার পছন্দক্রমের উপরের দিকের কলেজে (যেমন: ১ম পছন্দ) যাওয়ার সুযোগ তৈরি হবে। তবে পছন্দক্রমের নিচের দিকের কলেজে যাওয়ার কোনো সুযোগ নেই।"
    },
    {
      q: "ভর্তি নিশ্চয়ন (Confirmation) কী এবং এটি কেন করতে হয়?",
      a: "মেধাতালিকায় কোনো কলেজে ভর্তির সুযোগ পেলে, নির্দিষ্ট সময়ের মধ্যে ৩৩৫ টাকা (বোর্ড অনুযায়ী কিছুটা পরিবর্তন হতে পারে) ফি জমা দিয়ে আসনটি নিজের জন্য কনফার্ম করতে হয়। নির্দিষ্ট সময়ের মধ্যে নিশ্চয়ন না করলে আপনার আবেদনটি বাতিল হয়ে যাবে এবং পুনরায় আবেদন করতে হবে।"
    },
    {
      q: "কোটা সুবিধা (Quota) কীভাবে কাজ করে?",
      a: "মুক্তিযোদ্ধা কোটা, শিক্ষা মন্ত্রণালয়/বোর্ডের কর্মকর্তা-কর্মচারী কোটা, কিংবা প্রতিবন্ধী কোটা থাকলে আবেদনের সময়ই নির্দিষ্ট অপশনটি নির্বাচন করতে হবে। ভর্তির সময় অবশ্যই কোটার স্বপক্ষে উপযুক্ত প্রামাণিক কাগজপত্র কলেজে প্রদর্শন করতে হবে।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 to-[#0F172A] opacity-90"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-bn backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
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
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-12 flex-1 font-bn"
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              একাদশ শ্রেণিতে ভর্তি আবেদন
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl whitespace-pre-line drop-shadow">
              এসএসসি (SSC) পরীক্ষায় সফলতার সাথে উত্তীর্ণ সকল শিক্ষার্থীকে জানাই আন্তরিক অভিনন্দন! জীবনের এই নতুন অধ্যায়ে পদার্পণ করার মুহূর্তে সঠিক কলেজ এবং উপযুক্ত গ্রুপ (বিভাগ) নির্বাচন করা অত্যন্ত গুরুত্বপূর্ণ।
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">আবেদন প্রক্রিয়া</h3>
            <p className="text-slate-300 mb-4">যেকোনো গ্রুপের শিক্ষার্থীদের অনলাইনে আবেদনের মূল নিয়মাবলি একই। বাংলাদেশ শিক্ষা বোর্ডের নির্ধারিত ওয়েবসাইটের মাধ্যমে আবেদন সম্পন্ন করতে হয়।</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>আবেদন ফি:</strong> ২২০ টাকা</span>
                </div>
                <div className="pl-7">
                  <a 
                    href="https://xiclassadmission.govt.bd/college-list/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg transition-all font-bn"
                  >
                    <ExternalLink className="w-4 h-4" />
                    কলেজ লিস্ট
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>কলেজ পছন্দক্রম:</strong> অনলাইনে আবেদনের সময় নিজের জিপিএ (GPA) বিবেচনা করে ন্যূনতম ৫টি এবং সর্বোচ্চ ১০টি কলেজ পছন্দক্রমে (Choice List) রাখা যাবে।</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-orange-400">সতর্কতা:</strong> পছন্দক্রম দেওয়ার সময় সবচেয়ে পছন্দের কলেজটি ১ নম্বরে রাখতে হবে, কারণ মেধাতালিকা উপরের দিক থেকে বিবেচনা করা হয়।</span>
              </li>
            </ul>
          </div>

          {/* Collapsible Groups */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 drop-shadow">ভর্তির যোগ্যতা ও নির্দেশিকা</h2>
            <p className="text-slate-300 mb-6">এসএসসি-তে যে গ্রুপ ছিল, কলেজে চাইলে সেই গ্রুপ পরিবর্তন করা যায়। নিচে প্রতিটি গ্রুপের বিস্তারিত দেওয়া হলো:</p>
            
            <div className="flex flex-col gap-3">
              {groups.map((group, idx) => (
                <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/40 backdrop-blur-sm">
                  <button 
                    onClick={() => setOpenGroup(openGroup === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-blue-200">{group.title}</h3>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openGroup === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openGroup === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 md:p-5 pt-0 border-t border-slate-700/50 text-slate-300 space-y-3 mt-4">
                          <p>{group.desc}</p>
                          <p><strong>কারা আবেদন করতে পারবে:</strong> {group.eligible}</p>
                          <p><strong>কলেজ নির্বাচন টিপস:</strong> {group.tips}</p>
                          <p><strong>ভবিষ্যৎ ক্যারিয়ার:</strong> {group.career}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-md">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">আবেদন করার জন্য যা যা প্রয়োজন</h3>
            <p className="text-slate-300 mb-4">অনলাইনে আবেদন বা ফি জমা দেওয়ার সময় নিচের তথ্যগুলো হাতের কাছে রাখতে হবে:</p>
            <ul className="space-y-2 text-slate-300 mb-6 ml-4">
              <li>১. এসএসসি (SSC) পরীক্ষার রোল নম্বর।</li>
              <li>২. রেজিস্ট্রেশন নম্বর।</li>
              <li>৩. পাসের সন এবং বোর্ডের নাম।</li>
              <li>৪. শিক্ষার্থী বা অভিভাবকের একটি সচল মোবাইল নম্বর (এই নম্বরেই সিকিউরিটি কোড ও ভর্তির রেজাল্টের এসএমএস আসবে)।</li>
            </ul>
            <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl text-orange-200">
              <strong>জরুরি পরামর্শ:</strong> সার্ভার জটিলতা এড়াতে শেষ দিনের জন্য অপেক্ষা না করে, সময় থাকতে সতর্কতার সাথে আবেদন সম্পন্ন করুন। একবার আবেদন সাবমিট করার পর নির্দিষ্ট সংখ্যক বার পছন্দক্রম পরিবর্তন করা যায়, তবে প্রথমবারেই নির্ভুলভাবে পূরণ করা উত্তম।
            </div>
          </div>

          {/* Fee Calculator */}
          <div className="bg-slate-800/80 border border-slate-600/50 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">ফি ক্যালকুলেটর</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          className="peer sr-only"
                          checked={fees.college}
                          onChange={(e) => setFees({...fees, college: e.target.checked})}
                        />
                        <div className="w-6 h-6 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <span className="text-slate-200 text-lg group-hover:text-white transition-colors flex-1">আবেদন ফি</span>
                      <span className="text-slate-400">২২০ টাকা</span>
                    </label>

                  </div>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="peer sr-only"
                        checked={fees.application}
                        onChange={(e) => setFees({...fees, application: e.target.checked})}
                      />
                      <div className="w-6 h-6 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-slate-200 text-lg group-hover:text-white transition-colors flex-1">সার্ভিস চার্জ</span>
                    <span className="text-slate-400">৭০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="peer sr-only"
                        checked={fees.colorPrint}
                        onChange={(e) => setFees({...fees, colorPrint: e.target.checked})}
                      />
                      <div className="w-6 h-6 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-slate-200 text-lg group-hover:text-white transition-colors flex-1">কালার প্রিন্ট</span>
                    <span className="text-slate-400">১০ টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input 
                        type="checkbox" 
                        className="peer sr-only"
                        checked={fees.bwPrint}
                        onChange={(e) => setFees({...fees, bwPrint: e.target.checked})}
                      />
                      <div className="w-6 h-6 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-slate-200 text-lg group-hover:text-white transition-colors flex-1">সাদাকালো প্রিন্ট</span>
                    <span className="text-slate-400">৫ টাকা</span>
                  </label>
                </div>
              </div>

              <div className="md:w-64 bg-slate-900/50 rounded-xl border border-slate-700/50 p-6 flex flex-col justify-center items-center text-center">
                <span className="text-slate-400 mb-2">সর্বমোট ফি</span>
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  ৳ {calculateTotal()}
                </div>
                <span className="text-sm text-slate-500">আপনার নির্বাচিত সেবাসমূহের যোগফল</span>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 drop-shadow">FAQ</h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/40 backdrop-blur-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-base md:text-lg font-bold text-slate-200 pr-4">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 md:p-5 pt-0 border-t border-slate-700/50 text-slate-300 leading-relaxed mt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
