const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

// The breadcrumb was broken (replaced from font-en to font-bn). Let's fix it if it's there.
content = content.replace('md:px-0 font-bn backdrop-blur-md', 'md:px-0 font-en backdrop-blur-md');
content = content.replace('flex-1 font-bn', 'flex-1 font-en');

// Now fix the button
content = content.replace('transition-all font-en"\n                  >\n                    <ExternalLink className="w-4 h-4" />\n                    কলেজ লিস্ট', 'transition-all font-bn"\n                  >\n                    <ExternalLink className="w-4 h-4" />\n                    কলেজ লিস্ট');

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
