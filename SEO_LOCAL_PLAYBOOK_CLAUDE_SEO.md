# Playbook de SEO Local com Claude SEO

Projeto: GK Ribeiro Advocacia Trabalhista e Previdenciária  
Site: https://gkribeiro.adv.br/  
Meta: aparecer em buscas regionais por Direito Trabalhista e Previdenciário em São Paulo - SP, com foco inicial na Zona Leste, Guaianases e bairros próximos.

Última atualização: 2026-06-20

## 1. Estado da instalação

O `claude-seo` foi instalado para uso pelo Codex em:

- Skills: `~/.codex/skills/seo` e `~/.codex/skills/seo-*`
- Agentes: `~/.codex/agents/seo-*.md`
- Versão instalada: `2.2.0`
- Commit clonado: `d830cdb2ad339bb7f062339fe82228b072e98061`
- Dependências Python: `~/.codex/skills/seo/.venv`

Depois de instalar ou atualizar skills, reinicie o Codex/VS Code para garantir que `/seo` carregue a versão nova.

Para conferir a instalação:

```bash
sed -n '1,24p' ~/.codex/skills/seo/SKILL.md
find ~/.codex/skills -maxdepth 1 -type d -name 'seo*' | sort
find ~/.codex/agents -maxdepth 1 -type f -name 'seo-*.md' | sort
```

Para atualizar no futuro:

```bash
rm -rf /tmp/claude-seo-update
git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git /tmp/claude-seo-update
python3 /tmp/claude-seo-update/scripts/portability_check.py
cp -R /tmp/claude-seo-update/skills/. ~/.codex/skills/
cp /tmp/claude-seo-update/agents/seo-*.md ~/.codex/agents/
cp -R /tmp/claude-seo-update/scripts ~/.codex/skills/seo/
cp -R /tmp/claude-seo-update/schema ~/.codex/skills/seo/
cp -R /tmp/claude-seo-update/pdf ~/.codex/skills/seo/
cp -R /tmp/claude-seo-update/hooks ~/.codex/skills/seo/
cp -R /tmp/claude-seo-update/extensions ~/.codex/skills/seo/
cp /tmp/claude-seo-update/requirements.txt ~/.codex/skills/seo/requirements.txt
~/.codex/skills/seo/.venv/bin/pip install -r ~/.codex/skills/seo/requirements.txt
```

## 2. O que cada skill faz

Use esta tabela para escolher o comando certo.

| Comando | Para que serve | Quando usar |
|---|---|---|
| `/seo audit <url>` | Auditoria geral do site | Baseline, depois de mudanças grandes e revisão mensal |
| `/seo page <url>` | Análise profunda de uma página | Antes e depois de mexer em home, serviços ou artigo importante |
| `/seo technical <url>` | Crawl, indexação, segurança, mobile, CWV | Quando houver problema técnico, queda de indexação ou lentidão |
| `/seo schema <url>` | Detecta, valida e gera JSON-LD | Após criar/editar páginas, especialmente `LegalService`, `Person`, `Article` |
| `/seo content <url>` | E-E-A-T, qualidade e confiança | Em páginas jurídicas, artigos e páginas de serviço |
| `/seo content-brief <tema>` | Briefing de conteúdo com keywords, outline e links internos | Antes de escrever qualquer artigo ou página local |
| `/seo geo <url>` | AI Overviews, ChatGPT Search, Perplexity, citabilidade | Para páginas que devem virar resposta de IA |
| `/seo local <url>` | SEO local do site, NAP, GBP, citações, reviews | Rotina principal para negócio local |
| `/seo maps ...` | Maps, GBP, NAP, concorrentes, reviews, geo-grid | GBP e ranking no mapa. Parte avançada usa DataForSEO |
| `/seo sitemap <url>` | Valida sitemap | Depois de publicar páginas novas |
| `/seo google setup` | Configura APIs do Google | Para usar GSC, PageSpeed, CrUX, GA4 e Keyword Planner |
| `/seo google gsc <property>` | Consulta Search Console | Descobrir termos reais, posições e oportunidades |
| `/seo google inspect <url>` | Inspeção de indexação | Conferir se uma página foi rastreada/indexada |
| `/seo google pagespeed <url>` | PageSpeed + CrUX | Medir performance real e lab |
| `/seo cluster plan <keyword>` | Cria arquitetura hub-and-spoke | Planejar clusters como Trabalhista, INSS, BPC/LOAS, bairros |
| `/seo drift baseline <url>` | Snapshot antes de mudanças | Antes de grandes edições |
| `/seo drift compare <url>` | Compara depois de mudanças | Depois de publicar e indexar alterações |
| `/seo dataforseo ...` | Dados pagos de SERP, keywords, maps, IA | Opcional, baixo custo se usado com limites |

