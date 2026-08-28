const fs = require('fs');
let content = fs.readFileSync('src/components/CollegeAdmissionDetails.tsx', 'utf-8');

content = content.replace("অনলাইনে প্রাথমিক আবেদন প্রক্রিয়া (সকল গ্রুপের জন্য)", "আবেদন প্রক্রিয়া");

fs.writeFileSync('src/components/CollegeAdmissionDetails.tsx', content);
