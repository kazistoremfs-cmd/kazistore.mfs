const fs = require('fs');
const content = fs.readFileSync('src/components/VaccineDetails.tsx', 'utf-8');

const strToReplace = `{currentData.prevention && (
                <div className="mt-4 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">
                  <button 
                    onClick={() => setIsPreventionOpen(!isPreventionOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-[15px] md:text-base font-bold text-slate-100 font-bn">করণীয়</h3>
                    <ChevronDown className={\`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 \${isPreventionOpen ? 'rotate-180' : ''}\`} />
                  </button>
                  <AnimatePresence>
                    {isPreventionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-t border-slate-700/50 text-slate-300 font-bn leading-relaxed">
                          <ul className="space-y-2">
                            {currentData.prevention.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                                <span className="text-[15px]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
              {currentData.symptoms && (
                <div className="mt-6 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">
                  <button 
                    onClick={() => setIsSymptomsOpen(!isSymptomsOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-[15px] md:text-base font-bold text-slate-100 font-bn">প্রধান লক্ষণসমূহ</h3>
                    <ChevronDown className={\`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 \${isSymptomsOpen ? 'rotate-180' : ''}\`} />
                  </button>
                  <AnimatePresence>
                    {isSymptomsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-t border-slate-700/50 text-slate-300 font-bn leading-relaxed">
                          <ul className="space-y-2">
                            {currentData.symptoms.map((symptom: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                <span className="text-[15px]">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}`;

const replacement = `{currentData.symptoms && (
                <div className="mt-6 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">
                  <button 
                    onClick={() => setIsSymptomsOpen(!isSymptomsOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-[15px] md:text-base font-bold text-slate-100 font-bn">প্রধান লক্ষণসমূহ</h3>
                    <ChevronDown className={\`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 \${isSymptomsOpen ? 'rotate-180' : ''}\`} />
                  </button>
                  <AnimatePresence>
                    {isSymptomsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-t border-slate-700/50 text-slate-300 font-bn leading-relaxed">
                          <ul className="space-y-2">
                            {currentData.symptoms.map((symptom: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                                <span className="text-[15px]">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
              
              {currentData.prevention && (
                <div className="mt-4 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">
                  <button 
                    onClick={() => setIsPreventionOpen(!isPreventionOpen)}
                    className="w-full flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h3 className="text-[15px] md:text-base font-bold text-slate-100 font-bn">করণীয়</h3>
                    <ChevronDown className={\`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 \${isPreventionOpen ? 'rotate-180' : ''}\`} />
                  </button>
                  <AnimatePresence>
                    {isPreventionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-t border-slate-700/50 text-slate-300 font-bn leading-relaxed">
                          <ul className="space-y-2">
                            {currentData.prevention.map((item: string, i: number) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></div>
                                <span className="text-[15px]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}`;

const newContent = content.replace(strToReplace, replacement);
fs.writeFileSync('src/components/VaccineDetails.tsx', newContent);
