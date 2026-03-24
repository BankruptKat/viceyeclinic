"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqs?: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4">
            {faqs.map((faq: FAQItem, index: number) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="overflow-hidden border-b border-border"
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="text-xl font-serif font-bold tracking-tight pr-8 group-hover:text-warmth transition-colors">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="flex items-center justify-center shrink-0 text-foreground/40"
                            >
                                <ChevronDown className="w-4 h-4 text-foreground/60" />
                            </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.section
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-8 text-foreground/70 leading-relaxed font-medium max-w-2xl whitespace-pre-line">
                                        {faq.answer}
                                    </div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
