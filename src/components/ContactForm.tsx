import { useMemo, useState } from "react";
import { Button } from "./ui/Button";
import Card from "./ui/Card";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
    company: string; // honeypot
};

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
        company: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [serverMsg, setServerMsg] = useState<string>("");

    const isValid = useMemo(() => {
        return (
            form.name.trim().length >= 2 &&
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
            form.message.trim().length >= 10 &&
            form.consent &&
            !form.company // honeypot must be empty
        );
    }, [form]);

    function validate(): boolean {
        const e: Partial<Record<keyof FormState, string>> = {};
        if (form.name.trim().length < 2) e.name = "Укажите имя (мин. 2 символа)";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Введите корректный email";
        if (form.phone && !/^[+\d ()-]{6,}$/.test(form.phone)) e.phone = "Некорректный телефон";
        if (form.message.trim().length < 10) e.message = "Сообщение слишком короткое";
        if (!form.consent) e.consent = "Необходимо согласие";
        if (form.company) e.company = "Spam detected";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setServerMsg("");
        if (!validate()) return;

        setStatus("loading");
        // Антиспам: небольшая задержка 300–600 мс
        const delay = 300 + Math.floor(Math.random() * 300);
        await new Promise((r) => setTimeout(r, delay));

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, message: form.message }),
            });

            if (res.status === 201) {
                setStatus("success");
                setForm({ name: "", email: "", phone: "", message: "", consent: false, company: "" });
                setServerMsg("Заявка отправлена. Мы свяжемся с вами в ближайшее время.");
            } else {
                const text = await res.text();
                setStatus("error");
                setServerMsg(text || "Ошибка отправки. Попробуйте ещё раз позже.");
            }
        } catch (err) {
            setStatus("error");
            setServerMsg("Сетевая ошибка. Проверьте соединение и попробуйте снова.");
        }
    }

    return (
        <div className="grid gap-8 md:grid-cols-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight text-text">Свяжитесь с нами</h2>
                <p className="mt-3 max-w-prose text-text/80">
                    Email: <a className="text-primary underline-offset-2 hover:underline" href="mailto:hello@png-team.dev">hello@png-team.dev</a><br />
                    Телефон: <a className="text-primary underline-offset-2 hover:underline" href="tel:+77770000000">+7 (777) 000-00-00</a><br />
                    Алматы / Астана, дистанционно — по всему СНГ<br />
                    Телеграм: <a className="text-primary underline-offset-2 hover:underline" href="https://t.me/png_team" target="_blank" rel="noreferrer">@png_team</a>
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-text/80">
                    <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-primary" aria-hidden /> Почта: hello@png-team.dev</li>
                    <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-primary" aria-hidden /> +7 (777) 000-00-00</li>
                    <li className="flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" aria-hidden /> Telegram: @png_team</li>
                    <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" aria-hidden /> Алматы / Астана</li>
                </ul>
            </div>

            <Card>
                <form noValidate onSubmit={onSubmit} className="grid gap-4">
                    {/* honeypot */}
                    <div className="hidden" aria-hidden>
                        <label htmlFor="company">Компания</label>
                        <input id="company" name="company" autoComplete="off" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
                    </div>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text">Имя</label>
                        <input
                            id="name"
                            name="name"
                            className="focus-ring mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-err" : undefined}
                            required
                        />
                        {errors.name && (
                            <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="focus-ring mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-err" : undefined}
                            required
                        />
                        {errors.email && (
                            <p id="email-err" className="mt-1 text-xs text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text">Телефон</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            className="focus-ring mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                            value={form.phone}
                            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-err" : undefined}
                            placeholder="+7 (___) ___-__-__"
                        />
                        {errors.phone && (
                            <p id="phone-err" className="mt-1 text-xs text-red-600">{errors.phone}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            className="focus-ring mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                            aria-invalid={!!errors.message}
                            aria-describedby={errors.message ? "message-err" : undefined}
                            required
                        />
                        {errors.message && (
                            <p id="message-err" className="mt-1 text-xs text-red-600">{errors.message}</p>
                        )}
                    </div>

                    <label className="flex items-start gap-3 text-sm">
                        <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                            aria-invalid={!!errors.consent}
                        />
                        <span>
              Соглашаюсь с обработкой данных и <a className="text-primary underline-offset-2 hover:underline" href="/privacy.html" target="_blank" rel="noreferrer">политикой конфиденциальности</a>
            </span>
                    </label>
                    {errors.consent && <p className="-mt-2 text-xs text-red-600">{errors.consent}</p>}

                    <div className="mt-2 flex items-center gap-3">
                        <Button type="submit" loading={status === "loading"} disabled={!isValid || status === "loading"}>
                            Отправить заявку
                        </Button>
                        {status === "success" && <span className="text-sm text-emerald-600">{serverMsg}</span>}
                        {status === "error" && <span className="text-sm text-red-600">{serverMsg}</span>}
                    </div>
                </form>
            </Card>
        </div>
    );
}