## 3. Sequência recomendada

### Fase 0 - Preparação

1. Reinicie Codex/VS Code.
2. Confirme que `/seo` usa `claude-seo` v2.2.0.
3. Confirme que o site publicado tem:
   - `robots.txt`
   - `sitemap.xml`
   - `llms.txt`
   - Google Analytics
   - Search Console
   - Google Business Profile criado e verificado

Prompt:

```text
/seo
```

Se aparecer a ajuda da suíte, está carregado.

### Fase 1 - Baseline do site

Rode:

```text
/seo audit https://gkribeiro.adv.br/
```

Peça o relatório sem editar nada:

```text
Use o claude-seo. Faça uma auditoria completa de https://gkribeiro.adv.br/.
Não altere arquivos. Gere relatório, score, prioridades e explique dependências.
Foco: SEO local para advocacia trabalhista e previdenciária em São Paulo - SP.
```

Depois da auditoria, corrija nesta ordem:

1. Problemas de indexação: `robots`, `canonical`, sitemap, redirects, status code.
2. Schema: `LegalService`, `Organization`, `Person`, `WebSite`, `WebPage`, `Article`.
3. NAP: nome, endereço e telefone iguais no site e no GBP.
4. Titles e metas com serviço + cidade.
5. Conteúdo fraco ou sem autoria.
6. Imagens sem dimensão, alt ou compressão.
7. Blocos citáveis para IA.

Prompt de correção:

```text
Use o relatório mais recente do claude-seo.
Implemente apenas correções Critical e High de baixo risco.
Não mude design nem conteúdo jurídico sensível sem me mostrar antes.
Priorize indexação, schema, NAP, titles/metas, links internos e llms.txt.
```

### Fase 2 - SEO local do site

Rode:

```text
/seo local https://gkribeiro.adv.br/
```

Objetivo:

- Conferir NAP no HTML e schema.
- Ver se o site está claramente classificado como negócio local jurídico.
- Apontar lacunas de página de localização.
- Validar páginas de serviço.
- Checar risco de páginas locais duplicadas.

Correções típicas:

1. NAP completo no rodapé e contato.
2. Página `localizacao.html` com endereço, mapa, instruções e áreas atendidas.
3. `LegalService` schema com endereço e `areaServed`.
4. Links internos: home -> trabalhista/previdenciário/localização/blog/contato.
5. Conteúdo local útil, não só repetição de bairro.

Prompt:

```text
/seo local https://gkribeiro.adv.br/

Analise como escritório jurídico local.
Priorize São Paulo - SP, Zona Leste, Guaianases e bairros próximos.
Não recomende doorway pages. Se sugerir página de bairro, explique qual conteúdo único ela precisa ter.
```

### Fase 3 - Google Business Profile

O site ajuda, mas o mapa depende muito do GBP.

Faça manualmente no GBP:

1. Categoria principal: escolher a categoria mais próxima da busca principal. Se a prioridade for trabalhista, testar categoria ligada a advogado trabalhista, se disponível.
2. Categorias secundárias: advocacia, previdenciário ou correlatas, se existirem no painel.
3. Descrição: objetiva, sem promessa de resultado.
4. Serviços: rescisão, horas extras, FGTS, vínculo, consultoria trabalhista, aposentadoria, benefício negado, BPC/LOAS, benefício por incapacidade, revisão.
5. Fotos: logo, foto profissional da advogada, imagens reais do local quando possível.
6. Link do site com UTM:

```text
https://gkribeiro.adv.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp
```

Depois rode:

```text
/seo maps nap "GK Ribeiro Advocacia Trabalhista e Previdenciária"
/seo maps competitors "advogada trabalhista Guaianases São Paulo"
```

