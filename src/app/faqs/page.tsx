import { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import { LayoutContainer } from "@/components/layout-container";

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Victoria Eye Care',
    description: 'Find answers to common questions about appointments, insurance, and eye care procedures.',
};

export default function FAQPage() {
    return (
        <div className="py-16 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between border-b border-border pb-12 md:pb-16 mb-12 md:mb-16 gap-4 md:gap-8">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter w-full">Patient<br className="hidden md:block" /> FAQs.</h1>
                    <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed mx-auto md:mx-0 w-full">
                        Clear architectural answers to help you prepare for your clinical visitation.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <FAQ />
                </div>
            </LayoutContainer>
        </div>
    );
}
