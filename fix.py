import re

content = """import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { ArrowLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import React from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Not Found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

"""

with open('src/components/ServiceDetail.tsx', 'r') as f:
    text = f.read()

prefix = text[text.find('  return (\n    <div className="relative min-h-[calc(100vh-64px)]'):]
new_text = content + prefix

with open('src/components/ServiceDetail.tsx', 'w') as f:
    f.write(new_text)
