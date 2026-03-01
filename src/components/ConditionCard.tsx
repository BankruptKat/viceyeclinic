"use client";

import { useState } from "react";
import ConditionDetailPanel from "./ConditionDetailPanel";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ConditionCard({ condition, index }: { condition: any; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                role="button"
                tabIndex={0}
                onClick={() => setIsOpen(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsOpen(true);
                    }
                }}
                className="group relative block w-full border-b border-border py-8 lg:py-12 cursor-pointer transition-colors hover:bg-surface focus:outline-none"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">

                    <div className="lg:col-span-1 hidden lg:block">
                        <span className="font-mono text-xs tracking-widest text-foreground/30">
                            {index.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className="lg:col-span-5 flex items-center justify-between lg:block">
                        <h3 className="text-3xl lg:text-5xl font-serif font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                            {condition.title}
                        </h3>
                        <span className="lg:hidden font-mono text-xs tracking-widest text-foreground/30">
                            {index.toString().padStart(2, '0')}
                        </span>
                    </div>

                    <div className="lg:col-span-6 opacity-100 lg:opacity-0 group-hover:opacity-100 lg:-translate-x-8 group-hover:translate-x-0 transition-all duration-700 ease-[0.16,1,0.3,1] flex items-center justify-between">
                        <p className="text-sm font-medium leading-relaxed text-foreground/70 max-w-md">
                            {condition.shortDescription}
                        </p>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/30 group-hover:text-warmth transition-colors">
                            Explore
                        </span>
                    </div>

                </div>
            </div>

            <ConditionDetailPanel
                condition={condition}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
