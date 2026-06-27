import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-en text-[#0F172A] mb-3 tracking-tight">Everything digital, in one place.</h2>
          <p className="text-sm text-slate-500 font-en">
            Tap any service to see details — then confirm to continue on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-[1.5rem] p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#0F172A] flex items-center justify-center shrink-0 shadow-sm border border-slate-700">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-en text-[#0F172A] leading-tight">{category.titleEn}</h3>
                  <p className="text-slate-500 font-bn text-sm mt-0.5">{category.titleBn}</p>
                </div>
              </div>

              {/* Service Items */}
              <div className="flex-1 flex flex-col gap-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="text-sm text-slate-700 font-en font-medium line-clamp-1">{item.name}</span>
                    </div>
                    <Link 
                      to={`/service/${item.id}`}
                      className="shrink-0 ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all font-bn text-[11px] font-bold"
                    >
                      বিস্তারিত <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
        
        {/* WhatsApp Floating Button */}
        <a href="https://wa.me/" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform z-50">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.74 10.564 10.564 0 5.827-4.74 10.565-10.564 10.565z"/></svg>
        </a>
      </div>
    </section>
  );
}
