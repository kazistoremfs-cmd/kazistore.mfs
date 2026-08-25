import { Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 h-20 flex items-center justify-between px-4 sm:px-8 bg-white shrink-0 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to="/" className="flex flex-col hover:opacity-90 transition-opacity">
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tighter text-[#0F172A] uppercase font-en leading-none">KAZI</span>
              <span className="text-2xl font-black tracking-tighter text-[#08B3AF] uppercase font-en leading-none ml-1">STORE</span>
            </div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] font-en mt-1">MFS Agent Point</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 font-en">
            <Link to="/" className="hover:text-slate-900 transition-colors">Services</Link>
            <a href="https://maps.app.goo.gl/gQi3NqyTD76by2Fj9" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Location</a>
            <a href="https://wa.me/message/L2XAYVWBE5RIJ1" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/message/L2XAYVWBE5RIJ1" target="_blank" rel="noopener noreferrer" className="bg-[#08B3AF] hover:bg-teal-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors font-en shadow-sm inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Top Announcement Bar */}
      <div className="bg-[#08B3AF] text-white py-2.5 px-4 flex items-center text-sm font-bold font-bn shadow-md relative z-40 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 bg-[#08B3AF] flex items-center gap-2 pl-4 pr-2">
          <Megaphone className="w-4 h-4" />
          <span>নোটিশ:</span>
        </div>
        <div className="animate-marquee pl-24 whitespace-nowrap">
          কলেরা প্রতিরোধী ওরাল ভ্যাকসিন (OCV) এখন বিনামূল্যে প্রদান করা হচ্ছে। সকল নাগরিক আপনার স্থানীয় স্বাস্থ্য কেন্দ্রে যোগাযোগ করুন। <Link to="/vaccine/cholera" className="underline hover:text-white/80 transition-colors ml-1">বিস্তারিত তথ্য</Link>
          <span className="mx-8 text-white/50">•</span>
          ২০২৬-২৭ শিক্ষাবর্ষের একাদশ শ্রেণিতে অনলাইনে ভর্তির আবেদন আগামী ২ সেপ্টেম্বর ২০২৬ তারিখ থেকে শুরু হয়ে ১০ সেপ্টেম্বর রাত ৮টা পর্যন্ত চলবে।
        </div>
      </div>
    </>
  );
}
