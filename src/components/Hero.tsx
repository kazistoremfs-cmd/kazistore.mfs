import { ArrowRight, ShieldCheck, Smartphone, Wallet, Banknote, CreditCard, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 bg-[#0F172A] min-h-[600px] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e3a8a]/40 to-[#0F172A] opacity-90 overflow-hidden">
        {/* Animated MFS Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[10%] text-pink-500/20"
        >
          <Smartphone className="w-32 h-32" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[25%] text-orange-500/20"
        >
          <Wallet className="w-24 h-24" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] text-emerald-500/20"
        >
          <Banknote className="w-28 h-28" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[10%] left-[40%] text-blue-500/10"
        >
          <Send className="w-20 h-20" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[15%] left-[10%] text-purple-500/10"
        >
          <CreditCard className="w-40 h-40" />
        </motion.div>
      </div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/50 text-teal-400 font-bold text-[10px] uppercase tracking-widest mb-8 font-en">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted MFS & Digital Point</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-en text-white leading-[1.1] tracking-tight mb-6">
              Kazi Store - Your Trusted <br />
              Digital Service Point
            </h1>
            
            <p className="text-lg text-slate-300 font-en mb-2 max-w-2xl leading-relaxed">
              From bKash, Nagad & Rocket to utility bills, online applications, printing, SIM services and resume design — everything you need, under one trusted roof.
            </p>
            <p className="text-lg text-slate-400 font-bn mb-10 max-w-2xl leading-relaxed">
              বিকাশ, নগদ, রকেট, বিল পেমেন্ট, প্রিন্টিং, সিম সেবা ও আরো অনেক কিছু — এক ছাদের নিচে।
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#contact" className="bg-[#08B3AF] hover:bg-teal-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 font-en shadow-lg shadow-teal-500/20">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 font-en">
                Explore Services
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h4 className="text-4xl font-bold text-[#08B3AF] font-en mb-1">2K+</h4>
                <p className="text-xs text-slate-400 font-en">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#08B3AF] font-en mb-1">2B+</h4>
                <p className="text-xs text-slate-400 font-en">Transaction Amount</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-4xl font-bold text-[#08B3AF] font-en mb-1">10K+</h4>
                <p className="text-xs text-slate-400 font-en">Total Transaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
