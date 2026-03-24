import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllDoctors, getDoctorBySlug } from '@/lib/queries';
import { urlFor } from '@/lib/sanity';
import { LayoutContainer } from '@/components/layout-container';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params for all doctors
export async function generateStaticParams() {
    const doctors = await getAllDoctors();
    return doctors.map((doctor: { slug: string }) => ({
        slug: doctor.slug,
    }));
}

// Generate dynamic metadata
export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const resolvedParams = await params;
    const doctor = await getDoctorBySlug(resolvedParams.slug);

    if (!doctor) {
        return {
            title: 'Doctor Not Found',
        };
    }

    return {
        title: `${doctor.name} | Victoria Eye Care`,
        description: doctor.bio?.[0]?.substring(0, 160) || `Profile of ${doctor.name} at Victoria Eye Care.`,
    };
}

export default async function DoctorProfilePage({ params }: Props) {
    const resolvedParams = await params;
    const doctor = await getDoctorBySlug(resolvedParams.slug);

    if (!doctor) {
        notFound();
    }

    // Resolve image source — Sanity image object or static string
    const imageSrc = doctor.image
        ? typeof doctor.image === 'string'
            ? doctor.image
            : urlFor(doctor.image).width(640).height(853).url()
        : null;

    return (
        <div className="py-24 md:py-32">
            <LayoutContainer>
                {/* Header Profile */}
                <div className="border-b border-border pb-16 mb-16 flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-6">
                            [ {doctor.role} ]
                        </p>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-6">
                            {doctor.name}.
                        </h1>
                        <p className="text-2xl text-foreground/70 font-medium">
                            {doctor.title}
                        </p>
                    </div>

                    <div className="w-48 sm:w-64 md:w-80 aspect-[3/4] shrink-0 bg-surface relative border border-border overflow-hidden">
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={`Portrait of ${doctor.name}`}
                                fill
                                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-[0.16,1,0.3,1]"
                                priority
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-foreground/30 font-mono text-xs tracking-widest uppercase">
                                    [ Editorial Portrait ]
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    {/* Main Bio - Left Side reading order */}
                    <div className="md:col-span-7 space-y-8">
                        <h2 className="font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8 border-b border-border pb-4">
                            Biography
                        </h2>
                        <div className="space-y-6">
                            {doctor.bio?.map((paragraph: string, index: number) => (
                                <p key={index} className="text-xl md:text-2xl font-medium leading-[1.6] text-foreground/80">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Meta Sidebar - Right Side */}
                    <div className="md:col-span-5 space-y-16">
                        <div>
                            <h3 className="font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8 border-b border-border pb-4">
                                Credentials
                            </h3>
                            <div className="flex flex-col gap-px bg-border border border-border">
                                {doctor.credentials?.map((cred: string) => (
                                    <div key={cred} className="bg-surface p-6 font-bold tracking-widest uppercase text-sm">
                                        {cred}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8 border-b border-border pb-4">
                                Specialties
                            </h3>
                            <ul className="space-y-4">
                                {doctor.specializations?.map((spec: string) => (
                                    <li key={spec} className="flex items-center gap-4 text-lg font-medium text-foreground/90">
                                        <div className="w-8 h-[1px] bg-border shrink-0" />
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-mono text-xs tracking-widest uppercase text-foreground/40 mb-8 border-b border-border pb-4">
                                Affiliations
                            </h3>
                            <ul className="space-y-4">
                                {doctor.affiliations?.map((aff: string) => (
                                    <li key={aff} className="flex items-start gap-4 text-lg font-medium text-foreground/90 leading-relaxed">
                                        <div className="w-8 h-[1px] bg-border shrink-0 mt-3" />
                                        {aff}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    );
}
