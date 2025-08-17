import { motion } from "framer-motion";
import Card from "./ui/Card";
import { CheckCircle2 } from "lucide-react";

const bullets = [
    "Демпинг-бот для KaspiKZ",
    "Модули для повышения продаж",
    "Операционная эффективность",
];

export default function SellAI() {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <Card className="relative overflow-hidden">
                <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-200 to-emerald-200 blur-3xl" />
                <div className="relative">
                    <h2 className="text-2xl font-bold tracking-tight text-text">SellAI</h2>
                    <p className="mt-3 max-w-3xl text-text/80">
                        SellAI — многофункциональный бизнес-инструмент для частного бизнеса на KaspiKZ. Включает в себя
                        демпинг-бота и набор модулей для повышения продаж и операционной эффективности.
                    </p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-text">
                                <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden /> {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </motion.div>
    );
}