import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import siteData from '@/content/site.json';

export const metadata: Metadata = {
    title: 'Contact Us | Victoria Eye Care',
    description: 'Get in touch with Victoria Eye Care to book an appointment or ask a question.',
};

export default function ContactPage() {
    return (
        <div className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Contact Us</h1>
                    <p className="text-xl text-foreground/60 font-medium">
                        We&apos;re here to provide clarity. Send us a message or call to schedule your consultation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Information Sidebar */}
                    <div className="space-y-12">
                        <div className="p-8 rounded-[2rem] glass-card flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Visit our Clinic</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium">
                                    {siteData.address.street}<br />
                                    {siteData.address.city}, {siteData.address.province} {siteData.address.postalCode}
                                </p>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2rem] glass-card flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium mb-4">
                                    Available {siteData.officeHours.weekdays}
                                </p>
                                <a href={`tel:${siteData.phone.replace(/\D/g, '')}`} className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
                                    {siteData.phone}
                                </a>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2rem] glass-card flex items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                                <p className="text-foreground/70 leading-relaxed font-medium mb-4">
                                    For general inquiries and records.
                                </p>
                                <a href="mailto:info@victoriaeyecare.com" className="text-xl font-bold text-accent hover:opacity-80 transition-opacity break-all">
                                    info@victoriaeyecare.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div>
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
