import { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType } from "docx";
import { catalog, brand, partners } from "../mock/mock";

const greenHex = brand.colors.green.replace('#','');
const goldHex = brand.colors.gold.replace('#','');

const h1 = (text) => new Paragraph({
  children: [new TextRun({ text, color: greenHex, bold: true })],
  heading: HeadingLevel.TITLE,
  alignment: AlignmentType.CENTER,
  spacing: { line: 360, after: 200 },
});

const slogan = (text) => new Paragraph({
  children: [new TextRun({ text, color: goldHex, bold: true })],
  alignment: AlignmentType.CENTER,
  spacing: { line: 360, after: 400 },
});

const divider = () => new Paragraph({
  children: [new TextRun({ text: "────────────────────────────────────────────", color: goldHex })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 240 },
});

const heading = (text) => new Paragraph({
  children: [new TextRun({ text, color: greenHex, bold: true })],
  spacing: { before: 200, after: 120, line: 360 },
});

const paragraph = (text) => new Paragraph({
  children: [new TextRun({ text })],
  spacing: { after: 160, line: 360 },
});

const bullet = (text) => new Paragraph({
  children: [new TextRun({ text })],
  bullet: { level: 0 },
  spacing: { after: 80, line: 360 },
});

export async function generateWord() {
  const sections = [];

  // Capa
  sections.push({
    properties: {},
    children: [
      h1("Apresentação Empresarial – Treinamentos Brasil"),
      slogan("O MELHOR PARA OS MELHORES"),
      divider(),
      paragraph(
        "A Treinamentos Brasil é uma empresa especializada na capacitação técnica e profissional, voltada para o desenvolvimento de competências práticas em áreas como mecânica, elétrica, tecnologia e inteligência artificial."
      ),
      paragraph(
        "Nosso foco é formar profissionais prontos para o mercado, com base em experiências reais, laboratórios completos e instrutores certificados."
      ),
      paragraph(
        "Com sede equipada e estrutura móvel para treinamentos em empresas e instituições públicas, oferecemos cursos presenciais e in company, com emissão de certificados reconhecidos e conteúdo constantemente atualizado às demandas atuais da indústria e do setor automotivo."
      ),
    ],
  });

  // Catálogo
  sections.push({
    properties: {},
    children: [
      divider(),
      heading("Catálogo de Cursos e Carga Horária"),
      ...catalog.flatMap((c) => [
        new Paragraph({ children: [new TextRun({ text: `${c.title} (${c.hours}h)`, bold: true, color: greenHex })], spacing: { before: 160, after: 60, line: 360 } }),
        ...c.modules.map((m) => bullet(`${m.title} — ${m.hours}h`)),
      ]),
    ],
  });

  // Descrições
  sections.push({
    properties: {},
    children: [
      divider(),
      heading("Descrições dos Cursos"),
      ...catalog.flatMap((c) => [
        new Paragraph({ children: [new TextRun({ text: `${c.title} • ${c.hours}h`, bold: true, color: greenHex })], spacing: { before: 200, after: 60, line: 360 } }),
        paragraph(c.summary),
        paragraph(`Como ganhar dinheiro: ${c.income}`),
      ]),
    ],
  });

  // Parceiros
  sections.push({
    properties: {},
    children: [
      divider(),
      heading("Parceiros e Marcas"),
      ...Object.entries(partners).flatMap(([group, items]) => [
        new Paragraph({ children: [new TextRun({ text: group, bold: true, color: goldHex })], spacing: { before: 160, after: 60, line: 360 } }),
        paragraph(items.join(" • ")),
      ]),
    ],
  });

  const doc = new Document({ sections });
  const blob = await Packer.toBlob(doc);
  return blob;
}
