"use client";

import { useState } from "react";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { LayoutContainer } from "@/components/layout-container";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
                <LayoutContainer>
                    <div className="flex items-center justify-between h-20 sm:h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
                                <span className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight">Victoria Eye Care.</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/conditions" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                Conditions
                            </Link>
                            <Link href="/doctors" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                Our Specialists
                            </Link>
                            <Link href="/patient-info" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                Patient Info
                            </Link>
                            <Link href="/faqs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                                FAQs
                            </Link>
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-6">
                            <AnimatedThemeToggler className="flex items-center justify-center w-8 h-8 rounded-none border border-border bg-surface hover:bg-surface-hover transition-colors" />
                            <Link
                                href="/contact"
                                className="bg-foreground text-background px-6 py-3 rounded-none text-sm font-semibold tracking-wide uppercase hover:bg-accent transition-colors"
                            >
                                Book Consultation
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center gap-4 md:hidden">
                            <AnimatedThemeToggler className="flex items-center justify-center w-11 h-11 border border-border bg-surface hover:bg-surface-hover transition-colors" />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="flex items-center justify-center w-11 h-11 text-foreground focus:outline-none border border-border"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <X className="block h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-5 w-5" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </LayoutContainer>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-4 pb-6 overflow-y-auto md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            <Link
                                href="/conditions"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-foreground py-2"
                            >
                                Conditions
                            </Link>
                            <Link
                                href="/doctors"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-foreground py-2"
                            >
                                Our Specialists
                            </Link>
                            <Link
                                href="/patient-info"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-foreground py-2"
                            >
                                Patient Info
                            </Link>
                            <Link
                                href="/faqs"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-semibold text-foreground py-2"
                            >
                                FAQs
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif font-semibold text-background bg-foreground px-6 py-4 inline-block w-full text-center mt-8 uppercase tracking-widest text-sm"
                            >
                                Book Consultation
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
