import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ChevronDown, Calculator, 
  ExternalLink, Calendar, Building2, Phone, Mail, Globe, 
  FileText, AlertCircle, BookOpen, Clock, ShieldAlert, Sparkles, MessageCircle,
  GraduationCap, Award, MapPin, Check, Tag, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DUAdmissionDetails() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPackageDetailsOpen, setIsPackageDetailsOpen] = useState<boolean>(false);
  const [isMarksExpanded, setIsMarksExpanded] = useState<boolean>(false);
  const [selectedUnitId, setSelectedUnitId] = useState<string>('science');

  // Coupon state
  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [couponError, setCouponError] = useState<string>('');

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!couponCode.trim()) {
      setCouponError('অনুগ্রহ করে কোডটি লিখুন');
      return;
    }
    if (couponCode.trim().toUpperCase() === 'KSTDU27') {
      setIsCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('ভুল কোড! অনুগ্রহ করে সঠিক কোড দিন।');
    }
  };

  const handleRemoveCoupon = () => {
    setIsCouponApplied(false);
    setCouponCode('');
    setCouponError('');
  };

  // Calculator state
  const [fees, setFees] = useState({
    unitFee: true,
    paymentCharge: true,
    serviceFee: true,
    admissionPackage: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DU Units Data (Updated with 2025-2026 official guidelines)
  const duUnits = [
    {
      id: 'science',
      shortName: 'বিজ্ঞান',
      name: 'বিজ্ঞান ইউনিট',
      nameEn: 'Science Unit',
      fee: 1050,
      feeBn: '1,050/-',
      totalSeats: '1,891টি',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '20 ডিসেম্বর 2025 (শনিবার)',
      examTime: 'সকাল 11:00 - 12:30',
      examDuration: '90 মিনিট (MCQ 45 মি. + লিখিত 45 মি.)',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      activeColor: 'bg-blue-600/25 border-blue-400 text-white shadow-lg shadow-blue-500/10',
      minGpa: 'বিজ্ঞান: 8.00 (পৃথক 3.50), বিভাগ পরিবর্তন: 7.50 (পৃথক 3.00)',
      description: 'বিজ্ঞান অনুষদ, জীববিজ্ঞান, ফার্মেসী, আর্থ এন্ড এনভায়রনমেন্টাল সায়েন্সেস ও ইঞ্জিনিয়ারিং অনুষদ।',
      criteria: 'এসএসসি (2020-2023) ও এইচএসসি (2025)। বিজ্ঞান ও কৃষিবিজ্ঞান শাখা: ৪র্থ বিষয়সহ উভয় পরীক্ষায় আলাদাভাবে নূন্যতম জিপিএ 3.50 সহ মোট জিপিএ নূন্যতম 8.00। মানবিক ও ব্যবসায় শাখা থেকে বিজ্ঞান ইউনিটে বিভাগ পরিবর্তনে: পৃথকভাবে নূন্যতম 3.00 সহ মোট জিপিএ নূন্যতম 7.50।',
      highlights: [
        'মোট আসন সংখ্যা 1,891টি (অনুষদভুক্ত সকল বিভাগ ও ইনস্টিটিউট)',
        'ভর্তি পরীক্ষা: 20 ডিসেম্বর 2025 (শনিবার সকাল 11:00 - 12:30)',
        'ভর্তি পরীক্ষা 100 নম্বরে (MCQ 60 + লিখিত 40), পাস নম্বর মোট 40 (MCQ 24, লিখিত 12)',
        'মেধা তালিকা 120 নম্বরে (ভর্তি পরীক্ষা 100 + এসএসসি জিপিএ×2=10 + এইচএসসি জিপিএ×2=10)'
      ]
    },
    {
      id: 'arts_law_social',
      shortName: 'কলা ও সামাজিক',
      name: 'কলা, আইন ও সামাজিক বিজ্ঞান ইউনিট',
      nameEn: 'Arts, Law & Social Sciences Unit',
      fee: 1050,
      feeBn: '1,050/-',
      totalSeats: '2,934টি',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '13 ডিসেম্বর 2025 (শনিবার)',
      examTime: 'সকাল 11:00 - 12:30',
      examDuration: '90 মিনিট (MCQ 45 মি. + লিখিত 45 মি.)',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      activeColor: 'bg-emerald-600/25 border-emerald-400 text-white shadow-lg shadow-emerald-500/10',
      minGpa: 'মানবিক: 7.50, বিজ্ঞান: 8.00, ব্যবসায়: 7.50',
      description: 'মানবিক, বিজ্ঞান ও ব্যবসায় শিক্ষা শাখা থেকে বিভাগ পরিবর্তনের সুযোগ।',
      criteria: 'এসএসসি (2020-2023) ও এইচএসসি (2025)। মানবিক শাখা: ৪র্থ বিষয়সহ মোট জিপিএ নূন্যতম 7.50 (আলাদাভাবে নূন্যতম 3.00)। বিজ্ঞান শাখা থেকে বিভাগ পরিবর্তন: মোট জিপিএ নূন্যতম 8.00 (আলাদাভাবে নূন্যতম 3.50)। ব্যবসায় শিক্ষা থেকে বিভাগ পরিবর্তন: মোট জিপিএ নূন্যতম 7.50 (আলাদাভাবে নূন্যতম 3.00)।',
      highlights: [
        'সর্বমোট আসন 2,934টি (মানবিক: 1,694, বিজ্ঞান: 962, ব্যবসায় শিক্ষা: 278)',
        'ভর্তি পরীক্ষা: 13 ডিসেম্বর 2025 (শনিবার সকাল 11:00 - 12:30)',
        'ভর্তি পরীক্ষা 100 নম্বরে (MCQ 60 + লিখিত 40), পাস নম্বর মোট 40 (MCQ 24 {বাংলা 5, ইংরেজি 5, সাধারণ জ্ঞান 10}, লিখিত 11 {বাংলা 5, ইংরেজি 5})',
        'মেধা তালিকা 120 নম্বরে (ভর্তি পরীক্ষা 100 + এসএসসি জিপিএ×2=10 + এইচএসসি জিপিএ×2=10)'
      ]
    },
    {
      id: 'business',
      shortName: 'ব্যবসায় শিক্ষা',
      name: 'ব্যবসায় শিক্ষা ইউনিট',
      nameEn: 'Business Studies Unit',
      fee: 1050,
      feeBn: '1,050/-',
      totalSeats: '1,050টি (আনুমানিক)',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '06 ডিসেম্বর 2025 (শনিবার)',
      examTime: 'সকাল 11:00 - 12:30',
      examDuration: '90 মিনিট (MCQ 45 মি. + লিখিত 45 মি.)',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      activeColor: 'bg-amber-600/25 border-amber-400 text-white shadow-lg shadow-amber-500/10',
      minGpa: 'মোট জিপিএ 7.50 (পৃথকভাবে 3.00)',
      description: 'ব্যবসায় শিক্ষা শাখা ও অন্যান্য শাখা থেকে বিভাগ পরিবর্তন।',
      criteria: 'এসএসসি (2020-2023) ও এইচএসসি (2025)। ব্যবসায় শিক্ষা শাখা: উভয় পরীক্ষায় আলাদাভাবে নূন্যতম জিপিএ 3.00 সহ মোট জিপিএ নূন্যতম 7.50 থাকতে হবে। বিজ্ঞান ও মানবিক শাখা থেকে বিভাগ পরিবর্তনের ক্ষেত্রে সংশ্লিষ্ট শাখার ন্যূনতম যোগ্যতা প্রযোজ্য।',
      highlights: [
        'ভর্তি পরীক্ষা: 06 ডিসেম্বর 2025 (শনিবার সকাল 11:00 - 12:30)',
        'ভর্তি পরীক্ষা মোট 100 নম্বরে (MCQ 60 + লিখিত 40), মোট পাস নম্বর 40',
        'ব্যবসায় শিক্ষা শাখা: উভয় পরীক্ষায় আলাদাভাবে নূন্যতম 3.00 সহ মোট জিপিএ নূন্যতম 7.50',
        'মেধা তালিকা 120 নম্বরে (ভর্তি পরীক্ষা 100 + এসএসসি জিপিএ 10 + এইচএসসি জিপিএ 10)'
      ]
    },
    {
      id: 'fine_arts',
      shortName: 'চারুকলা',
      name: 'চারুকলা ইউনিট',
      nameEn: 'Fine Arts Unit',
      fee: 1050,
      feeBn: '1,050/-',
      totalSeats: '130টি',
      negativeMark: '0.25',
      negativeMarkDetail: '(সাধারণ জ্ঞান MCQ-তে 0.25 কর্তন, অঙ্কনে নেগেটিভ নেই)',
      examDate: '29 নভেম্বর 2025 (শনিবার)',
      examTime: 'সকাল 11:00 - 12:30',
      examDuration: '90 মিনিট (MCQ 30 মি. + অঙ্কন 60 মি.)',
      badgeColor: 'border-rose-500/40 bg-rose-500/10 text-rose-300',
      activeColor: 'bg-rose-600/25 border-rose-400 text-white shadow-lg shadow-rose-500/10',
      minGpa: 'মোট জিপিএ 6.50 (পৃথকভাবে 3.00)',
      description: 'যেকোনো বিভাগ হতে এসএসসি ও এইচএসসি উত্তীর্ণদের জন্য।',
      criteria: 'এসএসসি (2020-2023) ও এইচএসসি (2025) যেকোনো শাখা (বিজ্ঞান, মানবিক বা ব্যবসায়) হতে উত্তীর্ণ শিক্ষার্থী আবেদন করতে পারবে। উভয় পরীক্ষায় আলাদাভাবে নূন্যতম জিপিএ 3.00 সহ মোট জিপিএ নূন্যতম 6.50 থাকতে হবে। পরীক্ষা কেন্দ্র শুধুমাত্র ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে অনুষ্ঠিত হবে।',
      highlights: [
        'মোট আসন সংখ্যা 130টি (8টি বিভাগে মেধার ভিত্তিতে আসন বণ্টন)',
        'ভর্তি পরীক্ষা: 29 নভেম্বর 2025 (শনিবার সকাল 11:00 - 12:30)',
        'পরীক্ষা কেন্দ্র: শুধুমাত্র ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস (অন্য বিভাগে কেন্দ্র নেই)',
        'সাধারণ জ্ঞান (MCQ) 40 নম্বর (30 মি.) + অঙ্কন পরীক্ষা 60 নম্বর (1 ঘণ্টা), পাস নম্বর 40%'
      ]
    },
    {
      id: 'iba',
      shortName: 'আইবিএ (BBA)',
      name: 'আইবিএ (IBA - BBA)',
      nameEn: 'Institute of Business Administration',
      fee: 1500,
      feeBn: '1,500/-',
      totalSeats: '120টি',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '28 নভেম্বর 2025 (শুক্রবার)',
      examTime: 'সকাল 10:00 - 12:00',
      examDuration: '120 মিনিট (2 ঘণ্টা)',
      badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-300',
      activeColor: 'bg-purple-600/25 border-purple-400 text-white shadow-lg shadow-purple-500/10',
      minGpa: 'মোট জিপিএ 8.00 (পৃথকভাবে 3.50)',
      description: 'ব্যবসায় প্রশাসন ইনস্টিটিউট আন্ডারগ্র্যাজুয়েট (BBA) প্রোগ্রাম।',
      criteria: '2025 সালের উচ্চ মাধ্যমিক/সমমান পরীক্ষায় যেকোনো শাখা হতে উত্তীর্ণ। মাধ্যমিক ও উচ্চ মাধ্যমিক উভয় পরীক্ষায় আলাদাভাবে নূন্যতম জিপিএ 3.50 সহ মোট জিপিএ অন্তত 8.00 থাকতে হবে। IGCSE/O-Level গণিতসহ 5টি বিষয়ে ও A-Level 2টি বিষয়ে পাস থাকতে হবে।',
      highlights: [
        'মোট আসন সংখ্যা 120টি (সম্পূর্ণ মেধার ভিত্তিতে পূরণ)',
        'ভর্তি পরীক্ষা: 28 নভেম্বর 2025 (শুক্রবার সকাল 10:00 টা - 12:00 টা)',
        'ভর্তি আবেদন ফি সর্বমোট 1,500/- টাকা, পরীক্ষার সময় 120 মিনিট (2 ঘণ্টা)',
        '1ম ধাপ: MCQ 70 (কাটঅফ সহ) + লিখিত 30 (কাটঅফ 12); 2য় ধাপ: ভাইভা/কমিউনিকেশন টেস্ট 20 নম্বর'
      ]
    }
  ];

  const currentUnit = duUnits.find(u => u.id === selectedUnitId) || duUnits[0];
  const unitFeeAmount = currentUnit.fee;
  const paymentChargeAmount = 21; // ~2% mobile banking / online payment charge

  const calculateTotal = () => {
    let total = 0;
    if (fees.unitFee) total += unitFeeAmount;
    if (fees.paymentCharge) total += paymentChargeAmount;
    if (fees.serviceFee) total += 100;
    if (fees.admissionPackage) total += 100;
    if (isCouponApplied) {
      total = Math.max(0, total - 50);
    }
    return total;
  };

  // Required documents for application
  const requiredDocs = [
    "এসএসসি (SSC) পরীক্ষার রোল নম্বর, রেজিস্ট্রেশন নম্বর ও শিক্ষা বোর্ড",
    "এইচএসসি (HSC) পরীক্ষার রোল নম্বর, রেজিস্ট্রেশন নম্বর ও শিক্ষা বোর্ড",
    "সদ্য তোলা পাসপোর্ট সাইজ রঙিন ছবি (360-545 পিক্সেল, ফাইল সাইজ 30-200 KB)",
    "আবেদনকারীর নিজস্ব সচল মোবাইল নম্বর (যাতে এসএমএস ও নিরাপত্তা কোড যাবে)",
    "আবেদনকারীর বর্তমান ও স্থায়ী ঠিকানা এবং পোস্টাল কোড",
    "পরীক্ষার পছন্দক্রম অনুযায়ী বিভাগীয় কেন্দ্র (8টি বিভাগীয় শহরের যেকোনো একটি)",
    "কোটা সনদ ও প্রমাণপত্র (মুক্তিযোদ্ধা, উপজাতি, প্রতিবন্ধী ও পোষ্য কোটার ক্ষেত্রে প্রযোজ্য)"
  ];

  // FAQs
  const faqs = [
    {
      q: "ঢাকা বিশ্ববিদ্যালয়ে কি সেকেন্ড টাইম (Second Time) পরীক্ষা দেওয়ার সুযোগ আছে?",
      a: "না। ঢাকা বিশ্ববিদ্যালয়ে কোনো প্রকার সেকেন্ড টাইম (Second Time) পরীক্ষা দেওয়ার সুযোগ নেই। 2025-2026 শিক্ষাবর্ষে শুধুমাত্র 2025 সালের এইচএসসি/সমমান পরীক্ষায় ১ম বার উত্তীর্ণ শিক্ষার্থীরাই আবেদন করতে পারবে (এসএসসি 2020 হতে 2023)।"
    },
    {
      q: "ভর্তি পরীক্ষা কি শুধুমাত্র ঢাকায় হবে নাকি বিভাগীয় শহরেও অনুষ্ঠিত হবে?",
      a: "চারুকলা ইউনিট ব্যতীত অন্য সকল ইউনিটের (বিজ্ঞান, কলা আইন ও সামাজিক বিজ্ঞান, ব্যবসায় শিক্ষা) পরীক্ষা ঢাকাসহ দেশের 8টি বিভাগীয় শহরের পাবলিক বিশ্ববিদ্যালয় ক্যাম্পাসে অনুষ্ঠিত হবে। চারুকলা ইউনিটের সাধারণ জ্ঞান ও অঙ্কন পরীক্ষা শুধুমাত্র ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে অনুষ্ঠিত হবে।"
    },
    {
      q: "2025-2026 শিক্ষাবর্ষে আবেদন ও পরীক্ষার গুরুত্বপূর্ণ তারিখগুলো কী কী?",
      a: "অনলাইন আবেদন গ্রহণ: 29 অক্টোবর 2025 (দুপুর 12:00) হতে 16 নভেম্বর 2025 (রাত 11:59) পর্যন্ত। প্রবেশপত্র সংগ্রহ: 30 নভেম্বর 2025 হতে (আইবিএ: 24 নভেম্বর 2025)। ভর্তি পরীক্ষা: আইবিএ 28 নভেম্বর 2025, চারুকলা 29 নভেম্বর 2025, ব্যবসায় শিক্ষা 06 ডিসেম্বর 2025, কলা আইন ও সামাজিক বিজ্ঞান 13 ডিসেম্বর 2025 এবং বিজ্ঞান ইউনিট 20 ডিসেম্বর 2025।"
    },
    {
      q: "একজন শিক্ষার্থী কি একাধিক ইউনিটে আবেদন করতে পারবে?",
      a: "হ্যাঁ! শর্তপূরণ সাপেক্ষে একজন শিক্ষার্থী যোগ্যতা অনুযায়ী একাধিক ইউনিটে আবেদন করতে পারবে। বিজ্ঞান ও ব্যবসায় শিক্ষা শাখার শিক্ষার্থীরা কলা, আইন ও সামাজিক বিজ্ঞান ইউনিটেও বিভাগ পরিবর্তনের মাধ্যমে পরীক্ষা দিতে পারবে।"
    },
    {
      q: "ভর্তি পরীক্ষার মানবণ্টন ও মেধা তালিকা কীভাবে তৈরি হয়?",
      a: "মোট 120 নম্বরের ভিত্তিতে চূড়ান্ত মেধা তালিকা তৈরি করা হয়। সাধারণ ইউনিটগুলোতে 100 নম্বর ভর্তি পরীক্ষার (60 নম্বর MCQ + 40 নম্বর লিখিত, সময় 90 মিনিট) এবং 20 নম্বর এসএসসি ও এইচএসসি জিপিএ-র ওপর (এসএসসি জিপিএ × 2 = 10 এবং এইচএসসি জিপিএ × 2 = 10)। চারুকলায় MCQ 40 + অঙ্কন 60 এবং আইবিএ-তে MCQ 70 + লিখিত 30 + ভাইভা 20 নম্বর।"
    },
    {
      q: "ভর্তি পরীক্ষায় কি নেগেটিভ মার্কিং আছে?",
      a: "হ্যাঁ। প্রতিটি ভুল MCQ উত্তরের জন্য 0.25 নম্বর কর্তন করা হবে। সঠিক উত্তরের জন্য 1 নম্বর পাওয়া যাবে। চারুকলা ইউনিটের অঙ্কন পরীক্ষায় কোনো নেগেটিভ মার্কিং নেই।"
    },
    {
      q: "কাজী স্টোর থেকে ঘরে বসেই কি ঢাবি আবেদন সম্পন্ন করা যাবে?",
      a: "অবশ্যই! আপনার এসএসসি ও এইচএসসি রোল, রেজিস্ট্রেশন ও ছবির কপি আমাদের হোয়াটসঅ্যাপে পাঠিয়ে দিলে অভিজ্ঞ অপারেটর দ্বারা নির্ভুলভাবে অনলাইন ফরম পূরণ, ছবি রিসাইজ, বিভাগীয় কেন্দ্র নির্বাচন ও ফি পেমেন্ট করে নিশ্চিত কনফার্মেশন কপি প্রদান করা হয়।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn selection:bg-blue-500/30">
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/15 via-teal-900/10 to-[#0F172A] opacity-90"></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 py-3 mb-4 backdrop-blur-md bg-[#0F172A]/70 sticky top-0 z-20 border-b border-slate-800 rounded-xl px-4">
          <button onClick={() => navigate(-1)} className="hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> <span>ফিরে যান</span>
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">ঢাকা বিশ্ববিদ্যালয় আন্ডারগ্র্যাজুয়েট ভর্তি</span>
        </nav>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-8 pb-16"
        >
          {/* Section 1: Official Notice Banner Card */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700/70 pb-6 mb-6">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <GraduationCap className="w-7 h-7 text-blue-400" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    ঢাকা বিশ্ববিদ্যালয়
                  </h1>
                </div>
                <p className="text-sm sm:text-base font-medium text-teal-400 font-en">University of Dhaka</p>
                <p className="text-sm text-slate-300 mt-1">নীলক্ষেত রোড, ঢাকা-1000, বাংলাদেশ। (স্থাপিত: 1921 খ্রি.)</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-1.5 w-full sm:w-auto shrink-0 shadow-inner">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>ভর্তি শাখা: <strong className="text-white">আন্ডারগ্র্যাজুয়েট প্রোগ্রাম</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>হেল্পলাইন: <span className="font-en">02-9661900-73</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                  <a href="https://admission.eis.du.ac.bd" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 underline font-en">
                    admission.eis.du.ac.bd
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-en">admission@du.ac.bd</span>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left bg-blue-950/40 border border-blue-500/30 rounded-2xl p-5 mb-6">
              <div className="mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
                  আন্ডারগ্র্যাজুয়েট প্রোগ্রামে ভর্তি বিজ্ঞপ্তি ২০২৫-২০২৬
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
                এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে যে, ঢাকা বিশ্ববিদ্যালয়ের 2025-2026 শিক্ষাবর্ষে 4 বছর মেয়াদি আন্ডারগ্র্যাজুয়েট প্রোগ্রামে কলা আইন ও সামাজিক বিজ্ঞান ইউনিট, বিজ্ঞান ইউনিট, ব্যবসায় শিক্ষা ইউনিট, চারুকলা ইউনিট এবং আইবিএ-তে ১ম বর্ষে ভর্তির অনলাইন আবেদন কার্যক্রম চলমান রয়েছে। শিক্ষার্থীরা ঘরে বসেই বা আমাদের <strong className="text-emerald-300">কাজী স্টোরে</strong> এসে অভিজ্ঞ অপারেটরের মাধ্যমে সম্পূর্ণ নির্ভুলভাবে অনলাইনে আবেদন ফরম পূরণ, ছবি আপলোড ও ফি পরিশোধ করতে পারবেন।
              </p>

              {/* Official Key Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-blue-900/50 text-xs">
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">আবেদন গ্রহণ</span>
                  <span className="text-white font-semibold font-en">29 Oct – 16 Nov 2025</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">প্রবেশপত্র সংগ্রহ</span>
                  <span className="text-teal-300 font-semibold font-en">30 Nov 2025 হতে</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">পরীক্ষার সময়কাল</span>
                  <span className="text-amber-300 font-semibold font-en">28 Nov – 20 Dec 2025</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">ভর্তি আবেদন ফি</span>
                  <span className="text-emerald-400 font-semibold font-en">1,050/- (IBA: 1,500/-)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-blue-600/25 active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>ঢাবি ভর্তি আবেদন সহায়তা</span>
              </a>
              <a 
                href="https://admission.eis.du.ac.bd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all border border-slate-700"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>অফিশিয়াল ওয়েবসাইট</span>
              </a>
            </div>
          </div>

          {/* গুরুত্বপূর্ণ সতর্কতা (২য় মার্ক করা উপাদানটি রেখে দেওয়া হলো) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-amber-200 shadow-md">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-300">গুরুত্বপূর্ণ সতর্কতা:</strong> ঢাকা বিশ্ববিদ্যালয়ে কোনো দ্বিতীয়বার (Second Time) পরীক্ষা দেওয়ার সুযোগ নেই। শুধুমাত্র সংশ্লিষ্ট শিক্ষাবর্ষের নিয়মিত শিক্ষার্থীরাই অংশগ্রহণ করতে পারবে।
            </div>
          </div>

          {/* Section 3: ন্যূনতম যোগ্যতা ও শর্তাবলী (সিলেক্টেড ইউনিটের তথ্য প্রদর্শন) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  ন্যূনতম যোগ্যতা ও শর্তাবলী
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  যে ইউনিটের তথ্য দেখতে চান তা নির্বাচন করুন:
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 self-start sm:self-auto font-medium">
                সিলেক্টেড: {currentUnit.name}
              </span>
            </div>

            {/* Unit Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
              {duUnits.map((unit) => {
                const isSelected = selectedUnitId === unit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnitId(unit.id)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? unit.activeColor
                        : 'bg-slate-900/60 border-slate-700/70 text-slate-300 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-sm sm:text-base leading-tight">{unit.shortName || unit.name}</span>
                    <span className="text-[11px] font-en opacity-80">{unit.nameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Unit Detailed Information Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentUnit.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-inner space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-teal-400" />
                      {currentUnit.name}
                    </h4>
                    <p className="text-xs text-teal-400 font-en mt-0.5">{currentUnit.nameEn}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs px-3 py-1 rounded-lg border font-semibold ${currentUnit.badgeColor}`}>
                      আবেদন ফি: {currentUnit.feeBn}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-300 font-semibold font-en">
                      মোট আসন: {currentUnit.totalSeats}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 font-semibold font-en">
                      নেগেটিভ মার্ক: -{currentUnit.negativeMark}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-lg border border-slate-700 bg-slate-800 text-slate-300">
                      {currentUnit.examDuration}
                    </span>
                  </div>
                </div>

                {/* Eligibility Criteria Description */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                  <h5 className="text-xs sm:text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    আবেদনের সুনির্দিষ্ট যোগ্যতা ও জিপিএ রিকোয়ারমেন্ট:
                  </h5>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    {currentUnit.criteria}
                  </p>
                </div>

                {/* Key Points & Guidelines */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    প্রধান বিষয় ও নির্দেশিকা:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentUnit.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl text-xs sm:text-sm text-slate-300">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>পরীক্ষার তারিখ: <strong className="text-slate-100">{currentUnit.examDate}</strong></span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-rose-500/10 border border-rose-500/20 p-3 rounded-xl text-xs sm:text-sm text-rose-200">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>নেগেটিভ মার্কিং: <strong className="text-white font-en">-{currentUnit.negativeMark}</strong> {currentUnit.negativeMarkDetail}</span>
                    </div>
                    <div className="flex items-start gap-2.5 bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl text-xs sm:text-sm text-slate-300">
                      <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>পরীক্ষার সময়: <strong className="text-slate-100">{currentUnit.examTime}</strong></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Section 4: ভর্তি পরীক্ষার পদ্ধতি ও মানবণ্টন (Collapsible) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all">
            <button
              type="button"
              onClick={() => setIsMarksExpanded(!isMarksExpanded)}
              className="w-full flex items-center justify-between text-left cursor-pointer group"
              aria-expanded={isMarksExpanded}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                <FileText className="w-6 h-6 text-purple-400" />
                <span>মানবণ্টন ও মূল্যায়ন</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 hidden sm:inline-block font-normal">
                  {isMarksExpanded ? 'লুকান' : 'বিস্তারিত দেখুন'}
                </span>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-300 group-hover:border-purple-500/50 group-hover:text-white transition-all">
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMarksExpanded ? 'rotate-180 text-purple-400' : ''}`} />
                </div>
              </div>
            </button>

            <AnimatePresence>
              {isMarksExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-slate-700/70 pt-5 mt-5">
                    <p className="text-sm text-slate-300 mb-6">
                      মোট 120 নম্বরের ভিত্তিতে শিক্ষার্থীদের চূড়ান্ত মেধা তালিকা প্রস্তুত করা হবে:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">এমসিকিউ (MCQ) অংশ</span>
                        <span className="text-3xl font-bold text-blue-400 font-en">60</span>
                        <span className="text-xs text-slate-400 block mt-1">সময়: 45 মিনিট (চারুকলা 40, আইবিএ 70)</span>
                      </div>
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">লিখিত / অঙ্কন অংশ</span>
                        <span className="text-3xl font-bold text-emerald-400 font-en">40</span>
                        <span className="text-xs text-slate-400 block mt-1">সময়: 45 মিনিট (চারুকলা 60, আইবিএ 30)</span>
                      </div>
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">এসএসসি ও এইচএসসি জিপিএ</span>
                        <span className="text-3xl font-bold text-yellow-400 font-en">20</span>
                        <span className="text-xs text-slate-400 block mt-1">এসএসসি 10 + এইচএসসি 10 (আইবিএ: ভাইভা 20)</span>
                      </div>
                    </div>

                    {/* Unit-wise Pass Marks Table/List */}
                    <div className="space-y-3 bg-slate-900/50 border border-slate-700/50 p-4 rounded-2xl text-xs sm:text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>বিজ্ঞান ইউনিট:</strong> মোট 100 নম্বরে পাস নম্বর 40। এর মধ্যে MCQ-তে ন্যূনতম 24 এবং লিখিত অংশে ন্যূনতম 12 নম্বর অবশ্যই পেতে হবে।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>কলা, আইন ও সামাজিক বিজ্ঞান ইউনিট:</strong> মোট 100 নম্বরে পাস নম্বর 40। MCQ-তে ন্যূনতম 24 (বাংলা 5, ইংরেজি 5, সাধারণ জ্ঞান 10) এবং লিখিততে ন্যূনতম 11 (বাংলা 5, ইংরেজি 5) পেতে হবে।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>চারুকলা ইউনিট:</strong> সাধারণ জ্ঞান (MCQ) 40 নম্বর (30 মি.) + অঙ্কন 60 নম্বর (1 ঘণ্টা)। পাস নম্বর 40% (40 নম্বর)। পরীক্ষা কেন্দ্র শুধুমাত্র ঢাবি ক্যাম্পাস।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>আইবিএ (IBA - BBA):</strong> ১ম ধাপ 100 নম্বর (MCQ 70: ইংরেজি 30 [কাটঅফ 12], গণিত 25 [কাটঅফ 10], অ্যানালিটিক্যাল 15 [কাটঅফ 6] + লিখিত 30 [কাটঅফ 12])। ২য় ধাপ: ভাইভা 20 নম্বর (পাস 12)।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span><strong>নেগেটিভ মার্কিং:</strong> প্রতিটি ভুল MCQ উত্তরের জন্য 0.25 নম্বর কর্তন করা হবে (চারুকলা অঙ্কনে কোনো নেগেটিভ নেই)।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span><strong>পরীক্ষা কেন্দ্র:</strong> সাধারণ ইউনিটগুলোর পরীক্ষা ঢাকা এবং 7টি বিভাগীয় শহরের পাবলিক বিশ্ববিদ্যালয় কেন্দ্রে অনুষ্ঠিত হবে (চারুকলা ব্যতীত)।</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Section 5: আবেদনের জন্য প্রয়োজনীয় কাগজপত্র ও চেকলিস্ট */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2 border-b border-slate-700 pb-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              অনলাইন আবেদনের জন্য প্রয়োজনীয় তথ্য ও কাগজপত্র
            </h3>
            <p className="text-sm text-slate-300 mb-6">
              আমাদের কাজী স্টোরে আবেদন করতে আসার সময় বা অনলাইনে পাঠানোর জন্য নিম্নলিখিত তথ্য ও কাগজপত্র প্রস্তুত রাখুন:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {requiredDocs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-200 text-sm sm:text-base leading-snug">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: ইন্টারেক্টিভ ফি ক্যালকুলেটর (Interactive Cost Calculator) */}
          <div className="bg-slate-800/80 border border-slate-600/50 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">ভর্তি ফি ও সার্ভিস চার্জ</h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  আপনার কাঙ্ক্ষিত ইউনিট নির্বাচন করুন এবং কাজী স্টোর সার্ভিস ও এডমিশন প্যাকেজ যোগ করে মোট খরচ দেখে নিন:
                </p>

                {/* Unit Selector */}
                <div className="mb-5">
                  <label className="text-xs text-slate-400 block mb-2 font-normal">আবেদনের ইউনিট নির্বাচন করুন:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {duUnits.map((u) => (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => setSelectedUnitId(u.id)}
                        className={`p-2.5 rounded-xl border transition-all text-center cursor-pointer flex flex-col items-center justify-center ${
                          selectedUnitId === u.id 
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow-md shadow-teal-500/10' 
                            : 'bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-medium text-slate-200 truncate w-full">{u.shortName || u.name}</span>
                        <span className="text-emerald-400 text-xs font-en font-bold mt-0.5 block">{u.fee}/-</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.unitFee}
                      onChange={(e) => setFees({...fees, unitFee: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      ঢাবি অফিশিয়াল আবেদন ফি ({currentUnit.name})
                    </span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base font-en">{unitFeeAmount} টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.paymentCharge}
                      onChange={(e) => setFees({...fees, paymentCharge: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      পেমেন্ট গেটওয়ে চার্জ
                    </span>
                    <span className="text-slate-300 font-bold text-sm sm:text-base font-en">{paymentChargeAmount} টাকা</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={fees.serviceFee}
                      onChange={(e) => setFees({...fees, serviceFee: e.target.checked})}
                    />
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      আবেদন সার্ভিস চার্জ
                    </span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base font-en">100 টাকা</span>
                  </label>

                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex items-center gap-3 cursor-pointer group flex-1">
                        <input 
                          type="checkbox" 
                          className="peer sr-only"
                          checked={fees.admissionPackage}
                          onChange={(e) => setFees({...fees, admissionPackage: e.target.checked})}
                        />
                        <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-all flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-slate-200 text-sm sm:text-base font-semibold group-hover:text-white transition-colors">
                          এডমিশন প্যাকেজ
                        </span>
                      </label>

                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold text-sm sm:text-base font-en">100 টাকা</span>
                        <button
                          type="button"
                          onClick={() => setIsPackageDetailsOpen(!isPackageDetailsOpen)}
                          aria-label="প্যাকেজ বিবরণ"
                          title={isPackageDetailsOpen ? 'লুকান' : 'দেখুন'}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer flex items-center justify-center"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPackageDetailsOpen ? 'rotate-180 text-teal-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isPackageDetailsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="w-full mt-2.5 bg-slate-900/90 p-3 sm:p-4 rounded-xl border border-slate-700/70 text-xs sm:text-sm text-slate-300 space-y-2">
                            <div className="space-y-1.5 text-slate-300">
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">আবেদন ফি</span>
                                <span className="font-en text-slate-200 font-medium shrink-0">100 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">আবেদন পেমেন্ট স্লিপ</span>
                                <span className="font-en text-slate-200 font-medium shrink-0">20 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">এডমিট কার্ড কালার প্রিন্ট 1 কপি</span>
                                <span className="font-en text-slate-200 font-medium shrink-0">20 টাকা</span>
                              </p>
                            </div>
                            <p className="text-teal-300 font-semibold pt-1 text-xs leading-relaxed">
                              ※ আলাদা আলাদা প্রিন্ট করলে খরচ বেশি, সম্পূর্ণ এডমিশন প্যাকেজে পাচ্ছেন ছাড়সহ 100 টাকা মাত্র।
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Promo Code Input Section (Selector 3 with Selector 1 and 2 inside) */}
                <div className="mt-3.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60">
                  {!isCouponApplied ? (
                    <form onSubmit={handleApplyCoupon} className="relative flex items-center">
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                          if (couponError) setCouponError('');
                        }}
                        placeholder="প্রমো কোড লিখুন"
                        className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-4 pr-24 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 uppercase font-en tracking-wider"
                      />
                      <button
                        type="submit"
                        className="absolute right-1.5 px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>অ্যাপ্লাই</span>
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-center justify-between gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-3 py-2 text-xs sm:text-sm text-emerald-300">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>কোড সফলভাবে ভেরিফাইড! 50 টাকা ছাড় প্রযোজ্য হয়েছে।</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="p-1 rounded-lg hover:bg-emerald-500/20 text-slate-400 hover:text-rose-400 transition-colors shrink-0 cursor-pointer"
                        title="বাতিল করুন"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {couponError && (
                    <p className="text-xs text-rose-400 mt-2 flex items-center gap-1 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{couponError}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Total Display Box */}
              <div className="w-full lg:w-72 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-700/80 p-6 flex flex-col justify-center items-center text-center shadow-xl">
                <span className="text-xs text-slate-400 mb-1">মোট সম্ভাব্য খরচ</span>
                <div className="text-4xl sm:text-5xl font-bold text-teal-400 mb-2 font-en">
                  ৳ {calculateTotal()}
                </div>
                {isCouponApplied && (
                  <span className="inline-block text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-lg font-bold mb-3 font-en">
                    কুপন ছাড় (-50 টাকা)
                  </span>
                )}
                <span className="text-xs text-slate-500 mb-5">
                  {isCouponApplied 
                    ? 'কুপন ভেরিফাইড (মোট খরচ থেকে 50 টাকা ছাড়)' 
                    : 'ইউনিট ফি + পেমেন্ট চার্জ + সার্ভিস খরচ'}
                </span>
                
                <a 
                  href="https://wa.me/message/L2XAYVWBE5RIJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm text-center shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-teal-100 shrink-0" />
                  <span>আবেদন করতে যোগাযোগ করুন</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 7: FAQs */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
              সাধারণ জিজ্ঞাসা (FAQ)
            </h3>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/40 backdrop-blur-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-slate-700/30 transition-colors text-left"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-slate-200 pr-4">{faq.q}</h4>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 md:p-5 pt-0 border-t border-slate-700/50 text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
