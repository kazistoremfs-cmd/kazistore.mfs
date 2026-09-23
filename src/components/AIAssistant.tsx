import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Sparkles, RotateCcw, 
  ExternalLink, User, HelpCircle, Loader2, ChevronDown,
  ArrowRight, CheckCircle2, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  isStreaming?: boolean;
}

const SUGGESTIONS = [
  "কাজী স্টোরে কী কী সেবা পাওয়া যায়?",
  "৫০০০ টাকা তুলতে কত খরচ?",
  "বিকাশ ও নগদ ক্যাশ আউট ও চার্জ কত?",
  "ক্রেডিট কার্ড বিল পরিশোধের নিয়ম কী?",
  "একাদশ শ্রেণিতে কলেজ ভর্তির আবেদন কীভাবে করব?",
  "সিভি বা বায়োডাটা (Resume) তৈরির নিয়ম কী?",
  "গ্রামীনফোন সিম রিপ্লেসমেন্ট করতে কী কী লাগে?",
];

// Map of route names for friendly fallback labels
const ROUTE_LABELS: Record<string, string> = {
  '/sim/gp': 'GP নতুন সিম ও রিপ্লেসমেন্ট পেজ',
  '/service/sim-new': 'নতুন সিম রেজিস্ট্রেশন পেজ',
  '/service/sim-replace': 'সিম রিপ্লেসমেন্ট পেজ',
  '/service/sim-recharge': 'মোবাইল রিচার্জ পেজ',
  '/college-admission-details': 'কলেজ ভর্তি বিস্তারিত পেজ',
  '/ssc-details': 'এসএসসি ও দাখিল সেবা পেজ',
  '/hsc-details': 'এইচএসসি সেবা পেজ',
  '/admission/university': 'বিশ্ববিদ্যালয় ভর্তি পেজ',
  '/service/edu-fee': 'চাকরির আবেদন পেজ',
  '/credit-card-bill-payment': 'ক্রেডিট কার্ড বিল পরিশোধ পেজ',
  '/charges': 'সার্ভিস চার্জ ও ফি তালিকা',
  '/service/mfs-bkash': 'বিকাশ সেবা পেজ',
  '/service/mfs-nagad': 'নগদ সেবা পেজ',
  '/service/mfs-rocket': 'রকেট সেবা পেজ',
  '/service/bill-electricity': 'বিদ্যুৎ বিল পরিশোধ পেজ',
  '/service/bill-gas': 'গ্যাস বিল পেজ',
  '/service/bill-internet': 'ইন্টারনেট বিল পেজ',
  '/service/bill-vehicle': 'ট্রাফিক জরিমানা পেজ',
  '/service/gov-vaccine': 'টিকা ও ভ্যাকসিন আবেদন পেজ',
  '/service/gov-birth': 'জন্ম নিবন্ধন পেজ',
  '/service/gov-gd': 'অনলাইন জিডি পেজ',
  '/service/doc-resume': 'সিভি ও বায়োডাটা পেজ',
  '/service/print-photo': 'ছবি প্রিন্ট পেজ',
  '/service/print-copy': 'ফটোকপি সেবা পেজ',
  '/service/print-lamination': 'ল্যামিনেশন পেজ',
};

