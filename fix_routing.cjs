const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

if (!content.includes('CreditCardBillPaymentDetails')) {
    content = content.replace("import VaccineDetails from './components/VaccineDetails';", "import VaccineDetails from './components/VaccineDetails';\nimport CreditCardBillPaymentDetails from './components/CreditCardBillPaymentDetails';");
    content = content.replace("<Route path=\"/vaccine/:id\" element={<VaccineDetails />} />", "<Route path=\"/vaccine/:id\" element={<VaccineDetails />} />\n            <Route path=\"/credit-card-bill-payment\" element={<CreditCardBillPaymentDetails />} />");
    fs.writeFileSync('src/App.tsx', content);
}
