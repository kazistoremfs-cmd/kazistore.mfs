with open("src/components/ServiceDetail.tsx", "r") as f:
    content = f.read()

search = """                            <div className="flex flex-col gap-4">
                              <p className="text-slate-300">{corner.content}</p>
                              {(corner.links || corner.link) && (
                                <div className={corner.links ? "grid grid-cols-1 sm:grid-cols-2 gap-3" : "flex justify-end"}>
                                  {corner.links ? corner.links.map((lnk: any, i: number) => (
                                    <Link 
                                      key={i}
                                      to={lnk.url}
                                      className="flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-4 py-3 rounded-xl text-sm md:text-base font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95 text-center"
                                    >
                                      {lnk.label}
                                    </Link>
                                  )) : (
                                    <Link 
                                      to={corner.link}
                                      className="inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                                    >
                                      বিস্তারিত
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>"""

replace = """                            <div className="flex flex-col gap-3">
                              {corner.content && <p className="text-slate-300">{corner.content}</p>}
                              
                              {corner.subItems && (
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
                              )}

                              {corner.link && !corner.subItems && (
                                <div className="flex justify-end mt-1">
                                  <Link 
                                    to={corner.link}
                                    className="inline-flex justify-center items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-6 py-2.5 rounded-xl text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                                  >
                                    বিস্তারিত
                                  </Link>
                                </div>
                              )}
                            </div>"""

content = content.replace(search, replace)

with open("src/components/ServiceDetail.tsx", "w") as f:
    f.write(content)
