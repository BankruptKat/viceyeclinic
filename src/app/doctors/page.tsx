import { Metadata } from "next";
import DoctorCard from "@/components/DoctorCard";
import doctorsData from "@/content/doctors.json";
import { LayoutContainer } from "@/components/layout-container";

export const metadata: Metadata = {
    title: "Our Specialists | Victoria Eye Care",
    description: "Meet our team of board-certified ophthalmologists and eye care specialists.",
};

export default function DoctorsPage() {
    const doctors = doctorsData;

    return (
        <div className="py-24 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-end justify-between border-b border-border pb-16 mb-16 gap-8">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">Our<br />Specialists.</h1>
                    <p className="text-xl text-foreground/70 font-medium max-w-md leading-relaxed">
                        A world-class team dedicated to preserving and enhancing your vision through precision care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                    {doctors.map((doctor, i) => (
                        <div key={doctor.slug} className="bg-background">
                            <DoctorCard {...doctor} index={i + 1} />
                        </div>
                    ))}
                </div>
            </LayoutContainer>
        </div>
    );
}
