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
        <div className="py-24 md:py-32">
            <LayoutContainer>
                <div className="flex flex-col md:flex-row items-end justify-between border-b border-border pb-16 mb-16 gap-8">
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter">Conditions<br />We Treat.</h1>
                    <p className="text-xl text-foreground/70 font-medium max-w-md leading-relaxed">
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
