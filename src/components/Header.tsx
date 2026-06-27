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
              <span className="text-2xl font-black tracking-tighter text-[#F59E0B] uppercase font-en leading-none ml-1">STORE</span>
            </div>
            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] font-en mt-1">MFS Agent Point</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 font-en">
            <Link to="/" className="hover:text-slate-900 transition-colors">Services</Link>
            <a href="https://maps.app.goo.gl/gQi3NqyTD76by2Fj9" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Location</a>
            <a href="https://wa.me/message/L2XAYVWBE5RIJ1" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/message/L2XAYVWBE5RIJ1" target="_blank" rel="noopener noreferrer" className="bg-[#F59E0B] hover:bg-amber-600 text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors font-en shadow-sm inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Top Announcement Bar */}
      <div className="bg-[#F59E0B] text-slate-900 py-2.5 px-4 flex items-center text-sm font-bold font-bn shadow-md relative z-40 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 bg-[#F59E0B] flex items-center gap-2 pl-4 pr-2">
          <Megaphone className="w-4 h-4" />
          <span>নোটিশ:</span>
        </div>
        <div className="animate-marquee pl-24 whitespace-nowrap">
          বর্তমানে বিগত ২ দিন যাবত BPDB Prepaid Meter এর ক্ষেত্রে টোকেন সমস্যা হচ্ছে, সবাই চেষ্টা করুন আরি অফিস থেকে মিটার রিচার্জ করুন।
        </div>
      </div>
    </>
  );
}
