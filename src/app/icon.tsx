import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 4,
        }}
      >
        <svg width={28} height={28} viewBox="0 0 28 28" fill="none">
          <circle
            cx={14}
            cy={14}
            r={4.2}
            stroke="#F0A500"
            strokeWidth={0.7}
            fill="none"
          />
          <circle
            cx={14}
            cy={14}
            r={7}
            stroke="#F0A500"
            strokeWidth={0.4}
            fill="none"
            opacity={0.8}
          />
          <circle
            cx={14}
            cy={14}
            r={11.2}
            stroke="#6C3CE1"
            strokeWidth={1}
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
