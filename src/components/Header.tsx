import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const nav = [
    { href: "services", label: "Услуги" },
    { href: "sellai", label: "SellAI" },
    { href: "contact", label: "Контакты" },
];

export default function Header({ onCta, onNav }: { onCta: () => void; onNav: (id: string) => void }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 h-[var(--header-h)] backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
                scrolled ? "border-b border-slate-200" : "bg-transparent"
            }`}
            role="banner"
        >
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a
                    href="#top"
                    className="font-extrabold tracking-tight text-text"
                    aria-label="На главную .PNG"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    <span className="text-primary">.</span>PNG
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Главная навигация">
                    {nav.map((i) => (
                        <a
                            key={i.href}
                            href={`#${i.href}`}
                            className="text-sm font-medium text-text/80 transition hover:text-text"
                            onClick={(e) => {
                                e.preventDefault();
                                onNav(i.href);
                            }}
                        >
                            {i.label}
                        </a>
                    ))}
                    <Button onClick={onCta} aria-label="Оставить заявку" className="ml-2">Оставить заявку</Button>
                </nav>

                <button
                    className="focus-ring -m-2 rounded-xl p-2 md:hidden"
                    aria-label={open ? "Закрыть меню" : "Открыть меню"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="border-b border-slate-200 bg-white md:hidden">
                    <div className="mx-auto max-w-7xl px-4 pb-4 pt-2">
                        <div className="grid gap-2">
                            {nav.map((i) => (
                                <a
                                    key={i.href}
                                    href={`#${i.href}`}
                                    className="block rounded-xl px-3 py-2 text-sm font-medium text-text/80 hover:bg-slate-50"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);
                                        onNav(i.href);
                                    }}
                                >
                                    {i.label}
                                </a>
                            ))}
                            <Button className="w-full" onClick={() => (setOpen(false), onCta())}>
                                Оставить заявку
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}