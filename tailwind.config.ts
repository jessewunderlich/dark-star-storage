import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0A0A0F",
          black: "#0A0A0F",
        },
        horizon: {
          DEFAULT: "#1A1A2E",
          dark: "#12121F",
        },
        gold: {
          DEFAULT: "#F0A500",
          light: "#FFD166",
          dim: "rgba(240,165,0,0.15)",
        },
        nebula: {
          DEFAULT: "#6C3CE1",
          light: "#8B5CF6",
        },
        starlight: {
          DEFAULT: "#E8E8ED",
          muted: "#9CA3AF",
        },
        plasma: "#00D68F",
        dwarf: "#FF4757",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "accretion-disk": "linear-gradient(135deg, #6C3CE1 0%, #F0A500 100%)",
        "hero-glow":
          "radial-gradient(ellipse at center, rgba(240,165,0,0.15) 0%, transparent 70%)",
        "event-horizon":
          "radial-gradient(circle at center, #0A0A0F 30%, #1A1A2E 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
