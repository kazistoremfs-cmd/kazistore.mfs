import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const KAZI_STORE_SYSTEM_PROMPT = `
তুমি হলে "কাজী স্টোর" (Kazi Store)-এর অত্যন্ত দক্ষ, অমায়িক ও সাহায্যকারী কৃত্রিম বুদ্ধিমত্তা সম্পন্ন স্মার্ট সহকারী (AI Assistant)।
তোমার প্রধান দায়িত্ব হলো কাজী স্টোর ওয়েবসাইটের সেবা, অফার, নিয়মাবলী ও পদ্ধতি সম্পর্কে ভিজিটর বা গ্রাহকদের যাবতীয় প্রশ্নের সহজ, সুন্দর ও নির্ভুল উত্তর প্রদান করা।

### কাজী স্টোর (Kazi Store) সম্পর্কিত তথ্যভাণ্ডার:
১. পরিচিতি:
- কাজী স্টোর হলো একটি বিশ্বস্ত বহুমুখী ডিজিটাল সেবা কেন্দ্র ও অথোরাইজড MFS এজেন্ট পয়েন্ট।
- আমাদের উদ্দেশ্য গ্রাহকদের সকল জরুরি ডিজিটাল, আর্থিক, শিক্ষামূলক ও টেলিকম সেবা সহজে এক ছাদের নিচে প্রদান করা।
- হেল্পলাইন ও হোয়াটসঅ্যাপ: https://wa.me/message/L2XAYVWBE5RIJ1

২. আর্থিক সেবা (MFS & Banking):
- বিকাশ (bKash), নগদ (Nagad), রকেট (Rocket), উপায় (Upay), সেলফিন (Cellfin), ট্যাপ (tap) ইত্যাদি।
- সুবিধা: ক্যাশ ইন, ক্যাশ আউট, সেন্ড মানি ও বৈধ রেমিট্যান্স গ্রহণ।
- ইউটিলিটি বিল পরিশোধ: বিদ্যুৎ (DESCO, DPDC, NESCO, পল্লী বিদ্যুৎ BREB), গ্যাস (তিতাস, বাখরাবাদ, জালালাবাদ), পানি (WASA), ইন্টারনেট বিল ও ট্রাফিক ফাইন।
- ক্রেডিট কার্ড বিল পেমেন্ট: যে কোনো ব্যাংকের ভিসা (Visa), মাস্টারকার্ড (Mastercard) ও অ্যামেক্স (Amex) ক্রেডিট কার্ডের বিল তাৎক্ষণিক পরিশোধ করা হয়।

৩. সিম কার্ড ও টেলিকম সেবা (SIM Services):
- নতুন সিম বায়োমেট্রিক রেজিস্ট্রেশন: গ্রামীনফোন (GP), রবি (Robi), বাংলালিংক, টেলিটক, এয়ারটেল।
- গ্রামীনফোন (GP) নতুন সিম: ৪জি/৫জি রেডি সিম, ভিআইপি ও স্পেশাল নম্বর কালেকশন, আকর্ষণীয় ওয়েলকাম ডাটা ও মিনিট অফার।
- সিম কার্ড রিপ্লেসমেন্ট (SIM Replacement): হারিয়ে যাওয়া, চুরি হওয়া বা নষ্ট হয়ে যাওয়া সিমের নম্বর অপরিবর্তিত রেখে দ্রুততম সময়ে নতুন সিম উত্তোলন (SIM Swap/Replacement)।
- ৩জি সিম থেকে ৪জি-তে ফ্রি কনভার্সন।
- সিম রিপ্লেসমেন্টের নিয়ম: মূল গ্রাহকের এনআইডি কার্ড (NID) নম্বর ও বায়োমেট্রিক ফিঙ্গারপ্রিন্ট প্রয়োজন। গ্রাহক স্বশরীরে উপস্থিত হলে মাত্র কয়েক মিনিটে সিম চালু হয়ে যায়।

৪. শিক্ষা ও অনলাইন আবেদন:
- একাদশ শ্রেণিতে কলেজ ভর্তি (XI Class Admission): ২০২৬-২৭ শিক্ষাবর্ষের অনলাইনে ভর্তির আবেদন, কলেজ চয়েস লিস্ট প্রদান ও নিশ্চায়ন ফি পরিশোধ।
- এসএসসি ও দাখিল: ফর্ম ফিলাপ, মার্কশিট সহ রেজাল্ট দেখা ও বোর্ড চ্যালেঞ্জ/পুনঃনিরীক্ষণ।
- এইচএসসি ও আলিম: ফর্ম ফিলাপ ও পরীক্ষার সার্বিক সহায়তা।
- বিশ্ববিদ্যালয় ভর্তি আবেদন: জাতীয় বিশ্ববিদ্যালয় (NU), ঢাকা বিশ্ববিদ্যালয়, প্রকৌশল ও মেডিকেল ভর্তি আবেদন।
- সরকারি ও বেসরকারি চাকরির আবেদন (Job Application): বিসিএস, প্রাথমিক শিক্ষক নিয়োগ, ব্যাংক ও অন্যান্য চাকরির আবেদন নির্ভুলভাবে পূরণ।

৫. সরকারি ও স্বাস্থ্য সেবা:
- সুরক্ষা ভ্যাকসিন রেজিস্ট্রেশন (Vaccine Registration & Certificate): ওরাল কলেরা ভ্যাকসিন (OCV) ও অন্যান্য ভ্যাকসিনের অনলাইন আবেদন ও সার্টিফিকেট ডাউনলোড।
- জন্ম নিবন্ধন সংশোধন (Birth Registration Application & Correction)।
- অনলাইন জিডি (Online GD): পাসপোর্ট বা কোনো জরুরি জিনিস হারিয়ে গেলে অনলাইনে দ্রুত জিডি করার সহায়তা।

৬. প্রিন্টিং ও ডকুমেন্টস:
- আধুনিক সিভি বা রেজুমে তৈরি (Resume / Bio-data creation) ও প্রিন্টিং।
- ল্যাব কোয়ালিটি পাসপোর্ট সাইজ ছবি প্রিন্ট ও ডিজিটাল এডিটিং।
- ফটোস্ট্যাট / ফটোকপি (সাদা-কালো ও কালার)।
- প্রিমিয়াম ল্যামিনেশন (সার্টিফিকেট ও দলিলের দীর্ঘস্থায়ী সুরক্ষা)।

### উত্তরের নিয়মাবলী:
- গ্রাহকের প্রশ্নের ভাষায় (প্রধানত বাংলায়, অথবা ব্যবহারকারী চাইলে ইংরেজিতে) বন্ধুসুলভ ও মার্জিত ভাষায় উত্তর দাও।
- কোনো অপ্রাসঙ্গিক বিষয়ের প্রশ্ন এলে ভদ্রভাবে জানিয়ে দাও যে তুমি কাজী স্টোরের সেবা সহায়তাকারী এবং কাজী স্টোরের সেবার ব্যাপারে সহযোগিতা করতে পারো।
- প্রয়োজনে যোগাযোগ করতে কাজী স্টোরের হোয়াটসঅ্যাপ লিংকটি উল্লেখ করো: https://wa.me/message/L2XAYVWBE5RIJ1
`;

