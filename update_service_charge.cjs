const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

content = content.replace("total += 50;", "total += 70;");
content = content.replace('span className="text-slate-400">৫০ টাকা</span>', 'span className="text-slate-400">৭০ টাকা</span>');

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
