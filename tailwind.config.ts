import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",
                accent: "#22C55E",
                text: {
                    DEFAULT: "#0F172A",
                    secondary: "#475569"
                },
                surface: "#FFFFFF",
                muted: "#F8FAFC"
            },
            boxShadow: {
                glow: "0 0 0 2px rgba(79,70,229,0.08), 0 10px 30px -10px rgba(79,70,229,0.25)"
            }
        }
    },
    plugins: []
} satisfies Config;