Sem DataForSEO, o maps roda em modo free/limitado. Com DataForSEO, libera GBP audit, reviews e geo-grid.

### Fase 4 - Dados reais do Google

Configure:

```text
/seo google setup
```

Ordem de valor:

1. Tier 0: API key para PageSpeed, CrUX, YouTube e entidades.
2. Tier 1: Search Console para queries, páginas, inspeção e sitemap.
3. Tier 2: GA4 para landing pages orgânicas.
4. Tier 3: Google Ads/Keyword Planner para volume de keywords.

Depois rode mensalmente:

```text
/seo google gsc sc-domain:gkribeiro.adv.br
/seo google sitemaps sc-domain:gkribeiro.adv.br
/seo google pagespeed https://gkribeiro.adv.br/
/seo google inspect https://gkribeiro.adv.br/trabalhista.html
```

Use GSC para encontrar oportunidades reais:

- Queries com muita impressão e posição 4-15: otimizar página existente.
- Queries com posição 16-40: criar artigo ou seção.
- Queries com CTR baixo: melhorar title/meta.
- Queries com bairro + serviço: criar conteúdo local se houver intenção real.

### Fase 5 - Arquitetura de conteúdo local

Antes de sair escrevendo posts, crie clusters.

Rode:

```text
/seo cluster plan "advogada trabalhista em Guaianases"
/seo cluster plan "advogada previdenciária em São Paulo"
/seo cluster plan "benefício negado INSS São Paulo"
```

Estrutura inicial recomendada:

1. Pilar trabalhista
   - Página principal: `trabalhista.html`
   - Spokes:
     - `blog/fui-demitido-direitos.html`
     - `blog/trabalhei-sem-registro.html`
     - artigo sobre horas extras
     - artigo sobre FGTS
     - artigo sobre motorista de aplicativo
     - artigo sobre empregada doméstica

2. Pilar previdenciário
   - Página principal: `previdenciario.html`
   - Spokes:
     - `blog/inss-negou-beneficio.html`
     - `blog/bpc-loas.html`
     - artigo sobre aposentadoria por idade
     - artigo sobre benefício por incapacidade
     - artigo sobre pensão por morte
     - artigo sobre revisão

3. Pilar local
   - Página principal: `localizacao.html`
   - Spokes possíveis, apenas se houver conteúdo único:
     - advogada trabalhista em Guaianases
     - advogada previdenciária em Guaianases
     - advogada trabalhista na Zona Leste
     - atendimento jurídico no Centro de São Paulo

Regra de ouro: uma página local só deve existir se tiver conteúdo próprio. Trocar "Guaianases" por "Itaquera" no mesmo texto é risco de doorway page.

### Fase 6 - Brief antes de escrever

Para cada artigo ou página, rode:

```text
/seo content-brief "motorista de aplicativo tem direito a férias"
```

Peça o briefing com recorte local:

```text
Crie um content brief para o site gkribeiro.adv.br.
Tema: motorista de aplicativo tem direito a férias?
Público: trabalhadores de São Paulo, Zona Leste e Guaianases.
Objetivo: explicar direitos, documentos úteis e quando buscar orientação trabalhista.
Não prometa resultado. Use linguagem informativa e compatível com a OAB.
Inclua H1, slug, title, meta description, outline, keywords secundárias, links internos e bloco de 134-167 palavras para AI Overviews.
```

Depois escreva:

```text
Com base no brief aprovado, escreva o artigo em HTML seguindo o padrão dos arquivos em /blog.
Inclua autoria da Dra. Greice Kelli Ribeiro, data, links internos, CTA discreto para WhatsApp e schema Article.
Não invente jurisprudência, dados ou decisão. Se precisar de lei ou notícia atual, pesquise fonte oficial antes.
```

### Fase 7 - GEO e respostas de IA

Depois de publicar página/artigo:

```text
/seo geo https://gkribeiro.adv.br/blog/nome-do-artigo.html
```

Melhorias que normalmente funcionam:

- H2 em formato de pergunta.
- Resposta direta nos primeiros 40-60 termos da seção.
- Bloco auto-contido com 134-167 palavras.
- Autor com OAB e área.
- Data de publicação e atualização.
- Links para fontes oficiais.
- Lista de documentos.
- CTA discreto: "fale para análise do caso concreto".

