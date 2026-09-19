import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ChevronDown, Calculator, 
  ExternalLink, Calendar, Building2, Phone, Mail, Globe, 
  FileText, AlertCircle, BookOpen, Clock, ShieldAlert, Sparkles, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

export default function CollegeAdmissionDetails() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPackageDetailsOpen, setIsPackageDetailsOpen] = useState<boolean>(false);

  // Calculator state
  const [selectedGroupId, setSelectedGroupId] = useState<string>('science');
  const [fees, setFees] = useState({
    collegeAdmission: true,
    bkashCharge: true,
    applicationFee: false,
    admissionPackage: false,
  });

  // Notice Fee Table Data
  const noticeFees = [
    { id: 'science', group: 'বিজ্ঞান (Science)', admissionFee: '৩৬২৮/-', admissionFeeEn: '3628/-', otherFee: '৪০০/-', total: '৪০২৮/-', rawAdmissionFee: 3628, rawTotal: 4028 },
    { id: 'humanities', group: 'মানবিক (Humanities)', admissionFee: '৩২৮৩/-', admissionFeeEn: '3283/-', otherFee: '৪০০/-', total: '৩৬৮৩/-', rawAdmissionFee: 3283, rawTotal: 3683 },
    { id: 'business', group: 'ব্যবসায় শিক্ষা (Business Studies)', admissionFee: '৩২৮৩/-', admissionFeeEn: '3283/-', otherFee: '৪০০/-', total: '৩৬৮৩/-', rawAdmissionFee: 3283, rawTotal: 3683 },
    { id: 'bmt', group: 'বিএমটি (BMT)', admissionFee: '৩২৫৩/-', admissionFeeEn: '3253/-', otherFee: '৪০০/-', total: '৩৬৫৩/-', rawAdmissionFee: 3253, rawTotal: 3653 },
  ];

  const currentGroup = noticeFees.find(item => item.id === selectedGroupId) || noticeFees[0];
  const selectedGroupFee = currentGroup.rawAdmissionFee;
  const bkashChargeAmount = Math.round(selectedGroupFee * 0.02);

  const calculateTotal = () => {
    let total = 0;
    if (fees.collegeAdmission) total += selectedGroupFee;
    if (fees.applicationFee) total += 100;
    if (fees.bkashCharge) total += bkashChargeAmount;
    if (fees.admissionPackage) total += 150;
    return total;
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Required documents
  const requiredDocs = [
    "অনলাইনে পূরণকৃত কলেজ ভর্তি ফরম",
    "অনলাইনে ভর্তি ফি জমাদানের রশিদ",
    "এসএসসি'র মূল মার্কশীট ও ফটোকপি ০৩ কপি",
    "এসএসসি'র মূল প্রশংসাপত্র ও ফটোকপি ০৩ কপি",
    "জন্মনিবন্ধনের ফটোকপি ০১ কপি",
    "পিতা-মাতার জাতীয় পরিচয়পত্র (NID) ফটোকপি ০১ কপি",
    "শিক্ষার্থীর পাসপোর্ট সাইজের ০৪ কপি ছবি",
    "মুক্তিযোদ্ধা ও অন্যান্য কোটার ক্ষেত্রে প্রমাণপত্রের ০১ কপি ফটোকপি"
  ];

  const faqs = [
    {
      q: "ভর্তি কার্যক্রম কত তারিখ পর্যন্ত চলবে?",
      a: "বিজ্ঞপ্তি অনুযায়ী একাদশ শ্রেণির ভর্তি কার্যক্রম আগামী ২০/০৯/২০২৬ তারিখ হতে ২২/০৯/২০২৬ তারিখ পর্যন্ত চলবে।"
    },
    {
      q: "ভর্তি ফি বিকাশের মাধ্যমে কীভাবে জমা দেব?",
      a: "বিকাশ অ্যাপে প্রবেশ করে 'Education Fee' বাটনে ক্লিক করুন। সার্চ বারে 'Firoz Miah Govt College' লিখে বর্তমান মাস সিলেক্ট করুন এবং স্টুডেন্ট আইডি হিসেবে এডমিশন রোল নম্বর দিয়ে নির্ধারিত ফি পরিশোধ করুন। পরবর্তীতে ওয়েবসাইট থেকে রশিদ প্রিন্ট করতে হবে।"
    },
    {
      q: "অনলাইন ফরম পূরণের জন্য ইউজারনেম ও পাসওয়ার্ড কী?",
      a: "https://fmgc.eshiksabd.com/ লিংকে গিয়ে User Name ও Password হিসেবে 'fmgcstudent' দিয়ে লগইন করতে হবে।"
    },
    {
      q: "প্রসপেক্টাস ও আইডি কার্ড ফি (৪০০ টাকা) কোথায় জমা দিতে হবে?",
      a: "ফরম জমার সময় প্রসপেক্টাস, মনোগ্রাম, আইডি কার্ড ও অন্যান্য ফি বাবদ ৪০০/- টাকা কলেজের হিসাব শাখার এমজে আরমান ও নাজমুন নাহার চৈতী'র নিকট রশিদের মাধ্যমে জমা দিতে হবে।"
    },
    {
      q: "কাজী স্টোর থেকে কি ফরম পূরণ ও ফি পরিশোধের সম্পূর্ণ কাজ করে দেওয়া হয়?",
      a: "হ্যাঁ! আমাদের কাজী স্টোরে অভিজ্ঞ অপারেটরের মাধ্যমে সম্পূর্ণ নির্ভুলভাবে অনলাইন ফরম পূরণ, বিকাশ পেমেন্ট ও সকল রঙিন/সাদাকালো প্রিন্ট সুবিধা প্রদান করা হয়।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn selection:bg-blue-500/30">
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/15 via-teal-900/10 to-[#0F172A] opacity-90"></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 py-3 mb-4 backdrop-blur-md bg-[#0F172A]/70 sticky top-0 z-20 border-b border-slate-800 rounded-xl px-4">
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> ফিরে যান
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">একাদশ শ্রেণিতে ভর্তি বিজ্ঞপ্তি (২০২৬-২০২৭)</span>
        </nav>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8 pb-16"
        >
          {/* Official Notice Banner Card */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700/70 pb-6 mb-6">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  ফিরোজ মিয়া সরকারি কলেজ
                </h1>
                <p className="text-sm sm:text-base font-medium text-teal-400 font-en mt-1">Firoz Miah Govt. College</p>
                <p className="text-sm text-slate-300 mt-1">আশুগঞ্জ, ব্রাহ্মণবাড়িয়া। (স্থাপিত: ১৯৯২ খ্রি.)</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-1.5 w-full sm:w-auto shrink-0 shadow-inner">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>EIIN: <strong className="text-white font-en">103295</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>মোবাইল: <span className="font-en">01550-008620</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                  <a href="http://www.fmgc.edu.bd" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 underline font-en">
                    www.fmgc.edu.bd
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-en">fmgc.ashuganj@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left bg-blue-950/40 border border-blue-500/30 rounded-2xl p-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
                  ২০২৬-২০২৭ শিক্ষাবর্ষ একাদশ শ্রেণির ভর্তি বিজ্ঞপ্তি
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                এতদ্বারা অত্র কলেজ উচ্চমাধ্যমিক ও উচ্চমাধ্যমিক (বিএমটি) ২০২৬-২০২৭ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির জন্য নিশ্চায়নকৃত শিক্ষার্থীদের জানানো যাচ্ছে যে, তাদের ভর্তি কার্যক্রম আগামী <strong className="text-emerald-300 underline">২০/০৯/২০২৬</strong> তারিখ হতে <strong className="text-emerald-300 underline">২২/০৯/২০২৬</strong> পর্যন্ত চলবে। অত্র কলেজে ভর্তির জন্য নির্বাচিত শিক্ষার্থীরা অনলাইনে কলেজ ভর্তি ফরম পূরণ করবে ও ভর্তি ফি মোবাইল ব্যাংকিং বিকাশের মাধ্যমে পরিশোধ করে প্রয়োজনীয় কাগজপত্রাদি উক্ত তারিখের মধ্যেই বাধ্যতামূলকভাবে কলেজে জমা দিবে।
              </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-600/25 active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>কাজী স্টোরে ভর্তি ফরম পূরণ সহায়তা</span>
              </a>
            </div>
          </div>



          {/* Section 4: ভর্তির জন্য যেসব কাগজপত্র কলেজে জমা দিতে হবে */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2 border-b border-slate-700 pb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ভর্তির জন্য যেসব কাগজপত্র কলেজে জমা দিতে হবে
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              অনলাইন ফরম পূরণ ও ফি পরিশোধের পর নিম্নলিখিত কাগজপত্রাদিসহ আগামী <strong className="text-emerald-300">২০/০৯/২০২৬ হতে ২২/০৯/২০২৬</strong> তারিখের মধ্যে কলেজে উপস্থিত হয়ে জমা দিতে হবে:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {requiredDocs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base leading-snug">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: ইন্টারেক্টিভ ফি ক্যালকুলেটর (Interactive Cost Calculator) */}
          <div className="bg-slate-800/80 border border-slate-600/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">ভর্তি ফি ও সার্ভিস চার্জ</h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  আপনার নির্বাচিত বিভাগ সিলেক্ট করুন এবং প্রয়োজন অনুযায়ী প্রিন্ট ও সার্ভিস চার্জ যোগ করে মোট খরচ দেখে নিন:
                </p>

                {/* Group Selector for Calculator */}
                <div className="mb-5">
                  <label className="text-xs text-slate-400 block mb-2 font-normal">ভর্তির বিভাগ নির্বাচন করুন:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {noticeFees.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedGroupId(f.id)}
                        className={`p-2.5 rounded-xl border transition-all text-center cursor-pointer ${
                          selectedGroupId === f.id 
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow-md shadow-teal-500/10' 
                            : 'bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="block text-sm font-normal text-slate-200">{f.group.split(' ')[0]}</span>
                        <span className="text-emerald-400 text-xs font-en font-medium mt-0.5 block">{f.rawAdmissionFee}/-</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.collegeAdmission}
                      onChange={(e) => setFees({...fees, collegeAdmission: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      কলেজ ভর্তি ফি ({currentGroup.group.split(' ')[0]})
                    </span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base font-bn">{selectedGroupFee} টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.bkashCharge}
                      onChange={(e) => setFees({...fees, bkashCharge: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      বিকাশ বা পেমেন্ট চার্জ (2%)
                    </span>
                    <span className="text-slate-300 font-bold text-sm sm:text-base font-bn">{bkashChargeAmount} টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.applicationFee}
                      onChange={(e) => setFees({...fees, applicationFee: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      আবেদন ফি
                    </span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base font-bn">100 টাকা</span>
                  </label>

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-3 cursor-pointer group flex-1">
                        <input 
                          type="checkbox" 
                          className="peer sr-only"
                          checked={fees.admissionPackage}
                          onChange={(e) => setFees({...fees, admissionPackage: e.target.checked})}
                        />
                        <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors">
                          এডমিশন প্যাকেজ
                        </span>
                      </label>

                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold text-sm sm:text-base font-bn">150 টাকা</span>
                        <button
                          type="button"
                          onClick={() => setIsPackageDetailsOpen(!isPackageDetailsOpen)}
                          aria-label="প্যাকেজ বিবরণ"
                          title={isPackageDetailsOpen ? 'লুকান' : 'দেখুন'}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer flex items-center justify-center"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPackageDetailsOpen ? 'rotate-180 text-teal-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isPackageDetailsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="w-full mt-2.5 bg-slate-900/90 p-3 sm:p-4 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-300 space-y-2">
                            <div className="space-y-1.5 text-slate-300">
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">আবেদন ফি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">100 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">শিক্ষার্থীর পাসপোর্ট সাইজের ০৪ কপি ছবি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">50 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">পিতা-মাতার জাতীয় পরিচয়পত্র (NID) ফটোকপি ০১ কপি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">10 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">জন্মনিবন্ধনের ফটোকপি ০১ কপি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">5 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">প্রশংসাপত্র ফটোকপি ০৩ কপি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">15 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">মার্কশীট ফটোকপি ০৩ কপি</span>
                                <span className="font-bn text-slate-200 font-medium shrink-0">15 টাকা</span>
                              </p>
                            </div>
                            <p className="text-teal-300 font-semibold pt-1 text-xs leading-relaxed">
                              ※ আলাদা আলাদা করে এই চার্জ প্রয়োজন হবে, কিন্তু প্যাকেজ নিলে ১৫০ টাকা মাত্র।
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Total Display Box */}
              <div className="w-full lg:w-72 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-700/80 p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <span className="text-xs text-slate-400 uppercase tracking-wider mb-2">আনুমানিক সর্বমোট খরচ</span>
                <div className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-2">
                  ৳ {calculateTotal()}
                </div>
                <span className="text-xs text-slate-400 mb-5">ভর্তি ও আবেদন ফি + চার্জ + প্যাকেজ</span>
                
                <a 
                  href="https://wa.me/message/L2XAYVWBE5RIJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm text-center shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-100 shrink-0" />
                  <span>আবেদন করতে যোগাযোগ করুন</span>
                </a>
              </div>
            </div>
          </div>


          {/* Section 6: FAQs */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
              সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 backdrop-blur-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-slate-200 pr-4">{faq.q}</h4>
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
                        <div className="p-4 md:p-5 pt-0 border-t border-slate-700/50 text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
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
