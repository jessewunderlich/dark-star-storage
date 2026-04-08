import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          borderRadius: 36,
        }}
      >
        <svg width={140} height={140} viewBox="0 0 140 140" fill="none">
          <circle
            cx={70}
            cy={70}
            r={21}
            stroke="#F0A500"
            strokeWidth={3.5}
            fill="none"
          />
          <circle
            cx={70}
            cy={70}
            r={35}
            stroke="#F0A500"
            strokeWidth={2.1}
            fill="none"
            opacity={0.8}
          />
          <circle
            cx={70}
            cy={70}
            r={56}
            stroke="#6C3CE1"
            strokeWidth={4.9}
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
