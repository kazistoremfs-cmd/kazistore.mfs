import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const KAZI_STORE_SYSTEM_PROMPT = `
তুমি হলে "কাজী স্টোর" (Kazi Store)-এর অত্যন্ত দক্ষ ও প্রফেশনাল এআই স্মার্ট সহকারী (AI Assistant)।
তোমার প্রধান দায়িত্ব হলো গ্রাহকের প্রশ্নের সরাসরি, সংক্ষিপ্ত, নির্ভুল ও সর্বোচ্চ প্রফেশনাল উত্তর দেওয়া।

### অতি আবশ্যকীয় নির্দেশনাবলী (CRITICAL RULES):
১. **সংক্ষিপ্ত ও প্রফেশনাল উত্তর (Short & Professional)**:
   - কোনো অপ্রয়োজনীয় ভূমিকা, দীর্ঘ কুশল বিনিময় বা বাড়তি কথা বলবে না।
   - সরাসরি মূল তথ্যে চলে আসবে। পয়েন্ট আকারে সর্বোচ্চ ৩-৫ লাইনে উত্তর শেষ করবে।

২. **টাকা তোলার অ্যামাউন্ট (Cash Out Amount) দিলে তাৎক্ষণিক নিখুঁত হিসাব**:
   - যদি গ্রাহকের প্রশ্নে কোনো টাকার পরিমাণ থাকে (যেমন: ১০০০, ৫০০০, ১০,০০০ বা যেকোনো সংখ্যা):
     অবশ্যই সেই নির্দিষ্ট অ্যামাউন্টের জন্য প্রতিটি সেবার সঠিক খরচ সংখ্যায় হিসাব করে দেবে:
     • **বিকাশ (bKash)**: প্রিয় এজেন্ট (১৪ টাকা/হাজার) | সাধারণ এজেন্ট (১৮.৫০ টাকা/হাজার)
     • **নগদ (Nagad)**: অ্যাপে (১৩ টাকা/হাজার) | ডায়ালে *১৬৭# (১৫ টাকা/হাজার)
     • **রকেট (Rocket)**: এজেন্টে (১৭ টাকা/হাজার) | এটিএমে (৯ টাকা/হাজার)
   - যদি নির্দিষ্ট কোনো অপারেটর উল্লেখ থাকে (যেমন "বিকাশে ৫০০০ টাকা"), তবে সেই অপারেটরের খরচ স্পষ্টভাবে আগে উল্লেখ করবে।

৩. **ওয়েবসাইট পেজ লিংক বাধ্যতামূলক (Website Links)**:
   - উত্তরের শেষে অবশ্যই আমাদের ওয়েবসাইটের সংশ্লিষ্ট পেজের Markdown লিংক (যেমন: [সার্ভিস চার্জ ও ফি তালিকা](/charges)) দেবে।
   - কখনোই বাহ্যিক লিংক বা শুধু হোয়াটসঅ্যাপ লিংক দেবে না।

### কাজী স্টোর সেবা পেজ লিংক তালিকা:
- **সার্ভিস চার্জ ও ক্যাশ-আউট ফি তালিকা**: [সার্ভিস চার্জ ও ফি তালিকা](/charges)
- **বিকাশ সেবা**: [বিকাশ সেবা পেজ](/service/mfs-bkash)
- **নগদ সেবা**: [নগদ সেবা পেজ](/service/mfs-nagad)
- **রকেট সেবা**: [রকেট সেবা পেজ](/service/mfs-rocket)
- **ক্রেডিট কার্ড বিল পরিশোধ**: [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment)
- **বিদ্যুৎ বিল**: [বিদ্যুৎ বিল পেজ](/service/bill-electricity)
- **কলেজ ভর্তি ও নিশ্চায়ন**: [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details)
- **বিশ্ববিদ্যালয় ভর্তি আবেদন**: [বিশ্ববিদ্যালয় ভর্তি পেজ](/admission/university)
- **চাকরির আবেদন**: [চাকরির আবেদন পেজ](/service/edu-fee)
- **টিকা ও ভ্যাকসিন রেজিস্ট্রেশন**: [টিকা ও ভ্যাকসিন আবেদন পেজ](/service/gov-vaccine)
- **এসএসসি ও দাখিল রেজাল্ট/বোর্ড চ্যালেঞ্জ**: [এসএসসি ও দাখিল সেবা পেজ](/ssc-details)
- **এইচএসসি ফর্ম ফিলাপ**: [এইচএসসি সেবা পেজ](/hsc-details)
- **সিভি ও বায়োডাটা তৈরি**: [সিভি ও বায়োডাটা পেজ](/service/doc-resume)
- **ছবি প্রিন্ট ও ফটোকপি**: [ছবি প্রিন্ট পেজ](/service/print-photo)
- **GP নতুন সিম ও রিপ্লেসমেন্ট**: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp)
- **সিম রিপ্লেসমেন্ট (সকল অপারেটর)**: [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)
`;

