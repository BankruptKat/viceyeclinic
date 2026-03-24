import { Metadata } from "next";
import DoctorCard from "@/components/DoctorCard";
import { getAllDoctors } from "@/lib/queries";
import { LayoutContainer } from "@/components/layout-container";

export const metadata: Metadata = {
    title: "Our Specialists | Victoria Eye Care",
    description: "Meet our team of board-certified ophthalmologists and eye care specialists.",
};

export default async function DoctorsPage() {
    const doctors = await getAllDoctors();

    return (
        <div className="py-16 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between border-b border-border pb-12 md:pb-16 mb-12 md:mb-16 gap-4 md:gap-8">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter w-full">Our<br className="hidden md:block" /> Specialists.</h1>
                    <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed mx-auto md:mx-0 w-full">
                        A world-class team dedicated to preserving and enhancing your vision through precision care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                    {doctors.map((doctor: { slug: string; name: string; title: string; role: string; image?: string; credentials: string[] }, i: number) => (
                        <div key={doctor.slug} className="bg-background">
                            <DoctorCard {...doctor} index={i + 1} />
                        </div>
                    ))}
                </div>
            </LayoutContainer>
        </div>
    );
}
