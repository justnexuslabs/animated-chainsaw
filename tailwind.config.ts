import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0F0C",
        charcoal: "#101A12",
        deepGreen: "#0B3D20",
        neonGreen: "#39FF14",
        cyberGreen: "#0BA360",
        whiteSmoke: "#E6E6E6",
        warningOrange: "#DFAF37"
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "Orbitron", "sans-serif"],
        body: ["var(--font-rajdhani)", "Rajdhani", "Inter", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 28px rgba(57, 255, 20, 0.28)",
        panel: "0 18px 70px rgba(0, 0, 0, 0.42)"
      },
      backgroundImage: {
        "scan-lines":
          "linear-gradient(rgba(57,255,20,0.04) 1px, transparent 1px)"
      },
      keyframes: {
        hover: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        hover: "hover 5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
