with open("src/App.tsx", "r") as f:
    content = f.read()

import re

# Add import
import_statement = "import ServiceDetail from './components/ServiceDetail';\nimport SSCDetails from './components/SSCDetails';"
content = content.replace("import ServiceDetail from './components/ServiceDetail';", import_statement)

# Add route
route_statement = '<Route path="/service/:id" element={<ServiceDetail />} />\n            <Route path="/ssc-details" element={<SSCDetails />} />'
content = content.replace('<Route path="/service/:id" element={<ServiceDetail />} />', route_statement)

with open("src/App.tsx", "w") as f:
    f.write(content)
