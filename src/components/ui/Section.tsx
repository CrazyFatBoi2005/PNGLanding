import { type PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    ariaLabel?: string;
}>;

export default function Section({ id, className, children, ariaLabel }: Props) {
    return (
        <section id={id} aria-label={ariaLabel} className={clsx("py-16 md:py-24", className)}>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}