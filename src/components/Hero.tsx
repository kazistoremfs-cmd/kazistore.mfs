import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 bg-[#0F172A] min-h-[600px] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e3a8a]/40 to-[#0F172A] opacity-90"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/50 text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-8 font-en">
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
              <a href="#contact" className="bg-[#F59E0B] hover:bg-amber-600 text-slate-900 px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 font-en shadow-lg shadow-amber-500/20">
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
                <h4 className="text-4xl font-bold text-[#F59E0B] font-en mb-1">2K+</h4>
                <p className="text-xs text-slate-400 font-en">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#F59E0B] font-en mb-1">2B+</h4>
                <p className="text-xs text-slate-400 font-en">Transaction Amount</p>
              </div>
              <div className="hidden md:block">
                <h4 className="text-4xl font-bold text-[#F59E0B] font-en mb-1">10K+</h4>
                <p className="text-xs text-slate-400 font-en">Total Transaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
