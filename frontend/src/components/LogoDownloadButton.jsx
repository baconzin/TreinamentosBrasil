import React from "react";
import { Button } from "../components/ui/button";
import { downloadSVG } from "../utils/logoAssets";
import { ImageDown } from "lucide-react";

export const LogoDownloadButton = () => {
  return (
    <Button onClick={() => downloadSVG()} variant="secondary" className="rounded-full px-4 gap-2">
      <ImageDown size={16} />
      Baixar Logo (SVG)
    </Button>
  );
};
