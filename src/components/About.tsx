import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
            <h2 className="text-2xl font-bold tracking-tight text-text">О компании .PNG</h2>
            <p className="mt-4 max-w-3xl text-text/80">
                .PNG — команда молодых, но опытных разработчиков из лучших университетов России и Казахстана. Мы
                проектируем и разрабатываем понятные и прибыльные IT-решения для среднего и малого бизнеса: быстро
                запускаем MVP, бережно улучшаем действующие продукты и автоматизируем ключевые процессы.
            </p>
        </motion.div>
    );
}