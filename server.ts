import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { buildKaziStoreBrainPrompt, KAZI_STORE_BRAIN_REGISTRY } from "./src/data/kaziBrainKnowledge";

dotenv.config();

const KAZI_STORE_SYSTEM_PROMPT = buildKaziStoreBrainPrompt();

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
    lower.includes('ফি') || lower.includes('রেট') || lower.includes('বিকাশ') || lower.includes('নগদ') || lower.includes('রকেট');

  if (!isCashOutTopic) return null;

  // Do not intercept if user is specifically asking about other services like BMET, admissions, vaccines, etc.
  if (
    lower.includes('bmet') || lower.includes('বিএমইটি') || lower.includes('প্রবাসী') ||
    lower.includes('ভর্তি') || lower.includes('admission') || lower.includes('টিকা') ||
    lower.includes('vaccine') || lower.includes('সিম') || lower.includes('বিদ্যুৎ') ||
    lower.includes('গ্যাস') || lower.includes('ইন্টারনেট') || lower.includes('সিভি')
  ) {
    return null;
  }

  // Detect specific provider
  let provider: 'bkash' | 'nagad' | 'rocket' | null = null;
  if (lower.includes('বিকাশ') || lower.includes('bkash')) provider = 'bkash';
  else if (lower.includes('নগদ') || lower.includes('nagad')) provider = 'nagad';
  else if (lower.includes('রকেট') || lower.includes('rocket')) provider = 'rocket';

  // Extract amount: Prioritize explicit digit amounts first (e.g. ২৫০০, 2500, 5000)
  let amount: number | undefined;

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

  // Textual number multipliers if no digit amount found
  if (!amount) {
    const wordMultipliers: [RegExp, number][] = [
      [/এক\s*লাখ/i, 100000],
      [/পঞ্চাশ\s*হাজার/i, 50000],
      [/ত্রিশ\s*হাজার/i, 30000],
      [/পঁচিশ\s*হাজার/i, 25000],
      [/বিশ\s*হাজার/i, 20000],
      [/পনের\s*হাজার/i, 15000],
      [/দশ\s*হাজার/i, 10000],
      [/আট\s*হাজার/i, 8000],
      [/সাত\s*হাজার/i, 7000],
      [/ছয়\s*হাজার/i, 6000],
      [/পাঁচ\s*হাজার/i, 5000],
      [/চার\s*হাজার/i, 4000],
      [/তিন\s*হাজার/i, 3000],
      [/দুই\s*হাজার/i, 2000],
      [/দেড়\s*হাজার/i, 1500],
      [/এক\s*হাজার/i, 1000],
      [/পাঁচশত/i, 500],
    ];

    for (const [regex, val] of wordMultipliers) {
      if (regex.test(lower)) {
        amount = val;
        break;
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

👉 বিস্তারিত রেট ও চার্জ দেখতে: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    if (provider === 'nagad') {
      return `**${amtStr} টাকা নগদ ক্যাশ আউট খরচ:**
• নগদ অ্যাপে: **${nagadApp} টাকা** (প্রতি হাজারে ১৩ টাকা)
• ইউএসএসডি ডায়ালে (*১৬৭#): **${nagadUssd} টাকা** (প্রতি হাজারে ১৫ টাকা)

👉 বিস্তারিত রেট ও চার্জ দেখতে: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    if (provider === 'rocket') {
      return `**${amtStr} টাকা রকেট ক্যাশ আউট খরচ:**
• এজেন্ট পয়েন্টে: **${rocketAgent} টাকা** (প্রতি হাজারে ১৭ টাকা)
• ডাচ্-বাংলা এটিএম (ATM): **${rocketAtm} টাকা** (প্রতি হাজারে ৯ টাকা)

👉 বিস্তারিত রেট ও চার্জ দেখতে: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
    }

    return `**${amtStr} টাকা ক্যাশ আউট খরচ হিসাব:**
• **বিকাশ**: প্রিয় এজেন্ট **${bkashPriyo} টাকা** | সাধারণ এজেন্ট **${bkashReg} টাকা**
• **নগদ**: অ্যাপে **${nagadApp} টাকা** | ডায়ালে (*১৬৭#) **${nagadUssd} টাকা**
• **রকেট**: এজেন্টে **${rocketAgent} টাকা** | এটিএমে **${rocketAtm} টাকা**

👉 বিস্তারিত রেট ও সম্পূর্ণ তালিকা: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
  }

  // If general cash out without specific amount
  if (lower.includes('ক্যাশ') || lower.includes('চার্জ') || lower.includes('খরচ') || lower.includes('তুলতে') || lower.includes('ফি')) {
    return `**প্রতি ১,০০০ টাকা ক্যাশ আউট খরচের তালিকা:**
• **বিকাশ**: প্রিয় এজেন্ট ১৪ টাকা | সাধারণ এজেন্ট ১৮.৫০ টাকা
• **নগদ**: অ্যাপে ১৩ টাকা | ডায়ালে (*১৬৭#) ১৫ টাকা
• **রকেট**: এজেন্টে ১৭ টাকা | এটিএমে ৯ টাকা

👉 সকল সার্ভিস চার্জ ও রেট চার্ট: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
  }

  return null;
}

// Dynamic, concise, short and professional fallback answering engine
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
    return `**কাজী স্টোরের প্রধান সেবাসমূহ:**

১. **আর্থিক সেবা**: বিকাশ, নগদ ও রকেট ক্যাশ ইন/আউট, ক্রেডিট কার্ড বিল ও ইউটিলিটি বিল পরিশোধ।
👉 [সার্ভিস চার্জ ও ফি তালিকা](/charges) | [ক্রেডিট কার্ড বিল পরিশোধ পেজ](/credit-card-bill-payment)

২. **অনলাইন ও শিক্ষা**: কলেজ ও বিশ্ববিদ্যালয় ভর্তি আবেদন, সরকারি/বেসরকারি চাকরির আবেদন, সুরক্ষা টিকা ও জন্ম নিবন্ধন।
👉 [কলেজ ভর্তি বিস্তারিত পেজ](/college-admission-details) | [চাকরির আবেদন পেজ](/service/edu-fee)

৩. **প্রিন্টিং ও ডকুমেন্টস**: ল্যাব কোয়ালিটি ছবি প্রিন্ট, উন্নত ফটোকপি, ল্যামিনেশন ও প্রফেশনাল সিভি তৈরি।
👉 [সিভি ও বায়োডাটা পেজ](/service/doc-resume) | [ছবি প্রিন্ট পেজ](/service/print-photo)

৪. **সিম সেবা**: গ্রামীনফোন সহ সকল সিমের বায়োমেট্রিক রেজিস্ট্রেশন, সিম রিপ্লেসমেন্ট ও মোবাইল রিচার্জ।
👉 [GP নতুন সিম ও রিপ্লেসমেন্ট পেজ](/sim/gp) | [সিম রিপ্লেসমেন্ট পেজ](/service/sim-replace)`;
  }

  // Dynamic brain registry search: Automatically supports any newly added services in the registry
  const matchingCandidates = KAZI_STORE_BRAIN_REGISTRY
    .map(item => {
      const matchedAliases = item.aliases.filter(alias => q.includes(alias.toLowerCase()));
      const maxLen = matchedAliases.reduce((max, a) => Math.max(max, a.length), 0);
      return { item, maxLen };
    })
    .filter(m => m.maxLen > 0)
    .sort((a, b) => b.maxLen - a.maxLen);

  if (matchingCandidates.length > 0) {
    const item = matchingCandidates[0].item;
    const points = item.keyPoints.slice(0, 3).map(p => `• ${p}`).join('\n');
    const reqs = item.requirements && item.requirements.length > 0 
      ? `\n• প্রয়োজনীয় কাগজপত্র: ${item.requirements.join(', ')}`
      : '';
    const charges = item.chargesOrRates ? `\n• চার্জ/ফি: ${item.chargesOrRates}` : '';
    return `**${item.name}:**\n${points}${charges}${reqs}\n\n👉 বিস্তারিত তথ্য ও চার্ট দেখুন: [${item.name} বিস্তারিত পেজ](${item.route})`;
  }

  return `কাজী স্টোরে আপনাকে স্বাগতম! এখানে মোবাইল ব্যাংকিং, সিম সেবা, ভর্তি আবেদন, ক্রেডিট কার্ড ও ইউটিলিটি বিল পরিশোধ সহ সকল সেবা পাওয়া যায়।

👉 সকল চার্জ ও সার্ভিস তালিকা দেখতে: [সার্ভিস চার্জ ও ফি তালিকা](/charges)`;
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

      // Calculate cash out if applicable (instant exact calculation, no waiting)
      const calculatedCashOut = handleCashOutQuery(message);
      if (calculatedCashOut) {
        return res.json({ reply: calculatedCashOut });
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

      // Ground Gemini dynamically with exact brain knowledge item (prioritize longest matching alias for precision)
      const matchingItems = KAZI_STORE_BRAIN_REGISTRY
        .map(item => {
          const matchedAliases = item.aliases.filter(alias => message.toLowerCase().includes(alias.toLowerCase()));
          const maxLen = matchedAliases.reduce((max, a) => Math.max(max, a.length), 0);
          return { item, maxLen };
        })
        .filter(m => m.maxLen > 0)
        .sort((a, b) => b.maxLen - a.maxLen);

      const matchedBrainItem = matchingItems[0]?.item;

      let dynamicSystemPrompt = buildKaziStoreBrainPrompt();
      if (matchedBrainItem) {
        dynamicSystemPrompt += `\n\n### গুরুত্বপূর্ণ ফোকাস (CRITICAL MATCH):\nব্যবহারকারীর প্রশ্নটি সরাসরি "${matchedBrainItem.name}" এর সাথে সম্পর্কিত।\nএই সেবার অফিশিয়াল লিংক হলো: [${matchedBrainItem.name}](${matchedBrainItem.route})\n\nমূল তথ্য:\n${matchedBrainItem.keyPoints.map(k => `• ${k}`).join('\n')}\n${matchedBrainItem.chargesOrRates ? `চার্জ/ফি: ${matchedBrainItem.chargesOrRates}\n` : ''}${matchedBrainItem.requirements ? `প্রয়োজনীয় কাগজপত্র: ${matchedBrainItem.requirements.join(', ')}\n` : ''}\nনিয়ম: অন্য কোনো পেজের লিংক দেবে না। তোমার উত্তরের শেষে শুধুমাত্র এবং নিশ্চিতভাবে [${matchedBrainItem.name}](${matchedBrainItem.route}) লিংকটি যুক্ত করবে।`;
      }

      const candidateModels = ["gemini-3.5-flash-lite", "gemini-2.5-flash", "gemini-3.8-flash"];
      let generatedText = "";

      for (const model of candidateModels) {
        try {
          const timeoutPromise = new Promise<never>((_, reject) => 
            setTimeout(() => reject(new Error("Model call timeout")), 5500)
          );
          const generatePromise = client.models.generateContent({
            model,
            contents: conversationContents,
            config: {
              systemInstruction: dynamicSystemPrompt,
            },
          });
          const response: any = await Promise.race([generatePromise, timeoutPromise]);
          if (response?.text) {
            generatedText = response.text;
            break;
          }
        } catch (modelErr: any) {
          console.warn(`Model ${model} unavailable or timed out (${modelErr?.message || modelErr}), trying next candidate...`);
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
