with open("src/components/ServiceDetail.tsx", "r") as f:
    content = f.read()

search = """                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                              <p className="flex-1">{corner.content}</p>
                              {(corner.links || corner.link) && (
                                <div className="flex flex-wrap justify-end gap-2 sm:shrink-0 mt-2 sm:mt-0">
                                  {corner.links ? corner.links.map((lnk: any, i: number) => (
                                    <Link 
                                      key={i}
                                      to={lnk.url}
                                      className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-4 py-2.5 rounded-lg text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                                    >
                                      {lnk.label}
                                    </Link>
                                  )) : (
                                    <Link 
                                      to={corner.link}
                                      className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-4 py-2.5 rounded-lg text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                                    >
                                      বিস্তারিত
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>"""

replace = """                            <div className="flex flex-col gap-4">
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

content = content.replace(search, replace)

with open("src/components/ServiceDetail.tsx", "w") as f:
    f.write(content)
