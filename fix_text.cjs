const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

content = content.replace("College List", "কলেজ লিস্ট");
content = content.replace("font-en", "font-bn");

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
