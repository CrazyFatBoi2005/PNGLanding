import clsx from "clsx";
import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLDivElement>>;

export default function Card({ className, children, ...rest }: Props) {
    return (
        <div
            {...rest}
            className={clsx(
                "rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:shadow-xl hover:shadow-glow",
                className,
            )}
        >
            {children}
        </div>
    );
}