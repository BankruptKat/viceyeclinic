import * as React from "react";
import { cn } from "@/lib/utils";

interface LayoutContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /**
     * If true, removes the horizontal padding. Useful for full-bleed images.
     */
    bleed?: boolean;
}

export function LayoutContainer({
    children,
    className,
    bleed = false,
    ...props
}: LayoutContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1440px]",
                !bleed && "px-6 md:px-12 lg:px-24", // Extreme gutters for the Gallery Wall effect
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