// Rich Message Formatter that turns Markdown links, internal routes, and bold text into styled UI
function FormattedMessageContent({ text, onNavigate }: { text: string; onNavigate?: () => void }) {
  // Regex to match markdown links: [label](target) or bare urls / bare routes
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s)]+)|(\/(?:sim\/gp|college-admission-details|ssc-details|hsc-details|credit-card-bill-payment|charges|admission\/[a-z0-9-]+|vaccine\/[a-z0-9-]+|service\/[a-z0-9-]+))/g;

  // Split text into paragraphs/lines
  const lines = text.split('\n');

  const renderInlineSegment = (segment: string, keyPrefix: string) => {
    // Process markdown links or URLs first
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    linkRegex.lastIndex = 0;
    while ((match = linkRegex.exec(segment)) !== null) {
      const matchStart = match.index;
      const matchEnd = linkRegex.lastIndex;

      if (matchStart > lastIndex) {
        parts.push(renderBoldText(segment.substring(lastIndex, matchStart), `${keyPrefix}-t-${lastIndex}`));
      }

      const markdownLabel = match[1];
      const markdownTarget = match[2];
      const bareUrl = match[3];
      const bareRoute = match[4];

      if (markdownLabel && markdownTarget) {
        if (markdownTarget.startsWith('/')) {
          parts.push(
            <Link
              key={`${keyPrefix}-link-${matchStart}`}
              to={markdownTarget}
              onClick={onNavigate}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 my-1 bg-gradient-to-r from-teal-500/25 to-[#08B3AF]/25 hover:from-teal-500/40 hover:to-[#08B3AF]/40 text-teal-200 hover:text-white border border-teal-500/50 rounded-xl text-xs font-bold transition-all shadow-sm group/link cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-300 group-hover/link:rotate-12 transition-transform shrink-0" />
              <span className="underline decoration-teal-400/60 underline-offset-2">{markdownLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover/link:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`${keyPrefix}-ext-${matchStart}`}
              href={markdownTarget}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-300 hover:text-white underline underline-offset-2 text-xs font-medium break-all"
            >
              <span>{markdownLabel}</span>
              <ExternalLink className="w-3 h-3 inline shrink-0" />
            </a>
          );
        }
      } else if (bareRoute) {
        const label = ROUTE_LABELS[bareRoute] || 'সার্ভিস পেজ দেখুন';
        parts.push(
          <Link
            key={`${keyPrefix}-broute-${matchStart}`}
            to={bareRoute}
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 my-1 bg-gradient-to-r from-teal-500/25 to-[#08B3AF]/25 hover:from-teal-500/40 hover:to-[#08B3AF]/40 text-teal-200 hover:text-white border border-teal-500/50 rounded-xl text-xs font-bold transition-all shadow-sm group/link cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-300 group-hover/link:rotate-12 transition-transform shrink-0" />
            <span className="underline decoration-teal-400/60 underline-offset-2">{label}</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300 group-hover/link:translate-x-0.5 transition-transform shrink-0" />
          </Link>
        );
      } else if (bareUrl) {
        parts.push(
          <a
            key={`${keyPrefix}-bare-${matchStart}`}
            href={bareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-300 hover:text-white underline underline-offset-2 text-xs font-medium break-all"
          >
            <span>{bareUrl.includes('wa.me') ? 'কাজী স্টোর হোয়াটসঅ্যাপ' : bareUrl}</span>
            <ExternalLink className="w-3 h-3 inline shrink-0" />
          </a>
        );
      }

      lastIndex = matchEnd;
    }

    if (lastIndex < segment.length) {
      parts.push(renderBoldText(segment.substring(lastIndex), `${keyPrefix}-t-end`));
    }

    return parts;
  };

  const renderBoldText = (str: string, keyPrefix: string) => {
    const boldParts = str.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bPart, idx) => {
      if (bPart.startsWith('**') && bPart.endsWith('**')) {
        return (
          <strong key={`${keyPrefix}-b-${idx}`} className="font-bold text-white text-teal-100">
            {bPart.slice(2, -2)}
          </strong>
        );
      }
      return <span key={`${keyPrefix}-p-${idx}`}>{bPart}</span>;
    });
  };

  return (
    <div className="space-y-2">
      {lines.map((line, lIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={`empty-${lIdx}`} className="h-1" />;
        }

        // Check if list item
        const isBullet = /^[•*\-]\s+/.test(trimmed);
        const isNumbered = /^\d+\.\s+/.test(trimmed);

        if (isBullet || isNumbered) {
          const content = trimmed.replace(/^[•*\-]\s+|^\d+\.\s+/, '');
          return (
            <motion.div 
              key={`line-${lIdx}`} 
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-start gap-2 pl-1 leading-relaxed"
            >
              <span className="text-teal-400 mt-1 shrink-0 text-xs">
                {isNumbered ? '▪' : '•'}
              </span>
              <div className="flex-1 leading-relaxed">
                {renderInlineSegment(content, `line-${lIdx}`)}
              </div>
            </motion.div>
          );
        }

        return (
          <motion.p 
            key={`p-${lIdx}`} 
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="leading-relaxed"
          >
            {renderInlineSegment(line, `p-${lIdx}`)}
          </motion.p>
        );
      })}
    </div>
  );
}

