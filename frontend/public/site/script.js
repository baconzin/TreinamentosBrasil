// (preview) copia do site estatico
const brand = { name: "Treinamentos Brasil", slogan: "O MELHOR PARA OS MELHORES", colors: { green: "#004000", gold: "#B8860B" } };
const catalog = [
  { id: "mecanica-automotiva", title: "Mecânica Automotiva", hours: 160, modules: [
    { title: "Introdução à Mecânica", hours: 40 }, { title: "Sistemas de Freios e Suspensão", hours: 40 }, { title: "Direção Elétrica e Hidráulica", hours: 40 }, { title: "Manutenção Preventiva e Diagnóstico", hours: 40 } ],
    summary: "Formação prática para atuar em oficinas, concessionárias e serviços próprios. Do básico aos diagnósticos com scanners.",
    income: "Potencial de R$ 4.000 a R$ 12.000/mês conforme especialização e volume de clientes." },
  { id: "eletrica-automotiva", title: "Elétrica Automotiva", hours: 120, modules: [
    { title: "Fundamentos Elétricos", hours: 30 }, { title: "Componentes Automotivos", hours: 30 }, { title: "Injeção e Iluminação", hours: 30 }, { title: "Prática de Montagem", hours: 30 } ],
    summary: "Diagnóstico, testes e reparos em sistemas elétricos modernos. Instalação de acessórios e customizações.",
    income: "Alta demanda por especialistas: serviços sob demanda e estúdios de elétrica com ótimo ticket médio." },
  { id: "eletrica-residencial-industrial", title: "Elétrica Residencial e Industrial", hours: 180, modules: [
    { title: "Instalações Residenciais", hours: 60 }, { title: "Comandos Elétricos", hours: 60 }, { title: "Painéis e Proteções Industriais", hours: 60 } ],
    summary: "Normas ABNT e NR10, dimensionamento, painéis e automação. Base sólida para contratos e projetos.",
    income: "Atuação como autônomo ou empresa. Projetos de automação e energia solar com alta rentabilidade." },
  { id: "maquinas-pesadas", title: "Máquinas Pesadas", hours: 200, modules: [
    { title: "Fundamentos e Segurança", hours: 50 }, { title: "Hidráulica Aplicada", hours: 50 }, { title: "Sistema de Transmissão", hours: 50 }, { title: "Operação e Diagnóstico", hours: 50 } ],
    summary: "Manutenção e operação de escavadeiras, tratores e empilhadeiras. Diagnóstico e prevenção.",
    income: "Mercado aquecido na construção, mineração e agro. Salários acima de R$ 8.000 e contratos." },
  { id: "tecnico-informatica", title: "Técnico de Informática", hours: 200, modules: [
    { title: "Hardware e Montagem", hours: 40 }, { title: "Sistemas Operacionais", hours: 40 }, { title: "Redes e Servidores", hours: 40 }, { title: "Manutenção e Segurança", hours: 40 }, { title: "Introdução à IA e Automação", hours: 40 } ],
    summary: "Do hardware à configuração de redes e servidores. Base para serviços gerenciados e suporte.",
    income: "Contratos recorrentes com empresas e escolas. Serviços remotos e presenciais com alta demanda." },
  { id: "ia-aplicada", title: "Inteligência Artificial Aplicada", hours: 100, modules: [
    { title: "Fundamentos de IA", hours: 20 }, { title: "ChatGPT e Modelos de Linguagem", hours: 20 }, { title: "Automação de Processos", hours: 20 }, { title: "Aplicações Empresariais", hours: 20 }, { title: "Ética e Responsabilidade", hours: 20 } ],
    summary: "Ferramentas e práticas para automatizar fluxos, criar assistentes e gerar valor real em negócios.",
    income: "Consultoria e soluções sob medida com alta margem e contratos mensais." },
  { id: "cameras-alarmes", title: "Instalação de Câmeras e Alarmes", hours: 80, modules: [
    { title: "Fundamentos de Segurança", hours: 20 }, { title: "Cabeamento e Instalação", hours: 20 }, { title: "Configuração de Equipamentos", hours: 20 }, { title: "Integração com Aplicativos", hours: 20 } ],
    summary: "Projeto, instalação e configuração de CFTV, alarmes e controle de acesso.",
    income: "Retorno rápido com residências, comércios e condomínios. Contratos de manutenção valorizados." },
];
const partnerGroups = [
  { name: "Automotivo", items: [
    { n:"Bosch", s:"bosch" }, { n:"NGK", s:"ngk" }, { n:"Delphi", s:"delphi" }, { n:"Magneti Marelli", s:"magnetimarelli" }, { n:"Schaeffler", s:"schaeffler" }, { n:"Makita", s:"makita" }, { n:"Wurth", s:"wurth" }, { n:"Stanley", s:"stanley" }, { n:"Karcher", s:"karcher" }, { n:"3M", s:"3m" }, { n:"Mahle", s:"mahle" }, { n:"Castrol", s:"castrol" }, { n:"Shell", s:"shell" }, { n:"Texaco", s:"texaco" }, { n:"Motul", s:"motul" }, { n:"Continental", s:"continental" }, { n:"Denso", s:"denso" }, { n:"Hella", s:"hella" }, { n:"Valvoline", s:"valvoline" } ] },
  { name: "Elétrica e Segurança", items: [
    { n:"Intelbras", s:"intelbras" }, { n:"Schneider Electric", s:"schneiderelectric" }, { n:"Siemens", s:"siemens" }, { n:"Legrand", s:"legrand" }, { n:"Philips", s:"philips" }, { n:"Osram", s:"osram" } ] },
  { name: "Tecnologia", items: [
    { n:"Intel", s:"intel" }, { n:"AMD", s:"amd" }, { n:"NVIDIA", s:"nvidia" }, { n:"Microsoft", s:"microsoft" }, { n:"ASUS", s:"asus" }, { n:"Lenovo", s:"lenovo" }, { n:"Dell", s:"dell" }, { n:"HP", s:"hp" }, { n:"Corsair", s:"corsair" }, { n:"Kingston", s:"kingstontechnology" }, { n:"Logitech", s:"logitech" }, { n:"TP-Link", s:"tplink" }, { n:"Gigabyte", s:"gigabyte" }, { n:"OpenAI", s:"openai" } ] }
];
const $=(s,e=document)=>e.querySelector(s);
function renderCatalog(){const col1=document.createElement('div');col1.className='accordion';const col2=document.createElement('div');col2.className='accordion';const mid=Math.ceil(catalog.length/2);function block(c,alt){const d=document.createElement('details');const s=document.createElement('summary');s.innerHTML=`<span>${c.title}</span><span class="muted">${c.hours}h</span>`;const p=document.createElement('div');p.className='panel';c.modules.forEach((m,i)=>{const r=document.createElement('div');r.className='module'+(alt?' module--alt':'');r.innerHTML=`<span>${m.title}</span><span class="muted">${m.hours}h</span>`;p.appendChild(r);});d.appendChild(s);d.appendChild(p);return d;}catalog.slice(0,mid).forEach(c=>col1.appendChild(block(c,false)));catalog.slice(mid).forEach(c=>col2.appendChild(block(c,true)));const grid=document.getElementById('catalog-grid');grid.appendChild(col1);grid.appendChild(col2);} 
function renderDescriptions(){const wrap=document.getElementById('desc-grid');catalog.forEach(c=>{const card=document.createElement('div');card.className='desc-card';card.innerHTML=`<h4>${c.title} • ${c.hours}h</h4><p>${c.summary}</p><p class="small"><strong style="color:${brand.colors.green}">Como ganhar dinheiro:</strong> ${c.income}</p>`;wrap.appendChild(card);});}
function renderPartners(){const root=document.getElementById('partners');partnerGroups.forEach(g=>{const group=document.createElement('div');group.className='partner-group';group.innerHTML=`<h3>${g.name}</h3>`;const grid=document.createElement('div');grid.className='logo-grid';g.items.forEach(({n,s})=>{const card=document.createElement('div');card.className='logo-card';const img=document.createElement('img');img.alt=n;img.loading='lazy';img.src=`https://cdn.simpleicons.org/${encodeURIComponent(s)}/004000`;img.onerror=()=>{card.innerHTML=`<div class="logo-fallback">${n}</div>`};card.appendChild(img);grid.appendChild(card);});group.appendChild(grid);root.appendChild(group);});}
function handleLeadForm(){const form=document.getElementById('lead-form');const note=document.getElementById('form-note');form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form).entries());const leads=JSON.parse(localStorage.getItem('tb_leads')||'[]');leads.push({...data,createdAt:new Date().toISOString()});localStorage.setItem('tb_leads',JSON.stringify(leads));note.textContent='Recebemos seu contato. Em breve retornaremos!';form.reset();});}
function navToggle(){const btn=document.querySelector('.nav__toggle');const nav=document.querySelector('.nav');btn.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'none':'flex';btn.setAttribute('aria-expanded',String(!open));});}
function downloadLogo(){const a=document.getElementById('download-logo');a.addEventListener('click',e=>{e.preventDefault();fetch('./assets/logo_tb.svg').then(r=>r.blob()).then(b=>{const url=URL.createObjectURL(b);const link=document.createElement('a');link.href=url;link.download='treinamentos-brasil-logo.svg';link.click();URL.revokeObjectURL(url);});});}
function injectJSONLD(){const org={'@context':'https://schema.org','@type':'Organization',name:brand.name,url:'https://www.treinamentosbrasil.com.br/',logo:'https://www.treinamentosbrasil.com.br/assets/logo_tb.svg',sameAs:[]};document.getElementById('org-json').textContent=JSON.stringify(org);const courses={'@context':'https://schema.org','@type':'ItemList',itemListElement:catalog.map((c,i)=>({'@type':'Course',position:i+1,name:c.title,description:c.summary,provider:{'@type':'Organization',name:brand.name}}))};document.getElementById('courses-json').textContent=JSON.stringify(courses);} 
function init(){document.getElementById('year').textContent=new Date().getFullYear();renderCatalog();renderDescriptions();renderPartners();handleLeadForm();navToggle();downloadLogo();injectJSONLD();}
window.addEventListener('DOMContentLoaded', init);
