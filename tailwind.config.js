/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
          light: "#93c5fd",
        },
        secondary: "#f8fafc",
        accent: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        "text-primary": "#1f2937",
        "text-secondary": "#6b7280",
        "text-light": "#9ca3af",
        "bg-primary": "#ffffff",
        "bg-secondary": "#f9fafb",
        "bg-dark": "#111827",
      },
      fontFamily: {
        en: ['"Inter"', '"Segoe UI"', "system-ui", "sans-serif"],
        ar: ['"Cairo"', '"Tajawal"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
