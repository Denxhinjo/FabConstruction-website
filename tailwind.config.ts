import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fab: {
          maroon: "#6E2A2A",
          brick: "#A15B3B",
          beige: "#D9C2A8",
          cream: "#FAF7F3",
          dark: "#0F172A",
          white: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
