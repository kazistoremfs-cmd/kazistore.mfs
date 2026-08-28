const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

// Replace "গ্রুপ অনুযায়ী "
content = content.replace("গ্রুপ অনুযায়ী ", "");

// Replace "সাধারণ প্রশ্নোত্তর (FAQ) - একাদশ শ্রেণিতে ভর্তি" -> "FAQ"
// User specified removing "সাধারণ প্রশ্নোত্তর (" and ") - একাদশ শ্রেণিতে ভর্তি "
content = content.replace("সাধারণ প্রশ্নোত্তর (FAQ) - একাদশ শ্রেণিতে ভর্তি", "FAQ");

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
