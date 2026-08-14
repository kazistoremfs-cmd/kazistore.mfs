with open("src/components/ServiceDetail.tsx", "r") as f:
    content = f.read()

import re

# Add openCorner state
state_search = "const [openFaq, setOpenFaq] = useState<number | null>(null);"
state_replace = "const [openFaq, setOpenFaq] = useState<number | null>(null);\n  const [openCorner, setOpenCorner] = useState<number | null>(null);"
content = content.replace(state_search, state_replace)

# Replace details table with conditional rendering
table_search = """          {/* Details Table */}
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
          </div>"""

table_replace = """          {/* Details Table / Corners */}
          {'corners' in service && service.corners ? (
            <div>
              <h2 className="text-lg md:text-2xl font-bold font-bn text-white mb-3 md:mb-4 drop-shadow">অ্যাডমিশন কর্নার</h2>
              <div className="space-y-2 md:space-y-3">
                {(service as any).corners.map((corner: any, idx: number) => (
                  <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-md shadow-lg">
                    <button 
                      onClick={() => setOpenCorner(openCorner === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/50 transition-colors text-left"
                    >
                      <h3 className="text-sm md:text-base font-bold text-slate-100 font-bn pr-4">{corner.title}</h3>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${openCorner === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openCorner === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">
                            {corner.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          ) : (
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
          )}"""

content = content.replace(table_search, table_replace)

with open("src/components/ServiceDetail.tsx", "w") as f:
    f.write(content)
