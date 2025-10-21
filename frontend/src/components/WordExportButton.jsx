import React from "react";
import { Button } from "../components/ui/button";
import { generateWord } from "../utils/docxExport";
import { Download } from "lucide-react";

export const WordExportButton = () => {
  const handleExport = async () => {
    const blob = await generateWord();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Apresentacao_Treinamentos_Brasil.docx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleExport} className="rounded-full px-5 flex items-center gap-2">
      <Download size={16} />
      Baixar em Word
    </Button>
  );
};
