const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf-8');

content = content.replace("@import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&family=Hind+Siliguri:wght@400;500;600;700&display=swap');", "@import url('https://fonts.googleapis.com/css2?family=Saira:wght@400;500;600;700&family=Hind+Siliguri:wght@400;500;600;700&family=Barlow:wght@400;500;600;700&display=swap');");
content = content.replace(".font-en {\n  font-family: \"Saira\", sans-serif;\n}", ".font-en {\n  font-family: \"Saira\", sans-serif;\n}\n\n.font-barlow {\n  font-family: \"Barlow\", sans-serif;\n}");

fs.writeFileSync('src/index.css', content);
