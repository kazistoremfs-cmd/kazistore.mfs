with open("src/App.tsx", "r") as f:
    content = f.read()

# Add import
import_statement = "import SSCDetails from './components/SSCDetails';\nimport CollegeAdmissionDetails from './components/CollegeAdmissionDetails';"
content = content.replace("import SSCDetails from './components/SSCDetails';", import_statement)

# Add route
route_statement = '<Route path="/ssc-details" element={<SSCDetails />} />\n            <Route path="/college-admission-details" element={<CollegeAdmissionDetails />} />'
content = content.replace('<Route path="/ssc-details" element={<SSCDetails />} />', route_statement)

with open("src/App.tsx", "w") as f:
    f.write(content)
