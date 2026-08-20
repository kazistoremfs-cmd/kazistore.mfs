/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import SSCDetails from './components/SSCDetails';
import CollegeAdmissionDetails from './components/CollegeAdmissionDetails';
import HSCDetails from './components/HSCDetails';
import ChargeSummary from './components/ChargeSummary';
import UniversityAdmissionDetails from './components/UniversityAdmissionDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-en bg-[#F8FAFC] text-slate-800">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/ssc-details" element={<SSCDetails />} />
            <Route path="/college-admission-details" element={<CollegeAdmissionDetails />} />
            <Route path="/hsc-details" element={<HSCDetails />} />
            <Route path="/charges" element={<ChargeSummary />} />
            <Route path="/admission/:id" element={<UniversityAdmissionDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
