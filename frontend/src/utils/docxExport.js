import { Document, Packer, Paragraph, HeadingLevel, TextRun, AlignmentType, TabStopType, TabStopPosition } from "docx";
import { catalog, brand, partners } from "../mock/mock";

const green = brand.colors.green;
const gold = brand.colors.gold;

const h1 = (text) => new Paragraph({
  text,
  heading: HeadingLevel.TITLE,
  alignment: AlignmentType.CENTER,
  spacing: { line: 360 },
});

const slogan = (text) => new Paragraph({
  children: [new TextRun({ text, color: gold.replace('#',''), bold: true })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 400 },
});

const divider = () => new Paragraph({
  children: [new TextRun({ text: "\n" })],
  spacing: { after: 200 },
});

const heading = (text) => new Paragraph({
  children: [new TextRun({ text, bold: true })],
  spacing: { before: 200, after: 100 },
});

const paragraph = (text) => new Paragraph({
  children: [new TextRun({ text })],
  spacing: { after: 120 },
});

export async function generateWord() {
  const doc = new Document({
    sections: [
      {
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
          divider(),
          heading("Catálogo de Cursos e Carga Horária"),
          ...catalog.map((c) => new Paragraph({
            children: [
              new TextRun({ text: `${c.title} (${c.hours}h)`, bold: true }),
            ],
            spacing: { before: 200, after: 60 },
          })),
          divider(),
          heading("Descrições dos Cursos"),
          ...catalog.flatMap((c) => [
            new Paragraph({ children: [new TextRun({ text: c.title, bold: true })], spacing: { before: 200, after: 60 } }),
            paragraph(c.summary),
            paragraph(`Como ganhar dinheiro: ${c.income}`),
          ]),
          divider(),
          heading("Parceiros e Marcas"),
          ...Object.entries(partners).flatMap(([group, items]) => [
            new Paragraph({ children: [new TextRun({ text: group, bold: true })], spacing: { before: 200, after: 60 } }),
            paragraph(items.join(" • ")),
          ]),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  return blob;
}
