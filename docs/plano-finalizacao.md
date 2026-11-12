# Plano de finalização do site — O Pequeno Galileu

**Estado em 10/11/2026:** prévia publicada no repositório, ainda com dados provisórios. `preview` está ativo, `contactReady` está desativado, o formulário de visita não transmite dados e os artigos seguem como rascunhos. A arquitetura e os principais caminhos internos já estão implementados.

Este plano organiza a execução. As respostas detalhadas e os responsáveis da escola devem ser registrados no [briefing](briefing-informacoes-galileu.md); os riscos e lacunas por página estão na [auditoria](auditoria-blocos-e-enriquecimento.md).

## Ordem de execução

| Etapa | Ação | Responsável principal | Depende de | Concluída quando |
| --- | --- | --- | --- | --- |
| 1. Fechar fatos básicos | Confirmar nome público, endereço completo, telefone, WhatsApp, e-mail, horários, mapa, responsável pelos pedidos de visita e prazo de resposta. Registrar quem aprovou e a data. | Direção e secretaria | Nenhuma | Os campos de identificação e atendimento do briefing estão preenchidos e aprovados. |
| 2. Confirmar oferta e ingresso | Validar idades e nomes dos grupos, períodos, vagas, calendário, etapas da matrícula, documentos e como a escola apresenta valores e inclusões. | Secretaria e coordenação | Etapa 1 pode ocorrer em paralelo | Existe uma única resposta oficial para cada dúvida e não há faixa etária ou condição comercial provisória no site. |
| 3. Aprovar conteúdo pedagógico e operacional | Descrever adaptação por etapa, rotina, alimentação, descanso, higiene, comunicação com a família, retirada, desfralde, proposta pedagógica e um exemplo real por etapa. Validar história, equipe e fatos institucionais publicáveis. | Coordenação e direção; responsáveis técnicos revisam temas de saúde e segurança | Acesso a quem executa os procedimentos | As páginas `/bercario`, `/maternal`, `/pre-escola`, `/rotina-e-cuidados`, `/proposta-pedagogica` e `/a-escola` respondem com práticas reais, aprovadas e sem promessas não comprovadas. |
| 4. Substituir os dados provisórios | Atualizar os dados centrais em `src/data/site.ts` e propagar as mesmas respostas para início, etapas, matrículas, visita, contato, FAQ, rodapé e dados estruturados. | Desenvolvimento, com validação da escola | Etapas 1 e 2; etapa 3 para textos correspondentes | Não há divergência entre páginas, números de telefone, endereços, idades, horários ou instruções de ingresso. |
| 5. Ativar contato e visita | Escolher canal e destinatário do formulário; implementar envio, confirmação, falha e prazo de resposta. Usar apenas os dados necessários para responder ao pedido. Tornar telefone, WhatsApp, e-mail e rota funcionais após confirmação. | Responsável pelo site e secretaria | Etapa 1; etapa 6 para o texto de privacidade | Um pedido de teste chega ao destino correto, a família recebe confirmação e os canais alternativos funcionam. |
| 6. Fechar privacidade e termos | Descrever a coleta e o fluxo real de dados, destinatários, retenção, fornecedores, direitos e contato. Revisar política e termos conforme as funcionalidades efetivamente publicadas. Decidir se haverá analytics, cookies ou CRM. | Responsável por privacidade/jurídico e responsável pelo site | Definição do formulário e ferramentas | As páginas legais correspondem ao funcionamento real do site e foram aprovadas pelos responsáveis. |
| 7. Decidir o acervo editorial | Aprovar, revisar ou retirar cada artigo. Corrigir autoria e datas; conteúdo de alimentação, saúde ou segurança precisa de revisão competente. Até a aprovação, manter rascunhos fora da inicial, RSS e sitemap e com `noindex`. | Coordenação e revisores por assunto | Informações oficiais da escola | Só artigos aprovados aparecem como publicados e indexáveis; os demais continuam claramente em rascunho ou são removidos da navegação pública. |
| 8. Finalizar marca e imagens | Manter o logo indicado pela escola e aplicar o ajuste de contraste aprovado nas letras. Receber fotos reais, confirmar autorizações, legendar, criar texto alternativo e otimizar. Substituir os mocks na inicial, etapas, escola, espaços e imagem social. | Direção aprova; desenvolvimento implementa | Inventário dos ambientes e autorizações de uso | Não restam imagens ilustrativas apresentadas como instalações reais; cada imagem publicada tem uso autorizado, legenda correta e texto alternativo. |
| 9. Revisar a experiência completa | Conferir menus, links, páginas, CTA, formulário, estados de erro, acessibilidade básica, telas móveis e desktop, imagens, títulos, descrições, canonical, schema, robots, sitemap e RSS. Verificar URLs antigas e redirecionamentos, se disponíveis. | Desenvolvimento | Etapas 4 a 8 | A lista de rotas está sem erros, os caminhos de visita funcionam e a experiência foi validada nos tamanhos de tela acordados. |
| 10. Aprovar e lançar | Registrar aprovação final da direção; desativar a prévia, habilitar os canais confirmados, revisar domínio e configuração de publicação, publicar e conferir a versão pública. | Direção aprova; responsável pelo site publica | Etapas 1 a 9 | O site público não exibe avisos provisórios, os canais estão ativos, as páginas aprovadas podem ser indexadas e a publicação foi conferida no domínio oficial. |

