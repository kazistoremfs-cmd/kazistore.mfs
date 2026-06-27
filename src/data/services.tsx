import { Wallet, GraduationCap, Printer, Smartphone } from 'lucide-react';
import React from 'react';

export const serviceCategories = [
  {
    id: 'financial',
    titleEn: 'Financial Services',
    titleBn: 'আর্থিক সেবা',
    icon: <Wallet className="w-6 h-6 text-white" />,
    items: [
      { id: 'mfs-bkash', name: 'bKash – Send Money/Cash In / Out' },
      { id: 'mfs-nagad', name: 'Nagad – Cash In / Out' },
      { id: 'mfs-rocket', name: 'Rocket – Cash In / Out' },
      { id: 'bill-electricity', name: 'Electricity Bill Payment' },
      { id: 'bill-gas', name: 'Gas Bill Payment' },
      { id: 'bill-internet', name: 'Internet Bill Payment' },
      { id: 'bill-vehicle', name: 'Vehicle Fine Payment' },
    ]
  },
  {
    id: 'education',
    titleEn: 'Online & Education',
    titleBn: 'অনলাইন ও শিক্ষা',
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    items: [
      { id: 'edu-admission', name: 'University / College Application' },
      { id: 'edu-fee', name: 'Application Fee Payment' },
      { id: 'gov-birth', name: 'Birth Registration Correction' },
      { id: 'gov-gd', name: 'Online GD' },
    ]
  },
  {
    id: 'printing',
    titleEn: 'Printing & Documents',
    titleBn: 'প্রিন্টিং ও ডকুমেন্টস',
    icon: <Printer className="w-6 h-6 text-white" />,
    items: [
      { id: 'print-photo', name: 'Photo Printing' },
      { id: 'print-copy', name: 'Photocopy' },
      { id: 'print-lamination', name: 'Lamination' },
      { id: 'doc-resume', name: 'Bio-data / Resume Creation' },
      { id: 'doc-typing', name: 'Digital Composing' },
    ]
  },
  {
    id: 'sim',
    titleEn: 'SIM Services',
    titleBn: 'সিম সেবা',
    icon: <Smartphone className="w-6 h-6 text-white" />,
    items: [
      { id: 'sim-new', name: 'New SIM Registration' },
      { id: 'sim-replace', name: 'SIM Replacement' },
      { id: 'sim-recharge', name: 'Mobile Recharge' },
    ]
  }
];

// Flat list to keep ServiceDetail compatibility
export const servicesData = serviceCategories.flatMap(cat => 
  cat.items.map(item => {
    let customFaqs = null;
    
    if (item.id === 'mfs-bkash') {
      customFaqs = [
        {
          q: 'প্রশ্ন পার্সোনাল নাম্বারে পাঠাতে গিয়ে ক্যাশ-আউট হলো কেন?',
          a: 'নাম্বারটি পার্সোনাল ছিল না, ওটা এজেন্ট নাম্বার ছিল।'
        },
        {
          q: 'ভুল নাম্বারে টাকা গেলে কি দোকানদার ব্যাক এনে দিতে পারবে?',
          a: 'না, দোকানদার পারবে না। অনলাইনে কাস্টমার কেয়ারে একটা অভিযোগ রেখে এবং আপনি থানায় একটা জিডি করে বিকাশ কাস্টমার কেয়ারে যেতে হবে।'
        },
        {
          q: 'অ্যাকাউন্ট খোলা নেই এমন নাম্বারে টাকা গেলে কী করব?',
          a: 'অ্যাপের সেন্ড মানি অপশনে গিয়ে নন-বিকাশ গিয়ে ক্যান্সেল (Cancel) চাপলেই টাকা ফেরত আসবে।'
        },
        {
          q: 'ব্যালেন্স থাকা সত্ত্বেও ক্যাশ-আউট হচ্ছে না কেন?',
          a: 'আপনার বিকাশের দৈনিক বা মাসিক লেনদেনের লিমিট শেষ হয়ে গেছে।'
        },
        {
          q: 'সেন্ড মানি ফ্রি বলে কেন ৫ টাকা চার্জ কাটলো?',
          a: 'নাম্বারটি আপনার প্রিয় নাম্বার ছিল না অথবা বাটন ফোন দিয়ে পাঠিয়েছেন।'
        },
        {
          q: 'তিন বার ভুল পিন দেওয়ায় অ্যাকাউন্ট লক হয়েছে, টাকা কি কেটে নেবে? অ্যাকাউন্ট সচল করতে কি কি লাগবে?',
          a: 'না, টাকা নিরাপদ আছে। ১৬২৪৭-এ কল করে বা অ্যাপ থেকে পিন রিসেট করলেই হবে। যে আইডি কার্ড দিয়ে বিকাশ অ্যাকাউন্ট খুলা সেই আইডি কার্ড লাগবে।'
        },
        {
          q: 'বিকাশ অ্যাকাউন্ট খুলতে যায়? খুলতে কি কি লাগে?',
          a: 'জ্বি বিকাশ অ্যাকাউন্ট খুলা যায়, আপনার NID কার্ড নিয়ে চলে আসুন কাজী স্টোরে। যার NID কার্ড তারে লাগবে তার ফেইচ ছবি নেয়ার জন্য।'
        },
        {
          q: 'অ্যাপ থেকে কাটলেও কেন ১৫ টাকার বদলে সাড়ে ১৮ টাকা কাটলো?',
          a: "নাম্বারটি আপনার 'প্রিয় এজেন্ট' হিসেবে সেভ করা ছিল না।"
        }
      ];
    }

    return {
      id: item.id,
      icon: cat.icon,
      title: item.name,
      desc: `${item.name} সংক্রান্ত বিস্তারিত সেবা। আমাদের দোকান থেকে আপনি খুব সহজেই এই সেবাটি গ্রহণ করতে পারবেন। বিস্তারিত জানতে আমাদের এজেন্টের সাথে যোগাযোগ করুন।`,
      bg: 'bg-[#0F172A]',
      details: [
        {
          Service: item.name,
          Category: cat.titleEn,
          Charge: 'আলোচনা সাপেক্ষে / অফিসিয়াল রেট'
        }
      ],
      faqs: customFaqs || [
        {
          q: 'এই সেবাটি পেতে কী কী প্রয়োজন?',
          a: 'প্রয়োজনীয় ডকুমেন্টস এবং বিস্তারিত জানতে আমাদের WhatsApp নাম্বারে যোগাযোগ করুন।'
        },
        {
          q: 'সার্ভিস চার্জ কত?',
          a: 'অফিসিয়াল রেট অনুযায়ী চার্জ প্রযোজ্য। বিস্তারিত এজেন্টের সাথে কথা বলে নিশ্চিত হোন।'
        }
      ]
    };
  })
);
