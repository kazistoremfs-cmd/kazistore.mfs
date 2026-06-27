import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#F8FAFC] min-h-[calc(100vh-200px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-en">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-800 font-medium">{service.title}</span>
        </nav>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-200/60 mb-6 md:mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full -z-10"></div>
          
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
            <div className={`w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl md:rounded-3xl flex items-center justify-center ${service.bg}`}>
              {service.icon}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-bn text-slate-900 mb-2 md:mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm md:text-lg text-slate-600 font-bn leading-relaxed max-w-2xl">
                {service.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Details Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[1.5rem] md:rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden mb-6 md:mb-8"
        >
          <div className="p-5 md:p-8 border-b border-slate-100">
            <h2 className="text-lg md:text-xl font-bold font-bn text-slate-800">সার্ভিস ডিটেইলস ও চার্জ</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-en min-w-[300px]">
              <thead className="bg-slate-50 text-slate-500 text-[10px] md:text-xs uppercase tracking-wider">
                <tr>
                  {Object.keys(service.details[0]).map((key) => (
                    <th key={key} className="px-4 md:px-6 py-3 md:py-4 font-semibold whitespace-nowrap">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {service.details.map((detail, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors text-xs md:text-sm">
                    {Object.values(detail).map((val, i) => (
                      <td key={i} className="px-4 md:px-6 py-3 md:py-4 text-slate-700 font-medium">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQs */}
        {service.faqs && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[1.5rem] md:rounded-3xl shadow-sm border border-slate-200/60 overflow-hidden p-5 md:p-8"
          >
            <h2 className="text-lg md:text-xl font-bold font-bn text-slate-800 mb-4 md:mb-6">সাধারণ জিজ্ঞাসা (FAQ)</h2>
            <div className="space-y-3">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <h3 className="text-sm md:text-base font-bold text-slate-800 font-bn">{faq.q}</h3>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-4 pb-4 bg-slate-50/50 text-xs md:text-sm text-slate-600 font-bn leading-relaxed border-t border-slate-100 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
