import { Metadata } from 'next';
import { Clock, CreditCard, FileText, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Patient Information | Victoria Eye Care',
    description: 'Important information for new and returning patients regarding appointments, insurance, and medical records.',
};

export default function PatientInfoPage() {
    return (
        <div className="py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Patient Information</h1>
                    <p className="text-xl text-foreground/60 font-medium">
                        Everything you need to know before your visit.
                    </p>
                </div>

                <div className="space-y-12">

                    <section className="p-8 md:p-12 rounded-[2.5rem] glass-card">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                                <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Your First Visit</h2>
                        </div>
                        <div className="space-y-4 text-foreground/80 leading-relaxed font-medium">
                            <p>
                                We look forward to welcoming you to Victoria Eye Care. To ensure your first visit runs smoothly,
                                please arrive 15 minutes before your scheduled appointment time to complete any necessary registration forms.
                            </p>
                            <p>Please bring the following items with you:</p>
                            <ul className="list-none space-y-2 mt-4 ml-2">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Valid provincial health card (CareCard/BC Services Card)</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> A list of your current medications and dosages</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Your current eyeglasses or contact lenses</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Sunglasses (your eyes may be dilated during the exam)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="p-8 md:p-12 rounded-[2.5rem] glass-card">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                                <CreditCard className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Insurance & Billing</h2>
                        </div>
                        <div className="space-y-4 text-foreground/80 leading-relaxed font-medium">
                            <p>
                                Many of our medical eye services are covered by the Medical Services Plan (MSP) of British Columbia
                                with a valid referral from an optometrist or general practitioner.
                            </p>
                            <p>
                                For services not covered by MSP (such as advanced diagnostic imaging, specialized dry eye treatments,
                                or premium intraocular lenses), payment is expected at the time of service. We accept Visa, MasterCard,
                                Debit, and Cash.
                            </p>
                        </div>
                    </section>

                    <section className="p-8 md:p-12 rounded-[2.5rem] glass-card">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                                <FileText className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Medical Records</h2>
                        </div>
                        <div className="space-y-4 text-foreground/80 leading-relaxed font-medium">
                            <p>
                                Your medical records are strictly confidential. We will not release them to anyone without your
                                written authorization, except as required by law. If you need a copy of your records sent to
                                another physician, please complete our Medical Records Transfer form available at the front desk.
                            </p>
                        </div>
                    </section>

                    <section className="p-8 md:p-12 rounded-[2.5rem] bg-destructive/5 text-destructive border border-destructive/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
                                <ShieldAlert className="w-6 h-6 text-destructive" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight">Cancellations & Missed Appointments</h2>
                        </div>
                        <div className="text-destructive/80 leading-relaxed font-medium relative z-10">
                            <p>
                                Due to the high demand for specialized eye care, please provide at least 48 hours notice if
                                you need to cancel or reschedule your appointment. This allows us to offer the time slot to
                                another patient in need. A missed appointment fee may apply for repeated no-shows.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
