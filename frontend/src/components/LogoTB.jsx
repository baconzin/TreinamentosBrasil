import React from "react";

// Uses user's provided logo image (hosted URL) + brand text
const LOGO_URL = "https://customer-assets.emergentagent.com/job_cursos-brasil/artifacts/kpe5noxb_image.png";

export const LogoTB = ({ size = 48, showText = true }) => {
  const green = "#004000";
  const gold = "#B8860B";
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={LOGO_URL}
        alt="Treinamentos Brasil logo"
        width={size}
        height={size}
        className="rounded-md object-contain"
        style={{ aspectRatio: "1 / 1" }}
      />
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
