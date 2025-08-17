import { motion } from "framer-motion";
import Card from "./ui/Card";
import type { BenefitItem } from "../types";
import { Expand, LifeBuoy, ShieldCheck, Zap } from "lucide-react";

const icons = [Zap, ShieldCheck, Expand, LifeBuoy];

export default function Benefits({ items }: { items: BenefitItem[] }) {
    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-text">Преимущества</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {items.map((b, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.18, delay: i * 0.03 }}>
                            <Card>
                                <div className="flex items-start gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                                        <Icon className="h-5 w-5 text-accent" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-text">{b.title}</h3>
                                        <p className="mt-1 text-sm text-text/80">{b.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}