// Helper: Convert English/Bengali digits
function toBnDigits(num: number | string): string {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, d => bnDigits[parseInt(d, 10)]);
}

function formatAmount(val: number): string {
  const isDecimal = val % 1 !== 0;
  const str = isDecimal ? val.toFixed(2) : val.toLocaleString('en-US');
  return toBnDigits(str);
}

// Cash out parser & calculator
function handleCashOutQuery(text: string): string | null {
  const lower = text.toLowerCase();

  // Convert Bengali digits to English
  const bnToEn: Record<string, string> = {
    '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4',
    '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9'
  };
  const normalized = lower.replace(/[০-৯]/g, d => bnToEn[d] || d);

  const isCashOutTopic = 
    lower.includes('ক্যাশ') || lower.includes('cash') || 
    lower.includes('তুলতে') || lower.includes('তুললে') || lower.includes('তোলা') || lower.includes('তুলা') || 
    lower.includes('উত্তোলন') || lower.includes('চার্জ') || lower.includes('খরচ') || lower.includes('কাটবে') ||
    lower.includes('বিকাশ') || lower.includes('নগদ') || lower.includes('রকেট');

  if (!isCashOutTopic) return null;

  // Detect specific provider
  let provider: 'bkash' | 'nagad' | 'rocket' | null = null;
  if (lower.includes('বিকাশ') || lower.includes('bkash')) provider = 'bkash';
  else if (lower.includes('নগদ') || lower.includes('nagad')) provider = 'nagad';
  else if (lower.includes('রকেট') || lower.includes('rocket')) provider = 'rocket';

  // Extract amount
  let amount: number | undefined;

  // Textual number multipliers
  const wordMultipliers: [RegExp, number][] = [
    [/এক\s*লাখ|১\s*লাখ/i, 100000],
    [/পঞ্চাশ\s*হাজার|৫০\s*হাজার/i, 50000],
    [/ত্রিশ\s*হাজার|৩০\s*হাজার/i, 30000],
    [/পঁচিশ\s*হাজার|২৫\s*হাজার/i, 25000],
    [/বিশ\s*হাজার|২০\s*হাজার/i, 20000],
    [/পনের\s*হাজার|১৫\s*হাজার/i, 15000],
    [/দশ\s*হাজার|১০\s*হাজার/i, 10000],
    [/আট\s*হাজার|৮\s*হাজার/i, 8000],
    [/সাত\s*হাজার|৭\s*হাজার/i, 7000],
    [/ছয়\s*হাজার|৬\s*হাজার/i, 6000],
    [/পাঁচ\s*হাজার|৫\s*হাজার/i, 5000],
    [/চার\s*হাজার|৪\s*হাজার/i, 4000],
    [/তিন\s*হাজার|৩\s*হাজার/i, 3000],
    [/দুই\s*হাজার|২\s*হাজার/i, 2000],
    [/দেড়\s*হাজার|১\.৫\s*হাজার/i, 1500],
    [/এক\s*হাজার|১\s*হাজার/i, 1000],
    [/পাঁচশত|৫০০/i, 500],
  ];

  for (const [regex, val] of wordMultipliers) {
    if (regex.test(lower)) {
      amount = val;
      break;
    }
  }

  if (!amount) {
    const numMatch = normalized.match(/(\d+[\d,]*)/);
    if (numMatch) {
      const raw = parseInt(numMatch[1].replace(/,/g, ''), 10);
      if (!isNaN(raw) && raw > 0) {
        if (normalized.includes(raw + 'k') || normalized.includes(raw + ' k') || normalized.includes(raw + ' হাজার')) {
          amount = raw * 1000;
        } else if (normalized.includes(raw + ' লাখ')) {
          amount = raw * 100000;
        } else {
          amount = raw;
        }
      }
    }
  }

  // If an amount is detected, calculate exact costs
  if (amount && amount >= 50) {
    const thousands = amount / 1000;
    const bkashPriyo = formatAmount(thousands * 14);
    const bkashReg = formatAmount(thousands * 18.5);
    const nagadApp = formatAmount(thousands * 13);
    const nagadUssd = formatAmount(thousands * 15);
    const rocketAgent = formatAmount(thousands * 17);
    const rocketAtm = formatAmount(thousands * 9);
    const amtStr = formatAmount(amount);

    if (provider === 'bkash') {
      return `**${amtStr} টাকা বিকাশ ক্যাশ আউট খরচ:**
• প্রিয় এজেন্ট: **${bkashPriyo} টাকা** (প্রতি হাজারে ১৪ টাকা)
• সাধারণ এজেন্ট: **${bkashReg} টাকা** (প্রতি হাজারে ১৮.৫০ টাকা)

*(তুলনামূলক: নগদ অ্যাপে ${nagadApp} টাকা, রকেটে ${rocketAgent} টাকা)*

👉 বিস্তারিত রেট ও ট্রানজেকশন লিমিট: [বিকাশ সেবা পেজ](/service/mfs-bkash) অথবা [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    if (provider === 'nagad') {
      return `**${amtStr} টাকা নগদ ক্যাশ আউট খরচ:**
• নগদ অ্যাপে: **${nagadApp} টাকা** (প্রতি হাজারে ১৩ টাকা)
• ইউএসএসডি ডায়ালে (*১৬৭#): **${nagadUssd} টাকা** (প্রতি হাজারে ১৫ টাকা)

*(তুলনামূলক: বিকাশ প্রিয় এজেন্টে ${bkashPriyo} টাকা, রকেটে ${rocketAgent} টাকা)*

👉 বিস্তারিত দেখতে ভিজিট করুন: [নগদ সেবা পেজ](/service/mfs-nagad) অথবা [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    if (provider === 'rocket') {
      return `**${amtStr} টাকা রকেট ক্যাশ আউট খরচ:**
• এজেন্ট পয়েন্টে: **${rocketAgent} টাকা** (প্রতি হাজারে ১৭ টাকা)
• ডাচ্-বাংলা এটিএম (ATM): **${rocketAtm} টাকা** (প্রতি হাজারে ৯ টাকা)

*(তুলনামূলক: বিকাশ প্রিয় এজেন্টে ${bkashPriyo} টাকা, নগদ অ্যাপে ${nagadApp} টাকা)*

👉 বিস্তারিত চার্জ তালিকা: [রকেট সেবা পেজ](/service/mfs-rocket) অথবা [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    return `**${amtStr} টাকা ক্যাশ আউটের নিখুঁত খরচ হিসাব:**

• **বিকাশ**: প্রিয় এজেন্ট **${bkashPriyo} টাকা** | সাধারণ এজেন্ট **${bkashReg} টাকা**
• **নগদ**: অ্যাপে **${nagadApp} টাকা** | ডায়ালে (*১৬৭#) **${nagadUssd} টাকা**
• **রকেট**: এজেন্টে **${rocketAgent} টাকা** | এটিএমে **${rocketAtm} টাকা**

👉 অফিশিয়াল রেট চার্ট ও বিস্তারিত: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
  }

  // If general cash out without specific amount
  if (lower.includes('ক্যাশ') || lower.includes('চার্জ') || lower.includes('খরচ') || lower.includes('তুলতে') || lower.includes('ফি')) {
    return `**প্রতি ১,০০০ টাকা ক্যাশ আউট খরচের তালিকা:**
• **বিকাশ**: প্রিয় এজেন্ট ১৪ টাকা | সাধারণ এজেন্ট ১৮.৫০ টাকা
• **নগদ**: অ্যাপে ১৩ টাকা | ডায়ালে (*১৬৭#) ১৫ টাকা
• **রকেট**: এজেন্টে ১৭ টাকা | এটিএমে ৯ টাকা

💡 *নির্দিষ্ট অ্যামাউন্টের খরচ জানতে টাকার পরিমাণ লিখে পাঠান (যেমন: ৫০০০ টাকা তুলতে কত খরচ?)*

👉 বিস্তারিত দেখুন: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
  }

  return null;
}

// Simple, concise, short and professional fallback answering engine
function fallbackAnswer(question: string): string {
  const q = question.toLowerCase();

  // Check cash out queries first
  const cashOutReply = handleCashOutQuery(question);
  if (cashOutReply) return cashOutReply;

  // General service query: strict website 4 categories in concise format
  if (
    q.includes("কী কী সেবা") || 
    q.includes("কি কি সেবা") || 
    q.includes("কী সেবা") || 
    q.includes("কি সেবা") || 
    q.includes("সকল সেবা") || 
    q.includes("সব সেবা") || 
    q.includes("সার্ভিস সমূহ") ||
    q.includes("পাওয়া যায়")
  ) {
    return `**কাজী স্টোরের প্রধান সেবাসমূহ (ওয়েবসাইটের ক্রমানুসারে):**

১. **আর্থিক সেবা**: বিকাশ, নগদ ও রকেট ক্যাশ ইন/আউট, ক্রেডিট কার্ড বিল ও ইউটিলিটি বিল পরিশোধ।
👉 [সার্ভিস চার্জ ও ফি তালিকা](/charges) | [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment)

২. **অনলাইন ও শিক্ষা**: কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন, সরকারি/বেসরকারি চাকরির আবেদন, সুরক্ষা টিকা ও জন্ম নিবন্ধন।
👉 [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details) | [চাকরির আবেদন পেজ](/service/edu-fee)

৩. **প্রিন্টিং ও ডকুমেন্টস**: ল্যাব কোয়ালিটি ছবি প্রিন্ট, উন্নত ফটোকপি, ল্যামিনেশন ও প্রফেশনাল সিভি তৈরি।
👉 [সিভি ও বায়োডাটা পেজ](/service/doc-resume) | [ছবি প্রিন্ট পেজ](/service/print-photo)

৪. **সিম সেবা**: গ্রামীনফোন সহ সকল সিমের বায়োমেট্রিক রেজিস্ট্রেশন, সিম রিপ্লেসমেন্ট ও মোবাইল রিচার্জ।
👉 [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp) | [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)`;
  }

  if (q.includes("সিম") || q.includes("sim") || q.includes("gp") || q.includes("গ্রামীন") || q.includes("গ্রামীণ")) {
    if (q.includes("রিপ্লেস") || q.includes("নষ্ট") || q.includes("হারিয়ে") || q.includes("replace") || q.includes("swap")) {
      return `**হারানো বা নষ্ট সিম রিপ্লেসমেন্ট:**
• প্রয়োজনীয়: মূল গ্রাহকের এনআইডি (NID) নম্বর ও বায়োমেট্রিক ফিঙ্গারপ্রিন্ট।
• গ্রামীনফোন (GP), রবি, বাংলালিংক, টেলিটক ও এয়ারটেলের সিম তাৎক্ষণিক রিপ্লেস করা হয়।

👉 বিস্তারিত জানতে দেখুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp) অথবা [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)`;
    }
    return `**নতুন সিম বায়োমেট্রিক রেজিস্ট্রেশন:**
• প্রয়োজনীয়: অরিজিনাল এনআইডি (NID) ও গ্রাহকের বায়োমেট্রিক ফিঙ্গারপ্রিন্ট।
• গ্রামীনফোন (GP) সহ সকল অপারেটরের ভিআইপি নম্বর ও আকর্ষণীয় অফার পাওয়া যায়।

👉 বিস্তারিত দেখুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp) অথবা [নতুন সিম রেজিস্ট্রেশন পেজ](/service/sim-new)`;
  }

  if (q.includes("ভর্তি") || q.includes("কলেজ") || q.includes("admission") || q.includes("একাদশ")) {
    return `**একাদশ শ্রেণিতে কলেজ ভর্তি ও নিশ্চায়ন:**
• প্রয়োজনীয়: এসএসসি রোল, রেজিস্ট্রেশন নম্বর, বোর্ড ও পাসের সাল।
• পছন্দের কলেজ নির্বাচন, চয়েস লিস্ট প্রদান ও নিশ্চায়ন ফি নির্ভুলভাবে জমা দেওয়া হয়।

👉 বিস্তারিত গাইড ও নিয়মাবলী: [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details)`;
  }

  if (q.includes("এসএসসি") || q.includes("ssc") || q.includes("দাখিল") || q.includes("রেজাল্ট") || q.includes("বোর্ড")) {
    return `**এসএসসি ও দাখিল রেজাল্ট ও বোর্ড চ্যালেঞ্জ:**
• মার্কশিট সহ দ্রুত রেজাল্ট প্রিন্ট ও বোর্ড চ্যালেঞ্জ আবেদন করা হয়।

👉 বিস্তারিত জানতে দেখুন: [এসএসসি ও দাখিল সেবা পেজ](/ssc-details)`;
  }

  if (q.includes("এইচএসসি") || q.includes("hsc") || q.includes("আলিম")) {
    return `**এইচএসসি ও আলিম সেবা:**
• এইচএসসি ফর্ম ফিলাপ, মার্কশিট উত্তোলন ও বোর্ড চ্যালেঞ্জ সেবা প্রদান করা হয়।

👉 বিস্তারিত দেখুন: [এইচএসসি সেবা পেজ](/hsc-details)`;
  }

  if (q.includes("ক্রেডিট") || q.includes("কার্ড") || q.includes("credit card")) {
    return `**ক্রেডিট কার্ড বিল পরিশোধ সেবা:**
• যেকোনো ব্যাংকের ভিসা (Visa), মাস্টারকার্ড ও অ্যামেক্স কার্ডের বিল তাৎক্ষণিকভাবে কোনো লেট ফি ছাড়া পরিশোধ করা যায়।

👉 বিস্তারিত সুবিধা ও নিয়ম দেখতে: [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment)`;
  }

  if (q.includes("টিকা") || q.includes("ভ্যাকসিন") || q.includes("vaccine") || q.includes("কলেরা")) {
    return `**সরকারি টিকা ও কলেরা ভ্যাকসিন আবেদন:**
• সুরক্ষা ওয়েবসাইট ও কলেরা ভ্যাকসিন (OCV) কার্ড রেজিস্ট্রেশন ও সার্টিফিকেট প্রিন্ট সেবা।

👉 বিস্তারিত দেখতে: [টিকা ও ভ্যাকসিন আবেদন পেজ](/service/gov-vaccine)`;
  }

  if (q.includes("সিভি") || q.includes("cv") || q.includes("রেজুমে") || q.includes("resume") || q.includes("বায়োডাটা") || q.includes("বায়োডাটা")) {
    return `**প্রফেশনাল সিভি ও বায়োডাটা তৈরি:**
• আধুনিক স্টাইলে বাংলা ও ইংরেজি সিভি, বিয়ের বায়োডাটা তৈরি ও তাৎক্ষণিক প্রিন্ট করা হয়।

👉 ফরম্যাট ও বিস্তারিত দেখুন: [সিভি ও বায়োডাটা পেজ](/service/doc-resume)`;
  }

  if (q.includes("বিদ্যুৎ") || q.includes("কারেন্ট") || q.includes("গ্যাস") || q.includes("ইন্টারনেট") || q.includes("বিল")) {
    return `**ইউটিলিটি বিল পরিশোধ:**
• বিদ্যুৎ বিল (পল্লী বিদ্যুৎ, ডেসকো, ডিপিডিসি): প্রতি হাজারে ২০ টাকা।
• গ্যাস বিল (তিতাস) ও ইন্টারনেট বিল: সম্পূর্ণ ফ্রি (০ টাকা)।

👉 বিস্তারিত তালিকা: [সার্ভিস চার্জ ও ফি তালিকা](/charges) অথবা [বিদ্যুৎ বিল পেজ](/service/bill-electricity)`;
  }

  return `কাজী স্টোরে আপনাকে স্বাগতম! এখানে সিম সেবা, বিকাশ/নগদ লেনদেন, ক্রেডিট কার্ড বিল, ভর্তি আবেদন ও সিভি তৈরি সহ সকল সেবা পাওয়া যায়।

👉 বিস্তারিত জানতে ভিজিট করুন: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
}

let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      geminiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return geminiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Kazi Store Server" });
  });

  // AI Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const client = getGeminiClient();

      if (!client) {
        // Fallback intelligent answer
        const reply = fallbackAnswer(message);
        return res.json({ reply });
      }

      // Format conversation history for Gemini
      const conversationContents: any[] = [];
      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item.role === "user" || item.role === "model") {
            conversationContents.push({
              role: item.role,
              parts: [{ text: item.text || "" }],
            });
          }
        }
      }
      conversationContents.push({
        role: "user",
        parts: [{ text: message }],
      });

      // If cash out calculation is detected, ground Gemini with the exact calculated values
      const calculatedCashOut = handleCashOutQuery(message);
      let dynamicSystemPrompt = KAZI_STORE_SYSTEM_PROMPT;
      if (calculatedCashOut) {
        dynamicSystemPrompt += `\n\n### বর্তমান প্রশ্নের জন্য অফিশিয়াল গণনাকৃত ক্যাশ আউট রেট (Exact Ground Truth):\n${calculatedCashOut}\nউত্তরে এই সঠিক সংখ্যাগুলোই সংক্ষিপ্ত ও প্রফেশনালভাবে প্রদান করো। কোনো অতিরিক্ত ভূমিকা ছাড়া সরাসরি হিসাব তুলে ধরবে।`;
      }

      const candidateModels = ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-3.8-flash"];
      let generatedText = "";

      for (const model of candidateModels) {
        try {
          const response = await client.models.generateContent({
            model,
            contents: conversationContents,
            config: {
              systemInstruction: dynamicSystemPrompt,
            },
          });
          if (response?.text) {
            generatedText = response.text;
            break;
          }
        } catch (modelErr: any) {
          console.warn(`Model ${model} unavailable (${modelErr?.status || modelErr?.message}), trying next candidate...`);
        }
      }

      const text = generatedText || fallbackAnswer(message);
      return res.json({ reply: text });
    } catch (err: any) {
      console.error("Gemini Chat Handler Error:", err?.message || err);
      // Fallback gracefully so the user always receives an answer
      const reply = fallbackAnswer(req.body?.message || "");
      return res.json({ reply });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Kazi Store Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