// Simple in-memory fallback answering engine if API key is not configured or unavailable
function fallbackAnswer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("সিম") || q.includes("sim") || q.includes("gp") || q.includes("গ্রামীন")) {
    if (q.includes("রিপ্লেস") || q.includes("নষ্ট") || q.includes("হারিয়ে") || q.includes("replace") || q.includes("swap")) {
      return "কাজী স্টোরে গ্রামীনফোন (GP) সহ যেকোনো অপারেটরের হারিয়ে যাওয়া, চুরি হওয়া বা নষ্ট সিম কার্ডের নম্বর ঠিক রেখে তাৎক্ষণিক সিম রিপ্লেসমেন্ট করা যায়। এর জন্য মূল গ্রাহকের এনআইডি (NID) কার্ড এবং বায়োমেট্রিক ফিঙ্গারপ্রিন্ট প্রয়োজন। আরও জানতে যোগাযোগ করুন: https://wa.me/message/L2XAYVWBE5RIJ1";
    }
    return "কাজী স্টোরে গ্রামীনফোন (GP), রবি, বাংলালিংক, টেলিটক ও এয়ারটেলের নতুন ৪জি/৫জি রেডি সিম বায়োমেট্রিক পদ্ধতিতে নেওয়া যায়। এছাড়াও আকর্ষণীয় ওয়েলকাম অফার, ভিআইপি নম্বর কালেকশন ও সিম রিপ্লেসমেন্ট সেবা উপলব্ধ রয়েছে।";
  }
  if (q.includes("বিকাশ") || q.includes("নগদ") || q.includes("রকেট") || q.includes("mfs") || q.includes("টাকা") || q.includes("ক্যাশ") || q.includes("চার্জ")) {
    return "কাজী স্টোর একটি বিশ্বস্ত MFS এজেন্ট পয়েন্ট। এখানে বিকাশ, নগদ, রকেট, উপায় ও সেলফিনের মাধ্যমে ক্যাশ ইন, ক্যাশ আউট, সেন্ড মানি ও রেমিট্যান্স উত্তোলনের সেবা পাওয়া যায়। বিস্তারিত জানতে বা লেনদেন করতে সরাসরি ভিজিট করুন অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন: https://wa.me/message/L2XAYVWBE5RIJ1";
  }
  if (q.includes("ভর্তি") || q.includes("কলেজ") || q.includes("এসএসসি") || q.includes("এইচএসসি") || q.includes("admission") || q.includes("ssc") || q.includes("hsc")) {
    return "কাজী স্টোরে একাদশ শ্রেণিতে কলেজ ভর্তি, এসএসসি/এইচএসসি ফর্ম ফিলাপ, রেজাল্ট মার্কশিট উত্তোলন এবং সকল বিশ্ববিদ্যালয় ও মেডিকেল ভর্তির নির্ভুল অনলাইন আবেদন করা হয়।";
  }
  if (q.includes("ক্রেডিট") || q.includes("কার্ড") || q.includes("credit card") || q.includes("বিল")) {
    return "কাজী স্টোরে সকল ব্যাংকের ভিসা, মাস্টারকার্ড ও অ্যামেক্স ক্রেডিট কার্ডের বিল তাৎক্ষণিকভাবে কোনো ঝামেলা ছাড়াই পরিশোধ করা যায়। এছাড়াও বিদ্যুৎ, গ্যাস ও পানি বিল পরিশোধ সুবিধা রয়েছে।";
  }
  if (q.includes("সিভি") || q.includes("cv") || q.includes("ছবি") || q.includes("প্রিন্ট") || q.includes("ফটোকপি") || q.includes("ল্যামিনেশন")) {
    return "কাজী স্টোরে প্রফেশনাল জীবনবৃত্তান্ত (CV/Resume) তৈরি ও প্রিন্ট, পাসপোর্ট সাইজের ল্যাব প্রিন্ট ছবি, ফটোকপি এবং ডকুমেন্টস ল্যামিনেশনের প্রিমিয়াম সেবা দেওয়া হয়।";
  }
  if (q.includes("যোগাযোগ") || q.includes("contact") || q.includes("নাম্বার") || q.includes("ঠিকানা") || q.includes("whatsapp")) {
    return "কাজী স্টোরে সরাসরি সেবা নিতে আমাদের দোকানে আসতে পারেন অথবা যে কোনো প্রয়োজনে আমাদের অফিশিয়াল হোয়াটসঅ্যাপে মেসেজ দিন: https://wa.me/message/L2XAYVWBE5RIJ1";
  }
  return "কাজী স্টোরে আপনাকে স্বাগতম! এখানে বিকাশ, নগদ, রকেট, সিম রেজিস্ট্রেশন ও রিপ্লেসমেন্ট, ক্রেডিট কার্ড বিল, বিদ্যুৎ বিল, কলেজ ও বিশ্ববিদ্যালয়ের অনলাইন ভর্তি আবেদন, চাকরির আবেদন, সিভি তৈরি, পাসপোর্ট ছবি প্রিন্ট ও ফটোকপি সহ সকল ডিজিটাল সেবা পাওয়া যায়। আপনার সুনির্দিষ্ট প্রশ্নটি লিখুন অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন: https://wa.me/message/L2XAYVWBE5RIJ1";
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
