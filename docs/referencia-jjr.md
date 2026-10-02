# Mapa de referência visual — Colégio JJR → O Pequeno Galileu

## Princípio de adaptação

Os dois sites podem compartilhar uma linguagem de produto — hierarquia editorial, fotos protagonistas, CTAs claros, cards bem espaçados e blocos de confiança — sem compartilhar identidade. O JJR é sóbrio, acadêmico e contrastado; o Galileu deve ser tátil, acolhedor, orgânico e adequado à primeira infância.

## Blocos recomendados

| Referência JJR | Destino no Galileu | Adaptação |
| --- | --- | --- |
| Hero editorial com foto, selo e card flutuante | Home | Foto real de primeira infância, selo de acolhimento e dado validado; terracota/sálvia/creme. |
| Grade de essência | Home e A escola | Três pilares: acolhimento, autonomia e descoberta. |
| Citação institucional | A escola | Fala real da direção, após validação editorial. |
| Faixa de diferenciais | Home | Quatro mensagens curtas e comprováveis. |
| Grade de segmentos | Home | Três ciclos: Berçário, Maternal e Pré-escola. |
| Campanha de matrícula | Home e Matrículas | Ano letivo, CTA de visita e WhatsApp; sem prometer vaga. |
| Linha de tradição | A escola | Apenas números e marcos institucionais confirmados. |
| Cards finais em contraste | Todas as páginas de intenção comercial | Visita como CTA primário e WhatsApp como CTA secundário. |
| Linhas editoriais alternadas com foto e lista | Páginas de turma | Uma seção por benefício, rotina ou experiência. |
| Galeria assimétrica | Estrutura e espaços | Fotos reais locais, alt text editorial e carregamento responsivo. |
| Processo em três etapas | Matrículas | Interesse, visita e orientação. |
| Razões em lista vertical | Matrículas | Benefícios verificados da escola. |
| FAQ em acordeão | Matrículas e turmas | Perguntas visíveis com schema FAQ correspondente. |
| Formulário com contexto | Matrículas e contato | Ativar somente quando o destino dos leads estiver definido. |
| Cards de blog com foto | Blog | Conteúdo em coleção Astro, categorias e imagem de capa. |

## Itens técnicos recomendados

- Unificar navegação, CTA flutuante de WhatsApp e estados de foco acessíveis.
- Evoluir posts para Astro Content Collections; avaliar Decap CMS quando a equipe precisar publicar sem código.
- Migrar sitemap manual para `@astrojs/sitemap` na definição da hospedagem.
- Consolidar JSON-LD em um grafo por página (School/Preschool, WebSite, WebPage, Breadcrumb, Article e FAQ quando aplicável).
- Configurar captura de formulários conforme o provedor de hospedagem, com política de privacidade atualizada.

## Itens que não devem ser copiados

- Paleta azul-marinho/lima, tom acadêmico, linguagem de Ensino Fundamental/Médio e alegações próprias do JJR.
- Números, avaliações, certificações, proporções ou promessas sem evidência oficial do Galileu.

## Ordem de execução

1. Shell global: navegação responsiva, CTAs, rodapé, botão flutuante e sistema de componentes.
2. Home: hero, pilares, ciclos, faixa de diferenciais, campanha de matrícula e CTAs finais.
3. Páginas de turma e Quem Somos: blocos editoriais com imagens e listas de benefícios.
4. Estrutura e espaços: galeria de imagens reais.
5. Matrículas e contato: processo, FAQ e formulário integrado.
6. Blog: coleção de conteúdo, cards e template de artigo.
7. SEO final, medição, dados reais e validação de performance.
