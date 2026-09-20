import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, MessageCircle, 
  Phone, Sparkles, ShieldCheck, Zap, Award, Gift, HelpCircle,
  CardSim, RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';

export default function GPSimDetails() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: "GP 4G/5G রেডি প্রিপেইড সিম",
      tag: "সবচেয়ে জনপ্রিয়",
      price: "২০০ টাকা",
      bonus: "৫ জিবি পর্যন্ত বোনাস ডাটা ও ৫০ মিনিট টকটাইম",
      features: [
        "সরাসরি NID দিয়ে তাৎক্ষণিক বায়োমেট্রিক রেজিস্ট্রেশন",
        "প্রথম রিচার্জে আকর্ষণীয় ক্যাশব্যাক ও ডাটা বোনাস",
        "দেশসেরা হাই-স্পিড ইন্টারনেট ও ক্রিস্টাল ক্লিয়ার কল কোয়ালিটি",
        "MyGP অ্যাপ ব্যবহারের সাথে ফ্রি ডাটা পয়েন্ট"
      ]
    },
    {
      name: "GP স্পেশাল ও ভিআইপি নম্বর কালেকশন",
      tag: "",
      price: "",
      bonus: "পছন্দের লাকি ডিজিট ও সিরিয়াল নম্বর সিলেকশন",
      features: [
        "সহজে মুখস্থ রাখার মতো ভিআইপি ও স্পেশাল নম্বর",
        "ব্যবসায়িক ও ব্যক্তিগত ব্যবহারের জন্য প্রিমিয়াম সিরিজ",
        "কাজী স্টোরে সরাসরি নম্বর দেখে পছন্দ করার সুযোগ",
        "সরকারি নিয়মে দ্রুত সিম অ্যাক্টিভেশন"
      ]
    },
    {
      name: "GP সিম রিপ্লেসমেন্ট ও ৪জি কনভার্সন",
      tag: "তাৎক্ষণিক সেবা",
      price: "অফিসিয়াল ফি",
      bonus: "হারানো বা নষ্ট সিমের নম্বর অপরিবর্তিত রেখে নতুন সিম",
      features: [
        "হারিয়ে যাওয়া, চুরি হওয়া বা নষ্ট সিম একই নম্বরে তাৎক্ষণিক উত্তোলন",
        "পুরোনো ৩জি সিম বিনামূল্যে দ্রুতগতির ৪জি (4G) তে রূপান্তর",
        "বায়োমেট্রিক ফিঙ্গারপ্রিন্ট যাচাইয়ের মাধ্যমে সম্পূর্ণ নিরাপদ প্রক্রিয়া",
        "মাত্র কয়েক মিনিটের মধ্যে আপনার পুরনো নম্বর সচল"
      ]
    }
  ];

  const offers = [
    {
      title: "প্রথম রিচার্জ স্পেশাল অফার",
      desc: "নতুন সিম চালু করে নির্দিষ্ট পরিমাণ (যেমন ৩৪ টাকা / ৪৭ টাকা / ৯৯ টাকা) রিচার্জ করলেই পেয়ে যাবেন আনলিমিটেড মেয়াদের ডাটা ও টকটাইম বান্ডেল।"
    },
    {
      title: "MyGP অ্যাপ এক্সক্লুসিভ বোনাস",
      desc: "সিম সক্রিয় করার পর MyGP অ্যাপে প্রথমবার লগইন করলে সাথে সাথে ফ্রি ইন্টারনেট ও রিচার্জ ডিসকাউন্ট কুপন।"
    },
    {
      title: "সাশ্রয়ী রেট কাটার সুবিধা",
      desc: "নতুন গ্রাহকদের জন্য বিশেষ কলরেট (১ পয়সা/সেকেন্ড যেকোনো লোকাল নম্বরে ২৪ ঘণ্টা)।"
    }
  ];

  const steps = [
    {
      step: "০১",
      title: "NID ও আঙ্গুলের ছাপ প্রস্তুত রাখুন",
      desc: "যার নামে সিম নিবন্ধিত হবে তাকে সশরীরে কাজী স্টোরে উপস্থিত থাকতে হবে বায়োমেট্রিক ভেরিফিকেশনের জন্য।"
    },
    {
      step: "০২",
      title: "পছন্দের নম্বর নির্বাচন",
      desc: "আমাদের কাছে থাকা প্রচুর গ্রামীনফোন ফ্রেশ নম্বর তালিকা থেকে আপনার পছন্দের নম্বরটি বেছে নিন।"
    },
    {
      step: "০৩",
      title: "তাৎক্ষণিক অ্যাক্টিভেশন",
      desc: "বায়োমেট্রিক যাচাই সম্পন্ন হওয়ার মাত্র ৫ থেকে ১৫ মিনিটের মধ্যে ফুল নেটওয়ার্ক সচল হয়ে যাবে।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 via-sky-600/10 to-[#0F172A] opacity-90"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-en backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <Link to="/service/sim-new" className="hover:text-blue-400 transition-colors">New SIM</Link>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">GP সিম</span>
        </nav>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-10 flex-1"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-slate-700/50 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" /> অফিসিয়াল বায়োমেট্রিক ও সিম রিপ্লেসমেন্ট পয়েন্ট
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                গ্রামীনফোন নতুন সিম ও রিপ্লেসমেন্ট
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                দেশের ১ নম্বর শক্তিশালী নেটওয়ার্কের নতুন গ্রামীনফোন ৪জি/৫জি রেডি সিম এবং হারানো বা নষ্ট সিম রিপ্লেসমেন্ট সেবা কাজী স্টোরে পাওয়া যাচ্ছে। আকর্ষণীয় ওয়েলকাম অফার ও তাৎক্ষণিক বায়োমেট্রিক সুবিধা সহ এখনই চলে আসুন!
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-sky-600/30 active:scale-95 text-center"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>সিম বুকিং ও তথ্যের জন্য যোগাযোগ</span>
              </a>
            </div>
          </div>

          {/* SIM Packages */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <CardSim className="w-6 h-6 text-sky-400" />
              গ্রামীনফোন সিম প্যাকেজ ও রিপ্লেসমেন্ট সেবা
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {packages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 transition-all shadow-xl"
                >
                  <div>
                    {(pkg.tag || pkg.price) && (
                      <div className="flex justify-between items-start gap-2 mb-3">
                        {pkg.tag ? (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                            {pkg.tag}
                          </span>
                        ) : <div />}
                        {pkg.price ? (
                          <span className="text-lg font-bold text-emerald-400 font-bn">
                            {pkg.price}
                          </span>
                        ) : null}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="mb-4 bg-sky-950/40 border border-sky-500/20 p-2.5 rounded-xl text-sky-200 text-sm font-medium flex items-center gap-2">
                      <Gift className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{pkg.bonus}</span>
                    </div>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New SIM Offers & Bonuses */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-sky-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              নতুন সিমের বোনাস ও সুবিধা
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {offers.map((off, idx) => (
                <div key={idx} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                  <h3 className="text-white font-bold text-base mb-1.5 flex items-center gap-2">
                    <Award className="w-4 h-4 text-sky-400 shrink-0" />
                    {off.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {off.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Buy / Steps */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              নতুন সিম ক্রয়ের সহজ ৩টি ধাপ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-2xl relative overflow-hidden">
                  <div className="text-4xl font-black text-sky-500/20 font-en mb-2">
                    {st.step}
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5">
                    {st.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice Box */}
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-5 sm:p-6 text-amber-200">
            <h3 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2 text-amber-300">
              <HelpCircle className="w-5 h-5" />
              জরুরি জ্ঞাতব্য ও সরকারি নিয়মাবলী
            </h3>
            <ul className="text-sm sm:text-base space-y-2 text-amber-200/90 list-disc list-inside">
              <li>একজন ব্যক্তির জাতীয় পরিচয়পত্র (NID) দিয়ে সর্বোচ্চ ১৫টি সিম নিবন্ধন সম্ভব।</li>
              <li>আপনার NID-তে কয়টি সিম রয়েছে যাচাই করতে ডায়াল করুন: <span className="font-en font-bold text-amber-300">*16001#</span></li>
              <li>সিম ক্রয়ের সময় অবশ্যই সিমের মূল গ্রহীতাকে সশরীরে এসে ফিঙ্গারপ্রিন্ট দিতে হবে।</li>
            </ul>
          </div>

          {/* Bottom Action Card */}
          <div className="bg-slate-900 border border-slate-700 p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              আজই চলে আসুন আপনার বিশ্বস্ত প্রতিষ্ঠান কাজী স্টোরে
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              সিম ক্রয়, সিম রিপ্লেসমেন্ট (হারানো সিম উত্তোলন), ৪জি কনভার্সন এবং সকল অপারেটরের ফ্লেক্সিলোড সেবায় আমরা সবসময় আপনার পাশে।
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-base transition-all shadow-lg shadow-emerald-600/30 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>হোয়াটসঅ্যাপে যোগাযোগ</span>
              </a>
              <a 
                href="tel:01700000000"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 px-6 py-3 rounded-xl font-bold text-base transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>সরাসরি কল করুন</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
