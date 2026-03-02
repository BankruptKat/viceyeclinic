import { Metadata } from "next";
import { ConditionCard } from "@/components/ConditionCard";
import conditionsData from "@/content/conditions.json";

export const metadata: Metadata = {
    title: "Eye Conditions | Victoria Eye Care",
    description: "Learn about the common eye conditions we treat, including cataracts, glaucoma, and macular degeneration.",
};

import { LayoutContainer } from "@/components/layout-container";

export default function ConditionsPage() {
    const conditions = conditionsData;

    return (
        <div className="py-16 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between border-b border-border pb-12 md:pb-16 mb-12 md:mb-16 gap-4 md:gap-8">
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tighter w-full">Conditions<br className="hidden md:block" /> We Treat.</h1>
                    <p className="text-lg md:text-xl text-foreground/70 font-medium max-w-md leading-relaxed mx-auto md:mx-0 w-full">
                        Comprehensive diagnostic and treatment plans tailored to your specific visual needs.
                    </p>
                </div>

                <div className="border-t border-border">
                    {conditions.map((condition, i) => (
                        <ConditionCard key={condition.slug} condition={condition} index={i + 1} />
                    ))}
                </div>
            </LayoutContainer>
        </div>
    );
}