Exemplo de ângulo que evita competir diretamente com G1/ConJur:

Ruim:

```text
Nova lei sobre motoristas de aplicativo
```

Melhor:

```text
Motorista de aplicativo em São Paulo pode ter direitos trabalhistas? Documentos e pontos de atenção
```

O segundo mira a dúvida prática e a intenção de contratar orientação, não a notícia genérica.

### Fase 8 - Publicação e validação

Após publicar:

```text
/seo page https://gkribeiro.adv.br/blog/nome-do-artigo.html
/seo schema https://gkribeiro.adv.br/blog/nome-do-artigo.html
/seo sitemap https://gkribeiro.adv.br/sitemap.xml
/seo google inspect https://gkribeiro.adv.br/blog/nome-do-artigo.html
```

Se tudo estiver ok:

1. Atualize `sitemap.xml`.
2. Envie no Search Console.
3. Compartilhe no GBP como post, se fizer sentido.
4. Compartilhe no Instagram com resumo curto.
5. Linke o novo artigo a partir da página pilar relevante.

### Fase 9 - Monitoramento e drift

Antes de grandes mudanças:

```text
/seo drift baseline https://gkribeiro.adv.br/
```

Depois de publicar mudanças:

```text
/seo drift compare https://gkribeiro.adv.br/
```

Rotina mensal:

```text
/seo audit https://gkribeiro.adv.br/
/seo local https://gkribeiro.adv.br/
/seo google gsc sc-domain:gkribeiro.adv.br
/seo drift compare https://gkribeiro.adv.br/
```

## 4. Automação com baixo custo

Prioridade: use dados gratuitos primeiro.

### Camada gratuita

1. Google Search Console
   - Melhor fonte para termos reais.
   - Use para achar consultas locais e páginas com potencial.

2. GA4
   - Mede quais páginas viram contato.
   - Configure eventos para clique em WhatsApp, telefone, e-mail e rota.

3. PageSpeed/CrUX
   - API grátis para performance.

4. Google Trends e fontes oficiais
   - Bom para pauta, mas não substitui GSC.

### Camada paga barata

DataForSEO é o melhor complemento se você quer automação com controle de custo.

Instalação da extensão, quando quiser:

```bash
cd ~/.codex/skills/seo
./extensions/dataforseo/install.sh
```

Depois configure limite baixo:

```text
/seo dataforseo costs config --mode threshold --threshold 0.50
```

Uso recomendado:

```text
/seo dataforseo keywords "advogada trabalhista Guaianases"
/seo dataforseo volume "advogada trabalhista guaianases, advogado trabalhista zona leste, advogado previdenciario guaianases"
/seo dataforseo serp "advogada trabalhista Guaianases"
/seo dataforseo listings "advogada trabalhista Guaianases"
/seo dataforseo ai-scrape "qual advogado trabalhista em Guaianases?"
```

Não deixe rodando sem orçamento. Melhor rotina:

- Semanal: 10-30 keywords novas.
- Mensal: 3-5 SERPs locais.
- Mensal: 1 geo-grid para a keyword principal, se DataForSEO Maps estiver ativo.
- Mensal: 1 checagem de AI mentions.

### O que automatizar

- Coleta de queries do Search Console.
- Lista de oportunidades por posição.
- Briefs de conteúdo.
- Auditoria técnica mensal.
- Drift compare.
- Checagem de sitemap e indexação.
- Ideias de posts do GBP.

### O que não automatizar 100%

- Publicação de conteúdo jurídico.
- Interpretação de notícia recente.
- Conclusão sobre direito aplicável.
- Respostas a avaliações.
- Promessas de resultado.
- Captação direta agressiva.

Sempre revise com a advogada antes de publicar.

## 5. Estratégia para bairros

Não tente rankear para todos os bairros de uma vez. Comece por proximidade e intenção.

Prioridade inicial:

1. Guaianases
2. Zona Leste
3. Cidade Tiradentes
4. Itaquera
5. São Miguel Paulista
6. Artur Alvim
7. Centro de São Paulo, por causa do endereço complementar

