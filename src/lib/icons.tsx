import type { LucideIcon } from "lucide-react";

export function Icon({ icon: IconCmp, className, label }: { icon: LucideIcon; className?: string; label?: string }) {
    return <IconCmp aria-hidden={label ? undefined : true} aria-label={label} className={className} />;
}