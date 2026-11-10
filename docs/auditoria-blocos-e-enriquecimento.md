# Auditoria de blocos e plano de enriquecimento — O Pequeno Galileu

**Data:** 7 de outubro de 2026. Comparação entre a prévia em `src/pages`, a [arquitetura](arquitetura-site.md), o [plano editorial](plano-editorial-e-clusters.md), os [textos-base](textos-base-site.md) e a [pesquisa de concorrentes/Google](concorrentes-google-validacao.md). Esta é uma auditoria de conteúdo e estrutura, não uma medição de rankings ou desempenho.

## Leitura rápida

**Cobertura estrutural:** as páginas previstas existem: início, três etapas, escola, proposta, rotina, espaços, matrículas, visita, contato, FAQ, blog e documentos legais. A navegação entre os três hubs e as etapas foi montada. **Cobertura de resposta:** ainda é parcial. As páginas de serviço apresentam o tema certo, mas a maioria não informa a prática própria do Galileu. Vários blocos falam do futuro do projeto (“será confirmado”, “vamos inserir”, “prévia”) e devem virar respostas concretas antes de lançar.

**Prioridade editorial:** (1) dados de etapa e canais; (2) rotina e diferenciais comprovados; (3) equipe, proposta e projetos; (4) artigos e documentos sensíveis; (5) fotos reais. O [briefing de informações](briefing-informacoes-galileu.md) coleta os fatos dos itens 1 a 4. As fotos permanecem na última etapa, conforme combinado.

**Legenda:** `Alinhado` = o bloco cumpre a função planejada, ainda que possa ganhar detalhes; `Parcial` = tema e link corretos, resposta insuficiente; `Vazio de prova` = promete informação ou atributo sem exemplo/documento; `Pendente` = funcionalidade ou texto final não existe. Isso não é uma nota de qualidade da escola.

## 1. Início `/`

| Bloco atual | Mapeamento | Estado | Enriquecimento necessário |
| --- | --- | --- | --- |
| Hero: Rio Pequeno, nome, visita | Responde escola + localização + ação | Parcial | Uma frase própria sobre o Galileu, foto real depois, indicação clara das etapas; evitar repetir apenas “conheça” |
| Faixa de três destaques | Pretende resumir etapas, vínculo e ambientes | Vazio de prova | Trocar frases genéricas por três fatos verificáveis: grupos atendidos, prática de comunicação, exemplo de espaço realmente existente |
| Banda de matrícula/visita | Ação comercial | Parcial | Hoje aparece **antes das etapas**, embora o plano priorize a família escolher a etapa. Reposicionar após a explicação ou usar para campanha somente se houver vaga/período confirmado |
| Cartões Berçário, Maternal, Pré-escola | Etapas e links específicos | Alinhado na estrutura | Validar idades e grupos; adicionar uma diferença concreta de rotina/experiência em cada cartão |
| Cotidiano e proposta | Encaminha aos dois hubs | Parcial | Inserir um exemplo real curto de cuidado e um de experiência pedagógica; hoje o bloco apenas diz o que perguntar |
| Espaços e pessoas | Encaminha para páginas de confiança | Vazio de prova | Mostrar nomes/funções e ambientes reais depois de validação; fotos ficam para o fim |
| Perguntas e três artigos | Ajuda a preparar visita | Desalinhado com publicação | A arquitetura previa blog após revisão. A inicial atualmente expõe três **rascunhos**. Manter FAQ visível, mas retirar cartões dos rascunhos da inicial até os artigos serem aprovados |
| Localização e dúvidas essenciais | Planejado no fim da inicial | Pendente | Incluir endereço/rota e duas ou três respostas curtas aprovadas antes do CTA final |
| Depoimentos | Planejado se houver autorização | Pendente condicional | Só adicionar com autorização, fonte e data; sua ausência não bloqueia a arquitetura |

**Evidência da pesquisa:** no Rio Pequeno, o Google mostrou diretórios e perfis da própria escola entre resultados orgânicos, enquanto o Galileu apareceu no mapa. A inicial precisa oferecer a informação institucional que esses resultados fragmentados não reúnem: oferta, localização, proposta e próximo passo. No Butantã, páginas de escolas e segmentos apareceram para buscas comerciais; isso reforça links destacados para as etapas. A posição observada não garante ganho de ranking após o enriquecimento.

## 2. Páginas de etapas — template compartilhado `/bercario`, `/maternal`, `/pre-escola`

O template atual tem **hero → cotidiano/experiências → perguntas/espaços → matrícula → visita**. A ordem atende o percurso básico; os três textos em `src/data/site.ts` ainda seguem uma fórmula muito parecida. A pesquisa pede respostas diferentes por etapa. Uma mesma estrutura visual pode continuar, mas o conteúdo e os blocos específicos precisam divergir.

