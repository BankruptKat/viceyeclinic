"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ConditionDetailPanelProps {
    condition: {
        slug: string;
        title: string;
        shortDescription: string;
        icon: string;
        sections: {
            heading: string;
            content: string;
        }[];
    };
    isOpen: boolean;
    onClose: () => void;
}

export default function ConditionDetailPanel({ condition, isOpen, onClose }: ConditionDetailPanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);

    // Lock body scroll and handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-md"
                        aria-hidden="true"
                    />

                    {/* Drawer Panel - Severe Architectural Style */}
                    <motion.div
                        ref={panelRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-y-0 right-0 z-[70] w-full max-w-2xl bg-surface border-l border-border overflow-y-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`panel-title-${condition.slug}`}
                    >
                        {/* Header Sticky */}
                        <div className="sticky top-0 z-20 flex items-center justify-between px-8 lg:px-12 py-6 border-b border-border bg-surface">
                            <h2 id={`panel-title-${condition.slug}`} className="text-2xl font-serif font-bold tracking-tight">
                                {condition.title}.
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-3 border border-border hover:bg-surface-hover transition-colors focus:outline-none"
                                aria-label="Close details"
                            >
                                <X className="w-5 h-5 text-foreground" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12 pb-24">
                            <div className="mb-16">
                                <span className="font-mono text-xs tracking-widest text-foreground/40 uppercase block mb-6">
                                    [ Overview ]
                                </span>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                    {condition.shortDescription}
                                </p>
                            </div>

                            <div className="space-y-16">
                                {condition.sections?.map((section, index) => (
                                    <section key={index} className="border-t border-border pt-8">
                                        <h3 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-8">
                                            {section.heading}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-foreground font-medium whitespace-pre-line">
                                            {section.content}
                                        </p>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
