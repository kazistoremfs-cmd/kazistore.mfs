import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ChevronRight, CheckCircle2, ChevronDown, Calculator, 
  ExternalLink, Calendar, Building2, Phone, Mail, Globe, 
  FileText, AlertCircle, BookOpen, Clock, ShieldCheck, Sparkles, MessageCircle,
  GraduationCap, Award, MapPin, Check, X, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RUAdmissionDetails() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPackageDetailsOpen, setIsPackageDetailsOpen] = useState<boolean>(false);
  const [isMarksExpanded, setIsMarksExpanded] = useState<boolean>(false);
  const [selectedUnitId, setSelectedUnitId] = useState<string>('a_unit');

  // Coupon state for RU
  const [couponCode, setCouponCode] = useState<string>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);
  const [couponError, setCouponError] = useState<string>('');

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!couponCode.trim()) {
      setCouponError('অনুগ্রহ করে কোডটি লিখুন');
      return;
    }
    if (couponCode.trim().toUpperCase() === 'KSTRU27') {
      setIsCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('ভুল কোড! সঠিক কোডটি দিন (যেমন: KSTRU27)।');
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

  // RU Units Data based on 2025-2026 official circular & department conditions
  const ruUnits = [
    {
      id: 'a_unit',
      shortName: 'ইউনিট A (মানবিক)',
      name: 'ইউনিট-A (মানবিক ও অন্যান্য অনুষদ)',
      nameEn: 'Unit-A (Humanities, Law, Social Sciences, Fine Arts & IER)',
      fee: 1320,
      feeBn: '1,320/- (ফি 1,200 + 10% সার্ভিস চার্জ 120)',
      totalSeats: 'মানবিক ৭৫% ও অ-মানবিক ২৫% আসন',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '17 জানুয়ারি 2026 (শনিবার)',
      examTime: '১ম শিফট: সকাল 11:00-12:00 | ২য় শিফট: বিকেল 03:00-04:00',
      examDuration: '60 মিনিট (1 ঘণ্টা)',
      badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
      activeColor: 'bg-emerald-600/25 border-emerald-400 text-white shadow-lg shadow-emerald-500/10',
      minGpa: 'মানবিক: 7.00 (পৃথক 3.00), বিজ্ঞান: 8.00 (পৃথক 3.50), বাণিজ্য: 7.00 (পৃথক 3.00)',
      description: 'কলা অনুষদ (১২টি বিভাগ), আইন অনুষদ (২টি বিভাগ), সামাজিক বিজ্ঞান অনুষদ (১০টি বিভাগ), চারুকলা অনুষদ (৩টি বিভাগ) এবং শিক্ষা ও গবেষণা ইনস্টিটিউট (আইইআর)।',
      criteria: '২০২৪ ও ২০২৫ সালের এইচএসসি/সমমান উত্তীর্ণ শিক্ষার্থীরা আবেদন করতে পারবে। মানবিক শাখা থেকে উভয় পরীক্ষায় ৪র্থ বিষয়সহ ন্যূনতম জিপিএ ৩.০০ সহ মোট জিপিএ ন্যূনতম ৭.০০ থাকতে হবে। বাণিজ্য শাখা থেকে উভয় পরীক্ষায় ন্যূনতম ৩.০০ সহ মোট ৭.০০ এবং বিজ্ঞান শাখা থেকে ন্যূনতম ৩.৫০ সহ মোট ৮.০০ জিপিএ থাকতে হবে।',
      faculties: [
        'কলা অনুষদ: দর্শন, ইতিহাস, ইংরেজি, বাংলা, ইসলামের ইতিহাস ও সংস্কৃতি, আরবী, ইসলামিক স্টাডিজ, নাট্যকলা, সঙ্গীত, ফারসি ভাষা ও সাহিত্য, সংস্কৃত, উর্দু',
        'আইন অনুষদ: আইন, আইন ও ভূমি প্রশাসন',
        'সামাজিক বিজ্ঞান অনুষদ: অর্থনীতি, রাষ্ট্রবিজ্ঞান, সমাজকর্ম, সমাজবিজ্ঞান, গণযোগাযোগ ও সাংবাদিকতা, ইনফরমেশন সায়েন্স এন্ড লাইব্রেরী ম্যানেজমেন্ট, লোক প্রশাসন, নৃবিজ্ঞান, ফোকলোর, আন্তর্জাতিক সম্পর্ক',
        'চারুকলা অনুষদ: চিত্রকলা, প্রাচ্যকলা ও ছাপচিত্র; মৃৎশিল্প ও ভাস্কর্য; গ্রাফিক ডিজাইন, কারুশিল্প ও শিল্পকলার ইতিহাস',
        'ইনস্টিটিউট: শিক্ষা ও গবেষণা ইনস্টিটিউট (আইইআর)'
      ],
      highlights: [
        'ভর্তি পরীক্ষা: 17 জানুয়ারি 2026 (শনিবার), প্রতিদিন ২টি শিফটে অনুষ্ঠিত হবে',
        'পূর্ণমান 100 নম্বরে 80টি MCQ প্রশ্ন (প্রতি প্রশ্নে 1.25 নম্বর), সময় 1 ঘণ্টা, পাস নম্বর 40',
        'MCQ মানবণ্টন: বাংলা 28টি (35 নম্বর), ইংরেজি 28টি (35 নম্বর), সাধারণ জ্ঞান 24টি (30 নম্বর)',
        'ইংরেজি ও আইন বিভাগের জন্য MCQ উত্তীর্ণদের অতিরিক্ত 50 নম্বরের সমন্বিত লিখিত পরীক্ষা অনুষ্ঠিত হবে',
        'চারুকলা, সঙ্গীত ও নাট্যকলা বিভাগের জন্য অতিরিক্ত 100 নম্বরের ব্যবহারিক পরীক্ষা (পাস 40) প্রযোজ্য'
      ]
    },
    {
      id: 'b_unit',
      shortName: 'ইউনিট B (বাণিজ্য)',
      name: 'ইউনিট-B (বিজনেস স্টাডিজ ও আইবিএ)',
      nameEn: 'Unit-B (Business Studies & IBA)',
      fee: 1100,
      feeBn: '1,100/- (ফি 1,000 + 10% সার্ভিস চার্জ 100)',
      totalSeats: '৫৬৪টি (বাণিজ্য ৩৭৫, বিজ্ঞান ১৫৮, মানবিক ৩১)',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '24 জানুয়ারি 2026 (শনিবার)',
      examTime: '১ম শিফট: সকাল 11:00-12:00 | ২য় শিফট: বিকেল 03:00-04:00',
      examDuration: '60 মিনিট (1 ঘণ্টা)',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      activeColor: 'bg-amber-600/25 border-amber-400 text-white shadow-lg shadow-amber-500/10',
      minGpa: 'বাণিজ্য: 7.00 (পৃথক 3.00), বিজ্ঞান: 8.00 (পৃথক 3.50), মানবিক: 7.00 (পৃথক 3.00)',
      description: 'বিজনেস স্টাডিজ অনুষদ (৬টি বিভাগ) এবং ব্যবসায় প্রশাসন ইনস্টিটিউট (আইবিএ)। বাণিজ্য ও অ-বাণিজ্য উভয় গ্রুপের শিক্ষার্থীরা আবেদন করতে পারবে।',
      criteria: '২০২৪ ও ২০২৫ সালের এইচএসসি/সমমান, ডিপ্লোমা-ইন-কমার্স ও অন্যান্য সমমান। বাণিজ্য শাখা থেকে উভয় পরীক্ষায় ন্যূনতম ৩.০০ সহ মোট জিপিএ ন্যূনতম ৭.০০। বিজ্ঞান শাখা থেকে বিভাগ পরিবর্তনে মোট ন্যূনতম ৮.০০ (পৃথক ৩.৫০) এবং মানবিক শাখা থেকে মোট ন্যূনতম ৭.০০ (পৃথক ৩.০০)।',
      faculties: [
        'বিজনেস স্টাডিজ অনুষদ: হিসাববিজ্ঞান ও তথ্য ব্যবস্থা (১১০ আসন), ম্যানেজমেন্ট স্টাডিজ (১০০ আসন), মার্কেটিং (৯০ আসন), ফিন্যান্স (৯০ আসন), ব্যাংকিং ও ইনস্যুরেন্স (৮০ আসন), ট্যুরিজম এন্ড হসপিটালিটি ম্যানেজমেন্ট (৫০ আসন)',
        'ইনস্টিটিউট: ব্যবসায় প্রশাসন ইনস্টিটিউট - আইবিএ (৪৪টি আসন)'
      ],
      highlights: [
        'ভর্তি পরীক্ষা: 24 জানুয়ারি 2026 (শনিবার), 2টি শিফটে অনুষ্ঠিত হবে',
        'মোট আসন সংখ্যা 564টি (বাণিজ্য শাখা: 375, বিজ্ঞান শাখা: 158, মানবিক শাখা: 31)',
        'বাণিজ্য গ্রুপ MCQ: বাংলা (10), ইংরেজি (25), ব্যবসায় সংগঠন ও ব্যবস্থাপনা (25), হিসাববিজ্ঞান (25), ফিন্যান্স/উৎপাদন (15)',
        'অ-বাণিজ্য গ্রুপ MCQ: বাংলা (10), ইংরেজি (25), সাধারণ জ্ঞান (50), আইসিটি (15)',
        'আইবিএ-তে ভর্তির জন্য ইংরেজিতে 25 এর মধ্যে ন্যূনতম 10 নম্বর পেতে হবে'
      ]
    },
    {
      id: 'c_unit',
      shortName: 'ইউনিট C (বিজ্ঞান)',
      name: 'ইউনিট-C (বিজ্ঞান ও প্রযুক্তি অনুষদসমূহ)',
      nameEn: 'Unit-C (Science, Engineering, Agriculture, Life Sciences, Geo-Sciences)',
      fee: 1320,
      feeBn: '1,320/- (ফি 1,200 + 10% সার্ভিস চার্জ 120)',
      totalSeats: 'বিজ্ঞান অনুষদভুক্ত সকল বিভাগ ও ইনস্টিটিউট',
      negativeMark: '0.25',
      negativeMarkDetail: '(প্রতিটি ভুল MCQ উত্তরে 0.25 নম্বর কর্তন)',
      examDate: '16 জানুয়ারি 2026 (শনিবার)',
      examTime: '১ম শিফট: সকাল 11:00-12:00 | ২য় শিফট: বিকেল 03:00-04:00',
      examDuration: '60 মিনিট (1 ঘণ্টা)',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      activeColor: 'bg-blue-600/25 border-blue-400 text-white shadow-lg shadow-blue-500/10',
      minGpa: 'বিজ্ঞান: 8.00 (পৃথক 3.50), মানবিক/বাণিজ্য: 7.00 (পৃথক 3.00)',
      description: 'বিজ্ঞান অনুষদ (৯টি বিভাগ), কৃষি অনুষদ (২টি বিভাগ), প্রকৌশল অনুষদ (৫টি বিভাগ), জীববিজ্ঞান অনুষদ (৬টি বিভাগ), ভূ-বিজ্ঞান অনুষদ (২টি বিভাগ), ফিশারীজ ও ভেটেরিনারি অনুষদ।',
      criteria: '২০২৪ ও ২০২৫ সালের বিজ্ঞান শাখা থেকে এইচএসসি/সমমান ও ডিপ্লোমা-ইন-ইঞ্জিনিয়ারিং উত্তীর্ণ। এসএসসি ও এইচএসসি উভয় পরীক্ষায় ৪র্থ বিষয়সহ আলাদাভাবে ন্যূনতম ৩.৫০ সহ মোট জিপিএ ন্যূনতম ৮.০০। অ-বিজ্ঞান শাখা (মানবিক/বাণিজ্য) থেকে ভূগোল, মনোবিজ্ঞান ও শারীরিক শিক্ষায় মোট ৭.০০ (পৃথক ৩.০০)।',
      faculties: [
        'বিজ্ঞান অনুষদ: গণিত, পদার্থবিজ্ঞান, রসায়ন, পরিসংখ্যান, প্রাণরসায়ন ও অনুপ্রাণবিজ্ঞান, ফার্মেসী, পপুলেশন সায়েন্স, ফলিত গণিত, শারীরিক শিক্ষা ও ক্রীড়াবিজ্ঞান',
        'কৃষি অনুষদ: এগ্রোনমী এন্ড এগ্রিকালচারাল এক্সটেনশন, ক্রপ সায়েন্স এন্ড টেকনোলজি',
        'প্রকৌশল অনুষদ: ফলিত রসায়ন ও রসায়ন প্রকৌশল, সিএসই, আইসিই, ম্যাটেরিয়ালস সায়েন্স, ইইই',
        'জীববিজ্ঞান অনুষদ: মনোবিজ্ঞান, উদ্ভিদবিজ্ঞান, প্রাণিবিদ্যা, জেনেটিক ইঞ্জিনিয়ারিং এন্ড বায়োটেকনোলজি, ক্লিনিক্যাল সাইকোলজি, মাইক্রোবায়োলজি',
        'অন্যান্য: ভূ-বিজ্ঞান, ফিশারীজ, ভেটেরিনারি এন্ড এনিমেল সায়েন্সেস অনুষদ'
      ],
      highlights: [
        'ভর্তি পরীক্ষা: 16 জানুয়ারি 2026 (শনিবার), 2টি শিফটে অনুষ্ঠিত হবে',
        'বিজ্ঞান শাখা MCQ: পদার্থবিজ্ঞান (31.25), রসায়ন (31.25), আইসিটি (6.25), গণিত/জীববিজ্ঞান (31.25)',
        'আবশ্যক শাখায় ন্যূনতম 25 এবং ঐচ্ছিক শাখায় ন্যূনতম 10 সহ মোট পাস নম্বর 40',
        'অ-বিজ্ঞান শাখার শিক্ষার্থীরা বাংলা, ইংরেজি ও সাধারণ জ্ঞান/ভূগোল/মনোবিজ্ঞান দিয়ে পরীক্ষা দিতে পারবে',
        'শারীরিক শিক্ষা ও ক্রীড়াবিজ্ঞান বিভাগের জন্য ব্যবহারিক পরীক্ষায় অংশগ্রহণ বাধ্যতামূলক'
      ]
    }
  ];

  const currentUnit = ruUnits.find(u => u.id === selectedUnitId) || ruUnits[0];
  const unitFeeAmount = currentUnit.fee;
  const paymentChargeAmount = 25; // ~2% mobile banking / gateway charge

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
    "এসএসসি (SSC) বা সমমান পরীক্ষার রোল নম্বর, রেজিস্ট্রেশন নম্বর ও শিক্ষা বোর্ড",
    "এইচএসসি (HSC) বা সমমান পরীক্ষার রোল নম্বর, রেজিস্ট্রেশন নম্বর ও শিক্ষা বোর্ড (২০২৪ বা ২০২৫ সাল)",
    "সদ্য তোলা স্পষ্ট পাসপোর্ট সাইজ রঙিন ছবি (সফটকপি বা হার্ডকপি)",
    "আবেদনকারীর নিজস্ব সচল মোবাইল নম্বর (যাতে এসএমএস ও সিকিউরিটি পাসকোড আসবে)",
    "আবেদনকারীর বর্তমান ও স্থায়ী ঠিকানা এবং যোগাযোগের তথ্য",
    "পছন্দক্রম অনুযায়ী আঞ্চলিক পরীক্ষা কেন্দ্র (রাজশাহী, ঢাকা, চট্টগ্রাম, খুলনা, রংপুর, বরিশাল)",
    "প্রশ্নপত্রের ভাষা নির্বাচন (বাংলা ভার্সন অথবা ইংরেজি ভার্সন)",
    "কোটা সনদ ও প্রমাণপত্র (মুক্তিযোদ্ধা, ক্ষুদ্র নৃ-গোষ্ঠী, শারীরিক প্রতিবন্ধী, পোষ্য ও বিকেএসপি কোটার ক্ষেত্রে প্রযোজ্য)"
  ];

  // FAQs customized for RU
  const faqs = [
    {
      q: "রাজশাহী বিশ্ববিদ্যালয়ে কি সেকেন্ড টাইম (Second Time) পরীক্ষা দেওয়ার সুযোগ আছে?",
      a: "হ্যাঁ! রাজশাহী বিশ্ববিদ্যালয়ে সেকেন্ড টাইম পরীক্ষা দেওয়ার পূর্ণ সুযোগ রয়েছে। ২০২৪ এবং ২০২৫ সালের এইচএসসি/সমমান, কারিগরি শিক্ষা বোর্ডের এইচএসসি (ভোকেশনাল/ডিপ্লোমা) ও এ-লেভেল উত্তীর্ণ শিক্ষার্থীরা শর্তপূরণ সাপেক্ষে পরীক্ষায় অংশগ্রহণ করতে পারবে।"
    },
    {
      q: "ভর্তি পরীক্ষা কি শুধুমাত্র রাজশাহীতে হবে নাকি অন্যান্য বিভাগীয় শহরেও অনুষ্ঠিত হবে?",
      a: "শিক্ষার্থীদের যাতায়াতের সুবিধার জন্য রাজশাহী বিশ্ববিদ্যালয় ভর্তি পরীক্ষা রাজশাহী ছাড়াও ঢাকা, চট্টগ্রাম, খুলনা, রংপুর এবং বরিশাল আঞ্চলিক পাবলিক বিশ্ববিদ্যালয় কেন্দ্রসমূহে অনুষ্ঠিত হবে। শিক্ষার্থীরা অনলাইনে আবেদনের সময় তাদের পছন্দের কেন্দ্র নির্বাচন করতে পারবেন।"
    },
    {
      q: "২০২৫-২০২৬ শিক্ষাবর্ষে আবেদন ও পরীক্ষার গুরুত্বপূর্ণ তারিখগুলো কী কী?",
      a: "অনলাইন আবেদন গ্রহণ: ২০ নভেম্বর ২০২৫ (দুপুর ১২:০০) হতে ০৭ ডিসেম্বর ২০২৫ (রাত ১১:৫৯ মিনিট) পর্যন্ত। ভর্তি পরীক্ষা অনুষ্ঠিত হবে: ইউনিট C (বিজ্ঞান) ১৬ জানুয়ারি ২০২৬, ইউনিট A (মানবিক) ১৭ জানুয়ারি ২০২৬ এবং ইউনিট B (বাণিজ্য) ২৪ জানুয়ারি ২০২৬।"
    },
    {
      q: "ভর্তি পরীক্ষার শিফট ও সময়কাল কেমন হবে?",
      a: "প্রতিটি ইউনিটের ভর্তি পরীক্ষা ২টি শিফটে অনুষ্ঠিত হবে: ১ম শিফট সকাল ১১:০০ থেকে দুপুর ১২:০০ এবং ২য় শিফট বিকেল ০৩:০০ থেকে ০৪:০০ পর্যন্ত। পরীক্ষার সময়কাল ঠিক ১ (এক) ঘণ্টা।"
    },
    {
      q: "ভর্তি পরীক্ষার পূর্ণমান, প্রশ্ন সংখ্যা ও পাস নম্বর কত?",
      a: "ভর্তি পরীক্ষা ১০০ নম্বরের MCQ পদ্ধতিতে অনুষ্ঠিত হবে। মোট ৮০টি প্রশ্ন থাকবে এবং প্রতিটি প্রশ্নের মান ১.২৫ নম্বর। ভর্তি পরীক্ষায় ন্যূনতম পাস নম্বর ৪০। প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।"
    },
    {
      q: "একজন শিক্ষার্থী কি একাধিক ইউনিটে আবেদন করতে পারবে (বিভাগ পরিবর্তন)?",
      a: "হ্যাঁ! মানবিক, বাণিজ্য ও বিজ্ঞান শাখা হতে উত্তীর্ণ শিক্ষার্থীরা সংশ্লিষ্ট ইউনিটের ন্যূনতম জিপিএ যোগ্যতা অনুযায়ী A, B ও C তিনটি ইউনিটেই আবেদন করতে পারবে।"
    },
    {
      q: "কাজী স্টোর থেকে ঘরে বসেই কি রাবি আবেদন সম্পন্ন করা যাবে?",
      a: "অবশ্যই! আপনার এসএসসি ও এইচএসসি রোল, রেজিস্ট্রেশন ও ছবির কপি আমাদের হোয়াটসঅ্যাপে পাঠিয়ে দিলে অভিজ্ঞ অপারেটর দ্বারা নির্ভুলভাবে অনলাইন ফরম পূরণ, ছবি রিসাইজ, আঞ্চলিক কেন্দ্র নির্বাচন ও ফি পেমেন্ট করে নিশ্চিত কনফার্মেশন কপি প্রদান করা হয়।"
    }
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-[#0F172A] overflow-hidden flex flex-col font-bn selection:bg-teal-500/30">
      {/* Background glow elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-teal-600/15 via-blue-900/10 to-[#0F172A] opacity-90"></div>
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 py-3 mb-4 backdrop-blur-md bg-[#0F172A]/70 sticky top-0 z-20 border-b border-slate-800 rounded-xl px-4">
          <button onClick={() => navigate(-1)} className="hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> <span>ফিরে যান</span>
          </button>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <span className="text-white font-medium truncate">রাজশাহী বিশ্ববিদ্যালয় স্নাতক (সম্মান) ভর্তি</span>
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
                  <GraduationCap className="w-7 h-7 text-teal-400" />
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    রাজশাহী বিশ্ববিদ্যালয়
                  </h1>
                </div>
                <p className="text-sm sm:text-base font-medium text-teal-400 font-en">University of Rajshahi</p>
                <p className="text-sm text-slate-300 mt-1">মতিহার, রাজশাহী-৬২০৫, বাংলাদেশ। (স্থাপিত: ১৯৫৩ খ্রি.)</p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-xs text-slate-300 space-y-1.5 w-full sm:w-auto shrink-0 shadow-inner">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>ভর্তি শাখা: <strong className="text-white">১ম বর্ষ স্নাতক/স্নাতক (সম্মান)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>হেল্পলাইন: <span className="font-en">01703-899973</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                  <a href="http://admission.ru.ac.bd" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300 underline font-en">
                    admission.ru.ac.bd
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-en">admission@ru.ac.bd</span>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left bg-teal-950/40 border border-teal-500/30 rounded-2xl p-5 mb-6">
              <div className="mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
                  স্নাতক/স্নাতক (সম্মান) ১ম বর্ষ ভর্তি বিজ্ঞপ্তি ২০২৫-২০২৬
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4">
                এতদ্বারা সংশ্লিষ্ট সকলের অবগতির জন্য জানানো যাচ্ছে যে, রাজশাহী বিশ্ববিদ্যালয়ের 2025-2026 শিক্ষাবর্ষে ১ম বর্ষ স্নাতক/স্নাতক (সম্মান) শ্রেণিতে ইউনিট-A (মানবিক), ইউনিট-B (বাণিজ্য ও আইবিএ) এবং ইউনিট-C (বিজ্ঞান)-এ ভর্তির অনলাইন আবেদন কার্যক্রম চলমান রয়েছে। শিক্ষার্থীরা ঘরে বসেই বা আমাদের <strong className="text-emerald-300">কাজী স্টোরে</strong> এসে অভিজ্ঞ অপারেটরের মাধ্যমে সম্পূর্ণ নির্ভুলভাবে অনলাইনে আবেদন ফরম পূরণ, ছবি আপলোড ও ফি পরিশোধ করতে পারবেন।
              </p>

              {/* Official Key Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-teal-900/50 text-xs">
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">আবেদন গ্রহণ</span>
                  <span className="text-white font-semibold font-en">20 Nov – 07 Dec 2025</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">ভর্তি পরীক্ষা সময়কাল</span>
                  <span className="text-teal-300 font-semibold font-en">16, 17 ও 24 Jan 2026</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">পরীক্ষার শিফট</span>
                  <span className="text-amber-300 font-semibold">প্রতিদিন ২ শিফট (১ ঘণ্টা)</span>
                </div>
                <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60">
                  <span className="text-slate-400 block text-[11px]">আবেদন ফি (সার্ভিসসহ)</span>
                  <span className="text-emerald-400 font-semibold font-en">A, C: 1,320/- | B: 1,100/-</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a 
                href="https://wa.me/message/L2XAYVWBE5RIJ1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-6 py-3 rounded-xl text-sm sm:text-base transition-all shadow-lg shadow-teal-600/25 active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>রাবি ভর্তি আবেদন সহায়তা</span>
              </a>
              <a 
                href="http://admission.ru.ac.bd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all border border-slate-700"
              >
                <ExternalLink className="w-4 h-4 text-teal-400" />
                <span>অফিশিয়াল ওয়েবসাইট</span>
              </a>
            </div>
          </div>

          {/* গুরুত্বপূর্ণ সুযোগ: সেকেন্ড টাইম অনুমোদন */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs sm:text-sm text-emerald-200 shadow-md">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-emerald-300">সেকেন্ড টাইম (Second Time) সুযোগ রয়েছে:</strong> রাজশাহী বিশ্ববিদ্যালয়ে ২০২৪ এবং ২০২৫ সালের এইচএসসি/সমমান পরীক্ষায় উত্তীর্ণ শিক্ষার্থীরা প্রথমবার বা দ্বিতীয়বার উভয় শিক্ষার্থীই সমভাবে আবেদন ও ভর্তি পরীক্ষায় অংশগ্রহণ করতে পারবেন।
            </div>
          </div>

          {/* Section 3: ন্যূনতম যোগ্যতা ও শর্তাবলী (সিলেক্টেড ইউনিটের তথ্য প্রদর্শন) */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-teal-400" />
                  ন্যূনতম যোগ্যতা ও বিষয়ভিত্তিক শর্তাবলী
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  যে ইউনিটের তথ্য দেখতে চান তা নির্বাচন করুন:
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 self-start sm:self-auto font-medium">
                সিলেক্টেড: {currentUnit.name}
              </span>
            </div>

            {/* Unit Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {ruUnits.map((unit) => {
                const isSelected = selectedUnitId === unit.id;
                return (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setSelectedUnitId(unit.id)}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                      isSelected
                        ? unit.activeColor
                        : 'bg-slate-900/60 border-slate-700/70 text-slate-300 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-sm sm:text-base leading-tight">{unit.shortName}</span>
                    <span className="text-xs text-slate-400">{unit.feeBn.split(' ')[0]} টাকা</span>
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
                      {currentUnit.totalSeats}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 font-semibold font-en">
                      নেগেটিভ মার্ক: -{currentUnit.negativeMark}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-lg border border-slate-700 bg-slate-800 text-slate-300">
                      সময়: {currentUnit.examDuration}
                    </span>
                  </div>
                </div>

                {/* Eligibility Criteria Description */}
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
                  <h5 className="text-xs sm:text-sm font-semibold text-slate-400 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    আবেদনের জিপিএ যোগ্যতা ও সাধারণ শর্তাবলী:
                  </h5>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    {currentUnit.criteria}
                  </p>
                </div>

                {/* Faculty & Department Inclusions */}
                <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 space-y-2">
                  <h5 className="text-xs font-semibold text-teal-400 uppercase tracking-wide flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    অনুষদ ও বিভাগসমূহ:
                  </h5>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {currentUnit.faculties.map((fac, fIdx) => (
                      <p key={fIdx} className="leading-relaxed border-b border-slate-800/60 pb-1 last:border-0">
                        • {fac}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Key Points & Guidelines */}
                <div className="space-y-2.5">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    প্রধান বিষয় ও বিশেষ নির্দেশিকা:
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
                    <div className="flex items-start gap-2.5 bg-slate-800/50 border border-slate-700/50 p-3 rounded-xl text-xs sm:text-sm text-slate-300 sm:col-span-2">
                      <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>পরীক্ষার সময়সূচি: <strong className="text-slate-100">{currentUnit.examTime}</strong></span>
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
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 group-hover:text-teal-300 transition-colors">
                <FileText className="w-6 h-6 text-teal-400" />
                <span>মানবণ্টন, পরীক্ষা পদ্ধতি ও কেন্দ্রসমূহ</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 hidden sm:inline-block font-normal">
                  {isMarksExpanded ? 'লুকান' : 'বিস্তারিত দেখুন'}
                </span>
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-300 group-hover:border-teal-500/50 group-hover:text-white transition-all">
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMarksExpanded ? 'rotate-180 text-teal-400' : ''}`} />
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
                      ১০০ নম্বরের বহুনির্বাচনী (MCQ) পরীক্ষায় মোট ৮০টি প্রশ্ন থাকবে। প্রতিটি প্রশ্নের মান ১.২৫ নম্বর।
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">মোট প্রশ্ন ও পূর্ণমান</span>
                        <span className="text-3xl font-bold text-teal-400 font-en">80টি / 100</span>
                        <span className="text-xs text-slate-400 block mt-1">প্রতিটি প্রশ্নের মান 1.25</span>
                      </div>
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">পরীক্ষার সময়</span>
                        <span className="text-3xl font-bold text-blue-400 font-en">60 মিনিট</span>
                        <span className="text-xs text-slate-400 block mt-1">প্রতিদিন ২টি শিফট</span>
                      </div>
                      <div className="bg-slate-900/70 border border-slate-700/70 p-5 rounded-2xl text-center">
                        <span className="text-xs text-slate-400 block mb-1">পাস নম্বর</span>
                        <span className="text-3xl font-bold text-yellow-400 font-en">40 নম্বর</span>
                        <span className="text-xs text-slate-400 block mt-1">ভুল উত্তরে -0.25 কর্তন</span>
                      </div>
                    </div>

                    {/* Unit-wise Pass Marks Table/List */}
                    <div className="space-y-3 bg-slate-900/50 border border-slate-700/50 p-4 rounded-2xl text-xs sm:text-sm text-slate-300">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>ইউনিট A (মানবিক):</strong> বাংলা ২৮টি (৩৫ নম্বর), ইংরেজি ২৮টি (৩৫ নম্বর), সাধারণ জ্ঞান ২৪টি (৩০ নম্বর)। মোট ৮০টি প্রশ্ন = ১০০ নম্বর। ইংরেজি ও আইন বিভাগে লিখিত পরীক্ষা এবং চারুকলা/সঙ্গীত/নাট্যকলায় ১০০ নম্বরের ব্যবহারিক পরীক্ষা (পাস ৪০) রয়েছে।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>ইউনিট B (বাণিজ্য):</strong> বাণিজ্য গ্রুপ: বাংলা (১০), ইংরেজি (২৫), ব্যবস্থাপনা (২৫), হিসাববিজ্ঞান (২৫), ফিন্যান্স/উৎপাদন (১৫)। অ-বাণিজ্য গ্রুপ: বাংলা (১০), ইংরেজি (২৫), সাধারণ জ্ঞান (৫০), আইসিটি (১৫)। আইবিএ-তে ভর্তির জন্য ইংরেজিতে ন্যূনতম ১০ পেতে হবে।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>ইউনিট C (বিজ্ঞান):</strong> আবশ্যক অংশ: পদার্থবিজ্ঞান (৩১.২৫), রসায়ন (৩১.২৫), আইসিটি (৬.২৫)। ঐচ্ছিক অংশ: গণিত (৩১.২৫) অথবা জীববিজ্ঞান (৩১.২৫) অথবা জীববিজ্ঞান+গণিত (৩১.২৫)। আবশ্যক শাখায় ন্যূনতম ২৫ এবং ঐচ্ছিক শাখায় ন্যূনতম ১০ সহ মোট পাস ৪০।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span><strong>নেগেটিভ মার্কিং:</strong> প্রতিটি ভুল MCQ উত্তরের জন্য ০.২৫ নম্বর কর্তন করা হবে। একাধিক বৃত্ত ভরাট করলে ভুল বলে গণ্য হবে।</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span><strong>আঞ্চলিক পরীক্ষা কেন্দ্রসমূহ:</strong> রাজশাহী, ঢাকা, চট্টগ্রাম, খুলনা, রংপুর এবং বরিশাল আঞ্চলিক পাবলিক বিশ্ববিদ্যালয় কেন্দ্রসমূহে অনুষ্ঠিত হবে।</span>
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
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-6 h-6 text-teal-400" />
                  <h3 className="text-2xl font-bold text-white">ভর্তি ফি ও সার্ভিস চার্জ ক্যালকুলেটর</h3>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  আপনার কাঙ্ক্ষিত ইউনিট নির্বাচন করুন এবং কাজী স্টোর সার্ভিস ও এডমিশন প্যাকেজ যোগ করে মোট খরচ দেখে নিন:
                </p>

                {/* Unit Selector */}
                <div className="mb-5">
                  <label className="text-xs text-slate-400 block mb-2 font-normal">আবেদনের ইউনিট নির্বাচন করুন:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {ruUnits.map((u) => (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => setSelectedUnitId(u.id)}
                        className={`p-3 rounded-xl border transition-all text-center cursor-pointer flex flex-col items-center justify-center ${
                          selectedUnitId === u.id 
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow-md shadow-teal-500/10' 
                            : 'bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        <span className="block text-xs sm:text-sm font-medium text-slate-200 truncate w-full">{u.shortName}</span>
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
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base group-hover:text-white transition-colors flex-1">
                      রাবি অফিশিয়াল আবেদন ফি ({currentUnit.shortName})
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
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
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
                    <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
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
                        <div className="w-5 h-5 rounded border-2 border-slate-500 peer-checked:border-teal-500 peer-checked:bg-teal-500 transition-all flex items-center justify-center shrink-0">
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
                                <span className="leading-snug">আবেদন ফি ও অনলাইন আবেদন</span>
                                <span className="font-en text-slate-200 font-medium shrink-0">100 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">আবেদন পেমেন্ট স্লিপ কনফার্মেশন</span>
                                <span className="font-en text-slate-200 font-medium shrink-0">20 টাকা</span>
                              </p>
                              <p className="flex justify-between items-center gap-2 py-1 border-b border-slate-800">
                                <span className="leading-snug">এডমিট কার্ড কালার প্রিন্ট (১ম ও ২য় শিফট কপি)</span>
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

                {/* Promo Code Input Section for KSTRU27 */}
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
                        placeholder="প্রমো কোড লিখুন (যেমন: KSTRU27)"
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
                        <span>কুপন KSTRU27 সফলভাবে ভেরিফাইড! 50 টাকা ছাড় প্রযোজ্য হয়েছে।</span>
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
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180 text-teal-400' : ''}`} />
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
