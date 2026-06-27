export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex flex-col mb-4">
              <div className="flex items-center">
                <span className="text-3xl font-black tracking-tighter text-white uppercase font-en leading-none">KAZI</span>
                <span className="text-3xl font-black tracking-tighter text-[#F59E0B] uppercase font-en leading-none ml-1">STORE</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] font-en mt-1">MFS Agent Point</span>
            </div>
            <p className="text-slate-400 font-bn text-sm leading-relaxed max-w-sm">
              আশুগঞ্জ, ব্রাহ্মণবাড়িয়ার বিশ্বস্ত ডিজিটাল সার্ভিস পয়েন্ট। দ্রুত লেনদেন ও নিরাপদ সেবার নিশ্চয়তা।
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-bn mb-4">সার্ভিস সমূহ</h4>
            <ul className="space-y-2 text-slate-400 font-bn text-sm">
              <li>মোবাইল ব্যাংকিং (Cash in/out)</li>
              <li>ইউটিলিটি বিল পেমেন্ট</li>
              <li>মোবাইল রিচার্জ ও বান্ডেল</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-bn mb-4">যোগাযোগ</h4>
            <ul className="space-y-2 text-slate-400 font-bn text-sm">
              <li>আশুগঞ্জ, ব্রাহ্মণবাড়িয়া</li>
              <li className="font-en">kazistore.mfs@gmail.com</li>
              <li className="font-en">+880 1700-000000</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-en text-xs">
            © {new Date().getFullYear()} Kazi Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 font-bn text-xs">
            <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
            <a href="#" className="hover:text-white transition-colors">গোপনীয়তা নীতি</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
