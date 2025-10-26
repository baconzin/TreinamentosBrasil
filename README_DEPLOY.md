Treinamentos Brasil — Site estático (HTML/CSS/JS)

Como publicar no GitHub Pages
1) Crie um repositório novo no GitHub (ex.: treinamentosbrasil-site).
2) Faça upload do conteúdo desta pasta (todos os arquivos e pastas) diretamente na branch main.
3) Garanta que o arquivo CNAME permaneça no repositório (ele configura o domínio).
4) Ative Pages em Settings → Pages → Branch: main / root → Save.
5) Configure o DNS do domínio:
   - A (apex): 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME (www): <seu-usuario>.github.io
6) Aguarde propagação (até 30 min). O site abrirá em https://www.treinamentosbrasil.com.br/

Editar conteúdo
- index.html: estrutura e metatags SEO
- styles.css: estilos
- script.js: dados dos cursos, parceiros e lógica simples
- assets/logo_tb.svg: logo vetorizado (monograma TB com corte dourado)
- robots.txt, sitemap.xml: SEO

Observações
- Nenhuma dependência, build ou framework: 100% estático.
- Logos dos parceiros vêm do CDN SimpleIcons. Caso queira logos oficiais coloridos, substitua cada <img> por arquivos PNG/SVG próprios em ./assets/.
