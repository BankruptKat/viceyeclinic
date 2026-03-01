export function ButtonPrimary({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) {
    const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-accent-foreground bg-accent rounded-full hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent active:scale-[0.98]";

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}

export function ButtonSecondary({ children, onClick, href }: { children: React.ReactNode, onClick?: () => void, href?: string }) {
    const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-surface glass-card rounded-full hover:bg-surface-hover transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent active:scale-[0.98]";

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}
