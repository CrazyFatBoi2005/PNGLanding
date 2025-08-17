export default function Footer() {
    return (
        <footer className="mt-24 border-t border-slate-200 bg-white/80">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
                <p className="text-sm text-text/60">© {new Date().getFullYear()} .PNG. Все права защищены.</p>
                <div className="flex items-center gap-6 text-sm">
                    <a href="#services" className="text-text/70 hover:text-text">Услуги</a>
                    <a href="#sellai" className="text-text/70 hover:text-text">SellAI</a>
                    <a href="#contact" className="text-text/70 hover:text-text">Контакты</a>
                    <a href="/privacy.html" className="text-text/70 hover:text-text" target="_blank" rel="noreferrer">Политика</a>
                </div>
            </div>
        </footer>
    );
}