Use bairros de três formas:

1. Página local forte
   - Exemplo: `advogada trabalhista em Guaianases`
   - Só se tiver texto único, rota, atendimento real, dúvidas locais e links úteis.

2. Seções dentro de páginas existentes
   - "Atendimento trabalhista para Guaianases e Zona Leste"
   - Menos risco que criar muitas páginas finas.

3. Artigos com intenção prática
   - "Motorista de aplicativo em São Paulo: quais documentos guardar em uma dúvida trabalhista?"
   - O bairro entra como contexto de atendimento, não como keyword forçada.

Evite:

- Criar 20 páginas iguais de bairros.
- Colocar bairro em todo parágrafo.
- Citar bairro em notícia sem relação com atendimento.
- Prometer atendimento presencial imediato sem confirmar agenda.

## 6. Como transformar notícia em conteúdo que ranqueia

Notícias de ConJur, G1, TST, TRT-2, INSS e Diário Oficial podem virar pauta. Elas não devem ser republicadas.

Fluxo certo:

1. Encontrar a notícia.
2. Confirmar em fonte primária sempre que possível:
   - lei
   - tribunal
   - INSS
   - TST
   - TRT-2
   - Diário Oficial
3. Criar um artigo explicativo original.
4. Linkar para a fonte.
5. Usar no máximo pequenos trechos citados, quando necessário.
6. Adicionar análise prática da Dra. Greice.
7. Finalizar com documentos úteis e quando buscar orientação.

Modelo de pauta:

```text
Título: Motorista de aplicativo pode ter vínculo de emprego? Entenda os pontos de atenção
Público: motoristas em São Paulo e Zona Leste
Busca-alvo: motorista de aplicativo direitos trabalhistas
Intenção: entender se vale procurar orientação
Ângulo local: atendimento em São Paulo - SP, Guaianases e online
Conteúdo único: checklist de documentos, perguntas para análise, riscos de prazo, explicação sem promessa
Fonte: decisão/notícia linkada
CTA: "A análise depende dos documentos e da rotina real de trabalho."
```

O objetivo não é concorrer com ConJur como portal de notícia. O objetivo é responder melhor a pessoa que pesquisou:

- "motorista de app tem direito trabalhista"
- "trabalhei sem registro em guaianases"
- "fui demitido quais documentos separar"
- "inss negou benefício o que fazer"
- "advogado trabalhista perto de mim zona leste"

## 7. Produção de textos com keywords sem parecer spam

Para cada página/artigo:

1. Defina uma keyword primária.
2. Defina 5-8 variações secundárias.
3. Use a keyword primária em:
   - title
   - H1
   - slug
   - meta description
   - primeiro parágrafo
   - um alt de imagem, se houver imagem relevante
4. Use variações naturalmente nos H2/H3.
5. Crie um bloco de resposta direta.
6. Inclua checklist, documentos, prazos e "quando buscar orientação".
7. Linke para páginas internas.
8. Coloque autoria e data.
9. Revise juridicamente.

Prompt pronto:

```text
Crie um artigo para o blog da GK Ribeiro.
Tema: [tema]
Keyword primária: [keyword]
Keywords secundárias: [lista]
Local: São Paulo - SP, Zona Leste, Guaianases quando natural.
Público: pessoa leiga que quer entender se deve procurar orientação jurídica.
Tom: informativo, claro, sem promessa de resultado e compatível com a OAB.
Estrutura:
- H1 com keyword
- intro direta
- bloco de resposta de 134-167 palavras
- H2 em perguntas
- checklist de documentos
- quando procurar orientação
- links internos
- CTA discreto
- schema Article
Não invente leis, decisões, estatísticas ou prazos. Se precisar de dado atual, peça pesquisa em fonte oficial.
```

## 8. Calendário inicial de conteúdo

### Mês 1 - Base local e serviços

1. Melhorar home, trabalhista, previdenciário, localização e contato.
2. GBP completo.
3. Página/artigo: `advogada trabalhista em Guaianases`.
4. Artigo: `trabalhei sem registro: documentos que ajudam na análise`.
5. Artigo: `INSS negou benefício: o que observar antes de recorrer`.

### Mês 2 - Trabalhista por situação

