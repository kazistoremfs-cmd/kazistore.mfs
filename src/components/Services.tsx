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
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
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
      </div>
    </section>
  );
}
