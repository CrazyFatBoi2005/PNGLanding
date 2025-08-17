import { motion } from "framer-motion";
import Card from "./ui/Card";
import type { ServiceItem } from "../types";
import { Icon } from "../lib/icons";

export default function Services({ items }: { items: ServiceItem[] }) {
    return (
        <div>
            <div className="mb-8 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-text">Услуги</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                    <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.18, delay: i * 0.03 }}>
                        <Card className="h-full">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50">
                                    <Icon icon={s.icon} className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text">{s.title}</h3>
                                    <p className="mt-1 text-sm text-text/80">{s.description}</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}