## Próximo ciclo de trabalho

1. **Reunião/rodada com a escola:** preencher primeiro as etapas 1 e 2 do briefing; iniciar a etapa 3 com coordenação e responsáveis operacionais.
2. **Implementação por lote:** após cada aprovação, atualizar todas as páginas que dependem daquele fato de uma só vez e revisar a prévia local.
3. **Integração do atendimento e revisão legal:** decidir formulário, destinatário, confirmação, retenção e responsável por privacidade antes de coletar qualquer dado.
4. **Lote final de mídia:** receber logo oficial e fotos autorizadas depois de confirmar o que cada espaço representa.
5. **Revisão de lançamento:** percorrer a etapa 9, obter aprovação explícita da direção e só então cumprir a etapa 10.

## Diretriz de revitalização visual e editorial

Na revisão, remover elementos que pareçam genéricos, artificiais ou intercambiáveis com qualquer escola:

- Priorizar fotos reais da escola e da equipe, com autorização, legenda e contexto confirmados. Evitar banco de imagens ou novas ilustrações geradas como substituto de evidência local.
- Manter o logo indicado pela escola e escurecer para preto as letras apagadas, sem alterar o menino nem a composição da marca.
- Reescrever frases abstratas e promessas amplas, como “presença que acolhe” ou “uma escola na escala da infância”, com fatos, cenas e expressões que a equipe realmente usa.
- Retirar da home os cartões de artigos ainda marcados como rascunho. Só recolocá-los após revisão e aprovação editorial.
- Preservar a estrutura e a tipografia que funcionam; usar imagens, cores e detalhes visuais para contar algo específico do Galileu, sem adicionar ornamentos apenas para preencher espaço.

**Critério de aprovação:** cada imagem ou frase precisa mostrar algo verdadeiro e particular da escola, ajudar a família a entender a experiência ou facilitar o próximo passo. Se não cumprir uma dessas funções, remover ou simplificar.

## Bloqueios que impedem o lançamento

- Contatos, endereço, horários, idades, turmas, períodos ou matrícula sem confirmação.
- Formulário que não envia, não confirma ou não tem destinatário definido.
- Política de privacidade e termos incompatíveis com o fluxo real.
- Conteúdo provisório, artigo não revisado ou promessa sem evidência.
- Foto sem autorização ou imagem que não represente o ambiente descrito.
- Prévia `noindex` ativa ou páginas aprovadas bloqueadas de indexação após a publicação.

## Itens que podem avançar enquanto a escola responde

- Revisão de responsividade, navegação por teclado e consistência dos componentes.
- Organização das respostas aprovadas numa fonte única para evitar divergência entre páginas.
- Preparação do formulário e dos estados de interface sem ativar envio de dados.
- Preparação da lista de rotas e do roteiro de revisão final.

**Critério geral de conclusão:** cada informação factual tem responsável e aprovação; os caminhos de contato e visita funcionam; as páginas legais e conteúdos sensíveis foram revisados; os ativos visuais são oficiais ou autorizados; e a versão pública foi conferida depois de retirar o estado de prévia.