| Bloco atual | Berçário | Maternal | Pré-escola |
| --- | --- | --- | --- |
| H1 com etapa + Rio Pequeno | Alinhado | Alinhado: evita a ambiguidade de “maternal” isolado no Google | Alinhado |
| Idade no hero | “A partir de 4 meses” é mock | “1 a 3 anos” é mock | “3 a 5 anos” é mock |
| Apresentação | Parcial: pergunta sobre adaptação e responsável, sem responder | Parcial: descreve fase, sem grupos reais | Parcial: descreve intenção, sem grupos reais |
| Cotidiano | Vazio de prova: alimentação, sono, higiene e comunicação não são explicados | Vazio de prova: adaptação, descanso e desfralde sem procedimento | Vazio de prova: acompanhamento e transição sem processo |
| Brincadeiras e descobertas | Pendente: nenhum exemplo do berçário | Pendente: nenhum projeto/atividade local | Pendente: nenhum projeto real e registro |
| Perguntas para a visita | Úteis, mas são perguntas em vez de respostas | Mesmo problema | Mesmo problema, especialmente para Pré I/Pré II |
| Espaços | Só link e aviso de fotos futuras | Só link e aviso | Só link e aviso |
| Períodos, equipe e comunicação | Não aparecem como blocos próprios | Não aparecem como blocos próprios | Não aparecem como blocos próprios |
| CTA para matrícula e visita | Caminho existe | Caminho existe | Caminho existe |

### Enriquecimento próprio de cada etapa

- **Berçário — primeiro lote:** idade de ingresso; adaptação passo a passo; quem acompanha o bebê; como família e equipe compartilham o dia; alimentação, descanso e higiene conforme operação real; períodos; ambiente do grupo. A página da Lua de Algodão apareceu em 1º para “berçário Butantã” e oferece conteúdo específico de etapa. CDI e Coala também têm páginas de berçário. Não copiar práticas ou promessas deles.
- **Maternal — primeiro lote:** nomes/idades dos grupos; uma sequência real do cotidiano; linguagem, movimento, convivência e autonomia descritos por exemplos; transição e desfralde conforme orientação própria; comunicação com responsáveis. A consulta “maternal Rio Pequeno” trouxe resultados de maternidade, então manter “escola maternal” em H1, título e abertura.
- **Pré-escola — primeiro lote:** grupos e idades; eventuais nomes Pré I/Pré II; um projeto documentado; como o desenvolvimento é acompanhado; períodos; transição para o Ensino Fundamental. As perguntas observadas no Google eram justamente sobre idade de entrada e organização dos grupos. Não prometer alfabetização ou resultado futuro.

## 3. Confiança e aprofundamento

### A escola `/a-escola`

| Bloco | Estado | Falta para dizer o que mapeamos |
| --- | --- | --- |
| Apresentação institucional | Parcial | Texto próprio sobre origem e atuação da escola, sem fórmula genérica |
| Nossa história | Vazio de prova | Ano de fundação, marcos documentados e data-base dos “25 anos” citados na bio pública |
| Pessoas da escola | Vazio de prova | Nome, função, formação e autorização da direção/coordenação/equipe |
| Links para proposta e espaços | Alinhado | Acrescentar link contextual para as etapas e um fato de confiança junto a cada destino |
| Autorização institucional e comunidade | Pendente | Informações vigentes que a direção autorize publicar; um exemplo real de relação com famílias/comunidade |

**Referência da pesquisa:** Método apresenta história e proposta no conteúdo institucional. O Galileu já dispõe da página, mas ainda não demonstra sua história ou as pessoas que a sustentam.

### Proposta pedagógica `/proposta-pedagogica`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Abertura | Parcial | Síntese da proposta na linguagem aprovada pela coordenação |
| “Da intenção à experiência” | Vazio de prova | Um registro real por etapa: contexto, ação das crianças, papel da equipe e observação |
| “O que vamos documentar” | Pendente | É instrução de produção exibida ao público; substituir por princípios e exemplos reais |
| Cartões das etapas | Alinhado como hub | Enriquecer cada resumo com uma experiência distinta; links estão corretos |
| Acompanhamento e parceria | Vazio de prova | Ferramentas de registro, frequência/canais de conversa, exemplos autorizados |
| Relação com BNCC | Pendente | Explicação breve, revisada pela coordenação, de interações/brincadeira e campos de experiências; evitar lista copiada de currículo |

