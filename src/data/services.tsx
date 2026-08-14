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
      { id: 'doc-resume', name: 'Bio-data / Resume' }
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
    } else if (item.id === 'mfs-nagad') {
      customFaqs = [
        {
          q: 'নগদ ক্যাশ-আউট চার্জ কত?',
          a: 'নগদ অ্যাপ ব্যবহার করে ক্যাশ-আউট করলে প্রতি হাজারে খরচ মাত্র ১৩ টাকা। আর বাটন ফোনে *167# ডায়াল করে ক্যাশ-আউট করলে প্রতি হাজারে খরচ ১৫ টাকা।'
        },
        {
          q: 'নগদ অ্যাকাউন্টে ক্যাশ-ইন করতে কি কোনো খরচ হয়?',
          a: 'না, আমাদের কাজী স্টোর বা যেকোনো নগদ এজেন্ট পয়েন্ট থেকে আপনার নগদ অ্যাকাউন্টে ক্যাশ-ইন (টাকা জমা) করা একদম ফ্রি। এর জন্য কোনো অতিরিক্ত চার্জ দিতে হয় না।'
        },
        {
          q: 'ভুল নাম্বারে টাকা চলে গেলে আমার করণীয় কী?',
          a: 'টাকা ভুল নাম্বারে চলে গেলে দ্রুত নগদের অফিশিয়াল হেল্পলাইন 16167-এ কল করে অভিযোগ রেজিস্টার করুন।'
        },
        {
          q: 'নগদ অ্যাকাউন্টের পিন (PIN) ভুলে গেলে বা ব্লক হলে কীভাবে রিসেট করব?',
          a: 'আপনার নগদ অ্যাকাউন্টটি যে এনআইডি (NID) দিয়ে খোলা, সেই এনআইডি কার্ড নিয়ে চলে আসোন কাজী স্টোরে, আপনার পিন রিলেটেড সমস্যার সমাধান হয়ে যাবে'
        },
        {
          q: 'নগদের মাধ্যমে কী কী ইউটিলিটি বিল দেওয়া যায় এবং চার্জ কত?',
          a: 'নগদের মাধ্যমে বিদ্যুৎ (DPDC, DESCO, PDB, Palli Bidyut), গ্যাস, পানি এবং ইন্টারনেট বিল অত্যন্ত সহজে দেওয়া যায়। বিলের ক্ষেত্রে হাজারে ২০ টাকা চার্জ করা হয়ে থাকে।'
        },
        {
          q: 'একদিনে সর্বোচ্চ কত টাকা লেনদেন করা যায়?',
          a: (
            <>
              লিমিট <a href="https://nagad.com.bd/limit-charges/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://nagad.com.bd/limit-charges/</a>
            </>
          )
        }
      ];
    } else if (item.id === 'bill-electricity') {
      customFaqs = [
        {
          q: 'BPDB প্রিপেইড মিটারের কোড সমূহ',
          a: (
            <>
              <a href="https://web.bpdbprepaid.gov.bd/bn/meter-short-codes" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://web.bpdbprepaid.gov.bd/bn/meter-short-codes</a>
            </>
          )
        },
        {
          q: 'মিটারে টাকা রিচার্জ করব কীভাবে?',
          a: 'বিকাশ, নগদ, রকেট বা যেকোনো মোবাইল ব্যাংকিং অ্যাপ দিয়ে টোকেন নিয়ে মিটারে ইনপুট করুন।'
        },
        {
          q: 'টোকেন নম্বর মিটারে কীভাবে দেব?',
          a: '২০ ডিজিটের টোকেন নম্বরটি চেপে সবুজ/এন্টার (↵) বাটন চাপুন।'
        },
        {
          q: 'বর্তমান ব্যালেন্স কীভাবে দেখব?',
          a: 'মিটারের কিপ্যাডে ৮০১ চেপে এন্টার দিন।'
        },
        {
          q: 'মিটার নম্বর কীভাবে জানব?',
          a: 'মিটারের কিপ্যাডে ৮০৪ চেপে এন্টার দিন।'
        },
        {
          q: 'ব্যালেন্স শেষ হলে জরুরি বিদ্যুৎ পাব কীভাবে?',
          a: 'মিটারের কিপ্যাডে ৮১১ চেপে এন্টার দিলেই ইমার্জেন্সি ব্যালেন্স চালু হবে।'
        },
        {
          q: 'ফ্রেন্ডলি আওয়ার (Friendly Hour) কী?',
          a: 'শুক্রবার, শনিবার এবং সরকারি ছুটির দিনে ব্যালেন্স শেষ হলেও বিদ্যুৎ কাটবে না।'
        },
        {
          q: 'মাসের প্রথম রিচার্জে টাকা কম আসে কেন?',
          a: 'প্রতি মাসের ১ তারিখে থেকে ৩১ তারিখের মধ্যে প্রথম রিচার্জে সরকারি ভ্যাট, ডিমান্ড চার্জ এবং মিটার ভাড়া কেটে নেওয়া হয়।'
        },
        {
          q: 'রিচার্জের পর পুরো টাকা ব্যালেন্সে যোগ হয়নি কেন?',
          a: 'আগে নেওয়া ইমার্জেন্সি ব্যালেন্স (লোন)-এর টাকা নতুন রিচার্জ থেকে স্বয়ংক্রিয়ভাবে কেটে নেওয়া হয়েছে।'
        },
        {
          q: 'মিটারে \'Low Bal\' দেখালে করণীয় কী?',
          a: 'ব্যালেন্স কমে গেছে, বিদ্যুৎ বন্ধ হওয়া এড়াতে দ্রুত রিচার্জ করুন।'
        },
        {
          q: 'টোকেন দেওয়ার পর \'Reject\' বা \'Error\' দেখালে কী করব?',
          a: 'নম্বর তুলতে ভুল হয়েছে। ভালো করে দেখে আবার সঠিক নম্বরটি চাপুন।'
        },
        {
          q: 'মিটার \'Lock\' বা \'Tamper\' দেখালে করণীয় কী?',
          a: 'মিটারে কোনো কারিগরি ত্রুটি বা জালিয়াতি হয়েছে; নিজে হাত না দিয়ে দ্রুত বিপিডিবি (BPDB) অফিসে যোগাযোগ করুন। হেল্পলাইন নাম্বারঃ 16200'
        }
      ];
    }

    let customDesc: React.ReactNode = `${item.name} সংক্রান্ত বিস্তারিত সেবা। আমাদের দোকান থেকে আপনি খুব সহজেই এই সেবাটি গ্রহণ করতে পারবেন। বিস্তারিত জানতে আমাদের এজেন্টের সাথে যোগাযোগ করুন।`;
    let importantLinks = null;

    if (item.id === 'mfs-nagad') {
      customDesc = 'সহজে ও নিরাপদে লেনদেন করুন নগদে!\nক্যাশ-ইন কিংবা ক্যাশ-আউট—সবচেয়ে কম খরচে ও দ্রুততম সময়ে আপনার যেকোনো নগদ লেনদেন সম্পন্ন করতে আজই চলে আসুন আমাদের কাজী স্টোরে। আপনার বিশ্বস্ত সেবায় আমরা আছি সবসময়।';
    } else if (item.id === 'mfs-bkash') {
      customDesc = 'দ্রুত ও নিরাপদ বিকাশ লেনদেনে আমরাই আপনার বিশ্বস্ত অংশীদার। ক্যাশ-ইন, ক্যাশ-আউট বা সেন্ড মানি করতে আজই আমাদের এজেন্টের সেবা নিন।';
      importantLinks = [
        { label: 'বিকাশ হেল্পলাইন', url: 'https://www.bkash.com/help' },
        { label: 'চার্জ', url: 'https://www.bkash.com/help/charge-calculator' },
        { label: 'লিমিট', url: 'https://www.bkash.com/help/limits' }
      ];
    } else if (item.id === 'bill-electricity') {
      customDesc = '১ মিনিটে বিল পেমেন্ট! ঝামেলাহীন সেবা পেতে আজই আমাদের কাজী স্টোরে আসুন। আপনার বিদ্যুৎ, গ্যাস বা ইন্টারনেট বিল পরিশোধ করুন কোনো রকম বিড়ম্বনা ছাড়াই।';
      importantLinks = [
        { label: 'টোকেন নাম্বার', url: 'https://web.bpdbprepaid.gov.bd/bn/token-check' }
      ];
    } else if (item.id.startsWith('bill-')) {
      customDesc = '১ মিনিটে বিল পেমেন্ট! ঝামেলাহীন সেবা পেতে আজই আমাদের কাজী স্টোরে আসুন। আপনার বিদ্যুৎ, গ্যাস বা ইন্টারনেট বিল পরিশোধ করুন কোনো রকম বিড়ম্বনা ছাড়াই।';
    }
    
    let corners = undefined;
    if (item.id === 'edu-admission') {
      corners = [
        {
          title: "SSC",
          subItems: [
            {
              content: "SSC পরীক্ষার রেজাল্ট ও বোর্ড চ্যালেঞ্জ",
              link: "/ssc-details"
            },
            {
              content: "কলেজ ভর্তি আবেদন",
              link: "/college-admission-details"
            }
          ]
        },
        {
          title: "HSC",
          content: "HSC এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },
        {
          title: "Hon's",
          content: "অনার্স এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        },
        {
          title: "Master's",
          content: "মাস্টার্স এডমিশন সম্পর্কিত তথ্য ও সেবাসমূহ এখানে পাওয়া যাবে।"
        }
      ];
    }

    return {
      id: item.id,
      icon: cat.icon,
      title: item.name,
      desc: customDesc,
      importantLinks,
      bg: 'bg-[#0F172A]',
      corners,
      details: [
        {
          Service: item.name,
          Charge: item.id === 'bill-gas' ? 'ফ্রি' : 'আলোচনা সাপেক্ষে / অফিসিয়াল রেট'
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
