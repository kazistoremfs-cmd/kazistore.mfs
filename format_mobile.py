with open("src/components/ServiceDetail.tsx", "r") as f:
    content = f.read()

# Make corner title bigger on mobile
search_title = """<h3 className="text-sm md:text-base font-bold text-slate-100 font-bn pr-4">{corner.title}</h3>"""
replace_title = """<h3 className="text-base md:text-lg font-bold text-slate-100 font-bn pr-4">{corner.title}</h3>"""
content = content.replace(search_title, replace_title)

# Make body wrapper text bigger
search_body = """<div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">"""
replace_body = """<div className="px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">"""
content = content.replace(search_body, replace_body)

# Update sub items
search_subItems = """                              {corner.subItems && (
                                <div className="flex flex-col gap-3">
                                  {corner.subItems.map((sub: any, i: number) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/50">
                                      <p className="text-slate-300 font-bn text-sm md:text-base">{sub.content}</p>
                                      <div className="flex justify-end sm:shrink-0">
                                        <Link 
                                          to={sub.link}
                                          className="inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-5 py-2 rounded-lg text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                                        >
                                          বিস্তারিত
                                        </Link>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}"""

replace_subItems = """                              {corner.subItems && (
                                <div className="flex flex-col gap-3">
                                  {corner.subItems.map((sub: any, i: number) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
                                      <p className="text-slate-300 font-bn text-[15px] md:text-base leading-snug">{sub.content}</p>
                                      <div className="w-full sm:w-auto flex sm:shrink-0 mt-1 sm:mt-0">
                                        <Link 
                                          to={sub.link}
                                          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl text-[15px] md:text-base font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                                        >
                                          বিস্তারিত
                                        </Link>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}"""
content = content.replace(search_subItems, replace_subItems)

# Update single link
search_singleLink = """                              {corner.link && !corner.subItems && (
                                <div className="flex justify-end mt-1">
                                  <Link 
                                    to={corner.link}
                                    className="inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                                  >
                                    বিস্তারিত
                                  </Link>
                                </div>
                              )}"""

replace_singleLink = """                              {corner.link && !corner.subItems && (
                                <div className="w-full flex justify-end mt-2">
                                  <Link 
                                    to={corner.link}
                                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl text-[15px] md:text-base font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                                  >
                                    বিস্তারিত
                                  </Link>
                                </div>
                              )}"""
content = content.replace(search_singleLink, replace_singleLink)


with open("src/components/ServiceDetail.tsx", "w") as f:
    f.write(content)
