const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

// Remove the link from the Fee Calculator part
const fromCalculator = `                    <div className="pl-9 pb-2">
                      <a 
                        href="https://xiclassadmission.govt.bd/college-list/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[15px] bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg transition-all font-bn"
                      >
                        <ExternalLink className="w-4 h-4" />
                        কলেজ লিস্ট
                      </a>
                    </div>`;

content = content.replace(fromCalculator, '');

// Add it to the top section
const toReplace = `              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>আবেদন ফি:</strong> ১৫০ টাকা</span>
              </li>`;

const replacement = `              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>আবেদন ফি:</strong> ১৫০ টাকা</span>
                </div>
                <div className="pl-7">
                  <a 
                    href="https://xiclassadmission.govt.bd/college-list/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[15px] bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 px-3 py-1.5 rounded-lg transition-all font-en"
                  >
                    <ExternalLink className="w-4 h-4" />
                    College List
                  </a>
                </div>
              </li>`;

content = content.replace(toReplace, replacement);

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
