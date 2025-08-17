import { Calendar, Cpu, ShoppingCart, Sparkles, Utensils } from "lucide-react";
import type { ServiceItem, BenefitItem } from "./types";

export const SERVICES: ServiceItem[] = [
    {
        title: "Фудкорт: Бронь столов",
        description: "QR-сервис для оплаты чеков, брони столов и просмотра меню.",
        icon: Utensils,
    },
    {
        title: "Обновление сайта / Визитка",
        description: "Улучшим скорость, структуру и конверсию вашего сайта.",
        icon: Sparkles,
    },
    {
        title: "Запись онлайн",
        description: "Удобное расписание и запись на услуги (барбершопы, салоны и др.).",
        icon: Calendar,
    },
    { title: "Магазин", description: "Полноценный e-commerce: каталог, корзина, заказы.", icon: ShoppingCart },
    {
        title: "Автоматизация",
        description: "Терминалы, безналичная оплата, сбор заказов и кастомные решения.",
        icon: Cpu,
    },
];

export const BENEFITS: BenefitItem[] = [
    { title: "Быстрый старт", description: "MVP за недели, а не месяцы." },
    { title: "Прозрачные сметы", description: "Сроки и стоимость предсказуемы." },
    { title: "Масштабируемость", description: "Архитектура, готовая к росту." },
    { title: "Поддержка", description: "Оперативные доработки." },
];