/**
 * Dark Star Storage — Brand Design Tokens
 *
 * Name origin: "Dark star" was the 18th-century term for what we now call
 * a black hole. Your stuff goes in. It's not coming back out.
 */

export const brand = {
  name: "Dark Star Storage",
  tagline: "Your stuff. Safely consumed.",

  colors: {
    // Core
    voidBlack: "#0A0A0F",
    eventHorizon: "#1A1A2E",
    singularity: "#12121F",

    // Accents
    accretionGold: "#F0A500",
    accretionGoldLight: "#FFD166",
    nebulaViolet: "#6C3CE1",
    nebulaVioletLight: "#8B5CF6",

    // Neutrals
    starlight: "#E8E8ED",
    starlightMuted: "#9CA3AF",
    cosmicGray: "#374151",

    // Status
    plasmaGreen: "#00D68F",
    redDwarf: "#FF4757",
    neutronBlue: "#3B82F6",
  },

  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  gradients: {
    accretionDisk: "linear-gradient(135deg, #6C3CE1 0%, #F0A500 100%)",
    heroGlow: "radial-gradient(ellipse at center, rgba(240,165,0,0.15) 0%, transparent 70%)",
    eventHorizon: "radial-gradient(circle at center, #0A0A0F 30%, #1A1A2E 100%)",
  },
} as const;
