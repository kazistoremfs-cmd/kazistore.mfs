const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

content = content.replace(/১৫০/g, '২২০');
content = content.replace('total += 150', 'total += 220');

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
