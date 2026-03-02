import { Metadata } from 'next';
import { LayoutContainer } from "@/components/layout-container";

export const metadata: Metadata = {
    title: 'Patient Information | Victoria Eye Care',
    description: 'Important information for new and returning patients regarding appointments, insurance, and medical records.',
};

export default function PatientInfoPage() {
    return (
        <div className="py-16 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between border-b border-border pb-12 md:pb-16 mb-12 md:mb-16 gap-4 md:gap-8">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter w-full">Patient<br className="hidden md:block" /> Information.</h1>
                    <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed mx-auto md:mx-0 w-full">
                        Everything you need to know before your visit.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    <div className="md:col-span-8 md:col-start-3 space-y-16">

                        <section className="border-t border-border pt-8">
                            <h2 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-8">
                                [ Your First Visit ]
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                <p>
                                    We look forward to welcoming you to Victoria Eye Care. To ensure your first visit runs smoothly,
                                    please arrive 15 minutes before your scheduled appointment time to complete any necessary registration forms.
                                </p>
                                <p className="text-lg text-foreground/70">Please bring the following items with you:</p>
                                <ul className="list-none space-y-4 mt-6 text-lg text-foreground/70">
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" /> Valid provincial health card (CareCard/BC Services Card)</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" /> A list of your current medications and dosages</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" /> Your current eyeglasses or contact lenses</li>
                                    <li className="flex items-center gap-4"><span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" /> Sunglasses (your eyes may be dilated during the exam)</li>
                                </ul>
                            </div>
                        </section>

                        <section className="border-t border-border pt-8">
                            <h2 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-8">
                                [ Insurance & Billing ]
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                <p>
                                    Many of our medical eye services are covered by the Medical Services Plan (MSP) of British Columbia
                                    with a valid referral from an optometrist or general practitioner.
                                </p>
                                <p className="text-lg text-foreground/70">
                                    For services not covered by MSP (such as advanced diagnostic imaging, specialized dry eye treatments,
                                    or premium intraocular lenses), payment is expected at the time of service. We accept Visa, MasterCard,
                                    Debit, and Cash.
                                </p>
                            </div>
                        </section>

                        <section className="border-t border-border pt-8">
                            <h2 className="font-mono text-xs tracking-widest text-foreground/40 uppercase mb-8">
                                [ Medical Records ]
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                <p>
                                    Your medical records are strictly confidential. We will not release them to anyone without your
                                    written authorization, except as required by law. If you need a copy of your records sent to
                                    another physician, please complete our Medical Records Transfer form available at the front desk.
                                </p>
                            </div>
                        </section>

                        <section className="border-t border-border pt-8">
                            <h2 className="font-mono text-xs tracking-widest text-destructive/60 uppercase mb-8">
                                [ Cancellations & Missed Appointments ]
                            </h2>
                            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
                                <p className="text-destructive/90">
                                    Due to the high demand for specialized eye care, please provide at least 48 hours notice if
                                    you need to cancel or reschedule your appointment. This allows us to offer the time slot to
                                    another patient in need. A missed appointment fee may apply for repeated no-shows.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}