### Rotina e cuidados `/rotina-e-cuidados`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Abertura | Parcial | Resumo concreto de como o Galileu organiza o dia, sem descrever o processo de redação do site |
| Adaptação | Vazio de prova | Processo por etapa e comunicação com a família; link para artigo já existe, mas artigo é rascunho |
| Alimentação, descanso e higiene | Vazio de prova; conteúdo sensível | Responsáveis, procedimentos, comunicação e orientações individuais aprovados; revisão competente para afirmações de saúde/nutrição |
| Cartões das três etapas | Alinhado como hub | Resumos com diferenças reais entre grupos |
| Entrada, saída e comunicação | Vazio de prova | Procedimento público aprovado, canal, frequência e expectativa de retorno |
| Horários, calendário e itens práticos | Pendente | Períodos, horários, calendário/férias e dúvidas operacionais frequentes |

**Referência da pesquisa:** CDI tem navegação para rotina e trata alimentação/descanso no berçário. O Galileu construiu a página hub, mas ainda não fornece as respostas.

### Estrutura e espaços `/estrutura-e-espacos`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Galeria de quatro temas | Parcial e provisória | Confirmar quais ambientes existem. Hoje são categorias temáticas e imagens mockadas, não inventário real |
| Relação entre espaço e etapa | Pendente | Dizer quais grupos usam cada ambiente e para quê; pode ser levantado em texto antes das fotos |
| Acesso/chegada | Parcial | Orientações verificadas, acessibilidade real e rota; link de contato existe |
| Visita | Alinhado | CTA existe, mas formulário ainda não envia |

**Fotos:** substituição no último lote. Antes disso, a direção pode fornecer apenas o inventário textual de espaços para evitar legendas genéricas.

## 4. Conversão, localização e dúvidas

### Matrículas `/matriculas`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Abertura + fluxo em quatro passos | Alinhado como esqueleto | Confirmar se a sequência real é essa e quem responde a cada passo |
| Links para etapas | Alinhado | Incluir idades/períodos confirmados nas referências |
| Vagas, períodos e valores | Vazio de prova | Períodos reais, modo de apresentar investimento e inclusões, validade da informação |
| Documentos, calendário, critérios | Pendente | Lista aprovada pela secretaria e momento de coleta; FAQ de disponibilidade/adaptação |
| Visita | Caminho existe | Formulário precisa de canal validado |

**Referência da pesquisa:** Vital Brazil informa grupos, projetos, períodos e investimento na página de segmento. Para o Galileu, a expectativa mínima é explicar os períodos reais e como a família recebe uma proposta detalhada, sem inventar valor.

### Agendar visita `/agendar-visita`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Benefício e expectativa da visita | Parcial | O que a família verá, com quem conversará e duração/local se a escola oferecer esses dados |
| Campos mínimos | Alinhado | Nome, telefone, e-mail opcional, etapa e mensagem; evitar dados da criança em excesso |
| Envio e confirmação | Pendente | Integração, destinatário, confirmação, prazo real de resposta e estados de erro/sucesso |
| Privacidade | Parcial | Política correspondente ao fluxo efetivamente implantado |
| Canal alternativo | Pendente | WhatsApp/telefone reais depois da validação |

**Questão prática:** vários CTAs do site conduzem a esta página, mas o botão está desativado. A arquitetura de navegação está pronta; a conversão ainda não está.

### Contato `/contato`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Endereço/rota | Parcial | Rua Miguel Sevílio, 175 foi observada em fontes públicas; confirmar endereço completo e link de mapa com a escola |
| Horário de atendimento | Pendente | Distinguir atendimento da secretaria e horário escolar |
| Telefone/WhatsApp/e-mail | Pendente | Canais oficiais confirmados; número mockado não está clicável |
| Link para visita/matrícula | Pendente | A página tem rota, mas não encaminha claramente para solicitar visita ou conhecer matrículas |

**Evidência da pesquisa:** o perfil do Google mostrou telefone e avaliações, mas são um retrato datado e não substituem confirmação da escola. Não copiar contatos de snippets diretamente para o site.

### Perguntas frequentes `/duvidas-frequentes`

| Bloco | Estado | Falta |
| --- | --- | --- |
| Seis perguntas principais | Alinhado à intenção | São respostas indiretas ou “a confirmar”; responder de forma objetiva após briefing |
| Links para etapas, rotina, matrícula, visita | Alinhado | Manter a resposta única consistente nas páginas correspondentes |
| Idade de entrada, custo, grupos Pré I/Pré II | Parcial | Essas perguntas apareceram na pesquisa e pedem respostas específicas da escola |
| Dúvidas sobre localização/acesso | Pendente | Link para contato/rota e referência local confirmada |

