import Link from "next/link";
import siteData from "@/content/site.json";
import { LayoutContainer } from "@/components/layout-container";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-surface mt-auto">
            <LayoutContainer className="py-16 md:py-24 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif font-semibold tracking-tight">{siteData.name}.</h3>
                        <div className="text-foreground/80 text-sm space-y-2 font-medium">
                            <p>{siteData.address.street}</p>
                            <p>{`${siteData.address.city}, ${siteData.address.province} ${siteData.address.postalCode}`}</p>
                            <p className="pt-4 text-foreground">{siteData.phone}</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wide uppercase text-foreground/50">Services</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/conditions" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Conditions</Link>
                            <Link href="/doctors" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Our Specialists</Link>
                            <Link href="/patient-info" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Patient Info</Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wide uppercase text-foreground/50">Clinic</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/faqs" className="text-sm text-foreground/70 hover:text-foreground transition-colors">FAQs</Link>
                            <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Contact Us</Link>
                        </nav>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-sm tracking-wide uppercase text-foreground/50">Hours</h4>
                        <ul className="flex flex-col gap-2 text-sm text-foreground/70">
                            <li className="flex justify-between"><span>Mon-Thu</span><span>{siteData.officeHours.weekdays.replace("Monday – Thursday: ", "")}</span></li>
                            <li className="flex justify-between"><span>Friday</span><span>{siteData.officeHours.friday.replace("Friday: ", "")}</span></li>
                            <li className="flex justify-between"><span>Holidays</span><span>Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-foreground/60 font-medium tracking-wide">
                    <p>&copy; {currentYear} {siteData.name}. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground transition-colors uppercase">Privacy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors uppercase">Terms</Link>
                    </div>
                </div>
            </LayoutContainer>
        </footer>
    );
}
