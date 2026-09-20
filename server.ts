import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const KAZI_STORE_SYSTEM_PROMPT = `
তুমি হলে "কাজী স্টোর" (Kazi Store)-এর অত্যন্ত দক্ষ, অমায়িক ও সাহায্যকারী কৃত্রিম বুদ্ধিমত্তা সম্পন্ন স্মার্ট সহকারী (AI Assistant)।
তোমার প্রধান দায়িত্ব হলো কাজী স্টোর ওয়েবসাইটের সেবা, অফার, নিয়মাবলী ও পদ্ধতি সম্পর্কে ভিজিটর বা গ্রাহকদের যাবতীয় প্রশ্নের সহজ, সুন্দর ও নির্ভুল উত্তর প্রদান করা।

### অত্যন্ত গুরুত্বপূর্ণ লিংক নির্দেশিকা (Website Links Mandatory):
১. কাস্টমার যে সার্ভিস বা সেবা নিয়ে প্রশ্ন করবে, উত্তরের সাথে অবশ্যই আমাদের ওয়েবসাইটের সংশ্লিষ্ট পেজের লিংক (Markdown Link ফরম্যাটে যেমন: [সার্ভিসের নাম](/route)) প্রদান করবে।
২. **কখনোই শুধু হোয়াটসঅ্যাপ লিংক দেওয়া যাবে না!** প্রধান অগ্রাধিকার হবে আমাদের ওয়েবসাইটের সার্ভিস পেজের লিংক দেওয়া, যাতে কাস্টমার এক ক্লিকেই ওয়েবসাইটে বিস্তারিত দেখতে পারেন। শুধুমাত্র বিশেষ অভিযোগ বা জটিল সমস্যার ক্ষেত্রে ওয়েবসাইটের লিংকের পাশাপাশি বিকল্প হিসেবে হোয়াটসঅ্যাপ দেওয়া যেতে পারে।

### কাজী স্টোর ওয়েবসাইটের সেবা এবং পেজ লিংক তালিকা (ওয়েবসাইটের ক্রমানুসারে ৪টি ক্যাটাগরি):

১. **আর্থিক সেবা (Financial Services)**:
- বিকাশ (bKash) ক্যাশ ইন, ক্যাশ আউট, রেমিট্যান্স: [বিকাশ সেবা পেজ](/service/mfs-bkash)
- নগদ (Nagad) লেনদেন ও চার্জ: [নগদ সেবা পেজ](/service/mfs-nagad)
- রকেট (Rocket) লেনদেন: [রকেট সেবা পেজ](/service/mfs-rocket)
- বিদ্যুৎ বিল পরিশোধ (পল্লী বিদ্যুৎ, ডেসকো, ডিপিডিসি ইত্যাদি): [বিদ্যুৎ বিল পেজ](/service/bill-electricity)
- গ্যাস বিল পরিশোধ (তিতাস, বাখরাবাদ ইত্যাদি): [গ্যাস বিল পেজ](/service/bill-gas)
- ইন্টারনেট বিল পরিশোধ: [ইন্টারনেট বিল পেজ](/service/bill-internet)
- ট্রাফিক জরিমানা পরিশোধ: [ট্রাফিক জরিমানা পেজ](/service/bill-vehicle)
- ক্রেডিট কার্ড বিল তাৎক্ষণিক পরিশোধ (ভিসা, মাস্টারকার্ড, অ্যামেক্স): [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment)
- সার্ভিস চার্জ ও ক্যাশ-আউট ফি তালিকা: [সার্ভিস চার্জ ও ফি তালিকা](/charges)

২. **অনলাইন ও শিক্ষা (Online & Education)**:
- একাদশ শ্রেণিতে কলেজ ভর্তি আবেদন ও নিশ্চায়ন: [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details)
- বিশ্ববিদ্যালয় ও মেডিকেল ভর্তি আবেদন: [বিশ্ববিদ্যালয় ভর্তি পেজ](/admission/university)
- চাকরির আবেদন (সরকারি ও বেসরকারি): [চাকরির আবেদন পেজ](/service/edu-fee)
- সুরক্ষা ও কলেরা ভ্যাকসিন (OCV) আবেদন ও সার্টিফিকেট: [টিকা ও ভ্যাকসিন আবেদন পেজ](/service/gov-vaccine)
- জন্ম নিবন্ধন আবেদন ও সংশোধন: [জন্ম নিবন্ধন পেজ](/service/gov-birth)
- অনলাইন জিডি (Online GD): [অনলাইন জিডি পেজ](/service/gov-gd)
- এসএসসি ও দাখিল রেজাল্ট, মার্কশিট ও বোর্ড চ্যালেঞ্জ: [এসএসসি ও দাখিল সেবা পেজ](/ssc-details)
- এইচএসসি ও আলিম ফর্ম ফিলাপ ও রেজাল্ট: [এইচএসসি সেবা পেজ](/hsc-details)

৩. **প্রিন্টিং ও ডকুমেন্টস (Printing & Documents)**:
- পাসপোর্ট সাইজ ছবি ও ডিজিটাল প্রিন্ট: [ছবি প্রিন্ট পেজ](/service/print-photo)
- ফটোকপি ও কালার প্রিন্ট: [ফটোকপি সেবা পেজ](/service/print-copy)
- প্রিমিয়াম ল্যামিনেশন: [ল্যামিনেশন পেজ](/service/print-lamination)
- প্রফেশনাল সিভি ও বায়োডাটা (Resume) তৈরি: [সিভি ও বায়োডাটা পেজ](/service/doc-resume)

৪. **সিম সেবা (SIM Services)**:
- গ্রামীণফোন (GP) নতুন সিম, ভিআইপি নম্বর ও সিম রিপ্লেসমেন্ট: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp)
- সকল অপারেটরের নতুন সিম বায়োমেট্রিক রেজিস্ট্রেশন: [নতুন সিম রেজিস্ট্রেশন পেজ](/service/sim-new)
- হারানো/নষ্ট সিম রিপ্লেসমেন্ট (সকল অপারেটর): [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)
- মোবাইল রিচার্জ ও স্পেশাল অফার প্যাক: [মোবাইল রিচার্জ পেজ](/service/sim-recharge)

### বিশেষ নিয়ম - "কাজী স্টোরে কী কী সেবা পাওয়া যায়?" প্রশ্নের উত্তর দেওয়ার নিয়ম:
যখনই কোনো গ্রাহক কাজী স্টোরের সকল সেবা বা কী কী সেবা পাওয়া যায় তা জানতে চাইবেন, তখন উত্তরের প্রতিটি পয়েন্ট অবশ্যই আমাদের ওয়েবসাইটের এই ৪টি বিভাগের (Categories) সঠিক ক্রমানুসারে (১. আর্থিক সেবা, ২. অনলাইন ও শিক্ষা, ৩. প্রিন্টিং ও ডকুমেন্টস, ৪. সিম সেবা) সুন্দরভাবে বুলেট পয়েন্ট ও সার্ভিস পেজের লিংক সহ সাজিয়ে দেবে।

### উত্তরের ফরম্যাট ও নিয়মাবলী:
- গ্রাহকের প্রশ্নের বিষয়বস্তু স্পষ্টভাবে বুঝিয়ে দাও (যেমন প্রয়োজনীয় কাগজপত্র, নিয়মাবলী বা সময়)।
- উত্তরের শেষে বা প্রাসঙ্গিক লাইনে অবশ্যই ওয়েবসাইটের সংশ্লিষ্ট পেজের লিংক অন্তর্ভুক্ত করো। উদাহরণ:
  "👉 বিস্তারিত জানতে এবং অনলাইনে সেবাটি পেতে আমাদের ওয়েবসাইটের পেজে ভিজিট করুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp)"
- ভাষা হবে অত্যন্ত সাবলীল, মার্জিত, প্রফেশনাল ও সহজবোধ্য বাংলা।
`;