1. Motorista de aplicativo e vínculo.
2. Horas extras e controle de jornada.
3. FGTS não depositado.
4. Demissão sem justa causa.
5. Assédio moral no trabalho.

### Mês 3 - Previdenciário por benefício

1. BPC/LOAS.
2. Benefício por incapacidade.
3. Aposentadoria por idade.
4. Pensão por morte.
5. Revisão de benefício.

### Mês 4 - Autoridade e atualização

1. Atualizar artigos com dados do GSC.
2. Publicar comentários sobre decisões/notícias relevantes.
3. Criar 1 guia pilar com links para todos os artigos trabalhistas.
4. Criar 1 guia pilar com links para todos os artigos previdenciários.

## 9. Rotina semanal

Toda segunda:

```text
/seo google gsc sc-domain:gkribeiro.adv.br
```

Peça:

```text
Liste 10 oportunidades de conteúdo ou otimização com base no GSC:
- posição 4-15 com alta impressão
- posição 16-40 com intenção clara
- termos com bairro
- termos com "perto de mim"
- termos sobre INSS, demissão, FGTS, horas extras, BPC/LOAS
Classifique em atualizar página existente ou criar novo conteúdo.
```

Toda quarta:

```text
/seo content-brief "[tema aprovado]"
```

Toda sexta:

1. Revisar texto com a advogada.
2. Publicar.
3. Atualizar sitemap.
4. Inspecionar URL no GSC.
5. Criar post curto no GBP.

## 10. Métricas que importam

No começo, não olhe só clique. Olhe sinais de progresso.

1. Search Console
   - impressões por página
   - queries locais
   - posição média por serviço
   - CTR por title/meta

2. GBP
   - visualizações
   - cliques no site
   - ligações
   - pedidos de rota
   - avaliações novas
   - termos de descoberta

3. GA4
   - cliques no WhatsApp
   - cliques em telefone
   - páginas que geram contato

4. Conteúdo
   - páginas indexadas
   - artigos com impressão
   - artigos sem tração após 60-90 dias
   - links internos por página

## 11. Cuidados jurídicos, OAB e direitos autorais

Marketing jurídico é permitido no Brasil, mas precisa respeitar limites éticos. O Provimento 205/2021 do CFOAB trata da publicidade e informação da advocacia e permite marketing jurídico compatível com o Estatuto, Código de Ética e normas aplicáveis. Fontes oficiais:

- https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021
- https://marketingjuridico.oab.org.br/
- https://www.oab.org.br/noticia/62451/cartilha-oferece-esclarecimentos-e-diretrizes-eticas-sobre-publicidade-para-advogados

Use como regra prática:

Pode:

- conteúdo informativo
- artigos educativos
- dados objetivos do escritório
- área de atuação
- contato
- currículo verdadeiro
- posts no GBP
- comentários técnicos sobre notícias

Evite:

- "garantimos seu direito"
- "ganhe sua ação"
- "a melhor advogada"
- promessa de prazo ou resultado
- comparação agressiva com outros escritórios
- captação direta insistente
- divulgar caso concreto sem autorização
- copiar notícia ou artigo de terceiros
- usar review como prova de resultado

Sobre notícias:

- Não copie ConJur, G1 ou qualquer portal.
- Use como inspiração de pauta.
- Linke para a fonte.
- Escreva análise original.
- Prefira confirmar em fonte oficial.
- Não use texto gerado automaticamente sem revisão.

## 12. Primeiros comandos para usar agora

Depois de reiniciar Codex:

```text
/seo audit https://gkribeiro.adv.br/
```

```text
/seo local https://gkribeiro.adv.br/
```

```text
/seo schema https://gkribeiro.adv.br/
```

```text
/seo geo https://gkribeiro.adv.br/
```

```text
/seo google setup
```

Depois de configurar Google:

```text
/seo google gsc sc-domain:gkribeiro.adv.br
```

Primeiro cluster:

```text
/seo cluster plan "advogada trabalhista em Guaianases"
```

Primeiro brief:

```text
/seo content-brief "motorista de aplicativo tem direito trabalhista em São Paulo"
```

Primeira rotina de comparação:

```text
/seo drift baseline https://gkribeiro.adv.br/
```
