import { useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SellAI from "./components/SellAI";
import Benefits from "./components/Benefits";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Section from "./components/ui/Section";
import { BENEFITS, SERVICES } from "./data";

function App() {
    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    return (
        <div>
            <Header onCta={() => scrollTo("contact")} onNav={(id) => scrollTo(id)} />

            <main>
                <Hero onCtaClick={() => scrollTo("contact")} />

                <Section id="about" aria-label="О компании">
                    <About />
                </Section>

                <Section id="services" aria-label="Услуги">
                    <Services items={SERVICES} />
                </Section>

                <Section id="sellai" aria-label="SellAI">
                    <SellAI />
                </Section>

                <Section id="benefits" aria-label="Преимущества">
                    <Benefits items={BENEFITS} />
                </Section>

                <Section id="contact" aria-label="Контакты и форма">
                    <ContactForm />
                </Section>
            </main>

            <Footer />
        </div>
    );
}

export default App;