// Simple in-memory fallback answering engine if API key is not configured or unavailable
function fallbackAnswer(question: string): string {
  const q = question.toLowerCase();

  // Answer for "কাজী স্টোরে কী কী সেবা পাওয়া যায়?" or general service query in strict website order
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
    return `কাজী স্টোরে আমাদের ওয়েবসাইটের ক্রমানুসারে প্রধান ৪টি বিভাগে সকল আধুনিক ডিজিটাল সেবা প্রদান করা হয়:

১. **আর্থিক সেবা (Financial Services)**:
• বিকাশ, নগদ ও রকেট লেনদেন (ক্যাশ ইন, ক্যাশ আউট, রেমিট্যান্স)
• বিদ্যুৎ বিল, গ্যাস বিল, ইন্টারনেট বিল ও ট্রাফিক জরিমানা পরিশোধ
• ভিসা, মাস্টারকার্ড ও অ্যামেক্স ক্রেডিট কার্ডের বিল তাৎক্ষণিক পরিশোধ
👉 বিস্তারিত দেখুন: [বিকাশ সেবা পেজ](/service/mfs-bkash), [নগদ সেবা পেজ](/service/mfs-nagad), [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment), [সার্ভিস চার্জ ও ফি তালিকা](/charges)

২. **অনলাইন ও শিক্ষা (Online & Education)**:
• একাদশ শ্রেণিতে কলেজ ভর্তি ও নিশ্চায়ন, বিশ্ববিদ্যালয় ভর্তি আবেদন
• সরকারি ও বেসরকারি চাকরির আবেদন নির্ভুলভাবে পূরণ
• সরকারি সুরক্ষা টিকা ও কলেরা ভ্যাকসিন (OCV) আবেদন ও সার্টিফিকেট
• জন্ম নিবন্ধন সংশোধন ও অনলাইন জিডি (GD)
• এসএসসি ও এইচএসসি পরীক্ষার রেজাল্ট, মার্কশিট ও বোর্ড চ্যালেঞ্জ
👉 বিস্তারিত দেখুন: [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details), [বিশ্ববিদ্যালয় ভর্তি পেজ](/admission/university), [চাকরির আবেদন পেজ](/service/edu-fee), [টিকা ও ভ্যাকসিন আবেদন পেজ](/service/gov-vaccine), [এসএসসি ও দাখিল সেবা পেজ](/ssc-details)

৩. **প্রিন্টিং ও ডকুমেন্টস (Printing & Documents)**:
• পাসপোর্ট সাইজ ডিজিটাল ল্যাব প্রিন্ট ছবি
• ফটোকপি (উন্নত রঙিন ও সাদাকালো)
• প্রিমিয়াম কোয়ালিটি ল্যামিনেশন
• আধুনিক প্রফেশনাল সিভি ও বায়োডাটা (Resume) তৈরি
👉 বিস্তারিত দেখুন: [সিভি ও বায়োডাটা পেজ](/service/doc-resume), [ছবি প্রিন্ট পেজ](/service/print-photo), [ফটোকপি সেবা পেজ](/service/print-copy), [ল্যামিনেশন পেজ](/service/print-lamination)

৪. **সিম সেবা (SIM Services)**:
• গ্রামীণফোন (GP) সহ সকল অপারেটরের নতুন সিম বায়োমেট্রিক রেজিস্ট্রেশন
• হারানো বা নষ্ট সিমের নম্বর ঠিক রেখে নতুন সিম রিপ্লেসমেন্ট
• যেকোনো নম্বরে দ্রুত মোবাইল রিচার্জ ও স্পেশাল মিনিট/এমবি প্যাক
👉 বিস্তারিত দেখুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp), [নতুন সিম রেজিস্ট্রেশন পেজ](/service/sim-new), [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace), [মোবাইল রিচার্জ পেজ](/service/sim-recharge)`;
  }
  if (q.includes("সিম") || q.includes("sim") || q.includes("gp") || q.includes("গ্রামীন") || q.includes("গ্রামীণ")) {
    if (q.includes("রিপ্লেস") || q.includes("নষ্ট") || q.includes("হারিয়ে") || q.includes("replace") || q.includes("swap")) {
      return "কাজী স্টোরে গ্রামীনফোন (GP) সহ যেকোনো অপারেটরের হারিয়ে যাওয়া, চুরি হওয়া বা নষ্ট সিম কার্ডের নম্বর ঠিক রেখে তাৎক্ষণিক সিম রিপ্লেসমেন্ট করা যায়। এর জন্য মূল গ্রাহকের এনআইডি (NID) নম্বর ও বায়োমেট্রিক ফিঙ্গারপ্রিন্ট প্রয়োজন।\n\n👉 বিস্তারিত তথ্য ও নিয়মাবলী দেখতে আমাদের ওয়েবসাইটে ভিজিট করুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp) অথবা [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)";
    }
    return "কাজী স্টোরে গ্রামীনফোন (GP), রবি, বাংলালিংক, টেলিটক ও এয়ারটেলের নতুন ৪জি/৫জি রেডি সিম বায়োমেট্রিক পদ্ধতিতে নেওয়া যায়। এছাড়াও আকর্ষণীয় ওয়েলকাম অফার ও স্পেশাল নম্বর কালেকশন সুবিধা রয়েছে।\n\n👉 বিস্তারিত দেখতে আমাদের ওয়েবসাইটে ভিজিট করুন: [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp)";
  }
  if (q.includes("বিকাশ") || q.includes("bkash")) {
    return "কাজী স্টোর একটি অথোরাইজড বিকাশ এজেন্ট পয়েন্ট। এখানে ক্যাশ ইন, ক্যাশ আউট, সেন্ড মানি ও রেমিট্যান্স উত্তোলনের সেবা পাওয়া যায়।\n\n👉 বিকাশ সংক্রান্ত প্রায়শই জিজ্ঞাসিত প্রশ্ন ও তথ্য দেখতে ক্লিক করুন: [বিকাশ সেবা পেজ](/service/mfs-bkash) এবং ফি দেখতে: [সার্ভিস চার্জ তালিকা](/charges)";
  }
  if (q.includes("নগদ") || q.includes("রকেট") || q.includes("mfs") || q.includes("টাকা") || q.includes("ক্যাশ") || q.includes("চার্জ")) {
    return "কাজী স্টোরে বিকাশ, নগদ, রকেট, উপায় ও সেলফিনের মাধ্যমে ক্যাশ ইন, ক্যাশ আউট ও মানি ট্রান্সফার সুবিধা রয়েছে।\n\n👉 সকল লেনদেনের অফিশিয়াল রেট ও ফি জানতে দেখুন: [সার্ভিস চার্জ তালিকা](/charges) অথবা [নগদ সেবা পেজ](/service/mfs-nagad)";
  }
  if (q.includes("ভর্তি") || q.includes("কলেজ") || q.includes("admission") || q.includes("একাদশ")) {
    return "কাজী স্টোরে একাদশ শ্রেণিতে কলেজ ভর্তি (XI Class Admission), পছন্দক্রম অনুযায়ী চয়েস লিস্ট প্রদান ও নিশ্চায়ন ফি নির্ভুলভাবে জমা দেওয়া হয়।\n\n👉 কলেজ ভর্তি আবেদনের নিয়মাবলী ও বিস্তারিত দেখতে ক্লিক করুন: [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details)";
  }
  if (q.includes("এসএসসি") || q.includes("ssc") || q.includes("দাখিল") || q.includes("রেজাল্ট") || q.includes("বোর্ড")) {
    return "কাজী স্টোরে এসএসসি ও দাখিল পরীক্ষার রেজাল্ট মার্কশিট সহ দেখা, বোর্ড চ্যালেঞ্জ/পুনঃনিরীক্ষণ ও ফর্ম ফিলাপের সুবিধা রয়েছে।\n\n👉 বিস্তারিত জানতে দেখুন: [এসএসসি ও দাখিল সেবা পেজ](/ssc-details)";
  }
  if (q.includes("এইচএসসি") || q.includes("hsc") || q.includes("আলিম")) {
    return "এইচএসসি ও আলিম পরীক্ষার ফর্ম ফিলাপ, মার্কশিট উত্তোলন ও বোর্ড চ্যালেঞ্জ সেবা পেতে ভিজিট করুন: [এইচএসসি সেবা পেজ](/hsc-details)";
  }
  if (q.includes("ক্রেডিট") || q.includes("কার্ড") || q.includes("credit card")) {
    return "যেকোনো ব্যাংকের ভিসা (Visa), মাস্টারকার্ড (Mastercard) ও অ্যামেক্স ক্রেডিট কার্ডের বিল তাৎক্ষণিকভাবে কোনো ঝামেলা ছাড়াই পরিশোধ করা যায়।\n\n👉 বিস্তারিত জানতে ও সুবিধা দেখতে ক্লিক করুন: [ক্রেডিট কার্ড বিল পেমেন্ট পেজ](/credit-card-bill-payment)";
  }
  if (q.includes("টিকা") || q.includes("ভ্যাকসিন") || q.includes("vaccine") || q.includes("কলেরা")) {
    return "সুরক্ষা টিকা ও ওরাল কলেরা ভ্যাকসিন (OCV)-এর জন্য নির্ভুল অনলাইন রেজিস্ট্রেশন ও সার্টিফিকেট উত্তোলন করা যায়।\n\n👉 বিস্তারিত জানতে দেখুন: [টিকা আবেদন পেজ](/service/gov-vaccine)";
  }
  if (q.includes("সিভি") || q.includes("cv") || q.includes("ছবি") || q.includes("প্রিন্ট") || q.includes("ফটোকপি") || q.includes("ল্যামিনেশন")) {
    return "কাজী স্টোরে আধুনিক সিভি/রেজুমে তৈরি, ডিজিটাল পাসপোর্ট সাইজ ছবি প্রিন্ট, ফটোকপি ও প্রিমিয়াম ল্যামিনেশন সেবা দেওয়া হয়।\n\n👉 সিভি তৈরির নমুনা দেখতে ভিজিট করুন: [সিভি ও বায়োডাটা পেজ](/service/doc-resume)";
  }
  return "কাজী স্টোরে আপনাকে স্বাগতম! এখানে নতুন সিম ও রিপ্লেসমেন্ট, বিকাশ/নগদ/রকেট, ক্রেডিট কার্ড বিল, বিদ্যুৎ বিল, কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন, চাকরির আবেদন ও সিভি তৈরি সহ সকল ডিজিটাল সেবা পাওয়া যায়।\n\n👉 আমাদের সকল সেবা দেখতে ওয়েবসাইটের হোমপেজ ভিজিট করুন অথবা সার্ভিস চার্জ তালিকা দেখতে ক্লিক করুন: [সার্ভিস চার্জ তালিকা](/charges)";
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

      const candidateModels = ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-3.8-flash"];
      let generatedText = "";

      for (const model of candidateModels) {
        try {
          const response = await client.models.generateContent({
            model,
            contents: conversationContents,
            config: {
              systemInstruction: KAZI_STORE_SYSTEM_PROMPT,
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
