"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ConditionCard } from "@/components/ConditionCard";
import DoctorCard from "@/components/DoctorCard";
import FAQ from "@/components/FAQ";
import { LayoutContainer } from "@/components/layout-container";

interface HomeContentProps {
    conditions: Array<{
        slug: string;
        title: string;
        shortDescription: string;
        icon: string;
        sections: Array<{ heading: string; content: string }>;
    }>;
    doctors: Array<{
        slug: string;
        name: string;
        title: string;
        role: string;
        image?: string;
        credentials: string[];
    }>;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
}

export default function HomeContent({ conditions, doctors, faqs }: HomeContentProps) {
    const featuredConditions = conditions.slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">

            {/* 
                HERO SECTION 
                Asymmetrical Anti-SaaS Design.
                Flush-left huge serif typography, sharp lines, massive whitespace.
            */}
            <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-start md:justify-end pt-20 md:pt-32 pb-12 md:pb-16 flex-grow">
                <LayoutContainer className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">

                    <div className="order-2 lg:order-1 lg:col-span-7 pb-8 lg:pb-16 flex flex-col justify-end">
                        {/* Invisible Baseline Alignment */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-bold tracking-tighter leading-[1] md:leading-[0.9] mb-8 md:mb-10 text-foreground">
                                Clarity in <br className="hidden md:block" /> every glance.
                            </h1>

                            <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
                                <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed">
                                    Experience precision eye care utilizing state-of-the-art diagnostic technology and internationally renowned specialists.
                                </p>

                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase pb-2 border-b border-foreground hover:text-warmth hover:border-warmth transition-colors shrink-0 py-2 sm:py-0"
                                >
                                    Request Consultation
                                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2 lg:col-span-5 h-[40vh] md:h-[50vh] lg:h-[70vh] relative border border-border bg-surface overflow-hidden group">
                        <motion.div
                            initial={{ scale: 1.05, filter: "blur(10px)" }}
                            animate={{ scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/img/heroimg.png"
                                alt="Clinical Macro Photography"
                                fill
                                priority
                                className="object-cover object-center grayscale mix-blend-multiply opacity-90 group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>

                </LayoutContainer>
            </section>

            {/* 
                TRUST INDICATORS
                Typographic Grid (1px hairlines)
            */}
            <section className="border-t border-border">
                <LayoutContainer className="pt-16 pb-16 md:pt-24 md:pb-32">
                    {/* Hairline Grid Concept */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
                        {[
                            { metric: "25+", label: "Years\nExperience" },
                            { metric: "15k", label: "Patients\nTreated" },
                            { metric: "99%", label: "Satisfaction\nRate" },
                            { metric: "04", label: "Leading\nSpecialists" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-background p-6 lg:p-12 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[16rem] group">
                                <p className="text-xs font-bold tracking-widest uppercase text-foreground/40 whitespace-pre-line leading-[1.8] group-hover:text-warmth transition-colors">
                                    {stat.label}
                                </p>
                                <h4 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tighter text-foreground group-hover:translate-x-2 transition-transform duration-500 ease-out">
                                    {stat.metric}
                                </h4>
                            </div>
                        ))}
                    </div>
                </LayoutContainer>
            </section>

            {/* 
                CONDITIONS / EXPERTISE SECTION
                Transitioning to Index Rows
            */}
            <section className="border-t border-border bg-surface">
                <LayoutContainer className="py-16 md:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 lg:mb-32">
                        <div className="lg:col-span-5 text-center md:text-left">
                            <h2 className="text-3xl md:text-6xl font-serif font-bold tracking-tighter mb-4 md:mb-6">Our Expertise.</h2>
                        </div>
                        <div className="lg:col-span-5 lg:col-start-7 flex flex-col items-center text-center md:items-start md:text-left justify-end">
                            <p className="text-lg text-foreground/70 leading-relaxed font-medium mb-8">
                                Comprehensive treatment plans for a wide range of ocular conditions, utilizing the most advanced diagnostic tools available.
                            </p>
                            <Link
                                href="/conditions"
                                className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase pb-2 border-b border-foreground hover:text-warmth hover:border-warmth transition-colors"
                            >
                                View All Conditions
                                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-border">
                        {featuredConditions.map((condition, index) => (
                            <ConditionCard key={condition.slug} condition={condition} index={index + 1} />
                        ))}
                    </div>
                </LayoutContainer>
            </section>

            {/* 
                DOCTORS SECTION
            */}
            <section className="border-t border-border">
                <LayoutContainer className="py-16 md:py-32">

                    <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between mb-12 md:mb-20 lg:mb-32 gap-6 md:gap-8">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold tracking-tighter max-w-xl">
                            World-Class Specialists.
                        </h2>
                        <Link
                            href="/doctors"
                            className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase pb-2 border-b border-foreground hover:text-warmth hover:border-warmth transition-colors"
                        >
                            View Directory
                            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                        {doctors.map((doctor, index) => (
                            <div key={doctor.slug} className="bg-background">
                                <DoctorCard {...doctor} index={index + 1} />
                            </div>
                        ))}
                    </div>

                </LayoutContainer>
            </section>

            {/* 
                FAQ SECTION
            */}
            <section className="border-t border-border bg-surface">
                <LayoutContainer className="py-16 md:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                        <div className="lg:col-span-5 text-center md:text-left">
                            <h2 className="text-3xl md:text-6xl font-serif font-bold tracking-tighter mb-4 md:mb-6">Patient Questions.</h2>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                Clear architectural answers to help you prepare for your clinical visitation.
                            </p>
                        </div>
                        <div className="lg:col-span-7">
                            <FAQ faqs={faqs} />
                        </div>
                    </div>
                </LayoutContainer>
            </section>

        </div>
    );
}
