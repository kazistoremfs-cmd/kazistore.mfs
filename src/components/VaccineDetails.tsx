import { ArrowLeft, CheckCircle2, Syringe, Info, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function VaccineDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSymptomsOpen, setIsSymptomsOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedFees, setSelectedFees] = useState<Record<string, boolean>>({
    appFee: true,
    colorPrint: false,
    bwPrint: false
  });
  
  const vaccineData: any = {
    hpv: {
      title: 'HPV টিকা (জরায়ুমুখ ক্যানসার টিকা)',
      description: 'জরায়ুমুখ ক্যানসার প্রতিরোধে বাংলাদেশ সরকার বিনামূল্যে HPV টিকা প্রদান করছে। ১০ থেকে ১৪ বছর বয়সী মেয়েরা এবং ৫ম থেকে ৯ম শ্রেণিতে অধ্যয়নরত ছাত্রীরা এই টিকার জন্য আবেদন করতে পারবে।',
      process: [
        'জন্ম নিবন্ধন সনদ নম্বর (১৭ ডিজিটের) এবং জন্ম তারিখ দিয়ে ভেরিফাই করতে হবে।',
        'ভেরিফিকেশন সফল হলে, আবেদনকারীর অন্যান্য তথ্য (মোবাইল নম্বর, স্কুলের তথ্য ইত্যাদি) প্রদান করতে হবে।',
        'সফল রেজিস্ট্রেশনের পর টিকা কার্ড সংগ্রহ ও প্রিন্ট করতে হবে।',
        'নির্ধারিত টিকাদান কেন্দ্রে গিয়ে টিকা গ্রহণ করতে হবে।'
      ],
      requirements: [
        '১৭ ডিজিটের অনলাইন জন্ম নিবন্ধন সনদ',
        'সচল মোবাইল নম্বর',
        'শিক্ষার্থীদের ক্ষেত্রে স্কুলের নাম ও ক্লাসের তথ্য'
      ],
      fee: {
        amount: '১০০',
        details: 'সরকারি ফি: ফ্রি + আমাদের সার্ভিস ও প্রিন্টিং চার্জ: ১০০ টাকা মাত্র (টিকা কার্ড প্রিন্ট সহ)।'
      },
      faqs: [
        {
          q: 'টিকা কি সম্পূর্ণ বিনামূল্যে?',
          a: 'হ্যাঁ, বাংলাদেশ সরকার এই টিকা সম্পূর্ণ বিনামূল্যে প্রদান করছে। তবে অনলাইন রেজিস্ট্রেশন এবং টিকা কার্ড প্রিন্ট করার জন্য আমাদের সার্ভিস চার্জ প্রযোজ্য।'
        },
        {
          q: 'টিকা কার্ড কি সাথে নিতে হবে?',
          a: 'হ্যাঁ, টিকাদান কেন্দ্রে টিকা গ্রহণের সময় প্রিন্ট করা টিকা কার্ডটি অবশ্যই সাথে নিয়ে যেতে হবে।'
        }
      ]
    },
    cholera: {
      title: 'কলেরা ও টাইফয়েড টিকা',
      description: 'কলেরা একটি তীব্র সংক্রামক রোগ যা ভিব্রিও কলেরি (Vibrio Cholerae) ব্যাক্টেরিয়া দ্বারা সৃষ্ট হয়। এটি প্রধানত দূষিত পানি এবং খাবারের মাধ্যমে ছড়ায়।',
      symptoms: [
        'তীব্র ডায়রিয়া: চালের মতো পাতলা পায়খানা যা খুবই সংক্রামক',
        'বমিভাব ও বমি: রোগের শুরুতে দেখা যায়',
        'তীব্র পানিশূন্যতা: শরীর থেকে দ্রুত পানি বের হয়ে যায়',
        'পেশীতে খিঁচুনি: পানিশূন্যতার কারণে',
        'রক্তচাপ হ্রাস: যা চিকিৎসা না করলে গুরুতর হতে পারে',
        'চোখ ডাবা পড়ে যাওয়া: তীব্র পানিশূন্যতার চিহ্ন'
      ],
      process: [],
      requirements: [
        'আপনার জন্ম নিবন্ধন অথবা NID কার্ড',
        'আপনার সচল মোবাইল নাম্বার'
      ],
      fee: {
        isInteractive: true,
        options: [
          { id: 'appFee', label: 'আবেদন ফি', price: 20 },
          { id: 'colorPrint', label: 'কালার প্রিন্ট', price: 10 },
          { id: 'bwPrint', label: 'সাদাকালো প্রিন্ট', price: 5 }
        ]
      },
      faqs: [
        {
          q: 'কলেরা কী?',
          a: 'Vibrio Cholerae ব্যাকটেরিয়া দ্বারা সৃষ্ট একটি সংক্রামক রোগ যা প্রচুর ডায়রিয়া এবং বমির কারণ হয়। দ্রুত চিকিৎসা এবং পুনর্জলীকরণে রোগী সুস্থ হয়।'
        },
        {
          q: 'কলেরা কীভাবে ছড়ায়?',
          a: 'দূষিত পানি এবং খাবারের মাধ্যমে। নিরাপদ পানির ব্যবহার, হাত ধোওয়া এবং খাবার ঢেকে রাখা প্রতিরোধের মূল চাবিকাঠি।'
        },
        {
          q: 'ডোজ সংখ্যা কয়টি এবং কত দিন ব্যবধান ব্যবহার করা লাগবে?',
          a: 'দুটি ডোজ প্রয়োজন, যার মধ্যে ২-৬ সপ্তাহের ব্যবধান থাকবে।'
        },
        {
          q: 'কে টিকা নিতে পারবে?',
          a: '১ বছর বা তার বেশি বয়সী সকল ব্যক্তি নিতে পারবে।'
        },
        {
          q: 'কে টিকা নিতে পারবে না?',
          a: 'ভ্যাকসিনের উপাদানে গুরুতর অ্যালার্জি আছে এমন ব্যক্তি, ১ বছরের কম বয়সী শিশু, গর্ভবতী নারী এবং গুরুতর অসুস্থ ব্যক্তি।'
        },
        {
          q: 'দুগ্ধদানকারী মা এবং যাদের পূর্ববর্তী সংক্রমণ ছিলো তারা কি নিতে পারবে?',
          a: 'হ্যাঁ, দুগ্ধদানকারী মায়েরা টিকা নিতে পারবে। পূর্বে কলেরা হয়ে থাকলেও টিকা নেওয়া উপকারী।'
        },
        {
          q: 'ডায়রিয়া এবং অসুস্থ ব্যাক্তি কি টিকা দিতে পারবে?',
          a: 'হালকা সর্দি/কাশি/জ্বরে টিকা নেওয়া যায়, কিন্তু ডায়রিয়ায় নয়।'
        },
        {
          q: 'পার্শ্বপ্রতিক্রিয়া কি?',
          a: 'বেশিরভাগ ক্ষেত্রে কোনো পার্শ্বপ্রতিক্রিয়া নেই। হালকা পেটব্যথা, বমিবমি ভাব বা হালকা ডায়রিয়া স্বাভাবিক এবং নিজে সেরে যায়।'
        },
        {
          q: 'অন্যান্য টিকার সাথে ব্যবহার করা যায়?',
          a: 'অধিকাংশ ক্ষেত্রে অন্যান্য নিয়মিত টিকার সাথে নেওয়া যায়।'
        },
        {
          q: 'সুরক্ষা শুরু কত দিন থেকে?',
          a: '৭-১০ দিনের মধ্যে সুরক্ষা গঠিত হতে শুরু করে। দুটি ডোজে সুরক্ষা আরও শক্তিশালী এবং দীর্ঘস্থায়ী হয়।'
        },
        {
          q: 'খরচ কত? এবং স্থান?',
          a: 'সম্পূর্ণ বিনামূল্যে। টিকাদান কেন্দ্র, স্বাস্থ্যকেন্দ্র, স্কুল এবং মোবাইল টিমের মাধ্যমে পাওয়া যাবে।'
        },
        {
          q: 'টিকা দেয়ার সময় কি কি নিয়ে যেতে হবে?',
          a: 'অনলাইন ভ্যাকসিন কার্ড বা পরিচয়পত্র নিয়ে আসুন। পরিবারের সাথে আসলে নিবন্ধন সহজ হয়।'
        },
        {
          q: 'নিরাপত্তা এবং অনুমোদন',
          a: 'ওভিসি নিরাপদ, কার্যকর এবং বিশ্ব স্বাস্থ্য সংস্থা (WHO) অনুমোদিত। এটি পরীক্ষামূলক নয় বরং বিশ্বব্যাপী ব্যবহৃত একটি প্রমাণিত ভ্যাকসিন।'
        }
      ]
    }
  };

  const currentData = vaccineData[id as keyof typeof vaccineData];
  
  const getTotalFee = () => {
    if (!currentData.fee.isInteractive) return currentData.fee.amount;
    let total = 0;
    currentData.fee.options.forEach((opt: any) => {
      if (selectedFees[opt.id]) total += opt.price;
    });
    return total;
  };
  
  const toggleFee = (feeId: string) => {
    setSelectedFees(prev => ({ ...prev, [feeId]: !prev[feeId] }));
  };

  if (!currentData) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#0F172A]">
        <div className="text-center">
          <h2 className="text-2xl text-white font-bn mb-4">তথ্য পাওয়া যায়নি</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300 font-bn">ফিরে যান</Link>
        </div>
      </div>
    );
  }

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
          <span className="text-white font-medium truncate">{currentData.title}</span>
        </nav>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 flex-1"
        >
          {/* Header */}
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-white font-bn leading-tight mb-2">
                {currentData.title}
              </h1>
              <p className="text-slate-300 font-bn text-[15px] md:text-base leading-relaxed">
                {currentData.description}
              </p>
              
              {currentData.symptoms && (
                <div className="mt-6 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">
                  <button 
                    onClick={() => setIsSymptomsOpen(!isSymptomsOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-[15px] md:text-base font-bold text-slate-100 font-bn">প্রধান লক্ষণসমূহ</h3>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${isSymptomsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isSymptomsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-t border-slate-700/50 text-slate-300 font-bn leading-relaxed">
                          <ul className="space-y-2">
                            {currentData.symptoms.map((symptom: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                <span className="text-[15px]">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Process & Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentData.process && currentData.process.length > 0 && (
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
                <h3 className="text-xl font-bold text-white font-bn mb-5 border-b border-slate-700 pb-3">আবেদনের প্রসেস</h3>
                <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300">
                  {currentData.process.map((step: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold font-en text-xs mt-0.5">
                        {index + 1}
                      </div>
                      <span className="leading-snug">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col ${!(currentData.process && currentData.process.length > 0) ? 'md:col-span-2' : ''}`}>
              <h3 className="text-xl font-bold text-white font-bn mb-5 border-b border-slate-700 pb-3">আবেদন করতে যা যা লাগবে</h3>
              <ul className="space-y-4 font-bn text-[15px] md:text-base text-slate-300 mb-6 flex-1">
                {currentData.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 mt-6">
                <h4 className="text-blue-300 font-bold font-bn mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> আবেদন ফি ও সার্ভিস চার্জ
                </h4>
                
                {currentData.fee.isInteractive ? (
                  <div className="space-y-3 mb-4 mt-3">
                    {currentData.fee.options.map((opt: any) => (
                      <div 
                        key={opt.id} 
                        onClick={() => toggleFee(opt.id)}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedFees[opt.id] ? 'bg-blue-500 border-blue-500' : 'border-slate-500 group-hover:border-blue-400'}`}>
                          {selectedFees[opt.id] && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <span className="text-slate-300 font-bn text-[15px] flex-1">{opt.label}</span>
                        <span className="text-white font-bold font-bn">{opt.price} ৳</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-300 font-bn text-[15px]">{currentData.fee.details}</p>
                )}
                
                <div className="mt-3 text-xl md:text-2xl font-bold text-emerald-400 font-bn text-center bg-slate-900/50 py-3 rounded-lg border border-slate-700 flex justify-center items-center gap-2">
                  <span className="text-lg md:text-xl text-slate-300">মোট সার্ভিস চার্জ:</span>
                  <span>{getTotalFee()} টাকা</span>
                </div>
                
                <div className="mt-5">
                  <a 
                    href="https://wa.me/message/L2XAYVWBE5RIJ1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl text-lg font-bold transition-all font-bn shadow-lg shadow-teal-500/20 hover:scale-[1.02] active:scale-95"
                  >
                    যোগাযোগ
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* FAQs */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white font-bn mb-5 border-b border-slate-700 pb-3">সাধারণ জিজ্ঞাসা (FAQ)</h3>
              <div className="space-y-3">
                {currentData.faqs.map((faq: any, index: number) => (
                  <div key={index} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/30">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-start md:items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left gap-4"
                    >
                      <h4 className="text-[15px] md:text-base font-bold text-blue-300 font-bn flex items-start gap-2">
                        <span className="text-slate-500 font-en text-sm mt-0.5 shrink-0">Q.</span> 
                        <span>{faq.q}</span>
                      </h4>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 mt-0.5 md:mt-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-4 pt-0 text-[15px] md:text-base text-slate-300 font-bn leading-relaxed">
                            <div className="border-t border-slate-700/50 pt-3">
                              {faq.a}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
