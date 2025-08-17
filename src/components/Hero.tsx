import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export default function Hero({ onCtaClick }: { onCtaClick?: () => void }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#EEF2FF] py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-120px] h-[400px] w-[700px] -translate-x-1/2 rounded-[48px] bg-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,.7)]" />
                <div className="absolute left-[5%] top-[240px] h-40 w-72 rotate-6 rounded-3xl bg-white/70 shadow-lg" />
                <div className="absolute right-[8%] top-[80px] h-48 w-80 -rotate-6 rounded-3xl bg-white/70 shadow-lg" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                    <h1 className="text-balance text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
                        .PNG — команда разработчиков из лучших вузов России и Казахстана
                    </h1>
                    <p className="mt-4 max-w-2xl text-pretty text-base text-text/80 sm:text-lg">
                        Создаём IT-решения для среднего и малого бизнеса: от визиток и онлайн-записи до автоматизации
                        продаж.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button onClick={onCtaClick}>Оставить заявку</Button>
                        <a
                            href="#services"
                            className="focus-ring inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-text hover:bg-slate-50"
                        >
                            Посмотреть услуги
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}