"use client";

/**
 * Animated black hole logo mark.
 * Concentric gold rings with a purple-to-gold accretion disk
 * and a pure black void center.
 */
export default function BlackHoleLogo({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.28;
  const voidR = size * 0.16;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-label="Dark Star Storage logo"
    >
      <defs>
        {/* Accretion disk gradient */}
        <linearGradient id="accretion-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#6C3CE1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#F0A500" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Outer glow for rings */}
        <filter id="ring-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer ring */}
      <circle
        cx={cx}
        cy={cy}
        r={outerR}
        fill="none"
        stroke="#F0A500"
        strokeWidth={1.5}
        opacity={0.6}
        filter="url(#ring-glow)"
      />

      {/* Inner ring */}
      <circle
        cx={cx}
        cy={cy}
        r={innerR}
        fill="none"
        stroke="#F0A500"
        strokeWidth={2}
        opacity={0.9}
        filter="url(#ring-glow)"
      />

      {/* Accretion disk — tilted ellipse */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={outerR * 1.15}
        ry={outerR * 0.25}
        fill="none"
        stroke="url(#accretion-grad)"
        strokeWidth={3}
        transform={`rotate(-8, ${cx}, ${cy})`}
        filter="url(#glow)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={`-8 ${cx} ${cy}`}
          to={`352 ${cx} ${cy}`}
          dur="60s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* The void — pure black center */}
      <circle cx={cx} cy={cy} r={voidR} fill="#0A0A0F" />

      {/* Subtle inner edge glow */}
      <circle
        cx={cx}
        cy={cy}
        r={voidR + 1}
        fill="none"
        stroke="#F0A500"
        strokeWidth={0.5}
        opacity={0.4}
      />
    </svg>
  );
}
