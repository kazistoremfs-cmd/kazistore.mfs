import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-slate-800/80">
      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-en text-white mb-3 tracking-tight">Everything digital, in one place.</h2>
          <p className="text-sm text-slate-400 font-en">
            Tap any service to see details — then confirm to continue on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-slate-900/70 rounded-[1.5rem] p-6 sm:p-8 border border-slate-800/80 shadow-xl backdrop-blur-md flex flex-col h-full hover:border-slate-700/80 hover:shadow-2xl hover:shadow-teal-950/20 transition-all">
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 shadow-inner border border-slate-700 text-teal-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-en text-white leading-tight">{category.titleEn}</h3>
                  <p className="text-teal-400 font-bn text-sm mt-0.5">{category.titleBn}</p>
                </div>
              </div>

              {/* Service Items */}
              <div className="flex-1 flex flex-col gap-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b border-slate-800/70 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.5)]"></span>
                      <span className={`text-sm text-slate-200 font-medium line-clamp-1 ${/[\u0980-\u09FF]/.test(item.name) ? 'font-bn text-[15px]' : 'font-en'}`}>{item.name}</span>
                    </div>
                    <Link 
                      to={(item as any).route || `/service/${item.id}`}
                      className="shrink-0 ml-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-800/80 text-slate-300 hover:text-white hover:border-teal-400 hover:bg-slate-700 transition-all font-bn text-[11px] font-bold shadow-sm"
                    >
                      বিস্তারিত <ArrowRight className="w-3 h-3 text-teal-400" />
                    </Link>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
