"use client";

import { FC, SVGProps } from 'react';

interface BlackHoleLogoProps {
  size?: number;
  className?: string;
}

const BlackHoleLogo: FC<BlackHoleLogoProps> = ({ size = 48, className = '' }) => {
  const width = size;
  const height = size;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill=\"none\"
      xmlns=\"http://www.w3.org/2000/svg\"
      className={className}
      role=\"img\"
      aria-label=\"Dark Star Storage logo\"
    >
      {/* Event horizon - inner gold circle */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={size * 0.15}
        stroke=\"#F0A500\"
        strokeWidth={size * 0.025}
        fill=\"none\"
        strokeLinecap=\"round\"
        strokeLinejoin=\"round\"
      />
      
      {/* Photon ring - middle gold circle */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={size * 0.25}
        stroke=\"#F0A500\"
        strokeWidth={size * 0.015}
        fill=\"none\"
        strokeLinecap=\"round\"
        strokeLinejoin=\"round\"
        opacity={0.8}
      />
      
      {/* Accretion disk - outer purple ring */}
      <circle
        cx={width / 2}
        cy={height / 2}
        r={size * 0.4}
        stroke=\"#6C3CE1\"
        strokeWidth={size * 0.035}
        strokeLinecap=\"round\"
        fill=\"none\"
        strokeLinejoin=\"round\"
      />
      
      {/* Subtle distortion lines for gravitational lensing */}
      <defs>
        <linearGradient id=\"lens\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">
          <stop offset=\"0%\" stopColor=\"#F0A500\" stopOpacity={0.3}/>
          <stop offset=\"100%\" stopColor=\"#6C3CE1\" stopOpacity={0.1}/>
        </linearGradient>
      </defs>
      <path
        d={`M ${width/2-size*0.45} ${height/2} Q ${width/2-size*0.2} ${height/2-size*0.3} ${width/2} ${height/2-size*0.45} Q ${width/2+size*0.2} ${height/2-size*0.3} ${width/2+size*0.45} ${height/2}`}
        stroke=\"url(#lens)\"
        strokeWidth={size * 0.01}
        fill=\"none\"
        opacity={0.6}
      />
    </svg>
  );
};

export default BlackHoleLogo;
