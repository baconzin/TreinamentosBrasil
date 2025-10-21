import React from "react";

// Simple SVG logo (web). For Word, a PNG will be generated via script.
export const LogoTB = ({ size = 72, showText = true }) => {
  const green = "#004000";
  const gold = "#B8860B";
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor={gold} />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="108" height="108" rx="16" fill={green} />
        <rect x="6" y="6" width="108" height="108" rx="16" fill="url(#goldGrad)" opacity="0.08" />
        <g transform="translate(22,20)" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round">
          <path d="M4 8 H64" stroke="url(#goldGrad)" />
          <path d="M4 8 V76" stroke={gold} opacity="0.6" />
        </g>
        <g transform="translate(24,24)">
          <text x="6" y="40" fontFamily="'Segoe UI', Arial" fontWeight="800" fontSize="48" fill="white">
            T
          </text>
          <text x="44" y="72" fontFamily="'Segoe UI', Arial" fontWeight="800" fontSize="56" fill="white">
            B
          </text>
          <text x="44" y="72" fontFamily="'Segoe UI', Arial" fontWeight="800" fontSize="56" fill="url(#goldGrad)">
            B
          </text>
        </g>
      </svg>
      {showText && (
        <div>
          <div className="font-extrabold leading-none" style={{ color: green }}>
            Treinamentos Brasil
          </div>
          <div className="text-xs tracking-wide" style={{ color: gold }}>
            O MELHOR PARA OS MELHORES
          </div>
        </div>
      )}
    </div>
  );
};
