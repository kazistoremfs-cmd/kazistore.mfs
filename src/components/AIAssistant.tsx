import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, X, Send, Sparkles, MessageSquare, RotateCcw, 
  ExternalLink, User, HelpCircle, Loader2, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const SUGGESTIONS = [
  "কাজী স্টোরে কী কী সেবা পাওয়া যায়?",
  "গ্রামীনফোন সিম রিপ্লেসমেন্ট করতে কী কী লাগে?",
  "বিকাশ ও নগদ ক্যাশ আউট সুবিধা কী?",
  "একাদশ শ্রেণিতে কলেজ ভর্তির আবেদন কীভাবে করব?",
  "ক্রেডিট কার্ড বিল পরিশোধ কীভাবে করে?",
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'আসসালামু আলাইকুম! আমি কাজী স্টোরের এআই (AI) সহকারী। কাজী স্টোরের যেকোনো সেবা, সিম রিপ্লেসমেন্ট, এমএফএস (বিকাশ/নগদ/রকেট), কলেজ/বিশ্ববিদ্যালয় ভর্তি আবেদন বা প্রিন্টিং সম্পর্কে আপনার কী জানার আছে?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-kazi-ai', handleOpen);
    return () => window.removeEventListener('open-kazi-ai', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages, isLoading]);

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
      const replyText = data.reply || 'দুঃখিত, এই মুহূর্তে উত্তর দেওয়া সম্ভব হচ্ছে না। অনুগ্রহ করে সরাসরি আমাদের হোয়াটসঅ্যাপে যোগাযোগ করুন: https://wa.me/message/L2XAYVWBE5RIJ1';

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'কাজী স্টোরের সেবার ব্যাপারে আরও বিস্তারিত জানতে সরাসরি আমাদের হেল্পলাইনে যোগাযোগ করতে পারেন। হোয়াটসঅ্যাপ: https://wa.me/message/L2XAYVWBE5RIJ1',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'model',
        text: 'কথোপকথন রিস্টার্ট করা হয়েছে। কাজী স্টোরের যেকোনো সেবা সম্পর্কে আপনার প্রশ্নটি করুন।',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Helper to render text with clickable links
  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 underline hover:text-white inline-flex items-center gap-1 break-all"
          >
            {part.includes('wa.me') ? 'কাজী স্টোর হোয়াটসঅ্যাপ' : part}
            <ExternalLink className="w-3 h-3 inline shrink-0" />
          </a>
        );
      }
      return <span key={i} className="whitespace-pre-line">{part}</span>;
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-22 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[82vh] h-[620px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden font-bn text-slate-100"
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
                    <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 uppercase font-en font-bold tracking-wider">
                      AI 3.8
                    </span>
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
                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex flex-col max-w-[82%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-md ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-teal-600 to-[#08B3AF] text-white rounded-br-xs'
                          : 'bg-slate-800/90 text-slate-200 border border-slate-700/70 rounded-bl-xs'
                      }`}
                    >
                      {renderMessageText(msg.text)}
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
                  <div className="bg-slate-800/90 border border-slate-700/70 p-3.5 rounded-2xl rounded-bl-xs text-slate-400 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-teal-400" />
                    <span className="text-xs">কাজী স্টোর থেকে তথ্য খোঁজা হচ্ছে...</span>
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
                  className="flex-1 bg-slate-800/90 border border-slate-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 text-white placeholder-slate-400 text-sm px-4 py-2.5 rounded-xl outline-none transition-all disabled:opacity-50"
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
