import re

with open('src/components/ServiceDetail.tsx', 'r') as f:
    content = f.read()

# I will replace the return block.
prefix = content[:content.find("  return (")]
new_return = """  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col">
      {/* 3D Background Element for Full Page */}
      <div className="absolute inset-0 z-0 overflow-hidden [perspective:1000px] pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/20 to-[#0F172A] opacity-90"></div>
        <div className="[transform-style:preserve-3d] absolute top-1/4 md:top-1/2 right-[-20%] md:right-[5%] md:-translate-y-1/2 md:translate-x-0 opacity-30">
          <motion.div
            animate={{ rotateX: [0, 15, 0], rotateY: [0, -20, 0], rotateZ: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/10 drop-shadow-[0_20px_20px_rgba(255,255,255,0.1)]"
            style={{ willChange: "transform" }}
          >
            <div className="w-[120vw] h-[120vw] md:w-[600px] md:h-[600px] [&>svg]:w-full [&>svg]:h-full max-w-[600px] max-h-[600px]">
              {service.icon}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-4xl mx-auto md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 p-4 md:pt-12 md:px-0 font-en backdrop-blur-md bg-[#0F172A]/50 md:bg-transparent sticky top-0 z-20 border-b border-slate-800 md:border-none">
          <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">{service.title}</span>
        </nav>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col gap-8 md:gap-12 flex-1"
        >
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bn text-white mb-3 md:mb-4 tracking-tight drop-shadow-md">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-bn leading-relaxed max-w-2xl whitespace-pre-line drop-shadow">
              {service.desc}
            </p>
          </div>

          {/* Details Table */}
          <div>
            <h2 className="text-lg md:text-2xl font-bold font-bn text-white mb-3 md:mb-4 drop-shadow">সার্ভিস ডিটেইলস ও চার্জ</h2>
            <div className="overflow-x-auto rounded-xl md:rounded-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-md shadow-xl">
              <table className="w-full text-left font-en min-w-[300px]">
                <thead className="bg-slate-900/60 text-slate-300 text-[10px] md:text-xs uppercase tracking-wider">
                  <tr>
                    {Object.keys(service.details[0]).map((key) => (
                      <th key={key} className="px-4 md:px-6 py-3 md:py-4 font-semibold whitespace-nowrap">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {service.details.map((detail, idx) => (
                    <tr key={idx} className="hover:bg-slate-700/40 transition-colors text-xs md:text-sm">
                      {Object.values(detail).map((val, i) => (
                        <td key={i} className="px-4 md:px-6 py-3 md:py-4 text-slate-100 font-medium">
                          {val as React.ReactNode}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important Links */}
          {'importantLinks' in service && service.importantLinks && (
            <div>
              <h2 className="text-lg md:text-2xl font-bold font-bn text-white mb-3 md:mb-4 drop-shadow">গুরুত্বপূর্ণ লিংকসমূহ</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {(service as any).importantLinks.map((link: { label: string, url: string }, idx: number) => (
                  <a 
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-4 py-2.5 md:px-5 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all font-bn shadow-lg inline-flex items-center gap-2 backdrop-blur-md hover:scale-105 active:scale-95"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && (
            <div>
              <h2 className="text-lg md:text-2xl font-bold font-bn text-white mb-3 md:mb-4 drop-shadow">সাধারণ জিজ্ঞাসা (FAQ)</h2>
              <div className="space-y-2 md:space-y-3 pb-8">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-md shadow-lg">
                    <button 
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/50 transition-colors text-left"
                    >
                      <h3 className="text-sm md:text-base font-bold text-slate-100 font-bn pr-4">{faq.q}</h3>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
"""

with open('src/components/ServiceDetail.tsx', 'w') as f:
    f.write(prefix + new_return)

