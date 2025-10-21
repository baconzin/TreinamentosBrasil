export function getLogoSVG(size = 120) {
  const green = "#004000";
  const gold = "#B8860B";
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#D4AF37" />
        <stop offset="100%" stop-color="${gold}" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="108" height="108" rx="16" fill="${green}" />
    <rect x="6" y="6" width="108" height="108" rx="16" fill="url(#goldGrad)" opacity="0.08" />
    <g transform="translate(22,20)" fill="none" stroke="white" stroke-width="8" stroke-linecap="round">
      <path d="M4 8 H64" stroke="url(#goldGrad)" />
      <path d="M4 8 V76" stroke="${gold}" opacity="0.6" />
    </g>
    <g transform="translate(24,24)">
      <text x="6" y="40" font-family="'Segoe UI', Arial" font-weight="800" font-size="48" fill="white">T</text>
      <text x="44" y="72" font-family="'Segoe UI', Arial" font-weight="800" font-size="56" fill="white">B</text>
      <text x="44" y="72" font-family="'Segoe UI', Arial" font-weight="800" font-size="56" fill="url(#goldGrad)">B</text>
    </g>
  </svg>`;
}

export function downloadSVG(filename = "logo_tb.svg") {
  const svg = getLogoSVG();
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