## 5. Editorial e páginas legais

| Página/bloco | Estado | Enriquecimento e porta de publicação |
| --- | --- | --- |
| `/blog` — índice | Estrutura pronta, todo o acervo em rascunho | Exibir apenas artigos aprovados na publicação; hoje está marcado `noindex` |
| Artigo de adaptação | Parcial | Expandir o texto com as perguntas e o processo real da escola; revisão pedagógica; evitar prazo universal ou alegação clínica |
| Artigo de introdução alimentar | Pendente para publicação | O texto atual é um roteiro de perguntas; precisa de operação real e revisão de nutricionista/pediatra para orientação de saúde |
| Artigo de segurança | Pendente para publicação | Verificar práticas e documentos com direção/responsável técnico; não prometer risco zero |
| `/privacidade` | Placeholder | Descrever coleta, finalidade, destinatários, retenção, direitos, contato e fornecedores reais; revisão de privacidade/jurídica |
| `/termos-de-uso` | Placeholder | Ajustar às funcionalidades e condições efetivas do site, com revisão jurídica |

Enquanto os artigos forem rascunhos, o site os mantém fora do RSS e do sitemap e com `noindex`; a prévia inteira também está em `noindex`. A política de privacidade e os termos ainda não são documentos prontos para lançamento. Para conteúdo de alimentação, segurança infantil e dados de crianças, seguir o [protocolo de conteúdo sensível](conteudo-sensivel-ymyl.md).

## 6. Confronto com o mapa hub-and-spoke

| Relação planejada | Situação na prévia | Ajuste |
| --- | --- | --- |
| Início → três etapas | Presente nos cartões | Adicionar diferenças reais nas âncoras e resumos |
| Início → proposta/rotina/espaços/escola/matrícula/visita/FAQ | Presente | Melhorar o conteúdo dos destinos; incluir endereço/rota na inicial |
| Etapa → proposta/rotina/espaços/matrícula/visita | Presente no template | Acrescentar links contextuais de artigo onde houver artigo aprovado |
| Proposta → três etapas | Presente | Ligar a experiências reais de cada etapa |
| Rotina → três etapas/artigo de adaptação | Presente | Artigo ainda é rascunho; evitar promover como orientação pronta |
| Escola → proposta/espaços/visita | Presente | Incluir etapas e equipe/história concretas |
| Espaços → etapas/contato/visita | Presente | Criar inventário real antes das fotos |
| Matrícula → visita/etapas/FAQ | Presente | Tornar o atendimento funcional quando canal for confirmado |
| FAQ → páginas de resposta | Presente para os temas atuais | Acrescentar idade/grupos/custo/acesso conforme respostas oficiais |
| Artigos → hubs/etapa | Parcial | Os rascunhos apontam para rotina e espaços, mas cada artigo precisa de destino específico depois da revisão |
| Contato → visita/matrícula | Ausente | Adicionar CTA e link contextual |

O mapa de links está, portanto, **majoritariamente implantado como navegação**. A fragilidade principal está na profundidade da resposta nos destinos e no fato de que a visita ainda não pode ser solicitada pelo formulário.

## 7. Fila de enriquecimento recomendada

| Ordem | Trabalho | Páginas atingidas | Insumo mínimo |
| --- | --- | --- | --- |
| 1 | Confirmar endereço, canais, idade/grupos, períodos e fluxo de visita | Início, etapas, matrícula, visita, contato, FAQ, rodapé | Direção e secretaria |
| 2 | Trocar blocos “será confirmado” por procedimentos de adaptação, alimentação, descanso, comunicação e retirada | Berçário, maternal, pré-escola, rotina, FAQ | Coordenação e responsáveis operacionais; revisão técnica onde necessário |
| 3 | Registrar proposta e um caso real por etapa, história, equipe e documentos institucionais | Proposta, escola, etapas, início | Coordenação e direção |
| 4 | Fechar valores/inclusões ou modo de solicitar proposta; integrar formulário e privacidade | Matrículas, visita, contato, privacidade | Secretaria, responsável pelo site, jurídico/privacidade |
| 5 | Revisar artigos e retirar rascunhos da inicial até aprovação | Blog, artigos, início | Coordenação, nutricionista/pediatra e responsável por segurança conforme tema |
| 6 | Substituir imagens mockadas e adicionar legendas | Início, etapas, escola, espaços e OG | Fotos e autorizações — **última etapa** |

**Critério de saída de cada bloco:** responde a uma pergunta real da família, descreve uma prática/fato do Galileu com responsável e data de aprovação, tem próximo link útil e não depende de uma foto para que o texto faça sentido. Depois disso, inserir os registros visuais.
