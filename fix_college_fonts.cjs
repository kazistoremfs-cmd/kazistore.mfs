const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

content = content.replace(/font-en/g, 'font-bn');

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
