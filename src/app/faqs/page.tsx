import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Victoria Eye Care',
    description: 'Find answers to common questions about appointments, insurance, and eye care procedures.',
};

export default function FAQPage() {
    // Schema.org JSON-LD for FAQPage (SEO) imported previously
    return (
        <div className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Patient FAQs</h1>
                    <p className="text-xl text-foreground/60 font-medium">
                        Everything you need to know to prepare for your visit.
                    </p>
                </div>

                <FAQ />
            </div>
        </div>
    );
}
