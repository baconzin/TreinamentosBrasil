export const brand = {
  name: "Treinamentos Brasil",
  slogan: "O MELHOR PARA OS MELHORES",
  colors: { green: "#004000", gold: "#B8860B", dark: "#0f0f10" },
};

export const catalog = [
  {
    id: "mecanica-automotiva",
    title: "Mecânica Automotiva",
    hours: 160,
    modules: [
      { title: "Introdução à Mecânica", hours: 40 },
      { title: "Sistemas de Freios e Suspensão", hours: 40 },
      { title: "Direção Elétrica e Hidráulica", hours: 40 },
      { title: "Manutenção Preventiva e Diagnóstico", hours: 40 },
    ],
    summary:
      "Formação prática para atuar em oficinas, concessionárias e serviços próprios. Do básico aos diagnósticos com scanners.",
    income:
      "Potencial de R$ 4.000 a R$ 12.000/mês conforme especialização e volume de clientes.",
  },
  {
    id: "eletrica-automotiva",
    title: "Elétrica Automotiva",
    hours: 120,
    modules: [
      { title: "Fundamentos Elétricos", hours: 30 },
      { title: "Componentes Automotivos", hours: 30 },
      { title: "Injeção e Iluminação", hours: 30 },
      { title: "Prática de Montagem", hours: 30 },
    ],
    summary:
      "Diagnóstico, testes e reparos em sistemas elétricos modernos. Instalação de acessórios e customizações.",
    income:
      "Alta demanda por especialistas: serviços sob demanda e estúdios de elétrica com ótimo ticket médio.",
  },
  {
    id: "eletrica-residencial-industrial",
    title: "Elétrica Residencial e Industrial",
    hours: 180,
    modules: [
      { title: "Instalações Residenciais", hours: 60 },
      { title: "Comandos Elétricos", hours: 60 },
      { title: "Painéis e Proteções Industriais", hours: 60 },
    ],
    summary:
      "Normas ABNT e NR10, dimensionamento, painéis e automação. Base sólida para contratos e projetos.",
    income:
      "Atuação como autônomo ou empresa. Projetos de automação e energia solar com alta rentabilidade.",
  },
  {
    id: "maquinas-pesadas",
    title: "Máquinas Pesadas",
    hours: 200,
    modules: [
      { title: "Fundamentos e Segurança", hours: 50 },
      { title: "Hidráulica Aplicada", hours: 50 },
      { title: "Sistema de Transmissão", hours: 50 },
      { title: "Operação e Diagnóstico", hours: 50 },
    ],
    summary:
      "Manutenção e operação de escavadeiras, tratores e empilhadeiras. Diagnóstico e prevenção.",
    income:
      "Mercado aquecido na construção, mineração e agro. Salários acima de R$ 8.000 e contratos.",
  },
  {
    id: "tecnico-informatica",
    title: "Técnico de Informática",
    hours: 200,
    modules: [
      { title: "Hardware e Montagem", hours: 40 },
      { title: "Sistemas Operacionais", hours: 40 },
      { title: "Redes e Servidores", hours: 40 },
      { title: "Manutenção e Segurança", hours: 40 },
      { title: "Introdução à IA e Automação", hours: 40 },
    ],
    summary:
      "Do hardware à configuração de redes e servidores. Base para serviços gerenciados e suporte.",
    income:
      "Contratos recorrentes com empresas e escolas. Serviços remotos e presenciais com alta demanda.",
  },
  {
    id: "ia-aplicada",
    title: "Inteligência Artificial Aplicada",
    hours: 100,
    modules: [
      { title: "Fundamentos de IA", hours: 20 },
      { title: "ChatGPT e Modelos de Linguagem", hours: 20 },
      { title: "Automação de Processos", hours: 20 },
      { title: "Aplicações Empresariais", hours: 20 },
      { title: "Ética e Responsabilidade", hours: 20 },
    ],
    summary:
      "Ferramentas e práticas para automatizar fluxos, criar assistentes e gerar valor real em negócios.",
    income:
      "Consultoria e soluções sob medida com alta margem e contratos mensais.",
  },
  {
    id: "cameras-alarmes",
    title: "Instalação de Câmeras e Alarmes",
    hours: 80,
    modules: [
      { title: "Fundamentos de Segurança", hours: 20 },
      { title: "Cabeamento e Instalação", hours: 20 },
      { title: "Configuração de Equipamentos", hours: 20 },
      { title: "Integração com Aplicativos", hours: 20 },
    ],
    summary:
      "Projeto, instalação e configuração de CFTV, alarmes e controle de acesso.",
    income:
      "Retorno rápido com residências, comércios e condomínios. Contratos de manutenção valorizados.",
  },
];

export const partners = {
  Automotivo: [
    "Bosch",
    "NGK",
    "Delphi",
    "Magneti Marelli",
    "Schaeffler",
    "Vonder",
    "Makita",
    "Wurth",
    "Gedore",
    "Tramontina Pro",
    "Raven",
    "Snap-on",
    "Stanley",
    "Karcher",
    "3M",
    "SKF",
    "Gates",
    "Cobreq",
    "Mahle",
    "Monroe",
    "Valvoline",
    "Castrol",
    "Shell",
    "Texaco",
    "Mobil",
    "Motul",
    "NGK-NTK",
    "Continental",
    "Denso",
    "Hella",
    "Mann Filter",
    "Spal",
    "Tecfil",
    "Bardahl",
    "Luxcar",
  ],
  "Elétrica e Segurança": [
    "Würth",
    "Intelbras",
    "Schneider Electric",
    "Siemens",
    "Pial Legrand",
    "Tigre",
    "Tramontina",
    "Steck",
    "Daneva",
    "Philips",
    "Osram",
    "Furukawa",
    "Foxlux",
    "Multilaser",
    "Margirius",
    "Elgin",
    "Enerbras",
  ],
  Tecnologia: [
    "Intel",
    "AMD",
    "NVIDIA",
    "Microsoft",
    "ASUS",
    "Lenovo",
    "Dell",
    "HP",
    "Corsair",
    "Kingston",
    "Logitech",
    "TP-Link",
    "Gigabyte",
    "OpenAI (ChatGPT)",
  ],
};
