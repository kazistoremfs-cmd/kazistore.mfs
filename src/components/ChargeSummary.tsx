import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Wallet, Receipt, Zap, Wifi, Flame, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ChargeSummary() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const charges = [
    {
      category: 'মোবাইল ব্যাংকিং (MFS) ক্যাশ আউট চার্জ',
      icon: <Wallet className="w-6 h-6 text-blue-400" />,
      items: [
        {
          name: 'বিকাশ (bKash)',
          details: [
            { method: 'প্রিয় এজেন্ট', charge: '১৪ টাকা (প্রতি হাজারে)' },
            { method: 'সাধারন এজেন্ট', charge: '১৮.৫ টাকা (প্রতি হাজারে)' }
          ]
        },
        {
          name: 'নগদ (Nagad)',
          details: [
            { method: 'APP এর মাধ্যমে', charge: '১৩ টাকা (প্রতি হাজারে)' },
            { method: 'USSD এর মাধ্যমে', charge: '১৫ টাকা (প্রতি হাজারে)' }
          ]
        },
        {
          name: 'রকেট (Rocket)',
          details: [
            { method: 'এজেন্ট', charge: '১৭ টাকা (প্রতি হাজারে)' },
            { method: 'এটিএম (ATM)', charge: '৯ টাকা (প্রতি হাজারে)' }
          ]
        }
      ]
    },
    {
      category: 'বিল পেমেন্ট চার্জ',
      icon: <Receipt className="w-6 h-6 text-emerald-400" />,
      items: [
        {
          name: 'বিদ্যুৎ বিল (Electricity Bill)',
          icon: <Zap className="w-4 h-4 text-yellow-400" />,
          charge: '২০ টাকা (প্রতি হাজারে)'
        },
        {
          name: 'গ্যাস বিল (Gas Bill)',
          icon: <Flame className="w-4 h-4 text-orange-400" />,
          charge: 'ফ্রি'
        },
        {
          name: 'ইন্টারনেট বিল (Internet Bill)',
          icon: <Wifi className="w-4 h-4 text-blue-400" />,
          charge: 'ফ্রি'
        },
        {
          name: 'অন্যান্য সকল সেবা',
          icon: <Building2 className="w-4 h-4 text-slate-400" />,
          charge: 'আলোচনা সাপেক্ষে / অফিসিয়াল রেট'
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 to-[#0F172A] opacity-90"></div>
        <div className="[transform-style:preserve-3d] absolute top-1/4 md:top-1/2 right-[-20%] md:right-[5%] md:-translate-y-1/2 md:translate-x-0 opacity-30">
          <motion.div
            animate={{ rotateX: [0, 15, 0], rotateY: [0, -20, 0], rotateZ: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/10 drop-shadow-[0_20px_20px_rgba(255,255,255,0.1)]"
            style={{ willChange: "transform" }}
          >
            <div className="w-[120vw] h-[120vw] md:w-[600px] md:h-[600px] flex items-center justify-center max-w-[600px] max-h-[600px]">
              <Receipt className="w-3/4 h-3/4" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-en backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">সার্ভিস চার্জ সামারী</span>
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
              সার্ভিস চার্জ সামারী
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-bn leading-relaxed max-w-2xl whitespace-pre-line drop-shadow">
              আমাদের সকল সার্ভিসের ক্যাশ আউট ও পেমেন্ট চার্জের তালিকা নিচে দেওয়া হলো। 
            </p>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {charges.map((category, idx) => (
              <div key={idx} className="border border-slate-700/50 rounded-xl md:rounded-2xl bg-slate-800/60 backdrop-blur-md shadow-xl overflow-hidden">
                <div className="w-full flex items-center gap-3 p-4 md:p-5 border-b border-slate-700/50 bg-slate-800/40">
                  {category.icon}
                  <h2 className="text-xl md:text-2xl font-bold font-bn text-white drop-shadow">
                    {category.category}
                  </h2>
                </div>
                <div className="p-4 md:p-5">
                  <div className="grid gap-4 md:gap-6">
                    {category.items.map((item: any, itemIdx: number) => (
                      <div key={itemIdx} className="bg-blue-900/20 border border-blue-500/20 rounded-xl overflow-hidden">
                        <div className="px-4 py-3 bg-blue-900/40 border-b border-blue-500/20 flex items-center gap-2">
                          {item.icon}
                          <h3 className="font-bold text-blue-200 text-base md:text-lg font-bn">{item.name}</h3>
                        </div>
                        {item.details ? (
                          <table className="w-full text-left font-bn">
                            <thead className="text-blue-300/80 text-[14px] md:text-[15px] border-b border-blue-500/10 bg-blue-900/10">
                              <tr>
                                <th className="px-4 py-2.5 font-semibold">মাধ্যম</th>
                                <th className="px-4 py-2.5 font-semibold">চার্জ</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-200 text-[15px] md:text-base divide-y divide-blue-500/10">
                              {item.details.map((detail: any, dIdx: number) => (
                                <tr key={dIdx} className="hover:bg-blue-900/30 transition-colors">
                                  <td className="px-4 py-3">{detail.method}</td>
                                  <td className="px-4 py-3 font-semibold text-emerald-400">{detail.charge}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div className="px-4 py-4 flex items-center justify-between hover:bg-blue-900/30 transition-colors font-bn">
                            <span className="text-slate-300">সার্ভিস চার্জ</span>
                            <span className="font-semibold text-emerald-400">{item.charge}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
