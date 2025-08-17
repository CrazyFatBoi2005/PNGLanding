import clsx from "clsx";
import { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
    loading?: boolean;
};

const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold focus:outline-none focus-ring transition active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-primary text-white hover:bg-indigo-600",
    secondary: "bg-white text-text border border-slate-300 hover:bg-slate-50",
    ghost: "bg-transparent text-text hover:bg-slate-100",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { className, variant = "primary", loading, children, ...rest },
    ref,
) {
    return (
        <button ref={ref} className={clsx(base, variants[variant], className)} {...rest} aria-busy={loading}>
            {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25" />
                    <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
            )}
            {children}
        </button>
    );
});