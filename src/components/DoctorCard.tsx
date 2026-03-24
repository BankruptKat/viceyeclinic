import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface DoctorCardProps {
    slug: string;
    name: string;
    title: string;
    role: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image?: any;
    credentials: string[];
    index?: number;
}

export default function DoctorCard({ slug, name, title, role, image, credentials, index }: DoctorCardProps) {
    // Resolve image: Sanity object → URL string, or keep static string
    const imageSrc = image
        ? typeof image === 'string'
            ? image
            : image?.asset ? urlFor(image).width(576).height(768).url() : null
        : null;
    return (
        <Link
            href={`/doctors/${slug}`}
            className="group flex flex-col h-full bg-surface p-8 lg:p-12 transition-colors hover:bg-surface-hover focus:outline-none"
        >
            <div className="flex justify-between items-start mb-8">
                {index && (
                    <span className="font-mono text-xs tracking-widest text-foreground/30">
                        {index.toString().padStart(2, '0')}
                    </span>
                )}
                <span className="font-mono text-xs tracking-widest uppercase text-accent mb-4 block">
                    {role}
                </span>
            </div>

            {/* Editorial Portrait */}
            <div className="w-48 sm:w-64 lg:w-72 aspect-[3/4] mx-auto bg-border relative overflow-hidden mb-10 group-hover:grayscale-0 grayscale transition-all duration-700 ease-[0.16,1,0.3,1]">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={`Portrait of ${name}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 30vw"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-background/40 font-mono text-xs uppercase tracking-widest">
                            [ Portrait ]
                        </span>
                    </div>
                )}
                {/* Structural overlay for depth */}
                <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700" />
            </div>

            <div className="mt-auto flex flex-col items-start">
                <h3 className="text-3xl lg:text-4xl font-serif font-bold tracking-tighter mb-4 group-hover:text-warmth transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-foreground/70 leading-relaxed font-medium mb-8">
                    {title}
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                    {credentials.slice(0, 3).map((cred) => (
                        <span
                            key={cred}
                            className="px-3 py-1 border border-border text-foreground/60 text-[10px] font-bold tracking-[0.2em] uppercase"
                        >
                            {cred}
                        </span>
                    ))}
                </div>

                <div className="pt-6 border-t border-border w-full flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/60 group-hover:text-foreground transition-colors">
                        View Profile
                    </span>
                    <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
                </div>
            </div>
        </Link>
    );
}
