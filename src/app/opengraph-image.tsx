import { ImageResponse } from "next/og";

export const alt = "Dark Star Storage — Your Stuff. Safely Consumed.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(240,165,0,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Black hole SVG logo */}
        <svg
          width={120}
          height={120}
          viewBox="0 0 120 120"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <circle
            cx={60}
            cy={60}
            r={18}
            stroke="#F0A500"
            strokeWidth={3}
            fill="none"
          />
          <circle
            cx={60}
            cy={60}
            r={30}
            stroke="#F0A500"
            strokeWidth={1.8}
            fill="none"
            opacity={0.8}
          />
          <circle
            cx={60}
            cy={60}
            r={48}
            stroke="#6C3CE1"
            strokeWidth={4.2}
            fill="none"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#E8E8ED",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            DARK STAR
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F0A500",
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            STORAGE
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 20,
            fontSize: 28,
            color: "#A8B0BC",
            letterSpacing: "0.05em",
          }}
        >
          Your stuff. Safely consumed.
        </div>

        {/* Location badge */}
        <div
          style={{
            marginTop: 32,
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 9999,
            border: "1px solid rgba(240,165,0,0.3)",
            padding: "8px 20px",
          }}
        >
          <span style={{ fontSize: 18, color: "#F0A500" }}>📍</span>
          <span style={{ fontSize: 18, color: "#A8B0BC" }}>
            Frazee, Minnesota · 24/7 Automated Access
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