// Live Typewriter effect component that reveals text smoothly with text animation and zero blinking
function TypewriterMessage({ 
  text, 
  isStreaming, 
  onFinished, 
  onScroll,
  onNavigate 
}: { 
  text: string; 
  isStreaming?: boolean; 
  onFinished?: () => void; 
  onScroll?: () => void;
  onNavigate?: () => void;
}) {
  const [tokenCount, setTokenCount] = useState(isStreaming ? 1 : 999999);
  const [isTypingComplete, setIsTypingComplete] = useState(!isStreaming);

  // Tokenize preserving spaces and newlines
  const tokensRef = useRef<string[]>([]);
  tokensRef.current = text.match(/\S+|\s+/g) || [text];

  useEffect(() => {
    if (!isStreaming) {
      setIsTypingComplete(true);
      return;
    }

    const totalTokens = tokensRef.current.length;
    let current = 1;
    setTokenCount(1);
    setIsTypingComplete(false);

    const interval = setInterval(() => {
      // Step by 3-4 tokens for snappy, crisp response on mobile and desktop
      current += 3;
      if (current >= totalTokens) {
        current = totalTokens;
        setTokenCount(totalTokens);
        setIsTypingComplete(true);
        clearInterval(interval);
        onFinished?.();
      } else {
        setTokenCount(current);
      }
      onScroll?.();
    }, 12);

    return () => clearInterval(interval);
  }, [text, isStreaming]);

  const handleFastForward = () => {
    setTokenCount(tokensRef.current.length);
    setIsTypingComplete(true);
    onFinished?.();
    onScroll?.();
  };

  const displayedText = isTypingComplete 
    ? text 
    : tokensRef.current.slice(0, tokenCount).join('');

  return (
    <div 
      className="relative group/msg select-text"
      onClick={(e) => {
        // If clicking on an anchor or link element, let default navigation happen
        const target = e.target as HTMLElement;
        if (target.closest('a')) return;
        if (!isTypingComplete) handleFastForward();
      }}
      title={!isTypingComplete ? "ক্লিক করে সম্পূর্ণ মেসেজ একসাথে দেখুন" : undefined}
    >
      <FormattedMessageContent text={displayedText} onNavigate={onNavigate} />
    </div>
  );
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'আসসালামু আলাইকুম! কাজী স্টোর সহকারী। যেকোনো ক্যাশ আউট চার্জ, সিম সেবা, ভর্তি আবেদন বা বিল পরিশোধের খরচ সরাসরি জানতে পারেন।\n\n👉 [সার্ভিস চার্জ ও ফি তালিকা](/charges)',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isStreaming: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const triggerButtonRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-kazi-ai', handleOpen);
    return () => window.removeEventListener('open-kazi-ai', handleOpen);
  }, []);

  // Minimize chat window when clicking or tapping outside
  useEffect(() => {
    if (!isOpen) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!target || !document.body.contains(target)) return;

      // On mobile touch devices, check if it was a swipe/scroll rather than a tap outside
      if (event instanceof TouchEvent && event.changedTouches?.length > 0) {
        const dx = Math.abs(event.changedTouches[0].clientX - touchStartX);
        const dy = Math.abs(event.changedTouches[0].clientY - touchStartY);
        if (dx > 12 || dy > 12) return; // User was scrolling, ignore
      }

      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(target) &&
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages.length, isLoading]);

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error('Server response error');
      }

      const data = await response.json();
      const replyText = data.reply || 'কাজী স্টোরের সকল সেবা সম্পর্কে জানতে আমাদের হোমপেজ ভিজিট করুন: [কাজী স্টোর সেবা](/charges)';

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'কাজী স্টোরের সেবা সম্পর্কে বিস্তারিত জানতে আমাদের ওয়েবসাইটের সার্ভিস তালিকা দেখুন: [সার্ভিস চার্জ ও ফি তালিকা](/charges)',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const markStreamComplete = (msgId: string) => {
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, isStreaming: false } : m));
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: 'কথোপকথন রিস্টার্ট করা হয়েছে। কাজী স্টোরের যেকোনো সেবা সম্পর্কে আপনার প্রশ্নটি করুন।',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isStreaming: false
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div ref={triggerButtonRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-2 hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-teal-500/40 backdrop-blur-md font-bn pointer-events-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span>কাজী স্টোর সম্পর্কে যেকোনো প্রশ্ন করুন</span>
          </motion.div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Kazi Store AI Assistant"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#08B3AF] to-teal-400 text-white shadow-2xl hover:shadow-teal-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20 cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>

          {isOpen ? (
            <ChevronDown className="w-7 h-7 text-white transition-transform group-hover:translate-y-0.5" />
          ) : (
            <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-bounce-slow" />
          )}
        </button>
      </div>

      {/* AI Chat Window / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 sm:bottom-22 right-2 sm:right-6 left-2 sm:left-auto w-auto sm:w-[440px] max-h-[85vh] h-[calc(100dvh-95px)] sm:h-[640px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden font-bn text-slate-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 px-5 py-4 border-b border-slate-700/80 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-[#08B3AF]/20 border border-[#08B3AF]/40 flex items-center justify-center text-teal-300 shadow-inner">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base leading-tight">কাজী স্টোর এআই</h3>
                  </div>
                  <p className="text-xs text-slate-400">অনলাইন স্মার্ট সহযোগী</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="কথোপকথন রিস্টার্ট করুন"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="বন্ধ করুন"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scroll-smooth">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'model' && (
                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5 shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-sm shadow-md ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-teal-600 to-[#08B3AF] text-white rounded-br-xs font-bn'
                          : 'bg-slate-800/95 text-slate-100 border border-slate-700/80 rounded-bl-xs font-bn'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                      ) : (
                        <TypewriterMessage 
                          text={msg.text} 
                          isStreaming={msg.isStreaming}
                          onFinished={() => markStreamComplete(msg.id)}
                          onScroll={scrollToBottom}
                          onNavigate={() => setIsOpen(false)}
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-1 font-en">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-700/80 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700/70 p-3.5 rounded-2xl rounded-bl-xs text-slate-300 flex items-center gap-2.5">
                    <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
                    <span className="text-xs">কাজী স্টোরের সংশ্লিষ্ট সার্ভিস তথ্য ও লিংক খোঁজা হচ্ছে...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-4 pb-2 shrink-0">
                <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
                  <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
                  <span>সচরাচর জিজ্ঞাসা:</span>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
                  {SUGGESTIONS.map((sug, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(sug)}
                      className="text-xs text-left bg-slate-800/80 hover:bg-teal-950/60 hover:text-teal-300 text-slate-300 border border-slate-700/60 hover:border-teal-500/40 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer leading-snug"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="কাজী স্টোরের যেকোনো সেবা সম্পর্কে লিখুন..."
                  disabled={isLoading}
                  className="flex-1 bg-slate-800/90 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-white placeholder-slate-400 text-base sm:text-sm px-4 py-2.5 rounded-xl outline-none transition-all disabled:opacity-50 font-bn"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="bg-gradient-to-r from-teal-500 to-[#08B3AF] hover:from-teal-600 hover:to-teal-500 disabled:opacity-40 text-white p-2.5 rounded-xl transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex justify-center items-center px-1 mt-1.5 text-[10px] text-slate-500 font-bn">
                <span>কাজী স্টোর অফিশিয়াল ডাটাবেজ দ্বারা পরিচালিত</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
