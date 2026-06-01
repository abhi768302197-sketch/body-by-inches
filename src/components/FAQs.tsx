import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Mail, MapPin } from "lucide-react";
import { FAQS } from "../data";
import { FAQItem } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function FAQs() {
  const [openId, setOpenId] = useState<string | null>("faq-hours");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-[#FAF9F9] relative overflow-hidden">
      {/* Curved background line decorations for Omni AI vibe */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-100/10 to-teal-100/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-4 text-xs font-semibold tracking-wider text-gray-600 uppercase">
            <span>✦ FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-4">
            Answers to Common Queries
          </h2>
          <p className="text-gray-500 max-w-lg text-sm sm:text-base">
            All the logistics concerning memberships, personal trainers, guest trial entries, and security facilities.
          </p>
        </motion.div>

        {/* Collapsible Accordion layout with scroll reveal list */}
        <div className="space-y-4 mb-16">
          {FAQS.map((item: FAQItem, index: number) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={item.id}
                className="bg-white border border-gray-200/70 rounded-[20px] overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
                >
                  <span className="font-display font-bold text-[#1A1A1A] text-sm sm:text-base pr-4">
                    {item.question}
                  </span>
                  <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-800">
                    {isOpen ? <ChevronUp className="w-4 h-4 stroke-[2.5]" /> : <ChevronDown className="w-4 h-4 stroke-[2.5]" />}
                  </div>
                </button>

                {/* Body elements with smooth height transition */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-500 text-xs sm:text-sm leading-relaxed bg-[#FCFCFC]">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info-block inside FAQ details */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 bg-white border border-gray-200/50 rounded-3xl shadow-sm"
        >
          <div className="inline-flex p-3 bg-gray-50 text-[#1A1A1A] rounded-2xl mb-4 border border-gray-100">
            <Mail className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-[#1A1A1A] text-sm font-bold mb-1">
            Still Have Core Questions?
          </p>
          <p className="text-gray-500 text-xs mb-4">
            Feel free to contact us immediately. We respond within standard business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold">
            <a
              href="mailto:info@bodybyinches.com"
              className="text-[#1A1A1A] hover:text-amber-600 transition-colors font-mono tracking-wide"
            >
              info@bodybyinches.com
            </a>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://wa.me/919990856112"
              className="text-[#1A1A1A] hover:text-emerald-600 transition-colors font-mono tracking-wide"
            >
              WhatsApp Support (+91 99908 56112)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
