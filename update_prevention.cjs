const fs = require('fs');
const content = fs.readFileSync('src/components/VaccineDetails.tsx', 'utf-8');

// 1. Add state
let updated = content.replace(
  "const [isSymptomsOpen, setIsSymptomsOpen] = useState(false);",
  "const [isSymptomsOpen, setIsSymptomsOpen] = useState(false);\n  const [isPreventionOpen, setIsPreventionOpen] = useState(false);"
);

// 2. Add prevention data
const choleraDataRegex = /symptoms:\s*\[[\s\S]*?\],/;
const newCholeraData = `symptoms: [
        'তীব্র ডায়রিয়া: চালের মতো পাতলা পায়খানা যা খুবই সংক্রামক',
        'বমিভাব ও বমি: রোগের শুরুতে দেখা যায়',
        'তীব্র পানিশূন্যতা: শরীর থেকে দ্রুত পানি বের হয়ে যায়',
        'পেশীতে খিঁচুনি: পানিশূন্যতার কারণে',
        'রক্তচাপ হ্রাস: যা চিকিৎসা না করলে গুরুতর হতে পারে',
        'চোখ ডাবা পড়ে যাওয়া: তীব্র পানিশূন্যতার চিহ্ন'
      ],
      prevention: [
        'নিরাপদ পানি: শুধুমাত্র ফুটানো বা বিশুদ্ধ পানি ব্যবহার করুন।',
        'খাদ্য সুরক্ষা: গরম এবং তাজা খাবার খান; খাবার ঢেকে রাখুন।',
        'হাত পরিচ্ছন্নতা: পায়খানা এবং খাওয়ার আগে সাবান দিয়ে হাত ধুন।',
        'পরিবেশ স্বাস্থ্যবিধি: ঘর এবং আশেপাশ পরিষ্কার রাখুন; নিরাপদ টয়লেট ব্যবহার করুন।',
        'টিকাকরণ: কলেরা এবং টাইফয়েডের টিকা গ্রহণ করুন।',
        'রোগ সচেতনতা: ডায়রিয়া বা জ্বরের লক্ষণ দেখলে অবিলম্বে চিকিৎসক দেখান।',
        'সতর্কতা এবং পরিচ্ছন্নতা রোগ প্রতিরোধের মূল চাবিকাঠি।'
      ],`;
updated = updated.replace(choleraDataRegex, newCholeraData);

// 3. Add prevention UI
const UIString = `{currentData.symptoms && (
                <div className="mt-6 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">`;

const UIReplaceString = `{currentData.prevention && (
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
                <div className="mt-6 border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 w-full">`;

updated = updated.replace(UIString, UIReplaceString);

fs.writeFileSync('src/components/VaccineDetails.tsx', updated);
