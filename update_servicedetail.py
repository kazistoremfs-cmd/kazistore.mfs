with open("src/components/ServiceDetail.tsx", "r") as f:
    content = f.read()

import re

search = """                          <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">
                            {corner.content}
                          </div>"""

replace = """                          <div className="px-4 md:px-5 pb-4 md:pb-5 text-xs md:text-sm text-slate-300 font-bn leading-relaxed border-t border-slate-700/50 pt-3 md:pt-4">
                            <p className={corner.link ? "mb-4" : ""}>{corner.content}</p>
                            {corner.link && (
                              <Link 
                                to={corner.link}
                                className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-lg text-sm font-bold transition-all font-bn shadow-lg hover:scale-105 active:scale-95"
                              >
                                বিস্তারিত
                              </Link>
                            )}
                          </div>"""

content = content.replace(search, replace)

with open("src/components/ServiceDetail.tsx", "w") as f:
    f.write(content)
