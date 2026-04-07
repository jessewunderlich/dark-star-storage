"use client";

interface BlackHoleLogoProps {
  size?: number;
  className?: string;
}

export default function BlackHoleLogo({ size = 48, className = "" }: BlackHoleLogoProps) {
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Dark Star Storage logo"
    >
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.15}
        stroke="#F0A500"
        strokeWidth={size * 0.025}
        fill="none"
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.25}
        stroke="#F0A500"
        strokeWidth={size * 0.015}
        fill="none"
        opacity={0.8}
      />
      <circle
        cx={cx}
        cy={cy}
        r={size * 0.4}
        stroke="#6C3CE1"
        strokeWidth={size * 0.035}
        fill="none"
      />
    </svg>
  );
}
