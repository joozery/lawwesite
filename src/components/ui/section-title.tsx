import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionTitle({ title, subtitle, className, centered = true }: SectionTitleProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            {subtitle && (
                <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                {title}
            </h2>
            <div className={cn("h-1 w-20 bg-secondary rounded", centered && "mx-auto")} />
        </div>
    );
}
