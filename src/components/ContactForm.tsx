"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        botField: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.botField) return; // Honeypot

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate API
        setIsSubmitting(false);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "", botField: "" });
        }, 4000);
    };

    const inputClasses =
        "w-full px-4 py-3.5 rounded-2xl border-0 bg-surface/50 glass-card text-foreground placeholder:text-foreground/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all duration-300";

    return (
        <div className="relative w-full max-w-2xl mx-auto rounded-[2.5rem] p-8 sm:p-12 glass-card">
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-surface/90 glass-modal rounded-[2.5rem]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <CheckCircle2 className="w-20 h-20 text-accent mb-6" />
                        </motion.div>
                        <h3 className="text-3xl font-bold tracking-tight text-foreground mb-3">Message Sent</h3>
                        <p className="text-foreground/70 text-center px-8 text-lg">
                            Thank you for reaching out. We will connect with you shortly.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="botField"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground/80 pl-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputClasses}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground/80 pl-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={inputClasses}
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground/80 pl-1">
                            Phone (Optional)
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={inputClasses}
                            placeholder="(555) 000-0000"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-foreground/80 pl-1">
                            Inquiry Type
                        </label>
                        <select
                            id="subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className={inputClasses}
                        >
                            <option value="" disabled>Select a topic</option>
                            <option value="appointment">Book Appointment</option>
                            <option value="general">General Inquiry</option>
                            <option value="records">Medical Records</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground/80 pl-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClasses} resize-none`}
                        placeholder="How can we help?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-accent-foreground bg-accent rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-accent"
                >
                    {isSubmitting ? (
                        <>
                            Sending...
                            <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
