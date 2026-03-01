"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ConditionCard } from "@/components/ConditionCard";
import DoctorCard from "@/components/DoctorCard";
import FAQ from "@/components/FAQ";
import conditionsData from "@/content/conditions.json";
import doctorsData from "@/content/doctors.json";
import { LayoutContainer } from "@/components/layout-container";

export default function Home() {
  const featuredConditions = conditionsData.slice(0, 3);
  const featuredDoctors = doctorsData;

  return (
    <div className="flex flex-col min-h-screen">

      {/* 
        HERO SECTION 
        Asymmetrical Anti-SaaS Design.
        Flush-left huge serif typography, sharp lines, massive whitespace.
      */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16">
        <LayoutContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">

          <div className="lg:col-span-7 pb-8 lg:pb-16 flex flex-col justify-end">
            {/* Invisible Baseline Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-serif font-bold tracking-tighter leading-[0.9] mb-10 text-foreground">
                Clarity in <br /> every glance.
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-16">
                <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed">
                  Experience precision eye care utilizing state-of-the-art diagnostic technology and internationally renowned specialists.
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase pb-2 border-b border-foreground hover:text-warmth hover:border-warmth transition-colors shrink-0"
                >
                  Request Consultation
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 h-[50vh] lg:h-[70vh] relative border border-border bg-surface overflow-hidden group">
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
        <LayoutContainer className="pt-16 pb-24 md:pt-24 md:pb-32">
          {/* Hairline Grid Concept */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { metric: "25+", label: "Years\nExperience" },
              { metric: "15k", label: "Patients\nTreated" },
              { metric: "99%", label: "Satisfaction\nRate" },
              { metric: "04", label: "Leading\nSpecialists" }
            ].map((stat, i) => (
              <div key={i} className="bg-background p-8 md:p-12 flex flex-col justify-between aspect-square group">
                <p className="text-xs font-bold tracking-widest uppercase text-foreground/40 whitespace-pre-line leading-relaxed group-hover:text-warmth transition-colors">
                  {stat.label}
                </p>
                <h4 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-foreground group-hover:translate-x-2 transition-transform duration-500 ease-out">
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
        <LayoutContainer className="py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 lg:mb-32">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-6">Our Expertise.</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-7 flex flex-col items-start justify-end">
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
        <LayoutContainer className="py-24 md:py-32">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-32 gap-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter max-w-xl">
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
            {featuredDoctors.map((doctor, index) => (
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
        <LayoutContainer className="py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-6">Patient Questions.</h2>
              <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                Clear architectural answers to help you prepare for your clinical visitation.
              </p>
            </div>
            <div className="lg:col-span-7">
              <FAQ />
            </div>
          </div>
        </LayoutContainer>
      </section>

    </div>
  );
}
